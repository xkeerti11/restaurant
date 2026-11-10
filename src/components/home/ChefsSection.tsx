"use client";

import React from "react";
import { mockChefs } from "@/lib/mockData";
import { Award } from "lucide-react";

export default function ChefsSection() {
  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              Masters of the Craft
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-text-main">
              Meet Our Executive Chefs
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary max-w-md">
            Pioneering a harmonious marriage between classical French discipline and adventurous global flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {mockChefs.map((chef) => (
            <div
              key={chef.id}
              className="glass-card rounded-2xl overflow-hidden border border-border flex flex-col sm:flex-row group hover:border-primary/40 transition-all duration-300"
            >
              <div className="sm:w-2/5 h-60 sm:h-auto overflow-hidden relative bg-surface">
                <img
                  src={chef.image_url}
                  alt={chef.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface sm:from-transparent sm:bg-gradient-to-r sm:to-surface opacity-60" />
              </div>

              <div className="p-6 sm:p-7 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-primary font-semibold mb-1">
                    <Award className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>{chef.position}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-text-main mb-2">
                    {chef.name}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6">
                    {chef.biography}
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <span className="text-[10px] uppercase font-bold text-primary-accent block mb-1">
                    Signature Specialties:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {chef.specialty_dishes.map((dish, i) => (
                      <span
                        key={i}
                        className="text-xs px-2.5 py-0.5 rounded-md bg-surface-elevated text-text-main border border-border"
                      >
                        {dish}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
