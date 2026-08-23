import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = { title: "Datenschutz — KALLÉN" };

export default function DatenschutzPage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Datenschutzerklärung"
      intro="Demo placeholder — this page needs review by someone qualified before launch. It does not constitute real legal advice."
      sections={[
        {
          heading: "Verantwortlicher",
          body: ["[Firmenname] GmbH, [Straße, Hausnummer], [PLZ, Ort]. Kontakt: hello@kallen.de"],
        },
        {
          heading: "Erhobene Daten",
          body: [
            "Beim Besuch dieser Website werden technisch notwendige Daten verarbeitet (z. B. IP-Adresse, Zeitpunkt des Zugriffs). Bei einer Kontaktaufnahme oder Anmeldung zum Newsletter werden zusätzlich Name und E-Mail-Adresse verarbeitet.",
          ],
        },
        {
          heading: "Zweck der Verarbeitung",
          body: ["Bereitstellung der Website, Beantwortung von Anfragen, Versand des Newsletters bei Anmeldung."],
        },
        {
          heading: "Ihre Rechte",
          body: [
            "Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer Daten sowie ein Widerspruchsrecht gegen die Verarbeitung.",
          ],
        },
      ]}
    />
  );
}
