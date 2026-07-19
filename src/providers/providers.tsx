import { StyleRegistry } from "@/styles";

export const Providers = ({ children }: { children: React.ReactNode}) => {
   return (
		<StyleRegistry>
			{children}
		</StyleRegistry>
   );
};
