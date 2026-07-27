export const objectsEqual = (a: any, b: any, emptyToNull = false): boolean => {
	const normalize = (v: any): any => {
		if (!emptyToNull) return v;

		if (v == null) return null;

		if (typeof v === "string") return v.trim() ? v : null;

		if (Array.isArray(v)) return v.map(normalize);

		if (typeof v === "object") {
			const obj = Object.fromEntries(Object.entries(v).map(([k, val]) => [k, normalize(val)]));

			return Object.values(obj).every(x => x == null) ? null : obj;
		}

		return v;
	};

	const eq = (x: any, y: any): boolean => {
		x = normalize(x);
		y = normalize(y);

		if (Object.is(x, y)) return true;

		if (Array.isArray(x) && Array.isArray(y))
			return x.length === y.length && x.every((v, i) => eq(v, y[i]));

		if (x && y && typeof x === "object" && typeof y === "object") {
			const keys = Object.keys(x);
			
			return (
				keys.length === Object.keys(y).length &&
				keys.every(k => k in y && eq(x[k], y[k]))
			);
		}

		return false;
	};

	return eq(a, b);
};