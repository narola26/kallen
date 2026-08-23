import Reveal from "@/components/motion/Reveal";

type Section = { heading?: string; body: string[] };

export default function StaticPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  sections: Section[];
}) {
  return (
    <div className="bg-void px-gutter-mobile pb-section-mobile pt-24 sm:px-gutter sm:pb-section sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-label text-ash">{eyebrow}</p>
          <h1 className="mt-4 font-display text-md uppercase leading-tight tracking-wordmark text-bone sm:text-lg">
            {title}
          </h1>
          {intro && <p className="mt-6 font-body text-base font-light text-bone/80">{intro}</p>}
        </Reveal>

        <div className="mt-16 flex flex-col gap-12">
          {sections.map((section, i) => (
            <Reveal key={i} delay={i * 60}>
              <div className="border-t border-bone/[0.12] pt-8">
                {section.heading && (
                  <h2 className="mb-4 font-body text-md font-light text-bone">{section.heading}</h2>
                )}
                <div className="flex flex-col gap-4">
                  {section.body.map((p, j) => (
                    <p key={j} className="font-body text-sm font-light leading-relaxed text-bone/70">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
