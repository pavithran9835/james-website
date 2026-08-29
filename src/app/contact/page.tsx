import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/lib/jsonld";
import { site, absoluteUrl, pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Questions about our beetroot powder, an order, or wholesale? Email the Apothecary Wellness team — we reply within two business days.",
  alternates: { canonical: "/contact" },
  ...pageOpenGraph({
    title: "Contact Us",
    description:
      "Questions about our beetroot powder, an order, or wholesale? Email the Apothecary Wellness team — we reply within two business days.",
    path: "/contact",
  }),
};

// TODO: swap the mailto CTA for a real form once an email/form backend
// (e.g. Resend, Formspree) is wired up — a form that silently drops
// messages is worse than no form.
export default function ContactPage() {
  const contactLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${site.name}`,
    url: absoluteUrl("/contact"),
    mainEntity: {
      "@type": "Organization",
      name: site.name,
      email: site.email,
      url: site.baseUrl,
    },
  };

  return (
    <>
      <JsonLd data={contactLd} />

      <header className="pt-12 md:pt-20 pb-12 md:pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <Eyebrow className="justify-center mb-4">We&apos;re Here to Help</Eyebrow>
        <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-primary mb-6">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-body-lg text-on-surface-variant">
          Questions about a product, an order, or working with us? Email us
          and we&apos;ll reply within two business days.
        </p>
      </header>

      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div className="bg-surface-container-low border border-outline-variant/20 p-6 md:p-10 flex flex-col items-start justify-center">
          <h2 className="font-headline-md text-2xl text-primary mb-4">Email Us</h2>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-md">
            The fastest way to reach us. Include your order number if your
            question is about an existing order.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-3 bg-primary text-surface px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary-container transition-colors"
          >
            <Icon name="mail" className="text-base" />
            {site.email}
          </a>
          <p className="mt-6 flex items-start gap-3 text-sm text-on-surface-variant">
            <Icon name="schedule" className="text-lg text-primary" />
            <span>Replies within two business days, Monday–Friday.</span>
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-surface-container-low border border-outline-variant/20 p-6 md:p-8">
            <h2 className="font-headline-md text-xl text-primary mb-3">Wholesale & Practitioners</h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              We partner with select retailers and wellness practitioners.
              Mention your business and expected volumes in your email and
              we&apos;ll send our wholesale terms.
            </p>
          </div>

          <div className="bg-surface-container-low border border-outline-variant/20 p-6 md:p-8">
            <h2 className="font-headline-md text-xl text-primary mb-3">Before You Write</h2>
            <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
              Many questions about usage, testing, and shipping are answered on
              our{" "}
              <Link href="/faq" className="text-primary underline underline-offset-4">
                FAQ page
              </Link>
              , and our{" "}
              <Link
                href="/learn/how-to-use-beetroot-powder"
                className="text-primary underline underline-offset-4"
              >
                usage guide
              </Link>{" "}
              covers dosage and timing in detail.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
