"use client";

import React, { useState } from "react";
import { Calendar, Clock, Users, Sparkles, CheckCircle2, AlertCircle } from "lucide-react";

export default function ReservationWidget() {
  const [partySize, setPartySize] = useState(2);
  const [date, setDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split("T")[0];
  });
  const [timeSlot, setTimeSlot] = useState("19:00");
  const [seatingArea, setSeatingArea] = useState<"main_hall" | "private_dining" | "terrace" | "bar_lounge">("main_hall");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingCode, setBookingCode] = useState("");

  const timeSlots = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30"];

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!fullName.trim() || !phone.trim() || !email.trim()) {
      setFormError("Please fill out all mandatory guest contact fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setFormError("Please provide a valid email address for booking confirmation.");
      return;
    }

    if (phone.replace(/\D/g, "").length < 7) {
      setFormError("Please provide a valid telephone number with area code.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      const code = "ALX-" + Math.floor(100000 + Math.random() * 900000);
      setBookingCode(code);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="reservation" className="py-14 sm:py-20 lg:py-24 bg-background border-t border-border relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
            Table Reservations
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-text-main">
            Reserve Your Experience
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary mt-2">
            Secure your preferred table in our candlelit main hall, terrace, or private tasting chamber.
          </p>
        </div>

        <div className="glass-card rounded-2xl border border-border p-6 sm:p-10 shadow-2xl">
          {isSubmitted ? (
            <div role="status" className="text-center py-10 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-status-success/20 border border-status-success/40 flex items-center justify-center mx-auto text-status-success">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-text-main">
                Table Reservation Confirmed
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary max-w-md mx-auto">
                Thank you, <span className="text-text-main font-semibold">{fullName}</span>. Your evening table has been secured. A confirmation email with arrival directions has been dispatched to <span className="text-text-main">{email}</span>.
              </p>
              <div className="inline-block p-4 sm:p-5 rounded-2xl bg-surface border border-border text-center my-3">
                <span className="text-[10px] uppercase font-bold text-text-secondary block">
                  Reservation Confirmation Code
                </span>
                <span className="text-2xl font-mono font-bold text-primary tracking-widest">
                  {bookingCode}
                </span>
                <div className="text-xs text-text-secondary mt-2 flex flex-wrap items-center justify-center gap-4">
                  <span>📅 {date}</span>
                  <span>⏰ {timeSlot}</span>
                  <span>👥 {partySize} {partySize === 1 ? "Guest" : "Guests"}</span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-surface-elevated hover:bg-surface text-xs font-semibold text-text-main border border-border transition-colors focus-ring"
                >
                  Make Another Reservation
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleBook} noValidate className="space-y-6">
              {formError && (
                <div
                  role="alert"
                  className="p-3.5 rounded-xl bg-status-error/10 border border-status-error/30 text-status-error text-xs font-medium flex items-center gap-2 animate-fadeIn"
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  <span>{formError}</span>
                </div>
              )}

              {/* Stepper / Controls Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Party Size */}
                <div className="space-y-1.5">
                  <label htmlFor="res-party-size" className="text-xs font-semibold text-text-main flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-primary" aria-hidden="true" /> Party Size
                  </label>
                  <select
                    id="res-party-size"
                    value={partySize}
                    onChange={(e) => setPartySize(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-xs text-text-main focus-ring"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12].map((num) => (
                      <option key={num} value={num} className="bg-surface">
                        {num} {num === 1 ? "Guest (Solo Bar)" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="space-y-1.5">
                  <label htmlFor="res-date" className="text-xs font-semibold text-text-main flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" aria-hidden="true" /> Date
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-xs text-text-main focus-ring"
                  />
                </div>

                {/* Seating Area */}
                <div className="space-y-1.5">
                  <label htmlFor="res-seating-area" className="text-xs font-semibold text-text-main flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary" aria-hidden="true" /> Seating Atmosphere
                  </label>
                  <select
                    id="res-seating-area"
                    value={seatingArea}
                    onChange={(e) => setSeatingArea(e.target.value as any)}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-xs text-text-main focus-ring"
                  >
                    <option value="main_hall" className="bg-surface">Grand Dining Hall</option>
                    <option value="private_dining" className="bg-surface">Private Reserve Chamber</option>
                    <option value="terrace" className="bg-surface">Candlelit Terrace</option>
                    <option value="bar_lounge" className="bg-surface">Obsidian Bar Lounge</option>
                  </select>
                </div>
              </div>

              {/* Time Slots Chips */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-text-main flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary" aria-hidden="true" /> Select Arrival Time Slot
                </span>
                <div role="radiogroup" aria-label="Arrival Time Slot" className="flex flex-wrap gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      type="button"
                      key={slot}
                      onClick={() => setTimeSlot(slot)}
                      aria-pressed={timeSlot === slot}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold active:scale-95 transition-all focus-ring ${
                        timeSlot === slot
                          ? "bg-primary text-white shadow-glow"
                          : "bg-surface text-text-secondary border border-border hover:border-primary/40 hover:text-text-main"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-border">
                <div className="space-y-1.5">
                  <label htmlFor="res-full-name" className="text-xs font-semibold text-text-main">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <input
                    id="res-full-name"
                    type="text"
                    required
                    placeholder="e.g. Lorde Harrison"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="res-email" className="text-xs font-semibold text-text-main">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <input
                    id="res-email"
                    type="email"
                    required
                    placeholder="harrison@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="res-phone" className="text-xs font-semibold text-text-main">
                    Phone Number <span className="text-primary">*</span>
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
                  />
                </div>
              </div>

              {/* Special Notes */}
              <div className="space-y-1.5">
                <label htmlFor="res-special-notes" className="text-xs font-semibold text-text-main">
                  Special Occasion or Dietary Preferences
                </label>
                <input
                  id="res-special-notes"
                  type="text"
                  placeholder="e.g. Anniversary dinner, table near open hearth preferred..."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-xs text-text-main placeholder-text-secondary focus-ring"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary-accent text-white font-semibold text-sm shadow-glow hover:shadow-glow-lg active:scale-[0.98] transition-all focus-ring disabled:opacity-50"
              >
                {isSubmitting ? "Securing Table Reservation..." : "Confirm Table Reservation"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
