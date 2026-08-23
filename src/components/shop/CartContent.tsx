"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import Reveal from "@/components/motion/Reveal";

export default function CartContent() {
  const { lines, remove, count } = useCart();
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoCode, setPromoCode] = useState("");

  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.qty, 0);
  const shippingCost = subtotal >= 150 ? 0 : 12;
  const promoDiscount = appliedPromo ? subtotal * 0.1 : 0; // 10% discount
  const total = subtotal + shippingCost - promoDiscount;

  const handlePromo = () => {
    if (promoCode.toUpperCase() === "WELCOME10") {
      setAppliedPromo("WELCOME10");
      setPromoCode("");
    }
  };

  if (count === 0) {
    return (
      <div className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content text-center">
          <Reveal>
            <p className="font-display text-lg uppercase text-bone mb-4">Your bag is empty</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-body text-base font-light text-bone/70 mb-8">
              Discover our collections and add your first KALLÉN piece.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <Link
              href="/shop"
              className="border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone inline-block hover:bg-bone hover:text-void transition-all duration-300"
            >
              Start Shopping
            </Link>
          </Reveal>
        </div>
      </div>
    );
  }

  return (
    <div className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
      <div className="mx-auto max-w-content">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-12 sm:gap-20">
          {/* Cart Items */}
          <div className="sm:col-span-7">
            <Reveal>
              <h2 className="font-display text-sm uppercase text-bone mb-8">{count} Item{count !== 1 ? "s" : ""}</h2>
            </Reveal>
            <div className="space-y-8">
              {lines.map((line, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="border-b border-bone/10 pb-8">
                    <div className="flex gap-6 sm:gap-8">
                      {/* Product Image */}
                      <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden bg-ink sm:h-32 sm:w-24">
                        <Image
                          src={line.product.image}
                          alt={line.product.name}
                          fill
                          sizes="(min-width: 640px) 150px, 120px"
                          className="kallen-img object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <Link
                            href={`/shop/${line.product.slug}`}
                            className="font-display text-sm uppercase text-bone hover:text-flare transition-colors"
                          >
                            {line.product.name}
                          </Link>
                          <p className="font-body text-xs text-bone/60 mt-1">Size: {line.size}</p>
                          <p className="font-mono text-xs uppercase tracking-label text-bone/70 mt-2">
                            €{line.product.price.toFixed(2)}
                          </p>
                        </div>

                        {/* Quantity & Remove */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 border border-bone/20 p-1">
                            <button className="px-2 py-1 font-body text-xs text-bone/60 hover:text-bone">
                              −
                            </button>
                            <span className="font-body text-xs text-bone w-6 text-center">{line.qty}</span>
                            <button className="px-2 py-1 font-body text-xs text-bone/60 hover:text-bone">
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => remove(i)}
                            className="font-body text-[10px] text-bone/60 underline hover:text-bone transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      {/* Line Total */}
                      <div className="flex flex-col justify-between text-right">
                        <p className="font-mono text-xs uppercase tracking-label text-bone/70">
                          Subtotal
                        </p>
                        <p className="font-display text-sm text-bone">
                          €{(line.product.price * line.qty).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Promo Code */}
            <Reveal delay={lines.length * 80}>
              <div className="mt-12 pt-8 border-t border-bone/10">
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">
                  Promo Code
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    placeholder="Enter code..."
                    className="flex-1 border-b border-bone/20 bg-transparent py-2 font-body text-sm font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none"
                  />
                  <button
                    onClick={handlePromo}
                    className="border border-bone/40 px-4 py-2 font-body text-xs font-light uppercase tracking-nav text-bone hover:border-bone transition-colors"
                  >
                    Apply
                  </button>
                </div>
                <p className="font-body text-[10px] text-bone/50 mt-2">
                  Try &quot;WELCOME10&quot; for 10% off your first order
                </p>
              </div>
            </Reveal>
          </div>

          {/* Order Summary */}
          <div className="sm:col-span-5">
            <Reveal delay={80}>
              <div className="rounded-sm border border-bone/10 p-8 sticky top-32">
                <h3 className="font-display text-sm uppercase text-bone mb-6">Order Summary</h3>

                {/* Summary Lines */}
                <div className="space-y-3 mb-6 pb-6 border-b border-bone/10">
                  <div className="flex justify-between">
                    <p className="font-body text-sm font-light text-bone/70">Subtotal</p>
                    <p className="font-body text-sm text-bone">€{subtotal.toFixed(2)}</p>
                  </div>
                  {appliedPromo && (
                    <div className="flex justify-between">
                      <p className="font-body text-sm font-light text-flare">
                        Discount ({appliedPromo})
                      </p>
                      <p className="font-body text-sm text-flare">−€{promoDiscount.toFixed(2)}</p>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <p className="font-body text-sm font-light text-bone/70">
                      Shipping {subtotal >= 150 && <span className="text-flare">(FREE)</span>}
                    </p>
                    <p className="font-body text-sm text-bone">
                      {shippingCost === 0 ? "FREE" : `€${shippingCost.toFixed(2)}`}
                    </p>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between mb-8">
                  <p className="font-display text-sm uppercase text-bone">Total</p>
                  <p className="font-display text-lg text-bone">€{total.toFixed(2)}</p>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/shop/checkout"
                  className="block w-full border border-bone px-6 py-4 text-center font-body text-xs font-light uppercase tracking-nav text-bone hover:bg-bone hover:text-void transition-all duration-300 mb-4"
                >
                  Proceed to Checkout
                </Link>

                <Link
                  href="/shop"
                  className="block w-full border border-bone/40 px-6 py-3 text-center font-body text-xs font-light uppercase tracking-nav text-bone/60 hover:border-bone/70 transition-all duration-300 mb-6"
                >
                  Continue Shopping
                </Link>

                {/* Info */}
                <div className="space-y-2 text-[10px] font-light text-bone/50">
                  <p>✓ Secure checkout with SSL encryption</p>
                  <p>✓ Free shipping on orders over €150 in EU</p>
                  <p>✓ 30-day returns with digital passport</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
