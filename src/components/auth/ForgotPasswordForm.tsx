"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = {
  email: string;
};

export default function ForgotPasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="rounded-sm border border-flare/40 bg-void/50 p-8">
        <div className="flex gap-3 mb-4">
          <span className="h-5 w-5 flex items-center justify-center rounded-full bg-flare/80 text-void text-xs font-bold flex-shrink-0">✓</span>
          <div>
            <p className="font-display text-sm uppercase text-bone mb-2">Check Your Email</p>
            <p className="font-body text-sm font-light text-bone/70 leading-relaxed">
              We've sent password reset instructions to <strong>{formData.email}</strong>. The link will expire in 24 hours.
            </p>
            <p className="font-body text-xs text-bone/60 mt-4">
              Didn't receive the email? Check your spam folder or{" "}
              <Link href="/contact" className="underline hover:text-bone transition-colors">
                contact support
              </Link>
              .
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ email: "" });
              }}
              className="mt-6 font-body text-xs text-bone underline hover:text-flare transition-colors"
            >
              Try another email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Email */}
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-label text-flare">Email Address</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
        />
      </label>

      {/* Help Text */}
      <p className="font-body text-[10px] font-light text-bone/50 leading-relaxed">
        Enter the email address associated with your KALLÉN account, and we'll send you a secure password reset link.
      </p>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone transition-all duration-300 hover:bg-bone hover:text-void disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-bone"
      >
        {isSubmitting ? "Sending..." : "Send Reset Link"}
      </button>

      {/* Links */}
      <div className="flex justify-between pt-4">
        <Link
          href="/auth/login"
          className="font-body text-xs text-bone/60 hover:text-bone transition-colors underline"
        >
          Back to login
        </Link>
        <Link
          href="/auth/register"
          className="font-body text-xs text-bone/60 hover:text-bone transition-colors underline"
        >
          Create Account
        </Link>
      </div>
    </form>
  );
}
