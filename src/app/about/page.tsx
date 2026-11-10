import React from "react";
import { defaultRestaurantConfig } from "@/lib/mockData";
import ChefsSection from "@/components/home/ChefsSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export const metadata = {
  title: "About Us & Culinary Heritage | Aura Luxe",
  description: "Learn about the culinary philosophy, Michelin heritage, and master chefs behind Aura Luxe.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
          Culinary Philosophy
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading text-text-main tracking-tight mb-6">
          The Art of <span className="text-primary">{defaultRestaurantConfig.name}</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
          Founded on the conviction that a dining experience should evoke emotion, curiosity, and aesthetic awe.
        </p>
      </div>

      {/* Narrative Section with Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="relative h-80 sm:h-96 lg:h-[480px] rounded-2xl overflow-hidden border border-border bg-surface">
            <img
              src="/images/gallery/kitchen-live-flame.jpg"
              alt="Live Wood-Fired Hearth Kitchen"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold font-heading text-text-main">
              Where Elemental Fire Meets Delicate Precision
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              At {defaultRestaurantConfig.name}, our culinary kitchen revolves around our custom stone hearth and binchotan white charcoal grill. We honor old-world culinary traditions while re-imagining them through modern techniques like cold smoking, natural fermentations, and multi-layered textural plating.
            </p>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              We collaborate with micro-farms in the Hudson Valley, deep-sea divers in Hokkaido, and master wagyu ranchers in Miyazaki to ensure that every morsel that graces your palate is of uncompromised provenance.
            </p>
            <div className="pt-4 border-t border-border grid grid-cols-3 gap-4 text-center">
              <div>
                <span className="text-2xl font-bold font-heading text-primary block">100%</span>
                <span className="text-[11px] text-text-secondary">Seasonal Provenance</span>
              </div>
              <div>
                <span className="text-2xl font-bold font-heading text-primary block">3-Star</span>
                <span className="text-[11px] text-text-secondary">Culinary Discipline</span>
              </div>
              <div>
                <span className="text-2xl font-bold font-heading text-primary block">400+</span>
                <span className="text-[11px] text-text-secondary">Reserve Wine Labels</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <ChefsSection />
    </div>
  );
}
