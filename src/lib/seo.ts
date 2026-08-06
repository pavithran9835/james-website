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
    "Clean, scientific formulas derived from the world's most potent botanicals. No fillers, no synthetics — just concentrated wellness.",
  baseUrl,
};
