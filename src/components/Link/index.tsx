"use client";

import * as s from "./styles";
import { ButtonProps } from "@/styles/primitive/button";
import { useRouter } from "next/navigation";
import { ComponentPropsWithoutRef, MouseEvent, ReactNode } from "react";

export type LinkProps = {
	clientRender?: boolean,
	children?: ReactNode,
	blockDown?: boolean,
	poserStyle?: boolean,
	notStyle?: boolean,
	cta?: boolean,
	ctaProps?: ButtonProps
} & ComponentPropsWithoutRef<"a">;

export type LinkPoserProps = {
	children?: ReactNode
} & ComponentPropsWithoutRef<"span">;

export const Link = ({ clientRender, children, blockDown, poserStyle, notStyle, cta, ctaProps, ...props }: LinkProps) => { 
	const navr = useRouter();

	const clickHandle = (e: MouseEvent) => {
		if (clientRender && props.href != null) {
			e.preventDefault();

			if (e.ctrlKey) return window.open(props.href);

			return navr.push(props.href);
		}
	}

	const downHandle = (e: MouseEvent) => blockDown ? e.preventDefault() : {};
	
	return cta ? (
		<s.Cta onMouseDown={downHandle} onClick={clickHandle} {...ctaProps} {...props}>
			{children}
		</s.Cta>
	) : (
		<a onMouseDown={downHandle} onClick={clickHandle} {...props}>
			{children}
		</a>
	)
}

export const Cta = (props: LinkProps) => {
	return <Link {...props} cta={true}>{props.children}</Link>
}