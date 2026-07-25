import axios from "axios";
import { getToken } from "@/utils";

const base_api = process.env.NEXT_PUBLIC_API_GATEWAY;

export const api = axios.create({
	baseURL: `${base_api}`,
	timeout: 1000000
});

export const headerAuth = async (token?: string | null) => {
	const tk = await getToken();

	return tk ? {
		headers: {
			Authorization: `Bearer ${token ?? tk}`
		}
	} : {}
};

api.interceptors.response.use(
	response => response,
	error => {
		return Promise.resolve({
			status: error.response?.status,
			data: error.response?.data,
			headers: error.response?.headers,
			isError: true
		});
	}
);