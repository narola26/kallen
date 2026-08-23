import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import type { Product } from "@/lib/catalog";

export default function ProductCard({ product, delay = 0 }: { product: Product; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/shop/${product.slug}`} className="group block">
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
        </div>
        <div className="mt-4 flex items-baseline justify-between">
          <p className="font-body text-sm font-light text-bone">{product.name}</p>
          <p className="font-mono text-xs uppercase tracking-label text-ash">€{product.price}</p>
        </div>
      </Link>
    </Reveal>
  );
}
