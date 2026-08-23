import { img } from "./images";
import type { Product } from "./catalog";

/**
 * The Creator Market.
 *
 * Independent designers who can draw but can't manufacture get five
 * production slots each. They bring the artwork, KALLÉN brings the
 * blanks, the factory, the passport, and the storefront. Every piece
 * carries two marks — the creator's and ours — and every sale splits.
 *
 * A store is capped at five pieces on purpose. Scarcity is the format.
 */

export type CreatorCategory = "Tees" | "Hoodies" | "Sweats" | "Jackets";

export const CREATOR_CATEGORIES: CreatorCategory[] = ["Tees", "Hoodies", "Sweats", "Jackets"];

export type CreatorProduct = {
  slug: string;
  name: string;
  price: number;
  category: CreatorCategory;
  image: string;
  detail: string;
  colorway: string;
  /** Where the artwork physically sits on the garment. */
  placement: string;
  /** The creator's own words about the design. */
  designNote: string;
  technique: string;
  sizes: string[];
  unitsSold: number;
  badge?: string;
};

export type CreatorStore = {
  slug: string;
  /** The store's name — the creator's imprint, not their legal name. */
  studio: string;
  creator: string;
  discipline: string;
  location: string;
  /** Hex accent that tints this store everywhere it appears. */
  accent: string;
  avatar: string;
  banner: string;
  tagline: string;
  bio: string;
  statement: string[];
  instagram: string;
  joined: string;
  /** Creator's share of the retail price, in percent. */
  split: number;
  featured?: boolean;
  products: CreatorProduct[];
};

const SIZES_TOP = ["XS", "S", "M", "L", "XL"];
const SIZES_HEAVY = ["S", "M", "L", "XL"];

