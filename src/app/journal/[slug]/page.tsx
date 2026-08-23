import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
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

  return (
    <article>
      <div className="relative aspect-editorial w-full overflow-hidden bg-ink sm:aspect-hero-desktop">
        <Image src={article.image} alt={article.title} fill priority sizes="100vw" className="kallen-img object-cover" />
        <div className="absolute inset-0 bg-void/40" />
      </div>

      <div className="mx-auto max-w-2xl px-gutter-mobile py-16 sm:px-gutter sm:py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-label text-ash">
            {article.category} · {article.date} · {article.readTime}
          </p>
          <h1 className="mt-4 font-display text-lg uppercase leading-tight text-bone sm:text-xl">
            {article.title}
          </h1>
        </Reveal>

        <div className="mt-12 flex flex-col gap-6">
          {article.body.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p className="font-body text-base font-light leading-relaxed text-bone/80">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </article>
  );
}
