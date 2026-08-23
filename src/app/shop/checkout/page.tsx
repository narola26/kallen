import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import CheckoutForm from "@/components/shop/CheckoutForm";

export const metadata: Metadata = { title: "Checkout — KALLÉN" };

export default function CheckoutPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <Link
              href="/shop/cart"
              className="font-body text-xs text-bone/60 hover:text-bone transition-colors underline mb-4 block"
            >
              ← Back to Bag
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-2xl uppercase leading-snug tracking-[0.06em] text-bone sm:text-3xl">
              Checkout
            </h1>
          </Reveal>
        </div>
      </div>

      {/* Checkout Form */}
      <Reveal delay={160}>
        <CheckoutForm />
      </Reveal>

      {/* Security & Trust */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                  🔒 Secure
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  256-bit SSL encryption protects your data
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                  ✓ Trusted
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  PCI-DSS compliant payment processing
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                  🌍 Global
                </p>
                <p className="font-body text-sm font-light text-bone/70">
                  We ship to 50+ countries worldwide
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
