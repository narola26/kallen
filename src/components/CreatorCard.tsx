import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import type { Creator } from "@/lib/catalog";

export default function CreatorCard({ creator, delay = 0 }: { creator: Creator; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/creators/${creator.slug}`} className="group block">
        <div className="relative aspect-portrait w-full overflow-hidden bg-ink">
          <Image
            src={creator.image}
            alt={creator.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="kallen-img object-cover transition-transform duration-section ease-entrance group-hover:scale-[1.06]"
          />
        </div>
        <h3 className="link-underline mt-4 inline-block font-body text-sm text-bone">{creator.name}</h3>
        <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-ash">
          {creator.role} · {creator.location}
        </p>
      </Link>
    </Reveal>
  );
}
