import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "Addresses — KALLÉN" };

const SAMPLE_ADDRESSES = [
  {
    id: 1,
    type: "Home",
    name: "Sarah Anderson",
    street: "123 Kreuzberg Straße",
    city: "Berlin, 10999",
    country: "Germany",
    phone: "+49 30 1234 5678",
    isDefault: true,
  },
  {
    id: 2,
    type: "Work",
    name: "Sarah Anderson",
    street: "456 Prenzlauer Berg",
    city: "Berlin, 10405",
    country: "Germany",
    phone: "+49 30 9876 5432",
    isDefault: false,
  },
];

export default function AddressesPage() {
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
              Addresses
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
              Manage your shipping and billing addresses.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Addresses */}
      <div className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          <div className="space-y-6 mb-12">
            {SAMPLE_ADDRESSES.map((address, i) => (
              <Reveal key={address.id} delay={i * 80}>
                <div className="border border-bone/10 p-6 hover:border-bone/20 hover:bg-void/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="font-display text-sm uppercase text-bone">
                          {address.type}
                        </p>
                        {address.isDefault && (
                          <span className="font-mono text-[10px] uppercase tracking-label text-flare bg-void/50 px-2 py-1 rounded-sm">
                            Default
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="font-body text-xs text-bone underline hover:text-flare transition-colors">
                        Edit
                      </button>
                      <button className="font-body text-xs text-bone/60 underline hover:text-bone/80 transition-colors">
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="font-body text-sm font-light text-bone">
                      {address.name}
                    </p>
                    <p className="font-body text-sm font-light text-bone/70">
                      {address.street}
                    </p>
                    <p className="font-body text-sm font-light text-bone/70">
                      {address.city}
                    </p>
                    <p className="font-body text-sm font-light text-bone/70">
                      {address.country}
                    </p>
                    <p className="font-body text-sm font-light text-bone/60 mt-4">
                      {address.phone}
                    </p>
                  </div>

                  {!address.isDefault && (
                    <button className="mt-4 font-body text-xs text-bone underline hover:text-flare transition-colors">
                      Make Default
                    </button>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <button className="border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone hover:bg-bone hover:text-void transition-all duration-300">
              Add New Address
            </button>
          </Reveal>
        </div>
      </div>

      {/* Info */}
      <div className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-content">
          <Reveal>
            <p className="font-body text-sm font-light text-bone/70">
              We use your address to process orders and shipments. You can add, edit, or delete addresses anytime.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
