import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = { title: "FAQ — KALLÉN" };

const FAQ_SECTIONS = [
  {
    title: "Sizing & Fit",
    questions: [
      {
        q: "How do I find my size?",
        a: "We offer a detailed size guide with measurements for every piece. Visit our Size Guide page to compare your measurements with our sizing chart. If you're between sizes, we recommend sizing up for comfort.",
      },
      {
        q: "What if the item doesn't fit?",
        a: "No problem. You have 30 days to return or exchange for a different size at no cost. The exchange ships free within the EU. Just initiate a return through your account.",
      },
      {
        q: "How do your pieces fit compared to other brands?",
        a: "KALLÉN pieces are designed with a relaxed, intentional fit. We run slightly loose through the body for comfort and longevity. Check the Size Guide for specific measurements—every garment is detailed.",
      },
      {
        q: "Do you offer custom sizing?",
        a: "Not currently, but our size range covers most body types. If you have specific fit needs, contact hello@kallen.de and we can discuss options.",
      },
    ],
  },
  {
    title: "Shipping & Delivery",
    questions: [
      {
        q: "How much is shipping?",
        a: "Shipping is FREE on orders over €150 within the EU. For orders under €150, shipping costs €12 (DHL). International shipping varies by destination. View costs at checkout.",
      },
      {
        q: "How long does shipping take?",
        a: "Most orders ship within 1-2 business days. Delivery typically takes 2-4 business days within the EU via DHL, and 5-10 days internationally. You'll receive tracking as soon as your package ships.",
      },
      {
        q: "What's DHL GoGreen?",
        a: "Every KALLÉN order ships carbon-neutral via DHL GoGreen. This means we offset 100% of shipping emissions. It's part of our commitment to the environment.",
      },
      {
        q: "Can I track my order?",
        a: "Yes. Once your order ships, we'll email you a tracking number. Click it to follow your package in real-time on the DHL website.",
      },
      {
        q: "Do you ship internationally?",
        a: "Yes, we ship to 50+ countries. International shipping costs vary by destination and are calculated at checkout. Orders typically arrive in 5-10 business days.",
      },
      {
        q: "What if my package arrives damaged?",
        a: "Email hello@kallen.de with photos within 7 days of delivery. We'll send a replacement at no cost via prepaid label.",
      },
    ],
  },
  {
    title: "Returns & Exchanges",
    questions: [
      {
        q: "How do I return an item?",
        a: "Log into your account, go to Orders, and click 'Return' on the item you want to return. We'll provide a prepaid DHL label. Pack it securely and ship it back. No cost to return within the EU.",
      },
      {
        q: "What's your return window?",
        a: "You have 30 days from delivery to start a return. Items must be unworn, unwashed, and in original condition with tags attached.",
      },
      {
        q: "Do I get free returns?",
        a: "Yes, EU returns are free—we provide a prepaid label. International returns require you to cover shipping (typically €15–50 depending on destination), which is deducted from your refund.",
      },
      {
        q: "How long does a refund take?",
        a: "We inspect your return when we receive it (usually 3–5 business days). Once approved, your refund processes within 10 business days. Card refunds appear in 3–5 more days.",
      },
      {
        q: "Can I exchange instead of return?",
        a: "Absolutely. Exchange for a different size or color within 30 days at no extra cost. We ship the replacement free within the EU.",
      },
      {
        q: "What happens to my digital passport when I return?",
        a: "The digital passport reverts to KALLÉN upon return. If your item is resold, the new owner gets a clean passport with full provenance.",
      },
    ],
  },
  {
    title: "Digital Passport & NFC",
    questions: [
      {
        q: "What's the digital passport?",
        a: "Every KALLÉN piece contains an NFC chip woven into the seam. Scan it with your phone (no app needed) to access your piece's complete story: materials, factory, maker, date made, and environmental impact.",
      },
      {
        q: "How do I scan the digital passport?",
        a: "Simply hold your phone near the NFC chip (usually located in the hem). Your phone's NFC reader will automatically open the passport portal in your browser.",
      },
      {
        q: "What phone do I need?",
        a: "Any smartphone with NFC works—iPhone 7+ (iOS 11+) or any Android with NFC enabled. The passport opens directly in your browser with no app required.",
      },
      {
        q: "Will the NFC chip wear out?",
        a: "No. NFC chips are extremely durable and designed to last decades. Ours are woven into the seam, protected from water and wear.",
      },
      {
        q: "Can I fake a digital passport?",
        a: "Counterfeiting our NFC chip would require exact factory partnership, materials, and proprietary encoding. It's not realistic. This is what makes KALLÉN pieces verifiable.",
      },
      {
        q: "What if I lose the receipt?",
        a: "Your passport IS your proof of authenticity. Scan the chip anytime to access your purchase date, materials, maker info, and ownership record.",
      },
      {
        q: "What if I resell my piece?",
        a: "The passport transfers to the new owner when you sell. They scan it and see the full provenance. Everyone benefits from verified authenticity.",
      },
    ],
  },
  {
    title: "Materials & Care",
    questions: [
      {
        q: "What are your pieces made from?",
        a: "Most of our pieces are 100% organic cotton, hand-dyed with natural pigments. Some styles blend linen or hemp. Your digital passport lists exact materials for every piece.",
      },
      {
        q: "Where does your cotton come from?",
        a: "We source certified organic cotton from Fair Trade farms in West Africa. Your digital passport shows the exact farm region and certifications.",
      },
      {
        q: "How should I care for my KALLÉN piece?",
        a: "Wash cold. Air dry recommended. Wear it. Our pieces are designed to age beautifully with every wash. Your digital passport includes detailed care instructions.",
      },
      {
        q: "Will my piece shrink?",
        a: "Minimal shrinkage expected (under 5% if you wash cold and air dry). Pre-shrinking is minimal—our pieces are made to last and improve with wear.",
      },
      {
        q: "Can I machine wash?",
        a: "We recommend hand washing or delicate cycle with cold water. Avoid hot water and the dryer. Air drying extends the life of your piece.",
      },
      {
        q: "Are your materials sustainable?",
        a: "Yes. Organic cotton uses 91% less water than conventional cotton. We also offset carbon and support fair wages. Your passport shows environmental impact metrics.",
      },
    ],
  },
  {
    title: "Accounts & Security",
    questions: [
      {
        q: "Do I need an account to order?",
        a: "No, you can check out as a guest. But creating an account lets you track orders, save items, manage digital passports, and access exclusive club benefits.",
      },
      {
        q: "How is my data protected?",
        a: "Your data is encrypted with 256-bit SSL. We're PCI-DSS compliant for payment security. We never share your information with third parties. Read our Privacy Policy for details.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes, anytime. Go to Account Settings → Danger Zone → Delete Account. Your orders are kept for legal reasons, but all personal data is removed.",
      },
      {
        q: "I forgot my password. What do I do?",
        a: "Click 'Forgot Password' on the login page and enter your email. We'll send a reset link. The link expires in 24 hours.",
      },
      {
        q: "What's the KALLÉN Club?",
        a: "A membership for our most loyal customers. You get 24-hour early access to every drop, private studio events, unreleased previews, and direct contact with our team.",
      },
    ],
  },
  {
    title: "Payments & Pricing",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept credit/debit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, and Klarna (buy now, pay later) in select regions.",
      },
      {
        q: "Is my payment secure?",
        a: "Yes. All payments are processed by Stripe, a PCI-DSS Level 1 certified processor. Your card details are encrypted and never stored on our servers.",
      },
      {
        q: "Why was my payment declined?",
        a: "Common reasons: insufficient funds, expired card, wrong CVV, or your bank blocking the transaction. Contact your bank or try a different payment method.",
      },
      {
        q: "Do you have a newsletter discount?",
        a: "Occasionally. Subscribe to our email list to get exclusive offers, early access announcements, and 10% off your first order (WELCOME10 at checkout).",
      },
      {
        q: "Are prices in EUR?",
        a: "Yes, all prices are in EUR (€). If you're outside the EU, your bank will apply the current exchange rate.",
      },
      {
        q: "When will I be charged?",
        a: "When you complete checkout. For Klarna, you can split payments across 4 installments.",
      },
    ],
  },
  {
    title: "Orders & Tracking",
    questions: [
      {
        q: "How do I know my order went through?",
        a: "You'll get an order confirmation email immediately. Then a shipping confirmation email with tracking 1-2 business days after you order.",
      },
      {
        q: "Can I modify or cancel my order?",
        a: "If your order hasn't shipped yet, email hello@kallen.de ASAP and we'll try to help. Once shipped, you can refuse delivery or initiate a return.",
      },
      {
        q: "My order hasn't arrived. What do I do?",
        a: "Check your tracking number first. If it shows delivered but you haven't received it, check with neighbors or contact your carrier. After 10 days, contact us.",
      },
      {
        q: "Can I gift an item?",
        a: "Yes. We can include a gift message (no receipt of price). The recipient can return/exchange using their email for refund to a gift card instead of your original card.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare">Help Center</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 font-display text-2xl uppercase leading-snug tracking-[0.06em] text-bone sm:text-3xl">
              Frequently Asked Questions
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
              Find answers to common questions about sizing, shipping, digital passports, returns, and more. Can't find what you're looking for?{" "}
              <Link href="/contact" className="text-bone underline hover:text-flare transition-colors">
                Contact us
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </div>

      {/* FAQ Sections */}
      <div className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-3xl">
          {FAQ_SECTIONS.map((section, sectionIdx) => (
            <Reveal key={section.title} delay={sectionIdx * 100}>
              <div className="mb-16">
                <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-8 pb-4 border-b border-bone/10">
                  {section.title}
                </h2>
                <div className="space-y-0">
                  {section.questions.map((item, qIdx) => (
                    <FAQAccordion
                      key={qIdx}
                      question={item.q}
                      answer={item.a}
                      delay={(sectionIdx * 100 + qIdx * 40)}
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Still Have Questions? */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-content text-center">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-4">
              Still Have Questions?
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="font-body text-base font-light leading-relaxed text-bone/70 mb-8 max-w-2xl mx-auto">
              Our team is here to help. Reach out anytime and we'll get back to you within 48 hours.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone hover:bg-bone hover:text-void transition-all duration-300"
              >
                Contact Support
              </Link>
              <a
                href="mailto:hello@kallen.de"
                className="border border-bone/40 px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone/60 hover:border-bone hover:text-bone transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
