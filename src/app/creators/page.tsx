import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import MarketBrowser from "@/components/market/MarketBrowser";
import MarketStats from "@/components/market/MarketStats";
import CoBrandLockup from "@/components/market/CoBrandLockup";
import { featuredStores, marketStats, storeUnitsSold, SLOTS_PER_STORE } from "@/lib/creator-market";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "The Creator Market — KALLÉN",
  description:
    "Independent designers get five production slots each. They bring the artwork, we bring the factory. Every piece carries both marks and every sale splits.",
};

const STEPS = [
  {
    n: "01",
    title: "Apply with your work",
    body: "Send the designs, not a CV. We look at what you make and whether it belongs on a garment. Roughly one in nine applications opens a store.",
  },
  {
    n: "02",
    title: "You get five slots",
    body: "Five pieces. That's the whole store, permanently. The cap is the format — it forces the edit and it keeps every store readable in ten seconds.",
  },
  {
    n: "03",
    title: "Two marks, one garment",
    body: "Your artwork and the KALLÉN mark, set at the same weight. We handle blanks, printing, the Porto atelier, the NFC passport, and shipping.",
  },
  {
    n: "04",
    title: "It sells, you're paid",
    body: "You keep 30–34% of retail on every unit. No sample fees, no slot fees, no minimum order. Paid out on the 1st, every month, no threshold.",
  },
];

const SPLIT_ROWS = [
  { label: "Creator share", value: "30 to 34%", note: "Paid monthly, no minimum" },
  { label: "Blank, print & make", value: "38%", note: "Porto atelier, organic cotton" },
  { label: "Passport, ship & platform", value: "22%", note: "NFC chip, DHL GoGreen, storefront" },
  { label: "KALLÉN margin", value: "6 to 10%", note: "What's left after the above" },
];

