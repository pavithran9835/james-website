import Image from "next/image";
import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Stagger, StaggerItem } from "@/components/ui/Stagger";
import { CountUp } from "@/components/ui/CountUp";
import { ParallaxLayer } from "@/components/ui/ParallaxLayer";
import { Quote } from "@/components/content/Quote";
import { NewsletterForm } from "@/components/commerce/NewsletterForm";

export const metadata: Metadata = {
  title: "Moringa Guide",
  description:
    "Moringa Oleifera, often called the \"Miracle Tree,\" offers a comprehensive profile of essential nutrients to revitalize your cellular health.",
};

const vitamins = [
  {
    letter: "A",
    label: "Vitamin A (Beta-Carotene)",
    description: "4x more than carrots. Crucial for immune function and vision health.",
  },
  {
    letter: "C",
    label: "Vitamin C (Ascorbic Acid)",
    description: "7x more than oranges. Enhances collagen production and cellular repair.",
  },
  {
    letter: "E",
    label: "Vitamin E (Tocopherol)",
    description: "A powerful antioxidant that shields membranes from free radical damage.",
  },
];

export default function MoringaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden bg-surface-container-low">
        <div className="relative w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center py-16">
          <Stagger className="space-y-8">
            <StaggerItem className="inline-flex items-center gap-2 px-3 py-1 border border-tertiary-fixed-dim rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-caps text-label-caps text-primary">
                Scientifically Validated Superfood
              </span>
            </StaggerItem>
            <StaggerItem>
              <h1 className="font-display-lg text-headline-lg-mobile md:text-display-lg text-primary max-w-lg leading-tight">
                Nature&apos;s <span className="italic font-normal">Multivitamin</span>
              </h1>
            </StaggerItem>
            <StaggerItem>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Moringa Oleifera, often called the &ldquo;Miracle Tree,&rdquo; offers a
                comprehensive profile of essential nutrients to revitalize your
                cellular health.
              </p>
            </StaggerItem>
            <StaggerItem className="flex flex-wrap gap-4">
              <Button href="#bioactivity" className="tracking-widest">
                Explore Moringa
              </Button>
              <Button href="/shop" variant="secondary" className="tracking-widest">
                View Lab Tests
              </Button>
            </StaggerItem>
          </Stagger>
          <div className="relative group">
            <div className="absolute -inset-4 border-[0.5px] border-tertiary-fixed-dim rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            <div className="relative aspect-[4/5] bg-surface-container overflow-hidden rounded-lg">
              <ParallaxLayer className="absolute inset-0" strength={24}>
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCfOomOrSC58vrx8WxcTo7ybps6-4IEhLu3OOQSQVvJyFL4fbc6gubr6gGy-nPpTY7Ilo6mC2awViG4Yy4WUaZ4WUtTbxr8CzItJ4px6Il5Rc5DC3LPXvK5ymQXqQ6PdCDcPkn4oEWDzt7-wcBXwU7t3VoJwgH16L5zIxAgjvsPR4vsn-2Kbi7MtWCC2M2pthSudxYxCH109VinODn0YEZjpAB5O_uXjdebrvRgHiuwJAu4Isl4WOnFQ"
                  alt="A high-end, editorial-style product photograph of fresh, vibrant green Moringa leaves resting on a minimalist ceramic plate."
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </ParallaxLayer>
            </div>
          </div>
        </div>
      </section>

      {/* Essential trio */}
      <section id="bioactivity" className="py-24 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal as="section">
          <div className="mb-16 text-center">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Potent Bioactivity
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              The clinical trifecta of the Moringa leaf.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter h-auto md:h-[600px]">
            <div className="group bg-surface-container p-12 flex flex-col justify-between border-[0.5px] border-outline-variant hover:border-primary transition-colors">
              <div>
                <Icon name="eco" className="text-4xl text-primary mb-6" />
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  Anti-Inflammatory
                </h3>
                <p className="text-on-surface-variant">
                  High concentrations of isothiocyanates and quercetin help
                  soothe systemic inflammation at the molecular level.
                </p>
              </div>
              <div className="pt-8 border-t border-outline-variant">
                <span className="font-label-caps text-label-caps text-primary group-hover:ml-2 transition-all">
                  RESEARCH STUDY →
                </span>
              </div>
            </div>

            <div className="grid grid-rows-2 gap-gutter">
              <div className="bg-primary p-12 text-surface flex flex-col justify-center">
                <h3 className="font-headline-md text-headline-md mb-2">Skin Vitality</h3>
                <p className="opacity-80">
                  Antioxidant-rich profile protects skin cells from oxidative
                  stress and environmental toxins.
                </p>
              </div>
              <div className="group relative overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGJMer-h4xnU7_CgqUAjZdCd0wj_NqFRrd7hN18V6qDOrYWcmkp4zuHMxkyHZtDkWoS0FFIY1ADru1y9MB_A0OY4gl0p1PY1GD4Swc224zEFNEH7BEHonxUa_xZa4iCLyDvzsQJDHIXxQTQJ33DajsS5PepnfWdMJx234pOAiLsvQSIs2v_HqZqDR3YSQUQw6qm6972PnIPmxDTu49B_d9HVjvx00hbeScNnOxO7HHXAcyotnaCs-NHQ"
                  alt="A close-up shot of a luxurious, smooth green botanical powder being mixed into a clear glass of water."
                  fill
                  sizes="33vw"
                  className="object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-surface font-label-caps text-label-caps tracking-[0.2em] bg-primary/40 backdrop-blur-md px-6 py-2">
                    PURITY FIRST
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-high p-12 flex flex-col justify-end relative overflow-hidden">
              <Icon name="bolt" className="!text-[120px] text-primary absolute top-0 right-0 p-8 opacity-20" />
              <div className="relative z-10">
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  Sustained Energy
                </h3>
                <p className="text-on-surface-variant">
                  Balanced iron and vitamin B levels provide a jitter-free
                  energy boost that lasts throughout the day.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Vitamin profile */}
      <section className="py-32 bg-primary-container text-surface">
        <Reveal
          as="section"
          className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center"
        >
          <div className="relative">
            <div className="aspect-square rounded-full border border-surface/20 absolute -inset-8 animate-[spin_20s_linear_infinite]" />
            <div className="relative z-10 bg-surface/5 backdrop-blur-sm p-12 rounded-full aspect-square flex items-center justify-center">
              <div className="text-center">
                <CountUp value={92} className="text-display-lg font-display-lg block mb-2" />
                <span className="font-label-caps text-label-caps tracking-[0.3em]">
                  NUTRIENTS
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-headline-lg text-headline-lg mb-12">The Vitamin Hierarchy</h2>
            <div className="space-y-12">
              {vitamins.map((vitamin, index) => (
                <div
                  key={vitamin.letter}
                  className={
                    index < vitamins.length - 1
                      ? "flex items-start gap-6 border-b border-surface/10 pb-8"
                      : "flex items-start gap-6"
                  }
                >
                  <div className="text-4xl font-display-lg text-tertiary-fixed-dim">
                    {vitamin.letter}
                  </div>
                  <div>
                    <h4 className="font-label-caps text-label-caps mb-2">{vitamin.label}</h4>
                    <p className="text-surface/70">{vitamin.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* Botanical narrative */}
      <section className="py-24">
        <Reveal as="section" className="space-y-10">
          <div className="text-center">
            <Icon name="spa" className="text-primary text-5xl" />
          </div>
          <Quote
            quote="Moringa isn't just a supplement; it's a recalibration of the body's natural baseline. We source only the 'Miracle Leaf' from high-altitude volcanic soil to ensure maximum mineral density."
            author="Dr. Elara Vance"
            role="Chief of Botanical Research"
          />
        </Reveal>
      </section>

      {/* Image gallery */}
      <section className="pb-32 px-margin-mobile md:px-margin-desktop overflow-hidden">
        <Reveal className="max-w-container-max mx-auto grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-7 relative aspect-[16/9] bg-surface-container rounded-lg overflow-hidden">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHLdo6aNX0fTD2hU2pBQRCJKaxlQHu2HJjHg62RwgneK4p8-6dbLawjpRwVkC8EMYWWvQb6Pu7kLbsCqohLA_E94s2kxDXfFgQoMad8DCoQ8Vj0te0qDizzagfyqhO5qzDrk05g4pPZXWS6BwImBW69IKGlJ-Cz843LHypEC_dNJetZgtMXxpN1vPtp5gGDJFx-P7rHHGi84V5gUTb5M7tYDwdxz2-HOauHyupN5PWves51YXyVBTNMA"
              alt="A wide-angle, cinematic view of a lush, sun-drenched Moringa plantation at sunrise."
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="col-span-12 md:col-span-5 relative aspect-square bg-surface-container rounded-lg overflow-hidden translate-y-12">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcXe1Pm0GKi4fBzgI7Et3JT-nzjpQSq8TdIGxd-Vw7vQVtbSSeI6FQpCxYKJWYIitCpIzOyvzagulhzQjL9X2EbB1RKQo_yQqIRtJM0x1fOL2-tUXDfIJO158VT3AAwdhE5DwYpP_kyp3fHH-Z_rDKZrVXgwmsswORDG-QLTgzx1tor6egVlpvEY1BCM1bxyx0QTZPh5oGLSFaecWtSz_528yD4egMJIV7uGUW7vlXQpiUpHCWqKxcUA"
              alt="A macro photograph showing the fine texture of premium Moringa powder on a matte black ceramic spoon."
              fill
              sizes="(min-width: 768px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-surface-container-high py-24 px-margin-mobile md:px-margin-desktop text-center">
        <Reveal className="max-w-2xl mx-auto space-y-8">
          <h3 className="font-headline-md text-headline-md text-primary">Begin Your Ritual</h3>
          <p className="text-on-surface-variant">
            Join 50,000+ others receiving our weekly science-backed wellness
            insights and botanical discoveries.
          </p>
          <NewsletterForm variant="boxed" />
        </Reveal>
      </section>
    </>
  );
}
