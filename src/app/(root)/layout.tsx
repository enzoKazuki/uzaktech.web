import * as s from "./styles";
import { Header } from "@/components";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<s.Root data-scroll-root>
			<Header /> 

			<s.Main>
				{children}
			</s.Main>
		</s.Root>
	)
}