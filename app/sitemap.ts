import type { MetadataRoute } from "next";

const base = "https://jabby.io";
const lastModified = new Date("2026-07-04");

const routes = [
  { path: "", priority: 1 },
  { path: "/comment-ca-marche", priority: 0.9 },
  { path: "/secteurs", priority: 0.8 },
  { path: "/resultats", priority: 0.8 },
  { path: "/securite", priority: 0.9 },
  { path: "/tarification", priority: 0.9 },
  { path: "/faq", priority: 0.7 },
  { path: "/a-propos", priority: 0.6 },
  { path: "/debiteurs", priority: 0.6 },
  { path: "/contact", priority: 0.8 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority
  }));
}
