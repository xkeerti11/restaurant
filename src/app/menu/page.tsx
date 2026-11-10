"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { mockCategories, mockMenuItems } from "@/lib/mockData";
import { MenuItem, DietaryType } from "@/types";
import { formatPrice } from "@/lib/utils";
import ItemCustomizerModal from "@/components/menu/ItemCustomizerModal";
import { Search, Plus, Star, Clock } from "lucide-react";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [dietaryFilter, setDietaryFilter] = useState<DietaryType | "all">("all");
  const [sortBy, setSortBy] = useState<"recommended" | "price_asc" | "price_desc">("recommended");
  const [activeItem, setActiveItem] = useState<MenuItem | null>(null);

  // Filter & Sort Logic
  const filteredItems = useMemo(() => {
    return mockMenuItems
      .filter((item) => {
        if (selectedCategory !== "all" && item.category_id !== selectedCategory) {
          return false;
        }
        if (dietaryFilter !== "all" && item.dietary_type !== dietaryFilter) {
          return false;
        }
        if (searchQuery.trim() !== "") {
          const q = searchQuery.toLowerCase();
          const matchName = item.name.toLowerCase().includes(q);
          const matchDesc = item.description.toLowerCase().includes(q);
          const matchIng = item.ingredients?.some((ing) => ing.toLowerCase().includes(q));
          if (!matchName && !matchDesc && !matchIng) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price_asc") return a.base_price - b.base_price;
        if (sortBy === "price_desc") return b.base_price - a.base_price;
        return (b.is_bestseller ? 1 : 0) - (a.is_bestseller ? 1 : 0);
      });
  }, [selectedCategory, dietaryFilter, searchQuery, sortBy]);

  const dietaryOptions: { label: string; value: DietaryType | "all" }[] = [
    { label: "All Diets", value: "all" },
    { label: "Vegetarian", value: "veg" },
    { label: "Non-Veg", value: "non-veg" },
    { label: "Vegan", value: "vegan" },
  ];

  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
          Haute Carte
        </span>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading text-text-main tracking-tight mb-4">
          Gastronomy <span className="text-primary">Menu</span>
        </h1>
        <p className="text-xs sm:text-base text-text-secondary max-w-xl mx-auto">
          Explore seasonal courses, wood-fired cuts, and pastry artistry. Customize cuts and enhancements to your palate.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Controls Bar (Search + Sort + Dietary) */}
        <div className="glass-card rounded-2xl p-4 border border-border mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              type="text"
              placeholder="Search dishes or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {dietaryOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setDietaryFilter(opt.value)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold active:scale-95 transition-all focus-ring ${
                  dietaryFilter === opt.value
                    ? "bg-primary text-white shadow-glow"
                    : "bg-surface text-text-secondary border border-border hover:text-text-main"
                }`}
              >
                {opt.label}
              </button>
            ))}

            {/* Sort Select */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-1.5 rounded-xl bg-surface border border-border text-xs font-semibold text-text-main focus-ring"
              aria-label="Sort dishes"
            >
              <option value="recommended">Recommended</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Category Horizontal Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap active:scale-95 transition-all focus-ring ${
              selectedCategory === "all"
                ? "bg-primary text-white shadow-glow"
                : "bg-surface text-text-secondary border border-border hover:text-text-main"
            }`}
          >
            All Courses ({mockMenuItems.length})
          </button>
          {mockCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap active:scale-95 transition-all focus-ring ${
                selectedCategory === cat.id
                  ? "bg-primary text-white shadow-glow"
                  : "bg-surface text-text-secondary border border-border hover:text-text-main"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 text-text-secondary">
            <p className="text-base font-semibold text-text-main mb-2">No matching dishes found</p>
            <p className="text-xs">Try adjusting your search criteria or dietary filter.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setDietaryFilter("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl bg-surface-elevated border border-border text-xs text-primary focus-ring"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="glass-card rounded-2xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-card"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden bg-surface">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />

                  <div className="absolute top-4 left-4 flex gap-1.5">
                    {item.is_bestseller && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white uppercase tracking-wider">
                        Bestseller
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-surface/90 backdrop-blur-md text-text-main border border-border uppercase">
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

                {/* Content */}
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
                      className="font-heading font-bold text-lg text-text-main hover:text-primary cursor-pointer transition-colors mb-2 block focus-ring rounded"
                    >
                      {item.name}
                    </Link>

                    <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Pricing & Add */}
                  <div className="pt-4 border-t border-border flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-text-secondary block uppercase font-medium">
                        Base Price
                      </span>
                      <span className="font-heading font-bold text-lg text-text-main">
                        {formatPrice(item.base_price)}
                      </span>
                    </div>

                    <button
                      onClick={() => setActiveItem(item)}
                      className="px-4 py-2.5 rounded-xl bg-surface-elevated hover:bg-primary text-text-main hover:text-white border border-border hover:border-primary text-xs font-semibold active:scale-95 transition-all flex items-center gap-1.5 focus-ring"
                      aria-label={`Customize and order ${item.name}`}
                    >
                      <Plus className="w-4 h-4" aria-hidden="true" />
                      <span>Add / Customize</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Item Customizer Modal */}
      <ItemCustomizerModal item={activeItem} onClose={() => setActiveItem(null)} />
    </div>
  );
}
