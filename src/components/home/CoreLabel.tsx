import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { productsInCollection } from "@/lib/catalog";

export default function CoreLabel() {
  const core = productsInCollection("Core");

  return (
    <section className="bg-void py-section-mobile sm:py-section">
      <Reveal>
        <div className="mb-12 flex items-baseline justify-between px-gutter-mobile sm:mb-16 sm:px-gutter">
          <p className="font-mono text-xs uppercase tracking-label text-ash">Always available</p>
          <Link
            href="/collections/core"
            className="link-underline font-mono text-xs uppercase tracking-label text-bone/70 transition-colors duration-micro hover:text-bone"
          >
            Explore Core →
          </Link>
        </div>
      </Reveal>
      <div className="flex gap-6 overflow-x-auto px-gutter-mobile pb-4 sm:px-gutter">
        {core.map((p, i) => (
          <Reveal key={p.slug} delay={i * 60} className="w-[220px] shrink-0 sm:w-[260px]">
            <Link href={`/shop/${p.slug}`} className="group block">
              <div className="relative aspect-product w-full overflow-hidden bg-ink">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="260px"
                  className="kallen-img object-cover transition-transform duration-section ease-entrance group-hover:scale-[1.06]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <p className="font-body text-sm font-light text-bone">{p.name}</p>
                <p className="font-mono text-xs uppercase tracking-label text-ash">€{p.price}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
