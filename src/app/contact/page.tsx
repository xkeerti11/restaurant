"use client";

import React, { useState } from "react";
import { defaultRestaurantConfig } from "@/lib/mockData";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Private Dining Inquiry");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
            Dining Concierge
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-heading text-text-main tracking-tight mb-4">
            Connect With Us
          </h1>
          <p className="text-xs sm:text-sm text-text-secondary">
            For private event reservations, cellar tasting inquiries, or press communications, our team is at your disposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Hours */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border space-y-6">
              <h2 className="text-lg font-bold font-heading text-text-main">
                Location & Direct Line
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-text-secondary">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-text-main font-semibold block">Address</span>
                    <span>
                      {defaultRestaurantConfig.address.street}, {defaultRestaurantConfig.address.city}, {defaultRestaurantConfig.address.state} {defaultRestaurantConfig.address.postal_code}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-text-main font-semibold block">Telephone</span>
                    <span>{defaultRestaurantConfig.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="text-text-main font-semibold block">Concierge Email</span>
                    <span>{defaultRestaurantConfig.email}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-border space-y-4">
              <h2 className="text-lg font-bold font-heading text-text-main flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" aria-hidden="true" /> Service Hours
              </h2>
              <div className="space-y-2 text-xs text-text-secondary">
                {defaultRestaurantConfig.opening_hours.map((schedule, idx) => (
                  <div key={idx} className="flex justify-between border-b border-border pb-1.5">
                    <span className="text-text-main font-medium">{schedule.days}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-10 border border-border">
              {submitted ? (
                <div role="status" className="text-center py-12 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-2xl bg-status-success/20 border border-status-success/40 flex items-center justify-center mx-auto text-status-success">
                    <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h2 className="text-2xl font-bold font-heading text-text-main">
                    Message Transmitted
                  </h2>
                  <p className="text-xs sm:text-sm text-text-secondary max-w-sm mx-auto">
                    Thank you, <span className="text-text-main font-semibold">{name}</span>. Our guest relations director will attend to your inquiry within 2 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setMessage("");
                    }}
                    className="px-6 py-2.5 rounded-xl bg-surface-elevated text-xs font-semibold text-text-main border border-border hover:border-primary transition-colors focus-ring"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-lg font-bold font-heading text-text-main mb-2">
                    Send Concierge Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-semibold text-text-secondary">
                        Your Name <span className="text-primary">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Elena Rostova"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main focus-ring"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-semibold text-text-secondary">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="elena@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main focus-ring"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-semibold text-text-secondary">
                      Subject
                    </label>
                    <select
                      id="contact-subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main focus-ring"
                    >
                      <option value="Private Dining Inquiry">Private Dining & Salon Buyout</option>
                      <option value="Wedding or Banquet">Celebration or Corporate Banquet</option>
                      <option value="Cellar & Sommelier Tasting">Reserve Cellar Tasting</option>
                      <option value="Press & Media">Press & Media Relations</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-semibold text-text-secondary">
                      Message Details <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your requirements, estimated guest count, or preferred dates..."
                      className="w-full px-4 py-2.5 rounded-xl bg-surface border border-border text-xs text-text-main focus-ring resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-xs shadow-glow hover:shadow-glow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2 focus-ring"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>Send Inquiry to Concierge</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
