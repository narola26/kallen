"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function JoinForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="mt-6 font-body text-sm font-light text-bone/80">
        You&apos;re on the list. Watch your inbox before the next drop.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mt-6 border-b border-bone/[0.2] pb-3"
    >
      <div className="flex items-baseline justify-between gap-4">
        <input
          type="email"
          required
          placeholder="your@email.com"
          className="w-full bg-transparent font-body text-base font-light text-bone placeholder:text-ash focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Join the club"
          className="shrink-0 text-bone/70 transition-colors duration-micro hover:text-bone"
        >
          <ArrowRight size={18} strokeWidth={1.25} />
        </button>
      </div>
    </form>
  );
}
