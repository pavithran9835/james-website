import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { StatRow } from "@/components/content/StatRow";
import { pageOpenGraph } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Beetroot: The Heart's Best Friend",
  description:
    "Unlocking the ancient vascular secrets of Beta Vulgaris. A clinical exploration into the life-giving properties of the deep burgundy root.",
  alternates: { canonical: "/ingredients/beetroot" },
  ...pageOpenGraph({
    title: "Beetroot: The Heart's Best Friend",
    description:
      "Unlocking the ancient vascular secrets of Beta Vulgaris. A clinical exploration into the life-giving properties of the deep burgundy root.",
    path: "/ingredients/beetroot", image: "/images/beetroot.jpg",
  }),
};

export default function BeetrootPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75svh] flex flex-col justify-center overflow-hidden bg-surface-container-low">
        <div className="absolute inset-0 z-0 opacity-10 flex justify-end items-end pointer-events-none">
          <Icon
            name="nature"
            className="!text-[400px] md:!text-[600px] leading-none translate-x-1/4 translate-y-1/4"
          />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          <Stagger className="md:col-span-6 space-y-8 py-16">
            <StaggerItem>
              <Eyebrow withRule>The Vitality Series</Eyebrow>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary max-w-xl">
                The <span className="italic text-secondary">Heart&apos;s</span> Best Friend
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
                Unlocking the ancient vascular secrets of Beta Vulgaris. A
                clinical exploration into the life-giving properties of the
                deep burgundy root.
              </p>
            </StaggerItem>
            <StaggerItem>
              <Button href="#mechanisms" className="!px-10 !py-4">
                Discover the Science
              </Button>
            </StaggerItem>
          </Stagger>
          <div className="md:col-span-6 relative h-[400px] md:h-[600px]">
            <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl">
              <ParallaxLayer className="absolute inset-0" strength={28}>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1B3qRXczdJpvEGeoPDLN41a0LkZFFNh4fXXvZgpPyWD7inowRKmwPosmpL2pxFMbgF7TjKXd-5G5fYnfMQUgBxNSZA3c-lQoRM5rR7juotBL_LtkQTyev3sf2ujkj9sMPaL4_1yf8lvB5Wb2QtobmVNATEtOLavAJivMRF9Jv05qHQBG5Wwb4-96hRy9y2gi-7Wk-ltkd7s8jf3-5BKuibhNoj9C9nfOGfyj216oi6BrsyvWdtJFQdg"
                  alt="Professional studio macro photography of a halved organic beetroot on a clean minimalist surface. The deep burgundy concentric rings of the beet are visible, glistening with fresh moisture."
                  fill
                  preload
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </ParallaxLayer>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits bento */}
      <section id="mechanisms" className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Reveal as="section">
          <div className="text-center mb-20 space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Mechanisms of Efficacy
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Grounded in research on dietary nitrate and betalains — the
              bioactive compounds beetroot carries in unusual abundance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-surface-container-high p-6 md:p-10 space-y-6 hover:bg-secondary transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center border border-secondary group-hover:border-surface transition-colors">
                <Icon name="favorite" fill className="text-secondary group-hover:text-surface" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-surface">
                Healthy Circulation
              </h3>
              <p className="font-body-md text-on-surface-variant group-hover:text-surface/80">
                Dietary nitrates convert into nitric oxide, helping blood
                vessels relax — supporting healthy circulation and blood
                pressure already in the normal range.
              </p>
            </div>

            <div className="bg-primary p-6 md:p-10 space-y-6 relative overflow-hidden">
              <div className="relative z-10">
                <div className="w-12 h-12 flex items-center justify-center border border-inverse-primary mb-6">
                  <Icon name="bolt" fill className="text-inverse-primary" />
                </div>
                <h3 className="font-headline-md text-headline-md text-surface">
                  Nitric Oxide Surge
                </h3>
                <p className="font-body-md text-surface/80">
                  Elevate mitochondrial efficiency. Beetroot serves as a
                  clean, biological precursor to increased oxygen delivery
                  across the system.
                </p>
              </div>
              <Icon name="science" className="!text-[160px] absolute -right-8 -bottom-8 opacity-10" />
            </div>

            <div className="group bg-surface-container-high p-6 md:p-10 space-y-6 hover:bg-secondary transition-all duration-500">
              <div className="w-12 h-12 flex items-center justify-center border border-secondary group-hover:border-surface transition-colors">
                <Icon name="exercise" fill className="text-secondary group-hover:text-surface" />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary group-hover:text-surface">
                Physical Stamina
              </h3>
              <p className="font-body-md text-on-surface-variant group-hover:text-surface/80">
                Research on dietary nitrate consistently links it to
                cardiorespiratory endurance and time to exhaustion during
                sustained effort.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Nutritional profile */}
      <section className="bg-surface-container-highest py-16 md:py-32">
        <Reveal
          as="section"
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-24 items-center"
        >
          <div className="order-2 lg:order-1 relative">
            <div className="relative aspect-square bg-surface overflow-hidden border-[0.5px] border-outline-variant p-8">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5G8jiTEXlzgC6us1P0fKDK_z6QQkzCziSOKsQeY8oy2KmsBrmIv4OjZU1vrVj2dRaEUu_MX3qMHBMgV-quobtjRvoye7Jnhpio7gnkJB4xgh_cA2TronaySLryW8t_zXBslebPpSLPUrj3AR2qYvT1I-bEU_pZLwSPf9_tk4F8AoweY9roJncz2U-AxVxYxoXt-7b7fnwhvJ6xTzcGbwKG68Hpq9MydxfCIvY2x-Hl2Sh3FKMnYw8tA"
                alt="A clean, scientific top-down photograph of premium beetroot powder and fresh beetroot slices arranged on a marble laboratory slab."
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="static mt-6 mx-0 md:absolute md:-bottom-8 md:-right-8 md:mt-0 bg-secondary-container p-8 max-w-xs shadow-xl">
              <p className="font-headline-md text-on-secondary-container italic">
                &ldquo;A nutritional powerhouse for the modern era.&rdquo;
              </p>
              <p className="font-label-caps text-label-caps mt-4 text-on-secondary-container/70">
                — The Apothecary Wellness Standard
              </p>
            </div>
          </div>
          <div className="order-1 lg:order-2 space-y-12">
            <div className="space-y-4">
              <span className="font-label-caps text-label-caps text-secondary uppercase tracking-[0.2em]">
                Micronutrient Analysis
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Vitamins &amp; Mineral Density
              </h2>
            </div>
            <div className="space-y-8">
              <StatRow
                className="pb-8 border-b border-outline-variant"
                figure="B9"
                title="Folate (Vitamin B9)"
                description="Essential for DNA synthesis and tissue growth. A single serving of our concentrate provides 37% of your Daily Value, supporting cellular repair and heart health."
              />
              <StatRow
                figure="Mn"
                title="Manganese"
                description="A trace mineral required for bone formation, nutrient metabolism, and brain function. Beetroot is one of the densest plant-based sources available."
              />
              <div className="flex flex-wrap gap-4 pt-4">
                {["Organic Certified", "Vegan Friendly", "Lab Tested"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 border border-secondary text-label-caps font-label-caps text-secondary rounded-full uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Lifestyle integration */}
      <section className="py-16 md:py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        <Reveal as="section" className="flex flex-col lg:flex-row gap-16 items-stretch">
          <div className="lg:w-1/3 flex flex-col justify-center space-y-8">
            <h2 className="font-headline-lg text-headline-lg text-primary leading-tight">
              Elevated Performance. <br />
              Purity Redefined.
            </h2>
            <p className="font-body-md text-on-surface-variant">
              Whether in the boardroom or on the trail, the physiological
              advantages of high-nitrate supplementation are undeniable. Our
              Apothecary grade powder integrates seamlessly into your morning
              ritual.
            </p>
            <Link
              className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary border-b border-primary w-fit pb-1 hover:text-secondary hover:border-secondary transition-colors"
              href="/learn/how-to-use-beetroot-powder"
            >
              Read the Usage Guide <Icon name="arrow_forward" />
            </Link>
          </div>
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 h-auto lg:h-[500px]">
            <div className="relative aspect-[4/3] lg:aspect-auto rounded-sm overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjGROKpHtrk25_sK35SXR5_yhd-GZr3-afgR9lLlMU5L47OqsVe6tePm_SKByrZPMdLnTBhW1gOocMpFvbIDTTVjbleOWeVUP6rZa2XV4-wlydI4UWJ-Y7x4ONwAzBAxpMDPy9D5z119FAKXEPiAjwbRYWllxS4mxpQoygdOjKz_2sU6tW47H2doTKrefvqeHH7aVWIxa1aV8WyuMRiIxbI38TB9hODmJwxSLQlbd847-u9_Otil0vMg"
                alt="A lifestyle shot of a high-end, minimalist kitchen counter with a tall crystalline glass of deep red beetroot juice."
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-1/2 rounded-sm overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyd4EHHzcdu4gGg-x878on6KB6vx3lz0fMJptrihZq_8uN3csz3eYviaIpAx7ZLwXvC3Px9PxwuDOiJ2s3dUAvrEmahoEemumI-vZIdaZ2H_H4p5PHmFqV0CGMlPbADbQeKBDkBzAiTSjwLXOEXexYVmOss15YBMhS_v7neq4eQIyj9VfMzpMl0zyEZzNogYO9AXDcuJ7J1imA-jhto-nyvNxap81m2OCGw6AEiUCxE5ZHG37mUIEQug"
                  alt="A close-up of a runner's hand reaching for a sleek, dark-toned apothecary bottle in a soft-focus urban park at sunrise."
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-1/2 rounded-sm overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVUU2mkMvhREoBiqIjPmOxQQUD8sFKcrnMRuAn_woxcFhM6cKu0h5Edt8TIwDr_qmaA288oWpU25eNvAXBSuRf8Y-DJWYLJU4C3qaL8y2Uhp5iM5UYmOeqC8PalE8JSzFdGloD8ZqIy1u77bC0zRtRXuQuw6PIibCxlrYLB3vCANHK6G1jfa76Aq91KXWVtLXujaDGzSMPorAQRmPmqjHDRCz4bTp4E6d8PRmvJjyr9JxaDuGjZvgVFw"
                  alt="Macro texture of fine, deep burgundy beetroot powder spiraling in clear water, creating an artistic, cloud-like aesthetic."
                  fill
                  sizes="(min-width: 1024px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-primary text-surface py-16 md:py-32 relative overflow-hidden">
        <Reveal className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop text-center space-y-8">
          <h2 className="font-display-lg text-headline-lg md:text-display-lg max-w-3xl mx-auto">
            Enhance your cardiovascular vitality today.
          </h2>
          <div className="flex justify-center">
            <Button
              href="/shop/beetroot-powder"
              className="!bg-surface !text-primary !px-12 !py-5 uppercase tracking-[0.3em] font-bold hover:!bg-secondary-fixed shadow-xl"
            >
              Shop Beetroot Powder — $42
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
