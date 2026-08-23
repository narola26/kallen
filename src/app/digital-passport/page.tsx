import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Digital Passport — KALLÉN" };

export default function DigitalPassportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden bg-ink px-gutter-mobile py-20 sm:px-gutter">
        <div className="absolute inset-0">
          <Image
            src={img("digital-passport-hero", 2000, 1200)}
            alt="Digital Passport technology"
            fill
            priority
            className="kallen-img object-cover"
          />
          <div className="absolute inset-0 bg-void/60" />
        </div>
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-label text-flare">
              Our Differentiator
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl">
              The Digital Passport
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl font-body text-lg font-light leading-relaxed text-bone/80 mx-auto">
              Every KALLÉN piece carries proof of its story. Not a marketing claim. The actual record.
            </p>
          </Reveal>
        </div>
      </section>

      {/* What It Is */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-12">
            <div className="sm:col-span-5">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-label text-flare">The Technology</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl">
                  How It Works
                </h2>
              </Reveal>
            </div>
            <div className="sm:col-span-7">
              <Reveal delay={100}>
                <div className="space-y-8">
                  <div>
                    <p className="font-display text-md uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                      NFC Chip Embedded
                    </p>
                    <p className="font-body text-base font-light leading-relaxed text-bone/70">
                      Every KALLÉN garment contains a Near Field Communication (NFC) chip woven into the hem. This tiny, durable chip stores and transmits your piece&apos;s unique record.
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-md uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                      Scan With Your Phone
                    </p>
                    <p className="font-body text-base font-light leading-relaxed text-bone/70">
                      Hold your phone near the NFC chip. Your device automatically opens the KALLÉN passport portal — no app required. Works with any smartphone (iOS, Android).
                    </p>
                  </div>
                  <div>
                    <p className="font-display text-md uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                      Access Your Record
                    </p>
                    <p className="font-body text-base font-light leading-relaxed text-bone/70">
                      See the complete, verified record of your piece: where the cotton came from, which factory assembled it, who the maker was, and the exact date it was finished. This is your proof of authenticity.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="border-t border-bone/10 bg-void/50 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare">Your Data</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl mb-16">
              What Your Passport Contains
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            <Reveal delay={100}>
              <div className="border border-bone/10 p-8 bg-void/30">
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Materials</p>
                <p className="font-display text-sm uppercase leading-tight text-bone mb-3">Cotton Origin</p>
                <p className="font-body text-sm font-light text-bone/70 mb-4">
                  Exact region and farm where your cotton was grown. Certified organic, ethically sourced.
                </p>
                <p className="font-body text-xs text-bone/60">
                  West Africa • Fair Trade Certified • Carbon Offset
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="border border-bone/10 p-8 bg-void/30">
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Production</p>
                <p className="font-display text-sm uppercase leading-tight text-bone mb-3">Factory Details</p>
                <p className="font-body text-sm font-light text-bone/70 mb-4">
                  Name and location of the factory where your piece was made. Worker wages, conditions, certifications.
                </p>
                <p className="font-body text-xs text-bone/60">
                  Porto, Portugal • 15 Seamstresses • Fair Wage • Healthcare Included
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="border border-bone/10 p-8 bg-void/30">
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Maker</p>
                <p className="font-display text-sm uppercase leading-tight text-bone mb-3">The Person Who Made It</p>
                <p className="font-body text-sm font-light text-bone/70 mb-4">
                  Name and bio of the seamstress who stitched your piece. Years of experience, specialization.
                </p>
                <p className="font-body text-xs text-bone/60">
                  Individual maker attribution • Skill badge • Impact tracker
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="border border-bone/10 p-8 bg-void/30">
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Provenance</p>
                <p className="font-display text-sm uppercase leading-tight text-bone mb-3">Date & Ownership Record</p>
                <p className="font-body text-sm font-light text-bone/70 mb-4">
                  Exact date your piece was finished. Ownership history. If you resell, the record transfers with it.
                </p>
                <p className="font-body text-xs text-bone/60">
                  Created: Aug 15, 2026 • Owner: You • Resale Chain: Verified
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="border border-bone/10 p-8 bg-void/30">
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Care</p>
                <p className="font-display text-sm uppercase leading-tight text-bone mb-3">Maintenance Guide</p>
                <p className="font-body text-sm font-light text-bone/70 mb-4">
                  How to care for your piece so it lasts. Washing instructions, storage tips, repair guides.
                </p>
                <p className="font-body text-xs text-bone/60">
                  Wash cold • Air dry • Wear it • Age it beautifully
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="border border-bone/10 p-8 bg-void/30">
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Impact</p>
                <p className="font-display text-sm uppercase leading-tight text-bone mb-3">Your Carbon Footprint</p>
                <p className="font-body text-sm font-light text-bone/70 mb-4">
                  Carbon offset per piece. Water saved. Environmental impact metrics. Your contribution.
                </p>
                <p className="font-body text-xs text-bone/60">
                  CO₂ Offset: 2.4kg • Water Saved: 7,000L • Fair Wage: €8.50/hr
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-16 sm:grid-cols-12">
            <div className="sm:col-span-5">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-label text-flare">Why This Matters</p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="mt-4 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl">
                  Trust. Transparency. Proof.
                </h2>
              </Reveal>
            </div>
            <div className="sm:col-span-7">
              <Reveal delay={100}>
                <div className="space-y-8">
                  <div>
                    <h3 className="font-display text-md uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                      🔐 Authenticity Verification
                    </h3>
                    <p className="font-body text-base font-light leading-relaxed text-bone/70">
                      No fakes. If it doesn&apos;t scan, it&apos;s not KALLÉN. The NFC chip is woven into the seam — impossible to counterfeit without our technology and partnerships.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-md uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                      💚 Ethical Accountability
                    </h3>
                    <p className="font-body text-base font-light leading-relaxed text-bone/70">
                      See exactly where your piece came from and who made it. No greenwashing. No hidden supply chains. Full transparency from cotton to closure.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-md uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                      ♻️ Resale Confidence
                    </h3>
                    <p className="font-body text-base font-light leading-relaxed text-bone/70">
                      When you sell your KALLÉN piece, the passport transfers with it. Buyers know it&apos;s real. They see the full provenance. You both benefit from verified authenticity.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-md uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                      🌍 Sustainability Impact
                    </h3>
                    <p className="font-body text-base font-light leading-relaxed text-bone/70">
                      Track the environmental impact of your purchase. See carbon offset, water saved, fair wages paid. Your dollars directly support ethical production.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-bone/10 bg-void/50 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl mb-16">
              Common Questions
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            <Reveal delay={80}>
              <div>
                <p className="font-display text-sm uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                  Do I need an app?
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  No. Simply hold your phone near the NFC chip on your KALLÉN piece. Your phone&apos;s default NFC reader will open the passport portal in your browser.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div>
                <p className="font-display text-sm uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                  Will the chip wear out?
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  No. NFC chips are extremely durable and are designed to last decades. They&apos;re woven into the seam and protected from water and wear.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="font-display text-sm uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                  What if I lose my receipt?
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  Your passport IS your proof. Scan the chip and you&apos;ll have all the proof you need: purchase date, materials, maker info, and ownership record.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div>
                <p className="font-display text-sm uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                  Can I transfer ownership?
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  Yes. If you resell or gift your KALLÉN piece, the passport transfers to the new owner. Simply scan and update your account information.
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div>
                <p className="font-display text-sm uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                  Is my data secure?
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  Yes. The NFC chip only contains your item&apos;s production data, not personal information. Your account data is encrypted and secure (see our <a href="/legal/privacy-policy" className="underline hover:text-bone">privacy policy</a>).
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div>
                <p className="font-display text-sm uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                  Can others fake this?
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  Counterfeiting an NFC chip with our proprietary encoding would require our exact factory partnership, materials, and technology. Not realistic.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content text-center">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl mb-6">
              Own the Proof
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-2xl font-body text-base font-light leading-relaxed text-bone/70 mx-auto mb-12">
              Every KALLÉN piece comes with a digital passport. When you buy, you get the full story — and proof you can trust.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Link
              href="/shop"
              className="inline-block border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone transition-all duration-300 hover:bg-bone hover:text-void"
            >
              Shop Collections
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
