import { ButtonProps, buttonStyle } from "@/styles/primitive/button";
import styled from "styled-components";
import { css } from "styled-components";

export const Cta = styled.a<ButtonProps>`
	${(p) => buttonStyle(p)};
`;

export const Link = styled.a<{$notStyle?: boolean, $poserStyle?: boolean}>`
	color: ${(p) => p.theme.colors.text};
	font-weight: 500;

	${(p) => p.$notStyle && css`
		text-decoration: none;
		appearance: none;
	`}

	${(p) => p.$poserStyle && css`
		text-decoration: none;

		&:hover 
		{
			text-decoration: underline;
		}
	`}
`;