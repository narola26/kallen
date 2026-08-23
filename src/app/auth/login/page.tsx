import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = { title: "Login — KALLÉN" };

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
      <div className="w-full max-w-md">
        <div className="mb-12">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-label text-flare mb-4">
              Account Access
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl">
              Welcome Back
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 font-body text-base font-light text-bone/70">
              Sign in to your account to view orders, manage your digital passports, and access exclusive club benefits.
            </p>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <LoginForm />
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-12 space-y-4 text-center">
            <p className="font-body text-sm font-light text-bone/60">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="text-bone underline hover:text-flare transition-colors"
              >
                Create one
              </Link>
            </p>
            <p className="font-body text-sm font-light text-bone/60">
              <Link
                href="/auth/forgot-password"
                className="text-bone underline hover:text-flare transition-colors"
              >
                Forgot your password?
              </Link>
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
