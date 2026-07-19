"use client";
 
import { ReactNode, useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";
import { GlobalStyle, defaultTheme } from "./";
 
export const StyleRegistry = ({children}: {children: ReactNode}) => {
	const [sheet] = useState(() => new ServerStyleSheet());
	
	useServerInsertedHTML(() => {
		const styles = sheet.getStyleElement();

		sheet.instance.clearTag();

		return <>{styles}</>
	});
	
	const content = <ThemeProvider theme={defaultTheme}><GlobalStyle /> {children}</ThemeProvider>;

	if (typeof window !== "undefined") return content;
	
	return <StyleSheetManager sheet={sheet.instance}>{content}</StyleSheetManager>;
}
