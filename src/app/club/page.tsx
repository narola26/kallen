import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import JoinForm from "@/components/JoinForm";
import Reveal from "@/components/motion/Reveal";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Club — KALLÉN" };

const PERKS = [
  {
    icon: "⏰",
    label: "Early Access",
    body: "24 hours before every drop launches to the public. First pick of the collection.",
  },
  {
    icon: "🎭",
    label: "Private Events",
    body: "Studio visits, fittings, and collection previews in Berlin, Paris, and Tokyo.",
  },
  {
    icon: "👁️",
    label: "Unreleased Previews",
    body: "See and request pieces before they're photographed, priced, or announced.",
  },
  {
    icon: "📞",
    label: "Direct Line",
    body: "Direct channel to our team for sizing, fit, care, and custom requests.",
  },
  {
    icon: "🎁",
    label: "Exclusive Gifts",
    body: "Special items and limited editions available only to members.",
  },
  {
    icon: "👥",
    label: "Community",
    body: "Join 5,000+ people who wear KALLÉN first. Private Slack channel.",
  },
];

const FAQ = [
  {
    q: "How much does membership cost?",
    a: "€99/year. That's about €8 per month for 24-hour early access alone. Most members earn back the cost in their first order.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Cancel your membership anytime with no penalties. Your access continues until the renewal date.",
  },
  {
    q: "What if I don't like it?",
    a: "Try it for one season (3 months). If you don't love it, we'll refund your membership in full.",
  },
  {
    q: "Do I get a discount on purchases?",
    a: "You get 24-hour early access to drops before pricing is public. Members often find better pieces in their size before items sell out.",
  },
  {
    q: "How do private events work?",
    a: "We host quarterly studio visits in Berlin, with occasional trips to Paris and Tokyo. Members get invites. Virtual attendance available.",
  },
  {
    q: "Can I gift a membership?",
    a: "Yes. Purchase a membership as a gift and we'll send a special welcome package with a personalized onboarding.",
  },
];

export default function ClubPage() {
  return (
    <div>
      <PageHero
        eyebrow="Membership"
        title="KALLÉN Club"
        subtitle="A membership for the people who wear KALLÉN first."
        image={img("club-hero", 2000, 1200)}
      />

      {/* Value Proposition */}
      <section className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare mb-4">Why Join</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-4">
                  For the people who wear KALLÉN first
                </h2>
                <p className="font-body text-base font-light leading-relaxed text-bone/70">
                  Our most loyal customers deserve special treatment. Early access, private events, direct contact with our team, and a community of people who share your values.
                </p>
              </div>
              <div className="bg-void/30 rounded-sm p-8">
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                  Membership
                </p>
                <p className="font-display text-3xl text-bone mb-2">€99</p>
                <p className="font-body text-sm font-light text-bone/70 mb-6">per year / ~€8 per month</p>
                <p className="font-body text-xs text-bone/60 mb-6">
                  Members typically earn back membership cost in their first order through early access to limited items.
                </p>
                <button className="border border-bone px-6 py-2 font-body text-xs font-light uppercase tracking-nav text-bone hover:bg-bone hover:text-void transition-all duration-300 w-full">
                  Join Now
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Perks Grid */}
      <section className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-12">
              Your Benefits
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            {PERKS.map((perk, i) => (
              <Reveal key={perk.label} delay={i * 80}>
                <div className="border border-bone/10 p-6 hover:border-bone/30 hover:bg-void/20 transition-all duration-300">
                  <span className="text-3xl mb-3 block">{perk.icon}</span>
                  <p className="font-display text-sm uppercase leading-tight text-bone mb-3">
                    {perk.label}
                  </p>
                  <p className="font-body text-sm font-light text-bone/70">
                    {perk.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-bone/10 bg-void/30 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-12">
              Club vs. Regular
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-bone/10">
                    <th className="text-left py-4 pr-4 font-display text-xs uppercase text-bone">Feature</th>
                    <th className="text-center py-4 px-4 font-display text-xs uppercase text-bone/60">Regular</th>
                    <th className="text-center py-4 pl-4 font-display text-xs uppercase text-bone">Club</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Browse & buy", "✓", "✓"],
                    ["24-hour early access", "✗", "✓"],
                    ["Private studio events", "✗", "✓"],
                    ["Unreleased previews", "✗", "✓"],
                    ["Direct team contact", "✗", "✓"],
                    ["Exclusive club items", "✗", "✓"],
                    ["Community access", "✗", "✓"],
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-bone/5">
                      <td className="py-4 pr-4 font-body text-bone/80">{row[0]}</td>
                      <td className="text-center py-4 px-4 font-body text-bone/60">{row[1]}</td>
                      <td className="text-center py-4 pl-4 font-body text-flare font-light">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-12">
              Questions?
            </h2>
          </Reveal>
          <div className="space-y-0">
            {FAQ.map((item, i) => (
              <Reveal key={i} delay={i * 40}>
                <div className="border-b border-bone/10 py-6 hover:border-bone/30 transition-colors">
                  <details className="group cursor-pointer">
                    <summary className="flex items-center justify-between">
                      <h3 className="font-display text-sm uppercase leading-tight text-bone group-hover:text-flare transition-colors">
                        {item.q}
                      </h3>
                      <span className="font-mono text-lg text-bone/60 group-hover:text-bone ml-4">▼</span>
                    </summary>
                    <p className="font-body text-base font-light leading-relaxed text-bone/70 mt-4">
                      {item.a}
                    </p>
                  </details>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare mb-4">Join the Club</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-2xl uppercase leading-snug tracking-[0.06em] text-bone sm:text-3xl mb-6">
              Ready to wear KALLÉN first?
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="font-body text-base font-light leading-relaxed text-bone/70 mb-12">
              Your membership includes a 100% satisfaction guarantee. Try it for one season. If you don't love it, we'll refund you in full. No questions asked.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="bg-void/30 rounded-sm p-8 sm:p-12">
              <JoinForm />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="font-body text-xs text-bone/50 text-center mt-8">
              Questions? <Link href="/contact" className="underline hover:text-bone transition-colors">Contact our team</Link> or email <a href="mailto:hello@kallen.de" className="underline hover:text-bone transition-colors">hello@kallen.de</a>
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
