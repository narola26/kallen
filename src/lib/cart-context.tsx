"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import type { Product } from "./catalog";

type CartLine = { product: Product; size: string; qty: number };

type CartContextValue = {
  lines: CartLine[];
  count: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (product: Product, size: string) => void;
  remove: (index: number) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

/**
 * Client-only bag state. There is no backend — nothing persists across a
 * reload and no checkout is wired up. It exists purely so the UI (bag
 * icon, drawer, "add to bag") reads as real when the site is demoed.
 */
export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const value = useMemo<CartContextValue>(
    () => ({
      lines,
      count: lines.reduce((sum, l) => sum + l.qty, 0),
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add: (product, size) => {
        setLines((prev) => {
          const existing = prev.findIndex((l) => l.product.slug === product.slug && l.size === size);
          if (existing >= 0) {
            const next = [...prev];
            next[existing] = { ...next[existing], qty: next[existing].qty + 1 };
            return next;
          }
          return [...prev, { product, size, qty: 1 }];
        });
        setIsOpen(true);
      },
      remove: (index) => setLines((prev) => prev.filter((_, i) => i !== index)),
    }),
    [lines, isOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
