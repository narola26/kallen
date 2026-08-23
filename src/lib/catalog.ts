import { img } from "./images";

export type Product = {
  slug: string;
  name: string;
  price: number;
  image: string;
  category: "Tees" | "Hoodies" | "Jackets" | "Pants" | "Shorts" | "Sweats";
  gender: "Men" | "Women" | "Unisex";
  collection: string;
  description: string;
  sizes: string[];
  badge?: string;
};

export type Collection = {
  slug: string;
  name: string;
  season: string;
  image: string;
  blurb: string;
  story: string[];
};

export type Creator = {
  slug: string;
  name: string;
  role: string;
  location: string;
  image: string;
  bio: string;
  instagram: string;
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  body: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "residue-tee",
    name: "Residue tee",
    price: 89,
    image: img("residue-tee", 900, 1200),
    category: "Tees",
    gender: "Unisex",
    collection: "Residue",
    description:
      "240gsm organic cotton, screen-printed with the Residue artwork. Boxed fit, dropped shoulder, ribbed neck.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "fragment-hoodie",
    name: "Fragment hoodie",
    price: 120,
    image: img("fragment-hoodie", 900, 1200),
    category: "Hoodies",
    gender: "Unisex",
    collection: "Residue",
    description:
      "Brushed-back fleece in washed black. Oversized cut, double-layer hood, raw hem. Woven KALLÉN monogram at the chest.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "trace-jacket",
    name: "Trace jacket",
    price: 175,
    image: img("trace-jacket", 900, 1200),
    category: "Jackets",
    gender: "Unisex",
    collection: "Residue",
    description:
      "Matte nylon shell, water-repellent and packable. Built for the in-between seasons. Hidden zip pockets.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "origin-pant",
    name: "Origin pant",
    price: 145,
    image: img("origin-pant", 900, 1200),
    category: "Pants",
    gender: "Unisex",
    collection: "Residue",
    description:
      "Wide-leg cargo in garment-dyed twill. Low-rise, drawcord waist, six pockets. Dyed individually — no two are identical.",
    sizes: ["XS", "S", "M", "L", "XL"],
    badge: "New",
  },
  {
    slug: "essential-tee",
    name: "Essential tee",
    price: 49,
    image: img("essential-tee", 900, 1200),
    category: "Tees",
    gender: "Unisex",
    collection: "Core",
    description:
      "180gsm organic cotton, regular fit. No print, no logo — the fabric and the cut, in three weights of black.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  },
  {
    slug: "core-hoodie",
    name: "Core hoodie",
    price: 95,
    image: img("core-hoodie", 900, 1200),
    category: "Hoodies",
    gender: "Unisex",
    collection: "Core",
    description:
      "Mid-weight fleece, clean silhouette. Kangaroo pocket, flat drawcords, a brushed interior that holds its shape.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "studio-crew",
    name: "Studio crew",
    price: 79,
    image: img("studio-crew", 900, 1200),
    category: "Sweats",
    gender: "Unisex",
    collection: "Core",
    description:
      "Loopback cotton crewneck. Relaxed fit, ribbed cuffs, a woven label at the hem. The piece we reach for every morning.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "daily-short",
    name: "Daily short",
    price: 59,
    image: img("daily-short", 900, 1200),
    category: "Shorts",
    gender: "Unisex",
    collection: "Core",
    description: "Above-knee, garment-dyed twill. Elastic waist, flat drawcord, two deep pockets.",
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    slug: "monochrome-tee",
    name: "Monochrome tee",
    price: 65,
    image: img("monochrome-tee", 900, 1200),
    category: "Tees",
    gender: "Women",
    collection: "Monochrome",
    description: "Fitted, high neck, cropped length. Built to layer under tailoring or stand alone.",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    slug: "shadow-hoodie",
    name: "Shadow hoodie",
    price: 135,
    image: img("shadow-hoodie", 900, 1200),
    category: "Hoodies",
    gender: "Unisex",
    collection: "Monochrome",
    description: "Oversized pullover in heavyweight French terry. Tonal label, dropped shoulder, deep hood.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "field-jacket",
    name: "Field jacket",
    price: 210,
    image: img("field-jacket", 900, 1200),
    category: "Jackets",
    gender: "Women",
    collection: "Monochrome",
    description: "Waxed cotton, corduroy collar. Four bellows pockets, an internal drawcord for shape.",
    sizes: ["XS", "S", "M", "L"],
  },
  {
    slug: "static-tee",
    name: "Static tee",
    price: 69,
    image: img("static-tee", 900, 1200),
    category: "Tees",
    gender: "Unisex",
    collection: "Streets",
    description:
      "Distorted-screen print across the chest. 220gsm cotton, boxy fit, raw-cut hem. Each print sits slightly offset.",
    sizes: ["S", "M", "L", "XL"],
    badge: "New",
  },
  {
    slug: "riot-hoodie",
    name: "Riot hoodie",
    price: 155,
    image: img("riot-hoodie", 900, 1200),
    category: "Hoodies",
    gender: "Unisex",
    collection: "Streets",
    description:
      "400gsm heavyweight fleece. Double-layer hood, raw hem, small woven label. Wear it November through March.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    slug: "ink-crew",
    name: "Ink crew",
    price: 99,
    image: img("ink-crew", 900, 1200),
    category: "Sweats",
    gender: "Men",
    collection: "Streets",
    description: "Garment-dyed black, heavyweight. Structured standing collar, a dense and lasting feel.",
    sizes: ["S", "M", "L", "XL"],
  },
];

