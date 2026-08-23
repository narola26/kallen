"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const ENTRANCE = [0.25, 1, 0.5, 1] as const;

export default function CartDrawer() {
  const { isOpen, close, lines, remove } = useCart();
  const total = lines.reduce((sum, l) => sum + l.product.price * l.qty, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-void/70"
            onClick={close}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.6, ease: ENTRANCE }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-sm flex-col border-l border-bone/[0.12] bg-ink"
          >
            <div className="flex items-center justify-between border-b border-bone/[0.12] px-6 py-5">
              <p className="font-mono text-[10px] uppercase tracking-label text-ash">
                Bag ({lines.length})
              </p>
              <button aria-label="Close bag" onClick={close} className="text-bone/70 hover:text-bone">
                <X size={16} strokeWidth={1.25} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-6">
              {lines.length === 0 ? (
                <p className="font-body text-sm font-light text-ash">Your bag is empty.</p>
              ) : (
                <ul className="flex flex-col gap-6">
                  {lines.map((line, i) => (
                    <li key={`${line.product.slug}-${line.size}`} className="flex gap-4">
                      <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-void">
                        <Image
                          src={line.product.image}
                          alt={line.product.name}
                          fill
                          sizes="80px"
                          className="kallen-img object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <p className="font-body text-sm font-light text-bone">{line.product.name}</p>
                          <p className="mt-1 font-mono text-[10px] uppercase tracking-label text-ash">
                            Size {line.size} · Qty {line.qty}
                          </p>
                        </div>
                        <div className="flex items-baseline justify-between">
                          <p className="font-mono text-xs uppercase tracking-label text-ash">
                            €{line.product.price * line.qty}
                          </p>
                          <button
                            onClick={() => remove(i)}
                            className="font-mono text-[10px] uppercase tracking-label text-ash underline decoration-ash/40 hover:text-bone"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-bone/[0.12] px-6 py-6">
              <div className="mb-4 flex items-baseline justify-between font-mono text-xs uppercase tracking-label text-bone">
                <span>Subtotal</span>
                <span>€{total}</span>
              </div>
              <button
                disabled={lines.length === 0}
                className="w-full border border-bone px-6 py-3 font-body text-xs font-light uppercase tracking-nav text-bone transition-colors duration-micro hover:bg-bone hover:text-void disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-bone"
              >
                Checkout
              </button>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-label text-ash">
                This is a visual demo — checkout is not connected.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
