import type { Metadata } from "next";
import StaticPage from "@/components/StaticPage";

export const metadata: Metadata = { title: "Returns Policy — KALLÉN" };

export default function ReturnsPolicyPage() {
  return (
    <StaticPage
      eyebrow="Legal"
      title="Returns & Refunds Policy"
      intro="Clear, transparent policy for returns, exchanges, and refunds. Last updated August 2026."
      sections={[
        {
          heading: "Returns Window",
          body: [
            "You have 30 calendar days from delivery to initiate a return.",
            "Items must be unworn, unwashed, and in original condition with all tags attached.",
            "Items showing signs of wear, damage, or alteration are not eligible for return.",
          ],
        },
        {
          heading: "How to Initiate a Return",
          body: [
            "1. Log into your KALLÉN account and go to 'Order History'",
            "2. Select the item you wish to return and click 'Initiate Return'",
            "3. Select your reason (sizing, doesn't like, defect, other)",
            "4. Print your return label (prepaid shipping within EU; international returns deducted from refund)",
            "5. Pack the item securely and ship to the provided address",
          ],
        },
        {
          heading: "Return Shipping",
          body: [
            "EU Returns: We provide a prepaid DHL label. Return shipping is free.",
            "International Returns: You cover return shipping. Refund will be reduced by return shipping costs (typically €15–50 depending on destination).",
            "High-Value Items: We recommend insured shipping (not required but recommended).",
          ],
        },
        {
          heading: "Refund Processing",
          body: [
            "We inspect returned items upon receipt (typically 3–5 business days).",
            "If approved, your refund is processed within 10 business days.",
            "Refunds are issued to the original payment method.",
            "For card payments, please allow 3–5 business days for the refund to appear.",
            "For Klarna purchases, the refund will be credited to your Klarna account.",
          ],
        },
        {
          heading: "Exchanges",
          body: [
            "You can exchange for a different size or color within 30 days.",
            "We'll ship the replacement item at no extra cost (within EU).",
            "If the replacement is more expensive, you'll be charged the difference. If it's less expensive, we'll refund the difference.",
          ],
        },
        {
          heading: "Final Sale Items",
          body: [
            "Limited-edition collections marked as 'Final Sale' cannot be returned or exchanged.",
            "Clearance or discounted items are not final sale unless explicitly stated.",
          ],
        },
        {
          heading: "Defective Items",
          body: [
            "If you receive a defective item (seams coming apart, color issues, damage in shipping), email hello@kallen.de with photos within 7 days.",
            "We will provide a prepaid return label and ship a replacement at no cost.",
            "If replacement stock is unavailable, we will issue a full refund.",
          ],
        },
        {
          heading: "Digital Passports & Returns",
          body: [
            "When you return an item, the digital passport reverts to KALLÉN.",
            "The digital passport record will show the item was returned (for transparency).",
            "If your returned item has been resold, the new owner will receive a clean digital passport.",
          ],
        },
        {
          heading: "What Happens to Returned Items?",
          body: [
            "Returned items in perfect condition may be resold at full price, offered at discount, or donated.",
            "We aim to minimize waste through resale or donation when possible.",
            "Items cannot be returned to resale channels if the digital passport has been tampered with or the NFC chip is non-functional.",
          ],
        },
        {
          heading: "Non-Returnable Items",
          body: [
            "• Items without tags or signs of wear",
            "• Custom or made-to-order pieces",
            "• Gift cards and digital downloads",
            "• Items purchased from third-party resellers (contact the seller directly)",
          ],
        },
        {
          heading: "Refund Eligibility Checklist",
          body: [
            "☑ Within 30 days of delivery",
            "☑ Original packaging and tags intact",
            "☑ No signs of wear (washing, wearing, stretching, staining)",
            "☑ Not a final sale item",
            "☑ Digital passport not tampered with",
          ],
        },
        {
          heading: "International Returns",
          body: [
            "We accept returns from all countries. International return shipping costs vary:",
            "• UK & Europe: €15–25 (estimated)",
            "• Asia: €30–50 (estimated)",
            "• Americas: €40–60 (estimated)",
            "Use DHL Express or tracked shipping for safety. Keep your tracking number.",
            "Return address will be provided upon initiating the return.",
          ],
        },
        {
          heading: "Special Circumstances",
          body: [
            "Sizing Issues: We provide a detailed size guide. If the guide was inaccurate, contact us — we may be able to help.",
            "Gift Returns: Include the gift receipt if you have it. Otherwise, refunds are issued to the original card.",
            "Lost or Damaged Returns: If your return is lost in shipping, provide tracking proof. We will investigate with the carrier.",
          ],
        },
        {
          heading: "Questions About Your Return?",
          body: [
            "Email: hello@kallen.de | Phone: +49 30 [phone] | Response time: 24 hours (business days)",
            "Track your return: Once shipped, you'll receive tracking via email.",
          ],
        },
      ]}
    />
  );
}
