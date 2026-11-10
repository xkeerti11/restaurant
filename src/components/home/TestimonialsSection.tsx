"use client";

import React from "react";
import { mockTestimonials } from "@/lib/mockData";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
            Guest Impressions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-text-main">
            Acclaimed By Connoisseurs
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-2">
            Reflections from patrons who have experienced our culinary storytelling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockTestimonials.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-border flex flex-col justify-between hover:border-primary/40 transition-all duration-300 relative group hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-primary/15 absolute top-6 right-6" aria-hidden="true" />

              <div>
                <div className="flex items-center gap-1 text-primary mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-text-main leading-relaxed italic mb-6">
                  &ldquo;{t.review_text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-semibold text-sm text-text-main">
                    {t.customer_name}
                  </h3>
                  <span className="text-[11px] text-text-secondary">{t.date}</span>
                </div>
                {t.is_verified && (
                  <span className="flex items-center gap-1 text-[11px] text-status-success font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" /> Verified Patron
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
