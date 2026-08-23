import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import CoBrandLockup from "@/components/market/CoBrandLockup";
import { SLOTS_PER_STORE, storeUnitsSold, type CreatorStore } from "@/lib/creator-market";

/**
 * A storefront inside the market. The five product slots read as a
 * filmstrip along the bottom — you see the whole store at a glance,
 * which is the point of capping it at five.
 */
export default function StoreCard({ store, delay = 0 }: { store: CreatorStore; delay?: number }) {
  const units = storeUnitsSold(store);

  return (
    <Reveal delay={delay}>
      <Link
        href={`/creators/${store.slug}`}
        className="group block border border-bone/10 transition-colors duration-micro hover:border-[color:var(--accent)]"
        style={{ ["--accent" as string]: store.accent }}
      >
        {/* Banner */}
        <div className="relative aspect-[16/7] w-full overflow-hidden bg-ink">
          <Image
            src={store.banner}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="kallen-img object-cover transition-transform duration-section ease-entrance group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-transparent" />
          <span
            className="absolute left-0 top-0 h-full w-[3px] bg-[color:var(--accent)]"
            aria-hidden
          />
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
            <CoBrandLockup studio={store.studio} accent={store.accent} size="sm" />
            <span className="font-mono text-[9px] uppercase tracking-label text-bone/60">
              {SLOTS_PER_STORE}/{SLOTS_PER_STORE} slots
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="relative h-11 w-11 flex-shrink-0 overflow-hidden bg-ink">
              <Image src={store.avatar} alt={store.creator} fill sizes="44px" className="kallen-img object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-md uppercase leading-none tracking-[0.04em] text-bone transition-colors duration-micro group-hover:text-[color:var(--accent)]">
                {store.studio}
              </h3>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-label text-bone/60">
                {store.creator} · {store.location}
              </p>
            </div>
          </div>

          <p className="mt-5 font-body text-sm font-light leading-relaxed text-bone/70">{store.tagline}</p>

          {/* Slot filmstrip */}
          <div className="mt-6 grid grid-cols-5 gap-1.5">
            {store.products.map((p, i) => (
              <div key={p.slug} className="relative aspect-product overflow-hidden bg-ink">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="80px"
                  className="kallen-img object-cover opacity-80 transition-opacity duration-micro group-hover:opacity-100"
                />
                <span className="absolute bottom-1 left-1 font-mono text-[8px] text-bone/70">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-6 flex items-center justify-between border-t border-bone/10 pt-4">
            <span className="font-mono text-[10px] uppercase tracking-label text-bone/60">
              {units.toLocaleString()} sold
            </span>
            <span className="font-mono text-[10px] uppercase tracking-label text-[color:var(--accent)]">
              {store.split}% to creator
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
