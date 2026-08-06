import type { Metadata } from "next";
import { site } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `The terms governing your use of the ${site.name} website.`,
};

const sections = [
  {
    heading: "Using this site",
    body: `By browsing ${site.name}, you agree to use it only for lawful purposes and in a way that doesn't infringe on the rights of others or restrict anyone else's use of the site.`,
  },
  {
    heading: "Product information",
    body: "Descriptions, benefits, and usage suggestions on this site are for informational purposes and reflect our own product formulation and sourcing notes. They are not medical advice, and none of our products are intended to diagnose, treat, cure, or prevent any disease. Speak with a healthcare provider before starting any new supplement, especially if you're pregnant, nursing, or taking medication.",
  },
  {
    heading: "Pricing and availability",
    body: "Prices, sizes, and product availability shown on this site are subject to change without notice. Listing a product doesn't guarantee its availability.",
  },
  {
    heading: "Intellectual property",
    body: `All text, graphics, and design on this site belong to ${site.name} unless otherwise noted, and may not be reproduced without permission.`,
  },
  {
    heading: "Limitation of liability",
    body: `${site.name} is provided "as is." We make reasonable efforts to keep information accurate, but we don't warrant that the site will be uninterrupted or error-free, and we aren't liable for any damages arising from your use of it.`,
  },
  {
    heading: "Changes to these terms",
    body: "We may update these terms from time to time. Continued use of the site after changes are posted means you accept the updated terms.",
  },
  {
    heading: "Contact",
    body: `Questions about these terms can be sent to hello@apothecarywellness.com.`,
  },
];

export default function TermsPage() {
  return (
    <div className="px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto py-20">
      <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em] mb-4 block">
        LEGAL
      </span>
      <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
        Terms of Service
      </h1>
      <p className="text-on-surface-variant text-sm mb-16">Last updated: 2026</p>

      <div className="space-y-12">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-headline-md text-headline-md text-primary mb-3">
              {section.heading}
            </h2>
            <p className="text-on-surface-variant leading-relaxed">{section.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
