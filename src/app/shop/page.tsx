import { Suspense } from "react";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ShopGrid from "@/components/shop/ShopGrid";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Shop — KALLÉN" };

export default function ShopPage() {
  return (
    <>
      <PageHero eyebrow="Shop" title="All pieces" image={img("shop-hero", 2000, 1200)} />
      <Suspense fallback={null}>
        <ShopGrid />
      </Suspense>
    </>
  );
}
