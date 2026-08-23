import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = { title: "Accessibility Statement — KALLÉN" };

export default function AccessibilityPage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Accessibility Statement"
      intro="KALLÉN's commitment to digital accessibility and inclusive design. Last updated August 2026."
      sections={[
        {
          heading: "Our Commitment",
          body: [
            "KALLÉN is committed to ensuring digital accessibility for people with disabilities. We believe everyone deserves equal access to our website, applications, and digital services, regardless of ability.",
            "We continuously work to improve the accessibility of our digital properties and make reasonable accommodations for users with disabilities.",
          ],
        },
        {
          heading: "Standards & Compliance",
          body: [
            "We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.",
            "We comply with the EU Web Accessibility Directive (2016/2102) and the German Barrierefreiheitsstärkungsgesetz (BFSG).",
            "We aim to make our site usable with keyboard navigation, screen readers, and assistive technologies.",
          ],
        },
        {
          heading: "Accessibility Features",
          body: [
            "Keyboard Navigation: All interactive elements are accessible via keyboard (Tab, Enter, Escape keys).",
            "Screen Reader Support: Our site is tested with NVDA, JAWS, and VoiceOver for compatibility.",
            "Color Contrast: Text meets WCAG AAA contrast ratios (4.5:1 for normal text, 3:1 for large text).",
            "Text Sizing: Users can adjust text size without loss of functionality.",
            "Skip Links: Navigation links allow jumping directly to main content.",
            "Form Labels: All form fields have clear, associated labels.",
            "Alt Text: Images include descriptive alt text for screen readers.",
            "Video Captions: Video content includes captions for deaf and hard-of-hearing users.",
            "Reduced Motion: Animations respect 'prefers-reduced-motion' settings.",
          ],
        },
        {
          heading: "Known Limitations",
          body: [
            "Image Galleries: Third-party image viewer plugins may have limited screen reader support. We are working on improvements.",
            "Embedded Content: Social media embeds (Instagram, TikTok) may not be fully accessible. Links to original content are always provided.",
            "PDF Documents: Some older PDF files may not meet accessibility standards. Email hello@kallen.de for accessible versions.",
          ],
        },
        {
          heading: "Accessibility Testing",
          body: [
            "We conduct regular audits using:",
            "• Automated tools (axe, WAVE, Lighthouse)",
            "• Manual testing with keyboard and screen readers",
            "• User testing with people who have disabilities",
            "• Third-party accessibility consultants",
          ],
        },
        {
          heading: "Assistive Technology Support",
          body: [
            "We support the following assistive technologies:",
            "• Screen Readers: JAWS, NVDA, VoiceOver",
            "• Voice Control: Dragon NaturallySpeaking",
            "• Keyboard-only Navigation",
            "• Browser Zoom and Text Resizing",
            "• High Contrast Display Modes",
          ],
        },
        {
          heading: "Mobile Accessibility",
          body: [
            "Our mobile website and apps are designed for accessibility:",
            "• Touch targets are at least 44x44 pixels for easy interaction",
            "• Gestures have keyboard alternatives",
            "• Screen reader support on iOS and Android",
            "• Text is resizable without loss of functionality",
          ],
        },
        {
          heading: "Accessibility Roadmap",
          body: [
            "We are continuously improving. Planned enhancements include:",
            "• Enhanced video transcripts beyond captions",
            "• ARIA improvements for complex components",
            "• Extended color palette customization options",
            "• Improved focus indicators for keyboard navigation",
            "• More comprehensive keyboard shortcut documentation",
          ],
        },
        {
          heading: "Report Accessibility Issues",
          body: [
            "If you encounter accessibility barriers, please report them to: hello@kallen.de",
            "Include in your report:",
            "• What feature or page you were accessing",
            "• What assistive technology you use (if applicable)",
            "• What the barrier is and how it affects you",
            "• Your contact information (optional)",
            "We aim to respond to accessibility issues within 48 hours.",
          ],
        },
        {
          heading: "Alternative Accommodations",
          body: [
            "If you cannot access a service through our digital channels, contact us and we will work with you to find an alternative solution:",
            "• Email: hello@kallen.de",
            "• Phone: +49 30 [phone]",
            "• We can provide product information, place orders, or process returns via email or phone.",
          ],
        },
        {
          heading: "Third-Party Services",
          body: [
            "Our website uses third-party services which have their own accessibility commitments:",
            "• Stripe (payments): Accessible payment forms",
            "• Google Analytics: Privacy-respecting analytics",
            "• Mailchimp (emails): Accessible email templates",
            "We select partners that prioritize accessibility and are working with them to improve as needed.",
          ],
        },
        {
          heading: "Accessibility Policy & Standards",
          body: [
            "See our full Accessibility Policy at [URL]",
            "Learn more about web accessibility at W3C (www.w3.org/WAI/)",
            "German accessibility law (BFSG) guidance: www.bfit-bund.de",
          ],
        },
        {
          heading: "Contact Information",
          body: [
            "For accessibility questions or concerns:",
            "Email: hello@kallen.de",
            "Telephone: +49 30 [phone]",
            "Address: KALLÉN GmbH, [Address], Berlin, Germany",
            "Office hours: Monday–Friday, 10 AM–6 PM CET",
          ],
        },
        {
          heading: "Last Updated",
          body: [
            "This Accessibility Statement was last updated in August 2026. We review and update it annually or whenever significant changes are made to our site.",
          ],
        },
      ]}
    />
  );
}
