"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag, Calendar, Menu as MenuIcon, X, UtensilsCrossed, ChevronRight, User, ShieldCheck } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { defaultRestaurantConfig } from "@/lib/mockData";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalCartItems = useCartStore((state) => state.getTotalItemsCount());
  const setCartOpen = useCartStore((state) => state.setIsOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Menu", href: "/menu" },
    { label: "Specials", href: "/specials" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Skip to Main Content Link for Keyboard Users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-xl focus:font-semibold focus:shadow-glow text-xs"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#08090B]/95 backdrop-blur-xl border-b border-border shadow-card py-3"
            : "bg-[#08090B]/75 backdrop-blur-md border-b border-border/40 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-ring rounded-xl p-1 -m-1"
            aria-label={`${defaultRestaurantConfig.name} - Return to Homepage`}
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-primary to-primary-accent flex items-center justify-center shadow-glow group-hover:scale-105 active:scale-95 transition-transform flex-shrink-0">
              <UtensilsCrossed className="w-4 h-4 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-base sm:text-lg lg:text-xl tracking-wider text-text-main leading-tight">
                {defaultRestaurantConfig.name}
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-primary uppercase font-bold">
                Haute Gastronomy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-wider transition-colors hover:text-primary relative py-1 focus-ring rounded ${
                    isActive ? "text-primary font-bold" : "text-text-secondary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions (Reservation, Cart, Mobile Drawer Toggle) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Reservation Button (Desktop/Tablet) */}
            <Link
              href="/reservation"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs font-semibold border border-primary/40 text-text-main hover:bg-primary/10 hover:border-primary active:scale-[0.98] transition-all focus-ring"
            >
              <Calendar className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              <span>Reserve Table</span>
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 sm:p-2.5 rounded-xl bg-surface-elevated border border-border hover:border-primary text-text-main transition-all flex items-center justify-center group focus-ring active:scale-[0.96]"
              aria-label={`Shopping Cart, ${totalCartItems} items`}
            >
              <ShoppingBag className="w-4 h-4 text-text-main group-hover:text-primary transition-colors" aria-hidden="true" />
              {totalCartItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center shadow-glow animate-pulse">
                  {totalCartItems}
                </span>
              )}
            </button>

            {/* Order Online CTA (Desktop) */}
            <Link
              href="/menu"
              className="hidden md:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white text-xs font-semibold shadow-glow hover:shadow-glow-lg hover:scale-[1.02] active:scale-[0.98] transition-all focus-ring"
            >
              Order Online
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-surface-elevated border border-border text-text-secondary hover:text-text-main focus-ring active:scale-95 transition-all"
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation menu"
            >
              <MenuIcon className="w-5 h-5 text-text-main" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN SOLID MOBILE MENU DRAWER (NO BLEED-THROUGH) */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="lg:hidden fixed inset-0 z-50 bg-[#08090B] flex flex-col animate-fadeIn"
        >
          {/* Mobile Drawer Top Bar */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-border bg-[#0B0C0E]/95">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-primary-accent flex items-center justify-center shadow-glow">
                <UtensilsCrossed className="w-4 h-4 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-base tracking-wider text-text-main">
                  {defaultRestaurantConfig.name}
                </span>
                <span className="text-[9px] tracking-widest text-primary uppercase font-bold">
                  Haute Gastronomy
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCartOpen(true);
                }}
                className="relative p-2 rounded-xl bg-surface-elevated border border-border text-text-main"
                aria-label={`Open Cart, ${totalCartItems} items`}
              >
                <ShoppingBag className="w-4 h-4 text-text-main" aria-hidden="true" />
                {totalCartItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-white text-[9px] font-bold flex items-center justify-center shadow-glow">
                    {totalCartItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl bg-surface-elevated border border-border text-text-secondary hover:text-text-main focus-ring active:scale-95 transition-all"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5 text-text-main" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Navigation Links (Scrollable with ample touch targets) */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-2xl text-base sm:text-lg font-heading font-semibold transition-all ${
                    isActive
                      ? "bg-primary/15 text-primary border border-primary/30"
                      : "text-text-main hover:bg-surface-elevated border border-transparent"
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isActive ? "text-primary translate-x-1" : "text-text-secondary opacity-40"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Bottom Fixed Action Panel */}
          <div className="px-4 sm:px-6 pt-4 pb-8 border-t border-border bg-[#0B0C0E] space-y-3 shadow-2xl">
            <Link
              href="/reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl border border-primary/50 bg-surface text-center text-sm font-semibold text-text-main hover:border-primary active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-primary" aria-hidden="true" />
              <span>Book a Table</span>
            </Link>

            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-center text-sm font-semibold text-white shadow-glow active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Menu & Order Online</span>
            </Link>

            {/* Quick Portals */}
            <div className="flex items-center justify-center gap-6 pt-2 text-xs text-text-secondary">
              <Link
                href="/account"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary flex items-center gap-1.5"
              >
                <User className="w-3.5 h-3.5 text-primary" />
                <span>Customer Portal</span>
              </Link>
              <span className="text-border">•</span>
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-primary flex items-center gap-1.5"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-primary-accent" />
                <span>Staff Admin</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
