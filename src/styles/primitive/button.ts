import styled from "styled-components";
import { cornerBox } from "./box";
import { css } from "styled-components";

export type ButtonProps = {
	$style?: "ghost_link" | undefined
};

export const buttonStyle = (p: ButtonProps) => css`
	display: inline-flex;
	align-items: center;
	padding: 10px 16px;
	font-weight: 530;
	font-size: ${(p) => p.theme.fontSize.xv};
	position: relative;
	height: 37px;
	box-sizing: border-box;
	user-select: none;

	@media (max-width: 450px) 
	{
		height: 33px;
		padding: 7px 13px;
	}

	${p.$style == undefined ? css`
		color: #fff;
		text-decoration: none;
		background-color: ${(p) => `rgba(${p.theme.colorsRgbC.boxShadow}, 0.93)`};
		
		&:hover 
		{
			${(p) => cornerBox("1px", "#fff", undefined, p.theme, 3)};
		}
	` : p.$style == "ghost_link" ? css`
		color: ${(p) => p.theme.colors.text};
		font-weight: 530;
		box-shadow: inset 0 0 0 1px ${(p) => p.theme.colors.boxShadow};
		text-decoration: none;
		
		&:hover
		{
			background-color: ${(p) => `rgba(${p.theme.colorsRgbC.text}, 0.03)`};
			text-decoration: underline;
		}
	` : css``}
`;

export const Button = styled.button<ButtonProps>`
	${(p) => buttonStyle(p)};
`;
