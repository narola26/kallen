"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollDirection(threshold = 80) {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [solid, setSolid] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > threshold);
      if (Math.abs(y - lastY.current) > 6) {
        setDirection(y > lastY.current ? "down" : "up");
        lastY.current = y;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, solid };
}
