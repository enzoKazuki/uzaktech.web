"use client"

import { ChangeEvent, ComponentPropsWithoutRef, createContext, FC, ReactNode, SubmitEvent, useContext, useEffect, useRef, useState } from 'react';

type Validator = () => boolean;

export type FormContextType = {
	register(validator: Validator): () => void,
	saveValue: (fd: FormData | null) => void
}

export type FormProviderType = {
	children: ReactNode, 
	disableOnEmptiness?: boolean,
	checkSavedValue?: (newValue: Object, oldValue: Object | null) => void,
	toSaveValue?: boolean
} & ComponentPropsWithoutRef<"form">;

export const FormContext = createContext<FormContextType | null>(null);

export const FormProvider: FC<FormProviderType> = ({ children, onSubmit, disableOnEmptiness, checkSavedValue, toSaveValue, ...props }) => {
	const validators = useRef(new Set<Validator>());

	const [savedValues, setSavedValues] = useState<Object | null>(null);
	const [savedSubmitValues, setSavedSubmitValues] = useState<Object | null>(null);

	const register = (validator: Validator) => {
		validators.current.add(validator);

		return () => {
			validators.current.delete(validator);
		}
	}

	const disableButton = (form: HTMLFormElement, justDisable?: boolean) => {
		const button = form.querySelector('[type="submit"]');

		if (!form) return;

		const formData = new FormData(form);

		const allFieldsEmpty = [...formData.values()].every(value => String(value).trim() === "");

		if (allFieldsEmpty || justDisable) button!.setAttribute("disabled", "true");
		else button!.removeAttribute("disabled");
	}

	const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
		const form = e.currentTarget;
		const newFormObject = Object.fromEntries(new FormData(form).entries());

		if (disableOnEmptiness) disableButton(form);
		
		checkSavedValue?.(newFormObject, savedValues);

		props.onChange?.(e);
	}

	const handleReset = (e: ChangeEvent<HTMLFormElement>) => {
		const form = e.currentTarget;

		if (disableOnEmptiness) disableButton(form, true);
		
		setSavedValues(null);

		props.onReset?.(e);
	}

	const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();

		let isValid = true;

		for (const validate of validators.current) {
			isValid = validate() && isValid;
		}

		if (!isValid) return;

		onSubmit?.(e);

		setSavedSubmitValues(Object.fromEntries(new FormData(e.currentTarget).entries()));
	}

	useEffect(() => {
		if (toSaveValue) {
			setSavedValues(savedSubmitValues);
		}
	}, [toSaveValue, savedSubmitValues])

	return (
		<FormContext.Provider value={{register, saveValue: setSavedValues}}>
			<form onSubmit={handleSubmit} onReset={handleReset} onChange={handleChange} {...props}>
				{children}
			</form>
		</FormContext.Provider>
	);
};

export const useForm = () => {
	const context = useContext(FormContext);

	if (!context) throw new Error("useForm must be used within an FormProvider");
	else return context;
};