import type { Product } from "@/types/product";

// Prices, images, and alt text are ported verbatim from design/*/code.html.
export const products: Product[] = [
  {
    id: "beetroot-powder",
    slug: "beetroot-powder",
    name: "Beetroot Powder",
    ingredient: "beetroot",
    price: 42,
    benefitTag: "Heart",
    benefitLabel: "Heart Health",
    description:
      "Organic nitric oxide booster for endurance and cardiovascular vitality.",
    longDescription:
      "Cold-milled from single-origin, regeneratively farmed beets, this powder is built around one job: raising dietary nitrates that your body converts into nitric oxide. That's the same compound that helps blood vessels relax and widen, which is why it shows up in so many endurance and cardiovascular routines. Every batch is dried at low temperature to protect the natural betalains and folate, then tested by a third-party lab before it ships — no fillers, no added sugar, no synthetic colorants standing in for the real thing.",
    highlights: [
      "Naturally rich in dietary nitrates for nitric oxide support",
      "Cold-milled to preserve folate and betalain pigments",
      "Single-origin, regeneratively farmed beets",
      "Third-party lab tested for purity and heavy metals",
    ],
    usage:
      "Mix one level scoop (5g) into water, juice, or a smoothie once daily — many people take it 30–60 minutes before training. Start with a half scoop if you're new to nitrate-rich foods.",
    size: "150g jar — 30 servings",
    nutritionFacts: [
      { label: "Serving Size", value: "5g (1 scoop)" },
      { label: "Dietary Nitrate", value: "~250mg" },
      { label: "Folate (Vitamin B9)", value: "37% DV" },
      { label: "Manganese", value: "18% DV" },
      { label: "Calories", value: "17 kcal" },
    ],
    faqs: [
      {
        question: "When should I take beetroot powder?",
        answer:
          "Most people take it 30–60 minutes before exercise, since that's roughly how long it takes dietary nitrates to convert into nitric oxide. It also works fine any time of day if endurance timing isn't the goal.",
      },
      {
        question: "Will it change the color of my urine or stool?",
        answer:
          "Betalains — the pigment that gives beets their color — can cause a harmless pink or red tint (beeturia) in some people. It's not a cause for concern.",
      },
      {
        question: "Can I take it every day?",
        answer:
          "Yes, it's formulated for daily use. Start with a half scoop for the first few days if you're new to nitrate-rich foods, then move to a full scoop.",
      },
      {
        question: "Does it contain caffeine?",
        answer: "No — the energy and endurance support comes from dietary nitrates, not stimulants.",
      },
    ],
    certifications: ["Organic Certified", "Vegan Friendly", "Lab Tested"],
    featured: true,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBez6K93XvMG0NQLKoqXY-ZtcxUM6ngwHRv3zRxQ-fd87YYYN5uDPb-1pe5mbc3MgVc43XCU5Qjrd-8aXSbm6q5D0DM9mwMtubSaPOr3h6-zUP70ZhUOjW0cPNjcZxIz_9chET7S5zr3YoueaviHbW6z0MYp-EmEiBVFCN6v4mNmE5YmHMB2ir7Zp40hkL4TEk7mvO6GyOXp-VqK6_VwrdP4v8V_yKoZh6i5J-4pr_LUP6wCEUmg-faHQ",
      alt: "A premium product shot of 'Beetroot Powder' in a dark violet glass jar with a minimalist cream label. The jar sits on a block of dark grey basalt. A light dusting of deep magenta beetroot powder is scattered around the base. Soft, directional light creates a moody, clinical yet luxurious aesthetic. The background is a clean, off-white studio setting.",
    },
  },
  {
    id: "moringa-powder",
    slug: "moringa-powder",
    name: "Moringa Powder",
    ingredient: "moringa",
    price: 38,
    benefitTag: "Energy",
    benefitLabel: "Natural Energy",
    description: "The ultimate multi-vitamin from nature's miracle tree.",
    longDescription:
      "Moringa oleifera leaves are shade-dried within hours of harvest to lock in a nutrient profile that reads like a multivitamin grown from a single leaf — vitamin A, vitamin C, iron, and a full set of essential amino acids. We stone-mill the leaves whole rather than isolating individual compounds, so you get the fiber and plant chlorophyll along with the micronutrients. The result is a mellow, grassy powder that most people find easier on the stomach than synthetic multivitamins, with none of the crash that comes with caffeine-based energy products.",
    highlights: [
      "Whole-leaf, stone-milled — nothing isolated or synthetic",
      "Naturally high in vitamin A, vitamin C, and iron",
      "Complete essential amino acid profile",
      "Caffeine-free, jitter-free energy support",
    ],
    usage:
      "Stir one teaspoon (3g) into water, tea, or a green smoothie once or twice daily. Its earthy flavor pairs well with citrus or ginger.",
    size: "120g jar — 40 servings",
    nutritionFacts: [
      { label: "Serving Size", value: "3g (1 tsp)" },
      { label: "Vitamin A", value: "22% DV" },
      { label: "Vitamin C", value: "12% DV" },
      { label: "Iron", value: "11% DV" },
      { label: "Calories", value: "10 kcal" },
    ],
    faqs: [
      {
        question: "Does moringa taste like matcha?",
        answer:
          "It's in the same earthy, green-leaf family but milder and grassier — less bitter than matcha, closer to a mild spinach or green tea flavor.",
      },
      {
        question: "Is it a substitute for a multivitamin?",
        answer:
          "It's a whole-food source of many of the same micronutrients, but we'd call it a complement rather than a strict replacement — check with your healthcare provider if you're relying on it for specific deficiencies.",
      },
      {
        question: "Can I take it alongside coffee?",
        answer: "Yes — it's caffeine-free, so it doesn't stack with or offset your coffee's stimulant effect either way.",
      },
    ],
    certifications: ["Organic Certified", "Vegan Friendly", "Non-GMO"],
    featured: true,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhVffL63r0mw9WBum0okkU-xk0eOE7rEpiBODU4SdPVgc9fE0642n1qc8NzYSIraIGRdD7fLfZ_FwMV-w1S3W9t1QrG5nyupW-HAAE8nHAXY_-hjeLvfZxLTZtbWjLnC0RfiuxCEdgzRRjnvSSwHZ2TszTllz4Oz2MOlNgBsx0yUZKNDl_rZ-G954jGT0K3sJN6uHVVEeIAlLsOppqwXjzPaHzG-3XlD9zrs101lsxQV6sUXmkLkn4tQ",
      alt: "A minimalist overhead product shot of 'Moringa Leaf Powder' in a matte white ceramic jar with a natural wood lid. The jar is surrounded by fresh, vibrant green moringa leaves with water droplets. The lighting is bright and high-key, emphasizing a fresh, organic, and scientific wellness brand identity. The color palette is dominated by vivid greens and soft whites.",
    },
  },
  {
    id: "amla-detox-powder",
    slug: "amla-detox-powder",
    name: "Amla Detox Powder",
    ingredient: "amla",
    price: 34,
    benefitTag: "Detox",
    benefitLabel: "System Detox",
    description:
      "Rich in Vitamin C and powerful antioxidants for digestive clarity.",
    longDescription:
      "Amla — Indian gooseberry — has one of the highest natural vitamin C concentrations of any fruit, and unlike synthetic ascorbic acid, its tannins help the vitamin survive digestion intact. We sun-dry the fruit whole and mill it into a fine, tart powder that carries the whole-fruit polyphenol profile, not just an extracted vitamin. It's traditionally used to support digestion and everyday antioxidant load, and works well stirred into anything that can take a citrus-forward, slightly sour edge.",
    highlights: [
      "Among the highest natural vitamin C concentrations of any fruit",
      "Tannin-stabilized vitamin C survives digestion better than synthetics",
      "Whole-fruit polyphenol profile, sun-dried and stone-milled",
      "Third-party tested for purity and heavy metals",
    ],
    usage:
      "Mix half a teaspoon (2g) into warm water first thing in the morning, or blend into a smoothie. Increase gradually to a full teaspoon as your palate adjusts to the tartness.",
    size: "100g jar — 45 servings",
    nutritionFacts: [
      { label: "Serving Size", value: "2g (1/2 tsp)" },
      { label: "Vitamin C", value: "45% DV" },
      { label: "Polyphenols", value: "~120mg" },
      { label: "Calories", value: "7 kcal" },
    ],
    faqs: [
      {
        question: "Why does amla taste so sour?",
        answer:
          "That tartness comes from its natural vitamin C and tannin content — the same compounds that stabilize the vitamin C through digestion. It mellows out when mixed into a smoothie or juice.",
      },
      {
        question: "Is this the same as amla in Ayurvedic medicine?",
        answer:
          "Yes — Phyllanthus emblica has a long history in Ayurvedic tradition for digestion and vitality. We source and process it with modern lab testing on top of that traditional use.",
      },
      {
        question: "How is this different from a vitamin C supplement pill?",
        answer:
          "A synthetic ascorbic acid pill is one isolated compound; amla powder carries the whole-fruit polyphenol and tannin matrix, which is why the vitamin C here tends to be gentler on the stomach for most people.",
      },
    ],
    certifications: ["Organic Certified", "Vegan Friendly", "Lab Tested"],
    featured: true,
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzOwi_Yrvd0oQ34zyWiBoa0mTzoN7fWmCLeH6Mc0PUMGgdlXkgWVebW2r1PgUuoQsu5y2Y8j3YDvY-EPH8givPzMe7lwjfdB3sYXCT4LCwp2vAlcndZWLMzz84YGIZ4oTzaUd74uDIpynlzbWwC_zKVXZqipewtFO5k1mT99IByCjnHKgI_42qY3KJICCBPEC7rUJIft104ZADMgkFR-X0Txr9xIOzgUGXDA6zxgCmmUSVU1stMW1-EA",
      alt: "A clean, minimalist product presentation of Amla Detox Powder in a premium amber glass jar. The jar sits beside a single fresh green amla fruit on a light wood surface. High-key lighting with soft reflections on the glass creates a pharmaceutical yet organic feel. The background is a soft beige clay color, maintaining the modern apothecary theme.",
    },
  },
  {
    id: "amla-essence-powder",
    slug: "amla-essence-powder",
    name: "Amla Essence Powder",
    ingredient: "amla",
    price: 42,
    badge: "New Arrival",
    benefitTag: "Detox",
    benefitLabel: "System Detox",
    description: "Pure sun-dried organic amla, cold-milled for potency.",
    longDescription:
      "A more concentrated take on our Amla Detox Powder: cold-milled rather than heat-processed, which keeps more of the fruit's volatile compounds intact and produces a noticeably finer, more potent powder gram for gram. It's the version we recommend for people who already know they like amla and want a slightly more concentrated everyday dose without changing their routine.",
    highlights: [
      "Cold-milled for a finer, more concentrated powder",
      "100% sun-dried organic amla, no additives",
      "Same tannin-stabilized vitamin C profile as our original detox powder",
      "Gold-embossed jar designed to be refilled, not thrown away",
    ],
    usage:
      "Mix half a teaspoon (2g) into water or juice daily. Because it's more concentrated, start smaller than you would with the standard Amla Detox Powder.",
    size: "80g jar — 40 servings",
    nutritionFacts: [
      { label: "Serving Size", value: "2g (1/2 tsp)" },
      { label: "Vitamin C", value: "55% DV" },
      { label: "Polyphenols", value: "~150mg" },
      { label: "Calories", value: "7 kcal" },
    ],
    faqs: [
      {
        question: "How is Essence different from the standard Amla Detox Powder?",
        answer:
          "Same fruit, cold-milled instead of heat-processed. That preserves more volatile compounds and produces a finer, more concentrated powder — you'll typically use a slightly smaller serving.",
      },
      {
        question: "Is the jar refillable?",
        answer: "Yes — the gold-embossed jar is designed to be reused; we're testing a refill pouch for a future release.",
      },
    ],
    certifications: ["Organic Certified", "Cold-Milled", "Lab Tested"],
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdWbZpIruXuPT9oKJrAeJ6g3m9kMfsuthoqKg2uxUJN6B0HmGf8V6pI8u4ZpdrLx_u8GZ1n-P8EC1jbBnBY5CAeZY01Tgps2nTOA_OaEspQoh1lBoNE9rQ-3reT0BAWHdYMLwATeiRO9SXjDKojB9EYRXqpwrYaD7aNoAB_tXacQVhSx5OWtwryAXFY_ktScO4pn6Ph2MpazPA6xcnblYTlHfP4mX8fVQvx_37kZwEN43yCOH_-G2kfw",
      alt: "Minimalist product packaging for 'Amla Essence Powder'. The container is a matte clay-colored jar with a gold-embossed label sitting on a pristine white marble surface. Soft sunlight creates elegant shadows across the scene. The mood is calm, expensive, and clinical, reflecting a modern apothecary brand identity.",
    },
  },
  {
    id: "amla-detox-tincture",
    slug: "amla-detox-tincture",
    name: "Concentrated Detox Tincture",
    ingredient: "amla",
    price: 58,
    badge: "Limited Batch",
    benefitTag: "Detox",
    benefitLabel: "System Detox",
    description:
      "Fast-acting liquid extraction for immediate metabolic support.",
    longDescription:
      "For days when a powder isn't practical, this tincture delivers the same amla polyphenol profile as a fast-absorbing liquid extract. It's a small-batch, glycerin-based extraction — no alcohol — bottled in amber glass to protect it from light. Because it's a limited seasonal run tied to a single amla harvest, quantities are capped each batch.",
    highlights: [
      "Alcohol-free glycerin extraction, fast to take on the go",
      "Amber glass bottle protects potency from light",
      "Small-batch, seasonal — tied to a single amla harvest",
      "Comes with a calibrated glass dropper for precise dosing",
    ],
    usage:
      "Take one full dropper (1ml) under the tongue or in water, once or twice daily. Shake before use.",
    size: "50ml bottle — approx. 50 doses",
    nutritionFacts: [
      { label: "Serving Size", value: "1ml (1 dropper)" },
      { label: "Vitamin C", value: "30% DV" },
      { label: "Base", value: "Vegetable glycerin, water" },
    ],
    faqs: [
      {
        question: "Why glycerin instead of an alcohol tincture?",
        answer:
          "Glycerin extracts polyphenols effectively without the sharp taste or the caffeine/alcohol-sensitivity concerns some people have with traditional tinctures.",
      },
      {
        question: "How long does a bottle last?",
        answer: "At one dropper daily, a 50ml bottle lasts roughly 50 days. Refrigerate after opening for best shelf life.",
      },
      {
        question: "Why is this a limited batch?",
        answer:
          "It's produced from a single seasonal amla harvest rather than a year-round supply chain, so quantities are capped until the next harvest.",
      },
    ],
    certifications: ["Alcohol-Free", "Small Batch", "Lab Tested"],
    image: {
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXp65Ai7QAMF2HKPBsKXs9xImsJ4BAjEblfZdbClgTcviwpFBUbE5ghkPdNjDlnOPBk-L32NlLkMiwtIg5crLUOW_Ugpb3RCPrW4X1a0VMZtNG-K4a7f2qPyDk4PYb_W5TgJvu3XVdZ0jpH0-fkaQiCzAqQnDSHGHl_Mmcgt_yVoDMVnCZriWVv5UlWQ0_HuMHK8t52oSP-dw4AuIwDBBJfvP7rmcnZE0W5QWPgAgopoTuYy-LoR0yLA",
      alt: "A minimalist amber glass bottle of 'Amla Detox Tincture' with a professional dropper. The bottle is placed on a rough organic stone slab against a neutral muted background. The lighting is focused and clean, highlighting the golden liquid inside. The design is contemporary and medical-grade yet deeply rooted in herbalism.",
    },
  },
  {
    id: "trinity-bundle",
    slug: "trinity-bundle",
    name: "The Trinity Bundle",
    ingredient: "moringa",
    price: 104,
    badge: "Society Special",
    benefitTag: "Energy",
    benefitLabel: "Curated Bundle",
    description:
      "Experience the full spectrum of Apothecary Wellness with our signature powders.",
    longDescription:
      "One jar each of Beetroot Powder, Moringa Powder, and Amla Detox Powder — our three foundational botanicals, bundled at a price below buying them individually. It's the easiest way to build a rotation that covers cardiovascular support, everyday energy, and antioxidant/detox in one order, and the bundle price reflects the full-size 42/38/34 jars, not trial sizes.",
    highlights: [
      "One full-size jar each of Beetroot, Moringa, and Amla Detox powders",
      "Priced below buying all three individually",
      "Covers heart, energy, and detox in a single order",
      "Ships together in one box, one shipment",
    ],
    usage:
      "Rotate through the three powders across your day — beetroot pre-workout, moringa in the morning, amla in the evening — or follow the dosing on each individual jar.",
    size: "3 × full-size jars (150g / 120g / 100g)",
    nutritionFacts: [
      { label: "Contains", value: "Beetroot Powder, Moringa Powder, Amla Detox Powder" },
      { label: "Combined Servings", value: "115 total" },
    ],
    faqs: [
      {
        question: "Can I choose different powders for the bundle?",
        answer: "The Trinity Bundle is fixed to our three foundational powders — it's built around variety, not customization.",
      },
      {
        question: "Does it ship in one box?",
        answer: "Yes, all three jars ship together in a single shipment.",
      },
    ],
    certifications: ["Organic Certified", "Vegan Friendly"],
  },
];

export function getProductsByBenefit(benefit: BenefitTagOrAll): Product[] {
  if (benefit === "all") return products;
  return products.filter((product) => product.benefitTag === benefit);
}

export type BenefitTagOrAll = Product["benefitTag"] | "all";
