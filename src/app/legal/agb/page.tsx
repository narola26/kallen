import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = { title: "AGB — KALLÉN" };

export default function AGBPage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Allgemeine Geschäftsbedingungen"
      intro="Demo placeholder — this page needs review by someone qualified before launch. It does not constitute real legal advice."
      sections={[
        { heading: "§ 1 Geltungsbereich", body: ["Diese AGB gelten für alle Bestellungen über den KALLÉN Online-Shop."] },
        { heading: "§ 2 Vertragsschluss", body: ["Ein Vertrag kommt mit Bestätigung der Bestellung per E-Mail zustande."] },
        { heading: "§ 3 Preise und Versand", body: ["Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer, zzgl. Versandkosten."] },
        { heading: "§ 4 Zahlung", body: ["Zahlung erfolgt über die im Bestellprozess angebotenen Zahlungsarten."] },
      ]}
    />
  );
}
