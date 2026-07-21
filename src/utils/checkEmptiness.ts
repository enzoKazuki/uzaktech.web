export const checkEmptiness = (val?: any | null): boolean => {
	return val == null || val == undefined || `${val?.toString().trim()}` == "";
}