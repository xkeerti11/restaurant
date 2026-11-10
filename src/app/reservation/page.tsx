import React from "react";
import ReservationWidget from "@/components/home/ReservationWidget";
import { Sparkles, Clock, ShieldCheck, Wine, Users } from "lucide-react";

export const metadata = {
  title: "Table Reservations | Aura Luxe Haute Gastronomy",
  description: "Reserve a dining table or private tasting chamber at Aura Luxe.",
};

export default function ReservationPage() {
  const experiences = [
    {
      title: "The Grand Dining Hall",
      desc: "Double-height ceilings, brushed brass chandeliers, and immersive view of our open hearth kitchen.",
      ideal: "Parties of 2 to 6",
    },
    {
      title: "Private Tasting Chamber",
      desc: "Intimate enclosed salon featuring a bespoke 10-course tasting menu paired with cellar vintages.",
      ideal: "Parties of 6 to 14",
    },
    {
      title: "Obsidian Bar Lounge",
      desc: "High-top marble counter seating with direct mixologist service and craft smoke infusions.",
      ideal: "Solo patrons & pairs",
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-10 sm:pt-14 lg:pt-16 pb-20 sm:pb-24 lg:pb-28">
      {/* Page Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FF781F] block mb-2">
          Concierge & Bookings
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-[#F5F2EC] tracking-tight mb-4">
          Reserve Your <span className="text-[#FF781F]">Table</span>
        </h1>
        <p className="text-sm sm:text-base text-[#999DA5] max-w-xl mx-auto">
          We welcome reservations up to 30 days in advance. For parties exceeding 12 guests, our private dining concierge will coordinate directly.
        </p>
      </div>

      {/* Atmospheric Experiences Grid */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#111316] border border-[#23272E] flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF781F] block mb-1">
                  Atmosphere {idx + 1}
                </span>
                <h3 className="text-lg font-bold font-heading text-[#F5F2EC] mb-2">
                  {exp.title}
                </h3>
                <p className="text-xs text-[#999DA5] leading-relaxed mb-4">
                  {exp.desc}
                </p>
              </div>
              <div className="pt-3 border-t border-[#1F2228] flex items-center justify-between text-xs text-[#FFB45C]">
                <span>{exp.ideal}</span>
                <Users className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Reservation Widget */}
      <ReservationWidget />

      {/* Booking Policies Note */}
      <div className="max-w-3xl mx-auto px-4 mt-12 text-center text-xs text-[#999DA5] space-y-1">
        <p className="text-[#F5F2EC] font-semibold">Dining Etiquette & Reservation Policies</p>
        <p>• Elegant casual or formal evening attire is respectfully requested.</p>
        <p>• We hold reservations for a grace period of 15 minutes past scheduled arrival time.</p>
        <p>• Dietary modifications can be accommodated when noted at least 24 hours prior.</p>
      </div>
    </div>
  );
}

