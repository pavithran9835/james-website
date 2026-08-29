import type { MetadataRoute } from "next";
import { site, contentUpdated } from "@/lib/seo";
import { products } from "@/lib/data/products";
import { articles } from "@/lib/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  // A checked-in content date rather than new Date(): Google only trusts
  // <lastmod> when it doesn't change on every build without content changes.
  const lastModified = contentUpdated;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: "", changeFrequency: "weekly" as const, priority: 1 },
    { url: "/shop", changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "/learn", changeFrequency: "weekly" as const, priority: 0.7 },
    { url: "/ingredients/beetroot", changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "/ingredients/moringa", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/ingredients/amla", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/science", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/faq", changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "/contact", changeFrequency: "yearly" as const, priority: 0.4 },
    { url: "/privacy", changeFrequency: "yearly" as const, priority: 0.2 },
    { url: "/terms", changeFrequency: "yearly" as const, priority: 0.2 },
  ].map((route) => ({ ...route, url: `${site.baseUrl}${route.url}`, lastModified }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${site.baseUrl}/shop/${product.slug}`,
    lastModified,
    changeFrequency: "weekly",
    // The flagship product outranks the rest of the catalog.
    priority: product.slug === "beetroot-powder" ? 0.9 : 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${site.baseUrl}/learn/${article.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes, ...articleRoutes];
}
