"use client";

import styled from "styled-components";
import { Span } from "@/styles/primitive";

export const Root = styled.div`
	display: flex;
	flex-direction: row;
	gap: 9px;
	align-items: center;
`;

export const Status = styled.div`
	height: 7px;
	aspect-ratio: 1;
	background-color: ${(p) => p.theme.colors.green};
	box-shadow: inset 0 0 0 1px ${(p) => p.theme.colors.boxShadow};
`;

export const Text = styled(Span).attrs({$size: "xvi", $opc: 0.9})``;