export default function CreatorMarketPage() {
  const stats = marketStats();
  const featured = featuredStores();

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[78vh] w-full items-end overflow-hidden bg-ink">
        <div className="absolute inset-0">
          <Image
            src={img("creator-market-hero", 2400, 1400)}
            alt=""
            fill
            priority
            className="kallen-img object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/30" />
        </div>

        <div className="relative z-10 w-full px-gutter-mobile pb-16 sm:px-gutter sm:pb-20">
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-label text-flare">The Creator Market</p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-5 max-w-4xl font-display text-lg uppercase leading-[1.05] tracking-[0.04em] text-bone sm:text-xl lg:text-2xl">
                You can draw it.
                <br />
                You just can&apos;t make one.
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl font-body text-base font-light leading-relaxed text-bone/75">
                A factory won&apos;t run forty units. So the best apparel graphics being made right now
                exist as JPEGs and nothing else. We gave {stats.stores} designers five production slots
                each — their artwork, our mark, our atelier, split revenue.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#market"
                  className="border border-bone bg-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-void transition-colors duration-micro hover:bg-transparent hover:text-bone"
                >
                  Browse the market
                </a>
                <Link
                  href="/creators/apply"
                  className="border border-bone/40 px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone/80 transition-colors duration-micro hover:border-bone hover:text-bone"
                >
                  Open a store
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-bone/10 bg-void/30 px-gutter-mobile py-16 sm:px-gutter sm:py-20">
        <div className="mx-auto max-w-content">
          <MarketStats
            stats={[
              { label: "Open stores", value: stats.stores },
              { label: "Pieces in production", value: stats.pieces },
              { label: "Units sold", value: stats.units },
              { label: "Paid to creators", value: stats.paid, prefix: "€" },
            ]}
          />
        </div>
      </section>

      {/* How it works */}
      <section className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare">How it works</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 max-w-2xl font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
              From a file on your desktop to a garment with a passport
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <Reveal key={step.n} delay={i * 80}>
                <div className="border-t border-bone/20 pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-label text-flare">{step.n}</p>
                  <h3 className="mt-4 font-display text-sm uppercase leading-tight tracking-[0.06em] text-bone">
                    {step.title}
                  </h3>
                  <p className="mt-4 font-body text-sm font-light leading-relaxed text-bone/70">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured stores */}
      {featured.map((store, index) => (
        <section
          key={store.slug}
          className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section"
          style={{ ["--accent" as string]: store.accent }}
        >
          <div className="mx-auto max-w-content">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-label text-[color:var(--accent)]">
                Store in focus
              </p>
            </Reveal>

            <div
              className={`mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal className="lg:col-span-7">
                <Link href={`/creators/${store.slug}`} className="group block">
                  <div className="relative aspect-editorial w-full overflow-hidden bg-ink">
                    <Image
                      src={store.banner}
                      alt={store.studio}
                      fill
                      sizes="(min-width: 1024px) 58vw, 100vw"
                      className="kallen-img object-cover transition-transform duration-section ease-entrance group-hover:scale-[1.04]"
                    />
                    <span className="absolute left-0 top-0 h-full w-1 bg-[color:var(--accent)]" aria-hidden />
                  </div>
                </Link>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-5">
                <CoBrandLockup studio={store.studio} accent={store.accent} size="lg" />
                <h2 className="mt-6 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
                  {store.tagline}
                </h2>
                <p className="mt-6 font-body text-base font-light leading-relaxed text-bone/70">
                  {store.bio}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
                  <div>
                    <p className="font-display text-md text-bone">{storeUnitsSold(store).toLocaleString()}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-bone/50">
                      Units sold
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-md text-bone">
                      {store.products.length}/{SLOTS_PER_STORE}
                    </p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-bone/50">
                      Slots used
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-md text-[color:var(--accent)]">{store.split}%</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-bone/50">
                      To the creator
                    </p>
                  </div>
                </div>

                <Link
                  href={`/creators/${store.slug}`}
                  className="link-underline mt-10 inline-block font-body text-xs font-light uppercase tracking-nav text-bone"
                >
                  Enter {store.studio} →
                </Link>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      {/* The market */}
      <section
        id="market"
        className="scroll-mt-24 border-t border-bone/10 bg-void/30 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section"
      >
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare">The market</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 max-w-2xl font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
              {stats.stores} stores. {stats.pieces} pieces. {stats.countries} countries.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
              Every store is capped at five pieces and every piece is made in the same Porto atelier as
              the main line. Browse by store to see a designer&apos;s full edit, or by piece to see
              everything at once.
            </p>
          </Reveal>

          <div className="mt-14">
            <MarketBrowser />
          </div>
        </div>
      </section>

      {/* The split */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-label text-flare">Where the money goes</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
                  The split, printed in full
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 font-body text-base font-light leading-relaxed text-bone/70">
                  Most collaboration deals are a flat fee and a handshake. This is a revenue share, and
                  the whole breakdown is on this page because a creator should be able to do the maths
                  before they apply — not after.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="mt-6 font-body text-sm font-light leading-relaxed text-bone/60">
                  Every unit is recorded in the piece&apos;s digital passport, and creators see the same
                  sales figures we do. There is no version of the numbers that only we can see.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="border-t border-bone/20">
                  {SPLIT_ROWS.map((row) => (
                    <div
                      key={row.label}
                      className="flex items-baseline justify-between gap-6 border-b border-bone/10 py-6"
                    >
                      <div>
                        <p className="font-display text-sm uppercase tracking-[0.06em] text-bone">
                          {row.label}
                        </p>
                        <p className="mt-2 font-body text-xs font-light text-bone/50">{row.note}</p>
                      </div>
                      <p className="flex-shrink-0 font-display text-md text-bone">{row.value}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="border-t border-bone/10 bg-void/30 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare">Applications open</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl">
              Five slots are waiting for someone
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 font-body text-base font-light leading-relaxed text-bone/70">
              We open a small number of stores each month. No fee to apply, no fee to open, and you keep
              your rights to everything you make.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <Link
              href="/creators/apply"
              className="mt-10 inline-block border border-bone bg-bone px-10 py-4 font-body text-xs font-light uppercase tracking-nav text-void transition-colors duration-micro hover:bg-transparent hover:text-bone"
            >
              Apply for a store
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
