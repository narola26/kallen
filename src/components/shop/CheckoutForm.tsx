"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import Reveal from "@/components/motion/Reveal";

type CheckoutData = {
  // Contact
  email: string;
  // Shipping
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
  // Payment
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCVC: string;
};

type Step = "shipping" | "payment" | "confirm";

const STEPS: { id: Step; label: string }[] = [
  { id: "shipping", label: "Address" },
  { id: "payment", label: "Payment" },
  { id: "confirm", label: "Confirm" },
];

export default function CheckoutForm() {
  const { lines } = useCart();
  const [step, setStep] = useState<Step>("shipping");
  const [formData, setFormData] = useState<CheckoutData>({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "DE",
    phone: "",
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVC: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const subtotal = lines.reduce((sum, line) => sum + line.product.price * line.qty, 0);
  const shippingCost = subtotal >= 150 ? 0 : 12;
  const total = subtotal + shippingCost;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirm");
  };

  if (step === "confirm") {
    return (
      <div className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-flare/20 mb-6">
                <span className="text-3xl">✓</span>
              </div>
              <h2 className="font-display text-lg uppercase text-bone sm:text-xl mb-4">Order Confirmed</h2>
              <p className="font-body text-base font-light text-bone/70 mb-8">
                Thank you for your KALLÉN order. A confirmation email has been sent to <strong>{formData.email}</strong>.
              </p>

              <div className="border border-bone/10 p-8 rounded-sm mb-8 text-left">
                <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-4">Order Details</p>
                <div className="space-y-3 mb-6 pb-6 border-b border-bone/10">
                  <div className="flex justify-between">
                    <p className="font-body text-sm font-light text-bone/70">Items ({lines.length})</p>
                    <p className="font-body text-sm text-bone">€{subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-body text-sm font-light text-bone/70">
                      Shipping {subtotal >= 150 && <span className="text-flare">(FREE)</span>}
                    </p>
                    <p className="font-body text-sm text-bone">
                      {shippingCost === 0 ? "FREE" : `€${shippingCost.toFixed(2)}`}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="font-display text-sm uppercase text-bone">Total</p>
                  <p className="font-display text-lg text-bone">€{total.toFixed(2)}</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="border border-bone/10 p-6 text-left">
                  <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                    Delivery To
                  </p>
                  <p className="font-body text-sm font-light text-bone">
                    {formData.firstName} {formData.lastName}
                    <br />
                    {formData.address}
                    <br />
                    {formData.postalCode} {formData.city}
                  </p>
                </div>

                <div className="border border-bone/10 p-6 text-left">
                  <p className="font-mono text-[10px] uppercase tracking-label text-flare mb-2">
                    Estimated Delivery
                  </p>
                  <p className="font-body text-sm font-light text-bone">
                    2-4 business days via DHL GoGreen
                  </p>
                </div>
              </div>

              <div className="space-y-3 font-body text-sm font-light text-bone/70">
                <p>📧 Check your email for tracking updates</p>
                <p>📱 Download the digital passports for your pieces</p>
                <p>♻️ View environmental impact metrics</p>
              </div>

              <div className="mt-8">
                <a
                  href="/"
                  className="border border-bone px-8 py-3 font-body text-xs font-light uppercase tracking-nav text-bone inline-block hover:bg-bone hover:text-void transition-all duration-300"
                >
                  Return to Home
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    );
  }

  return (
    <div className="px-gutter-mobile py-section-mobile sm:px-gutter sm:py-section">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-12">
          {/* Progress Indicator */}
          <div className="sm:col-span-12 mb-8">
            <Reveal>
              <div className="flex items-center justify-between">
                {STEPS.map((s, i) => {
                  const currentIndex = STEPS.findIndex((x) => x.id === step);
                  const done = i < currentIndex;
                  const active = i === currentIndex;

                  return (
                    <div key={s.id} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs font-bold uppercase ${
                          active
                            ? "bg-bone text-void"
                            : done
                              ? "bg-flare text-void"
                              : "bg-bone/20 text-bone/60"
                        }`}
                      >
                        {done ? "✓" : i + 1}
                      </div>
                      <div className="ml-3">
                        <p className="font-mono text-[10px] uppercase tracking-label text-flare">
                          {s.label}
                        </p>
                      </div>
                      {i < STEPS.length - 1 && (
                        <div className={`flex-1 h-0.5 mx-2 ${done ? "bg-flare" : "bg-bone/10"}`} />
                      )}
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>

          {/* Main Form */}
          <div className="sm:col-span-7">
            {step === "shipping" && (
              <Reveal>
                <form onSubmit={handleShippingSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-sm uppercase text-bone mb-6">Contact Information</h3>
                    <label className="flex flex-col gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-label text-flare">
                        Email Address
                      </span>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none"
                      />
                    </label>
                  </div>

                  <div className="pt-6 border-t border-bone/10">
                    <h3 className="font-display text-sm uppercase text-bone mb-6">Shipping Address</h3>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <label className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-label text-flare">
                          First Name
                        </span>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone focus:border-bone focus:outline-none"
                        />
                      </label>
                      <label className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-label text-flare">
                          Last Name
                        </span>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone focus:border-bone focus:outline-none"
                        />
                      </label>
                    </div>

                    <label className="flex flex-col gap-2 mb-6">
                      <span className="font-mono text-[10px] uppercase tracking-label text-flare">
                        Street Address
                      </span>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone focus:border-bone focus:outline-none"
                      />
                    </label>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <label className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-label text-flare">
                          City
                        </span>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone focus:border-bone focus:outline-none"
                        />
                      </label>
                      <label className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-label text-flare">
                          Postal Code
                        </span>
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleChange}
                          required
                          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone focus:border-bone focus:outline-none"
                        />
                      </label>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <label className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-label text-flare">
                          Country
                        </span>
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          className="border-b border-bone/20 bg-void py-3 font-body text-base font-light text-bone focus:border-bone focus:outline-none cursor-pointer"
                        >
                          <option value="DE">Germany</option>
                          <option value="AT">Austria</option>
                          <option value="CH">Switzerland</option>
                          <option value="NL">Netherlands</option>
                          <option value="BE">Belgium</option>
                          <option value="FR">France</option>
                          <option value="IT">Italy</option>
                          <option value="ES">Spain</option>
                          <option value="GB">United Kingdom</option>
                          <option value="US">United States</option>
                        </select>
                      </label>
                      <label className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-label text-flare">
                          Phone
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone focus:border-bone focus:outline-none"
                        />
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full border border-bone px-6 py-4 font-body text-xs font-light uppercase tracking-nav text-bone hover:bg-bone hover:text-void transition-all duration-300"
                  >
                    Continue to Payment
                  </button>
                </form>
              </Reveal>
            )}

            {step === "payment" && (
              <Reveal>
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-sm uppercase text-bone mb-6">Payment Method</h3>
                    <div className="space-y-3 mb-8">
                      <label className="flex items-center p-4 border border-bone/20 cursor-pointer hover:border-bone/40">
                        <input type="radio" name="payment-method" defaultChecked className="accent-bone" />
                        <span className="ml-3 font-body text-sm text-bone">Credit / Debit Card</span>
                      </label>
                      <label className="flex items-center p-4 border border-bone/20 cursor-pointer hover:border-bone/40 opacity-50">
                        <input type="radio" name="payment-method" disabled className="accent-bone" />
                        <span className="ml-3 font-body text-sm text-bone/60">Apple Pay</span>
                      </label>
                      <label className="flex items-center p-4 border border-bone/20 cursor-pointer hover:border-bone/40 opacity-50">
                        <input type="radio" name="payment-method" disabled className="accent-bone" />
                        <span className="ml-3 font-body text-sm text-bone/60">Google Pay</span>
                      </label>
                      <label className="flex items-center p-4 border border-bone/20 cursor-pointer hover:border-bone/40 opacity-50">
                        <input type="radio" name="payment-method" disabled className="accent-bone" />
                        <span className="ml-3 font-body text-sm text-bone/60">Klarna (Pay Later)</span>
                      </label>
                    </div>

                    <label className="flex flex-col gap-2 mb-6">
                      <span className="font-mono text-[10px] uppercase tracking-label text-flare">
                        Cardholder Name
                      </span>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                        placeholder="Name on Card"
                        className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none"
                      />
                    </label>

                    <label className="flex flex-col gap-2 mb-6">
                      <span className="font-mono text-[10px] uppercase tracking-label text-flare">
                        Card Number
                      </span>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\s/g, "").replace(/(.{4})/g, "$1 ");
                          setFormData({ ...formData, cardNumber: val.trim() });
                        }}
                        required
                        placeholder="1234 5678 9012 3456"
                        className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none font-mono"
                      />
                    </label>

                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-label text-flare">
                          Expiry
                        </span>
                        <input
                          type="text"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          required
                          placeholder="MM/YY"
                          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none font-mono"
                        />
                      </label>
                      <label className="flex flex-col gap-2">
                        <span className="font-mono text-[10px] uppercase tracking-label text-flare">
                          CVC
                        </span>
                        <input
                          type="text"
                          name="cardCVC"
                          value={formData.cardCVC}
                          onChange={handleChange}
                          required
                          placeholder="123"
                          maxLength={3}
                          className="border-b border-bone/20 bg-transparent py-3 font-body text-base font-light text-bone placeholder:text-bone/40 focus:border-bone focus:outline-none font-mono"
                        />
                      </label>
                    </div>
                  </div>

                  <label className="flex items-start gap-3 pt-6 border-t border-bone/10">
                    <input
                      type="checkbox"
                      defaultChecked
                      className="w-4 h-4 border border-bone/30 bg-transparent cursor-pointer accent-bone mt-1"
                    />
                    <span className="font-body text-sm font-light text-bone/70">
                      I agree to the terms of service and privacy policy
                    </span>
                  </label>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setStep("shipping")}
                      className="flex-1 border border-bone/40 px-6 py-3 font-body text-xs font-light uppercase tracking-nav text-bone/60 hover:border-bone transition-all duration-300"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 border border-bone px-6 py-3 font-body text-xs font-light uppercase tracking-nav text-bone hover:bg-bone hover:text-void transition-all duration-300"
                    >
                      Complete Order
                    </button>
                  </div>
                </form>
              </Reveal>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="sm:col-span-5">
            <Reveal delay={80}>
              <div className="rounded-sm border border-bone/10 p-8 sticky top-32">
                <h3 className="font-display text-sm uppercase text-bone mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6 pb-6 border-b border-bone/10 max-h-48 overflow-y-auto">
                  {lines.map((line, i) => (
                    <div key={i} className="flex justify-between">
                      <div>
                        <p className="font-body text-sm text-bone">{line.product.name}</p>
                        <p className="font-body text-xs text-bone/60">Size {line.size} × {line.qty}</p>
                      </div>
                      <p className="font-body text-sm text-bone whitespace-nowrap ml-2">
                        €{(line.product.price * line.qty).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 mb-6 pb-6 border-b border-bone/10">
                  <div className="flex justify-between">
                    <p className="font-body text-sm font-light text-bone/70">Subtotal</p>
                    <p className="font-body text-sm text-bone">€{subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-body text-sm font-light text-bone/70">
                      Shipping {subtotal >= 150 && <span className="text-flare">(FREE)</span>}
                    </p>
                    <p className="font-body text-sm text-bone">
                      {shippingCost === 0 ? "FREE" : `€${shippingCost.toFixed(2)}`}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between mb-4">
                  <p className="font-display text-sm uppercase text-bone">Total</p>
                  <p className="font-display text-lg text-bone">€{total.toFixed(2)}</p>
                </div>

                <p className="font-body text-[10px] text-bone/50">
                  ✓ Secure SSL checkout<br />
                  ✓ Encrypted payment<br />
                  ✓ 30-day returns
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}
