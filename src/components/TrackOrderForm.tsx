"use client";

import { useState } from "react";

export default function TrackOrderForm() {
  const [checked, setChecked] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setChecked(true);
      }}
      className="flex flex-col gap-8"
    >
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-label text-ash">Order number</span>
        <input
          type="text"
          required
          placeholder="KAL-000000"
          className="border-b border-bone/[0.2] bg-transparent py-2 font-body text-base font-light text-bone placeholder:text-ash/60 focus:border-bone/60 focus:outline-none"
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
      <button
        type="submit"
        className="w-fit border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone transition-colors duration-section hover:bg-bone hover:text-void"
      >
        Track
      </button>
      {checked && (
        <p className="font-mono text-xs uppercase tracking-label text-ash">
          This is a visual demo — order tracking is not connected yet.
        </p>
      )}
    </form>
  );
}
