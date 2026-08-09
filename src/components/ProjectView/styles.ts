"use client";

import styled from "styled-components";

export const ImageShowCase = styled.img`
	outline: solid 1px ${(p) => p.theme.colors.boxShadow};
	cursor: pointer;

	&:hover 
	{
		opacity: 0.8;
	}
`;

export const ImageShowCaseRoot = styled.div`
	max-height: max(calc(min(100vw, var(--max-width)) / 3 / 1.5), 130px);
	max-width: 100%;
	padding: 1px;
	margin: 13px 0 0;
	display: flex;
	flex-direction: row;
	gap: 13px;
	overflow: auto;
	scrollbar-color: ${({theme}) => `rgba(${theme.colorsRgbC.boxShadow}, 0.23)`} transparent;
`;