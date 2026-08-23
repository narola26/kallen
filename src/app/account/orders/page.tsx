import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";

export const metadata: Metadata = { title: "My Orders — KALLÉN" };

const SAMPLE_ORDERS = [
  {
    id: "KLD-2024-0847",
    date: "August 15, 2024",
    items: 2,
    total: "€ 487.50",
    status: "delivered",
    statusLabel: "Delivered",
    tracking: "DHL GoGreen",
  },
  {
    id: "KLD-2024-0612",
    date: "July 28, 2024",
    items: 1,
    total: "€ 215.00",
    status: "delivered",
    statusLabel: "Delivered",
    tracking: "DHL GoGreen",
  },
  {
    id: "KLD-2024-0391",
    date: "June 14, 2024",
    items: 3,
    total: "€ 629.00",
    status: "delivered",
    statusLabel: "Delivered",
    tracking: "DHL GoGreen",
  },
];

const STATUS_COLORS = {
  pending: "text-flare",
  processing: "text-bone/70",
  shipped: "text-bone",
  delivered: "text-bone",
  cancelled: "text-bone/50",
};

export default function OrdersPage() {
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
            <h1 className="font-display text-lg uppercase leading-snug tracking-[0.06em] text-bone sm:text-xl">
              Order History
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 max-w-2xl font-body text-base font-light leading-relaxed text-bone/70">
              View all your KALLÉN orders, track shipments, and access digital passports for each piece.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Orders List */}
      <div className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-content">
          {SAMPLE_ORDERS.length > 0 ? (
            <div className="space-y-6">
              {SAMPLE_ORDERS.map((order, i) => (
                <Reveal key={order.id} delay={i * 80}>
                  <div className="border border-bone/10 p-6 hover:border-bone/30 hover:bg-void/20 transition-all duration-300">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-12 sm:items-center">
                      {/* Order Info */}
                      <div className="sm:col-span-4">
                        <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                          Order ID
                        </p>
                        <p className="font-display text-sm uppercase text-bone mb-4">{order.id}</p>
                        <p className="font-body text-xs text-bone/60">{order.date}</p>
                      </div>

                      {/* Items & Total */}
                      <div className="sm:col-span-3">
                        <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                          Items
                        </p>
                        <p className="font-display text-sm uppercase text-bone">{order.items}</p>
                        <p className="font-body text-sm font-light text-bone/70 mt-2">{order.total}</p>
                      </div>

                      {/* Status */}
                      <div className="sm:col-span-3">
                        <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                          Status
                        </p>
                        <p
                          className={`font-display text-sm uppercase ${
                            STATUS_COLORS[order.status as keyof typeof STATUS_COLORS]
                          }`}
                        >
                          {order.statusLabel}
                        </p>
                        <p className="font-body text-xs text-bone/60 mt-2">{order.tracking}</p>
                      </div>

                      {/* Action */}
                      <div className="sm:col-span-2 flex justify-end">
                        <Link
                          href={`/account/orders/${order.id}`}
                          className="border border-bone/40 px-6 py-2 font-body text-xs font-light uppercase tracking-nav text-bone hover:border-bone hover:bg-bone/5 transition-all duration-300 whitespace-nowrap"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="text-center py-16">
                <p className="font-display text-lg uppercase text-bone mb-4">No Orders Yet</p>
                <p className="font-body text-base font-light text-bone/70 mb-8">
                  Start your KALLÉN journey with your first piece.
                </p>
                <Link
                  href="/shop"
                  className="border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone inline-block hover:bg-bone hover:text-void transition-all duration-300"
                >
                  Shop Collections
                </Link>
              </div>
            </Reveal>
          )}
        </div>
      </div>

      {/* Help Section */}
      <div className="border-t border-bone/10 px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section bg-void/30">
        <div className="mx-auto max-w-content">
          <Reveal>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div>
                <p className="font-display text-sm uppercase text-bone mb-3">Can&apos;t find your order?</p>
                <p className="font-body text-sm font-light text-bone/70 mb-4">
                  Check your email for order confirmation. Still not there? We can help.
                </p>
                <Link
                  href="/contact"
                  className="font-body text-xs text-bone underline hover:text-flare transition-colors"
                >
                  Contact Support →
                </Link>
              </div>
              <div>
                <p className="font-display text-sm uppercase text-bone mb-3">Track your shipment</p>
                <p className="font-body text-sm font-light text-bone/70 mb-4">
                  All KALLÉN orders ship with full tracking via DHL GoGreen. Use your tracking number to follow your piece.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
