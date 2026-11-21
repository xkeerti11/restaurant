import React from "react";
import Link from "next/link";
import { defaultRestaurantConfig } from "@/lib/mockData";
import { UtensilsCrossed, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#050608] border-t border-border py-14 sm:py-16 lg:py-20 text-text-secondary">
      <h2 className="sr-only">Restaurant Information & Directory</h2>
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
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all focus-ring"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={defaultRestaurantConfig.social_links.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
                className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all focus-ring"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={defaultRestaurantConfig.social_links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter account"
                className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all focus-ring"
              >
                <Twitter className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-main font-heading mb-4">
              Explore
            </h3>
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
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-main font-heading mb-4">
              Service Hours
            </h3>
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
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-main font-heading mb-4">
              Culinary Dispatch
            </h3>
            <p className="text-xs leading-relaxed text-text-secondary mb-4">
              Receive private invitations to seasonal tasting menus, cellar releases, and chef collaborations.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} {defaultRestaurantConfig.name}. White-label dining platform. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-1 text-center">
            <Link href="/privacy" className="py-2.5 px-1 hover:text-primary transition-colors focus-ring rounded inline-flex items-center">
              Privacy Policy
            </Link>
            <Link href="/terms" className="py-2.5 px-1 hover:text-primary transition-colors focus-ring rounded inline-flex items-center">
              Terms of Service
            </Link>
            <Link href="/account" className="py-2.5 px-1 hover:text-primary transition-colors focus-ring rounded inline-flex items-center">
              Customer Portal
            </Link>
            <Link href="/admin" className="py-2.5 px-1 hover:text-primary transition-colors font-semibold text-primary-accent focus-ring rounded inline-flex items-center">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
