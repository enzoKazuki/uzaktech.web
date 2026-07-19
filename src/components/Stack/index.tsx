import * as s from "./styles";
import * as w from "@/styles/primitive/wrapper";
import * as b from "@/styles/primitive/box";
import * as t from "@/styles/primitive/text";

export const StackLabels = [
	"aws",
	"c_sharp", 
	"claude",
	"cursor",
	"dbeaver",
	"docker",
	"dot_net",
	"gemini",
	"gimp",
	"git",
	"github",
	"mssql",
	"next_js",
	"nginx",
	"nodejs",
	"pgsql",
	"react_js",
	"sass",
	"stripe",
	"styled",
	"ts", 
	"v_studio",
	"vs_code",
	"vite"
] as const;

export const StackNames = [
	"AWS",
	"C#", 
	"Claude",
	"Cursor",
	"DBeaver",
	"Docker",
	".NET",
	"Gemini",
	"GIMP",
	"Git",
	"GitHub",
	"SQL Server",
	"Next.js", 
	"Nginx",
	"Node.js",
	"PostgreSQL",
	"React.js",
	"Sass",
	"Stripe",
	"styled-components",
	"TypeScript", 
	"Visual Studio",
	"VS Code",
	"Vite"
] as const;

export const Stack = ({list}: {list: {label: (typeof StackLabels)[number], icon?: boolean}[]}) => {
	return (
		<w.Row $fWrap="wrap" $gap="9px">
			{list.map((o, i) => (
				<b.Box key={i} $cornerP="none" $padding="7px 9px" $fDirection="row" $ai="center" $gap="9px">
					{o.icon && 
						<s.Icon src={`/stack_icons/${o.label}.svg`} alt={`icon: ${o.label}`} />
					}

					<t.Span $size="xv" $weight={500}>
						{StackNames[StackLabels.findIndex(l => l == o.label)]}
					</t.Span>
				</b.Box>
			))}
		</w.Row>
	)
}