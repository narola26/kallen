import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "Account — KALLÉN" };

const ACCOUNT_SECTIONS = [
  {
    icon: "📦",
    label: "Orders",
    description: "View order history, tracking, and delivery status",
    href: "/account/orders",
  },
  {
    icon: "🔐",
    label: "Digital Passports",
    description: "Access all digital passports for your KALLÉN pieces",
    href: "/account/passports",
  },
  {
    icon: "❤️",
    label: "Saved Items",
    description: "Your wishlist and bookmarked collections",
    href: "/account/saved",
  },
  {
    icon: "👤",
    label: "Profile",
    description: "Edit personal info, email, and password",
    href: "/account/profile",
  },
  {
    icon: "⭐",
    label: "Club Benefits",
    description: "View your membership status and exclusive perks",
    href: "/account/club",
  },
  {
    icon: "📱",
    label: "Addresses",
    description: "Manage shipping and billing addresses",
    href: "/account/addresses",
  },
];

export default function AccountPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare">Your Account</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 font-display text-2xl uppercase leading-snug tracking-[0.06em] text-bone sm:text-3xl">
              Account Dashboard
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
              Manage your KALLÉN account, view orders, access digital passports, and control your membership.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Quick Status */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Reveal>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                  Member Since
                </p>
                <p className="font-display text-lg uppercase text-bone">August 2024</p>
                <p className="font-body text-xs text-bone/60 mt-2">Premium Member</p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                  Total Orders
                </p>
                <p className="font-display text-lg uppercase text-bone">3 Pieces</p>
                <p className="font-body text-xs text-bone/60 mt-2">€ 891.50 spent</p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                  Club Status
                </p>
                <p className="font-display text-lg uppercase text-bone">Active</p>
                <p className="font-body text-xs text-bone/60 mt-2">24h early access • Private events</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Account Sections */}
      <div className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {ACCOUNT_SECTIONS.map((section, i) => (
              <Reveal key={section.href} delay={i * 60}>
                <Link
                  href={section.href}
                  className="group block border border-bone/10 p-6 hover:border-bone/30 hover:bg-void/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{section.icon}</span>
                    <div className="flex-1">
                      <p className="font-display text-sm uppercase tracking-[0.04em] text-bone group-hover:text-flare transition-colors">
                        {section.label}
                      </p>
                      <p className="font-body text-sm font-light text-bone/60 mt-2">
                        {section.description}
                      </p>
                    </div>
                    <span className="text-bone/40 group-hover:text-bone transition-colors text-lg">→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Logout Section */}
      <div className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-sm uppercase text-bone mb-2">Security</p>
                <p className="font-body text-sm font-light text-bone/70">
                  When you're done, sign out to keep your account secure.
                </p>
              </div>
              <button className="border border-bone/40 px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone hover:border-bone hover:bg-bone/5 transition-all duration-300">
                Sign Out
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
