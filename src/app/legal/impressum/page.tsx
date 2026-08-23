import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = { title: "Impressum — KALLÉN" };

export default function ImpressumPage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Impressum"
      intro="Demo placeholder — replace every bracketed field with the brand's real registered details before this goes live."
      sections={[
        {
          heading: "Angaben gemäß § 5 TMG",
          body: [
            "[Firmenname] GmbH",
            "[Straße, Hausnummer]",
            "[PLZ, Ort], Deutschland",
          ],
        },
        {
          heading: "Vertreten durch",
          body: ["[Geschäftsführer:in]"],
        },
        {
          heading: "Kontakt",
          body: ["E-Mail: hello@kallen.de", "Telefon: [Telefonnummer]"],
        },
        {
          heading: "Registereintrag",
          body: ["Handelsregister: [Registergericht]", "Registernummer: [HRB-Nummer]"],
        },
        {
          heading: "Umsatzsteuer-ID",
          body: ["Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: [USt-IdNr.]"],
        },
      ]}
    />
  );
}