export const CREATOR_STORES: CreatorStore[] = [
  {
    slug: "salt-index",
    studio: "Salt Index",
    creator: "Noor Hadid",
    discipline: "Riso & screenprint",
    location: "Rotterdam, NL",
    accent: "#D98324",
    avatar: img("noor-hadid", 900, 1100),
    banner: img("salt-index-banner", 2400, 1000),
    tagline: "Halftone weather systems, printed until the grain shows.",
    bio: "Noor prints from a two-colour riso in a converted harbour office. Everything she makes is built out of misregistration — the accident where two passes don't quite line up.",
    statement: [
      "I spent four years making prints nobody could wear. Editions of thirty, sold at fairs, framed and put on a wall. The work was about weather and erosion and I was showing it in rooms with climate control.",
      "A garment moves. It gets rained on and washed and worn thin. That is the correct context for this work — I just had no way to make one. A single hoodie costs more to produce than the entire print run it came from.",
      "Five slots is enough. It forces me to decide what actually needs to exist.",
    ],
    instagram: "@salt.index",
    joined: "March 2025",
    split: 32,
    featured: true,
    products: [
      {
        slug: "tide-chart-tee",
        name: "Tide Chart tee",
        price: 89,
        category: "Tees",
        image: img("tide-chart-tee", 900, 1200),
        detail: img("tide-chart-detail", 1400, 1000),
        colorway: "Bone / Rust",
        placement: "Full back panel, 38cm wide",
        designNote:
          "A year of tide readings from the Nieuwe Maas, plotted as a halftone field. The rust pass is deliberately 2mm off — that's where the water is.",
        technique: "Four-colour water-based screenprint",
        sizes: SIZES_TOP,
        unitsSold: 214,
        badge: "Best seller",
      },
      {
        slug: "erosion-study-hoodie",
        name: "Erosion Study hoodie",
        price: 138,
        category: "Hoodies",
        image: img("erosion-study-hoodie", 900, 1200),
        detail: img("erosion-study-detail", 1400, 1000),
        colorway: "Washed black",
        placement: "Left chest mark, full sleeve column",
        designNote:
          "The sleeve runs a sequence of the same shape degraded eleven times through a photocopier. By the cuff there's almost nothing left.",
        technique: "Discharge print on brushed fleece",
        sizes: SIZES_HEAVY,
        unitsSold: 156,
      },
      {
        slug: "harbour-office-crew",
        name: "Harbour Office crew",
        price: 112,
        category: "Sweats",
        image: img("harbour-office-crew", 900, 1200),
        detail: img("harbour-office-detail", 1400, 1000),
        colorway: "Fog grey",
        placement: "Chest band, 26cm",
        designNote: "The building I print in, reduced to eight tones. It is being demolished in 2027.",
        technique: "Two-colour riso separation, screenprinted",
        sizes: SIZES_HEAVY,
        unitsSold: 98,
      },
      {
        slug: "misregister-tee",
        name: "Misregister tee",
        price: 85,
        category: "Tees",
        image: img("misregister-tee", 900, 1200),
        detail: img("misregister-detail", 1400, 1000),
        colorway: "Bone / Cyan",
        placement: "Centre front, 24cm",
        designNote: "Printed correctly, then printed again wrong on top. The second pass is the artwork.",
        technique: "Two-pass screenprint",
        sizes: SIZES_TOP,
        unitsSold: 187,
      },
      {
        slug: "north-sea-jacket",
        name: "North Sea coach jacket",
        price: 195,
        category: "Jackets",
        image: img("north-sea-jacket", 900, 1200),
        detail: img("north-sea-detail", 1400, 1000),
        colorway: "Storm navy",
        placement: "Full back, chest mark",
        designNote: "Six weeks of wind direction data. Every line is one day.",
        technique: "Screenprint on matte nylon",
        sizes: SIZES_HEAVY,
        unitsSold: 71,
        badge: "Low stock",
      },
    ],
  },
  {
    slug: "terreno",
    studio: "Terreno",
    creator: "Diego Salvatierra",
    discipline: "Ceramic glyphs",
    location: "Mexico City, MX",
    accent: "#C2543D",
    avatar: img("diego-salvatierra", 900, 1100),
    banner: img("terreno-banner", 2400, 1000),
    tagline: "Marks pressed into clay, then lifted onto cotton.",
    bio: "Diego makes glazed tiles stamped with a private alphabet. Each garment mark starts as a physical object before it becomes a print.",
    statement: [
      "Every symbol I use exists first as a fired tile. I stamp it, glaze it, photograph it, and only then does it become something you can print. The chips and the pooling glaze come along with it.",
      "People kept asking if they could buy the tiles. They cost more than a plane ticket and weigh four kilos. This is the version that travels.",
    ],
    instagram: "@terreno.mx",
    joined: "April 2025",
    split: 30,
    products: [
      {
        slug: "glaze-pool-tee",
        name: "Glaze Pool tee",
        price: 89,
        category: "Tees",
        image: img("glaze-pool-tee", 900, 1200),
        detail: img("glaze-pool-detail", 1400, 1000),
        colorway: "Sand",
        placement: "Centre front, 30cm",
        designNote: "Where the glaze ran off the edge of the tile and pooled on the kiln shelf.",
        technique: "Photographic screenprint, six tones",
        sizes: SIZES_TOP,
        unitsSold: 143,
      },
      {
        slug: "kiln-mark-hoodie",
        name: "Kiln Mark hoodie",
        price: 142,
        category: "Hoodies",
        image: img("kiln-mark-hoodie", 900, 1200),
        detail: img("kiln-mark-detail", 1400, 1000),
        colorway: "Terracotta",
        placement: "Back yoke, hood interior",
        designNote: "The hood lining carries the firing schedule. Nobody sees it but you.",
        technique: "Discharge print, woven interior label",
        sizes: SIZES_HEAVY,
        unitsSold: 121,
        badge: "Best seller",
      },
      {
        slug: "alphabet-i-crew",
        name: "Alphabet I crew",
        price: 115,
        category: "Sweats",
        image: img("alphabet-i-crew", 900, 1200),
        detail: img("alphabet-i-detail", 1400, 1000),
        colorway: "Bone",
        placement: "Full front, 34cm",
        designNote: "Eleven glyphs from the first set I ever fired. Two of them mean nothing.",
        technique: "Screenprint on loopback cotton",
        sizes: SIZES_HEAVY,
        unitsSold: 88,
      },
      {
        slug: "shard-tee",
        name: "Shard tee",
        price: 85,
        category: "Tees",
        image: img("shard-tee", 900, 1200),
        detail: img("shard-detail", 1400, 1000),
        colorway: "Washed black",
        placement: "Left chest, 12cm",
        designNote: "A tile that cracked in the kiln, printed at actual size.",
        technique: "Single-colour screenprint",
        sizes: SIZES_TOP,
        unitsSold: 167,
      },
      {
        slug: "workshop-jacket",
        name: "Workshop jacket",
        price: 205,
        category: "Jackets",
        image: img("terreno-workshop-jacket", 900, 1200),
        detail: img("terreno-workshop-detail", 1400, 1000),
        colorway: "Clay",
        placement: "Back panel, both sleeves",
        designNote: "The floor plan of my studio, including the crack in the concrete.",
        technique: "Screenprint on cotton canvas",
        sizes: SIZES_HEAVY,
        unitsSold: 54,
      },
    ],
  },
  {
    slug: "silent-frequency",
    studio: "Silent Frequency",
    creator: "Yuki Ando",
    discipline: "Sound-derived type",
    location: "Osaka, JP",
    accent: "#4A9DB5",
    avatar: img("yuki-ando", 900, 1100),
    banner: img("silent-frequency-banner", 2400, 1000),
    tagline: "Letterforms built from waveforms that were never meant to be read.",
    bio: "Yuki records rooms, then turns the spectrograms into type. The words are legible only if you already know what they say.",
    statement: [
      "I record empty rooms — a train station at 4am, a stairwell, a swimming pool with the water drained. Then I take the spectrogram and cut letterforms out of it.",
      "The result is barely readable, and that is correct. You are looking at a room, not a word.",
      "Print was always the wrong surface for this. A flat sheet has no acoustics. Fabric folds, so the letterform moves when you do.",
    ],
    instagram: "@silent.freq",
    joined: "February 2025",
    split: 32,
    featured: true,
    products: [
      {
        slug: "0400-station-tee",
        name: "04:00 Station tee",
        price: 92,
        category: "Tees",
        image: img("station-tee", 900, 1200),
        detail: img("station-detail", 1400, 1000),
        colorway: "Bone / Ice",
        placement: "Full back, 40cm",
        designNote: "Umeda station, empty, recorded at four in the morning. The word is UNREAD.",
        technique: "Fine-mesh screenprint, two tones",
        sizes: SIZES_TOP,
        unitsSold: 231,
        badge: "Best seller",
      },
      {
        slug: "drained-pool-hoodie",
        name: "Drained Pool hoodie",
        price: 145,
        category: "Hoodies",
        image: img("drained-pool-hoodie", 900, 1200),
        detail: img("drained-pool-detail", 1400, 1000),
        colorway: "Chlorine blue",
        placement: "Chest, hood crown",
        designNote: "The echo of an empty pool is nine seconds long. This is all nine.",
        technique: "Puff-free plastisol on heavyweight fleece",
        sizes: SIZES_HEAVY,
        unitsSold: 178,
      },
      {
        slug: "stairwell-crew",
        name: "Stairwell crew",
        price: 118,
        category: "Sweats",
        image: img("stairwell-crew", 900, 1200),
        detail: img("stairwell-detail", 1400, 1000),
        colorway: "Concrete",
        placement: "Vertical spine print, 52cm",
        designNote: "Runs down the back seam. You read it on someone walking away from you.",
        technique: "Screenprint aligned to centre seam",
        sizes: SIZES_HEAVY,
        unitsSold: 104,
      },
      {
        slug: "null-signal-tee",
        name: "Null Signal tee",
        price: 85,
        category: "Tees",
        image: img("null-signal-tee", 900, 1200),
        detail: img("null-signal-detail", 1400, 1000),
        colorway: "Washed black",
        placement: "Centre front, 20cm",
        designNote: "A recording of a room with the microphone switched off.",
        technique: "Tonal screenprint, black on black",
        sizes: SIZES_TOP,
        unitsSold: 139,
      },
      {
        slug: "anechoic-jacket",
        name: "Anechoic jacket",
        price: 215,
        category: "Jackets",
        image: img("anechoic-jacket", 900, 1200),
        detail: img("anechoic-detail", 1400, 1000),
        colorway: "Slate",
        placement: "Back panel, 44cm",
        designNote: "An anechoic chamber has no reverb at all. The plot is almost a flat line, which is the point.",
        technique: "Reflective screenprint on nylon",
        sizes: SIZES_HEAVY,
        unitsSold: 62,
        badge: "Low stock",
      },
    ],
  },
  {
    slug: "adire-study",
    studio: "Adire Study",
    creator: "Amara Okonkwo",
    discipline: "Resist-dye systems",
    location: "Lagos, NG",
    accent: "#3D5A98",
    avatar: img("amara-okonkwo", 900, 1100),
    banner: img("adire-study-banner", 2400, 1000),
    tagline: "Yoruba resist patterns, rebuilt as code and returned to cloth.",
    bio: "Amara reconstructs traditional adire eleko patterns algorithmically, then prints them back onto fabric — a loop from hand to machine to hand.",
    statement: [
      "My grandmother made adire eleko with cassava paste and a chicken feather. I rebuilt her patterns in code so they could be measured, and what I found is that they were never regular. The irregularity was the signature.",
      "So the generator has her error rate built into it. It makes new patterns that are wrong in the same way hers were wrong.",
      "This is not a print of a tradition. It is the tradition, continued by other means.",
    ],
    instagram: "@adire.study",
    joined: "May 2025",
    split: 34,
    products: [
      {
        slug: "eleko-generator-tee",
        name: "Eleko Generator tee",
        price: 89,
        category: "Tees",
        image: img("eleko-generator-tee", 900, 1200),
        detail: img("eleko-generator-detail", 1400, 1000),
        colorway: "Indigo / Bone",
        placement: "All-over, seam to seam",
        designNote: "Generated with my grandmother's measured error rate. No two panels repeat.",
        technique: "All-over rotary print on organic cotton",
        sizes: SIZES_TOP,
        unitsSold: 203,
        badge: "Best seller",
      },
      {
        slug: "cassava-hoodie",
        name: "Cassava hoodie",
        price: 148,
        category: "Hoodies",
        image: img("cassava-hoodie", 900, 1200),
        detail: img("cassava-detail", 1400, 1000),
        colorway: "Deep indigo",
        placement: "Back panel, 42cm",
        designNote: "The paste resist leaves a crackle when it dries. I spent three months getting the crackle right in code.",
        technique: "Discharge print, hand-finished",
        sizes: SIZES_HEAVY,
        unitsSold: 134,
      },
      {
        slug: "olokun-crew",
        name: "Olokun crew",
        price: 120,
        category: "Sweats",
        image: img("olokun-crew", 900, 1200),
        detail: img("olokun-detail", 1400, 1000),
        colorway: "Indigo",
        placement: "Chest and shoulders",
        designNote: "Named for the pattern my grandmother used most. It means the sea.",
        technique: "Screenprint, four passes",
        sizes: SIZES_HEAVY,
        unitsSold: 96,
      },
      {
        slug: "resist-error-tee",
        name: "Resist Error tee",
        price: 85,
        category: "Tees",
        image: img("resist-error-tee", 900, 1200),
        detail: img("resist-error-detail", 1400, 1000),
        colorway: "Bone",
        placement: "Centre front, 28cm",
        designNote: "One tile from the generator, blown up until the algorithm's mistakes are visible.",
        technique: "Single-pass screenprint",
        sizes: SIZES_TOP,
        unitsSold: 151,
      },
      {
        slug: "lagos-workshop-jacket",
        name: "Lagos Workshop jacket",
        price: 210,
        category: "Jackets",
        image: img("lagos-workshop-jacket", 900, 1200),
        detail: img("lagos-workshop-jacket-detail", 1400, 1000),
        colorway: "Indigo / Natural",
        placement: "Full garment",
        designNote: "Cut from panels I dyed by hand in Lagos, then finished in Porto.",
        technique: "Hand-dyed panels, machine-assembled",
        sizes: SIZES_HEAVY,
        unitsSold: 47,
        badge: "Hand-dyed",
      },
    ],
  },
  {
    slug: "null-state",
    studio: "Null State",
    creator: "Tomás Bergqvist",
    discipline: "Brutalist systems",
    location: "Stockholm, SE",
    accent: "#7C9A6E",
    avatar: img("tomas-bergqvist", 900, 1100),
    banner: img("null-state-banner", 2400, 1000),
    tagline: "System fonts, hard grids, nothing decorative left in.",
    bio: "Tomás designs with the typefaces already installed on your machine and nothing else. No custom type, no illustration, no effects.",
    statement: [
      "I use only fonts that ship with the operating system. Helvetica, Courier, the ugly ones. Constraint is the entire method.",
      "Streetwear graphics have become illustration. I wanted to see what was left if you removed illustration entirely and just set text on a grid.",
      "What is left is information. A garment that tells you something instead of showing you something.",
    ],
    instagram: "@null.state",
    joined: "January 2025",
    split: 30,
    products: [
      {
        slug: "system-font-tee",
        name: "System Font tee",
        price: 82,
        category: "Tees",
        image: img("system-font-tee", 900, 1200),
        detail: img("system-font-detail", 1400, 1000),
        colorway: "Bone / Black",
        placement: "Full back, 12-column grid",
        designNote: "Every word on this garment is set in a font you already own.",
        technique: "Single-colour screenprint",
        sizes: SIZES_TOP,
        unitsSold: 189,
        badge: "Best seller",
      },
      {
        slug: "grid-fail-hoodie",
        name: "Grid Fail hoodie",
        price: 135,
        category: "Hoodies",
        image: img("grid-fail-hoodie", 900, 1200),
        detail: img("grid-fail-detail", 1400, 1000),
        colorway: "Moss",
        placement: "Chest block, 22cm",
        designNote: "The grid is correct. The content overflows it. I left the overflow in.",
        technique: "Screenprint on brushed fleece",
        sizes: SIZES_HEAVY,
        unitsSold: 142,
      },
      {
        slug: "monospace-crew",
        name: "Monospace crew",
        price: 110,
        category: "Sweats",
        image: img("monospace-crew", 900, 1200),
        detail: img("monospace-detail", 1400, 1000),
        colorway: "Concrete",
        placement: "Chest line, sleeve rule",
        designNote: "One line of Courier at 92pt. Nothing else on the garment.",
        technique: "Screenprint, one pass",
        sizes: SIZES_HEAVY,
        unitsSold: 117,
      },
      {
        slug: "error-404-tee",
        name: "Status 404 tee",
        price: 82,
        category: "Tees",
        image: img("status-404-tee", 900, 1200),
        detail: img("status-404-detail", 1400, 1000),
        colorway: "Washed black",
        placement: "Left chest, 8cm",
        designNote: "A server response, set at label size. Most people miss it entirely.",
        technique: "Fine screenprint",
        sizes: SIZES_TOP,
        unitsSold: 164,
      },
      {
        slug: "specimen-jacket",
        name: "Specimen jacket",
        price: 198,
        category: "Jackets",
        image: img("specimen-jacket", 900, 1200),
        detail: img("specimen-jacket-detail", 1400, 1000),
        colorway: "Olive",
        placement: "Back panel type specimen",
        designNote: "A full type specimen sheet, printed at garment scale. Every weight, every size.",
        technique: "Screenprint on cotton twill",
        sizes: SIZES_HEAVY,
        unitsSold: 58,
      },
    ],
  },
  {
    slug: "second-language",
    studio: "Second Language",
    creator: "Rina Petrov",
    discipline: "Hybrid lettering",
    location: "Tbilisi, GE",
    accent: "#8B6BB1",
    avatar: img("rina-petrov", 900, 1100),
    banner: img("second-language-banner", 2400, 1000),
    tagline: "Letters that belong to two alphabets and neither.",
    bio: "Rina draws lettering that sits between Georgian, Cyrillic and Latin — readable to nobody, familiar to everyone.",
    statement: [
      "I grew up reading three alphabets before I was ten. They all mean the same sounds and none of them look alike.",
      "So I draw letters that could belong to any of them. People from each language tell me they can almost read it. Nobody can actually read it.",
      "That gap is the work — the moment where you recognise a shape as writing before you know what it says.",
    ],
    instagram: "@second.lang",
    joined: "June 2025",
    split: 32,
    products: [
      {
        slug: "almost-legible-tee",
        name: "Almost Legible tee",
        price: 88,
        category: "Tees",
        image: img("almost-legible-tee", 900, 1200),
        detail: img("almost-legible-detail", 1400, 1000),
        colorway: "Bone / Violet",
        placement: "Full back, 36cm",
        designNote: "Six letters. Three alphabets. No word.",
        technique: "Two-colour screenprint",
        sizes: SIZES_TOP,
        unitsSold: 176,
        badge: "Best seller",
      },
      {
        slug: "third-alphabet-hoodie",
        name: "Third Alphabet hoodie",
        price: 140,
        category: "Hoodies",
        image: img("third-alphabet-hoodie", 900, 1200),
        detail: img("third-alphabet-detail", 1400, 1000),
        colorway: "Aubergine",
        placement: "Chest, both cuffs",
        designNote: "The cuffs carry the same letter in two scripts. They meet when you fold your arms.",
        technique: "Screenprint, cuff embroidery",
        sizes: SIZES_HEAVY,
        unitsSold: 128,
      },
      {
        slug: "mother-tongue-crew",
        name: "Mother Tongue crew",
        price: 116,
        category: "Sweats",
        image: img("mother-tongue-crew", 900, 1200),
        detail: img("mother-tongue-detail", 1400, 1000),
        colorway: "Bone",
        placement: "Chest band, 30cm",
        designNote: "The only piece where the letters do spell something. In a language I made up.",
        technique: "Screenprint on heavy loopback",
        sizes: SIZES_HEAVY,
        unitsSold: 93,
      },
      {
        slug: "transliteration-tee",
        name: "Transliteration tee",
        price: 85,
        category: "Tees",
        image: img("transliteration-tee", 900, 1200),
        detail: img("transliteration-detail", 1400, 1000),
        colorway: "Washed black",
        placement: "Centre front, 26cm",
        designNote: "My name, written four ways, none of them correct.",
        technique: "Single-colour screenprint",
        sizes: SIZES_TOP,
        unitsSold: 148,
      },
      {
        slug: "border-jacket",
        name: "Border jacket",
        price: 202,
        category: "Jackets",
        image: img("border-jacket", 900, 1200),
        detail: img("border-jacket-detail", 1400, 1000),
        colorway: "Deep violet",
        placement: "Back panel, collar stand",
        designNote: "The collar reads one way from inside and another from outside.",
        technique: "Two-sided screenprint",
        sizes: SIZES_HEAVY,
        unitsSold: 51,
      },
    ],
  },
  {
    slug: "plantain-club",
    studio: "Plantain Club",
    creator: "Kofi Mensah",
    discipline: "Market signage",
    location: "Accra, GH",
    accent: "#D4A017",
    avatar: img("kofi-mensah", 900, 1100),
    banner: img("plantain-club-banner", 2400, 1000),
    tagline: "Hand-painted shopfront lettering, kept exactly as found.",
    bio: "Kofi photographs and redraws hand-painted signage from Makola Market — sign painters' work, credited and paid forward.",
    statement: [
      "Every letter I use was painted by somebody with a brush on a wall in Accra. I photograph it, redraw it, and I pay the painter.",
      "That last part matters. This lettering gets lifted constantly by brands who have never been to Ghana. The painters see nothing.",
      "Half of my share on every piece goes back to the painter whose letters are on it. Their name is in the passport.",
    ],
    instagram: "@plantain.club",
    joined: "March 2025",
    split: 34,
    products: [
      {
        slug: "makola-tee",
        name: "Makola tee",
        price: 89,
        category: "Tees",
        image: img("makola-tee", 900, 1200),
        detail: img("makola-detail", 1400, 1000),
        colorway: "Bone / Gold",
        placement: "Full front, 32cm",
        designNote: "Lettering by Emmanuel Tetteh, painted on a fabric stall in 2019. He is credited in the passport.",
        technique: "Three-colour screenprint",
        sizes: SIZES_TOP,
        unitsSold: 198,
        badge: "Best seller",
      },
      {
        slug: "sign-painter-hoodie",
        name: "Sign Painter hoodie",
        price: 144,
        category: "Hoodies",
        image: img("sign-painter-hoodie", 900, 1200),
        detail: img("sign-painter-hoodie-detail", 1400, 1000),
        colorway: "Ochre",
        placement: "Back panel, 40cm",
        designNote: "Four signs from four painters, arranged as one composition. All four are named inside.",
        technique: "Screenprint on brushed fleece",
        sizes: SIZES_HEAVY,
        unitsSold: 131,
      },
      {
        slug: "kiosk-crew",
        name: "Kiosk crew",
        price: 114,
        category: "Sweats",
        image: img("kiosk-crew", 900, 1200),
        detail: img("kiosk-detail", 1400, 1000),
        colorway: "Bone",
        placement: "Chest, 28cm",
        designNote: "A phone-credit kiosk sign. The most beautiful typography in the city is selling airtime.",
        technique: "Two-colour screenprint",
        sizes: SIZES_HEAVY,
        unitsSold: 87,
      },
      {
        slug: "hand-lettered-tee",
        name: "Hand Lettered tee",
        price: 85,
        category: "Tees",
        image: img("hand-lettered-tee", 900, 1200),
        detail: img("hand-lettered-detail", 1400, 1000),
        colorway: "Washed black",
        placement: "Left chest, 14cm",
        designNote: "One word, one painter, one brush. Redrawn at exactly the size it was painted.",
        technique: "Single-colour screenprint",
        sizes: SIZES_TOP,
        unitsSold: 159,
      },
      {
        slug: "market-jacket",
        name: "Market coach jacket",
        price: 208,
        category: "Jackets",
        image: img("market-jacket", 900, 1200),
        detail: img("market-jacket-detail", 1400, 1000),
        colorway: "Gold / Black",
        placement: "Back panel, chest, sleeves",
        designNote: "Eleven signs. Eleven painters. Every one of them paid and named.",
        technique: "Screenprint on cotton canvas",
        sizes: SIZES_HEAVY,
        unitsSold: 44,
        badge: "Low stock",
      },
    ],
  },
  {
    slug: "marble-error",
    studio: "Marble Error",
    creator: "Elif Demir",
    discipline: "Ebru & glitch",
    location: "Istanbul, TR",
    accent: "#C4657E",
    avatar: img("elif-demir", 900, 1100),
    banner: img("marble-error-banner", 2400, 1000),
    tagline: "Five-hundred-year-old marbling, corrupted on purpose.",
    bio: "Elif marbles paper the traditional way, scans it, then breaks the file. What comes out is half Ottoman craft, half data damage.",
    statement: [
      "Ebru is water marbling. You float pigment, comb it, and lift it onto paper in one attempt. There is no undo.",
      "I scan the result and then deliberately corrupt the file — byte-level damage, shifted headers. The image tears in ways water never would.",
      "Two kinds of accident stacked on each other. One from the sixteenth century, one from a broken JPEG.",
    ],
    instagram: "@marble.error",
    joined: "July 2025",
    split: 32,
    products: [
      {
        slug: "corrupt-ebru-tee",
        name: "Corrupt Ebru tee",
        price: 92,
        category: "Tees",
        image: img("corrupt-ebru-tee", 900, 1200),
        detail: img("corrupt-ebru-detail", 1400, 1000),
        colorway: "Bone / Rose",
        placement: "All-over, seam to seam",
        designNote: "Marbled in a tray in Kadıköy, then damaged at byte 4,096.",
        technique: "All-over rotary print",
        sizes: SIZES_TOP,
        unitsSold: 182,
        badge: "Best seller",
      },
      {
        slug: "data-tear-hoodie",
        name: "Data Tear hoodie",
        price: 146,
        category: "Hoodies",
        image: img("data-tear-hoodie", 900, 1200),
        detail: img("data-tear-detail", 1400, 1000),
        colorway: "Rose dust",
        placement: "Back panel, 44cm",
        designNote: "The tear runs exactly where the file broke. I did not move it.",
        technique: "Sublimation panel, cut and sewn",
        sizes: SIZES_HEAVY,
        unitsSold: 119,
      },
      {
        slug: "float-crew",
        name: "Float crew",
        price: 118,
        category: "Sweats",
        image: img("float-crew", 900, 1200),
        detail: img("float-detail", 1400, 1000),
        colorway: "Pale rose",
        placement: "Chest, 30cm",
        designNote: "The only piece with no corruption. Pure ebru, lifted once, printed once.",
        technique: "Photographic screenprint",
        sizes: SIZES_HEAVY,
        unitsSold: 101,
      },
      {
        slug: "header-shift-tee",
        name: "Header Shift tee",
        price: 85,
        category: "Tees",
        image: img("header-shift-tee", 900, 1200),
        detail: img("header-shift-detail", 1400, 1000),
        colorway: "Washed black",
        placement: "Centre front, 30cm",
        designNote: "The same marbling, decoded wrong four times. All four are on the garment.",
        technique: "Four-panel screenprint",
        sizes: SIZES_TOP,
        unitsSold: 137,
      },
      {
        slug: "kadikoy-jacket",
        name: "Kadıköy jacket",
        price: 212,
        category: "Jackets",
        image: img("kadikoy-jacket", 900, 1200),
        detail: img("kadikoy-jacket-detail", 1400, 1000),
        colorway: "Rose / Storm",
        placement: "Full garment",
        designNote: "Each jacket is cut from a different section of the same corrupted scan. No two match.",
        technique: "Sublimated panels, individually cut",
        sizes: SIZES_HEAVY,
        unitsSold: 39,
        badge: "One of one",
      },
    ],
  },
];

