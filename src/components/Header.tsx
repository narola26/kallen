"use client";

import { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navigation from "@/components/Navigation";
import { useScrollDirection } from "@/lib/hooks/useScrollDirection";

/**
 * The announcement bar and nav live inside one sticky wrapper and hide
 * together on scroll-down. Stacking them in normal flow inside a single
 * sticky element (rather than each being independently fixed) is what
 * keeps the bar's height from ever overlapping the nav.
 */
export default function Header() {
  const { direction, solid } = useScrollDirection(120);
  const [barOpen, setBarOpen] = useState(true);

  const hidden = solid && direction === "down";

  return (
    <div
      className={`sticky top-0 z-50 transition-transform duration-micro ease-entrance ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {barOpen && <AnnouncementBar onDismiss={() => setBarOpen(false)} />}
      <Navigation />
    </div>
  );
}
