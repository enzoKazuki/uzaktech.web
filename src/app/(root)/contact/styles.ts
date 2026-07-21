"use client";

import styled from "styled-components";

export const LinkRoot = styled.div`
	display: flex;
	flex-direction: row;
	gap: 9px;
	gap: 3px 9px;
	box-shadow: 0 0 0 1px ${(p) => p.theme.colors.boxShadow};
`;

export const Icon = styled.img`
	aspect-ratio: 1;
	height: 18px;
	user-select: none;

	@media (max-width: 500px) {
		height: 15px;
	}
`;