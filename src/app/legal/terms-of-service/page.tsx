import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = { title: "Terms of Service — KALLÉN" };

export default function TermsOfServicePage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Terms of Service"
      intro="The terms governing your use of KALLÉN's website, apps, and services. Last updated August 2026."
      sections={[
        {
          heading: "1. Acceptance of Terms",
          body: [
            "By accessing or using KALLÉN's website, mobile applications, and services, you agree to be bound by these Terms of Service. If you do not agree, you may not use our services.",
            "We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of updated terms.",
          ],
        },
        {
          heading: "2. Account Registration",
          body: [
            "You are responsible for providing accurate and complete information when creating an account.",
            "You are responsible for maintaining the confidentiality of your password and account credentials.",
            "You agree not to share your account with others or use another person's account.",
            "KALLÉN reserves the right to suspend or terminate accounts that violate these terms.",
          ],
        },
        {
          heading: "3. Product Information & Availability",
          body: [
            "We make reasonable efforts to ensure product descriptions, images, and pricing are accurate. However, we do not guarantee that all information is error-free or complete.",
            "Products are available while in stock. Limited-edition collections may not be restocked once sold out.",
            "We reserve the right to refuse or cancel orders at our discretion, including suspected fraud or terms violations.",
          ],
        },
        {
          heading: "4. Pricing & Payment",
          body: [
            "All prices are in EUR unless otherwise stated.",
            "Prices may change without notice, but the price at checkout is the price you pay.",
            "We accept credit cards, Apple Pay, Google Pay, and Klarna (subject to approval).",
            "Payment is processed via PCI-DSS compliant third-party processors. We do not store full credit card details.",
            "Invoices are provided digitally and may be printed for your records.",
          ],
        },
        {
          heading: "5. Shipping & Delivery",
          body: [
            "We ship worldwide via DHL. Shipping costs are calculated at checkout based on destination.",
            "Delivery times are estimates and not guaranteed. We are not liable for delays caused by external factors (weather, customs, carrier issues).",
            "Risk of loss transfers to you upon delivery to the carrier.",
            "You are responsible for providing accurate shipping information. We are not liable for losses due to incorrect addresses.",
          ],
        },
        {
          heading: "6. Returns & Refunds",
          body: [
            "You have 30 days from delivery to return items for a refund or exchange.",
            "Items must be in original condition with all tags attached. Worn or damaged items are not eligible.",
            "Refunds are processed within 10 business days of receiving returned items. Return shipping is your responsibility.",
            "Limited-edition collections (marked as final sale) are not returnable.",
            "Refunds are issued to the original payment method.",
          ],
        },
        {
          heading: "7. Digital Passports & Authenticity",
          body: [
            "Each KALLÉN piece carries a digital passport (NFC chip). This is proof of authenticity and origin.",
            "The digital passport is linked to your account upon purchase.",
            "If you resell a KALLÉN piece, the ownership record transfers to the new owner.",
            "Tampering with or removing the NFC chip voids the digital passport.",
            "KALLÉN is not responsible for lost or damaged digital passport data on third-party resale platforms.",
          ],
        },
        {
          heading: "8. Intellectual Property",
          body: [
            "All content on our website and apps (text, images, designs, logos) is owned by KALLÉN or licensed to us.",
            "You may not reproduce, distribute, or modify this content without permission.",
            "Artwork featured on KALLÉN garments is licensed from artists and designers. Reproduction is prohibited.",
          ],
        },
        {
          heading: "9. User-Generated Content",
          body: [
            "By posting reviews, photos, or feedback on our platform, you grant KALLÉN a non-exclusive, royalty-free license to use this content for marketing and promotional purposes.",
            "You agree not to post content that is illegal, offensive, defamatory, or infringes on others' rights.",
            "KALLÉN reserves the right to remove or moderate content that violates these terms.",
          ],
        },
        {
          heading: "10. Limitation of Liability",
          body: [
            "KALLÉN is provided “as is” without warranties of any kind.",
            "To the fullest extent permitted by law, KALLÉN is not liable for indirect, incidental, consequential, or punitive damages (including lost profits).",
            "Our total liability is limited to the amount you paid for the product or service.",
          ],
        },
        {
          heading: "11. Prohibited Activities",
          body: [
            "You agree not to:",
            "• Use our services for illegal purposes",
            "• Violate intellectual property rights",
            "• Harass, threaten, or defame others",
            "• Engage in fraudulent transactions",
            "• Scrape or automate data collection from our site",
            "• Attempt to gain unauthorized access to our systems",
          ],
        },
        {
          heading: "12. Governing Law & Dispute Resolution",
          body: [
            "These terms are governed by German law and the laws of the European Union.",
            "Disputes are subject to the exclusive jurisdiction of Berlin courts.",
            "We encourage you to contact us first at hello@kallen.de to resolve issues informally.",
          ],
        },
        {
          heading: "13. Third-Party Services",
          body: [
            "Our site uses third-party services (Stripe for payments, DHL for shipping, Google Analytics).",
            "We are not responsible for these services' actions or policies.",
            "Your use of third-party platforms (social media, resale sites) is governed by their own terms.",
          ],
        },
        {
          heading: "14. Accessibility & Accommodations",
          body: [
            "We are committed to making KALLÉN accessible to everyone.",
            "If you experience accessibility issues, please contact hello@kallen.de so we can assist.",
          ],
        },
        {
          heading: "15. Contact Us",
          body: [
            "For questions about these terms:",
            "Email: hello@kallen.de",
            "Address: KALLÉN GmbH, [Address], Berlin, Germany",
            "Telephone: +49 30 [phone]",
          ],
        },
      ]}
    />
  );
}
