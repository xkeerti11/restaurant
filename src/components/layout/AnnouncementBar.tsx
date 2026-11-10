"use client";

import React, { useState } from "react";
import Link from "next/link";
import { X, ArrowRight, Gift } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Promotional Announcement"
      className="relative z-50 bg-gradient-to-r from-surface via-[#241B13] to-surface border-b border-border px-3 sm:px-4 py-2 text-xs text-text-main transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex-1 flex items-center justify-center gap-2 text-center overflow-hidden">
          <span className="flex-shrink-0 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/20 text-primary font-bold text-[10px] uppercase tracking-wider">
            <Gift className="w-3 h-3" aria-hidden="true" />
            Privilege
          </span>
          <p className="truncate text-[11px] sm:text-xs text-text-main font-medium">
            Complimentary 1996 Reserve Wine Pairing with all 7-Course Chef Tasting Reservations this week.
          </p>
          <Link
            href="/reservation"
            className="flex-shrink-0 hidden md:inline-flex items-center gap-1 text-primary hover:text-primary-accent font-semibold underline underline-offset-4 ml-1 transition-colors focus-ring rounded"
          >
            <span>Reserve Table</span>
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 p-1 rounded-lg text-text-secondary hover:text-text-main hover:bg-surface-elevated transition-colors focus-ring"
          aria-label="Dismiss Announcement"
        >
          <X className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
