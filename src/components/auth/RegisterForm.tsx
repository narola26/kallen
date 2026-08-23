"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  newsletter: boolean;
};

export default function RegisterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setIsSubmitting(false);
      console.log("Register with:", formData);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-label text-flare">First Name</span>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="First"
            className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="font-mono text-[10px] uppercase tracking-label text-flare">Last Name</span>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Last"
            className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
          />
        </label>
      </div>

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
        <p className="font-body text-[10px] text-bone/50 mt-2">
          At least 8 characters, including uppercase, lowercase, and numbers.
        </p>
      </label>

      {/* Confirm Password */}
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-label text-flare">Confirm Password</span>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          placeholder="••••••••"
          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
        />
      </label>

      {/* Newsletter */}
      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          name="newsletter"
          checked={formData.newsletter}
          onChange={handleChange}
          className="w-4 h-4 border border-bone/30 bg-transparent cursor-pointer accent-flare mt-1"
        />
        <span className="font-body text-sm font-light text-bone/70">
          Send me early access announcements, new releases, and special offers. You can unsubscribe anytime.
        </span>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone transition-all duration-300 hover:bg-bone hover:text-void disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-bone"
      >
        {isSubmitting ? "Creating Account..." : "Create Account"}
      </button>

      {/* Sign In Link */}
      <div className="text-center pt-4">
        <p className="font-body text-sm font-light text-bone/60">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-bone underline hover:text-flare transition-colors">
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}