/** Every store is capped at this many production slots. */
export const SLOTS_PER_STORE = 5;

export function getStore(slug: string) {
  return CREATOR_STORES.find((s) => s.slug === slug);
}

export function getStoreProduct(storeSlug: string, productSlug: string) {
  const store = getStore(storeSlug);
  if (!store) return undefined;
  const product = store.products.find((p) => p.slug === productSlug);
  if (!product) return undefined;
  return { store, product };
}

export function featuredStores() {
  return CREATOR_STORES.filter((s) => s.featured);
}

export function storeUnitsSold(store: CreatorStore) {
  return store.products.reduce((sum, p) => sum + p.unitsSold, 0);
}

/** What this store has earned from its share of retail, to date. */
export function storeEarnings(store: CreatorStore) {
  const gross = store.products.reduce((sum, p) => sum + p.price * p.unitsSold, 0);
  return Math.round((gross * store.split) / 100);
}

export function storeBestSeller(store: CreatorStore) {
  return store.products.reduce((best, p) => (p.unitsSold > best.unitsSold ? p : best), store.products[0]);
}

export function storesByCategory(category: CreatorCategory | "All") {
  if (category === "All") return CREATOR_STORES;
  return CREATOR_STORES.filter((s) => s.products.some((p) => p.category === category));
}

export function marketStats() {
  const units = CREATOR_STORES.reduce((sum, s) => sum + storeUnitsSold(s), 0);
  const paid = CREATOR_STORES.reduce((sum, s) => sum + storeEarnings(s), 0);
  return {
    stores: CREATOR_STORES.length,
    pieces: CREATOR_STORES.reduce((sum, s) => sum + s.products.length, 0),
    units,
    paid,
    countries: new Set(CREATOR_STORES.map((s) => s.location.split(", ")[1])).size,
  };
}

/**
 * Adapts a creator piece into the shape the existing bag expects, so
 * market products drop into the same cart as the main line without the
 * cart needing to know the market exists.
 */
export function toCartProduct(store: CreatorStore, product: CreatorProduct): Product {
  return {
    slug: `${store.slug}--${product.slug}`,
    name: product.name,
    price: product.price,
    image: product.image,
    category: product.category,
    gender: "Unisex",
    collection: `${store.studio} × KALLÉN`,
    description: product.designNote,
    sizes: product.sizes,
    badge: product.badge,
  };
}
