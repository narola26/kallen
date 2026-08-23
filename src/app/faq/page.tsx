import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = { title: "FAQ — KALLÉN" };

export default function FAQPage() {
  return (
    <StaticPage
      eyebrow="Help"
      title="Frequently asked"
      sections={[
        {
          heading: "Will Residue be restocked?",
          body: [
            "No. Residue is a limited drop and will not be reprinted. Once a piece sells out, it is gone. Club members get 24-hour early access before public launch.",
          ],
        },
        {
          heading: "How do I read a garment's digital passport?",
          body: [
            "Hold your phone to the NFC chip woven into the hem. It opens the piece's record — origin, factory, machinist, and dye lot.",
          ],
        },
        {
          heading: "What sizes do you carry?",
          body: ["Most pieces run XS to XL, with select styles up to XXL. See the size guide for measurements."],
        },
        {
          heading: "Do you ship outside Germany?",
          body: ["Yes, across the EU and to a growing list of countries beyond it. See shipping for details and timelines."],
        },
        {
          heading: "Can I return a Residue piece?",
          body: [
            "Yes, within 14 days, unworn and with the passport tag attached. Limited pieces that sell out during your return window cannot be exchanged for the same item.",
          ],
        },
      ]}
    />
  );
}
