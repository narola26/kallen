import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import CoBrandLockup from "@/components/market/CoBrandLockup";
import CreatorProductCard from "@/components/market/CreatorProductCard";
import StoreCard from "@/components/market/StoreCard";
import {
  CREATOR_STORES,
  SLOTS_PER_STORE,
  getStore,
  storeBestSeller,
  storeEarnings,
  storeUnitsSold,
} from "@/lib/creator-market";

export function generateStaticParams() {
  return CREATOR_STORES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const store = getStore(params.slug);
  if (!store) return { title: "KALLÉN" };
  return {
    title: `${store.studio} × KALLÉN — Creator Market`,
    description: store.tagline,
  };
}

export default function StorePage({ params }: { params: { slug: string } }) {
  const store = getStore(params.slug);
  if (!store) notFound();

  const units = storeUnitsSold(store);
  const earnings = storeEarnings(store);
  const bestSeller = storeBestSeller(store);
  const others = CREATOR_STORES.filter((s) => s.slug !== store.slug).slice(0, 2);

  return (
    <div style={{ ["--accent" as string]: store.accent }}>
      {/* Store banner */}
      <section className="relative flex min-h-[60vh] w-full items-end overflow-hidden bg-ink sm:min-h-[70vh]">
        <div className="absolute inset-0">
          <Image src={store.banner} alt="" fill priority className="kallen-img object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/20" />
        </div>
        <span className="absolute bottom-0 left-0 z-10 h-1 w-full bg-[color:var(--accent)]" aria-hidden />

        <div className="relative z-10 w-full px-gutter-mobile pb-14 sm:px-gutter sm:pb-16">
          <div className="mx-auto max-w-content">
            <Reveal>
              <Link
                href="/creators"
                className="font-mono text-[10px] uppercase tracking-label text-bone/60 transition-colors hover:text-bone"
              >
                ← The Creator Market
              </Link>
            </Reveal>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <Reveal delay={80}>
                  <CoBrandLockup studio={store.studio} accent={store.accent} size="lg" />
                </Reveal>
                <Reveal delay={140}>
                  <h1 className="mt-5 font-display text-lg uppercase leading-none tracking-[0.04em] text-bone sm:text-xl">
                    {store.studio}
                  </h1>
                </Reveal>
                <Reveal delay={200}>
                  <p className="mt-5 max-w-xl font-body text-base font-light leading-relaxed text-bone/75">
                    {store.tagline}
                  </p>
                </Reveal>
              </div>

              <Reveal delay={260}>
                <div className="flex items-center gap-4">
                  <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden bg-ink">
                    <Image
                      src={store.avatar}
                      alt={store.creator}
                      fill
                      sizes="64px"
                      className="kallen-img object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-body text-sm text-bone">{store.creator}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-bone/60">
                      {store.discipline} · {store.location}
                    </p>
                    <a
                      href={`https://instagram.com/${store.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline mt-2 inline-block font-mono text-[10px] uppercase tracking-label text-[color:var(--accent)]"
                    >
                      {store.instagram}
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Store stats */}
      <section className="border-b border-bone/10 bg-void/30 px-gutter-mobile py-12 sm:px-gutter sm:py-14">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
              <div>
                <p className="font-display text-lg leading-none text-bone">{units.toLocaleString()}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-label text-bone/50">Units sold</p>
              </div>
              <div>
                <p className="font-display text-lg leading-none text-[color:var(--accent)]">
                  €{earnings.toLocaleString()}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-label text-bone/50">
                  Paid to {store.creator.split(" ")[0]}
                </p>
              </div>
              <div>
                <p className="font-display text-lg leading-none text-bone">
                  {store.products.length}/{SLOTS_PER_STORE}
                </p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-label text-bone/50">Slots used</p>
              </div>
              <div>
                <p className="font-display text-lg leading-none text-bone">{store.joined}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-label text-bone/50">Store opened</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Statement */}
      <section className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-label text-[color:var(--accent)]">
                  In their words
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p className="mt-5 font-display text-sm uppercase leading-tight tracking-[0.06em] text-bone/60">
                  {store.discipline}
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              {store.statement.map((p, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p className="mb-7 max-w-2xl font-body text-base font-light leading-relaxed text-bone/80 last:mb-0">
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The five pieces */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-label text-[color:var(--accent)]">
                  The store
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
                  Five pieces, and that is the whole edit
                </h2>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <p className="font-mono text-[10px] uppercase tracking-label text-bone/50">
                Best seller · {bestSeller.name}
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5">
            {store.products.map((product, i) => (
              <CreatorProductCard
                key={product.slug}
                store={store}
                product={product}
                slot={i + 1}
                delay={(i % 5) * 60}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Two marks */}
      <section className="border-t border-bone/10 bg-void/30 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-label text-[color:var(--accent)]">
                  Two marks
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
                  {store.studio} made the artwork. We made the garment.
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 font-body text-base font-light leading-relaxed text-bone/70">
                  Every piece in this store carries both marks at the same weight — never a small credit
                  under a big logo. {store.creator} keeps the rights to the artwork. We keep the atelier
                  running.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-10 inline-flex flex-col gap-4 border border-bone/20 p-6">
                  <CoBrandLockup studio={store.studio} accent={store.accent} size="lg" />
                  <p className="font-mono text-[10px] uppercase tracking-label text-bone/50">
                    Woven at the hem of every piece
                  </p>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="border-t border-bone/20">
                  {[
                    {
                      k: "Artwork",
                      v: `${store.creator}, ${store.location}`,
                      note: "Rights retained by the creator",
                    },
                    { k: "Cut & sewn", v: "Porto atelier, Portugal", note: "15 named seamstresses, living wage" },
                    { k: "Cloth", v: "Organic cotton, GOTS certified", note: "Same blanks as the main line" },
                    { k: "Passport", v: "NFC chip at the hem", note: "Names the creator and the maker" },
                    {
                      k: "Revenue",
                      v: `${store.split}% of retail to ${store.creator.split(" ")[0]}`,
                      note: "Paid monthly, no threshold",
                    },
                  ].map((row) => (
                    <div
                      key={row.k}
                      className="flex flex-col gap-1 border-b border-bone/10 py-5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                    >
                      <p className="font-mono text-[10px] uppercase tracking-label text-bone/50 sm:w-32 sm:flex-shrink-0">
                        {row.k}
                      </p>
                      <div className="sm:flex-1">
                        <p className="font-body text-sm font-light text-bone">{row.v}</p>
                        <p className="mt-1 font-body text-xs font-light text-bone/50">{row.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Other stores */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
                Other stores in the market
              </h2>
              <Link
                href="/creators"
                className="link-underline font-body text-xs font-light uppercase tracking-nav text-bone/70"
              >
                See all {CREATOR_STORES.length} →
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
            {others.map((s, i) => (
              <StoreCard key={s.slug} store={s} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
