import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/lib/jsonld";
import { site, pageOpenGraph } from "@/lib/seo";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "FAQ: Beetroot Powder, Orders & Quality",
  description:
    "Answers to common questions about Apothecary Wellness beetroot powder and botanicals — usage, daily dosing, quality testing, shipping, and wholesale.",
  alternates: { canonical: "/faq" },
  ...pageOpenGraph({
    title: "FAQ: Beetroot Powder, Orders & Quality",
    description:
      "Answers to common questions about Apothecary Wellness beetroot powder and botanicals — usage, daily dosing, quality testing, shipping, and wholesale.",
    path: "/faq",
  }),
};

const beetroot = products.find((p) => p.slug === "beetroot-powder");

const faqGroups: { title: string; id: string; faqs: { question: string; answer: string }[] }[] = [
  {
    title: "Beetroot Powder & Usage",
    id: "usage",
    faqs: [
      ...(beetroot?.faqs ?? []),
      {
        question: "How much beetroot powder should I take per day?",
        answer:
          "One level scoop (5g) mixed into water, juice, or a smoothie once daily. If you're new to nitrate-rich foods, start with a half scoop for the first few days — our usage guide covers timing and recipes in detail.",
      },
    ],
  },
  {
    title: "Quality & Testing",
    id: "quality",
    faqs: [
      {
        question: "Are your products lab tested?",
        answer:
          "Yes. Every batch is tested by an independent third-party lab for potency, purity, and heavy metals before it ships — every batch, not just spot checks.",
      },
      {
        question: "Do your powders contain fillers, sweeteners, or colorants?",
        answer:
          "No. Each jar contains a single botanical ingredient — no fillers, no binders, no added sugar, and no synthetic colorants. The color and flavor come entirely from the plant.",
      },
      {
        question: "Are your products vegan?",
        answer:
          "Yes. All of our powders are plant-based and vegan friendly, and our tincture uses a vegetable glycerin base rather than alcohol or animal-derived ingredients.",
      },
    ],
  },
  {
    title: "Orders, Shipping & Wholesale",
    id: "shipping",
    faqs: [
      {
        question: "How long does shipping take?",
        answer:
          "Orders are prepared within a few business days and delivery time depends on your location. You'll receive a confirmation email with tracking as soon as your order ships.",
      },
      {
        question: "What is your return policy?",
        answer:
          "If your order arrives damaged or isn't what you expected, contact us at hello@apothecarywellness.com and we'll make it right. Reach out within 30 days of delivery.",
      },
      {
        question: "Do you offer wholesale pricing?",
        answer:
          "Yes — we work with select retailers and practitioners. Get in touch through our contact page with a note about your business and expected volumes.",
      },
    ],
  },
];

// The beetroot product FAQs stay visible here but are excluded from this
// page's FAQPage JSON-LD: they're already marked up on /shop/beetroot-powder,
// and Google's guidelines say each Q&A pair should be marked up on one URL only.
const productFaqQuestions = new Set((beetroot?.faqs ?? []).map((faq) => faq.question));
const schemaFaqs = faqGroups
  .flatMap((group) => group.faqs)
  .filter((faq) => !productFaqQuestions.has(faq.question));

export default function FaqPage() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: schemaFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={faqLd} />

      <header className="pt-12 md:pt-20 pb-12 md:pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <Eyebrow className="justify-center mb-4">Help & Answers</Eyebrow>
        <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-primary mb-6">
          Frequently Asked Questions
        </h1>
        <p className="max-w-2xl mx-auto text-body-lg text-on-surface-variant">
          Everything about using our powders, how we test them, and how orders
          work. Can&apos;t find your answer?{" "}
          <Link href="/contact" className="text-primary underline underline-offset-4">
            Contact us
          </Link>
          .
        </p>
      </header>

      <div className="px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto pb-16 md:pb-24">
        {faqGroups.map((group) => (
          <section key={group.id} id={group.id} className="mb-12 scroll-mt-24">
            <h2 className="font-headline-md text-2xl text-primary mb-6">{group.title}</h2>
            <div className="space-y-6">
              {group.faqs.map((item) => (
                <div key={item.question} className="border-b border-outline-variant/40 pb-6">
                  <h3 className="font-semibold text-primary mb-2">{item.question}</h3>
                  <p className="text-on-surface-variant leading-relaxed text-[15px] md:text-base">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <aside className="bg-surface-container-low border border-outline-variant/20 p-6 md:p-8">
          <h2 className="font-headline-md text-xl text-primary mb-2">Still curious?</h2>
          <p className="text-sm md:text-base text-on-surface-variant mb-4">
            Our guides go deeper on the science and day-to-day use of beetroot
            powder.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <Link
              href="/learn/beetroot-powder-benefits"
              className="inline-flex items-center gap-2 py-1 text-primary hover:text-secondary transition-colors"
            >
              <Icon name="arrow_forward" className="text-base" /> Beetroot Powder Benefits
            </Link>
            <Link
              href="/learn/how-to-use-beetroot-powder"
              className="inline-flex items-center gap-2 py-1 text-primary hover:text-secondary transition-colors"
            >
              <Icon name="arrow_forward" className="text-base" /> How to Use Beetroot Powder
            </Link>
            <Link
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 py-1 text-primary hover:text-secondary transition-colors"
            >
              <Icon name="mail" className="text-base" /> {site.email}
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
