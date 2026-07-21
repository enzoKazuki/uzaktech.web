"use client"

import { ComponentPropsWithoutRef, createContext, FC, ReactNode, SubmitEvent, useContext, useRef } from 'react';

type Validator = () => boolean;

export type FormContextType = {
	register(validator: Validator): () => void
}

export const FormContext = createContext<FormContextType | null>(null);

export const FormProvider: FC<{children: ReactNode, onSubmit?: (e: SubmitEvent) => void} & ComponentPropsWithoutRef<"form">> = ({ children, onSubmit, ...props }) => {
	const validators = useRef(new Set<Validator>());

	const register = (validator: Validator) => {
		validators.current.add(validator);

		return () => {
			validators.current.delete(validator);
		}
	}

	const handleSubmit = (e: SubmitEvent) => {
		e.preventDefault();

		let isValid = true;

		for (const validate of validators.current) {
			isValid = validate() && isValid;
		}

		if (!isValid) return;

		onSubmit?.(e);
	}

	return (
		<FormContext.Provider value={{register}}>
			<form onSubmit={handleSubmit} {...props}>
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