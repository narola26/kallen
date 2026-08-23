"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { img } from "@/lib/images";
import { entranceEase } from "@/lib/easing";

const HERO_IMAGE = img("hero-residue-campaign", 2400, 1100);

export default function Hero() {
  const wordRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !wordRef.current) return;

    const letters = wordRef.current.querySelectorAll("span");
    gsap.set(letters, { opacity: 0, y: 24 });
    gsap.to(letters, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.05,
      delay: 0.3,
      ease: entranceEase,
    });
  }, []);

  return (
    <section className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGE}
          alt="KALLÉN — original artwork on considered garments"
          fill
          priority
          sizes="100vw"
          className="kallen-img object-cover"
        />
        <div className="absolute inset-0 bg-void/50" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-gutter-mobile text-center">
        {/* Brand tagline */}
        <div className="mb-4">
          <span className="font-mono text-[11px] uppercase tracking-label text-flare/90">
            Intentional Design. Digital Transparency.
          </span>
        </div>

        {/* Main headline */}
        <h1
          ref={wordRef}
          className="flex font-display uppercase leading-none tracking-wordmarkWide text-bone text-[13vw] sm:text-[8vw]"
        >
          {"KALLÉN".split("").map((ch, i) => (
            <span key={i} className="inline-block">
              {ch === " " ? " " : ch}
            </span>
          ))}
        </h1>

        {/* Brand statement */}
        <p className="mt-8 max-w-[480px] font-body text-sm font-light leading-relaxed text-bone/80 sm:text-base">
          Every piece carries a digital passport. Know the story. Own the craft.
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <a
            href="#current-drop"
            className="group border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone transition-all duration-300 hover:bg-bone hover:text-void"
          >
            Shop Latest Drop
          </a>
          <a
            href="/club"
            className="border border-bone/40 px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone/70 transition-all duration-300 hover:border-bone hover:text-bone"
          >
            Join Club — 24h Early Access
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex gap-8 text-center text-[12px] uppercase tracking-label text-bone/60">
          <div>
            <p className="text-sm font-light text-bone">5K+</p>
            <p>Community Members</p>
          </div>
          <div className="h-8 w-px bg-bone/20" />
          <div>
            <p className="text-sm font-light text-bone">12</p>
            <p>Verified Creators</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-gutter-mobile z-10 sm:bottom-10 sm:left-gutter">
        <span className="font-mono text-[10px] uppercase tracking-label text-bone/60">
          Spring/Summer 2026
        </span>
      </div>

      <div className="absolute bottom-8 right-gutter-mobile z-10 flex flex-col items-center gap-3 sm:bottom-10 sm:right-gutter">
        <span className="font-mono text-[10px] uppercase tracking-label text-bone/60">Scroll</span>
        <span className="block h-12 w-px bg-bone/30">
          <span className="scroll-line block h-full w-full bg-bone/70" />
        </span>
      </div>
    </section>
  );
}
