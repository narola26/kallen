import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import JoinForm from "@/components/JoinForm";
import Reveal from "@/components/motion/Reveal";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Club — KALLÉN",
  description:
    "Free to join. Early access to every drop, private events, unreleased previews, and everything happening across the brand — straight to your inbox.",
};

const PERKS = [
  {
    icon: "⏰",
    label: "Early Access",
    body: "24 hours before every drop opens to the public. First pick of the collection, in your size.",
  },
  {
    icon: "📨",
    label: "The Full Picture",
    body: "Drops, restocks, new Creator Market stores, studio notes, events. Everything, as it happens.",
  },
  {
    icon: "👁️",
    label: "Unreleased Previews",
    body: "See pieces before they're photographed, priced, or announced — and tell us what you think.",
  },
  {
    icon: "🎭",
    label: "Private Events",
    body: "Studio visits, fittings, and collection previews in Berlin, Paris, and Tokyo.",
  },
  {
    icon: "📞",
    label: "Direct Line",
    body: "A real channel to our team for sizing, fit, care, and anything else you want to ask.",
  },
  {
    icon: "👥",
    label: "Community",
    body: "5,000+ people who wear KALLÉN first, in one private channel.",
  },
];

const UPDATES = [
  {
    title: "Drops & restocks",
    body: "Every release, 24 hours early. Plus the restocks — sold-out pieces come back quietly and members hear first.",
  },
  {
    title: "The Creator Market",
    body: "New designer stores as they open, new slots as they fill, and the pieces that are about to sell through.",
  },
  {
    title: "From the studio",
    body: "What's on the table in Berlin and Porto. Fabric trials, prints that didn't work, pieces two seasons out.",
  },
  {
    title: "Events & invitations",
    body: "Studio visits and previews, announced to members before anywhere else. Virtual attendance included.",
  },
];

const FAQ = [
  {
    q: "Is it really free?",
    a: "Yes. There is no fee to join, no annual charge, and no paid tier hiding behind this one. Everything on this page costs nothing.",
  },
  {
    q: "What's the catch?",
    a: "No catch. People who hear from us first buy more thoughtfully and send us better feedback — that's worth more to us than a membership fee.",
  },
  {
    q: "How often will you email me?",
    a: "Roughly twice a month, plus a heads-up before each drop. We'd rather send less and have you read it than fill your inbox.",
  },
  {
    q: "Do I need an account to join?",
    a: "No. An email address is enough. If you do have an account, your club status shows up there automatically.",
  },
  {
    q: "How do private events work?",
    a: "We host studio visits in Berlin each quarter, with occasional trips to Paris and Tokyo. Members get the invite first, and there's a virtual option for every one.",
  },
  {
    q: "Can I leave?",
    a: "Any time, in one click from the bottom of any email. No exit flow, no “are you sure”, no follow-up asking you to reconsider.",
  },
];