export const COLLECTIONS: Collection[] = [
  {
    slug: "residue",
    name: "Residue",
    season: "Drop 01 · Spring/Summer 2026",
    image: img("residue-collection", 1800, 1100),
    blurb: "What remains when intention fades.",
    story: [
      "Residue began with a painting — layered acrylic, built up and scraped back until only the trace of each gesture remained. We asked the same question of the clothes: what is left when you strip away the noise.",
      "Eight pieces in washed black and raw undyed cotton. Every garment is dyed individually, so no two are identical. The texture is intentional.",
      "Residue is not a season. It will not be reprinted.",
    ],
  },
  {
    slug: "core",
    name: "Core",
    season: "Always available",
    image: img("core-collection", 1800, 1100),
    blurb: "The foundation. Made the same way, every time.",
    story: [
      "Core is the permanent line — the tee, the hoodie, the crewneck, the short, refined over three years with nothing left to remove.",
      "Same organic cotton, same factory, season after season. No drops, no scarcity. The pieces a wardrobe is built on.",
    ],
  },
  {
    slug: "monochrome",
    name: "Monochrome",
    season: "Autumn/Winter 2026",
    image: img("monochrome-collection", 1800, 1100),
    blurb: "One colour, explored fully.",
    story: [
      "Black is not one thing. Washed, faded, matte, waxed, brushed — this collection treats it as a material to be shaped, not a colour to apply.",
      "Arrives October. Club members see it first.",
    ],
  },
  {
    slug: "streets",
    name: "Streets",
    season: "Autumn/Winter 2026",
    image: img("streets-collection", 1800, 1100),
    blurb: "Heavyweight fleece for the cold months.",
    story: [
      "The winter capsule — dense brushed fleece, garment-dyed in small batches so the colour settles into the seams.",
      "Seasonal, not limited. When spring comes, the heaviest weights go away until next year.",
    ],
  },
];

