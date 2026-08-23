import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/motion/Reveal";
import ProductCard from "@/components/ProductCard";
import { COLLECTIONS, getCollection, productsInCollection } from "@/lib/catalog";

export function generateStaticParams() {
  return COLLECTIONS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const collection = getCollection(params.slug);
  return { title: collection ? `${collection.name} — KALLÉN` : "KALLÉN" };
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  const collection = getCollection(params.slug);
  if (!collection) notFound();
  const products = productsInCollection(collection.name);

  return (
    <>
      <PageHero eyebrow={collection.season} title={collection.name} subtitle={collection.blurb} image={collection.image} />

      <div className="mx-auto max-w-3xl px-gutter-mobile py-16 sm:px-gutter sm:py-20">
        <Reveal>
          <div className="flex flex-col gap-6">
            {collection.story.map((p, i) => (
              <p key={i} className="font-body text-base font-light leading-relaxed text-bone/80">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>

      {products.length > 0 && (
        <div className="mx-auto max-w-content px-gutter-mobile pb-24 sm:px-gutter sm:pb-32">
          <Reveal>
            <p className="mb-12 font-mono text-xs uppercase tracking-label text-flare sm:mb-16">
              The pieces
            </p>
          </Reveal>
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-14">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={i * 60} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
