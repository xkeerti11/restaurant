import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import { defaultRestaurantConfig } from "@/lib/mockData";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
});

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
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${sora.variable}`}>
      <body className="bg-background text-text-main font-body min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white">
        <SmoothScrollProvider>
          <AnnouncementBar />
          <Navbar />
          <main className="flex-1 focus-ring" id="main-content">
            {children}
          </main>
          <CartDrawer />
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
