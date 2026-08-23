"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { toCartProduct, type CreatorProduct, type CreatorStore } from "@/lib/creator-market";

/**
 * Size select + add. Market pieces are mapped into the standard product
 * shape on the way in, so they land in the same bag as the main line.
 */
export default function CreatorAddToBag({
  store,
  product,
}: {
  store: CreatorStore;
  product: CreatorProduct;
}) {
  const [size, setSize] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const { add } = useCart();

  const creatorCut = Math.round((product.price * store.split) / 100);

  return (
    <div style={{ ["--accent" as string]: store.accent }}>
      <div className="flex items-center justify-between">
        <p className="font-mono text-[10px] uppercase tracking-label text-bone/50">Size</p>
        <a
          href="/size-guide"
          className="font-mono text-[10px] uppercase tracking-label text-bone/50 underline hover:text-bone"
        >
          Size guide
        </a>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {product.sizes.map((s) => (
          <button
            key={s}
            onClick={() => {
              setSize(s);
              setError(false);
            }}
            aria-pressed={size === s}
            className={`min-w-12 border px-4 py-2 font-body text-xs font-light uppercase tracking-nav transition-colors duration-micro ${
              size === s
                ? "border-bone bg-bone text-void"
                : "border-bone/20 text-bone/70 hover:border-bone/50 hover:text-bone"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {error && (
        <p className="mt-3 font-body text-xs text-flare">Choose a size first.</p>
      )}

      <button
        onClick={() => {
          if (!size) {
            setError(true);
            return;
          }
          add(toCartProduct(store, product), size);
        }}
        className="mt-6 w-full border border-bone bg-bone px-8 py-4 font-body text-xs font-light uppercase tracking-nav text-void transition-colors duration-micro hover:bg-transparent hover:text-bone"
      >
        Add to bag — €{product.price}
      </button>

      <p className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-label text-bone/50">
        <span className="h-1.5 w-1.5 bg-[color:var(--accent)]" aria-hidden />
        €{creatorCut} of this goes to {store.creator}
      </p>
    </div>
  );
}
