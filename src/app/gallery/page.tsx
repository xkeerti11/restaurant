import React from "react";
import LuxuryGallerySection from "@/components/gallery/LuxuryGallerySection";
import Link from "next/link";
import { Sparkles, ArrowRight, Calendar } from "lucide-react";

export const metadata = {
  title: "Curated Culinary Gallery | Aura Luxe",
  description: "Experience our gastronomic plating, moody architecture, and culinary craft in high-fidelity luxury photography.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-2 sm:pt-4 pb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-border text-xs uppercase tracking-widest text-primary-accent font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
          <span>Atmospheric Gastronomic Showcase</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-text-main tracking-tight mb-4">
          Atmosphere & <span className="text-primary">Artistry</span>
        </h1>
        <p className="text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
          Every dish, hearth flame, and candlelit alcove captured in high-fidelity gastronomy photography. Filter by category or click any image to view details.
        </p>
      </div>

      {/* Luxury Gallery Grid with Category Filters & Modal Lightbox */}
      <div className="my-2">
        <LuxuryGallerySection showTitle={false} />
      </div>

      {/* Bottom CTA Card */}
      <div className="max-w-4xl mx-auto px-4 mt-8">
        <div className="glass-card rounded-3xl p-8 sm:p-10 border border-border text-center flex flex-col items-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-text-main mb-2">
            Immerse Yourself in Person
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary max-w-md mb-8">
            Reservations are highly recommended for evening seatings and private dining experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/reservation"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white text-xs font-semibold shadow-glow hover:shadow-glow-lg transition-all flex items-center gap-2 focus-ring"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Evening Table</span>
            </Link>
            <Link
              href="/menu"
              className="px-8 py-3.5 rounded-xl bg-surface border border-border text-text-main hover:text-primary text-xs font-semibold transition-all flex items-center gap-2 focus-ring"
            >
              <span>Browse Digital Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
