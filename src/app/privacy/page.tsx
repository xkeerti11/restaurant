import React from "react";
import { defaultRestaurantConfig } from "@/lib/mockData";

export const metadata = {
  title: "Privacy Policy | Aura Luxe",
  description: "Privacy policy and client data protection terms.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-text-main mb-4">
          Privacy Policy
        </h1>
        <p className="text-xs text-text-secondary mb-10">Last Revised: November 2026</p>

        <div className="space-y-8 text-xs sm:text-sm text-text-secondary leading-relaxed bg-surface p-6 sm:p-10 rounded-2xl border border-border">
          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-text-main">1. Commitment to Client Confidentiality</h2>
            <p>
              At {defaultRestaurantConfig.name}, we hold guest confidentiality and data sovereignty in the highest regard. This privacy policy defines how we collect, safeguard, and utilize information provided across our website, table reservation engine, and digital order systems.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-text-main">2. Information Collection</h2>
            <p>
              We collect information provided directly by guests when booking reservations (name, email, telephone, party details, dietary notes) and when completing food orders (delivery addresses, contact snapshots, and transaction records).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-text-main">3. Data Usage & Protection</h2>
            <p>
              Your contact details are strictly utilized to coordinate hospitality services, verify table availability, send transaction receipts, and dispatch concierge updates. We never commercialize or lease patron data to third-party marketing entities.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-bold font-heading text-text-main">4. Contact Concierge</h2>
            <p>
              For inquiries regarding data privacy or to request the deletion of account history, please contact our guest privacy officer at {defaultRestaurantConfig.email}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

