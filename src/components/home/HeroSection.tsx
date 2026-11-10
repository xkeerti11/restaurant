"use client";

import React from "react";
import Link from "next/link";
import { defaultRestaurantConfig } from "@/lib/mockData";
import { ArrowRight, Calendar, Sparkles, Star, Award, ShieldCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[84vh] sm:min-h-[88vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background AI-Generated Luxury Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/images/gallery/interior-dining-hall.jpg"
          alt="Luxury Restaurant Dining Ambiance"
          className="w-full h-full object-cover object-center scale-105 opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/50" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 md:py-20 lg:py-24 flex flex-col items-center">
        {/* Top Accolade Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-elevated/80 backdrop-blur-md border border-border text-xs font-semibold text-primary-accent mb-6 shadow-glow">
          <Sparkles className="w-4 h-4 text-primary" aria-hidden="true" />
          <span>Haute Gastronomy & Avant-Garde Dining</span>
        </div>

        {/* Dynamic Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading text-text-main tracking-tight leading-[1.15] mb-6 max-w-4xl">
          Where Culinary Art Meets{" "}
          <span className="bg-gradient-to-r from-primary via-primary-accent to-primary bg-clip-text text-transparent">
            Timeless Luxury
          </span>
        </h1>

        {/* Dynamic Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-text-secondary max-w-2xl font-body leading-relaxed mb-10">
          {defaultRestaurantConfig.description} Savor charcoal-seared prime cuts, tableside truffles, and artisanal smoke libations in an unforgettable atmospheric setting.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-14">
          <Link
            href="/menu"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group focus-ring"
          >
            <span>Explore Menu & Order</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>

          <Link
            href="/reservation"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-surface/90 backdrop-blur-md border border-border text-text-main hover:text-primary hover:border-primary active:scale-[0.98] font-semibold text-sm transition-all flex items-center justify-center gap-2 focus-ring"
          >
            <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
            <span>Book a Table</span>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-border w-full max-w-3xl">
          <div className="flex flex-col items-center p-2">
            <div className="flex items-center gap-1 text-primary mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary" aria-hidden="true" />
              ))}
            </div>
            <span className="text-xs text-text-secondary font-medium">4.9 Star Gastronomy</span>
          </div>

          <div className="flex flex-col items-center p-2">
            <div className="flex items-center gap-1 text-primary-accent mb-1">
              <Award className="w-4 h-4" aria-hidden="true" />
              <span className="font-heading font-bold text-xs text-text-main">Michelin Guide</span>
            </div>
            <span className="text-xs text-text-secondary font-medium">2026 Recommended</span>
          </div>

          <div className="flex flex-col items-center p-2">
            <span className="font-heading font-bold text-sm text-text-main mb-0.5">A5 Certified</span>
            <span className="text-xs text-text-secondary font-medium">100% Genuine Wagyu</span>
          </div>

          <div className="flex flex-col items-center p-2">
            <div className="flex items-center gap-1 text-status-success mb-1">
              <ShieldCheck className="w-4 h-4" aria-hidden="true" />
              <span className="font-heading font-bold text-xs text-text-main">Zero Hardcode</span>
            </div>
            <span className="text-xs text-text-secondary font-medium">White-Label CMS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