export default function ClubPage() {
  return (
    <div>
      <PageHero
        eyebrow="Membership · Free"
        title="KALLÉN Club"
        subtitle="Free to join. You hear everything first."
        image={img("club-hero", 2000, 1200)}
      />

      {/* Value Proposition */}
      <section className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare mb-4">Why join</p>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
              <div>
                <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-4 sm:text-xl">
                  For the people who wear KALLÉN first
                </h2>
                <p className="font-body text-base font-light leading-relaxed text-bone/70">
                  The club is how we stay in contact with the people who actually care what we make.
                  You get every drop a day early, an invitation to everything we host, and a clear view
                  of what&apos;s happening across the brand — the studio, the atelier, the Creator
                  Market, all of it.
                </p>
                <p className="mt-6 font-body text-base font-light leading-relaxed text-bone/70">
                  It costs nothing. It has never cost anything. There is no upgrade waiting for you
                  later.
                </p>
              </div>
              <div className="bg-void/30 rounded-sm p-8">
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                  Membership
                </p>
                <p className="font-display text-lg text-bone mb-2 sm:text-xl">Free</p>
                <p className="font-body text-sm font-light text-bone/70 mb-6">
                  No fee, no card, no renewal
                </p>
                <ul className="mb-8 space-y-2">
                  {["An email address is all it takes", "Leave in one click, any time", "We never sell your data"].map(
                    (line) => (
                      <li key={line} className="flex items-start gap-3 font-body text-xs text-bone/60">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-flare" aria-hidden />
                        {line}
                      </li>
                    )
                  )}
                </ul>
                <a
                  href="#join"
                  className="block border border-bone px-6 py-2.5 text-center font-body text-xs font-light uppercase tracking-nav text-bone hover:bg-bone hover:text-void transition-all duration-300"
                >
                  Join the club
                </a>
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
              What you get
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
                  <p className="font-body text-sm font-light text-bone/70">{perk.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What you'll hear about */}
      <section className="border-t border-bone/10 bg-void/30 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare mb-4">In your inbox</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-4">
              Everything, across every part of the brand
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="max-w-2xl font-body text-base font-light leading-relaxed text-bone/70 mb-14">
              Not a newsletter that only shows up when we want to sell you something. Members see the
              whole operation.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2">
            {UPDATES.map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="border-t border-bone/20 pt-6">
                  <h3 className="font-display text-sm uppercase leading-tight tracking-[0.06em] text-bone">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-body text-sm font-light leading-relaxed text-bone/70">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-12">
              With and without
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-bone/10">
                    <th className="text-left py-4 pr-4 font-display text-xs uppercase text-bone">
                      Feature
                    </th>
                    <th className="text-center py-4 px-4 font-display text-xs uppercase text-bone/60">
                      Not a member
                    </th>
                    <th className="text-center py-4 pl-4 font-display text-xs uppercase text-bone">
                      Club (free)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Browse & buy", "✓", "✓"],
                    ["24-hour early access", "✗", "✓"],
                    ["Restock alerts", "✗", "✓"],
                    ["New Creator Market stores", "✗", "✓"],
                    ["Studio & process updates", "✗", "✓"],
                    ["Private event invitations", "✗", "✓"],
                    ["Unreleased previews", "✗", "✓"],
                    ["Direct team contact", "✗", "✓"],
                    ["Community channel", "✗", "✓"],
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
      <section className="border-t border-bone/10 bg-void/30 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-12">
              Questions?
            </h2>
          </Reveal>
          <div className="space-y-0">
            {FAQ.map((item, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="border-b border-bone/10 py-6 hover:border-bone/30 transition-colors">
                  <details className="group cursor-pointer">
                    <summary className="flex items-center justify-between list-none">
                      <h3 className="font-display text-sm uppercase leading-tight text-bone group-hover:text-flare transition-colors">
                        {item.q}
                      </h3>
                      <span
                        className="ml-4 flex-shrink-0 font-mono text-sm text-bone/50 transition-transform duration-micro group-open:rotate-45"
                        aria-hidden
                      >
                        +
                      </span>
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

      {/* Join */}
      <section
        id="join"
        className="scroll-mt-24 border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section"
      >
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare mb-4">Join the club</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl mb-6">
              Ready to hear it first?
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="font-body text-base font-light leading-relaxed text-bone/70 mb-12">
              One email address, and you&apos;re in. Nothing to pay now or later, and you can leave in
              a single click whenever you want.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="bg-void/30 rounded-sm p-8 sm:p-12">
              <JoinForm />
            </div>
          </Reveal>

          <Reveal delay={320}>
            <p className="font-body text-xs text-bone/50 text-center mt-8">
              Questions?{" "}
              <Link href="/contact" className="underline hover:text-bone transition-colors">
                Contact our team
              </Link>{" "}
              or email{" "}
              <a href="mailto:hello@kallen.de" className="underline hover:text-bone transition-colors">
                hello@kallen.de
              </a>
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
