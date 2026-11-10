"use client";

import React, { useState } from "react";
import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import {
  User,
  ShoppingBag,
  Calendar,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";

export default function CustomerAccountPage() {
  const [activeTab, setActiveTab] = useState<"orders" | "reservations" | "addresses">("orders");

  const customerProfile = {
    name: "Lorde Harrison",
    email: "harrison@luxury.com",
    phone: "+1 (555) 392-1829",
    tier: "Connoisseur VIP",
    loyalty_points: 2450,
  };

  const pastOrders = [
    {
      id: "ORD-982142",
      date: "Nov 3, 2026",
      status: "delivered",
      total: 10600,
      items: "1x A5 Miyazaki Wagyu Tenderloin (8 oz), 1x Wild Morel Tagliolini",
    },
    {
      id: "ORD-921820",
      date: "Oct 19, 2026",
      status: "delivered",
      total: 6200,
      items: "2x Smoked Dark Chocolate Sphere, 1x Old Fashioned",
    },
  ];

  const upcomingReservations = [
    {
      code: "ALX-482910",
      date: "Tomorrow, 19:30",
      party: 2,
      area: "Grand Dining Hall",
      status: "confirmed",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Card Header */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-accent flex items-center justify-center text-white shadow-glow">
              <User className="w-8 h-8" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-bold font-heading text-text-main">
                  {customerProfile.name}
                </h1>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-primary/20 text-primary border border-primary/30 uppercase">
                  {customerProfile.tier}
                </span>
              </div>
              <p className="text-xs text-text-secondary mt-0.5">
                {customerProfile.email} • {customerProfile.phone}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-surface px-5 py-3 rounded-2xl border border-border">
            <Star className="w-5 h-5 text-primary-accent fill-primary-accent" aria-hidden="true" />
            <div>
              <span className="text-[10px] text-text-secondary block uppercase font-bold">
                Privilege Points
              </span>
              <span className="text-base font-bold text-text-main font-heading">
                {customerProfile.loyalty_points} Points
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 mb-8 border-b border-border pb-3">
          <button
            onClick={() => setActiveTab("orders")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all focus-ring ${
              activeTab === "orders"
                ? "bg-primary text-white shadow-glow"
                : "bg-surface text-text-secondary hover:text-text-main border border-border"
            }`}
          >
            <ShoppingBag className="w-4 h-4" aria-hidden="true" />
            <span>Order History</span>
          </button>

          <button
            onClick={() => setActiveTab("reservations")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all focus-ring ${
              activeTab === "reservations"
                ? "bg-primary text-white shadow-glow"
                : "bg-surface text-text-secondary hover:text-text-main border border-border"
            }`}
          >
            <Calendar className="w-4 h-4" aria-hidden="true" />
            <span>Upcoming Reservations</span>
          </button>

          <button
            onClick={() => setActiveTab("addresses")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all focus-ring ${
              activeTab === "addresses"
                ? "bg-primary text-white shadow-glow"
                : "bg-surface text-text-secondary hover:text-text-main border border-border"
            }`}
          >
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Saved Addresses</span>
          </button>
        </div>

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="space-y-4">
            {pastOrders.map((ord) => (
              <div
                key={ord.id}
                className="p-5 sm:p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="font-mono font-bold text-primary text-xs sm:text-sm">
                      {ord.id}
                    </span>
                    <span className="text-[11px] text-text-secondary">{ord.date}</span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-status-success/15 text-status-success">
                      {ord.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-main mt-1 font-medium">{ord.items}</p>
                </div>

                <div className="flex items-center gap-4 sm:border-l sm:border-border sm:pl-6 w-full sm:w-auto justify-between sm:justify-start">
                  <div>
                    <span className="text-[10px] text-text-secondary block uppercase">Total Paid</span>
                    <span className="font-bold text-sm sm:text-base text-text-main font-heading">
                      {formatPrice(ord.total)}
                    </span>
                  </div>
                  <Link
                    href={`/order/${ord.id}`}
                    className="px-4 py-2 rounded-xl bg-surface-elevated hover:bg-primary text-text-main hover:text-white border border-border text-xs font-semibold transition-all focus-ring"
                  >
                    View Receipt
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Reservations Tab */}
        {activeTab === "reservations" && (
          <div className="space-y-4">
            {upcomingReservations.map((res) => (
              <div
                key={res.code}
                className="p-5 sm:p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2.5 mb-1">
                    <span className="font-mono font-bold text-primary text-xs sm:text-sm">
                      {res.code}
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-status-success/15 text-status-success">
                      {res.status}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold font-heading text-text-main">
                    Table for {res.party} • {res.area}
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">Arrival: {res.date}</p>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <Link
                    href="/reservation"
                    className="px-4 py-2 rounded-xl bg-surface-elevated hover:border-primary text-text-main border border-border text-xs font-semibold transition-all focus-ring"
                  >
                    Modify
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold shadow-glow hover:bg-primary-accent transition-all focus-ring"
                  >
                    Concierge Note
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Addresses Tab */}
        {activeTab === "addresses" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-surface border border-border space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-primary uppercase">Primary Residence</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] bg-primary/20 text-primary font-bold">
                  Default
                </span>
              </div>
              <h3 className="font-heading font-semibold text-sm text-text-main">
                740 Park Avenue, Penthouse 14B
              </h3>
              <p className="text-xs text-text-secondary">New York, NY 10021</p>
              <div className="pt-2 flex gap-3 text-xs">
                <button className="text-text-secondary hover:text-primary">Edit</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

