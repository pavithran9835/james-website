import Image from "next/image";
import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { CountUp } from "@/components/ui/CountUp";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { StatRow } from "@/components/content/StatRow";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Amla Detox Guide",
  description:
    "Discover the molecular precision of Amla. A clinical powerhouse of restorative nutrients designed to purify the system through science-backed botanical wisdom.",
};

const highlights = [
  {
    icon: "shield_with_heart",
    title: "Antioxidant Powerhouse",
    description:
      "Rich in polyphenols and tannins, Amla scavenges free radicals with clinical efficiency, protecting cellular integrity from oxidative stress.",
    link: "Molecular Detail",
  },
  {
    icon: "health_metrics",
    title: "Immune Support",
    description:
      "Reinforces the body's natural defenses through high bio-availability, modulating immune response for sustained seasonal resilience.",
    link: "Bio-Markers",
  },
  {
    icon: "eco",
    title: "Digestion & Purity",
    description:
      "Optimizes the gastrointestinal environment, facilitating efficient nutrient absorption and systemic waste elimination for a total detox.",
    link: "Metabolic Flux",
  },
];

const ctaProducts = products.filter((product) =>
  ["amla-essence-powder", "amla-detox-tincture"].includes(product.id),
);

export default function AmlaPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative pt-12 pb-20 md:pt-28 md:pb-40 overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <Stagger className="md:col-span-7 z-10">
            <StaggerItem>
              <Eyebrow withRule className="mb-6">
                The Botanical Guide
              </Eyebrow>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary mb-8 leading-[1.05]">
                The Ultimate <br />
                <span className="italic text-on-tertiary-container">Detox</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl mb-12">
                Discover the molecular precision of Amla. A clinical powerhouse
                of restorative nutrients designed to purify the system through
                science-backed botanical wisdom.
              </p>
            </StaggerItem>
            <StaggerItem className="flex flex-wrap gap-4">
              <Button href="#highlights">Explore The Science</Button>
              <Button href="/shop" variant="secondary">
                View Products
              </Button>
            </StaggerItem>
          </Stagger>
          <div className="md:col-span-5 relative mt-16 md:mt-0">
            <div className="aspect-[4/5] bg-surface-container-low rounded-lg overflow-hidden relative shadow-sm">
              <ParallaxLayer className="absolute inset-0" strength={24}>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAntbZ2hxaXbUBwzQqXPME1C2e3cF_S5qh9dxlusMWtr71LttlXxToEyHBWS2MMXgJmeEDid8Nz2NYDMmFpEPsPmNcKUugkB4ykMwb7mj01GGcA-hcnrxtgZr65ILwgesGgb_6oGPjdsO2f2AFdZCwA2X2Sm-64fX5BM11qwQ7Wozs8iHLjOdq0daRZ7EZBnlVN2LR3pZauTYCCWFkO-aRrQie7oX4PBFIQi9uw0AWf3ZY6rVY6Fdi8wg"
                  alt="A professional studio photograph of fresh green Amla berries arranged on a minimalist clay plate. The lighting is soft and diffused, creating a high-end apothecary aesthetic with natural shadows."
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </ParallaxLayer>
              <div className="absolute inset-0 border-[16px] border-surface/20" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-tertiary-fixed/20 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </header>

      {/* Key highlights */}
      <section id="highlights" className="py-24 bg-surface-container-low">
        <Reveal as="section" className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-16 text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Precision Restoration
            </h2>
            <p className="text-on-surface-variant font-body-md">
              The therapeutic pillars of the Phyllanthus emblica.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group bg-surface p-10 border-b border-tertiary-fixed-dim hover:-translate-y-1 transition-transform duration-500"
              >
                <Icon name={item.icon} className="text-primary text-4xl mb-8" />
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-on-tertiary-container group-hover:gap-4 transition-all">
                  <span className="font-label-caps text-label-caps">{item.link}</span>
                  <Icon name="arrow_forward" className="text-sm" />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Vitamin C concentration */}
      <section className="py-32 relative overflow-hidden">
        <Reveal
          as="section"
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        >
          <div className="order-2 md:order-1 relative aspect-square">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW1BoYyG5bDJ0ad2noXhTuCp-ZvT_SHAUfEPO9Vr6XEmgNGHIff_7LhncHgvC8RUjpyF6lcxIg8Qu_FtTrkKaP8h_lZHRGrjTnJ2AtFI1fcZwThURf-mzE63D4avuggwxcQWk-tiiwyy_zSJKH7aQ4VbLmZXZCXidp57DbBrM-3aD1OmHgjImo-WS_Od19D02SnDwuLrn4INTRgIPEErImIDhpbDwJg8hnIkzmJLJn4Fu50-oWC0LWJw"
              alt="A macro scientific photograph of a singular Amla berry cut in half, showcasing the crystalline internal texture. Sophisticated, editorial style with muted natural colors."
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover rounded-sm grayscale-[20%]"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="font-label-caps text-label-caps text-on-tertiary-container tracking-widest block mb-6">
              THE ASCORBIC BENCHMARK
            </span>
            <h2 className="font-display-lg text-headline-lg text-primary mb-8 leading-tight">
              Exceptional Vitamin C <br />
              Concentration
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 leading-relaxed">
              Unlike synthetic alternatives, the Vitamin C in Amla is
              stabilized by tannins, ensuring it survives digestion for
              maximum efficacy. A single ounce contains up to 20x more
              Vitamin C than common citrus.
            </p>
            <div className="space-y-8">
              <StatRow
                figure={<CountUp value={20} suffix="x" />}
                title="Superior Density"
                description="Higher concentration per gram than nearly any other botanical source."
              />
              <StatRow
                figure={<Icon name="verified" className="text-4xl" />}
                title="Lab-Verified Purity"
                description="Each batch is tested for bio-active markers and heavy metal absence."
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* Product CTA grid */}
      <section className="pb-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Reveal as="section" className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {ctaProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative overflow-hidden h-96 mb-6">
                {product.image && (
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                {product.badge && (
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-surface px-4 py-2 font-label-caps text-[10px] tracking-widest text-primary border border-tertiary-fixed-dim">
                      {product.badge}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                {product.name}
              </h3>
              <p className="text-on-surface-variant mb-4">{product.description}</p>
              <div className="text-on-tertiary-container font-label-caps text-label-caps border-b border-transparent group-hover:border-on-tertiary-container w-fit pb-1 transition-all">
                Shop {product.name.split(" ")[0]} ${product.price}
              </div>
            </div>
          ))}
        </Reveal>
      </section>
    </>
  );
}
