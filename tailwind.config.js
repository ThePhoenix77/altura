/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

const tailwindConfig = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#E50914",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#2A2A2A",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", ...fontFamily.sans],
        heading: ["var(--font-orbitron)", ...fontFamily.sans],
      },
      keyframes: {
        "slide-in": {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(229, 9, 20, 0.7)" },
          "70%": { boxShadow: "0 0 0 10px rgba(229, 9, 20, 0)" },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out forwards",
        "fade-in": "fade-in 1s ease-in-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "pulse-glow": "pulse-glow 2s infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default tailwindConfig;
