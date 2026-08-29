// Set NEXT_PUBLIC_SITE_URL once a custom domain is live. On Vercel we fall back
// to the project's production URL so metadata, robots and sitemap stay correct.
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

export const site = {
  name: "Apothecary Wellness",
  tagline: "Purity in Every Scoop",
  description:
    "Organic beetroot powder and superfood botanicals, cold-milled and third-party lab tested. No fillers, no synthetics — just concentrated wellness.",
  baseUrl,
  email: "hello@apothecarywellness.com",
  ogImage: "/images/hero.jpg",
};

export function absoluteUrl(path: string): string {
  return `${site.baseUrl}${path}`;
}

// Stamped when site content meaningfully changes; feeds sitemap <lastmod>
// and Article JSON-LD dates so they stay consistent and verifiably accurate.
export const contentUpdated = "2026-08-30";

// Complete Open Graph + Twitter blocks for a page. Next.js replaces nested
// metadata objects wholesale (no deep merge), so every page that customizes
// openGraph must resupply url/title/images itself — this keeps that complete.
export function pageOpenGraph(opts: {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
}) {
  const image = opts.image ?? site.ogImage;
  return {
    openGraph: {
      type: "website" as const,
      siteName: site.name,
      url: opts.path,
      title: opts.title,
      description: opts.description,
      images: [{ url: image, alt: opts.imageAlt ?? opts.title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}
