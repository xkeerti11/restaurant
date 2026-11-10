import React from "react";
import Link from "next/link";
import { Sparkles, Calendar, Gift, ArrowRight, Clock, Star } from "lucide-react";

export const metadata = {
  title: "Seasonal Privileges & Chef Tasting Menus | Aura Luxe",
  description: "Exclusive culinary privileges, sommelier cellar pairings, and seasonal tasting experiences.",
};

export default function SpecialsPage() {
  const specials = [
    {
      code: "LUXE20",
      discount: "20% Culinary Privilege",
      title: "The Autumn Truffle & Wagyu Omakase",
      desc: "An exclusive 8-course gastronomic journey featuring charcoal-roasted Miyazaki A5 Wagyu, shaved white Alba truffles, and rare Hokkaido diver scallops.",
      validity: "Valid for evening seatings through this month",
      price: "$195 per guest",
      tag: "Seasonal Signature",
    },
    {
      code: "CELLAR96",
      discount: "Complimentary Vintage Flight",
      title: "Reserve Sommelier Cellar Experience",
      desc: "Receive two complimentary glasses of 1996 Grand Cru Bourdeaux when booking a private tasting room experience for parties of 4 or more.",
      validity: "Subject to cellar availability",
      price: "Complimentary with Booking",
      tag: "Cellar Exclusive",
    },
    {
      code: "WELCOME10",
      discount: "10% Welcome Courtesy",
      title: "First Digital Ordering Privilege",
      desc: "Enjoy a 10% welcome consideration on your first white-glove home delivery or boutique takeout order placed via our digital platform.",
      validity: "One-time digital redemption",
      price: "Automatic at Checkout",
      tag: "Welcome Courtesy",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            <Gift className="w-3.5 h-3.5" aria-hidden="true" />
            Gastronomic Privileges
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-text-main">
            Seasonal Offers & <span className="text-primary">Tastings</span>
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary mt-3">
            Rare opportunities to savor limited-edition tasting menus and cellar vintages curated by Chef Marcus Vance.
          </p>
        </div>

        {/* Specials Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {specials.map((s, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-border flex flex-col justify-between hover:border-primary/40 transition-all duration-300 relative group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/15 text-primary border border-primary/25">
                    {s.tag}
                  </span>
                  <span className="font-mono text-xs font-bold text-text-main bg-surface-elevated px-2.5 py-1 rounded-lg border border-border">
                    {s.code}
                  </span>
                </div>

                <h2 className="text-xl font-bold font-heading text-text-main mb-2">
                  {s.title}
                </h2>
                <span className="text-xs font-semibold text-primary-accent block mb-3">
                  {s.discount}
                </span>

                <p className="text-xs text-text-secondary leading-relaxed mb-6">
                  {s.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-border space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-text-secondary font-medium">{s.validity}</span>
                  <span className="font-heading font-bold text-text-main">{s.price}</span>
                </div>

                <div className="flex gap-2.5">
                  <Link
                    href="/reservation"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white text-xs font-semibold shadow-glow hover:shadow-glow-lg active:scale-95 transition-all text-center flex items-center justify-center gap-1.5 focus-ring"
                  >
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Reserve Tasting</span>
                  </Link>

                  <Link
                    href="/menu"
                    className="px-4 py-3 rounded-xl bg-surface border border-border hover:border-primary text-text-main hover:text-primary text-xs font-semibold transition-all flex items-center justify-center focus-ring"
                    aria-label={`View menu for ${s.title}`}
                  >
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

