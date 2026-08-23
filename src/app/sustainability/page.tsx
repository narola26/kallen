import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Sustainability & Ethics — KALLÉN",
};

const PILLARS = [
  {
    icon: "🌱",
    title: "Responsible Materials",
    items: [
      "100% organic cotton from Fair Trade certified farms",
      "Natural dyes with zero harmful chemical processing",
      "Hemp and linen blends for durability",
      "Ethical sourcing with full supply chain transparency",
    ],
  },
  {
    icon: "👥",
    title: "Fair Labor",
    items: [
      "15 seamstresses in our Porto atelier, individually named",
      "Living wages well above Portuguese minimum",
      "Healthcare coverage and pension contributions",
      "Paid time off and professional development",
    ],
  },
  {
    icon: "🌍",
    title: "Climate Action",
    items: [
      "Carbon-neutral shipping via DHL GoGreen",
      "Offset 100% of supply chain emissions",
      "Packaging from recycled and recyclable materials",
      "Goal: Carbon negative by 2027",
    ],
  },
  {
    icon: "♻️",
    title: "Durability & Longevity",
    items: [
      "Designed to last decades, not seasons",
      "Repair services for all pieces",
      "Take-back program for old garments",
      "Support for resale and circular economy",
    ],
  },
];

const IMPACT_METRICS = [
  { label: "Water Saved per Piece", value: "7,000L", detail: "vs conventional cotton" },
  { label: "Carbon Offset per Order", value: "2.4kg", detail: "via DHL GoGreen" },
  { label: "Fair Wage Guarantee", value: "€8.50/hr", detail: "minimum seamstress wage" },
  { label: "Organic Certification", value: "100%", detail: "all cotton sources" },
];

const CERTIFICATIONS = [
  { name: "Fair Trade USA", description: "Certified fair trade production and sourcing" },
  { name: "GOTS", description: "Global Organic Textile Standard compliance" },
  { name: "B Corp", description: "Certified benefit corporation status (pending)" },
  { name: "Carbon Trust", description: "Third-party carbon footprint verified" },
];

export default function SustainabilityPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare">Our Impact</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl">
              Sustainability & Ethics
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
              Every KALLÉN piece is made with intention: ethically sourced materials, fairly paid makers, and a commitment to transparency. This is not a marketing statement. These are verifiable facts.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Impact Metrics */}
      <section className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-12">
              Your Impact Per Piece
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-12">
            {IMPACT_METRICS.map((metric, i) => (
              <Reveal key={metric.label} delay={i * 80}>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                    {metric.label}
                  </p>
                  <p className="font-display text-lg text-bone mb-2">{metric.value}</p>
                  <p className="font-body text-sm font-light text-bone/60">{metric.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-12">
              Our Four Pillars
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="border border-bone/10 p-8 hover:border-bone/30 hover:bg-void/20 transition-all duration-300">
                  <span className="text-4xl mb-4 block">{pillar.icon}</span>
                  <h3 className="font-display text-sm uppercase leading-tight text-bone mb-6">
                    {pillar.title}
                  </h3>
                  <ul className="space-y-3">
                    {pillar.items.map((item, j) => (
                      <li key={j} className="font-body text-sm font-light text-bone/70 flex gap-3">
                        <span className="text-flare flex-shrink-0 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="border-t border-bone/10 bg-void/30 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-8">
              Transparency
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
              <div>
                <h3 className="font-display text-sm uppercase text-bone mb-4">Digital Passports</h3>
                <p className="font-body text-base font-light leading-relaxed text-bone/70 mb-4">
                  Every KALLÉN piece comes with an NFC chip that stores and displays: exact cotton farm origin, factory location and certifications, seamstress name and experience, production date, environmental impact metrics, and care instructions.
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  Scan your piece to see the full provenance. No marketing story. The actual record.
                </p>
              </div>
              <div>
                <h3 className="font-display text-sm uppercase text-bone mb-4">Annual Reports</h3>
                <p className="font-body text-base font-light leading-relaxed text-bone/70 mb-4">
                  We publish a detailed sustainability report every year showing:
                </p>
                <ul className="space-y-2 font-body text-sm font-light text-bone/70">
                  <li>✓ Total water usage and savings</li>
                  <li>✓ Carbon emissions and offsets</li>
                  <li>✓ Wages and benefits paid to makers</li>
                  <li>✓ Supply chain audits</li>
                  <li>✓ Third-party certifications</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-12">
              Verified Certifications
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {CERTIFICATIONS.map((cert, i) => (
              <Reveal key={cert.name} delay={i * 80}>
                <div className="border border-bone/10 p-6">
                  <p className="font-display text-sm uppercase text-bone mb-2">{cert.name}</p>
                  <p className="font-body text-sm font-light text-bone/70">{cert.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Supply Chain */}
      <section className="border-t border-bone/10 bg-void/30 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-8">
              Our Supply Chain
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Cotton</h3>
                <p className="font-body text-base font-light text-bone/70 mb-2">
                  Fair Trade certified organic farms in West Africa. Direct relationships with farmer cooperatives. Stable pricing ensures farmer sustainability.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Dyeing & Processing</h3>
                <p className="font-body text-base font-light text-bone/70 mb-2">
                  Small-scale Portuguese processors using natural dyes and low-impact chemistry. Garment-dyed for unique character on every piece.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Production</h3>
                <p className="font-body text-base font-light text-bone/70 mb-2">
                  Porto atelier with 15 named seamstresses. One person stitches each complete garment. Fair wages, healthcare, professional development.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Shipping</h3>
                <p className="font-body text-base font-light text-bone/70 mb-2">
                  DHL GoGreen with 100% carbon offset. Recycled and recyclable packaging. Minimal waste in every order.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Going Forward */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-8">
              Our Roadmap
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="space-y-6 max-w-2xl">
              <div className="border-l-2 border-flare pl-6 py-2">
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">2024</p>
                <p className="font-body text-base font-light text-bone/70">
                  Carbon-neutral shipping. Fair Trade certification. Digital passport on all pieces.
                </p>
              </div>
              <div className="border-l-2 border-bone/20 pl-6 py-2">
                <p className="font-mono text-[10px] uppercase tracking-label text-bone/60 mb-2">2025</p>
                <p className="font-body text-base font-light text-bone/70">
                  B Corp certification. Expand take-back program. Carbon offset for historical emissions.
                </p>
              </div>
              <div className="border-l-2 border-bone/20 pl-6 py-2">
                <p className="font-mono text-[10px] uppercase tracking-label text-bone/60 mb-2">2026-2027</p>
                <p className="font-body text-base font-light text-bone/70">
                  Carbon negative operations. Regenerative agriculture partnerships. Circular economy marketplace.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content text-center">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-4">
              Questions About Our Impact?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-body text-base font-light text-bone/70 mb-8 max-w-2xl mx-auto">
              We&apos;re committed to full transparency. Ask us anything about our supply chain, makers, materials, or environmental impact.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Link
              href="/contact"
              className="border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone inline-block hover:bg-bone hover:text-void transition-all duration-300"
            >
              Contact Us
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
