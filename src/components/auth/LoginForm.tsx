"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    email: "",
    password: "",
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
      // Simulate login success
      console.log("Login with:", formData);
    }, 1000);
  };

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

      {/* Password */}
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-label text-flare">Password</span>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="••••••••"
          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
        />
      </label>

      {/* Remember Me */}
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          className="w-4 h-4 border border-bone/30 bg-transparent cursor-pointer accent-flare"
        />
        <span className="font-body text-sm font-light text-bone/70">Remember me</span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone transition-all duration-300 hover:bg-bone hover:text-void disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-bone"
      >
        {isSubmitting ? "Signing In..." : "Sign In"}
      </button>

      {/* Links */}
      <div className="flex justify-between pt-4">
        <Link
          href="/auth/register"
          className="font-body text-xs text-bone/60 hover:text-bone transition-colors underline"
        >
          Create Account
        </Link>
        <Link
          href="/auth/forgot-password"
          className="font-body text-xs text-bone/60 hover:text-bone transition-colors underline"
        >
          Forgot Password?
        </Link>
      </div>

      {/* Privacy Notice */}
      <p className="font-body text-[10px] font-light text-bone/50 leading-relaxed">
        By signing in, you agree to our{" "}
        <Link href="/legal/terms-of-service" className="underline hover:text-bone/70 transition-colors">
          terms of service
        </Link>
        . We respect your privacy.
      </p>
    </form>
  );
}
