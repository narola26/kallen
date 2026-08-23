import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import StoreApplicationForm from "@/components/market/StoreApplicationForm";
import { marketStats } from "@/lib/creator-market";

export const metadata: Metadata = {
  title: "Open a store — KALLÉN Creator Market",
  description:
    "Five production slots, 30–34% of retail, no fees. Apply to open a store in the KALLÉN Creator Market.",
};

const GET = [
  {
    title: "Five production slots",
    body: "Your artwork on real garments, cut and sewn in the same Porto atelier as the main line. Organic cotton blanks, GOTS certified.",
  },
  {
    title: "30 to 34% of retail",
    body: "On every unit, paid on the 1st of each month with no minimum threshold. You see the same sales numbers we do.",
  },
  {
    title: "Your name on the garment",
    body: "Two marks at equal weight, woven at the hem. Your name is also written into the piece's NFC passport, permanently.",
  },
  {
    title: "You keep your rights",
    body: "We license the artwork for the pieces we make together. You keep the copyright and can use the work anywhere else.",
  },
];

const NEED = [
  "Original artwork you own outright — no AI-generated work, no lifted references, no fan art",
  "A body of work we can look at: a site, a grid, a PDF, anything that shows more than three pieces",
  "A point of view that survives being printed at 40cm on a back panel",
  "Willingness to talk about your process — every piece ships with the story attached",
];

const FAQ = [
  {
    q: "Does it cost anything to apply or to open a store?",
    a: "No. No application fee, no slot fee, no sample fee, no minimum order. We carry the production cost. If nothing sells, you owe nothing.",
  },
  {
    q: "Why only five pieces?",
    a: "Because an unlimited store is a content feed, and a five-piece store is an edit. The cap forces the decision about what actually deserves to be made, and it means every store in the market can be understood in ten seconds.",
  },
  {
    q: "Can I change my five later?",
    a: "Yes. Once a piece sells through its run you can retire the slot and put something new in it. What you can't do is run six at once.",
  },
  {
    q: "Who owns the design?",
    a: "You do. We take a licence for the pieces we produce together, limited to those pieces. Your copyright never transfers and you can sell prints, take other clients, do whatever you want with the work elsewhere.",
  },
  {
    q: "What if my design doesn't sell?",
    a: "You owe us nothing — we absorb the production cost. We'd rather find out a piece doesn't land than never make it. After a slow season we'll usually talk about swapping the slot.",
  },
  {
    q: "How selective is it?",
    a: "Roughly one in nine applications opens a store. The most common reason for a no is not quality — it's that the work doesn't change when you put it on a garment.",
  },
  {
    q: "Do I need a following?",
    a: "No. We have looked at follower counts exactly zero times. Two of the strongest stores in the market opened with under 800 followers between them.",
  },
];

export default function ApplyPage() {
  const stats = marketStats();

  return (
    <div>
      {/* Header */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <Link
              href="/creators"
              className="font-mono text-[10px] uppercase tracking-label text-bone/60 transition-colors hover:text-bone"
            >
              ← The Creator Market
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-8 font-mono text-xs uppercase tracking-label text-flare">Applications open</p>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="mt-5 max-w-3xl font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl">
              Open a store
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
              {stats.stores} designers are currently selling through the market and we&apos;ve paid out €
              {stats.paid.toLocaleString()} so far. We open a small number of new stores each month. This
              page is the entire process — there is no second gate.
            </p>
          </Reveal>
        </div>
      </div>

      {/* What you get */}
      <section className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
              What a store gets you
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
            {GET.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="border-t border-bone/20 pt-6">
                  <h3 className="font-display text-sm uppercase leading-tight tracking-[0.06em] text-bone">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-body text-sm font-light leading-relaxed text-bone/70">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we need */}
      <section className="border-t border-bone/10 bg-void/30 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-label text-flare">Before you apply</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-5 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
                  What we&apos;re looking for
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 font-body text-sm font-light leading-relaxed text-bone/60">
                  We say no to about eight in nine applications, almost never because the work is bad.
                  Usually it&apos;s work that already looks finished on screen and gains nothing from
                  being worn.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <ul className="border-t border-bone/20">
                  {NEED.map((item) => (
                    <li key={item} className="flex items-start gap-4 border-b border-bone/10 py-5">
                      <span className="mt-2 h-1 w-1 flex-shrink-0 bg-flare" aria-hidden />
                      <span className="font-body text-sm font-light leading-relaxed text-bone/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare">The application</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-5 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
              Send us the work
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 font-body text-base font-light leading-relaxed text-bone/70">
              Takes about five minutes. A person reads it and replies within 14 days either way.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12">
              <StoreApplicationForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-bone/10 bg-void/30 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
              Straight answers
            </h2>
          </Reveal>
          <div className="mt-12">
            {FAQ.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <details className="group border-b border-bone/10 py-6">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                    <h3 className="font-display text-sm uppercase leading-tight tracking-[0.06em] text-bone transition-colors group-hover:text-flare">
                      {item.q}
                    </h3>
                    <span
                      className="mt-0.5 flex-shrink-0 font-mono text-sm text-bone/50 transition-transform duration-micro group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-5 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-12 font-body text-sm font-light text-bone/60">
              Something not covered here?{" "}
              <a
                href="mailto:creators@kallen.de"
                className="underline transition-colors hover:text-bone"
              >
                creators@kallen.de
              </a>{" "}
              reaches the people who review applications.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
