import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import CartContent from "@/components/shop/CartContent";

export const metadata: Metadata = { title: "Shopping Bag — KALLÉN" };

export default function CartPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <Link
              href="/shop"
              className="font-body text-xs text-bone/60 hover:text-bone transition-colors underline mb-4 block"
            >
              ← Continue Shopping
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-2xl uppercase leading-snug tracking-[0.06em] text-bone sm:text-3xl">
              Shopping Bag
            </h1>
          </Reveal>
        </div>
      </div>

      {/* Cart Content */}
      <Reveal delay={160}>
        <CartContent />
      </Reveal>

      {/* Trust Signals */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Reveal>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                  Free Shipping
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  On orders over €150 within the EU
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                  Carbon Neutral
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  Shipping via DHL GoGreen
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                  Secure Checkout
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  256-bit SSL encryption
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
