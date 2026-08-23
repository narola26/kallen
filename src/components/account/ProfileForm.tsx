"use client";

import { useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  newsletter: boolean;
};

export default function ProfileForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [formData, setFormData] = useState<FormState>({
    firstName: "Sarah",
    lastName: "Anderson",
    email: "sarah@example.com",
    phone: "+49 30 1234 5678",
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

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSaved(true);
      setTimeout(() => setIsSaved(false), 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Personal Information */}
      <div>
        <h2 className="font-display text-sm uppercase text-bone mb-6">Personal Information</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <label className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-label text-flare">First Name</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
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
                className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
              />
            </label>
          </div>

          <label className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-label text-flare">Email Address</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-label text-flare">Phone Number</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
            />
          </label>
        </div>
      </div>

      {/* Communication Preferences */}
      <div className="border-t border-bone/10 pt-8">
        <h2 className="font-display text-sm uppercase text-bone mb-6">Communication</h2>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="newsletter"
            checked={formData.newsletter}
            onChange={handleChange}
            className="w-4 h-4 border border-bone/30 bg-transparent cursor-pointer accent-flare mt-1"
          />
          <div>
            <span className="font-body text-sm font-light text-bone/70">
              Send me early access announcements and new release notifications.
            </span>
            <p className="font-body text-[10px] text-bone/50 mt-2">
              You can manage these preferences at any time.
            </p>
          </div>
        </label>
      </div>

      {/* Password Change */}
      <div className="border-t border-bone/10 pt-8">
        <h2 className="font-display text-sm uppercase text-bone mb-6">Security</h2>
        <div className="space-y-4">
          <label className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-label text-flare">Current Password</span>
            <input
              type="password"
              placeholder="••••••••"
              className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-label text-flare">New Password</span>
            <input
              type="password"
              placeholder="••••••••"
              className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
            />
            <p className="font-body text-[10px] text-bone/50">
              Leave blank if you don&apos;t want to change your password.
            </p>
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-mono text-[10px] uppercase tracking-label text-flare">Confirm New Password</span>
            <input
              type="password"
              placeholder="••••••••"
              className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
            />
          </label>
        </div>
      </div>

      {/* Success Message */}
      {isSaved && (
        <div className="rounded-sm border border-flare/40 bg-void/50 p-4">
          <p className="font-body text-sm font-light text-bone flex items-center gap-2">
            <span>✓</span> Your changes have been saved.
          </p>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone transition-all duration-300 hover:bg-bone hover:text-void disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-bone"
        >
          {isSubmitting ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
}
