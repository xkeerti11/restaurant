import React from "react";
import { defaultRestaurantConfig } from "@/lib/mockData";

export const metadata = {
  title: "Terms of Service | Aura Luxe",
  description: "Terms of service, dining etiquette, and reservation policies.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-text-main mb-4">
          Terms of Service
        </h1>
        <p className="text-xs text-text-secondary mb-10">Last Revised: November 2026</p>

        <div className="space-y-8 text-xs sm:text-sm text-text-secondary leading-relaxed bg-surface p-6 sm:p-10 rounded-2xl border border-border">
          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-text-main">1. Scope of Agreement</h2>
            <p>
              By accessing the digital dining platform of {defaultRestaurantConfig.name}, reserving tables, or placing orders for culinary delivery or takeaway, you agree to comply with the terms and conditions outlined herein.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-text-main">2. Reservation Grace Period & Cancellation</h2>
            <p>
              Table reservations are held for 15 minutes past the scheduled arrival time. Parties arriving past this window will be accommodated based on live room availability. Advance cancellation notice of at least 24 hours is respectfully requested.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-text-main">3. Culinary Customization & Allergen Disclaimers</h2>
            <p>
              While our kitchen exercises extreme precaution to isolate allergens, our kitchen operates open wood-fired hearths and handles wheat, seafood, tree nuts, and dairy daily. Cross-contact warnings apply to all items.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-text-main">4. Pricing & Minor Units</h2>
            <p>
              All prices displayed reflect the selected currency ({defaultRestaurantConfig.currency_code}) and are subject to local municipality dining taxes and delivery fulfillment fees where applicable.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

