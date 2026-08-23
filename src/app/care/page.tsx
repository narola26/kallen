import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = { title: "Care — KALLÉN" };

export default function CarePage() {
  return (
    <StaticPage
      eyebrow="Help"
      title="Care"
      intro="Garment-dyed pieces age well when they're handled gently. A few habits keep the colour and shape true for longer."
      sections={[
        {
          heading: "Washing",
          body: [
            "Cold, inside out, with similar colours. Garment-dyed pieces release trace dye in the first few washes — this is normal and part of the process.",
          ],
        },
        {
          heading: "Drying",
          body: ["Line dry out of direct sun where possible. Tumble drying on low is fine for Core basics, not for waxed or coated pieces."],
        },
        {
          heading: "Ironing",
          body: ["Low heat, inside out. Skip printed panels entirely."],
        },
        {
          heading: "Storage",
          body: ["Fold heavier knits rather than hanging them, so the shoulders keep their shape."],
        },
      ]}
    />
  );
}
