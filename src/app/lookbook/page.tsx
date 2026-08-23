import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Lookbook — KALLÉN" };

const LOOKBOOKS = [
  {
    id: 1,
    season: "Spring 2025",
    title: "Worn. Intentional. Timeless.",
    excerpt: "A collection designed for people who wear first, think later. Every piece carries proof.",
    image: img("lookbook-spring-2025", 2000, 1200),
    featured: true,
  },
  {
    id: 2,
    season: "Winter 2024",
    title: "Layers of Purpose",
    excerpt: "Raw materials. Honest construction. Garments built to last through seasons.",
    image: img("lookbook-winter-2024", 2000, 1200),
    featured: false,
  },
  {
    id: 3,
    season: "Fall 2024",
    title: "Studio Notes",
    excerpt: "Inside our Berlin studio: how every piece comes to life.",
    image: img("lookbook-fall-2024", 2000, 1200),
    featured: false,
  },
];

const EDITORIAL = [
  {
    id: 1,
    title: "The Cotton Question",
    excerpt: "Where does your cotton come from? We trace every fiber back to the farm.",
    readTime: "5 min read",
    image: img("editorial-cotton", 1200, 800),
  },
  {
    id: 2,
    title: "Meet the Makers",
    excerpt: "Introducing the seamstresses who stitch your pieces. Names, faces, stories.",
    readTime: "8 min read",
    image: img("editorial-makers", 1200, 800),
  },
  {
    id: 3,
    title: "Beyond Fast Fashion",
    excerpt: "Why we designed pieces that last decades, not seasons.",
    readTime: "6 min read",
    image: img("editorial-longevity", 1200, 800),
  },
];

export default function LookbookPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] w-full items-center justify-center overflow-hidden bg-ink px-gutter-mobile py-20 sm:px-gutter">
        <div className="absolute inset-0">
          <Image
            src={img("lookbook-hero", 2000, 1200)}
            alt="KALLÉN Lookbook Hero"
            fill
            priority
            className="kallen-img object-cover"
          />
          <div className="absolute inset-0 bg-void/50" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-label text-flare">Visual Stories</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-xl uppercase leading-snug tracking-[0.06em] text-bone sm:text-2xl">
              KALLÉN Lookbook
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl font-body text-lg font-light leading-relaxed text-bone/80 mx-auto">
              How our pieces are worn. How they&apos;re made. The stories behind every stitch.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Lookbook */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare mb-4">Latest</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-8">
              {LOOKBOOKS.map((lookbook, i) => (
                <Link key={lookbook.id} href={`/lookbook/${lookbook.id}`}>
                  <Reveal delay={160 + i * 100}>
                    <div className="group cursor-pointer">
                      <div className="relative aspect-[16/9] overflow-hidden bg-ink mb-6">
                        <Image
                          src={lookbook.image}
                          alt={lookbook.title}
                          fill
                          sizes="(min-width: 1024px) 100vw, 100vw"
                          className="kallen-img object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="space-y-3">
                        <p className="font-mono text-[10px] uppercase tracking-label text-flare">
                          {lookbook.season}
                        </p>
                        <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone group-hover:text-flare transition-colors sm:text-xl">
                          {lookbook.title}
                        </h2>
                        <p className="font-body text-base font-light text-bone/70 max-w-2xl">
                          {lookbook.excerpt}
                        </p>
                        <div className="pt-4">
                          <span className="font-mono text-[10px] uppercase tracking-label text-bone/60 group-hover:text-bone transition-colors">
                            View Lookbook →
                          </span>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare mb-4">Stories</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl mb-16">
              Our Editorial
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {EDITORIAL.map((article, i) => (
              <Reveal key={article.id} delay={160 + i * 100}>
                <Link href={`/editorial/${article.id}`} className="group">
                  <div className="relative aspect-square overflow-hidden bg-ink mb-6">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="kallen-img object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="font-display text-sm uppercase leading-tight text-bone group-hover:text-flare transition-colors flex-1">
                        {article.title}
                      </h3>
                    </div>
                    <p className="font-body text-sm font-light text-bone/70">
                      {article.excerpt}
                    </p>
                    <div className="flex justify-between items-center pt-4">
                      <span className="font-mono text-[10px] uppercase tracking-label text-bone/60">
                        {article.readTime}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-label text-bone/60 group-hover:text-bone transition-colors">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-8">
              Archive
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {["Summer 2024", "Spring 2024", "Winter 2023", "Fall 2023"].map((season) => (
                <button
                  key={season}
                  className="text-left border border-bone/10 p-4 hover:border-bone/30 hover:bg-void/20 transition-all duration-300"
                >
                  <p className="font-display text-sm uppercase text-bone hover:text-flare transition-colors">
                    {season}
                  </p>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content text-center">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-4">
              Follow Our Story
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-body text-base font-light text-bone/70 mb-8 max-w-2xl mx-auto">
              New lookbooks, editorial, and behind-the-scenes content. Stay updated with KALLÉN.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Link
              href="/club"
              className="border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone inline-block hover:bg-bone hover:text-void transition-all duration-300 mr-4"
            >
              Join the Club
            </Link>
            <a
              href="#newsletter"
              className="border border-bone/40 px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone/60 inline-block hover:border-bone hover:text-bone transition-all duration-300"
            >
              Subscribe
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
