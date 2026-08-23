import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = { title: "Create Account — KALLÉN" };

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
      <div className="w-full max-w-md">
        <div className="mb-12">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare mb-4">
              New Here
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-2xl uppercase leading-snug tracking-[0.06em] text-bone sm:text-3xl">
              Join KALLÉN
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 font-body text-base font-light text-bone/70">
              Create your account to start shopping, access digital passports, and join our community.
            </p>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <RegisterForm />
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-12 text-center">
            <p className="font-body text-sm font-light text-bone/60">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-bone underline hover:text-flare transition-colors"
              >
                Sign in
              </Link>
            </p>
            <p className="font-body text-[11px] font-light text-bone/50 mt-6 leading-relaxed">
              By creating an account, you agree to our{" "}
              <Link
                href="/legal/terms-of-service"
                className="underline hover:text-bone transition-colors"
              >
                terms of service
              </Link>
              {" "}and{" "}
              <Link
                href="/legal/privacy-policy"
                className="underline hover:text-bone transition-colors"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
