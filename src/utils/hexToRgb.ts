export const hexToRgb = (hex: string) => {
	let r = 0, g = 0, b = 0;

	if (hex.startsWith('#')) hex = hex.slice(1);

	r = parseInt(hex.substring(0, 2), 16);
	g = parseInt(hex.substring(2, 4), 16);
	b = parseInt(hex.substring(4, 6), 16);

	return [ r, g, b ]
}