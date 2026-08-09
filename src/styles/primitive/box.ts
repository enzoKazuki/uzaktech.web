"use client";

import styled, { css } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";

export type BoxProps = {
	$padding?: string;
	$maxWidth?: string;
	$maxHeight?: string;
	$minWidth?: string;
	$width?: string;
	$height?: string;
	$corner?: {
		borderSize: string,
		color?: string,
		size?: string,
		pad?: number
	};
	$cornerP?: "none" | "default",
	$shadow?: boolean,
	$overflow?: string,
	$aspectRatio?: string,
	$margin?: string,
	$fDirection?: string,
	$display?: string,
	$gap?: string,
	$border?: string,
	$ai?: string,
	$jc?: string
}

export const cornerBox = (borderSize: string, color: string | undefined, size: string | undefined, theme: DefaultTheme, pad?: number) => css`
	&::after 
	{
		content: "";
		position: absolute;
		top: calc(${borderSize} + ${pad ?? 0}px);
		left: calc(${borderSize} + ${pad ?? 0}px);
		height: ${size ?? "15px"};
		aspect-ratio: 1;
		box-shadow: calc(${borderSize} * -1) calc(${borderSize} * -1) 0 0 ${color ?? theme.colors.boxShadow};
	}

	&::before
	{
		content: "";
		position: absolute;
		bottom: calc(${borderSize} + ${pad ?? 0}px);
		right: calc(${borderSize} + ${pad ?? 0}px);
		height: ${size ?? "15px"};
		aspect-ratio: 1;
		box-shadow: ${borderSize} ${borderSize} 0 0 ${color ?? theme.colors.boxShadow};
	}
`;

export const Box = styled.div<BoxProps>`
	position: relative;
	width: ${(p) => p.$width ?? "auto"};
	height: ${(p) => p.$height ?? "auto"};
	max-height: ${(p) => p.$maxHeight ?? "100%"};
	max-width: ${(p) => p.$maxWidth ?? "100%"};
	min-width: ${(p) => p.$minWidth ?? "auto"};
	padding: ${(p) => p.$padding ?? "9px"};
	aspect-ratio: ${(p) => p.$aspectRatio};
	overflow: ${(p) => p.$overflow};
	//box-shadow: ${(p) => p.$shadow != false && `inset 0 0 0 1px ${p.theme.colors.boxShadow}`};
	outline: ${(p) => p.$shadow != false && `solid 1px ${p.theme.colors.boxShadow}`};
	border: ${(p) => p.$border};
	margin: ${(p) => p.$margin};
	display: ${(p) => p.$display ?? "flex"};
	gap: ${(p) => p.$gap};
	flex-direction: ${(p) => p.$fDirection ?? "column"};
	align-items: ${(p) => p.$ai};
	justify-content: ${(p) => p.$jc};

	${(p) => p.$cornerP != "none" && (cornerBox((p.$corner?.borderSize ?? "1px"), (p.$corner?.color ?? p.theme.colors.boxShadow), (p.$corner?.size ?? "15px"), p.theme, ((p.$corner?.pad) ?? 0)))}
`;