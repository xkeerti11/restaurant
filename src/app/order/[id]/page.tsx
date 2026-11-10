"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { OrderStatus } from "@/types";
import {
  CheckCircle2,
  Clock,
  ChefHat,
  Truck,
  Check,
  ArrowRight,
  Phone,
} from "lucide-react";

export default function OrderTrackingPage() {
  const params = useParams();
  const orderId = (params?.id as string) || "ORD-DEMO";

  const [order, setOrder] = useState<any>(null);
  const [currentStatus, setCurrentStatus] = useState<OrderStatus>("preparing");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(`order_${orderId}`);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setOrder(parsed);
          setCurrentStatus(parsed.order_status || "preparing");
        } catch {
          // fallback
        }
      }
    }
  }, [orderId]);

  const stages: { key: OrderStatus; label: string; desc: string; icon: any }[] = [
    {
      key: "placed",
      label: "Order Placed",
      desc: "Received & verified by dining concierge",
      icon: <CheckCircle2 className="w-5 h-5" aria-hidden="true" />,
    },
    {
      key: "confirmed",
      label: "Order Confirmed",
      desc: "Kitchen station notified & ingredients cut",
      icon: <Clock className="w-5 h-5" aria-hidden="true" />,
    },
    {
      key: "preparing",
      label: "Cooking in Hearth",
      desc: "Executive chefs grilling & plating course",
      icon: <ChefHat className="w-5 h-5" aria-hidden="true" />,
    },
    {
      key: "out_for_delivery",
      label: "Out for Delivery",
      desc: "Thermal containment transit to destination",
      icon: <Truck className="w-5 h-5" aria-hidden="true" />,
    },
    {
      key: "delivered",
      label: "Delivered & Savor",
      desc: "Order completed with compliments",
      icon: <Check className="w-5 h-5" aria-hidden="true" />,
    },
  ];

  const getStageIndex = (status: OrderStatus) => {
    switch (status) {
      case "placed":
        return 0;
      case "confirmed":
        return 1;
      case "preparing":
        return 2;
      case "ready":
      case "out_for_delivery":
        return 3;
      case "delivered":
        return 4;
      default:
        return 2;
    }
  };

  const currentIndex = getStageIndex(currentStatus);

  return (
    <div className="min-h-screen bg-background pt-8 sm:pt-12 lg:pt-14 pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-status-success/10 border border-status-success/30 text-xs font-semibold text-status-success uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-status-success animate-ping" aria-hidden="true" />
            <span>Live Culinary Dispatch</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-text-main">
            Order #{orderId}
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary mt-2">
            Estimated arrival: <span className="text-primary font-bold">35–45 minutes</span>
          </p>
        </div>

        {/* Timeline Progression Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-border mb-8 shadow-2xl">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-8 font-heading">
            Progress Tracking
          </h2>

          <div className="relative">
            {/* Timeline Bar Background */}
            <div className="hidden sm:block absolute top-6 left-6 right-6 h-1 bg-surface-elevated z-0" />
            {/* Active Timeline Bar */}
            <div
              className="hidden sm:block absolute top-6 left-6 h-1 bg-gradient-to-r from-primary to-primary-accent transition-all duration-700 z-0"
              style={{ width: `${(currentIndex / (stages.length - 1)) * 88}%` }}
            />

            {/* Stages Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 relative z-10">
              {stages.map((stage, idx) => {
                const isCompleted = idx <= currentIndex;
                const isCurrent = idx === currentIndex;
                return (
                  <div key={stage.key} className="flex sm:flex-col items-center text-left sm:text-center gap-4 sm:gap-2">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                        isCurrent
                          ? "bg-primary text-white shadow-glow scale-110"
                          : isCompleted
                          ? "bg-status-success text-white"
                          : "bg-surface border border-border text-text-secondary"
                      }`}
                    >
                      {stage.icon}
                    </div>
                    <div>
                      <h3
                        className={`text-xs font-bold font-heading ${
                          isCurrent ? "text-primary" : isCompleted ? "text-text-main" : "text-text-secondary"
                        }`}
                      >
                        {stage.label}
                      </h3>
                      <p className="text-[10px] text-text-secondary mt-0.5 leading-snug">
                        {stage.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tester Interactive Simulation Pill */}
          <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-between gap-3 text-xs text-text-secondary">
            <span>Simulate Order Advancement (Tester Tool):</span>
            <div className="flex flex-wrap gap-1.5">
              {(["placed", "confirmed", "preparing", "out_for_delivery", "delivered"] as OrderStatus[]).map(
                (s) => (
                  <button
                    key={s}
                    onClick={() => setCurrentStatus(s)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-semibold uppercase active:scale-95 transition-all focus-ring ${
                      currentStatus === s
                        ? "bg-primary text-white"
                        : "bg-surface hover:bg-surface-elevated text-text-secondary border border-border"
                    }`}
                  >
                    {s}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Order Details Receipt Card */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <h2 className="font-heading font-bold text-base text-text-main">
              Order Specification
            </h2>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-status-success/15 text-status-success border border-status-success/30">
              Payment: {order?.payment_status?.toUpperCase() || "PAID"}
            </span>
          </div>

          {/* Ordered Items */}
          {order?.items && (
            <div className="space-y-3">
              {order.items.map((item: any, idx: number) => (
                <div key={idx} className="flex justify-between items-start text-xs border-b border-border/50 pb-2.5">
                  <div>
                    <span className="text-text-main font-semibold">
                      {item.quantity}x {item.name}
                    </span>
                    {item.selected_variant_name && (
                      <p className="text-primary-accent text-[11px] font-medium">{item.selected_variant_name}</p>
                    )}
                    {item.modifiers_summary && (
                      <p className="text-text-secondary text-[10px]">+{item.modifiers_summary}</p>
                    )}
                  </div>
                  <span className="font-mono text-text-main font-bold">
                    {formatPrice(item.item_total)}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Pricing Breakdown */}
          {order && (
            <div className="space-y-1.5 text-xs text-text-secondary pt-1">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-text-main">{formatPrice(order.subtotal)}</span>
              </div>
              {order.discount_total > 0 && (
                <div className="flex justify-between text-status-success">
                  <span>Discount</span>
                  <span>-{formatPrice(order.discount_total)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Tax</span>
                <span className="text-text-main">{formatPrice(order.tax_total)}</span>
              </div>
              <div className="flex justify-between">
                <span>Fulfillment</span>
                <span className="text-text-main">
                  {order.delivery_fee === 0 ? "Complimentary" : formatPrice(order.delivery_fee)}
                </span>
              </div>
              <div className="pt-2 border-t border-border flex justify-between text-base font-bold text-primary font-heading">
                <span>Total Paid</span>
                <span>{formatPrice(order.grand_total)}</span>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/menu"
              className="text-xs font-semibold text-primary hover:text-primary-accent transition-colors flex items-center gap-1 focus-ring rounded"
            >
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Order Another Course</span>
            </Link>
            <Link
              href="/contact"
              className="text-xs text-text-secondary hover:text-text-main transition-colors flex items-center gap-1.5 focus-ring rounded"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Contact Dining Concierge</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
