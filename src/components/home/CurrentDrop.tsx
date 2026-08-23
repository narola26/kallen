import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import ProductCard from "@/components/ProductCard";
import { productsInCollection } from "@/lib/catalog";

export default function CurrentDrop() {
  const products = productsInCollection("Residue");

  return (
    <section id="current-drop" className="scroll-mt-24 bg-void px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mb-12 flex items-baseline justify-between sm:mb-16">
            <p className="font-mono text-xs uppercase tracking-label text-ash">Current drop</p>
            <Link
              href="/collections/residue"
              className="link-underline font-mono text-xs uppercase tracking-label text-bone/70 transition-colors duration-micro hover:text-bone"
            >
              View all →
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-14">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
