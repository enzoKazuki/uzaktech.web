import styled from "styled-components";

export const Root = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	height: inherit;
	min-height: inherit;
	position: relative;
	width: fit-content;
	min-width: fit-content;
	overflow: hidden;
	margin: 0 0 0 3px;
	max-width: 100%;
	cursor: pointer;
`;

export const Logo = styled.img`
	height: 100%;
	width: auto;
	height: auto;
	min-height: 100%;
	max-height: 100%;
	max-width: 100%;
	object-fit: contain; 
	overflow: hidden;
	pointer-events: none;
	user-select: none;
`;