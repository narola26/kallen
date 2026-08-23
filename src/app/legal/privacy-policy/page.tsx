import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = { title: "Privacy Policy — KALLÉN" };

export default function PrivacyPolicyPage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="How KALLÉN collects, uses, and protects your data. Last updated August 2026."
      sections={[
        {
          heading: "1. Introduction",
          body: [
            "KALLÉN GmbH ("we," "us," or "our") operates the KALLÉN website and digital passport platform. We are committed to protecting your privacy and ensuring you have a positive experience on our platforms.",
            "This Privacy Policy explains our practices regarding data collection, usage, and protection. It applies to our website (kallenweb.com), mobile applications, and all digital services we provide.",
          ],
        },
        {
          heading: "2. Data Controller",
          body: [
            "KALLÉN GmbH is the data controller responsible for your personal data.",
            "Contact: privacy@kallen.de | Telephone: +49 30 [phone] | Address: [Address], Berlin, Germany",
          ],
        },
        {
          heading: "3. What Data We Collect",
          body: [
            "Account Information: Name, email, shipping address, phone number when you create an account or make a purchase.",
            "Payment Data: Processed securely via Stripe. We do not store full credit card details.",
            "Digital Passport Data: When you own a KALLÉN piece, we store your name, email, and ownership record linked to the product's NFC chip.",
            "Site Usage Data: IP address, browser type, pages visited, time on site (via analytics cookies).",
            "Communication Data: Emails you send to us, customer service inquiries, newsletter sign-ups.",
          ],
        },
        {
          heading: "4. Legal Basis for Processing",
          body: [
            "We process your data under these legal bases (GDPR Article 6):",
            "• Contractual Necessity: To fulfill orders and manage accounts",
            "• Consent: For marketing emails (you can opt out anytime)",
            "• Legitimate Interest: Site improvements, fraud prevention, security",
            "• Legal Obligation: Tax compliance, invoice records",
          ],
        },
        {
          heading: "5. How We Use Your Data",
          body: [
            "Order Fulfillment: Shipping, delivery tracking, customer service",
            "Digital Passport: Linking your purchase records to NFC chips for authenticity verification",
            "Marketing: Newsletters, promotions (only with your consent)",
            "Personalization: Recommendations based on your browsing and purchase history",
            "Security & Fraud Prevention: Detecting misuse, protecting accounts",
            "Analytics: Understanding user behavior to improve our service",
          ],
        },
        {
          heading: "6. Data Retention",
          body: [
            "Order Data: Retained for 7 years (tax/legal requirement)",
            "Account Data: Retained while your account is active, deleted upon request (except as required by law)",
            "Digital Passport Data: Retained indefinitely (necessary for resale verification and chain of custody)",
            "Marketing Emails: Retained until you unsubscribe",
          ],
        },
        {
          heading: "7. Sharing Your Data",
          body: [
            "We do NOT sell your data.",
            "We share data only with:",
            "• Payment Processors: Stripe (PCI-DSS compliant)",
            "• Shipping Partners: DHL, Fulfillment centers (necessary for delivery)",
            "• Email Provider: Mailchimp (for newsletters, with data processing agreement)",
            "• Legal Authorities: If required by law",
          ],
        },
        {
          heading: "8. International Data Transfers",
          body: [
            "If you are in the EU, your data is primarily processed in the EU. Any transfers outside the EU are protected under EU adequacy decisions or Standard Contractual Clauses (SCCs).",
          ],
        },
        {
          heading: "9. Your Rights (GDPR)",
          body: [
            "Right to Access: Request a copy of your data",
            "Right to Rectification: Correct inaccurate data",
            "Right to Erasure: Request deletion (with exceptions for legal obligations)",
            "Right to Restrict Processing: Limit how we use your data",
            "Right to Data Portability: Receive your data in a machine-readable format",
            "Right to Object: Opt out of marketing or certain processing",
            "Right to Lodge a Complaint: Contact your local data protection authority",
            "To exercise these rights, email privacy@kallen.de.",
          ],
        },
        {
          heading: "10. Cookies & Tracking",
          body: [
            "Essential Cookies: Required for site function (login, cart, security)",
            "Analytics Cookies: Google Analytics (anonymized data) to measure site performance",
            "Marketing Cookies: Optional, used to track conversions and personalize ads",
            "You can manage cookie preferences in your browser settings.",
          ],
        },
        {
          heading: "11. Security",
          body: [
            "We use industry-standard encryption (SSL/TLS) to protect transmitted data.",
            "Payment processing is PCI-DSS compliant via Stripe.",
            "We conduct regular security audits and vulnerability assessments.",
            "We implement access controls and employee training to prevent unauthorized access.",
            "No method is 100% secure; we cannot guarantee absolute security but commit to reasonable measures.",
          ],
        },
        {
          heading: "12. Third-Party Links",
          body: [
            "Our site may link to external websites (social media, partners). We are not responsible for their privacy practices. Review their policies before sharing data.",
          ],
        },
        {
          heading: "13. Changes to This Policy",
          body: [
            "We may update this policy as our practices evolve. We will notify you of material changes via email or a prominent notice on our site.",
          ],
        },
        {
          heading: "14. Contact Us",
          body: [
            "For privacy questions or to exercise your rights:",
            "Email: privacy@kallen.de",
            "Address: KALLÉN GmbH, [Address], Berlin, Germany",
            "Telephone: +49 30 [phone]",
          ],
        },
      ]}
    />
  );
}
