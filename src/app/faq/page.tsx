"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HelpCircle, ChevronDown, Search, ArrowRight, Phone } from "lucide-react";

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<string>("all");
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({ "faq-0": true });

  const faqs = [
    {
      id: "faq-0",
      category: "reservations",
      question: "What is your dress code policy?",
      answer:
        "We request elegant casual or formal evening attire. We politely decline athletic wear, beach attire, or distressed denim in our main dining room.",
    },
    {
      id: "faq-1",
      category: "reservations",
      question: "How far in advance can tables be reserved?",
      answer:
        "Reservations open 30 days in advance at 9:00 AM local time. For private dining chambers seating 6 to 14 guests, bookings may be scheduled up to 90 days in advance.",
    },
    {
      id: "faq-2",
      category: "dietary",
      question: "Can you accommodate severe food allergies?",
      answer:
        "Yes. Our executive culinary team can tailor menus for vegetarian, vegan, celiac gluten-free, and nut allergies when stated at least 24 hours prior to arrival.",
    },
    {
      id: "faq-3",
      category: "delivery",
      question: "How does White-Glove delivery ensure meal quality?",
      answer:
        "Every hot dish is transferred directly from the hearth into custom insulated thermal containment cases that preserve internal dish temperature and humidity until arrival.",
    },
    {
      id: "faq-4",
      category: "events",
      question: "Do you offer complete restaurant buyouts?",
      answer:
        "Yes, we provide full salon buyouts and private corporate celebrations for up to 120 guests. Please contact our Dining Concierge via the Contact page.",
    },
    {
      id: "faq-5",
      category: "reservations",
      question: "What is the cancellation grace period?",
      answer:
        "Cancellations made at least 24 hours prior to scheduled seating incur zero penalty. Same-day cancellations may incur a nominal fee per guest.",
    },
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqs.filter((f) => {
    if (activeTab !== "all" && f.category !== activeTab) return false;
    if (search.trim() !== "") {
      const q = search.toLowerCase();
      return f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-xs font-semibold text-primary uppercase tracking-widest mb-3">
            <HelpCircle className="w-3.5 h-3.5" aria-hidden="true" />
            Guest Inquiries
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-text-main">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary mt-3 max-w-lg mx-auto">
            Everything you need to know about dining etiquette, reservations, dietary accommodations, and private events.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="w-4 h-4 text-text-secondary absolute left-4 top-1/2 -translate-y-1/2" aria-hidden="true" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions or terms (e.g. dress code, allergies)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: "all", label: "All Questions" },
            { id: "reservations", label: "Reservations" },
            { id: "dietary", label: "Dietary & Allergens" },
            { id: "delivery", label: "White Glove Delivery" },
            { id: "events", label: "Private Events" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all focus-ring ${
                activeTab === tab.id
                  ? "bg-primary text-white shadow-glow"
                  : "bg-surface text-text-secondary hover:text-text-main border border-border"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openItems[faq.id];
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-surface border border-border overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus-ring"
                >
                  <span className="font-heading font-semibold text-sm sm:text-base text-text-main">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-text-secondary transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-text-secondary leading-relaxed border-t border-border pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-surface border border-border text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="font-heading font-bold text-sm text-text-main">
              Have a distinct request or private event question?
            </h2>
            <p className="text-xs text-text-secondary mt-1">
              Our hospitality concierge will assist you personally.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold shadow-glow hover:bg-primary-accent active:scale-95 transition-all flex items-center gap-1.5 focus-ring"
          >
            <span>Contact Concierge</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

