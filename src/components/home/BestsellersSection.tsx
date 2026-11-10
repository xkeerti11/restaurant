"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MenuItem } from "@/types";
import { mockMenuItems } from "@/lib/mockData";
import { formatPrice } from "@/lib/utils";
import ItemCustomizerModal from "@/components/menu/ItemCustomizerModal";
import { Plus, Star, Clock, Sparkles } from "lucide-react";

export default function BestsellersSection() {
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

  const bestsellers = mockMenuItems.filter((item) => item.is_bestseller || item.is_featured);

  return (
    <section id="specials" className="py-14 sm:py-20 lg:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            Signature Creations
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-text-main">
            Chef&apos;s Bestselling Dishes
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-3">
            Acclaimed culinary centerpieces designed with rare reserve ingredients, charcoal smoke, and avant-garde technique.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {bestsellers.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-card"
            >
              {/* Image Preview with Badges */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-surface">
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />

                {/* Dietary & Bestseller Badges */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white uppercase tracking-wider shadow-glow">
                    Signature
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-surface/90 backdrop-blur-md text-text-main border border-border uppercase">
                    {item.dietary_type}
                  </span>
                </div>

                {item.rating && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-md border border-border text-xs font-semibold text-primary-accent">
                    <Star className="w-3.5 h-3.5 fill-primary-accent" aria-hidden="true" />
                    <span>{item.rating}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-text-secondary mb-1.5">
                    <span className="text-primary font-semibold">{item.category_name}</span>
                    <span aria-hidden="true">•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" aria-hidden="true" /> {item.preparation_minutes} mins
                    </span>
                  </div>

                  <Link
                    href={`/menu/${item.slug}`}
                    className="font-heading font-bold text-lg text-text-main hover:text-primary transition-colors mb-2 block focus-ring rounded"
                  >
                    {item.name}
                  </Link>

                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Footer (Price & Quick Customize Button) */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-text-secondary block uppercase font-medium">
                      Base Cut
                    </span>
                    <span className="font-heading font-bold text-lg text-text-main">
                      {formatPrice(item.base_price)}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveItem(item)}
                    className="px-4 py-2.5 rounded-xl bg-surface-elevated hover:bg-primary text-text-main hover:text-white border border-border hover:border-primary text-xs font-semibold active:scale-95 transition-all flex items-center gap-1.5 focus-ring"
                    aria-label={`Customize and add ${item.name} to bag`}
                  >
                    <Plus className="w-4 h-4" aria-hidden="true" />
                    <span>Customize & Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ItemCustomizerModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
