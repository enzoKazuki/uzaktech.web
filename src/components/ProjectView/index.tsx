import * as bx from "@/styles/primitive/box";
import * as tx from "@/styles/primitive/text";
import * as wp from "@/styles/primitive/wrapper";
import { Stack, StackLabels } from "../Stack";
import { defaultTheme } from "@/styles";

export const ProjectView = ({portfolio}: {portfolio?: boolean}) => {
	const list: {title: string, category: string, description: string, stackLabels: (typeof StackLabels)[number][]}[] = [
		{
			title: "Dental SaaS",
			category: "Web · Product",
			description: !portfolio 
				? "Full-stack SaaS built for dental clinics, featuring patient and workflow management, PostgreSQL backend, and a production-ready architecture focused on maintainability and reliability."
				: "End-to-end SaaS for dental clinics, combining a modern Next.js frontend with a complex .NET solution with 30+ controllers with 3+ endpoints each, a PostgreSQL database, and Nginx working together with Docker to deliver a scalable, production-focused application.",
			stackLabels: !portfolio
				? ["c_sharp", "pgsql", "next_js", "ts", "docker"]
				: ["c_sharp", "pgsql", "next_js", "ts", "docker", "nginx"]
		},
		{
			title: "Fundraising platform",
			category: "Web · Indie",
			description: !portfolio 
				? "Independent full-stack fundraising platform with campaign management, secure Stripe payments, authentication, and a scalable architecture designed from product concept to deployment."
				: "Solo-built fundraising platform integrating Stripe Connect, secure payment workflows, campaign management, and a complete full-stack architecture from design to deployment.",
			stackLabels: ["c_sharp", "pgsql", "next_js", "ts", "stripe"]
		}
	]

	return (
		<wp.Col $gap="13px">
			{list.map((p, i) => (
				<bx.Box $padding="13px 17px" $gap="13px" key={i}>
					<wp.Row $fWrap="wrap" $gap="3px 13px" $jc="space-between" $ai="center">
						<tx.P $size="xviii" $weight="450">{p.title}</tx.P>
						<tx.P $size="xv" $opc={0.5} $weight="500">{p.category}</tx.P>
					</wp.Row>
					
					<tx.P $maxWidth="43rem" $opc={0.7}>
						{p.description}
					</tx.P>

					<Stack list={p.stackLabels.map(a => {return {label: a, icon: portfolio == true}})}/>
				</bx.Box>
			))}
			<bx.Box $padding="13px 17px" $shadow={false} $border={`dashed 1px rgba(${defaultTheme.colorsRgbC.boxShadow}, 0.5)`} $corner={{borderSize: "1px", color: `rgba(${defaultTheme.colorsRgbC.boxShadow}, 0.5)`}}>
				<tx.Span $opc={0.5} $weight="450">new projects are being built</tx.Span>
			</bx.Box>
		</wp.Col>
	)
}