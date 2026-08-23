import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import JoinForm from "@/components/JoinForm";
import Reveal from "@/components/motion/Reveal";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Club — KALLÉN" };

const PERKS = [
  { label: "Early access", body: "24 hours before every drop, before it reaches the shop." },
  { label: "Private events", body: "Studio visits, fittings, and previews in Berlin, Paris, and Tokyo." },
  { label: "Unreleased previews", body: "See a collection before it's photographed or priced." },
  { label: "Direct line", body: "A standing channel to the studio for sizing, fit, and care questions." },
];

export default function ClubPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Kallén Club"
        subtitle="A membership for the people who wear KALLÉN first."
        image={img("club-hero", 2000, 1200)}
      />

      <div className="mx-auto max-w-content px-gutter-mobile py-16 sm:px-gutter sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-16 sm:gap-y-14">
          {PERKS.map((perk, i) => (
            <Reveal key={perk.label} delay={i * 80}>
              <div className="border-t border-bone/[0.12] pt-6">
                <p className="font-mono text-xs uppercase tracking-label text-ash">{perk.label}</p>
                <p className="mt-3 max-w-sm font-body text-sm font-light leading-relaxed text-bone/70">
                  {perk.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 max-w-md sm:mt-32">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-ash">Join</p>
            <JoinForm />
          </Reveal>
        </div>
      </div>
    </>
  );
}
