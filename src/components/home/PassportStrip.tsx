import Reveal from "@/components/motion/Reveal";

const FIELDS = [
  { label: "Origin", value: "Organic cotton, Aegean region" },
  { label: "Factory", value: "Porto, Portugal" },
  { label: "Machinist", value: "Signed at assembly" },
  { label: "Dye lot", value: "Individually garment-dyed" },
  { label: "Serial", value: "Locked on completion" },
];

export default function PassportStrip() {
  return (
    <section className="border-y border-bone/[0.12] bg-ink px-gutter-mobile py-16 sm:px-gutter sm:py-20">
      <div className="mx-auto max-w-content">
        <Reveal>
          <div className="mb-10 flex flex-col gap-2 sm:mb-12 sm:flex-row sm:items-baseline sm:justify-between">
            <p className="font-mono text-xs uppercase tracking-label text-ash">Digital passport</p>
            <p className="max-w-md font-body text-sm font-light text-bone/70 sm:text-right">
              Every KALLÉN piece carries an NFC chip in the hem. Scan it to read the full record.
            </p>
          </div>
        </Reveal>
        <Reveal stagger={80}>
          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-5 sm:gap-4">
            {FIELDS.map((field) => (
              <div key={field.label} className="border-t border-bone/[0.12] pt-4">
                <dt className="font-mono text-[10px] uppercase tracking-label text-ash">{field.label}</dt>
                <dd className="mt-2 font-body text-sm font-light text-bone">{field.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
