"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const COLUMNS = [
  {
    heading: "Shop",
    links: [
      { label: "Shop all", href: "/shop" },
      { label: "Collections", href: "/collections" },
      { label: "Creators", href: "/creators" },
      { label: "Club", href: "/club" },
    ],
  },
  {
    heading: "Kallén",
    links: [
      { label: "About", href: "/about" },
      { label: "Journal", href: "/journal" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Help",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Size guide", href: "/size-guide" },
      { label: "Shipping", href: "/shipping" },
      { label: "Care", href: "/care" },
      { label: "Track order", href: "/track-order" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Impressum", href: "/legal/impressum" },
      { label: "Datenschutz", href: "/legal/datenschutz" },
      { label: "AGB", href: "/legal/agb" },
      { label: "Widerruf", href: "/legal/widerruf" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-gutter-mobile pb-10 pt-section-mobile sm:px-gutter sm:pt-section">
      <div className="mx-auto max-w-content">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mb-20 max-w-sm border-b border-bone/[0.2] pb-3 sm:mb-24"
        >
          <div className="flex items-baseline justify-between gap-4">
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="w-full bg-transparent font-body text-sm font-light text-bone placeholder:text-ash focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Join the list"
              className="shrink-0 text-bone/70 transition-colors duration-micro hover:text-bone"
            >
              <ArrowRight size={16} strokeWidth={1.25} />
            </button>
          </div>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-label text-ash">
            Join for early access and stories
          </p>
        </form>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4 sm:gap-x-10">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-label text-ash">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="link-underline font-body text-sm font-light text-bone/80 transition-colors duration-micro hover:text-bone"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 select-none sm:mt-28">
          <p className="font-display uppercase leading-none tracking-wordmark text-bone/10 text-[16vw] sm:text-[9vw]">
            Kallén
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-bone/[0.12] pt-6 font-mono text-[10px] uppercase tracking-label text-ash sm:flex-row sm:items-center sm:justify-between">
          <span>© Kallén 2026</span>
          <span className="hidden sm:inline">Every piece carries a digital passport</span>
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-bone">
              Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-bone">
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
