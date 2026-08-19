"use client";

import { Box } from "@/styles/primitive";
import styled from "styled-components";

export const HeroImage = styled.img`
	max-width: 100%;
	aspect-ratio: 1;
	object-fit: cover;
	image-rendering: optimizeQuality;
	outline: solid 1px ${(p) => p.theme.colors.boxShadow};
	object-fit: cover;
	object-position: 0 79%;

	@media (max-width: 400px) 
	{
		max-width: 230px;
	}
`;

export const HeroImageBox = styled(Box)`
	--width: 300px;
	height: fit-content;
	margin: 0 0 0 auto;
	aspect-ratio: 1;
	min-height: min(100%, var(--width));
	max-height: min(100%, var(--width));
	min-width: min(100%, var(--width));
	max-width: min(100%, var(--width));

	@media (max-width: 400px) 
	{
		--width: 230px;
	}
`;