"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { entranceEase } from "@/lib/easing";

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  y?: number;
  /** Reveal the whole group at once instead of staggering each direct child. */
  stagger?: number;
};

/**
 * Scroll-triggered fade-up, matching the brand's entrance easing
 * (cubic-bezier(0.25, 1, 0.5, 1), 800ms). Fires once, respects
 * prefers-reduced-motion by skipping straight to the visible state.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  y = 28,
  stagger,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = stagger ? Array.from(node.children) : node;

    if (reduced) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(targets, { opacity: 0, y });

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay / 1000,
        ease: entranceEase,
        stagger: stagger ?? 0,
        scrollTrigger: {
          trigger: node,
          start: "top 85%",
          once: true,
        },
      });
    }, node);

    return () => ctx.revert();
  }, [delay, y, stagger]);

  const Component = Tag as ElementType;
  return (
    <Component ref={ref} className={className}>
      {children}
    </Component>
  );
}
