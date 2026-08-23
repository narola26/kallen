"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { PRODUCTS, type Product } from "@/lib/catalog";

const CATEGORIES: Array<Product["category"] | "All"> = [
  "All",
  "Tees",
  "Hoodies",
  "Jackets",
  "Pants",
  "Shorts",
  "Sweats",
];
const GENDERS: Array<Product["gender"] | "All"> = ["All", "Men", "Women", "Unisex"];

export default function ShopGrid() {
  const params = useSearchParams();
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [gender, setGender] = useState<(typeof GENDERS)[number]>(
    (params.get("gender") as Product["gender"]) || "All"
  );

  const filtered = useMemo(
    () =>
      PRODUCTS.filter(
        (p) => (category === "All" || p.category === category) && (gender === "All" || p.gender === gender)
      ),
    [category, gender]
  );

  return (
    <div className="mx-auto max-w-content px-gutter-mobile py-16 sm:px-gutter sm:py-20">
      <div className="mb-12 flex flex-col gap-6 sm:mb-16 sm:flex-row sm:items-baseline sm:justify-between">
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`font-mono text-xs uppercase tracking-label transition-colors duration-micro ${
                category === c ? "text-bone" : "text-ash hover:text-bone/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="flex gap-4">
          {GENDERS.map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={`font-mono text-xs uppercase tracking-label transition-colors duration-micro ${
                gender === g ? "text-bone" : "text-ash hover:text-bone/70"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="font-body text-sm font-light text-ash">No pieces match that filter.</p>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-14">
          {filtered.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={(i % 4) * 60} />
          ))}
        </div>
      )}
    </div>
  );
}
