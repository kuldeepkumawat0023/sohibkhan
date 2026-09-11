import type { MetadataRoute } from "next";
import { defaultSEO } from "@/utils/seoConfig";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${defaultSEO.baseUrl}/sitemap.xml`,
  };
}
