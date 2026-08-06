import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { WordReveal } from "@/components/ui/WordReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TiltCard } from "@/components/ui/TiltCard";
import { ImageReveal } from "@/components/ui/ImageReveal";
import { Marquee } from "@/components/ui/Marquee";
import { VideoSequence } from "@/components/ui/VideoSequence";
import { HorizontalPager } from "@/components/ui/HorizontalPager";
import { NewsletterForm } from "@/components/commerce/NewsletterForm";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Purity in Every Scoop",
  description:
    "Scientifically backed, ethically sourced, and cold-pressed to preserve every vital nutrient. Experience the gold standard of holistic wellness.",
};

const featuredProducts = products.filter((product) => product.featured);

const featuredImages: Record<string, string> = {
  "beetroot-powder": "/images/beetroot.jpg",
  "moringa-powder": "/images/moringa.jpg",
  "amla-detox-powder": "/images/amla.jpg",
};

const bentoCards = [
  {
    icon: "potted_plant",
    bg: "bg-surface-container",
    title: "100% Raw",
    body: "Never heated above 40°C to ensure all living enzymes remain intact and bioavailable.",
  },
  {
    icon: "verified",
    bg: "bg-surface-container-high",
    title: "Lab Certified",
    body: "Every scoop comes with a digital trace to its farm of origin and certified lab results.",
  },
  {
    icon: "eco",
    bg: "bg-surface-container-highest",
    title: "Vegan & Pure",
    body: "No fillers, no binders, and absolutely no artificial sweeteners. Just pure plants.",
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
      <header className="relative min-h-screen flex items-center overflow-hidden -mt-20 pt-20">
        <ParallaxLayer className="absolute inset-0 z-0">
          <VideoSequence
            sources={[
              "/video/beetroot-explode.mp4",
              "/video/moringa-transform.mp4",
              "/video/amla-processing.mp4",
            ]}
            className="absolute inset-0"
            videoClassName="opacity-90"
          />
        </ParallaxLayer>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-surface via-surface/40 to-transparent" />

        <div className="relative z-10 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <Stagger className="max-w-2xl">
            <StaggerItem>
              <Eyebrow withRule className="mb-6">
                Nature&apos;s Purest Essence
              </Eyebrow>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary leading-none mb-8">
                <WordReveal as="span" text="Purity in" delay={0.2} className="block" />
                <WordReveal
                  as="span"
                  text="Every Scoop."
                  delay={0.4}
                  className="block italic font-light"
                />
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-lg leading-relaxed">
                Scientifically backed, ethically sourced, and cold-pressed to
                preserve every vital nutrient. Experience the gold standard of
                holistic wellness.
              </p>
            </StaggerItem>
            <StaggerItem className="flex flex-wrap items-center gap-6">
              <MagneticButton href="/shop">
                Explore The Shop <Icon name="arrow_forward" className="text-base" />
              </MagneticButton>
              <MagneticButton href="/science" variant="ghost">
                Our Process
              </MagneticButton>
            </StaggerItem>
          </Stagger>
        </div>

        <a
          href="#elevated"
          aria-label="Scroll down"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3 opacity-50"
        >
          <span className="font-label-caps text-[10px] tracking-[0.3em] text-primary">
            Scroll
          </span>
          <span className="block h-12 w-px bg-primary" />
        </a>
      </header>

      <Marquee />

      {/* Benefits bento */}
      <section id="elevated" className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Reveal>
          <SectionHeading
            title="Elevated By Nature"
            description="Our commitment to purity starts at the source. We believe in transparency, from soil to scoop."
          />
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <Reveal className="md:col-span-8">
            <div className="relative flex min-h-[400px] h-full flex-col justify-between overflow-hidden bg-surface-container-low p-12 border border-outline-variant/10">
              <div className="relative z-10">
                <span className="font-label-caps text-label-caps text-on-primary-container uppercase tracking-widest mb-6 block">
                  01 / Philosophy
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-6 max-w-md">
                  Healthy Organic Status for Longevity
                </h3>
                <p className="text-on-surface-variant max-w-sm leading-relaxed">
                  Every batch is third-party lab tested for purity, ensuring
                  you receive only the most potent, chemical-free botanicals
                  nature has to offer.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 h-full w-1/2">
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
            <div className="h-full min-h-[400px] flex flex-col justify-center bg-primary text-surface p-12 border border-primary-container">
              <Icon name="groups" className="text-4xl mb-8 text-inverse-primary" />
              <h3 className="font-headline-md text-[24px] mb-4">
                Suitability for All Ages
              </h3>
              <p className="text-on-primary-container text-sm leading-relaxed">
                Formulated to be gentle yet effective. From growing teens to
                active seniors, our powders provide essential micronutrients
                for every stage of life.
              </p>
            </div>
          </Reveal>

          {bentoCards.map((card, i) => (
            <Reveal key={card.title} delay={0.1 + i * 0.08} className="md:col-span-4">
              <div className={`h-full ${card.bg} p-12 border border-outline-variant/10`}>
                <Icon name={card.icon} className="text-3xl mb-6 text-tertiary" />
                <h4 className="font-bold mb-3 uppercase tracking-tighter">{card.title}</h4>
                <p className="text-sm text-on-surface-variant">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured powders */}
      <section className="py-32 bg-surface-container-low/30 overflow-hidden">
        <Reveal as="section" className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                The Apothecary <br />
                <span className="italic">Essentials.</span>
              </h2>
              <p className="text-on-surface-variant">
                Discover our trio of foundational superfoods, each selected
                for its unique therapeutic properties.
              </p>
            </div>
            <Link
              href="/shop"
              className="mt-8 md:mt-0 font-label-caps text-label-caps uppercase tracking-widest border-b border-primary pb-2 text-primary"
            >
              View Full Collection
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map((product, i) => (
              <Reveal key={product.id} delay={i * 0.1}>
                <Link href={`/shop/${product.slug}`} className="group block cursor-pointer">
                  <TiltCard className="mb-8 aspect-[3/4] shadow-sm">
                    <ImageReveal
                      src={featuredImages[product.id] ?? product.image?.src ?? ""}
                      alt={product.name}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="absolute inset-0"
                    />
                    <span className="font-label-caps text-label-caps absolute left-6 top-6 z-20 border border-outline-variant bg-surface/90 px-4 py-2 text-[10px] text-on-surface backdrop-blur transition-transform duration-500 group-hover:-translate-y-1">
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
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
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

      {/* Newsletter CTA */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <Reveal as="section">
          <span className="font-label-caps text-label-caps uppercase tracking-[0.4em] text-tertiary mb-8 block">
            Join The Collective
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-8 max-w-2xl mx-auto">
            Early Access to New Harvests and Wellness Insights.
          </h2>
          <NewsletterForm variant="boxed" className="max-w-lg mx-auto" />
          <p className="mt-8 text-[10px] text-on-surface-variant font-label-caps uppercase tracking-widest">
            Privacy is paramount. We never share your data.
          </p>
        </Reveal>
      </section>
    </>
  );
}
