/**
 * Placeholder photography. This sandbox has no outbound access to image
 * CDNs to verify real Unsplash IDs, so every slot uses Picsum's seeded
 * endpoint instead — it always resolves, which matters more for a demo
 * than curated subject matter. Swap these for real campaign photography
 * (or live Unsplash search) before this goes in front of anyone; every
 * reference lives in this file or inline where it's used.
 */
export function img(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
