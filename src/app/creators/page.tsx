import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CreatorCard from "@/components/CreatorCard";
import { CREATORS } from "@/lib/catalog";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Creators — KALLÉN" };

export default function CreatorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Creators"
        title="The people behind the work"
        subtitle="The artists, photographers, and makers KALLÉN works with directly."
        image={img("creators-hero", 2000, 1200)}
      />
      <div className="mx-auto max-w-content px-gutter-mobile py-16 sm:px-gutter sm:py-20">
        <div className="grid grid-cols-2 gap-x-4 gap-y-12 sm:grid-cols-4 sm:gap-x-6">
          {CREATORS.map((c, i) => (
            <CreatorCard key={c.slug} creator={c} delay={i * 80} />
          ))}
        </div>
      </div>
    </>
  );
}
