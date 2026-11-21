import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import { defaultRestaurantConfig } from "@/lib/mockData";

const inter = Inter({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-inter",
  preload: true,
});

const sora = Sora({
  subsets: ["latin"],
  display: "optional",
  variable: "--font-sora",
  preload: true,
});

export const metadata: Metadata = {
  title: `${defaultRestaurantConfig.name} | ${defaultRestaurantConfig.tagline}`,
  description: defaultRestaurantConfig.description,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#08090B",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable} ${sora.variable}`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/images/gallery/interior-dining-hall-mobile.webp"
          type="image/webp"
          media="(max-width: 768px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/images/gallery/interior-dining-hall.webp"
          type="image/webp"
          media="(min-width: 769px)"
          fetchPriority="high"
        />
      </head>
      <body className="bg-background text-text-main font-body min-h-screen flex flex-col antialiased selection:bg-primary selection:text-white relative">
        <div id="nav-sentinel" className="absolute top-0 left-0 w-full h-[1px] pointer-events-none" aria-hidden="true" />
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
