import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "Club Membership — KALLÉN" };

const CLUB_PERKS = [
  { icon: "⏰", label: "Early Access", detail: "24 hours before every drop" },
  { icon: "🎭", label: "Private Events", detail: "Studio visits, fittings, previews" },
  { icon: "👁️", label: "Unreleased Previews", detail: "See collections before release" },
  { icon: "📞", label: "Direct Line", detail: "Direct studio contact & support" },
];

export default function ClubPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <Link
              href="/account"
              className="font-body text-xs text-bone/60 hover:text-bone transition-colors underline mb-4 block"
            >
              ← Back to account
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl">
              Club Membership
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
              Your current status and exclusive benefits as a KALLÉN Club member.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Membership Status */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">
                  Status
                </p>
                <p className="font-display text-xl uppercase text-flare mb-4">Active Member</p>
                <p className="font-body text-sm font-light text-bone/70">
                  You&apos;re part of our inner circle. Enjoy every benefit.
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">
                  Member Since
                </p>
                <p className="font-display text-xl uppercase text-bone mb-4">August 2024</p>
                <p className="font-body text-sm font-light text-bone/70">
                  1 year subscription active • Renews August 2025
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Perks */}
      <div className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase text-bone mb-8">Your Benefits</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {CLUB_PERKS.map((perk, i) => (
              <Reveal key={perk.label} delay={i * 80}>
                <div className="border border-bone/10 p-6">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{perk.icon}</span>
                    <div>
                      <p className="font-display text-sm uppercase text-bone">{perk.label}</p>
                      <p className="font-body text-sm font-light text-bone/60 mt-2">
                        {perk.detail}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase text-bone mb-8">Next Club Event</h2>
            <div className="border border-bone/10 p-8">
              <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-4">
                Exclusive Preview
              </p>
              <p className="font-display text-lg uppercase text-bone mb-2">
                Spring 2025 Collection Reveal
              </p>
              <p className="font-body text-sm font-light text-bone/70 mb-6">
                Join us for a private preview of the upcoming collection before it launches. Studio visit in Berlin or virtual access.
              </p>
              <p className="font-body text-xs text-bone/60 mb-4">
                <strong>Date:</strong> September 15, 2024<br />
                <strong>Time:</strong> 6 PM CET<br />
                <strong>Format:</strong> In-person + Virtual
              </p>
              <button className="border border-bone px-6 py-2 font-body text-xs font-light uppercase tracking-nav text-bone hover:bg-bone hover:text-void transition-all duration-300">
                RSVP
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Manage Membership */}
      <div className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="font-display text-sm uppercase text-bone mb-3">
                  Manage Subscription
                </p>
                <p className="font-body text-sm font-light text-bone/70 mb-4">
                  Pause, resume, or cancel your membership anytime. No penalties.
                </p>
                <button className="font-body text-xs text-bone underline hover:text-flare transition-colors">
                  Manage Subscription →
                </button>
              </div>
              <div>
                <p className="font-display text-sm uppercase text-bone mb-3">
                  Invite Friends
                </p>
                <p className="font-body text-sm font-light text-bone/70 mb-4">
                  Share your referral code and earn 20% credit on your next order.
                </p>
                <button className="border border-bone px-4 py-2 font-body text-xs font-light uppercase tracking-nav text-bone hover:bg-bone hover:text-void transition-all duration-300">
                  Get Referral Code
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
