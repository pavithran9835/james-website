import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ProductDetailActions } from "@/components/commerce/ProductDetailActions";
import { RelatedProducts } from "@/components/commerce/RelatedProducts";
import { MobileStickyCta } from "@/components/commerce/MobileStickyCta";
import { NutritionTable } from "@/components/content/NutritionTable";
import { FaqAccordion } from "@/components/content/FaqAccordion";
import { CertificationBadges } from "@/components/content/CertificationBadges";
import { JsonLd } from "@/lib/jsonld";
import { site, absoluteUrl } from "@/lib/seo";
import { products } from "@/lib/data/products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/shop/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return {};

  const title = `${product.name} — ${product.benefitLabel}`;
  const ogImage = product.image?.src ?? site.ogImage;

  return {
    title,
    description: product.description,
    alternates: { canonical: `/shop/${slug}` },
    openGraph: {
      title,
      description: product.description,
      url: `/shop/${slug}`,
      type: "website",
      siteName: site.name,
      images: [{ url: ogImage, alt: product.image?.alt ?? product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.description,
      images: [ogImage],
    },
  };
}

export default async function ProductPage({ params }: PageProps<"/shop/[slug]">) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const related = products.filter(
    (p) =>
      p.id !== product.id &&
      (p.ingredient === product.ingredient || p.benefitTag === product.benefitTag),
  ).slice(0, 3);

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.longDescription,
    image: product.image?.src ?? absoluteUrl("/images/hero.jpg"),
    url: absoluteUrl(`/shop/${product.slug}`),
    brand: { "@type": "Brand", name: site.name },
    offers: {
      "@type": "Offer",
      price: product.price.toFixed(2),
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/shop/${product.slug}`),
    },
  };

  const faqLd = product.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: product.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }
    : null;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Shop", item: absoluteUrl("/shop") },
      {
        "@type": "ListItem",
        position: 2,
        name: product.name,
        item: absoluteUrl(`/shop/${product.slug}`),
      },
    ],
  };

  return (
    <>
      <JsonLd data={productLd} />
      {faqLd && <JsonLd data={faqLd} />}
      <JsonLd data={breadcrumbLd} />

      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pt-8">
        <nav className="text-xs font-label-caps text-on-surface-variant flex items-center gap-2">
          <Link href="/shop" className="hover:text-primary py-2 inline-block">Shop</Link>
          <span>/</span>
          <span className="text-primary">{product.name}</span>
        </nav>
      </div>

      <Reveal as="section" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        <div className="relative aspect-square bg-surface-container-low overflow-hidden">
          {product.image ? (
            <Image
              src={product.image.src}
              alt={product.image.alt}
              fill
              preload
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary text-surface">
              <Icon name="spa" className="!text-[96px]" />
            </div>
          )}
          {product.badge && (
            <span className="absolute top-6 left-6 bg-surface/90 backdrop-blur px-4 py-2 text-xs font-label-caps uppercase tracking-widest border border-outline-variant">
              {product.badge}
            </span>
          )}
        </div>

        <div>
          <span className="text-label-caps font-label-caps text-secondary uppercase tracking-[0.2em] mb-4 block">
            {product.benefitLabel}
          </span>
          <h1 className="font-display-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-4">
            {product.name}
          </h1>
          <p className="font-bold text-primary text-2xl mb-6">${product.price.toFixed(2)}</p>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
            {product.longDescription}
          </p>

          <ul className="space-y-3 mb-8">
            {product.highlights.map((highlight, index) => (
              <Reveal
                key={highlight}
                as="li"
                delay={index * 0.08}
                className="flex items-start gap-3"
              >
                <Icon name="check_circle" fill className="text-primary text-lg shrink-0 mt-0.5" />
                <span className="text-on-surface-variant">{highlight}</span>
              </Reveal>
            ))}
          </ul>

          <CertificationBadges certifications={product.certifications} />

          <div className="flex flex-wrap gap-8 my-8 py-6 border-t border-b border-outline-variant">
            <div>
              <span className="font-label-caps text-label-caps text-primary block mb-1">Size</span>
              <span className="text-on-surface-variant text-sm">{product.size}</span>
            </div>
            <div>
              <span className="font-label-caps text-label-caps text-primary block mb-1">Usage</span>
              <span className="text-on-surface-variant text-sm max-w-sm block">{product.usage}</span>
            </div>
          </div>

          <ProductDetailActions productId={product.id} />
        </div>
      </Reveal>

      <Reveal
        as="section"
        className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-24 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
      >
        <div>
          <h2 className="font-headline-md text-headline-md text-primary mb-6">Nutrition &amp; Facts</h2>
          <NutritionTable facts={product.nutritionFacts} />
        </div>
        <div>
          <h2 className="font-headline-md text-headline-md text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={product.faqs} />
        </div>
      </Reveal>

      {/* Bottom padding on mobile so the fixed sticky CTA never covers the footer. */}
      <div className="pb-24 md:pb-0">
        <RelatedProducts products={related} />
      </div>

      <MobileStickyCta product={product} />
    </>
  );
}
