"use server";

import { cookies } from "next/headers"

export const getToken = async (): Promise<string | null> => {
	const _cookies = await cookies();

	return _cookies.get("_tka")?.value != undefined ? _cookies.get("_tka")!.value.toString() : null;
}