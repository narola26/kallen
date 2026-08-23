import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact — KALLÉN" };

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare">Contact</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-4 font-display text-2xl uppercase leading-snug tracking-[0.06em] text-bone sm:text-3xl">
              Get in Touch
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
              Have a question about your order, our brand, or want to collaborate? We're here to help. Fill out the form below and we'll get back to you within 48 hours.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="mx-auto grid max-w-content grid-cols-1 gap-16 px-gutter-mobile py-section-mobile sm:grid-cols-12 sm:gap-20 sm:px-gutter sm:py-section">
        {/* Contact Info & Details */}
        <div className="sm:col-span-5">
          <Reveal>
            <div className="space-y-12">
              {/* Email Contacts */}
              <div>
                <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-8">
                  Email
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">General Inquiries</p>
                    <a href="mailto:hello@kallen.de" className="font-body text-base font-light text-bone hover:text-flare transition-colors">
                      hello@kallen.de
                    </a>
                    <p className="font-body text-xs text-bone/60 mt-2">Orders, returns, general questions</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">Press & Media</p>
                    <a href="mailto:press@kallen.de" className="font-body text-base font-light text-bone hover:text-flare transition-colors">
                      press@kallen.de
                    </a>
                    <p className="font-body text-xs text-bone/60 mt-2">Press releases, collaboration, press kit</p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">Creator Program</p>
                    <a href="mailto:creators@kallen.de" className="font-body text-base font-light text-bone hover:text-flare transition-colors">
                      creators@kallen.de
                    </a>
                    <p className="font-body text-xs text-bone/60 mt-2">Join our creator community</p>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div>
                <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-8">
                  Studio
                </h2>
                <div>
                  <p className="font-body text-base font-light text-bone mb-4">
                    KALLÉN GmbH<br />
                    [Address]<br />
                    Berlin, Germany
                  </p>
                  <p className="font-body text-xs text-bone/60">
                    By appointment only. Email hello@kallen.de to schedule a visit.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div>
                <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-8">
                  Response Times
                </h2>
                <ul className="space-y-3 font-body text-sm font-light text-bone/80">
                  <li>
                    <strong>Support Inquiries:</strong> 24-48 hours
                  </li>
                  <li>
                    <strong>Order Issues:</strong> 24 hours
                  </li>
                  <li>
                    <strong>Press & Partnership:</strong> 48-72 hours
                  </li>
                  <li>
                    <strong>Offline:</strong> Weekends & EU holidays
                  </li>
                </ul>
              </div>

              {/* FAQ Link */}
              <div className="rounded-sm border border-bone/10 bg-void/50 p-6">
                <p className="font-body text-sm font-light text-bone/80 mb-4">
                  Have a common question? Check our FAQ first — you might find your answer right away.
                </p>
                <a
                  href="/faq"
                  className="inline-block font-mono text-xs uppercase tracking-label text-bone underline hover:text-flare transition-colors"
                >
                  View FAQ →
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Contact Form */}
        <div className="sm:col-span-7">
          <Reveal delay={100}>
            <div>
              <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-10">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Trust Signals */}
      <section className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/50">
        <div className="mx-auto max-w-content">
          <Reveal>
            <h2 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone mb-12">
              We Care About You
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            <Reveal delay={80}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Privacy First</p>
                <p className="font-body text-sm font-light text-bone/70 leading-relaxed">
                  Your data is encrypted and secure. We will never share your information with third parties. Read our <a href="/legal/privacy-policy" className="underline hover:text-bone transition-colors">privacy policy</a>.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Transparent Process</p>
                <p className="font-body text-sm font-light text-bone/70 leading-relaxed">
                  Every inquiry is logged and tracked. You'll receive a confirmation email immediately and a response within our promised timeframe.
                </p>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-3">Real Humans</p>
                <p className="font-body text-sm font-light text-bone/70 leading-relaxed">
                  No bots. No automation. Your message goes directly to a team member who can actually help you.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
