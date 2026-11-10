import React from "react";
import Link from "next/link";
import { UtensilsCrossed, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center bg-background">
      <div className="w-16 h-16 rounded-2xl bg-surface-elevated border border-border flex items-center justify-center mb-6 shadow-glow">
        <UtensilsCrossed className="w-8 h-8 text-primary" aria-hidden="true" />
      </div>
      <span className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
        404 — Page Not Found
      </span>
      <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-text-main mb-4">
        A Culinary Detour
      </h1>
      <p className="text-xs sm:text-sm text-text-secondary max-w-md mb-8">
        The course or private salon you are looking for has either been moved or is reserved for seasonal exclusivity.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white text-xs font-semibold shadow-glow hover:shadow-glow-lg transition-all flex items-center gap-2 focus-ring"
      >
        <span>Return to Grand Hall</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

