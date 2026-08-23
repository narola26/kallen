import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import ArticleCard from "@/components/ArticleCard";
import { ARTICLES } from "@/lib/catalog";

export default function Journal() {
  const articles = ARTICLES.slice(0, 2);

  return (
    <section className="bg-void px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mb-12 flex items-baseline justify-between sm:mb-16">
            <p className="font-mono text-xs uppercase tracking-label text-ash">Journal</p>
            <Link
              href="/journal"
              className="link-underline font-mono text-xs uppercase tracking-label text-bone/70 transition-colors duration-micro hover:text-bone"
            >
              All stories →
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-16">
          {articles.map((a, i) => (
            <ArticleCard key={a.slug} article={a} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
