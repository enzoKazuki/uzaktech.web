import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://uzak.com.br",
			lastModified: new Date(),
			priority: 1,
		},
		{
			url: "https://uzak.com.br/about",
			lastModified: new Date(),
			priority: 0.9,
		},
		{
			url: "https://uzak.com.br/contact",
			lastModified: new Date(),
			priority: 0.9,
		},
		{
			url: "https://uzak.com.br/portfolio",
			lastModified: new Date(),
			priority: 0.8,
		},
	];
}