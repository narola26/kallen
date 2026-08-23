import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

const PERKS = [
  "24h early access to every drop",
  "Invitations to private events",
  "Previews of unreleased collections",
];

export default function ClubTeaser() {
  return (
    <section className="bg-bone px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
      <div className="mx-auto flex max-w-content flex-col items-center text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-label text-ash">Membership</p>
          <h2 className="mt-4 font-display text-lg uppercase leading-none tracking-wordmark text-void sm:text-xl">
            Kallén Club
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-10 flex flex-col gap-2 sm:mt-12">
            {PERKS.map((perk) => (
              <li key={perk} className="font-mono text-xs uppercase tracking-label text-void/70">
                {perk}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={180}>
          <Link
            href="/club"
            className="mt-12 border border-void px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-void transition-colors duration-section hover:bg-void hover:text-bone"
          >
            Join the club
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
