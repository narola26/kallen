import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import CoBrandLockup from "@/components/market/CoBrandLockup";
import CreatorAddToBag from "@/components/market/CreatorAddToBag";
import CreatorProductCard from "@/components/market/CreatorProductCard";
import { CREATOR_STORES, getStoreProduct } from "@/lib/creator-market";

type Params = { slug: string; product: string };

export function generateStaticParams() {
  return CREATOR_STORES.flatMap((store) =>
    store.products.map((product) => ({ slug: store.slug, product: product.slug }))
  );
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const found = getStoreProduct(params.slug, params.product);
  if (!found) return { title: "KALLÉN" };
  return {
    title: `${found.product.name} — ${found.store.studio} × KALLÉN`,
    description: found.product.designNote,
  };
}

export default function CreatorProductPage({ params }: { params: Params }) {
  const found = getStoreProduct(params.slug, params.product);
  if (!found) notFound();

  const { store, product } = found;
  const slot = store.products.findIndex((p) => p.slug === product.slug) + 1;
  const siblings = store.products.filter((p) => p.slug !== product.slug);

  return (
    <div style={{ ["--accent" as string]: store.accent }}>
      {/* Breadcrumb */}
      <div className="border-b border-bone/10 px-gutter-mobile py-5 sm:px-gutter">
        <div className="mx-auto flex max-w-content flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-label text-bone/50">
          <Link href="/creators" className="transition-colors hover:text-bone">
            Market
          </Link>
          <span aria-hidden>/</span>
          <Link
            href={`/creators/${store.slug}`}
            className="text-[color:var(--accent)] transition-opacity hover:opacity-70"
          >
            {store.studio}
          </Link>
          <span aria-hidden>/</span>
          <span className="text-bone/70">{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-gutter-mobile py-16 sm:px-gutter sm:py-20 lg:grid-cols-12 lg:gap-16">
        {/* Images */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="relative aspect-product w-full overflow-hidden bg-ink">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="kallen-img object-cover"
              />
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[color:var(--accent)]" aria-hidden />
              <span className="absolute right-4 top-4 font-mono text-[10px] uppercase tracking-label text-bone/70">
                Slot 0{slot}/05
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative mt-4 aspect-editorial w-full overflow-hidden bg-ink">
              <Image
                src={product.detail}
                alt={`${product.name} — print detail`}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="kallen-img object-cover"
              />
              <span className="absolute bottom-4 left-4 bg-void/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-label text-bone">
                Print detail
              </span>
            </div>
          </Reveal>
        </div>

        {/* Buy column */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <CoBrandLockup studio={store.studio} accent={store.accent} size="base" />
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-md uppercase leading-snug tracking-[0.06em] text-bone lg:text-lg">
                {product.name}
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                <p className="font-display text-md text-bone">€{product.price}</p>
                <span className="font-mono text-[10px] uppercase tracking-label text-bone/50">
                  {product.colorway}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-label text-bone/50">
                  {product.unitsSold} sold
                </span>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-10">
                <CreatorAddToBag store={store} product={product} />
              </div>
            </Reveal>

            <Reveal delay={260}>
              <ul className="mt-10 space-y-3 border-t border-bone/10 pt-8">
                {[
                  "Free EU shipping over €150 · DHL GoGreen",
                  "30-day returns, prepaid label",
                  "NFC passport woven at the hem",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-3 font-body text-xs font-light text-bone/60"
                  >
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-[color:var(--accent)]" aria-hidden />
                    {line}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Design note */}
      <section className="border-t border-bone/10 bg-void/30 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-label text-[color:var(--accent)]">
                  On this design
                </p>
              </Reveal>
              <Reveal delay={80}>
                <blockquote className="mt-6 border-l-2 border-[color:var(--accent)] pl-6">
                  <p className="font-body text-base font-light leading-relaxed text-bone/85">
                    “{product.designNote}”
                  </p>
                  <footer className="mt-5 flex items-center gap-3">
                    <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden bg-ink">
                      <Image
                        src={store.avatar}
                        alt={store.creator}
                        fill
                        sizes="36px"
                        className="kallen-img object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-body text-xs text-bone">{store.creator}</p>
                      <p className="mt-0.5 font-mono text-[10px] uppercase tracking-label text-bone/50">
                        {store.studio}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="border-t border-bone/20">
                  {[
                    { k: "Placement", v: product.placement },
                    { k: "Technique", v: product.technique },
                    { k: "Colourway", v: product.colorway },
                    { k: "Category", v: product.category },
                    { k: "Sizes", v: product.sizes.join(" · ") },
                    { k: "Made in", v: "Porto, Portugal" },
                    { k: "Creator share", v: `${store.split}% of retail to ${store.creator}` },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex flex-col gap-1 border-b border-bone/10 py-5 sm:flex-row sm:items-baseline sm:gap-8"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-label text-bone/50 sm:w-36 sm:flex-shrink-0">
                        {row.k}
                      </p>
                      <p className="font-body text-sm font-light text-bone/85">{row.v}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the store */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="font-mono text-xs uppercase tracking-label text-[color:var(--accent)]">
                  The rest of the store
                </p>
                <h2 className="mt-5 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
                  {store.studio} · remaining slots
                </h2>
              </div>
              <Link
                href={`/creators/${store.slug}`}
                className="link-underline font-body text-xs font-light uppercase tracking-nav text-bone/70"
              >
                Enter the store →
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-4 sm:gap-x-6">
            {siblings.map((p, i) => (
              <CreatorProductCard
                key={p.slug}
                store={store}
                product={p}
                slot={store.products.findIndex((x) => x.slug === p.slug) + 1}
                delay={i * 60}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
