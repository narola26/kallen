import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import type { Article } from "@/lib/catalog";

export default function ArticleCard({ article, delay = 0 }: { article: Article; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <Link href={`/journal/${article.slug}`} className="group block">
        <div className="relative aspect-editorial w-full overflow-hidden bg-ink">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="kallen-img object-cover transition-transform duration-section ease-entrance group-hover:scale-[1.04]"
          />
        </div>
        <p className="mt-6 font-mono text-[10px] uppercase tracking-label text-ash">{article.category}</p>
        <h3 className="link-underline mt-3 inline-block font-display text-md uppercase text-bone">
          {article.title}
        </h3>
        <p className="mt-3 font-body text-sm font-light text-ash">{article.excerpt}</p>
      </Link>
    </Reveal>
  );
}
