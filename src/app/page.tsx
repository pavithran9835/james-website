import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TiltCard } from "@/components/ui/TiltCard";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Marquee } from "@/components/ui/Marquee";
import { DesktopHeroVideo } from "@/components/ui/DesktopHeroVideo";
import { HorizontalPager } from "@/components/ui/HorizontalPager";
import { NewsletterForm } from "@/components/commerce/NewsletterForm";
import { AddToCartButton } from "@/components/commerce/AddToCartButton";
import { products } from "@/lib/data/products";
import { articles } from "@/lib/data/articles";

export const metadata: Metadata = {
  // The root layout's title.template doesn't apply to its own segment's page,
  // so the brand suffix is spelled out here.
  title: { absolute: "Organic Beetroot Powder for Heart Health | Apothecary Wellness" },
  description:
    "Cold-milled organic beetroot powder with ~250mg dietary nitrate per scoop. Single-origin, lab tested, no fillers. Supports heart health and endurance.",
  alternates: { canonical: "/" },
};

const beetroot = products.find((product) => product.slug === "beetroot-powder")!;

const supportingProducts = products.filter((product) =>
  ["moringa-powder", "amla-detox-powder", "trinity-bundle"].includes(product.slug),
);

const supportingImages: Record<string, string> = {
  "moringa-powder": "/images/moringa.jpg",
  "amla-detox-powder": "/images/amla.jpg",
  "trinity-bundle": "/images/botanical.jpg",
};

const bentoCards = [
  {
    icon: "potted_plant",
    bg: "bg-surface-container",
    title: "Cold-Milled Raw",
    body: "Never heated above 40°C, so the betalain pigments and folate that make beetroot worth taking survive processing intact.",
  },
  {
    icon: "verified",
    bg: "bg-surface-container-high",
    title: "Lab Certified",
    body: "Every batch is third-party tested for purity, potency, and heavy metals — with a digital trace to its farm of origin.",
  },
  {
    icon: "eco",
    bg: "bg-surface-container-highest",
    title: "Vegan & Pure",
    body: "No fillers, no binders, no added sugar, and no synthetic colorants. Just single-origin plants, milled whole.",
  },
];

const usageSteps = [
  {
    figure: "01",
    title: "Scoop",
    body: "One level scoop (5g) delivers ~250mg of dietary nitrate — the same reason athletes reach for beets.",
  },
  {
    figure: "02",
    title: "Mix",
    body: "Stir into water, juice, or a smoothie. The earthy-sweet flavor disappears into anything citrus-forward.",
  },
  {
    figure: "03",
    title: "Time It",
    body: "Take it 30–60 minutes before training for endurance, or any time of day for daily cardiovascular support.",
  },
];

