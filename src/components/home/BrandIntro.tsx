import Reveal from "@/components/motion/Reveal";

export default function BrandIntro() {
  return (
    <section className="bg-void px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-8 sm:grid-cols-12">
        <div className="sm:col-span-4 sm:col-start-2">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare">Our Philosophy</p>
          </Reveal>
        </div>
        <div className="sm:col-span-7 sm:col-start-6">
          <Reveal delay={80}>
            <p className="font-display text-md uppercase leading-snug tracking-[0.06em] text-bone sm:text-lg">
              A garment is not finished when it is sewn. It is finished when someone wears it, and it starts to hold its own story.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl font-body text-base font-light leading-relaxed text-bone/70">
              KALLÉN puts original artwork on considered garments. Every piece carries a digital passport — the cotton's origin, the factory, the person who sewed it. Not a marketing story. The actual record.
            </p>
          </Reveal>

          {/* Three core pillars */}
          <Reveal delay={240}>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare/80">01</p>
                <p className="mt-2 font-display text-sm uppercase leading-tight text-bone">Intentional Design</p>
                <p className="mt-2 font-body text-xs leading-relaxed text-bone/60">
                  Each piece is created with purpose. Original artwork from emerging creators, not trends.
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare/80">02</p>
                <p className="mt-2 font-display text-sm uppercase leading-tight text-bone">Digital Transparency</p>
                <p className="mt-2 font-body text-xs leading-relaxed text-bone/60">
                  Your digital passport proves authenticity. Materials, production, resale verification — all in one.
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare/80">03</p>
                <p className="mt-2 font-display text-sm uppercase leading-tight text-bone">Community First</p>
                <p className="mt-2 font-body text-xs leading-relaxed text-bone/60">
                  You're part of a movement. Creators, collectors, and culture-makers building together.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
