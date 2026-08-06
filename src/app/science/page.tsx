import Link from "next/link";
import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { Button } from "@/components/ui/Button";
import { CertificationBadges } from "@/components/content/CertificationBadges";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "How Apothecary Wellness sources, tests, and verifies every botanical — from soil to scoop.",
};

const process = [
  {
    icon: "eco",
    title: "Regeneratively Farmed",
    body: "Every botanical is grown in living, regenerative soil — no synthetic fertilizers, no monoculture depletion. Healthier soil means a more potent, more bioavailable harvest.",
  },
  {
    icon: "science",
    title: "Low-Temperature Processing",
    body: "We never heat above 40°C. Sun-drying, shade-drying, and cold-milling protect the enzymes, vitamins, and pigments that high-heat industrial processing destroys.",
  },
  {
    icon: "biotech",
    title: "Third-Party Lab Verified",
    body: "Every batch is tested by an independent lab for potency, purity, and heavy metals before it ships — not just spot-checked, every batch.",
  },
];

const ingredientScience = [
  {
    href: "/ingredients/beetroot",
    label: "Cardiovascular",
    title: "Beetroot & Nitric Oxide",
    body: "Dietary nitrates convert into nitric oxide in the body, helping blood vessels relax and dilate — the mechanism behind beetroot's endurance and blood-pressure research.",
  },
  {
    href: "/ingredients/amla",
    label: "Antioxidant",
    title: "Amla & Vitamin C Stability",
    body: "Amla's natural tannins stabilize its vitamin C so more of it survives digestion intact, compared to isolated synthetic ascorbic acid.",
  },
  {
    href: "/ingredients/moringa",
    label: "Micronutrient",
    title: "Moringa's Nutrient Density",
    body: "Whole-leaf moringa carries vitamin A, vitamin C, iron, and a full essential amino acid profile — a multivitamin grown from a single leaf.",
  },
];

export default function SciencePage() {
  return (
    <>
      {/* Hero */}
      <header className="pt-20 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <Stagger>
          <StaggerItem>
            <Eyebrow withRule className="mx-auto justify-center mb-6">
              Our Process
            </Eyebrow>
          </StaggerItem>
          <StaggerItem>
            <h1 className="text-headline-lg-mobile md:text-display-lg font-display-lg text-primary mb-6">
              The Science of Purity
            </h1>
          </StaggerItem>
          <StaggerItem>
            <p className="max-w-2xl mx-auto text-body-lg text-on-surface-variant">
              Every jar is the result of a deliberate chain of decisions — how
              it&apos;s grown, how it&apos;s processed, how it&apos;s verified.
              Here&apos;s exactly how that chain works.
            </p>
          </StaggerItem>
        </Stagger>
      </header>

      {/* Process pillars */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step) => (
              <div
                key={step.title}
                className="bg-surface-container-low p-10 border border-outline-variant/10"
              >
                <Icon name={step.icon} className="text-4xl text-primary mb-6" />
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Ingredient science */}
      <section className="py-24 bg-surface-container-low">
        <Reveal className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <SectionHeading
            title="The Research Behind Each Botanical"
            description="Explore the mechanism behind each of our foundational ingredients in more depth."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ingredientScience.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block bg-surface p-10 border border-outline-variant/10 hover:border-primary transition-colors"
              >
                <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest mb-4 block">
                  {item.label}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed mb-6">{item.body}</p>
                <span className="flex items-center gap-2 text-label-caps font-label-caps text-primary">
                  Read the Guide
                  <Icon
                    name="arrow_forward"
                    className="transition-transform group-hover:translate-x-2"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Certifications */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <Reveal>
          <span className="font-label-caps text-label-caps text-on-surface-variant tracking-[0.2em] mb-6 block">
            What Every Batch Carries
          </span>
          <div className="flex justify-center">
            <CertificationBadges
              certifications={["Organic Certified", "Vegan Friendly", "Lab Tested", "Non-GMO"]}
            />
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-primary text-surface py-24 text-center">
        <Reveal className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop space-y-8">
          <h2 className="font-headline-lg text-headline-lg max-w-2xl mx-auto">
            See it for yourself, one scoop at a time.
          </h2>
          <div className="flex justify-center">
            <Button href="/shop" className="!bg-surface !text-primary hover:!bg-secondary-fixed">
              Shop The Collection
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
