"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/catalog";

export default function ProductDetail({ product }: { product: Product }) {
  const [size, setSize] = useState<string | null>(null);
  const { add } = useCart();

  return (
    <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-gutter-mobile py-24 sm:grid-cols-2 sm:gap-16 sm:px-gutter sm:py-32">
      <Reveal>
        <div className="relative aspect-product w-full overflow-hidden bg-ink">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 640px) 50vw, 100vw"
            className="kallen-img object-cover"
          />
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="sm:sticky sm:top-32">
          <p className="font-mono text-xs uppercase tracking-label text-ash">{product.collection}</p>
          <h1 className="mt-3 font-display text-lg uppercase text-bone">{product.name}</h1>
          <p className="mt-3 font-mono text-sm uppercase tracking-label text-bone/80">€{product.price}</p>

          <p className="mt-8 max-w-md font-body text-sm font-light leading-relaxed text-bone/70">
            {product.description}
          </p>

          <div className="mt-10">
            <p className="mb-3 font-mono text-[10px] uppercase tracking-label text-ash">Size</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-10 min-w-10 border px-3 font-mono text-xs uppercase tracking-label transition-colors duration-micro ${
                    size === s
                      ? "border-bone bg-bone text-void"
                      : "border-bone/30 text-bone/80 hover:border-bone/60"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => size && add(product, size)}
            disabled={!size}
            className="mt-10 w-full border border-bone px-6 py-4 font-body text-xs font-light uppercase tracking-nav text-bone transition-colors duration-section hover:bg-bone hover:text-void disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-bone sm:w-auto sm:px-10"
          >
            {size ? "Add to bag" : "Select a size"}
          </button>

          <div className="mt-16 flex flex-col gap-4 border-t border-bone/[0.12] pt-8">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-label text-ash">Passport</span>
              <span className="font-mono text-[10px] uppercase tracking-label text-bone/70">
                Assigned on completion
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[10px] uppercase tracking-label text-ash">Shipping</span>
              <span className="font-mono text-[10px] uppercase tracking-label text-bone/70">
                Free over €150
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
