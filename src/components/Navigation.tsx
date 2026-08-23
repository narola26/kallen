"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";

const NAV_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Collections", href: "/collections" },
  { label: "Creators", href: "/creators" },
  { label: "Journal", href: "/journal" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, open } = useCart();

  return (
    <nav className="border-b border-bone/[0.12] bg-void">
      <div className="mx-auto flex h-16 max-w-content items-center justify-between px-gutter-mobile sm:px-gutter">
        <Link href="/" className="font-display text-base uppercase tracking-wordmark text-bone">
          Kallén
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline font-body text-xs font-light uppercase tracking-nav text-bone/80 transition-colors duration-micro hover:text-bone"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-5 text-bone/80">
          <button aria-label="Search" className="transition-colors duration-micro hover:text-bone">
            <Search size={16} strokeWidth={1.25} />
          </button>
          <button
            onClick={open}
            aria-label="Bag"
            className="relative transition-colors duration-micro hover:text-bone"
          >
            <ShoppingBag size={16} strokeWidth={1.25} />
            {count > 0 && (
              <span className="absolute -right-2.5 -top-2 flex h-4 min-w-4 items-center justify-center bg-bone px-1 font-mono text-[9px] text-void">
                {count}
              </span>
            )}
          </button>
          <Link
            href="/club"
            className="hidden border border-bone/40 px-3 py-1 font-body text-xs font-light uppercase tracking-nav text-bone/80 transition-colors duration-micro hover:border-bone hover:text-bone sm:inline-block"
          >
            Club
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="transition-colors duration-micro hover:text-bone md:hidden"
          >
            {menuOpen ? <X size={18} strokeWidth={1.25} /> : <Menu size={18} strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-bone/[0.12] bg-void px-gutter-mobile py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm font-light uppercase tracking-nav text-bone/80"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/club"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-block w-fit border border-bone/40 px-3 py-1 font-body text-xs font-light uppercase tracking-nav text-bone/80"
            >
              Club
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
