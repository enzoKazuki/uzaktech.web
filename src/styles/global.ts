import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 	:root 
	{
		--height-header: 57px;
		--height-logo: 35px;
		--height-btn-cta: 37px;
		--height-btn-inp: 35px;
		--height-btn-small: 30px;
		--max-width: 1300px;
	}
	
	@media (max-width: 700px) 
	{
		:root 
		{
			--height-btn-inp: 27px;
			--height-btn: 25px;
		}
	}

	@media (max-width: 400px) 
	{
		:root
		{
			--height-header: 40px;
			--height-btn-inp: 25px;
			--height-btn: 23px;
		}
	}

	@media (max-width: 1370px) 
	{
		:root
		{
			--height-header: 50px;
			--height-logo: 33px;
		}
	}

	@media (max-width: 900px) 
	{
		:root
		{
			--height-header: 46px;
			--height-logo: 30px;
			--fs-root: 15px;
		}
	}

	@media (max-width: 600px) 
	{
		:root
		{
			--height-header: 43px;
			--height-logo: 27px;
		}
	}

	@media (max-width: 400px) 
	{
		:root
		{
			--height-header: 43px;
			--height-logo: 25px;
			--fs-root: 14px;
		}
	}
	
	body 
	{
		padding: 0;
		margin: 0;
		border: 0;
		background-color: ${({theme}) => theme.colors.bodyBackground};
		width: 100vw;
		height: 100vh;
		max-width: 100vw;
		max-height: 100vh;
		position: relative;
		overflow: hidden;
	}

	.filter
	{
		position: fixed;
		overflow: hidden;
		height: 100vh;
		width: 100vw;
		pointer-events: none;
		
		&::after {
			content: "";
			pointer-events: none;
			position: absolute;
			inset: 0;
			transform: translate(0, -10px);
			height: calc(100% + 20px);
			background: repeating-linear-gradient(
				to bottom,
				${({theme}) => `rgba(${theme.colorsRgbC.boxShadow}, 0.1)`} 0px,
				${({theme}) => `rgba(${theme.colorsRgbC.boxShadow}, 0.1)`} 1.5px,
				transparent 3px,
				transparent 6px
			);
			animation: scanlines 1.3s linear infinite;
			mix-blend-mode: multiply; /* optional */
		}
		
		@keyframes scanlines {
			0%   { background-position: 0 0; opacity: 0.3; }
			50%  { background-position: 0 2px; opacity: 0.5; }
			100% { background-position: 0 4px; opacity: 0.3; }
		}
	}
	
	* 
	{
		scrollbar-color: ${({theme}) => `rgba(${theme.colorsRgbC.boxShadow}, 0.43)`} transparent;
		scrollbar-width: thin;
		-webkit-tap-highlight-color: transparent;
		outline: none;
		font-family: "standard";
		font-weight: 403;
		box-sizing: border-box;

		&::selection 
		{
			background-color: ${({theme}) => theme.colors.primary};
			color: #fff;
		}
	}
`;
