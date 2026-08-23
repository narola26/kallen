import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "Digital Passports — KALLÉN" };

const SAMPLE_PASSPORTS = [
  {
    id: "DP-2024-0847-01",
    piece: "Essential Linen Shirt",
    color: "Natural",
    date: "August 15, 2024",
    status: "Active",
  },
  {
    id: "DP-2024-0847-02",
    piece: "Minimal Trousers",
    color: "Ink",
    date: "August 15, 2024",
    status: "Active",
  },
  {
    id: "DP-2024-0612-01",
    piece: "Studio Jacket",
    color: "Bone",
    date: "July 28, 2024",
    status: "Active",
  },
];

export default function PassportsPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <Link
              href="/account"
              className="font-body text-xs text-bone/60 hover:text-bone transition-colors underline mb-4 block"
            >
              ← Back to account
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-2xl uppercase leading-snug tracking-[0.06em] text-bone sm:text-3xl">
              Digital Passports
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
              Access the digital passport for each KALLÉN piece you own. Each passport contains the complete provenance, materials, maker information, and care instructions.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Passports Grid */}
      <div className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          {SAMPLE_PASSPORTS.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {SAMPLE_PASSPORTS.map((passport, i) => (
                <Reveal key={passport.id} delay={i * 80}>
                  <Link
                    href={`/account/passports/${passport.id}`}
                    className="group block border border-bone/10 p-6 hover:border-bone/30 hover:bg-void/20 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="font-display text-sm uppercase text-bone group-hover:text-flare transition-colors">
                          {passport.piece}
                        </p>
                        <p className="font-body text-xs text-bone/60 mt-1">{passport.color}</p>
                      </div>
                      <span className="font-mono text-[10px] uppercase tracking-label text-flare bg-void/50 px-2 py-1 rounded-sm">
                        {passport.status}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="font-body text-[10px] uppercase tracking-label text-flare">
                        Passport ID
                      </p>
                      <p className="font-mono text-xs text-bone/70 font-light">{passport.id}</p>
                    </div>
                    <p className="font-body text-[10px] text-bone/50 mt-4">
                      Created: {passport.date}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="text-center py-16">
                <p className="font-display text-lg uppercase text-bone mb-4">No Passports Yet</p>
                <p className="font-body text-base font-light text-bone/70 mb-8">
                  Your first KALLÉN purchase will generate a digital passport.
                </p>
                <Link
                  href="/shop"
                  className="border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone inline-block hover:bg-bone hover:text-void transition-all duration-300"
                >
                  Shop Collections
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div>
              <p className="font-display text-sm uppercase text-bone mb-4">What's in Your Passport?</p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <p className="font-body text-sm font-light text-bone/70 leading-relaxed">
                    Each digital passport contains complete transparency: materials sourced, the factory where it was made, the person who stitched it, exact completion date, and environmental impact metrics.
                  </p>
                </div>
                <div>
                  <p className="font-body text-sm font-light text-bone/70 leading-relaxed">
                    When you resell a KALLÉN piece, the passport transfers with it. Buyers see the full provenance and verified authenticity—your piece gains value with its story.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
