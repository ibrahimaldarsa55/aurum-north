import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { projects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/work", "/process", "/about", "/contact"];
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...projects.map((p) => ({
      url: `${site.url}/work/${p.slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}
