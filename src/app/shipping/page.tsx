import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = { title: "Shipping — KALLÉN" };

export default function ShippingPage() {
  return (
    <StaticPage
      eyebrow="Help"
      title="Shipping"
      sections={[
        {
          heading: "Germany",
          body: ["1–2 working days. Free on orders over €150, otherwise €5."],
        },
        {
          heading: "European Union",
          body: ["3–5 working days. Free on orders over €200, otherwise €12."],
        },
        {
          heading: "Rest of world",
          body: ["5–10 working days, duties calculated at checkout where applicable. €18 flat rate."],
        },
        {
          heading: "Tracking",
          body: ["A tracking link is sent by email once a piece leaves the studio. Use track order to check status directly."],
        },
      ]}
    />
  );
}
