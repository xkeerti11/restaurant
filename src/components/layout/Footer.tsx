"use client";

import React, { useState } from "react";
import Link from "next/link";
import { defaultRestaurantConfig } from "@/lib/mockData";
import { UtensilsCrossed, Phone, MapPin, ArrowRight, Instagram, Facebook, Twitter, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer role="contentinfo" className="bg-[#050608] border-t border-border py-14 sm:py-16 lg:py-20 text-text-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus-ring rounded-xl inline-flex"
              aria-label={`${defaultRestaurantConfig.name} Home`}
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-accent flex items-center justify-center">
                <UtensilsCrossed className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <span className="font-heading font-extrabold text-xl text-text-main">
                {defaultRestaurantConfig.name}
              </span>
            </Link>
            <p className="text-xs sm:text-sm leading-relaxed text-text-secondary">
              {defaultRestaurantConfig.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={defaultRestaurantConfig.social_links.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram profile"
                className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all focus-ring"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={defaultRestaurantConfig.social_links.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook page"
                className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all focus-ring"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={defaultRestaurantConfig.social_links.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter account"
                className="w-9 h-9 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all focus-ring"
              >
                <Twitter className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-main font-heading mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/menu" className="hover:text-primary transition-colors focus-ring rounded py-0.5">
                  Digital Gastronomy Menu
                </Link>
              </li>
              <li>
                <Link href="/specials" className="hover:text-primary transition-colors focus-ring rounded py-0.5">
                  Chef Specials & Tastings
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-primary transition-colors focus-ring rounded py-0.5">
                  Curated Culinary Gallery
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="hover:text-primary transition-colors focus-ring rounded py-0.5">
                  Table Reservations
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors focus-ring rounded py-0.5">
                  Culinary Philosophy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-primary transition-colors focus-ring rounded py-0.5">
                  Guest FAQs & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Opening Hours & Location */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-main font-heading mb-4">
              Service Hours
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {defaultRestaurantConfig.opening_hours.map((schedule, idx) => (
                <li key={idx} className="flex flex-col">
                  <span className="text-text-main font-medium">{schedule.days}</span>
                  <span className="text-text-secondary">{schedule.hours}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 pt-4 border-t border-border space-y-1.5 text-xs text-text-secondary">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
                <span>{defaultRestaurantConfig.address.street}, {defaultRestaurantConfig.address.city}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
                <span>{defaultRestaurantConfig.phone}</span>
              </p>
            </div>
          </div>

          {/* Newsletter Form */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-text-main font-heading mb-4">
              Culinary Dispatch
            </h4>
            <p className="text-xs leading-relaxed text-text-secondary mb-4">
              Receive private invitations to seasonal tasting menus, cellar releases, and chef collaborations.
            </p>

            {subscribed ? (
              <div
                role="status"
                className="flex items-center gap-2 p-3 rounded-xl bg-status-success/10 border border-status-success/30 text-status-success text-xs font-semibold animate-fadeIn"
              >
                <Check className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>Subscribed to private invitations.</span>
              </div>
            ) : (
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
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-primary text-white hover:bg-primary-accent active:scale-95 transition-all focus-ring"
                  >
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
                <span className="text-[10px] text-text-secondary block">
                  We respect your privacy. Unsubscribe anytime.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {defaultRestaurantConfig.name}. White-label dining platform. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors focus-ring rounded">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors focus-ring rounded">
              Terms of Service
            </Link>
            <Link href="/account" className="hover:text-primary transition-colors focus-ring rounded">
              Customer Portal
            </Link>
            <Link href="/admin" className="hover:text-primary transition-colors font-semibold text-primary-accent focus-ring rounded">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
