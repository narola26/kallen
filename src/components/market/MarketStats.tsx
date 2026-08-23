"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { label: string; value: number; prefix?: string; suffix?: string };

/**
 * Counts up once when the row scrolls into view. Reduced-motion users
 * get the final number immediately rather than an animation they didn't
 * ask for.
 */
export default function MarketStats({ stats }: { stats: Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const duration = 1400;

        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // Same deceleration curve as the entrance easing
          setProgress(1 - Math.pow(1 - t, 3));
          if (t < 1) frame = requestAnimationFrame(tick);
        };

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="font-display text-lg leading-none text-bone sm:text-xl">
            {stat.prefix}
            {Math.round(stat.value * progress).toLocaleString()}
            {stat.suffix}
          </p>
          <p className="mt-3 font-mono text-[10px] uppercase tracking-label text-bone/50">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
