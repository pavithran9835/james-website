import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { FilterBar } from "@/components/commerce/FilterBar";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Product Gallery",
  description:
    "Clean, scientific formulas derived from the world's most potent botanicals. No fillers, no synthetics — just concentrated wellness.",
};

const benefits = [
  {
    icon: "biotech",
    title: "Lab Verified",
    description:
      "Every batch is tested for purity, potency, and heavy metals. Your health is our science.",
  },
  {
    icon: "eco",
    title: "Wild Sourced",
    description:
      "Grown in native soils using regenerative organic practices. No synthetics ever.",
  },
  {
    icon: "package_2",
    title: "Sustainable",
    description:
      "Plastic-free packaging and carbon-neutral shipping on every single order.",
  },
];

export default function ShopPage() {
  return (
    <>
      <header className="pt-20 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <Stagger>
          <StaggerItem>
            <span className="text-label-caps font-label-caps text-on-surface-variant tracking-[0.2em] mb-4 block">
              ESSENTIAL ELIXIRS
            </span>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-primary mb-6">
              Purity in Every Scoop
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="max-w-2xl mx-auto text-body-lg text-on-surface-variant">
              Clean, scientific formulas derived from the world&apos;s most potent
              botanicals. No fillers, no synthetics—just concentrated wellness.
            </p>
          </StaggerItem>
        </Stagger>
      </header>

      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-32">
        <FilterBar products={products} />
      </main>

      <section className="py-32 bg-surface-container-low">
        <Reveal
          as="section"
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid md:grid-cols-3 gap-16"
        >
          {benefits.map((benefit) => (
            <div key={benefit.title} className="text-center">
              <Icon name={benefit.icon} className="text-4xl text-primary mb-6" />
              <h4 className="text-headline-md font-headline-md mb-4">{benefit.title}</h4>
              <p className="text-body-md text-on-surface-variant">{benefit.description}</p>
            </div>
          ))}
        </Reveal>
      </section>
    </>
  );
}
