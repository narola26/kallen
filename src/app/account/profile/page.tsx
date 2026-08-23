import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import ProfileForm from "@/components/account/ProfileForm";

export const metadata: Metadata = { title: "Account Settings — KALLÉN" };

export default function ProfilePage() {
  return (
    <div>
      {/* Header */}
      <div className="border-b border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <Reveal>
            <Link
              href="/account"
              className="font-body text-xs text-bone/60 hover:text-bone transition-colors underline mb-4 block"
            >
              ← Back to account
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-2xl uppercase leading-snug tracking-[0.06em] text-bone sm:text-3xl">
              Account Settings
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
              Manage your personal information, email, password, and communication preferences.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <ProfileForm />
          </Reveal>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="rounded-sm border border-bone/20 p-8">
              <p className="font-display text-sm uppercase text-bone mb-3">Danger Zone</p>
              <p className="font-body text-sm font-light text-bone/70 mb-6">
                These actions cannot be undone. Please proceed carefully.
              </p>
              <div className="space-y-3">
                <button className="block w-full text-left font-body text-sm font-light text-bone/70 hover:text-bone transition-colors pb-3 border-b border-bone/10 hover:border-bone/30">
                  Download my data
                </button>
                <button className="block w-full text-left font-body text-sm font-light text-flare/70 hover:text-flare transition-colors pb-3 border-b border-bone/10 hover:border-flare/30">
                  Deactivate my account
                </button>
                <button className="block w-full text-left font-body text-sm font-light text-flare/70 hover:text-flare transition-colors pb-3">
                  Delete my account permanently
                </button>
              </div>
              <p className="font-body text-[10px] text-bone/50 mt-6">
                Account deletion is permanent and cannot be reversed. All orders and data will be retained for legal and accounting purposes.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
