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
        background: "#0b0b0b",
        foreground: "#FFFFFF",
        primary: {
          50: "#fff2f2",
          100: "#ffd6d6",
          200: "#ffb3b3",
          300: "#ff8f8f",
          400: "#ff6b6b",
          DEFAULT: "#E50914",
          600: "#c40711",
          700: "#9a060f",
          800: "#70040b",
          900: "#470308",
          foreground: "#FFFFFF",
        },
        neutral: {
          50: "#f8f9fa",
          100: "#f1f3f5",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
          500: "#adb5bd",
          600: "#868e96",
          700: "#495057",
          800: "#343a40",
          900: "#212529",
        },
        secondary: {
          DEFAULT: "#1f1f1f",
          foreground: "#FFFFFF",
        },
      },
      backgroundImage: {
        'radial-hero': 'radial-gradient(80% 80% at 10% 20%, rgba(229,9,20,0.06), transparent 30%), radial-gradient(60% 60% at 90% 80%, rgba(255,255,255,0.02), transparent 30%)',
        'diagonal-lines': 'linear-gradient(135deg, rgba(255,255,255,0.02) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.02) 25%, transparent 25%)',
      },
      spacing: {
        7: "1.75rem",
        9: "2.25rem",
        18: "4.5rem",
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
      },
      boxShadow: {
        smSoft: "0 6px 20px rgba(0,0,0,0.4)",
        elevated: "0 20px 40px rgba(0,0,0,0.5)",
      },
      fontSize: {
        display: ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        '2xl-tight': ["2.25rem", { lineHeight: "1.04" }],
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
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0)" },
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
        float: "float 6s ease-in-out infinite",
        "fade-in": "fade-in 1s ease-in-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "pulse-glow": "pulse-glow 2s infinite",
        aurora: "aurora 90s linear infinite",
      },
      keyframes: {
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [tailwindcssAnimate, addVariablesForColors],
  safelist: [
    // ensure animation delay utilities are generated
    "animate-delay-0",
    "animate-delay-100",
    "animate-delay-200",
    "animate-delay-300",
    "animate-delay-400",
    "animate-delay-500",
    "animate-delay-600",
  ],
};

export default tailwindConfig;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  // Flatten nested color objects into key-value pairs like 'primary-100': '#fff'
  function flatten(prefix, obj, res = {}) {
    Object.entries(obj).forEach(([k, v]) => {
      const key = prefix ? `${prefix}-${k}` : k;
      if (typeof v === "string") res[key] = v;
      else flatten(key, v, res);
    });
    return res;
  }

  const allColors = flatten("", theme("colors"));
  const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({ 
    ':root': newVars,
  });
}
