import React from "react";
import HeroSection from "@/components/home/HeroSection";
import CategoryBar from "@/components/home/CategoryBar";
import BestsellersSection from "@/components/home/BestsellersSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LuxuryGallerySection from "@/components/gallery/LuxuryGallerySection";
import ChefsSection from "@/components/home/ChefsSection";
import ReservationWidget from "@/components/home/ReservationWidget";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Categories */}
      <CategoryBar />

      {/* 3. Bestsellers & Specials */}
      <BestsellersSection />

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Luxury Visual Gallery (Fast, Responsive, No WebGL black screen) */}
      <LuxuryGallerySection />

      {/* 6. Chefs Section */}
      <ChefsSection />

      {/* 7. Live Table Reservation */}
      <ReservationWidget />

      {/* 8. Testimonials */}
      <TestimonialsSection />
    </div>
  );
}