export const CREATORS: Creator[] = [
  {
    slug: "anika-weiss",
    name: "Anika Weiss",
    role: "Resident artist",
    location: "Berlin, DE",
    image: img("anika-weiss", 900, 1100),
    bio: "Anika is the painter behind Residue. Her work explores layering and erasure — what remains when a surface is built up and scraped back. She works from our Berlin studio.",
    instagram: "@anika.weiss",
  },
  {
    slug: "mateo-r",
    name: "Mateo R.",
    role: "Photographer",
    location: "Paris, FR",
    image: img("mateo-r", 900, 1100),
    bio: "Mateo shoots the street, not the studio. His images for KALLÉN are shot on 35mm film in the cities where the clothes are worn. No styling, no second takes.",
    instagram: "@mateo.r",
  },
  {
    slug: "lou-henri",
    name: "Lou Henri",
    role: "Designer",
    location: "Porto, PT",
    image: img("lou-henri", 900, 1100),
    bio: "Lou leads the Core line — three years spent refining four pieces until there was nothing left to remove.",
    instagram: "@lou.henri",
  },
  {
    slug: "kai-nakamura",
    name: "Kai Nakamura",
    role: "Filmmaker",
    location: "Tokyo, JP",
    image: img("kai-nakamura", 900, 1100),
    bio: "Kai makes a short film for each drop, following the garment from factory floor to street in under three minutes.",
    instagram: "@kai.nkmr",
  },
];

export const ARTICLES: Article[] = [
  {
    slug: "from-raw-material",
    category: "Process",
    title: "From raw material to ready garment",
    excerpt: "Inside the atelier where every piece begins its journey.",
    image: img("raw-material", 1600, 1000),
    date: "12 February 2026",
    readTime: "6 min",
    body: [
      "Every KALLÉN piece starts as a bolt of raw organic cotton on a table in our Porto workshop. Before a single cut is made, the fabric is inspected by hand for weight, weave, and consistency.",
      "Cutting is done by hand, not machine. A skilled cutter produces forty garments a day. We do not try to make them go faster.",
      "One machinist assembles the entire garment, checks it, and signs the interior label — the first entry in the piece's digital passport.",
      "Dyeing is the last step. Garment-dyeing means the colour settles differently on every seam. It is slower and more expensive, and it is the reason no two pieces are identical.",
    ],
  },
  {
    slug: "the-kallen-story",
    category: "Brand",
    title: "The KALLÉN story",
    excerpt: "How a blank canvas became the passport for a new kind of streetwear.",
    image: img("kallen-story", 1600, 1000),
    date: "28 January 2026",
    readTime: "8 min",
    body: [
      "KALLÉN began with a question: what if a garment could tell you where it came from — not a marketing story, the actual record, from the field that grew the cotton to the person who sewed the final seam.",
      "The answer became the digital passport: a record attached to every piece, read from the NFC chip woven into the hem. Scan it and see the cotton's origin, the factory, the machinist, the dyer, the finish date.",
      "We started with one product — the Essential tee — and spent eighteen months on it before adding a second.",
      "Residue is the next step: the first time artwork has gone on a garment, and the first collection that will not be reprinted.",
    ],
  },
  {
    slug: "the-digital-passport",
    category: "Process",
    title: "Inside the digital passport",
    excerpt: "How we trace every garment from cotton field to your hands.",
    image: img("digital-passport", 1600, 1000),
    date: "5 March 2026",
    readTime: "5 min",
    body: [
      "The passport is a record, not a certificate. It does not prove authenticity — the garment does that. It tells the story of how this specific piece came to be.",
      "Each passport is created when the garment is finished and locked to its serial number. It cannot be edited, only extended. When you buy a piece, the passport transfers to you. When you sell it, it transfers again.",
      "Transparency is the only credible response to an industry that has hidden its supply chain for too long.",
    ],
  },
  {
    slug: "residue-on-the-street",
    category: "Campaign",
    title: "Shooting Residue on the street",
    excerpt: "No studio, no lighting, no styling — just the clothes and the city.",
    image: img("residue-street", 1600, 1000),
    date: "20 March 2026",
    readTime: "4 min",
    body: [
      "The Residue campaign was shot over three nights in Berlin, Paris, and Tokyo. No studio, no lighting kit, no stylist. One camera, three rolls of film.",
      "The brief was simple: wear the clothes the way you would wear them. The images are grainy, underexposed in places, and honest.",
    ],
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}
export function getCollection(slug: string) {
  return COLLECTIONS.find((c) => c.slug === slug);
}
export function getCreator(slug: string) {
  return CREATORS.find((c) => c.slug === slug);
}
export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}
export function productsInCollection(name: string) {
  return PRODUCTS.filter((p) => p.collection.toLowerCase() === name.toLowerCase());
}
