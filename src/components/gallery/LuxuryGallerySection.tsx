"use client";

import React, { useState, useEffect, useMemo } from "react";
import { GalleryItem, GalleryCategory } from "@/types";
import { mockGalleryItems } from "@/lib/mockData";
import { X, Sparkles, ZoomIn, Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

interface LuxuryGallerySectionProps {
  items?: GalleryItem[];
  initialCategory?: GalleryCategory;
  showTitle?: boolean;
}

export default function LuxuryGallerySection({
  items = mockGalleryItems,
  initialCategory = "all",
  showTitle = true,
}: LuxuryGallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>(initialCategory);
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedItem) {
        setSelectedItem(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem]);

  const categories: { label: string; value: GalleryCategory }[] = [
    { label: "All Works", value: "all" },
    { label: "Gourmet Plating", value: "food" },
    { label: "Interior Ambiance", value: "interior" },
    { label: "Live Fire Kitchen", value: "kitchen" },
    { label: "Master Chefs", value: "chefs" },
    { label: "Cocktail Lounge", value: "events" },
  ];

  const filteredItems = useMemo(() => {
    if (activeCategory === "all") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  return (
    <section id="gallery" aria-label="Visual Gallery" className="relative w-full py-14 sm:py-20 lg:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {showTitle && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border text-xs uppercase tracking-widest text-primary-accent font-semibold mb-3">
                <Sparkles className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                <span>Atmospheric Showcase</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-text-main">
                Curated <span className="text-primary">Visuals</span>
              </h2>
              <p className="text-xs sm:text-sm text-text-secondary mt-2 max-w-xl">
                A visual journey through Michelin-grade culinary plating, live hearth craft, and candlelit ambiance.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div
              role="tablist"
              aria-label="Gallery Categories"
              className="flex flex-wrap items-center gap-2 bg-surface p-1.5 rounded-2xl border border-border"
            >
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  role="tab"
                  aria-selected={activeCategory === cat.value}
                  onClick={() => setActiveCategory(cat.value)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all active:scale-95 focus-ring ${
                    activeCategory === cat.value
                      ? "bg-primary text-white shadow-glow"
                      : "text-text-secondary hover:text-text-main hover:bg-surface-elevated"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              tabIndex={0}
              role="button"
              onKeyDown={(e) => e.key === "Enter" && setSelectedItem(item)}
              className="glass-card rounded-2xl overflow-hidden cursor-pointer group hover:border-primary/50 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-card focus-ring"
            >
              {/* Image Container */}
              <div className="relative h-64 sm:h-72 overflow-hidden bg-surface">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-surface/90 backdrop-blur-md text-primary border border-border">
                    {item.category}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="px-4 py-2 rounded-xl bg-surface/90 border border-primary/40 text-text-main text-xs font-semibold flex items-center gap-1.5 shadow-glow">
                    <ZoomIn className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                    <span>View Detail</span>
                  </span>
                </div>
              </div>

              {/* Caption Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-text-main group-hover:text-primary transition-colors mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {item.tags && (
                  <div className="flex flex-wrap gap-1.5 pt-4 mt-3 border-t border-border">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-surface-elevated text-text-secondary border border-border"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedItem.title}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-surface-elevated/80 text-text-secondary hover:text-white hover:bg-primary transition-all focus-ring"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            {/* Image Preview */}
            <div className="md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] sm:min-h-[380px] md:min-h-[500px]">
              <img
                src={selectedItem.image_url}
                alt={selectedItem.title}
                className="max-h-[500px] w-full object-cover"
              />
            </div>

            {/* Info Panel */}
            <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 uppercase">
                    {selectedItem.category}
                  </span>
                  <span className="text-xs text-text-secondary">Aura Luxe Gastronomy</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-text-main mb-3">
                  {selectedItem.title}
                </h3>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {selectedItem.description}
                </p>

                {selectedItem.tags && (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-surface-elevated text-text-secondary border border-border"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center gap-3">
                <Link
                  href="/reservation"
                  onClick={() => setSelectedItem(null)}
                  className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold bg-primary hover:bg-primary-accent text-white active:scale-95 transition-all text-center flex items-center justify-center gap-1.5 focus-ring"
                >
                  <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Reserve Table</span>
                </Link>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold bg-surface-elevated hover:bg-surface text-text-main border border-border transition-colors focus-ring"
                >
                  Close View
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

