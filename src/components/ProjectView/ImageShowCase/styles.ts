"use client";

import { cornerBox, Span } from "@/styles/primitive";
import styled from "styled-components";

export const Img = styled.img`
	position: relative;
	cursor: pointer;
	width: auto;
	height: auto;
	flex: 0 0 auto;
	max-height: 100%;
	-webkit-user-drag: none;
	z-index: 0;
`;

export const Wrapper = styled.div<{$moving?: boolean}>`
	position: relative;
	max-width: fit-content;
	flex: 0 0 auto;
	max-height: 100%;
	height: auto;
	width: fit-content;
	pointer-events: ${(p) => p.$moving ? "none" : "auto"};
	outline: solid 1px ${(p) => p.theme.colors.boxShadow};

	&:hover 
	{
		${(p) => cornerBox(p.theme)}

		& > img {
			filter: brightness(93%);
		}

		& > span {
			opacity: 1;
		}
	}
`;

export const HoverText = styled(Span).attrs({$size: "xv", $weight: "450", $colorPreset: "boxBackground"})`
	position: absolute;
	inset: 0;
  	place-self: center;
	padding: 3px 9px;
	background-color: ${(p) => `rgba(${p.theme.colorsRgbC.boxShadow}, 0.55)`};
	backdrop-filter: blur(3px);
	-webkit-backdrop-filter: blur(3px);
	z-index: 30;
	opacity: 0;
	pointer-events: none;
	user-select: none;
`;

export const Root = styled.div<{$moving?: boolean}>`
	max-height: max(calc(min(100dvw, calc(var(--max-width) - 300px)) / 3 / 1.5), 130px);
	max-width: 100%;
	padding: 1px;
	margin: 13px 0 0;
	display: flex;
	flex-direction: row;
	gap: 13px;
	overflow: auto;
	overflow-y: hidden;
	scrollbar-color: ${({theme}) => `rgba(${theme.colorsRgbC.boxShadow}, 0.23)`} transparent;
	cursor: ${(p) => p.$moving ? "crosshair" : "default"};
`;