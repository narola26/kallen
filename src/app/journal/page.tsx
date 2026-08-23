import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES } from "@/lib/catalog";
import { img } from "@/lib/images";

export const metadata: Metadata = { title: "Journal — KALLÉN" };

export default function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Process, brand, and the people in it"
        image={img("journal-hero", 2000, 1200)}
      />
      <div className="mx-auto max-w-content px-gutter-mobile py-16 sm:px-gutter sm:py-20">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-20">
          {ARTICLES.map((a, i) => (
            <ArticleCard key={a.slug} article={a} delay={(i % 2) * 100} />
          ))}
        </div>
      </div>
    </>
  );
}
