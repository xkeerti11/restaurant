"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import { OrderType } from "@/types";
import {
  CreditCard,
  Banknote,
  Truck,
  ShoppingBag,
  UtensilsCrossed,
  ArrowRight,
  ShieldCheck,
  User,
  Phone,
  Mail,
  AlertCircle,
} from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const {
    items,
    getSubtotal,
    getDiscount,
    getTax,
    getDeliveryFee,
    getGrandTotal,
    clearCart,
  } = useCartStore();

  const [orderType, setOrderType] = useState<OrderType>("delivery");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cash_on_delivery" | "upi">("card");

  // Form Fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("New York");
  const [postalCode, setPostalCode] = useState("10001");
  const [tableNumber, setTableNumber] = useState("Table 14");
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const tax = getTax();
  const delivery = orderType === "delivery" ? getDeliveryFee() : 0;
  const grandTotal = Math.max(0, subtotal - discount + tax + delivery);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setFormError("Please fill out all mandatory guest details.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setFormError("Please provide a valid email address for digital receipt.");
      return;
    }

    if (phone.replace(/\D/g, "").length < 7) {
      setFormError("Please enter a valid telephone number with area code.");
      return;
    }

    if (orderType === "delivery" && !street.trim()) {
      setFormError("Delivery street address is required.");
      return;
    }

    if (orderType === "dine-in" && !tableNumber.trim()) {
      setFormError("Please specify your table number or dining area.");
      return;
    }

    setIsSubmitting(true);

    const generatedOrderId = "ORD-" + Math.floor(100000 + Math.random() * 900000);

    const orderRecord = {
      id: generatedOrderId,
      order_number: generatedOrderId,
      order_type: orderType,
      order_status: "confirmed",
      payment_status: paymentMethod === "card" ? "paid" : "pending",
      payment_method: paymentMethod,
      currency_code: "USD",
      subtotal,
      discount_total: discount,
      tax_total: tax,
      delivery_fee: delivery,
      grand_total: grandTotal,
      customer_info: { name: fullName, email, phone },
      delivery_address: orderType === "delivery" ? { street, apartment, city, postal_code: postalCode } : undefined,
      table_number: orderType === "dine-in" ? tableNumber : undefined,
      items: items.map((i) => ({
        name: i.menu_item.name,
        quantity: i.quantity,
        unit_price: i.calculated_unit_price,
        item_total: i.item_total,
        selected_variant_name: i.selected_variant?.name,
        modifiers_summary: i.selected_modifiers.map((m) => m.modifier.name).join(", "),
      })),
      placed_at: new Date().toISOString(),
      estimated_delivery_time: "35-45 minutes",
    };

    if (typeof window !== "undefined") {
      localStorage.setItem(`order_${generatedOrderId}`, JSON.stringify(orderRecord));
    }

    setTimeout(() => {
      clearCart();
      router.push(`/order/${generatedOrderId}`);
    }, 1000);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-surface-elevated flex items-center justify-center mb-4">
          <ShoppingBag className="w-8 h-8 text-primary" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-bold font-heading text-text-main mb-2">
          Your order bag is empty
        </h2>
        <p className="text-xs text-text-secondary max-w-sm mb-6">
          Add delicious culinary masterpieces from our digital menu before proceeding to checkout.
        </p>
        <button
          onClick={() => router.push("/menu")}
          className="px-6 py-3 rounded-xl bg-primary text-white text-xs font-semibold shadow-glow hover:bg-primary-accent active:scale-95 transition-all focus-ring"
        >
          Explore Menu
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
            Secure Payment & Fulfillment
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-text-main">
            Checkout
          </h1>
        </div>

        <form onSubmit={handlePlaceOrder} noValidate className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Form Column */}
          <div className="lg:col-span-7 space-y-6">
            {formError && (
              <div
                role="alert"
                className="p-4 rounded-xl bg-status-error/15 border border-status-error/30 text-status-error text-xs font-medium flex items-center gap-2.5 animate-fadeIn"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>{formError}</span>
              </div>
            )}

            {/* 1. Fulfillment Mode Toggle */}
            <div className="glass-card rounded-2xl p-6 border border-border">
              <h2 className="text-xs font-bold uppercase tracking-wider text-text-main mb-4 font-heading">
                1. Order Fulfillment Mode
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setOrderType("delivery")}
                  className={`p-4 rounded-xl border text-center transition-all focus-ring ${
                    orderType === "delivery"
                      ? "bg-primary/10 border-primary text-text-main shadow-glow"
                      : "bg-surface border-border text-text-secondary hover:border-primary/40"
                  }`}
                >
                  <Truck className="w-5 h-5 mx-auto mb-2 text-primary" aria-hidden="true" />
                  <span className="text-xs font-semibold block">White-Glove Delivery</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOrderType("takeaway")}
                  className={`p-4 rounded-xl border text-center transition-all focus-ring ${
                    orderType === "takeaway"
                      ? "bg-primary/10 border-primary text-text-main shadow-glow"
                      : "bg-surface border-border text-text-secondary hover:border-primary/40"
                  }`}
                >
                  <ShoppingBag className="w-5 h-5 mx-auto mb-2 text-primary" aria-hidden="true" />
                  <span className="text-xs font-semibold block">Boutique Takeaway</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOrderType("dine-in")}
                  className={`p-4 rounded-xl border text-center transition-all focus-ring ${
                    orderType === "dine-in"
                      ? "bg-primary/10 border-primary text-text-main shadow-glow"
                      : "bg-surface border-border text-text-secondary hover:border-primary/40"
                  }`}
                >
                  <UtensilsCrossed className="w-5 h-5 mx-auto mb-2 text-primary" aria-hidden="true" />
                  <span className="text-xs font-semibold block">Dine-in at Table</span>
                </button>
              </div>
            </div>

            {/* 2. Customer Information */}
            <div className="glass-card rounded-2xl p-6 border border-border space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-text-main mb-2 font-heading">
                2. Guest Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="checkout-full-name" className="text-xs font-semibold text-text-main">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                    <input
                      id="checkout-full-name"
                      type="text"
                      required
                      placeholder="Lord Sterling"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="checkout-phone" className="text-xs font-semibold text-text-main">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                    <input
                      id="checkout-phone"
                      type="tel"
                      required
                      placeholder="+1 (555) 392-1829"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
                    />
                  </div>
                </div>

                <div className="sm:col-span-2 space-y-1.5">
                  <label htmlFor="checkout-email" className="text-xs font-semibold text-text-main">
                    Email for Digital Receipt <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-text-secondary absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
                    <input
                      id="checkout-email"
                      type="email"
                      required
                      placeholder="sterling@luxury.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Address or Table Specification */}
            {orderType === "delivery" ? (
              <div className="glass-card rounded-2xl p-6 border border-border space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-text-main mb-2 font-heading">
                  3. Delivery Address
                </h2>
                <div className="space-y-3">
                  <div>
                    <label htmlFor="checkout-street" className="text-xs font-semibold text-text-main">
                      Street Address <span className="text-primary">*</span>
                    </label>
                    <input
                      id="checkout-street"
                      type="text"
                      required
                      placeholder="740 Park Avenue"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label htmlFor="checkout-apt" className="text-xs font-semibold text-text-secondary">Suite/Penthouse</label>
                      <input
                        id="checkout-apt"
                        type="text"
                        placeholder="Apt 12B"
                        value={apartment}
                        onChange={(e) => setApartment(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout-city" className="text-xs font-semibold text-text-secondary">City</label>
                      <input
                        id="checkout-city"
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main focus-ring"
                      />
                    </div>
                    <div>
                      <label htmlFor="checkout-zip" className="text-xs font-semibold text-text-secondary">ZIP Code</label>
                      <input
                        id="checkout-zip"
                        type="text"
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main focus-ring"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : orderType === "dine-in" ? (
              <div className="glass-card rounded-2xl p-6 border border-border space-y-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-text-main mb-2 font-heading">
                  3. Table Allocation
                </h2>
                <div>
                  <label htmlFor="checkout-table-number" className="text-xs font-semibold text-text-main">
                    Table Number or Zone <span className="text-primary">*</span>
                  </label>
                  <input
                    id="checkout-table-number"
                    type="text"
                    required
                    value={tableNumber}
                    onChange={(e) => setTableNumber(e.target.value)}
                    placeholder="e.g. Table 14 or Bar Booth 3"
                    className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main focus-ring"
                  />
                </div>
              </div>
            ) : null}

            {/* 4. Payment Selection */}
            <div className="glass-card rounded-2xl p-6 border border-border space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-text-main mb-2 font-heading">
                4. Payment Method
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all focus-ring ${
                    paymentMethod === "card"
                      ? "bg-primary/10 border-primary text-text-main shadow-glow"
                      : "bg-surface border-border text-text-secondary hover:border-primary/40"
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold block">Credit / Debit Card</span>
                    <span className="text-[10px] text-text-secondary">Instant 256-bit encryption</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("upi")}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all focus-ring ${
                    paymentMethod === "upi"
                      ? "bg-primary/10 border-primary text-text-main shadow-glow"
                      : "bg-surface border-border text-text-secondary hover:border-primary/40"
                  }`}
                >
                  <ShieldCheck className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold block">UPI & Digital Wallets</span>
                    <span className="text-[10px] text-text-secondary">GPay, Apple Pay</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("cash_on_delivery")}
                  className={`p-4 rounded-xl border text-left flex flex-col justify-between transition-all focus-ring ${
                    paymentMethod === "cash_on_delivery"
                      ? "bg-primary/10 border-primary text-text-main shadow-glow"
                      : "bg-surface border-border text-text-secondary hover:border-primary/40"
                  }`}
                >
                  <Banknote className="w-5 h-5 text-primary mb-3" aria-hidden="true" />
                  <div>
                    <span className="text-xs font-semibold block">Pay on Delivery / Table</span>
                    <span className="text-[10px] text-text-secondary">Cash or wireless terminal</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-6 border border-border sticky top-28 space-y-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-text-main font-heading border-b border-border pb-3">
                Order Summary ({items.length} courses)
              </h2>

              {/* Items List */}
              <div className="max-h-72 overflow-y-auto space-y-3 pr-1">
                {items.map((i) => (
                  <div key={i.id} className="flex justify-between items-start text-xs gap-3">
                    <div>
                      <span className="font-semibold text-text-main">
                        {i.quantity}x {i.menu_item.name}
                      </span>
                      {i.selected_variant && (
                        <p className="text-[11px] text-primary-accent font-medium">{i.selected_variant.name}</p>
                      )}
                      {i.selected_modifiers && i.selected_modifiers.length > 0 && (
                        <p className="text-[10px] text-text-secondary">
                          +{i.selected_modifiers.map((m) => m.modifier.name).join(", ")}
                        </p>
                      )}
                    </div>
                    <span className="font-mono font-semibold text-text-main">
                      {formatPrice(i.item_total)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Calculation Breakdown */}
              <div className="pt-4 border-t border-border space-y-2 text-xs text-text-secondary">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="text-text-main">{formatPrice(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-status-success">
                    <span>Privilege Discount</span>
                    <span>-{formatPrice(discount)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Estimated Tax (8.875%)</span>
                  <span className="text-text-main">{formatPrice(tax)}</span>
                </div>
                <div className="flex justify-between">
                  <span>White Glove Delivery</span>
                  <span className="text-text-main">
                    {delivery === 0 ? "Complimentary" : formatPrice(delivery)}
                  </span>
                </div>
                <div className="pt-3 border-t border-border flex justify-between text-lg font-bold text-text-main font-heading">
                  <span>Total Due</span>
                  <span className="text-primary">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              {/* Place Order CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 group focus-ring disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Securing Order...</span>
                ) : (
                  <>
                    <span>Place Order & Track Live</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
