import styled from "styled-components";

export const Root = styled.a`
	display: flex;
	flex-direction: column;
	height: inherit;
	min-height: inherit;
	position: relative;
	width: fit-content;
	min-width: fit-content;
	overflow: hidden;
	margin: 0 0 0 3px;
	cursor: pointer;
`;

export const Logo = styled.img`
	height: 100%;
	width: fit-content;
	object-fit: contain; 
	overflow: hidden;
	pointer-events: none;
	user-select: none;
`;