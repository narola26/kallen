"use client";

import { useState } from "react";
import { CREATOR_CATEGORIES } from "@/lib/creator-market";

const FIELD =
  "border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200";

const LABEL = "font-mono text-[10px] uppercase tracking-label text-flare";

type FormState = {
  name: string;
  studio: string;
  email: string;
  location: string;
  portfolio: string;
  instagram: string;
  categories: string[];
  discipline: string;
  pitch: string;
};

const EMPTY: FormState = {
  name: "",
  studio: "",
  email: "",
  location: "",
  portfolio: "",
  instagram: "",
  categories: [],
  discipline: "",
  pitch: "",
};

/**
 * Store application. There is no backend wired up — this validates and
 * shows the accepted state so the flow reads as real in a demo.
 */
export default function StoreApplicationForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const toggleCategory = (category: string) =>
    setForm((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : [...prev.categories, category],
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="border border-flare/40 bg-void/50 p-8 sm:p-10">
        <p className="font-mono text-[10px] uppercase tracking-label text-flare">Application received</p>
        <h3 className="mt-5 font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone">
          We have your work, {form.name.split(" ")[0] || "there"}
        </h3>
        <p className="mt-6 font-body text-base font-light leading-relaxed text-bone/70">
          Every application is reviewed by a person, not a filter. We come back to everyone within{" "}
          <strong className="font-normal text-bone">14 days</strong> — including the no&apos;s, with a
          reason. Watch for a reply at{" "}
          <strong className="font-normal text-bone">{form.email}</strong>.
        </p>
        <p className="mt-6 font-body text-sm font-light leading-relaxed text-bone/60">
          If we open a store for you, the first conversation is about which five pieces to make. Bring
          more than five ideas.
        </p>
        <button
          onClick={() => {
            setForm(EMPTY);
            setSubmitted(false);
          }}
          className="mt-8 border border-bone/40 px-6 py-2.5 font-body text-xs font-light uppercase tracking-nav text-bone/80 transition-colors duration-micro hover:border-bone hover:text-bone"
        >
          Submit another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={LABEL}>Your name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={update}
            required
            placeholder="First and last"
            className={FIELD}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={LABEL}>Store name</span>
          <input
            type="text"
            name="studio"
            value={form.studio}
            onChange={update}
            required
            placeholder="What the imprint is called"
            className={FIELD}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={LABEL}>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={update}
            required
            placeholder="your@email.com"
            className={FIELD}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={LABEL}>Where you work</span>
          <input
            type="text"
            name="location"
            value={form.location}
            onChange={update}
            required
            placeholder="City, country"
            className={FIELD}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={LABEL}>Portfolio link</span>
          <input
            type="url"
            name="portfolio"
            value={form.portfolio}
            onChange={update}
            required
            placeholder="https://"
            className={FIELD}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className={LABEL}>Instagram</span>
          <input
            type="text"
            name="instagram"
            value={form.instagram}
            onChange={update}
            placeholder="@handle"
            className={FIELD}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2">
        <span className={LABEL}>What you make</span>
        <input
          type="text"
          name="discipline"
          value={form.discipline}
          onChange={update}
          required
          placeholder="Screenprint, 3D, lettering, photography…"
          className={FIELD}
        />
      </label>

      {/* Categories */}
      <fieldset className="flex flex-col gap-4">
        <legend className={LABEL}>Garments you want your work on</legend>
        <div className="flex flex-wrap gap-2">
          {CREATOR_CATEGORIES.map((category) => {
            const active = form.categories.includes(category);
            return (
              <button
                key={category}
                type="button"
                onClick={() => toggleCategory(category)}
                aria-pressed={active}
                className={`border px-4 py-2 font-body text-xs font-light uppercase tracking-nav transition-colors duration-micro ${
                  active
                    ? "border-bone bg-bone text-void"
                    : "border-bone/20 text-bone/70 hover:border-bone/50 hover:text-bone"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2">
        <span className={LABEL}>Why these five pieces</span>
        <textarea
          name="pitch"
          value={form.pitch}
          onChange={update}
          required
          rows={5}
          placeholder="You get five slots and no more. Tell us what you'd put in them and why those five."
          className={`${FIELD} resize-none`}
        />
        <span className="font-body text-xs font-light text-bone/40">
          Straight answers only. We read every one of these.
        </span>
      </label>

      <div className="flex flex-col gap-5 border-t border-bone/10 pt-8">
        <button
          type="submit"
          disabled={submitting}
          className="w-full border border-bone bg-bone px-8 py-4 font-body text-xs font-light uppercase tracking-nav text-void transition-colors duration-micro hover:bg-transparent hover:text-bone disabled:opacity-50"
        >
          {submitting ? "Sending…" : "Apply for a store"}
        </button>
        <p className="font-body text-xs font-light leading-relaxed text-bone/50">
          No application fee and no fee to open a store. You keep the rights to every design you send —
          submitting here grants us nothing until a contract is signed by both sides.
        </p>
      </div>
    </form>
  );
}
