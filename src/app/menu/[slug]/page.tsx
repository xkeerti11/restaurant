"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { mockMenuItems } from "@/lib/mockData";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cartStore";
import {
  ArrowLeft,
  Star,
  Clock,
  Flame,
  ShieldCheck,
  Check,
  Plus,
  Minus,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

export default function FoodDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const addItem = useCartStore((state) => state.addItem);

  const item = mockMenuItems.find((m) => m.slug === slug) || mockMenuItems[0];

  const [selectedVariant, setSelectedVariant] = useState(
    item.variants ? item.variants[0] : undefined
  );
  const [selectedModifiers, setSelectedModifiers] = useState<any[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [addedToast, setAddedToast] = useState(false);

  // Price calculations
  const variantAdj = selectedVariant ? selectedVariant.price_adjustment : 0;
  const modifiersAdj = selectedModifiers.reduce((acc, m) => acc + m.modifier.price_adjustment, 0);
  const unitPrice = item.base_price + variantAdj + modifiersAdj;
  const totalPrice = unitPrice * quantity;

  const handleAddToCart = () => {
    addItem(item, quantity, selectedVariant, selectedModifiers, specialInstructions);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <div className="min-h-screen bg-background pt-8 sm:pt-12 lg:pt-14 pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back Link */}
        <div className="mb-6">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-xs font-semibold text-text-secondary hover:text-primary transition-colors focus-ring rounded py-1"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Return to Menu</span>
          </Link>
        </div>

        {/* Main Product Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Image & Accolades */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative h-80 sm:h-[460px] rounded-2xl overflow-hidden border border-border bg-surface">
              <img
                src={item.image_url}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-primary text-white uppercase tracking-wider shadow-glow">
                  {item.category_name}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-surface/90 backdrop-blur-md text-text-main border border-border uppercase">
                  {item.dietary_type}
                </span>
              </div>
            </div>

            {/* Ingredients & Allergens Box */}
            <div className="p-6 rounded-2xl bg-surface border border-border space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-main font-heading">
                Culinary Provenance & Sourcing
              </h3>
              <div>
                <span className="text-xs text-text-secondary block mb-2 font-medium">
                  Primary Foraged & Artisanal Ingredients:
                </span>
                <div className="flex flex-wrap gap-2">
                  {item.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-surface-elevated text-text-main border border-border text-xs"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {item.allergens.length > 0 && (
                <div className="pt-3 border-t border-border">
                  <span className="text-xs text-text-secondary block mb-1">
                    Allergen Advisory:
                  </span>
                  <p className="text-xs text-primary-accent font-medium">
                    Contains: {item.allergens.join(", ")}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Customization & Purchase */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-xs text-primary-accent">
                    <Star className="w-4 h-4 fill-primary-accent" aria-hidden="true" />
                    <span className="font-bold">{item.rating || 4.9}</span>
                    <span className="text-text-secondary">({item.reviews_count || 120} reviews)</span>
                  </div>
                  <span className="text-xs text-text-secondary flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" aria-hidden="true" /> {item.preparation_minutes} mins prep
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-bold font-heading text-text-main mb-3">
                  {item.name}
                </h1>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Portion / Variant selector */}
              {item.variants && item.variants.length > 0 && (
                <div className="pt-4 border-t border-border">
                  <label className="text-xs font-bold uppercase tracking-wider text-text-main block mb-2.5 font-heading">
                    Select Portion & Cut Size
                  </label>
                  <div className="space-y-2">
                    {item.variants.map((v) => {
                      const isSelected = selectedVariant?.id === v.id;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setSelectedVariant(v)}
                          className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition-all focus-ring ${
                            isSelected
                              ? "bg-primary/10 border-primary text-text-main"
                              : "bg-surface border-border text-text-secondary hover:border-primary/40"
                          }`}
                        >
                          <span className="text-xs font-semibold">{v.name}</span>
                          <span className="text-xs text-primary-accent font-bold">
                            {v.price_adjustment === 0
                              ? "Standard Base Cut"
                              : `+${formatPrice(v.price_adjustment)}`}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Special Instructions */}
              <div className="pt-4 border-t border-border">
                <label htmlFor="dish-detail-notes" className="text-xs font-bold uppercase tracking-wider text-text-main block mb-2 font-heading">
                  Chef Preparation Notes
                </label>
                <textarea
                  id="dish-detail-notes"
                  rows={2}
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="e.g. Rare meat temperature, gluten alert..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring resize-none"
                />
              </div>

              {/* Quantity & CTA */}
              <div className="pt-4 border-t border-border space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 bg-surface border border-border rounded-xl px-3 py-2">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-text-secondary hover:text-text-main focus-ring rounded"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <span className="text-sm font-bold text-text-main w-6 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-text-secondary hover:text-text-main focus-ring rounded"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] text-text-secondary uppercase block font-medium">
                      Total Calculated
                    </span>
                    <span className="text-2xl font-bold font-heading text-primary">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus-ring"
                >
                  <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                  <span>Add to Order Bag</span>
                </button>

                {addedToast && (
                  <div
                    role="status"
                    className="p-3 rounded-xl bg-status-success/15 border border-status-success/30 text-status-success text-xs font-semibold text-center animate-fadeIn"
                  >
                    Added to order bag!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

