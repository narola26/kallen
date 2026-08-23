import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { CREATORS, getCreator } from "@/lib/catalog";

export function generateStaticParams() {
  return CREATORS.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const creator = getCreator(params.slug);
  return { title: creator ? `${creator.name} — KALLÉN` : "KALLÉN" };
}

export default function CreatorPage({ params }: { params: { slug: string } }) {
  const creator = getCreator(params.slug);
  if (!creator) notFound();

  return (
    <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-gutter-mobile py-24 sm:grid-cols-2 sm:gap-16 sm:px-gutter sm:py-32">
      <Reveal>
        <div className="relative aspect-portrait w-full overflow-hidden bg-ink sm:aspect-[3/4]">
          <Image
            src={creator.image}
            alt={creator.name}
            fill
            priority
            sizes="(min-width: 640px) 50vw, 100vw"
            className="kallen-img object-cover"
          />
        </div>
      </Reveal>
      <Reveal delay={100}>
        <p className="font-mono text-xs uppercase tracking-label text-ash">
          {creator.role} · {creator.location}
        </p>
        <h1 className="mt-4 font-display text-lg uppercase text-bone">{creator.name}</h1>
        <p className="mt-8 max-w-md font-body text-base font-light leading-relaxed text-bone/70">
          {creator.bio}
        </p>
        <a
          href={`https://instagram.com/${creator.instagram.replace("@", "")}`}
          target="_blank"
          rel="noreferrer"
          className="link-underline mt-8 inline-block font-mono text-xs uppercase tracking-label text-bone/70 hover:text-bone"
        >
          {creator.instagram}
        </a>
      </Reveal>
    </div>
  );
}
