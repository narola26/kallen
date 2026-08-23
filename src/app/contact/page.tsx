import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact — KALLÉN" };

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-content grid-cols-1 gap-16 px-gutter-mobile py-24 sm:grid-cols-2 sm:px-gutter sm:py-32">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-label text-ash">Contact</p>
        <h1 className="mt-4 font-display text-lg uppercase leading-none tracking-wordmark text-bone">
          Get in touch
        </h1>
        <div className="mt-12 flex flex-col gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-label text-ash">General</p>
            <p className="mt-2 font-body text-sm font-light text-bone/80">hello@kallen.de</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-label text-ash">Press</p>
            <p className="mt-2 font-body text-sm font-light text-bone/80">press@kallen.de</p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-label text-ash">Studio</p>
            <p className="mt-2 font-body text-sm font-light text-bone/80">Berlin, Germany</p>
          </div>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <ContactForm />
      </Reveal>
    </div>
  );
}
