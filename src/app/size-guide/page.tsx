import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "Size guide — KALLÉN" };

const ROWS = [
  { size: "XS", chest: "84–88", waist: "66–70", length: "66" },
  { size: "S", chest: "88–92", waist: "70–74", length: "68" },
  { size: "M", chest: "92–98", waist: "74–80", length: "70" },
  { size: "L", chest: "98–104", waist: "80–86", length: "72" },
  { size: "XL", chest: "104–110", waist: "86–92", length: "74" },
  { size: "XXL", chest: "110–116", waist: "92–98", length: "76" },
];

export default function SizeGuidePage() {
  return (
    <div className="bg-void px-gutter-mobile pb-section-mobile pt-24 sm:px-gutter sm:pb-section sm:pt-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-label text-ash">Help</p>
          <h1 className="mt-4 font-display text-md uppercase leading-tight tracking-wordmark text-bone sm:text-lg">
            Size guide
          </h1>
          <p className="mt-6 font-body text-base font-light text-bone/80">
            Measurements in centimetres. Most KALLÉN pieces are cut oversized by design — if you&apos;re
            between sizes, size down for a closer fit.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse font-mono text-xs uppercase tracking-label">
              <thead>
                <tr className="border-b border-bone/[0.2] text-ash">
                  <th className="py-3 text-left font-normal">Size</th>
                  <th className="py-3 text-left font-normal">Chest</th>
                  <th className="py-3 text-left font-normal">Waist</th>
                  <th className="py-3 text-left font-normal">Length</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.size} className="border-b border-bone/[0.12] text-bone/80">
                    <td className="py-3 text-bone">{row.size}</td>
                    <td className="py-3">{row.chest}</td>
                    <td className="py-3">{row.waist}</td>
                    <td className="py-3">{row.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
