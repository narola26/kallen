import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import type { CreatorProduct, CreatorStore } from "@/lib/creator-market";

/**
 * A single production slot. The slot number is deliberate — five is the
 * whole store, so knowing you're looking at 03/05 is information.
 */
export default function CreatorProductCard({
  store,
  product,
  slot,
  delay = 0,
  showStore = false,
}: {
  store: CreatorStore;
  product: CreatorProduct;
  slot?: number;
  delay?: number;
  showStore?: boolean;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        href={`/creators/${store.slug}/${product.slug}`}
        className="group block"
        style={{ ["--accent" as string]: store.accent }}
      >
        <div className="relative aspect-product w-full overflow-hidden bg-ink">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="kallen-img object-cover transition-transform duration-section ease-entrance group-hover:scale-[1.06]"
          />

          {product.badge && (
            <span className="absolute left-3 top-3 bg-void/80 px-2 py-1 font-mono text-[10px] uppercase tracking-label text-bone">
              {product.badge}
            </span>
          )}

          {slot && (
            <span className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-label text-bone/70">
              0{slot}/05
            </span>
          )}

          {/* Accent rule slides in on hover — the store's signature */}
          <span
            className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-[color:var(--accent)] transition-transform duration-micro ease-entrance group-hover:scale-x-100"
            aria-hidden
          />
        </div>

        {showStore && (
          <p className="mt-4 font-mono text-[10px] uppercase tracking-label text-[color:var(--accent)]">
            {store.studio}
          </p>
        )}

        <div className={`${showStore ? "mt-2" : "mt-4"} flex items-baseline justify-between gap-3`}>
          <p className="font-body text-sm font-light text-bone">{product.name}</p>
          <p className="font-mono text-xs uppercase tracking-label text-ash">€{product.price}</p>
        </div>

        <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-bone/50">
          {product.category} · {product.unitsSold} sold
        </p>
      </Link>
    </Reveal>
  );
}
