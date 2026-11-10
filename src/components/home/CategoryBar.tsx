"use client";

import React from "react";
import Link from "next/link";
import { mockCategories } from "@/lib/mockData";
import { ArrowRight, Utensils, Flame, Fish, Wheat, Cake, Wine } from "lucide-react";

export default function CategoryBar() {
  const getCategoryIcon = (slug: string) => {
    switch (slug) {
      case "starters":
        return <Utensils className="w-5 h-5 text-primary" aria-hidden="true" />;
      case "mains":
        return <Flame className="w-5 h-5 text-primary" aria-hidden="true" />;
      case "coastal":
        return <Fish className="w-5 h-5 text-primary" aria-hidden="true" />;
      case "pasta":
        return <Wheat className="w-5 h-5 text-primary" aria-hidden="true" />;
      case "desserts":
        return <Cake className="w-5 h-5 text-primary" aria-hidden="true" />;
      case "beverages":
        return <Wine className="w-5 h-5 text-primary" aria-hidden="true" />;
      default:
        return <Utensils className="w-5 h-5 text-primary" aria-hidden="true" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
              Curated Courses
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-heading text-text-main">
              Culinary Categories
            </h2>
          </div>
          <Link
            href="/menu"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary-accent hover:text-primary transition-colors group focus-ring rounded"
          >
            <span>View Full Tasting Menu</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {mockCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/menu?category=${cat.slug}`}
              className="p-4 sm:p-5 rounded-2xl bg-surface border border-border hover:border-primary/50 group transition-all duration-300 flex flex-col justify-between min-h-[150px] hover:-translate-y-1 hover:shadow-card focus-ring"
            >
              <div className="w-10 h-10 rounded-xl bg-surface-elevated flex items-center justify-center group-hover:scale-110 transition-transform mb-4">
                {getCategoryIcon(cat.slug)}
              </div>
              <div>
                <h3 className="font-heading font-semibold text-xs sm:text-sm text-text-main group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="text-[11px] text-text-secondary mt-1 line-clamp-2">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