const galleryItems = [
  {
    src: "/images/beetroot.jpg",
    alt: "Fresh halved beetroot with visible burgundy rings.",
    caption: "Beetroot",
    href: "/ingredients/beetroot",
  },
  {
    src: "/images/moringa.jpg",
    alt: "Vibrant green moringa leaves and powder.",
    caption: "Moringa",
    href: "/ingredients/moringa",
  },
  {
    src: "/images/amla.jpg",
    alt: "Fresh amla berries beside a jar of amla powder.",
    caption: "Amla",
    href: "/ingredients/amla",
  },
  {
    src: "/images/botanical.jpg",
    alt: "Botanical line-art illustration on a clay-toned background.",
    caption: "The Full Collection",
    href: "/shop",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <header className="relative min-h-[100svh] flex items-center overflow-hidden -mt-20 pt-20">
        <ParallaxLayer className="absolute inset-0 z-0">
          {/* Static image is the SSR hero (fast mobile LCP); the video
              layers over it on desktop only, after hydration. */}
          <Image
            src="/images/beetroot.jpg"
            alt=""
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
            className="object-cover opacity-90"
          />
          <DesktopHeroVideo
            sources={["/video/beetroot-explode.mp4"]}
            posters={["/images/beetroot.jpg"]}
            className="absolute inset-0"
            videoClassName="opacity-90"
          />
        </ParallaxLayer>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />

        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* CSS-only entrance (hero-rise) so the LCP heading and copy paint
              before JS hydration — critical for mobile performance scores. */}
          <div className="max-w-2xl">
            <div className="hero-reveal">
              <Eyebrow withRule className="mb-6">
                Single-Origin · Cold-Milled · Lab Tested
              </Eyebrow>
            </div>
            <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary leading-none mb-8">
              <span className="hero-reveal [animation-delay:0.1s] block">
                Organic Beetroot
              </span>
              <span className="hero-reveal [animation-delay:0.2s] block italic font-light">
                Powder, Perfected.
              </span>
            </h1>
            <p className="hero-reveal [animation-delay:0.3s] font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-lg leading-relaxed">
              One scoop of cold-milled beetroot powder delivers ~250mg of
              dietary nitrate for nitric oxide, heart health, and endurance —
              third-party lab tested, with nothing else in the jar.
            </p>
            <div className="hero-reveal [animation-delay:0.4s] flex flex-wrap items-center gap-6">
              <MagneticButton href="/shop/beetroot-powder">
                Shop Beetroot Powder <Icon name="arrow_forward" className="text-base" />
              </MagneticButton>
              <MagneticButton href="/ingredients/beetroot" variant="ghost">
                Read the Science
              </MagneticButton>
            </div>
          </div>
        </div>

        <a
          href="#flagship"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3 opacity-50"
        >
          <span className="font-label-caps text-xs tracking-[0.3em] text-primary">
            Scroll
          </span>
          <span className="block h-12 w-px bg-primary" />
        </a>
      </header>

      <Marquee />

      {/* Flagship product spotlight */}
      <section
        id="flagship"
        className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <Link href="/shop/beetroot-powder" className="group block">
              <TiltCard className="aspect-[4/5] shadow-sm">
                <ImageReveal
                  src="/images/beetroot.jpg"
                  alt="Organic beetroot powder — fresh halved beetroot showing deep burgundy rings"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="absolute inset-0"
                />
                <span className="font-label-caps absolute left-6 top-6 z-20 border border-outline-variant bg-surface/90 px-4 py-2 text-xs text-on-surface backdrop-blur">
                  The Flagship
                </span>
              </TiltCard>
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary mb-4 block">
              {beetroot.benefitLabel}
            </span>
            <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary mb-6">
              {beetroot.name}
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-8 max-w-lg">
              {beetroot.longDescription}
            </p>

            <ul className="space-y-3 mb-8">
              {beetroot.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <Icon name="check_circle" fill className="text-primary text-lg shrink-0 mt-0.5" />
                  <span className="text-on-surface-variant">{highlight}</span>
                </li>
              ))}
            </ul>

            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-b border-outline-variant/50 py-6 mb-8">
              {beetroot.nutritionFacts
                .filter((fact) => fact.label !== "Serving Size")
                .map((fact) => (
                  <div key={fact.label}>
                    <dt className="font-label-caps text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                      {fact.label}
                    </dt>
                    <dd className="font-semibold text-primary">{fact.value}</dd>
                  </div>
                ))}
            </dl>

            <div className="flex flex-wrap items-center gap-6">
              <AddToCartButton
                productId={beetroot.id}
                label={`Add to Cart — $${beetroot.price.toFixed(2)}`}
              />
              <Link
                href="/shop/beetroot-powder"
                className="inline-flex items-center py-3 font-label-caps text-label-caps uppercase tracking-widest text-primary hover:text-secondary transition-colors group/link"
              >
                <span className="border-b border-primary pb-1 group-hover/link:border-secondary transition-colors">
                  Full Details
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How to use */}
      <section className="py-16 md:py-24 bg-surface-container-low/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <Reveal>
            <SectionHeading
              title="One Scoop, Once a Day"
              description="How to use beetroot powder for heart health and endurance — no rituals more complicated than a glass of water."
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-10">
            {usageSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="h-full bg-surface p-6 md:p-10 border border-outline-variant/10">
                  <span className="font-label-caps text-label-caps text-on-primary-container uppercase tracking-widest mb-4 block">
                    {step.figure}
                  </span>
                  <h3 className="font-headline-md text-xl text-primary mb-3">{step.title}</h3>
                  <p className="text-sm md:text-base text-on-surface-variant leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link
              href="/learn/how-to-use-beetroot-powder"
              className="inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-primary border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors"
            >
              Read the Full Usage Guide <Icon name="arrow_forward" className="text-base" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Benefits bento */}
      <section
        id="elevated"
        className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      >
        <Reveal>
          <SectionHeading
            title="Elevated By Nature"
            description="Our commitment to purity starts at the source. We believe in transparency, from soil to scoop."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <Reveal className="md:col-span-8">
            <div className="relative flex min-h-[320px] md:min-h-[400px] h-full flex-col justify-between overflow-hidden bg-surface-container-low p-6 md:p-12 border border-outline-variant/10">
              <div className="relative z-10">
                <span className="font-label-caps text-label-caps text-on-primary-container uppercase tracking-widest mb-6 block">
                  01 / Philosophy
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-6 max-w-md">
                  Grown for Potency, Not Volume
                </h3>
                <p className="text-on-surface-variant max-w-sm leading-relaxed">
                  Our beets come from single-origin, regenerative farms and
                  every batch is third-party lab tested — so the nitrate
                  content on the label is the nitrate content in your scoop.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-full w-1/2 hidden md:block">
                <Image
                  src="/images/botanical.jpg"
                  alt=""
                  fill
                  quality={90}
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover opacity-80 mix-blend-multiply"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-4">
            <div className="h-full min-h-[320px] md:min-h-[400px] flex flex-col justify-center bg-primary text-surface p-6 md:p-12 border border-primary-container">
              <Icon name="groups" className="text-4xl mb-8 text-inverse-primary" />
              <h3 className="font-headline-md text-[24px] mb-4">
                Built for a Daily Ritual
              </h3>
              <p className="text-on-primary-container text-sm leading-relaxed">
                A measured 5g scoop that fits any routine — gentle enough for
                everyday use by active adults, with published lab results for
                every batch.
              </p>
            </div>
          </Reveal>

          {bentoCards.map((card, i) => (
            <Reveal key={card.title} delay={0.1 + i * 0.08} className="md:col-span-4">
              <div className={`h-full ${card.bg} p-6 md:p-12 border border-outline-variant/10`}>
                <Icon name={card.icon} className="text-3xl mb-6 text-tertiary" />
                <h4 className="font-bold mb-3 uppercase tracking-tighter">{card.title}</h4>
                <p className="text-sm text-on-surface-variant">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Supporting products */}
      <section className="py-16 md:py-32 bg-surface-container-low/30 overflow-hidden">
        <Reveal as="section" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary mb-6">
                Complete <br />
                <span className="italic">Your Ritual.</span>
              </h2>
              <p className="text-on-surface-variant">
                Beetroot covers your heart and endurance. Pair it with moringa
                for daily energy and amla for antioxidant support — or take all
                three in one bundle.
              </p>
            </div>
            <Link
              href="/shop"
              className="mt-8 md:mt-0 inline-flex items-center py-3 font-label-caps text-label-caps uppercase tracking-widest text-primary"
            >
              <span className="border-b border-primary pb-1">View Full Collection</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {supportingProducts.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.1}>
                <Link href={`/shop/${product.slug}`} className="group block cursor-pointer">
                  <TiltCard className="mb-8 aspect-[3/4] shadow-sm">
                    <ImageReveal
                      src={supportingImages[product.id] ?? product.image?.src ?? ""}
                      alt={product.image?.alt ?? product.name}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="absolute inset-0"
                    />
                    <span className="font-label-caps absolute left-6 top-6 z-20 border border-outline-variant bg-surface/90 px-4 py-2 text-xs text-on-surface backdrop-blur transition-transform duration-500 group-hover:-translate-y-1">
                      {product.benefitLabel}
                    </span>
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-0 z-20 h-0.5 w-0 bg-on-tertiary-container transition-all duration-700 group-hover:w-full"
                    />
                  </TiltCard>
                  <h3 className="font-headline-md text-2xl text-primary mb-2">{product.name}</h3>
                  <p className="mb-6 text-sm text-on-surface-variant">{product.description}</p>
                  <div className="flex items-center justify-between border-t border-outline-variant/50 pt-4 transition-colors duration-500 group-hover:border-on-tertiary-container/60">
                    <span className="font-semibold text-primary">${product.price.toFixed(2)}</span>
                    <Icon
                      name="add_circle"
                      className="text-2xl text-primary transition-transform duration-300 group-hover:rotate-90"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Ingredient gallery */}
      <section className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Reveal>
          <SectionHeading
            title="Explore the Botanicals"
            description="Swipe through our foundational ingredients and the science behind each one."
          />
        </Reveal>
        <Reveal delay={0.1}>
          <HorizontalPager items={galleryItems} />
        </Reveal>
      </section>

      {/* Guides */}
      <section className="py-16 md:py-24 bg-surface-container-low/30">
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <Reveal>
            <SectionHeading
              title="From the Journal"
              description="Evidence-grounded guides to beetroot powder — what it does, how to use it, and how it compares."
            />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.08}>
                <Link
                  href={`/learn/${article.slug}`}
                  className="group flex h-full flex-col justify-between bg-surface border border-outline-variant/20 p-6 md:p-8 hover:border-primary/40 transition-colors"
                >
                  <div>
                    <span className="font-label-caps text-xs uppercase tracking-widest text-tertiary mb-4 block">
                      Guide · {article.readingMinutes} min read
                    </span>
                    <h3 className="font-headline-md text-xl text-primary mb-3 group-hover:underline underline-offset-4 decoration-1">
                      {article.title}
                    </h3>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 font-label-caps text-label-caps uppercase tracking-widest text-primary">
                    Read <Icon name="arrow_forward" className="text-base" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <Reveal as="section">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.4em] text-tertiary mb-8 block">
            Join The Collective
          </span>
          <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary mb-8 max-w-2xl mx-auto">
            Early Access to New Harvests and Wellness Insights.
          </h2>
          <NewsletterForm variant="boxed" className="max-w-lg mx-auto" />
          <p className="mt-8 text-xs text-on-surface-variant font-label-caps uppercase tracking-widest">
            Privacy is paramount. We never share your data.
          </p>
        </Reveal>
      </section>
    </>
  );
}
