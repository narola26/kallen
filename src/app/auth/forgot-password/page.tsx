import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export const metadata: Metadata = { title: "Reset Password — KALLÉN" };

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
      <div className="w-full max-w-md">
        <div className="mb-12">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare mb-4">
              Password Reset
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl">
              Forgot Your Password?
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 font-body text-base font-light text-bone/70">
              Enter your email address and we&apos;ll send you instructions to reset your password.
            </p>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <ForgotPasswordForm />
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-12 space-y-4 text-center">
            <Link
              href="/auth/login"
              className="block font-body text-sm font-light text-bone hover:text-flare transition-colors underline"
            >
              Back to login
            </Link>
            <p className="font-body text-sm font-light text-bone/60">
              Need help?{" "}
              <Link
                href="/contact"
                className="text-bone underline hover:text-flare transition-colors"
              >
                Contact support
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
