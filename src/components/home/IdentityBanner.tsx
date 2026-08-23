"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { img } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

const BANNER_IMAGE = img("identity-banner", 2000, 1400);

export default function IdentityBanner() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !sectionRef.current || !imgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(imgRef.current, {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-ink" style={{ height: "80vh" }}>
      <div ref={imgRef} className="absolute inset-x-0 -top-[15%] h-[130%]">
        <Image src={BANNER_IMAGE} alt="" aria-hidden fill className="kallen-img object-cover" />
      </div>
      <div className="absolute inset-0 bg-void/25" />
      <div className="absolute bottom-6 left-gutter-mobile z-10 sm:bottom-8 sm:left-gutter">
        <span className="font-mono text-[10px] uppercase tracking-label text-bone/80">Kallén · 2026</span>
      </div>
    </section>
  );
}
