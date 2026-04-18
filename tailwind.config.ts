import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          card: "rgba(255,255,255,0.03)",
        },
        border: {
          subtle: "rgba(255,255,255,0.08)",
        },
        body: {
          DEFAULT: "#94A3B8",
          muted: "#64748B",
        },
        accent: {
          cyan: "#00E5FF",
          purple: "#7C3AED",
          magenta: "#C026D3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "page-gradient":
          "linear-gradient(180deg, #020617 0%, #020617 45%, #000000 100%)",
        "gradient-cyan-purple":
          "linear-gradient(90deg, #00E5FF 0%, #7C3AED 50%, #C026D3 100%)",
        "gradient-cta":
          "linear-gradient(135deg, #00E5FF 0%, #0EA5E9 50%, #2563EB 100%)",
        "card-cyan": "linear-gradient(135deg, rgba(0,229,255,0.15) 0%, rgba(15,23,42,0.9) 100%)",
        "card-purple":
          "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(15,23,42,0.95) 100%)",
        "card-multi":
          "linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(15,23,42,0.95) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 229, 255, 0.25)",
        "glow-sm": "0 0 24px rgba(0, 229, 255, 0.2)",
        "glow-purple": "0 0 32px rgba(124, 58, 237, 0.35)",
        "card-popular":
          "0 0 0 1px rgba(0, 229, 255, 0.4), 0 0 48px rgba(0, 229, 255, 0.15)",
        hero: "0 25px 80px rgba(0, 0, 0, 0.55)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        /** Seamless marquee: track is duplicated; move exactly one half (-50% own width). */
        scrollMarquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollMarqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2s ease-in-out infinite",
        "scroll-marquee": "scrollMarquee var(--marquee-duration, 40s) linear infinite",
        "scroll-marquee-reverse":
          "scrollMarqueeReverse var(--marquee-duration, 40s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
