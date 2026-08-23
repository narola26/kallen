import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { img } from "@/lib/images";

const WALL = [
  { seed: "wall-1", offset: false },
  { seed: "wall-2", offset: true },
  { seed: "wall-3", offset: false },
  { seed: "wall-4", offset: true },
  { seed: "wall-5", offset: false },
  { seed: "wall-6", offset: false },
  { seed: "wall-7", offset: true },
  { seed: "wall-8", offset: false },
];

export default function CommunityWall() {
  return (
    <section className="bg-void px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mb-12 flex items-baseline justify-between sm:mb-16">
            <p className="font-mono text-xs uppercase tracking-label text-ash">Worn by you</p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="link-underline font-mono text-xs uppercase tracking-label text-bone/70 transition-colors duration-micro hover:text-bone"
            >
              @kallen.de
            </a>
          </div>
          <h2 className="mb-14 max-w-xl font-display text-lg uppercase leading-none tracking-[0.06em] text-bone sm:mb-20">
            The street is our runway.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {WALL.map((item, i) => (
            <Reveal key={item.seed} delay={i * 60} className={item.offset ? "sm:mt-16" : ""}>
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-ink">
                <Image
                  src={img(item.seed, 700, 950)}
                  alt="Street style, worn by the KALLÉN community"
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="kallen-img object-cover transition-transform duration-section ease-entrance hover:scale-[1.05]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
