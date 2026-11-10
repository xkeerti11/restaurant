"use client";

import React from "react";
import { Sparkles, Award, Flame, HeartHandshake } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Award className="w-6 h-6 text-primary" aria-hidden="true" />,
      title: "Michelin Heritage & Rigor",
      description:
        "Led by culinary visionaries with classical training in 3-starred French and Tokyo kitchens.",
    },
    {
      icon: <Flame className="w-6 h-6 text-primary" aria-hidden="true" />,
      title: "Wood-Fired Hearth & Smoke",
      description:
        "Binchotan charcoal searing and fruitwood smoke imparting unmatched depth to every dish.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" aria-hidden="true" />,
      title: "Zero Compromise Sourcing",
      description:
        "Certified Japanese A5 Wagyu, foraged Pacific truffles, and line-caught wild seafood flown in daily.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-primary" aria-hidden="true" />,
      title: "White Glove Digital Hospitality",
      description:
        "Effortless real-time table booking, immersive culinary storytelling, and precision thermal packaging.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
            The Haute Standard
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-text-main">
            Why Discerning Guests Return
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-3">
            Every element—from table lighting to knife weight—is carefully calibrated to evoke wonder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl bg-surface border border-border hover:border-primary/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-card"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-elevated border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/40 transition-all">
                {f.icon}
              </div>
              <h3 className="font-heading font-bold text-base sm:text-lg text-text-main mb-2">
                {f.title}
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
