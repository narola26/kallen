"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { useCart } from "@/lib/cart-context";
import type { Product } from "@/lib/catalog";

export default function ProductDetail({ product }: { product: Product }) {
  const [size, setSize] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { add } = useCart();

  // Simulate multiple product images (6 angles)
  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="mx-auto max-w-content">
      {/* Product Gallery & Details */}
      <div className="grid grid-cols-1 gap-10 px-gutter-mobile py-20 sm:grid-cols-12 sm:gap-16 sm:px-gutter sm:py-32">
        {/* Gallery */}
        <div className="sm:col-span-6">
          <Reveal>
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-product w-full overflow-hidden bg-ink">
                <Image
                  src={productImages[selectedImageIndex]}
                  alt={`${product.name} - view ${selectedImageIndex + 1}`}
                  fill
                  priority
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="kallen-img object-cover transition-opacity duration-300"
                />
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-6 gap-2">
                {productImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImageIndex(i)}
                    className={`relative aspect-square overflow-hidden border-2 transition-colors duration-200 ${
                      selectedImageIndex === i ? "border-bone" : "border-bone/20 hover:border-bone/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`View ${i + 1}`}
                      fill
                      sizes="100px"
                      className="kallen-img object-cover"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-void/40 opacity-0 transition-opacity duration-200 hover:opacity-100">
                      <span className="font-mono text-[10px] text-bone">{"0" + (i + 1)}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Product Info */}
        <div className="sm:col-span-6">
          <Reveal delay={100}>
            <div>
              <p className="font-mono text-xs uppercase tracking-label text-flare">{product.collection}</p>
              <h1 className="mt-3 font-display text-lg uppercase leading-snug text-bone sm:text-xl">
                {product.name}
              </h1>
              <p className="mt-4 font-mono text-lg uppercase tracking-label text-bone">€{product.price}</p>

              {/* Stock Status */}
              <div className="mt-6 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-flare/80" />
                <span className="font-mono text-xs uppercase tracking-label text-bone/70">In Stock</span>
              </div>

              {/* Description */}
              <p className="mt-8 max-w-lg font-body text-base font-light leading-relaxed text-bone/80">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="mt-12">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-mono text-xs uppercase tracking-label text-ash">Size</p>
                  <Link href="/size-guide" className="font-mono text-[10px] uppercase tracking-label text-bone/60 underline hover:text-bone transition-colors">
                    Size Guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`h-12 min-w-12 border px-4 font-mono text-xs uppercase tracking-label transition-all duration-200 ${
                        size === s
                          ? "border-bone bg-bone text-void"
                          : "border-bone/30 text-bone/80 hover:border-bone"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={() => size && add(product, size)}
                disabled={!size}
                className="mt-10 w-full border border-bone px-6 py-4 font-body text-xs font-light uppercase tracking-nav text-bone transition-all duration-300 hover:bg-bone hover:text-void disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-bone"
              >
                {size ? "Add to Bag" : "Select a Size"}
              </button>

              {/* Material & Care */}
              <div className="mt-12 border-t border-bone/10 pt-10 space-y-8">
                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Materials</h3>
                  <p className="font-body text-sm font-light text-bone/70">
                    100% organic cotton. Hand-dyed with natural pigments. Minimal processing, maximum durability.
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Care</h3>
                  <p className="font-body text-sm font-light text-bone/70">
                    Wash cold. Air dry recommended. Wear it. This is a garment designed to age beautifully.
                  </p>
                </div>

                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Digital Passport</h3>
                  <p className="font-body text-sm font-light text-bone/70">
                    Every piece carries an NFC chip. Scan to verify origin, factory, maker, and date. Transfer ownership with confidence.
                  </p>
                  <Link href="/digital-passport" className="mt-3 inline-block font-mono text-[10px] uppercase tracking-label text-bone underline hover:text-bone/70 transition-colors">
                    Learn More →
                  </Link>
                </div>

                <div>
                  <h3 className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Shipping & Returns</h3>
                  <ul className="font-body text-sm font-light text-bone/70 space-y-2">
                    <li>• Free shipping on orders over €150</li>
                    <li>• 30-day returns with proof of digital passport</li>
                    <li>• Carbon-neutral shipping via DHL GoGreen</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Related Products */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <Reveal>
          <h2 className="font-display text-lg uppercase tracking-[0.06em] text-bone mb-12">You might also like</h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Reveal key={i} delay={i * 80}>
              <Link href={`/shop/residue-${i === 1 ? 'tee' : 'hoodie'}`} className="group">
                <div className="relative aspect-product w-full overflow-hidden bg-ink mb-4">
                  <Image
                    src={product.image}
                    alt={`Related product ${i}`}
                    fill
                    sizes="(min-width: 640px) 25vw, 50vw"
                    className="kallen-img object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare">Limited</p>
                <p className="mt-2 font-display text-sm uppercase leading-tight text-bone">Related Style #{i}</p>
                <p className="mt-2 font-mono text-xs uppercase tracking-label text-bone/60">€{product.price}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
