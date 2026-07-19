import * as s from "./styles";

export const Pyramid = () => {
	return (
		<s.Root>
			<div className="pyramid">
				<div className="face front">
					<svg viewBox="0 0 200 173.2">
						<polygon points="100,0 0,173.2 200,173.2" fill="url(#frontGrad)" className="pol" strokeWidth="1" />

						<defs>
							<linearGradient id="frontGrad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" className="stop" />
								<stop offset="130%" className="stop" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div className="face right">
					<svg viewBox="0 0 200 173.2">
						<polygon points="100,0 0,173.2 200,173.2" fill="url(#rightGrad)" className="pol" strokeWidth="1" />

						<defs>
							<linearGradient id="rightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" className="stop" />
								<stop offset="130%" className="stop" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div className="face back">
					<svg viewBox="0 0 200 173.2">
						<polygon points="100,0 0,173.2 200,173.2" fill="url(#backGrad)" className="pol" strokeWidth="1" />

						<defs>
							<linearGradient id="backGrad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" className="stop" />
								<stop offset="130%" className="stop" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div className="face left">
					<svg viewBox="0 0 200 173.2">
						<polygon points="100,0 0,173.2 200,173.2" fill="url(#leftGrad)" className="pol" strokeWidth="1" />

						<defs>
							<linearGradient id="leftGrad" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" className="stop" />
								<stop offset="130%" className="stop" />
							</linearGradient>
						</defs>
					</svg>
				</div>

				<div className="base" />
			</div>
		</s.Root>
	)
}