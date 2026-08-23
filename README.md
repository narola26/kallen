# KALLÉN

Visual demo for the KALLÉN streetwear site. Next.js 14 (App Router) + TypeScript + Tailwind, GSAP/ScrollTrigger for scroll reveals, Lenis for smooth scroll, Framer Motion for page transitions and micro-interactions. No backend — the bag/checkout/newsletter/contact forms are UI only.

## Run it

```
npm install
npm run dev
```

Open (https://kallenweb.netlify.app/).

## Placeholder images

This was built in a sandboxed environment with no access to image CDNs, so every photo slot uses [Picsum](https://picsum.photos) (`src/lib/images.ts`) instead of real campaign or Unsplash photography — it's guaranteed to load, but the subject matter is random, not curated. Swap in real photography (or live Unsplash search) before showing this anywhere beyond an internal review; every reference is a single URL, so it's a fast pass once you're local.

## Structure

- `src/lib/catalog.ts` — all product/collection/creator/article data (mock, no backend)
- `src/components/home/*` — homepage sections
- `src/components/motion/*` — Reveal (GSAP ScrollTrigger), SmoothScroll (Lenis), PageTransition (Framer Motion)
- `src/app/*` — routes (shop, collections, creators, journal, club, about, contact, legal, etc.)

## Known gaps to revisit

- German legal pages (`/legal/*`) have bracketed placeholder fields (`[Firmenname]`, `[HRB-Nummer]`, etc.) and need review by someone qualified before this is ever public.
- Newsletter/contact/join/track-order forms show a local confirmation state but don't send anywhere.
