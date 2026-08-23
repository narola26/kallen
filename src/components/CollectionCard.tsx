import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import type { Collection } from "@/lib/catalog";

export default function CollectionCard({ collection, delay = 0 }: { collection: Collection; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/collections/${collection.slug}`} className="group block">
        <div className="relative aspect-editorial w-full overflow-hidden bg-ink">
          <Image
            src={collection.image}
            alt={collection.name}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="kallen-img object-cover transition-transform duration-section ease-entrance group-hover:scale-[1.04]"
          />
        </div>
        <div className="mt-6 flex items-baseline justify-between">
          <h3 className="link-underline font-display text-md uppercase text-bone">{collection.name}</h3>
          <span className="font-mono text-[10px] uppercase tracking-label text-ash">
            {collection.season}
          </span>
        </div>
        <p className="mt-2 font-body text-sm font-light text-ash">{collection.blurb}</p>
      </Link>
    </Reveal>
  );
}
