import * as s from "./styles";
import * as bx from "@/styles/primitive/box";
import * as tx from "@/styles/primitive/text";
import * as sc from "@/styles/primitive/section";
import * as wp from "@/styles/primitive/wrapper";
import { AvailabilityLable, Cta, ProjectView, Stack } from "@/components";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Portfolio"
};

export default function Page() {
	return (
		<sc.Root>
			<sc.Section $hero $fDirection="row" $breakAt={9} $gap="33px 18px" $minSize={[undefined, "fit-content"]} $dSize={[undefined, "calc((100vh / 3) * 2)"]} $ai="center">
				<sc.Content $maxSize={[undefined, "300px"]} $dSize={[undefined, "100%"]}>
					<tx.H1>
						Enzo Kazuki (aka. Uzak)
					</tx.H1>
					<sc.Copy $maxWidth="49rem">
						Hello! I'm Enzo Kazuki (17-years-old) a self-taught full-stack developer based in Paraíba - Brazil, working towards learning and making ideas turn into something real throught my passion and creativity.
					</sc.Copy>

					<wp.Row $fWrap="wrap" $gap="10px">
						<Cta href="#projects">See projects</Cta>
						<Cta href="/contact" btnProps={{$style: "ghost_link"}}>Get in touch</Cta>
					</wp.Row>
				</sc.Content>

				<bx.Box $width="fit-content" $height="fit-content" $maxWidth="min(100%, 300px)" $margin="0 0 0 auto" $aspectRatio="1">
					<s.HeroImage src={"/desktop_setup.jpg"} alt="complementary hero image" />
					<tx.SmallInfo>my desk setup</tx.SmallInfo>
				</bx.Box>
			</sc.Section>

			<sc.Section>
				<sc.Label>About</sc.Label>
				<sc.Title>Developer, designer, and product-minded builder</sc.Title>
				<wp.Col $gap="9px">
					<sc.Copy>
						I currently work as an independent developer focused on web products that requires a secure and solid [backend, database & infra]
						and need thoughtful UX, reliable systems, and a clear point of view. 
					</sc.Copy>
					<sc.Copy>
						I enjoy taking ownership across the stack, from interface design and product
						decisions to deployment and iterations.
					</sc.Copy>
				</wp.Col>
			</sc.Section>

			<sc.Section id="skills">
				<sc.Label>Skills</sc.Label>
				<sc.Title>Tools and technologies</sc.Title>
				<sc.Copy>
					I'm a full-stack developer, but my balance leans more to the back-end side.
				</sc.Copy>

				<wp.Col $gap="9px">
					<tx.Span $opc={0.4} $weight="500">Back-end</tx.Span>
					
					<Stack list={[
						{label: "c_sharp", icon: true},
						{label: "dot_net", icon: true},
						{label: "stripe", icon: true},
						{label: "nodejs", icon: true},
					]} />
				</wp.Col>
				
				<wp.Col $gap="9px">
					<tx.Span $opc={0.4} $weight="500">Front-end</tx.Span>
					
					<Stack list={[
						{label: "ts", icon: true},
						{label: "next_js", icon: true},
						{label: "react_js", icon: true},
						{label: "vite", icon: true},
						{label: "sass", icon: true},
						{label: "styled", icon: true},
					]} />
				</wp.Col>

				<wp.Col $gap="9px">
					<tx.Span $opc={0.4} $weight="500">Database</tx.Span>
					
					<Stack list={[
						{label: "pgsql", icon: true},
						{label: "mssql", icon: true}
					]} />
				</wp.Col>

				<wp.Col $gap="9px">
					<tx.Span $opc={0.4} $weight="500">DevOps</tx.Span>
					
					<Stack list={[
						{label: "git", icon: true},
						{label: "docker", icon: true},
						{label: "nginx", icon: true},
						{label: "aws", icon: true},
					]} />
				</wp.Col>

				<wp.Col $gap="9px">
					<tx.Span $opc={0.4} $weight="500">Tools</tx.Span>
					
					<Stack list={[
						{label: "vs_code", icon: true},
						{label: "v_studio", icon: true},
						{label: "dbeaver", icon: true},
						{label: "github", icon: true},
						{label: "gimp", icon: true},
					]} />
				</wp.Col>

				<wp.Col $gap="9px">
					<tx.Span $opc={0.4} $weight="500">AI Agents</tx.Span>
					
					<Stack list={[
						{label: "cursor", icon: true},
						{label: "gemini", icon: true},
						{label: "claude", icon: true},
					]} />
				</wp.Col>
			</sc.Section>

			<sc.Section id="projects">
				<sc.Label>Selected projects</sc.Label>
				<sc.Title>Recent work</sc.Title>
				
				<ProjectView portfolio />
			</sc.Section>

			<sc.Section id="career">
				<sc.Label>Career</sc.Label>
				<sc.Title>My professional experience</sc.Title>
				
				<wp.Col $gap="9px">
					<sc.Copy>
						I currently have no professional experience in a career path, all my experience of 4 years of coding comes from personal ideas and freelances.
					</sc.Copy>
					<sc.Copy>
						I'm available and open to start my professional career.
					</sc.Copy>
				</wp.Col>
			</sc.Section>

			<wp.Division $orientation={1} />

			<sc.Section>
				<wp.Row $margin="0 0 -7px"><AvailabilityLable /></wp.Row>

				<sc.Title>Interested in working together?</sc.Title>
				<sc.Copy>
					I&apos;m open to freelance work, product builds, and long-term collaborations that value quality and clarity.
				</sc.Copy>
				
				<wp.Row $fWrap="wrap" $gap="10px">
					<Cta href="/contact">Contact me</Cta>
					<Cta btnProps={{$style: "ghost_link"}} href="/about">About the studio</Cta>
				</wp.Row>
			</sc.Section>
		</sc.Root>
	);
}
