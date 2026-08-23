import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "Saved Items — KALLÉN" };

const SAVED_ITEMS = [
  {
    id: 1,
    name: "Studio Jacket",
    color: "Ink",
    price: "€ 425.00",
    saved: "3 days ago",
  },
  {
    id: 2,
    name: "Minimal Trousers",
    color: "Ash",
    price: "€ 180.00",
    saved: "1 week ago",
  },
];

export default function SavedPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <Link
              href="/account"
              className="font-body text-xs text-bone/60 hover:text-bone transition-colors underline mb-4 block"
            >
              ← Back to account
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-2xl uppercase leading-snug tracking-[0.06em] text-bone sm:text-3xl">
              Saved Items
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
              Your wishlist of KALLÉN pieces. Click to view details or add to cart.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Saved Items */}
      <div className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          {SAVED_ITEMS.length > 0 ? (
            <div className="space-y-6">
              {SAVED_ITEMS.map((item, i) => (
                <Reveal key={item.id} delay={i * 80}>
                  <div className="border border-bone/10 p-6 hover:border-bone/20 hover:bg-void/20 transition-all duration-300">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-center">
                      <div className="sm:col-span-4">
                        <p className="font-display text-sm uppercase text-bone mb-2">{item.name}</p>
                        <p className="font-body text-sm font-light text-bone/70">{item.color}</p>
                      </div>

                      <div className="sm:col-span-3">
                        <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                          Price
                        </p>
                        <p className="font-display text-sm text-bone">{item.price}</p>
                      </div>

                      <div className="sm:col-span-2">
                        <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                          Saved
                        </p>
                        <p className="font-body text-xs text-bone/60">{item.saved}</p>
                      </div>

                      <div className="sm:col-span-3 flex justify-end gap-3">
                        <Link
                          href={`/shop/products/${item.id}`}
                          className="border border-bone/40 px-4 py-2 font-body text-xs font-light uppercase tracking-nav text-bone hover:border-bone hover:bg-bone/5 transition-all duration-300"
                        >
                          View
                        </Link>
                        <button className="border border-bone px-4 py-2 font-body text-xs font-light uppercase tracking-nav text-bone hover:bg-bone hover:text-void transition-all duration-300">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="text-center py-16">
                <p className="font-display text-lg uppercase text-bone mb-4">No Saved Items</p>
                <p className="font-body text-base font-light text-bone/70 mb-8">
                  Save pieces you love as you browse collections.
                </p>
                <Link
                  href="/shop"
                  className="border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone inline-block hover:bg-bone hover:text-void transition-all duration-300"
                >
                  Explore Collections
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </div>
  );
}
