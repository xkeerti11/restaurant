"use client";

import React, { useState, useEffect } from "react";
import { MenuItem, FoodVariant, FoodModifier } from "@/types";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import { X, Plus, Minus, Check, Clock } from "lucide-react";

interface ItemCustomizerModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ItemCustomizerModal({ item, onClose }: ItemCustomizerModalProps) {
  const addItem = useCartStore((state) => state.addItem);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Initial state setup based on item
  const [selectedVariant, setSelectedVariant] = useState<FoodVariant | undefined>(
    item?.variants ? item.variants[0] : undefined
  );

  const [selectedModifiers, setSelectedModifiers] = useState<
    { group_id: string; modifier: FoodModifier }[]
  >(() => {
    if (!item?.modifier_groups) return [];
    const initial: { group_id: string; modifier: FoodModifier }[] = [];
    item.modifier_groups.forEach((group) => {
      if (group.is_required && group.selection_type === "single" && group.modifiers.length > 0) {
        initial.push({ group_id: group.id, modifier: group.modifiers[0] });
      }
    });
    return initial;
  });

  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState("");

  if (!item) return null;

  // Calculate live dynamic price
  const variantAdj = selectedVariant ? selectedVariant.price_adjustment : 0;
  const modifiersAdj = selectedModifiers.reduce((acc, m) => acc + m.modifier.price_adjustment, 0);
  const unitPrice = item.base_price + variantAdj + modifiersAdj;
  const totalPrice = unitPrice * quantity;

  const handleToggleModifier = (group_id: string, modifier: FoodModifier, type: "single" | "multiple") => {
    if (type === "single") {
      const filtered = selectedModifiers.filter((m) => m.group_id !== group_id);
      setSelectedModifiers([...filtered, { group_id, modifier }]);
    } else {
      const exists = selectedModifiers.some(
        (m) => m.group_id === group_id && m.modifier.id === modifier.id
      );
      if (exists) {
        setSelectedModifiers(
          selectedModifiers.filter(
            (m) => !(m.group_id === group_id && m.modifier.id === modifier.id)
          )
        );
      } else {
        setSelectedModifiers([...selectedModifiers, { group_id, modifier }]);
      }
    }
  };

  const handleAddToCart = () => {
    addItem(item, quantity, selectedVariant, selectedModifiers, specialInstructions);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-dish-title"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <div
        className="relative max-w-xl w-full bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl my-8 flex flex-col max-h-[90vh] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-surface-elevated/80 text-text-secondary hover:text-text-main hover:bg-primary transition-all focus-ring"
          aria-label="Close dish customization dialog"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Modal Header & Hero Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden flex-shrink-0 bg-black">
          <img
            src={item.image_url}
            alt={item.name}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary/20 text-primary border border-primary/30 uppercase tracking-wider">
                {item.dietary_type}
              </span>
              <span className="flex items-center gap-1 text-[11px] text-text-secondary">
                <Clock className="w-3.5 h-3.5" aria-hidden="true" /> {item.preparation_minutes} mins prep
              </span>
            </div>
            <h2 id="modal-dish-title" className="text-2xl font-bold font-heading text-text-main">
              {item.name}
            </h2>
          </div>
        </div>

        {/* Scrollable Configuration Options */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            {item.description}
          </p>

          {/* Variants Selector */}
          {item.variants && item.variants.length > 0 && (
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-text-main mb-2 font-heading">
                Select Cut & Portion Size
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {item.variants.map((v) => {
                  const isSelected = selectedVariant?.id === v.id;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariant(v)}
                      className={`p-3 rounded-xl border text-left transition-all focus-ring ${
                        isSelected
                          ? "bg-primary/10 border-primary text-text-main"
                          : "bg-surface-elevated border-border text-text-secondary hover:border-primary/40"
                      }`}
                    >
                      <span className="text-xs font-semibold block">{v.name}</span>
                      <span className="text-[11px] text-primary-accent font-medium">
                        {v.price_adjustment === 0
                          ? "Standard"
                          : `+${formatPrice(v.price_adjustment)}`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Modifier Groups */}
          {item.modifier_groups &&
            item.modifier_groups.map((group) => (
              <div key={group.id} className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-text-main font-heading">
                    {group.name}
                  </h3>
                  <span className="text-[10px] text-text-secondary">
                    {group.is_required ? "(Required)" : "(Optional)"}
                  </span>
                </div>

                <div className="space-y-2">
                  {group.modifiers.map((mod) => {
                    const isSelected = selectedModifiers.some(
                      (m) => m.group_id === group.id && m.modifier.id === mod.id
                    );
                    return (
                      <button
                        key={mod.id}
                        type="button"
                        onClick={() =>
                          handleToggleModifier(group.id, mod, group.selection_type)
                        }
                        className={`w-full p-3 rounded-xl border flex items-center justify-between transition-all focus-ring ${
                          isSelected
                            ? "bg-primary/10 border-primary text-text-main"
                            : "bg-surface-elevated border-border text-text-secondary hover:border-primary/40"
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected
                                ? "border-primary bg-primary"
                                : "border-text-secondary"
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 text-white" aria-hidden="true" />}
                          </div>
                          <span className="text-xs font-medium">{mod.name}</span>
                        </div>
                        <span className="text-xs font-semibold text-primary-accent">
                          {mod.price_adjustment > 0
                            ? `+${formatPrice(mod.price_adjustment)}`
                            : "Included"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

          {/* Special Requests Notes */}
          <div className="pt-4 border-t border-border">
            <label htmlFor="modal-kitchen-notes" className="text-xs font-bold uppercase tracking-wider text-text-main mb-2 block font-heading">
              Special Kitchen Notes
            </label>
            <textarea
              id="modal-kitchen-notes"
              rows={2}
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g. Extra sauce on side, allergy preferences..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-elevated border border-border text-xs text-text-main placeholder-text-secondary focus-ring resize-none"
            />
          </div>
        </div>

        {/* Modal Footer (Quantity & Add to Bag) */}
        <div className="p-4 sm:p-6 bg-surface-elevated border-t border-border flex items-center justify-between gap-4">
          {/* Quantity Controls */}
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

          {/* Add to Cart CTA */}
          <button
            onClick={handleAddToCart}
            className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg active:scale-[0.98] transition-all flex items-center justify-between focus-ring"
          >
            <span>Add to Bag</span>
            <span className="font-heading font-bold">{formatPrice(totalPrice)}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
