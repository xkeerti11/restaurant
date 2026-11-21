"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  if (subscribed) {
    return (
      <div
        role="status"
        className="flex items-center gap-2 p-3 rounded-xl bg-status-success/10 border border-status-success/30 text-status-success text-xs font-semibold animate-fadeIn"
      >
        <Check className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
        <span>Subscribed to private invitations.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubscribe} className="space-y-2">
      <div className="relative">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address for newsletter
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
        />
        <button
          type="submit"
          aria-label="Subscribe to dispatch"
          className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-primary text-[#08090B] hover:bg-primary-accent active:scale-95 transition-all focus-ring"
        >
          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </button>
      </div>
      <span className="text-[10px] text-text-secondary block">
        We respect your privacy. Unsubscribe anytime.
      </span>
    </form>
  );
}
