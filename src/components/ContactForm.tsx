"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="font-body text-sm font-light text-bone/80">
        Message received. We reply within two working days.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="flex flex-col gap-8"
    >
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-label text-ash">Name</span>
        <input
          type="text"
          required
          className="border-b border-bone/[0.2] bg-transparent py-2 font-body text-base font-light text-bone focus:border-bone/60 focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-label text-ash">Email</span>
        <input
          type="email"
          required
          className="border-b border-bone/[0.2] bg-transparent py-2 font-body text-base font-light text-bone focus:border-bone/60 focus:outline-none"
        />
      </label>
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-label text-ash">Message</span>
        <textarea
          required
          rows={4}
          className="resize-none border-b border-bone/[0.2] bg-transparent py-2 font-body text-base font-light text-bone focus:border-bone/60 focus:outline-none"
        />
      </label>
      <button
        type="submit"
        className="w-fit border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone transition-colors duration-section hover:bg-bone hover:text-void"
      >
        Send
      </button>
    </form>
  );
}
