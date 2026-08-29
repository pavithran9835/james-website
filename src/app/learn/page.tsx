import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { articles } from "@/lib/data/articles";
import { pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Learn: Beetroot Powder Guides & Superfood Science",
  description:
    "Practical, science-grounded guides to beetroot powder and our other botanicals — benefits, dosage, timing, and honest comparisons from Apothecary Wellness.",
  alternates: { canonical: "/learn" },
  ...pageOpenGraph({
    title: "Learn: Beetroot Powder Guides & Superfood Science",
    description:
      "Practical, science-grounded guides to beetroot powder and our other botanicals — benefits, dosage, timing, and honest comparisons from Apothecary Wellness.",
    path: "/learn", image: "/images/beetroot.jpg",
  }),
};

const ingredientGuides = [
  {
    title: "Beetroot & Nitric Oxide",
    description:
      "The vascular science of Beta vulgaris — dietary nitrates, blood flow, and stamina.",
    href: "/ingredients/beetroot",
  },
  {
    title: "Moringa's Nutrient Density",
    description:
      "Nature's multivitamin — vitamin A, vitamin C, iron, and a full amino acid profile.",
    href: "/ingredients/moringa",
  },
  {
    title: "Amla & Vitamin C Stability",
    description:
      "How tannins stabilize amla's vitamin C so more of it survives digestion.",
    href: "/ingredients/amla",
  },
];

export default function LearnPage() {
  return (
    <>
      <header className="pt-12 md:pt-20 pb-12 md:pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <Eyebrow className="justify-center mb-4">The Wellness Journal</Eyebrow>
        <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-primary mb-6">
          Learn the Science
        </h1>
        <p className="max-w-2xl mx-auto text-body-lg text-on-surface-variant">
          Practical, evidence-grounded guides to getting the most from beetroot
          powder and our other botanicals — no hype, no shortcuts.
        </p>
      </header>

      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/learn/${article.slug}`}
              className="group flex flex-col justify-between bg-surface-container-low border border-outline-variant/20 p-6 md:p-10 hover:border-primary/40 transition-colors"
            >
              <div>
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-tertiary mb-4 block">
                  Guide · {article.readingMinutes} min read
                </span>
                <h2 className="font-headline-md text-2xl text-primary mb-4 group-hover:underline underline-offset-4 decoration-1">
                  {article.title}
                </h2>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-primary">
                Read the Guide <Icon name="arrow_forward" className="text-base" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface-container-low/40 py-16 md:py-24">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary mb-4">
            Ingredient Deep-Dives
          </h2>
          <p className="text-on-surface-variant mb-10 max-w-xl">
            Longer explorations of the mechanism behind each foundational
            botanical.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {ingredientGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group bg-surface border border-outline-variant/30 p-6 md:p-8 hover:border-primary/40 transition-colors"
              >
                <h3 className="font-headline-md text-xl text-primary mb-3 group-hover:underline underline-offset-4 decoration-1">
                  {guide.title}
                </h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
