import { siteContact } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    // TODO: élesítés előtt NEXT_PUBLIC_SITE_URL legyen a saját domain.
    sitemap: `${siteContact.siteUrl}/sitemap.xml`,
  };
}
