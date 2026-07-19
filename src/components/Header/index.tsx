"use client";

import * as s from "./styles";
import { usePathname } from "next/navigation";
import { Link } from "@/components/Link";
import { Logo } from "../Logo";
import { useLayoutEffect, useRef, useState } from "react";

export const Header = () => {
	const pathname = usePathname();

	const [scrollingUp, setScrollingUp] = useState(true);

	const headerRef = useRef<HTMLDivElement | null>(null);

   useLayoutEffect(() => {
		const parent: HTMLDivElement | null = headerRef.current?.parentNode as HTMLDivElement;

		if (parent) {
			let lastScrollY = parent.scrollTop;
			let lastScrollTop: number | null = null;

			const handleScroll = () => {
				const currentScrollY = parent.scrollTop;

				lastScrollTop = currentScrollY < lastScrollY ? (lastScrollTop ?? lastScrollY) : null;

				setScrollingUp((((lastScrollTop ?? lastScrollY) - currentScrollY > 33) && currentScrollY > 0) && currentScrollY > 0);

				lastScrollY = currentScrollY;
			};

			parent.addEventListener("scroll", handleScroll, { passive: true });
			return () => parent.removeEventListener("scroll", handleScroll);
		}
   }, [headerRef]);

	return (
		<>
			<s.Root ref={headerRef} $up={scrollingUp}>
				<s.Frame />

				<s.RootLogo>
					<Logo />
				</s.RootLogo>
				
				<s.Nav>
					<s.Ul>
						<s.Li $selected={pathname == "/"}>
							<Link clientRender href="/">Home</Link>
						</s.Li>
						<s.Li $selected={pathname == "/about"}>
							<Link clientRender href="/about">About</Link>
						</s.Li>
						<s.Li $selected={pathname == "/portfolio"}>
							<Link clientRender href="/portfolio">Portfolio</Link>
						</s.Li>
						<s.Li $selected={pathname == "/contact"}>
							<Link clientRender href="/contact">Contact</Link>
						</s.Li>
					</s.Ul>
				</s.Nav>
			</s.Root>
		</>
	)
}