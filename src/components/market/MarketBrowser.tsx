"use client";

import { useMemo, useState } from "react";
import StoreCard from "@/components/market/StoreCard";
import CreatorProductCard from "@/components/market/CreatorProductCard";
import {
  CREATOR_CATEGORIES,
  CREATOR_STORES,
  storeUnitsSold,
  type CreatorCategory,
  type CreatorProduct,
  type CreatorStore,
} from "@/lib/creator-market";

type View = "stores" | "pieces";
type Sort = "trending" | "newest" | "price-low" | "price-high";

const SORTS: { value: Sort; label: string }[] = [
  { value: "trending", label: "Trending" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price ↑" },
  { value: "price-high", label: "Price ↓" },
];

const FILTERS: (CreatorCategory | "All")[] = ["All", ...CREATOR_CATEGORIES];

/**
 * The market floor. Two ways in: browse the stores, or browse every
 * piece across all of them. Filtering by category narrows both — in
 * store view it hides stores that don't make that category at all.
 */
export default function MarketBrowser() {
  const [view, setView] = useState<View>("stores");
  const [category, setCategory] = useState<CreatorCategory | "All">("All");
  const [sort, setSort] = useState<Sort>("trending");

  const stores = useMemo(() => {
    const list =
      category === "All"
        ? [...CREATOR_STORES]
        : CREATOR_STORES.filter((s) => s.products.some((p) => p.category === category));

    switch (sort) {
      case "newest":
        return list.reverse();
      case "price-low":
        return list.sort((a, b) => minPrice(a) - minPrice(b));
      case "price-high":
        return list.sort((a, b) => maxPrice(b) - maxPrice(a));
      default:
        return list.sort((a, b) => storeUnitsSold(b) - storeUnitsSold(a));
    }
  }, [category, sort]);

  const pieces = useMemo(() => {
    const flat: { store: CreatorStore; product: CreatorProduct }[] = [];
    for (const store of CREATOR_STORES) {
      for (const product of store.products) {
        if (category === "All" || product.category === category) flat.push({ store, product });
      }
    }

    switch (sort) {
      case "newest":
        return flat.reverse();
      case "price-low":
        return flat.sort((a, b) => a.product.price - b.product.price);
      case "price-high":
        return flat.sort((a, b) => b.product.price - a.product.price);
      default:
        return flat.sort((a, b) => b.product.unitsSold - a.product.unitsSold);
    }
  }, [category, sort]);

  const count = view === "stores" ? stores.length : pieces.length;

  return (
    <div>
      {/* Controls */}
      <div className="flex flex-col gap-6 border-b border-bone/10 pb-8">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-5">
          {/* View toggle */}
          <div className="flex items-center border border-bone/20">
            {(["stores", "pieces"] as View[]).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                aria-pressed={view === v}
                className={`px-5 py-2 font-body text-xs font-light uppercase tracking-nav transition-colors duration-micro ${
                  view === v ? "bg-bone text-void" : "text-bone/70 hover:text-bone"
                }`}
              >
                {v === "stores" ? "Stores" : "All pieces"}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-mono text-[10px] uppercase tracking-label text-bone/40">Sort</span>
            {SORTS.map((s) => (
              <button
                key={s.value}
                onClick={() => setSort(s.value)}
                aria-pressed={sort === s.value}
                className={`font-mono text-[10px] uppercase tracking-label transition-colors duration-micro ${
                  sort === s.value ? "text-flare" : "text-bone/50 hover:text-bone"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              aria-pressed={category === c}
              className={`border px-4 py-1.5 font-body text-xs font-light uppercase tracking-nav transition-colors duration-micro ${
                category === c
                  ? "border-bone bg-bone text-void"
                  : "border-bone/20 text-bone/70 hover:border-bone/50 hover:text-bone"
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto font-mono text-[10px] uppercase tracking-label text-bone/40">
            {count} {view === "stores" ? (count === 1 ? "store" : "stores") : count === 1 ? "piece" : "pieces"}
          </span>
        </div>
      </div>

      {/* Results */}
      {view === "stores" ? (
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {stores.map((store, i) => (
            <StoreCard key={store.slug} store={store} delay={(i % 2) * 80} />
          ))}
        </div>
      ) : (
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
          {pieces.map(({ store, product }, i) => (
            <CreatorProductCard
              key={`${store.slug}-${product.slug}`}
              store={store}
              product={product}
              delay={(i % 4) * 60}
              showStore
            />
          ))}
        </div>
      )}

      {count === 0 && (
        <p className="mt-16 text-center font-body text-sm font-light text-bone/60">
          Nothing in this category yet. New stores open every month.
        </p>
      )}
    </div>
  );
}

function minPrice(store: CreatorStore) {
  return Math.min(...store.products.map((p) => p.price));
}

function maxPrice(store: CreatorStore) {
  return Math.max(...store.products.map((p) => p.price));
}
