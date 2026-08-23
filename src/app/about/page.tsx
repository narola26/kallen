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

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="A record, not a story" image={img("about-hero", 2000, 1200)} />

      <div className="mx-auto max-w-content px-gutter-mobile py-16 sm:px-gutter sm:py-20">
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

      <Reveal className="block">
        <div className="relative h-[60vh] w-full overflow-hidden bg-ink sm:h-[80vh]">
          <Image src={img("about-studio", 2000, 1400)} alt="Inside the Berlin studio" fill className="kallen-img object-cover" />
        </div>
      </Reveal>
    </>
  );
}
