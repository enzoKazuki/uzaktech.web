import { ButtonProps, buttonStyle } from "@/styles/primitive/button";
import styled from "styled-components";

export const Cta = styled.a<ButtonProps>`
	${(p) => buttonStyle(p)};
`;