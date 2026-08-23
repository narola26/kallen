import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import TrackOrderForm from "@/components/TrackOrderForm";

export const metadata: Metadata = { title: "Track order — KALLÉN" };

export default function TrackOrderPage() {
  return (
    <div className="mx-auto max-w-lg px-gutter-mobile pb-section-mobile pt-24 sm:px-gutter sm:pb-section sm:pt-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-label text-ash">Help</p>
        <h1 className="mt-4 font-display text-md uppercase leading-tight tracking-wordmark text-bone sm:text-lg">
          Track your order
        </h1>
      </Reveal>
      <Reveal delay={100} className="mt-12 block">
        <TrackOrderForm />
      </Reveal>
    </div>
  );
}
