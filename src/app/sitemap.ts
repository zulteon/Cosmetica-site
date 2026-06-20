import { siteContact } from "@/lib/site";
import type { MetadataRoute } from "next";

const routes = [
  "",
  "/arlista",
  "/szolgaltatasaink/arckezeles",
  "/szolgaltatasaink/gyantazas",
  "/szolgaltatasaink/motivacios-mentorprogram",
  "/adatvedelmi-tajekoztato",
  "/cookie-tajekoztato",
];

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: élesítés előtt NEXT_PUBLIC_SITE_URL legyen a saját domain.
  return routes.map((route) => ({
    url: `${siteContact.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
