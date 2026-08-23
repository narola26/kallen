"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  category: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    category: "support",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call (in production, this would send to your backend)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Auto-reset form after showing success
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          category: "support",
          subject: "",
          message: "",
        });
        setSubmitted(false);
      }, 5000);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="rounded-sm border border-flare/40 bg-void/50 p-8">
        <div className="flex gap-3 mb-4">
          <span className="h-5 w-5 flex items-center justify-center rounded-full bg-flare/80 text-void text-xs font-bold">✓</span>
          <div>
            <p className="font-display text-sm uppercase text-bone mb-2">Message Received</p>
            <p className="font-body text-sm font-light text-bone/70 leading-relaxed">
              Thanks for reaching out. We reply to all inquiries within <strong>48 business hours</strong>. You&apos;ll hear from us at <strong>{formData.email}</strong>.
            </p>
            <p className="font-body text-xs font-light text-bone/60 mt-4">
              In the meantime, explore our <a href="/faq" className="underline hover:text-bone transition-colors">FAQ</a> or <a href="/shop" className="underline hover:text-bone transition-colors">shop collections</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8">
      {/* Name Field */}
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-label text-flare">Name</span>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
        />
      </label>

      {/* Email Field */}
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-label text-flare">Email</span>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="your@email.com"
          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
        />
      </label>

      {/* Category Selector */}
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-label text-flare">Inquiry Type</span>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="border-b border-bone/20 bg-void py-3 font-body text-base font-light text-bone focus:border-bone focus:outline-none transition-colors duration-200 cursor-pointer"
        >
          <option value="support">Customer Support</option>
          <option value="returns">Returns & Refunds</option>
          <option value="press">Press & Media</option>
          <option value="collaboration">Collaboration Inquiry</option>
          <option value="creator">Become a Creator</option>
          <option value="wholesale">Wholesale</option>
          <option value="other">Other</option>
        </select>
      </label>

      {/* Subject Field */}
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-label text-flare">Subject</span>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Brief subject of your message"
          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
        />
      </label>

      {/* Message Field */}
      <label className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-label text-flare">Message</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us what's on your mind..."
          className="resize-none border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none transition-colors duration-200"
        />
      </label>

      {/* Submit Button */}
      <div className="flex items-center gap-4 pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone transition-all duration-300 hover:bg-bone hover:text-void disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-bone"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        <span className="font-mono text-[10px] uppercase tracking-label text-bone/50">
          Response time: 24-48 hours
        </span>
      </div>

      {/* Privacy Notice */}
      <p className="font-body text-[11px] font-light text-bone/60 leading-relaxed">
        By submitting this form, you agree to our{" "}
        <a href="/legal/privacy-policy" className="underline hover:text-bone transition-colors">
          privacy policy
        </a>
        . Your information is secure and will only be used to respond to your inquiry.
      </p>
    </form>
  );
}
