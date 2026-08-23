import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CollectionCard from "@/components/CollectionCard";
import { COLLECTIONS } from "@/lib/catalog";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Collections — KALLÉN" };

export default function CollectionsPage() {
  return (
    <>
      <PageHero eyebrow="Collections" title="Every drop, every line" image={img("collections-hero", 2000, 1200)} />
      <div className="mx-auto max-w-content px-gutter-mobile py-16 sm:px-gutter sm:py-20">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-20">
          {COLLECTIONS.map((c, i) => (
            <CollectionCard key={c.slug} collection={c} delay={i * 100} />
          ))}
        </div>
      </div>
    </>
  );
}
