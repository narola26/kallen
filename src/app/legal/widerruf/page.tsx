import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = { title: "Widerruf — KALLÉN" };

export default function WiderrufPage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Widerrufsbelehrung"
      intro="Demo placeholder — this page needs review by someone qualified before launch. It does not constitute real legal advice."
      sections={[
        {
          heading: "Widerrufsrecht",
          body: [
            "Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie die Ware in Besitz genommen haben.",
          ],
        },
        {
          heading: "Ausübung des Widerrufs",
          body: ["Um Ihr Widerrufsrecht auszuüben, kontaktieren Sie uns unter hello@kallen.de mit einer eindeutigen Erklärung."],
        },
        {
          heading: "Folgen des Widerrufs",
          body: ["Bei einem wirksamen Widerruf erstatten wir alle erhaltenen Zahlungen innerhalb von 14 Tagen."],
        },
      ]}
    />
  );
}
