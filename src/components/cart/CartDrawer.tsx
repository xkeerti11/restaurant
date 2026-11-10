"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Tag, Check, AlertCircle } from "lucide-react";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    updateQuantity,
    removeItem,
    clearCart,
    couponCode,
    applyCoupon,
    removeCoupon,
    getSubtotal,
    getDiscount,
    getTax,
    getDeliveryFee,
    getGrandTotal,
  } = useCartStore();

  const [inputCoupon, setInputCoupon] = useState("");
  const [couponFeedback, setCouponFeedback] = useState<{ success?: boolean; message?: string } | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCoupon.trim()) return;
    const res = applyCoupon(inputCoupon);
    setCouponFeedback(res);
    if (res.success) setInputCoupon("");
  };

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const tax = getTax();
  const delivery = getDeliveryFee();
  const total = getGrandTotal();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Your Order Bag"
      className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm animate-fadeIn"
    >
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} aria-hidden="true" />

      {/* Cart Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-md bg-background border-l border-border flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-border flex items-center justify-between bg-surface">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-primary" aria-hidden="true" />
              <h2 className="font-heading font-bold text-lg text-text-main">
                Your Order Bag
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-surface-elevated border border-border text-xs font-semibold text-primary-accent">
                {items.reduce((acc, i) => acc + i.quantity, 0)} items
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-xl bg-surface-elevated hover:bg-surface border border-border text-text-secondary hover:text-text-main transition-colors focus-ring"
              aria-label="Close order bag"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 text-text-secondary">
                <div className="w-16 h-16 rounded-2xl bg-surface-elevated flex items-center justify-center mb-4">
                  <ShoppingBag className="w-8 h-8 text-primary/50" aria-hidden="true" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-text-main mb-1">
                  Your bag is currently empty
                </h3>
                <p className="text-xs max-w-xs mb-6 text-text-secondary">
                  Explore our seasonal menu to add haute cuisine entrees, signature cuts, and chef desserts.
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold shadow-glow hover:bg-primary-accent active:scale-95 transition-all focus-ring"
                >
                  Explore Menu
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-surface border border-border flex flex-col gap-3 group hover:border-primary/40 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-semibold text-text-main font-heading">
                        {item.menu_item.name}
                      </h4>
                      {item.selected_variant && (
                        <p className="text-xs text-primary-accent mt-0.5 font-medium">
                          Cut/Size: {item.selected_variant.name}
                        </p>
                      )}
                      {item.selected_modifiers && item.selected_modifiers.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {item.selected_modifiers.map((m, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded bg-surface-elevated text-text-secondary border border-border"
                            >
                              +{m.modifier.name}
                            </span>
                          ))}
                        </div>
                      )}
                      {item.special_instructions && (
                        <p className="text-[11px] text-text-secondary italic mt-1">
                          &ldquo;{item.special_instructions}&rdquo;
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-text-secondary hover:text-status-error p-1 transition-colors focus-ring rounded"
                      aria-label={`Remove ${item.menu_item.name} from bag`}
                    >
                      <Trash2 className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <div className="flex items-center gap-2 bg-surface-elevated border border-border rounded-lg px-2 py-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-text-secondary hover:text-text-main p-0.5 focus-ring rounded"
                        aria-label={`Decrease quantity of ${item.menu_item.name}`}
                      >
                        <Minus className="w-3 h-3" aria-hidden="true" />
                      </button>
                      <span className="text-xs font-bold text-text-main w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-text-secondary hover:text-text-main p-0.5 focus-ring rounded"
                        aria-label={`Increase quantity of ${item.menu_item.name}`}
                      >
                        <Plus className="w-3 h-3" aria-hidden="true" />
                      </button>
                    </div>

                    <span className="font-heading font-bold text-sm text-primary">
                      {formatPrice(item.item_total)}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Calculations & Checkout */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-border bg-surface space-y-4">
              {/* Coupon Code Section */}
              <div>
                {couponCode ? (
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-primary/10 border border-primary/30 text-xs">
                    <span className="flex items-center gap-1.5 text-primary font-semibold">
                      <Tag className="w-3.5 h-3.5" aria-hidden="true" /> Code: {couponCode}
                    </span>
                    <button
                      onClick={removeCoupon}
                      className="text-xs text-text-secondary hover:text-status-error focus-ring rounded px-1"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <label htmlFor="cart-coupon-input" className="sr-only">
                      Coupon code
                    </label>
                    <input
                      id="cart-coupon-input"
                      type="text"
                      placeholder="Promo code (e.g. LUXE20)"
                      value={inputCoupon}
                      onChange={(e) => setInputCoupon(e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl bg-surface-elevated border border-border text-xs text-text-main uppercase placeholder-text-secondary focus-ring"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-surface-elevated border border-border hover:border-primary text-xs font-semibold text-text-main hover:text-primary active:scale-95 transition-all focus-ring"
                    >
                      Apply
                    </button>
                  </form>
                )}

                {couponFeedback && (
                  <p
                    role="alert"
                    className={`text-[11px] mt-1.5 flex items-center gap-1 ${
                      couponFeedback.success ? "text-status-success" : "text-status-error"
                    }`}
                  >
                    {couponFeedback.success ? (
                      <Check className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                    ) : (
                      <AlertCircle className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                    )}
                    <span>{couponFeedback.message}</span>
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-text-secondary pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-text-main font-medium">{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-status-success">
                    <span>Privilege Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Tax (8.875%)</span>
                  <span className="text-text-main font-medium">{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between">
                  <span>White Glove Delivery</span>
                  <span className="text-text-main font-medium">
                    {delivery === 0 ? "Complimentary" : formatPrice(delivery)}
                  </span>
                </div>
                <div className="pt-2 border-t border-border flex justify-between text-base font-bold text-text-main font-heading">
                  <span>Total Amount</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <Link
                href="/checkout"
                onClick={() => setIsOpen(false)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 group focus-ring"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
