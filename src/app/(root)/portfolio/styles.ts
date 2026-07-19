"use client";

import styled from "styled-components";

export const HeroImage = styled.img`
	max-width: 100%;
	aspect-ratio: 1;
	object-fit: cover;
	image-rendering: optimizeQuality;
	filter: blur(0.33px);
	box-shadow: 0 0 0 1px ${({theme}) => theme.colors.boxShadow};
	object-fit: cover;
	object-position: 0 79%;

	@media (max-width: 400px) 
	{
		max-width: 230px;
	}
`;