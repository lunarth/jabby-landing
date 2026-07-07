import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jabby.io",
      lastModified: new Date("2026-06-13"),
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
