import Image from "next/image";

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image?: string;
}) {
  return (
    <section className="relative flex min-h-[60vh] w-full items-end overflow-hidden bg-ink sm:min-h-[70vh]">
      {image && (
        <div className="absolute inset-0">
          <Image src={image} alt="" fill priority className="kallen-img object-cover" />
          <div className="absolute inset-0 bg-void/50" />
        </div>
      )}
      <div className="relative z-10 w-full px-gutter-mobile pb-16 sm:px-gutter sm:pb-20">
        <div className="mx-auto max-w-content">
          <p className="font-mono text-xs uppercase tracking-label text-ash">{eyebrow}</p>
          <h1 className="mt-4 font-display text-lg uppercase leading-none tracking-wordmark text-bone sm:text-xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl font-body text-base font-light text-bone/80">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}
