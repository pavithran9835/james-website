import type { MetadataRoute } from "next";
import { site } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/shop",
    "/ingredients/amla",
    "/ingredients/beetroot",
    "/ingredients/moringa",
    "/privacy",
    "/terms",
  ];

  return routes.map((route) => ({
    url: `${site.baseUrl}${route}`,
  }));
}
