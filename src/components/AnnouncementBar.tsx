"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Marquee from "@/components/Marquee";

const MESSAGE =
  "DROP 01 — RESIDUE, SPRING/SUMMER 2026  ·  CLUB MEMBERS GET 24H EARLY ACCESS  ·  EVERY PIECE CARRIES A DIGITAL PASSPORT";

export default function AnnouncementBar({ onDismiss }: { onDismiss?: () => void }) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="flex h-9 items-center bg-ink text-bone">
      <Marquee>
        <span className="px-6 font-mono text-[10px] uppercase tracking-label text-bone/80">
          {MESSAGE}
        </span>
      </Marquee>
      <button
        type="button"
        onClick={() => {
          setOpen(false);
          onDismiss?.();
        }}
        aria-label="Dismiss announcement"
        className="flex h-9 w-9 shrink-0 items-center justify-center text-bone/60 transition-colors duration-micro hover:text-bone"
      >
        <X size={13} strokeWidth={1} />
      </button>
    </div>
  );
}
