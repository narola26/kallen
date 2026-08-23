import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/motion/Reveal";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "About — KALLÉN" };

const PARAGRAPHS = [
  "KALLÉN began in 2023 with a question: what if a garment could tell you where it came from — not a marketing story, but the actual record of its making.",
  "We work from a studio in Berlin with a small factory in Porto. Every piece is cut by hand, assembled by a single machinist, and dyed individually. The imperfections that come from that process are not hidden. They are the point.",
  "Every KALLÉN garment carries a digital passport, read from an NFC chip woven into the hem. It records the cotton's origin, the factory, the person who sewed it, and the date it was finished. When you sell the piece, the record transfers with it.",
  "We make in small batches. Some collections, like Residue, are not reprinted once they sell out. We would rather make less and stand behind everything we make.",
];

const CORE_VALUES = [
  {
    title: "Intentional Design",
    description: "Every garment is a collaboration between us and emerging artists. Original artwork. Not trends. Not fast. Deliberately considered.",
  },
  {
    title: "Digital Transparency",
    description: "Your digital passport is proof. Materials sourced, production transparent, resale verified. No greenwashing. No hidden supply chains.",
  },
  {
    title: "Accessible Luxury",
    description: "Premium quality and ethics don't need to cost €500. We believe thoughtful design should be within reach for people who care.",
  },
  {
    title: "Community First",
    description: "You're not a customer. You're a keeper of the record. Part of a movement of people building culture together, not consuming it.",
  },
];

const SUSTAINABILITY = [
  {
    title: "Materials",
    description: "100% organic cotton from certified suppliers in West Africa. No synthetic dyes. Natural dye processes that minimize water waste.",
  },
  {
    title: "Production",
    description: "Porto factory employs 15 seamstresses, fair wage, healthcare included. Carbon-neutral shipping via DHL GoGreen.",
  },
  {
    title: "Longevity",
    description: "Built to last. Repair guides included with every piece. Digital passport ensures you can verify and resell with confidence.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A record, not a story" image={img("about-hero", 2000, 1200)} />

      {/* Founder & Origin Story */}
      <div className="mx-auto max-w-content px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-12">
          <div className="sm:col-span-4 sm:col-start-2">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-label text-flare">Founder Story</p>
            </Reveal>
          </div>
          <div className="sm:col-span-7 sm:col-start-6">
            <Reveal delay={80}>
              <p className="font-display text-md uppercase leading-snug tracking-[0.06em] text-bone sm:text-lg">
                I spent 5 years in supply chain management. I saw the gaps between what brands promised and what was actually happening in factories.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-8 max-w-xl font-body text-base font-light leading-relaxed text-bone/70">
                KALLÉN started as frustration. I wanted to build something where the "story" isn't marketing — it's the data. Digital passports, transparent origins, and a community that actually cares about where things come from. Not for virtue signaling. Because it matters.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 max-w-xl font-body text-sm font-light leading-relaxed text-bone/60">
                Today, KALLÉN is 12 people. A small studio in Berlin. A factory in Porto. And a community of 5000+ collectors who believe that fashion can mean something.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Studio Image */}
      <Reveal className="block">
        <div className="relative h-[50vh] w-full overflow-hidden bg-ink sm:h-[70vh]">
          <Image src={img("about-studio", 2000, 1400)} alt="Inside the Berlin studio" fill className="kallen-img object-cover" />
        </div>
      </Reveal>

      {/* Brand Story Narrative */}
      <div className="mx-auto max-w-content px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-12">
          <div className="sm:col-span-9 sm:col-start-2">
            {PARAGRAPHS.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="mb-8 max-w-2xl font-body text-base font-light leading-relaxed text-bone/80">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <section className="bg-void/50 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-16">
              Our Core Values
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {CORE_VALUES.map((value, i) => (
              <Reveal key={i} delay={i * 80}>
                <div>
                  <h3 className="font-display text-md uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                    {value.title}
                  </h3>
                  <p className="font-body text-sm font-light leading-relaxed text-bone/70">
                    {value.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <div className="mx-auto max-w-content px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-12">
          <div className="sm:col-span-4 sm:col-start-2">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-label text-flare">Design Philosophy</p>
            </Reveal>
          </div>
          <div className="sm:col-span-7 sm:col-start-6">
            <Reveal delay={80}>
              <p className="font-display text-md uppercase leading-snug tracking-[0.06em] text-bone sm:text-lg mb-8">
                A garment is not finished when it is sewn.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="font-body text-base font-light leading-relaxed text-bone/70 mb-6">
                It is finished when someone wears it, and it starts to hold its own story.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="font-body text-sm font-light leading-relaxed text-bone/70">
                We collaborate with emerging artists and photographers on limited-edition designs. Small batches. Hand cutting. Individual dyeing. The visible imperfections aren't defects — they're evidence of careful, intentional craft. Every KALLÉN piece is made to last, to age, to be worn for years. We include care guides and repair instructions because we want your pieces to have a future.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Sustainability & Ethics */}
      <section className="bg-void/50 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-4">
              Sustainability & Ethics
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-body text-sm font-light leading-relaxed text-bone/60 mb-16 max-w-2xl">
              We don't claim to be "fully sustainable" — fashion has an impact. But we measure it, we minimize it, and we're transparent about where we stand.
            </p>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {SUSTAINABILITY.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div>
                  <h3 className="font-display text-md uppercase leading-tight tracking-[0.04em] text-bone mb-4">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm font-light leading-relaxed text-bone/70">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Credits */}
      <div className="mx-auto max-w-content px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-12">
          <div className="sm:col-span-4 sm:col-start-2">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-label text-flare">Team</p>
            </Reveal>
          </div>
          <div className="sm:col-span-7 sm:col-start-6">
            <Reveal delay={80}>
              <p className="font-body text-base font-light leading-relaxed text-bone/70 mb-8">
                KALLÉN is built by a small, intentional team of designers, photographers, engineers, and producers who believe in the vision.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="space-y-6">
                <div>
                  <p className="font-display text-sm uppercase tracking-[0.04em] text-bone">Creative Direction</p>
                  <p className="font-body text-xs text-bone/60">Design & Brand Strategy</p>
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-[0.04em] text-bone">Production</p>
                  <p className="font-body text-xs text-bone/60">Supply Chain & Partnerships</p>
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-[0.04em] text-bone">Community</p>
                  <p className="font-body text-xs text-bone/60">Creator Relations & Outreach</p>
                </div>
                <div>
                  <p className="font-display text-sm uppercase tracking-[0.04em] text-bone">Technology</p>
                  <p className="font-body text-xs text-bone/60">Digital Passports & Platform</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex flex-col items-center text-center gap-8">
              <h3 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
                Join the Movement
              </h3>
              <p className="font-body text-sm font-light leading-relaxed text-bone/70 max-w-xl">
                Part of KALLÉN means you believe that fashion can be intentional. Transparent. Part of something.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <a href="/shop" className="border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone transition-all duration-300 hover:bg-bone hover:text-void">
                  Explore Collections
                </a>
                <a href="/club" className="border border-bone/40 px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone/70 transition-all duration-300 hover:border-bone hover:text-bone">
                  Join Club
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
