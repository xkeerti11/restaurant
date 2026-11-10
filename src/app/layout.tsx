import type { Metadata, Viewport } from "next";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { defaultRestaurantConfig } from "@/lib/mockData";

export const metadata: Metadata = {
  title: `${defaultRestaurantConfig.name} | ${defaultRestaurantConfig.tagline}`,
  description: defaultRestaurantConfig.description,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Sora:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-main min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
        <AnnouncementBar />
        <Navbar />
        <main className="flex-1 focus-ring" id="main-content">
          {children}
        </main>
        <CartDrawer />
        <Footer />
      </body>
    </html>
  );
}
