import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { ARTICLES, getArticle } from "@/lib/catalog";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  return { title: article ? `${article.title} — KALLÉN` : "KALLÉN" };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();

  const currentIndex = ARTICLES.findIndex((a) => a.slug === params.slug);
  const prevArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;
  const relatedArticles = ARTICLES.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 2);

  return (
    <article>
      {/* Hero Image */}
      <div className="relative aspect-editorial w-full overflow-hidden bg-ink sm:aspect-hero-desktop">
        <Image src={article.image} alt={article.title} fill priority sizes="100vw" className="kallen-img object-cover" />
        <div className="absolute inset-0 bg-void/40" />
      </div>

      {/* Article Content */}
      <div className="mx-auto max-w-2xl px-gutter-mobile py-16 sm:px-gutter sm:py-20">
        <Reveal>
          <Link
            href="/journal"
            className="inline-block font-body text-xs text-bone/60 hover:text-bone transition-colors underline mb-8"
          >
            ← Back to Journal
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <p className="font-mono text-xs uppercase tracking-label text-flare">
            {article.category}
          </p>
          <h1 className="mt-4 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl">
            {article.title}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <div className="mt-6 flex items-center justify-between text-sm">
            <p className="font-body font-light text-bone/60">
              {article.date} · {article.readTime}
            </p>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
                className="font-body text-xs text-bone/60 hover:text-bone transition-colors underline"
              >
                Share
              </a>
            </div>
          </div>
        </Reveal>

        {/* Body */}
        <div className="mt-12 flex flex-col gap-6">
          {article.body.map((p, i) => (
            <Reveal key={i} delay={240 + i * 60}>
              <p className="font-body text-base font-light leading-relaxed text-bone/80">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Navigation & Related */}
      <div className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          {/* Article Navigation */}
          {(prevArticle || nextArticle) && (
            <Reveal>
              <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 mb-16">
                {prevArticle && (
                  <Link href={`/journal/${prevArticle.slug}`} className="group">
                    <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                      Previous Article
                    </p>
                    <p className="font-display text-sm uppercase leading-tight text-bone group-hover:text-flare transition-colors">
                      {prevArticle.title}
                    </p>
                  </Link>
                )}
                {nextArticle && (
                  <Link href={`/journal/${nextArticle.slug}`} className="group text-right sm:text-left">
                    <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                      Next Article
                    </p>
                    <p className="font-display text-sm uppercase leading-tight text-bone group-hover:text-flare transition-colors">
                      {nextArticle.title}
                    </p>
                  </Link>
                )}
              </div>
            </Reveal>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <Reveal delay={80}>
              <div className="border-t border-bone/10 pt-12">
                <h3 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-8">
                  More from {article.category}
                </h3>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                  {relatedArticles.map((a) => (
                    <Link key={a.slug} href={`/journal/${a.slug}`} className="group">
                      <div className="relative aspect-square overflow-hidden bg-ink mb-4">
                        <Image
                          src={a.image}
                          alt={a.title}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="kallen-img object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                        {a.readTime}
                      </p>
                      <p className="font-display text-sm uppercase leading-tight text-bone group-hover:text-flare transition-colors">
                        {a.title}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </article>
  );
}
