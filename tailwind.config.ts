import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090B",
        surface: "#111316",
        "surface-elevated": "#191C20",
        primary: {
          DEFAULT: "#FF781F",
          foreground: "#FFFFFF",
          accent: "#FFB45C",
        },
        border: "#292D32",
        text: {
          main: "#F5F2EC",
          secondary: "#999DA5",
        },
        status: {
          success: "#35B779",
          error: "#E45B50",
          warning: "#F5A623",
          info: "#4A90E2",
        },
      },
      fontFamily: {
        heading: ["var(--font-sora)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "20px",
        btn: "12px",
      },
      boxShadow: {
        glow: "0 0 25px -5px rgba(255, 120, 31, 0.25)",
        "glow-lg": "0 0 40px -10px rgba(255, 120, 31, 0.35)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

