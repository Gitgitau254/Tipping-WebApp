
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3EFFCB",
          hover: "#1fffc3",
          light: "#7CFFDE",
          dark: "#00D4A0",
          foreground: "#1A1A1A",
        },
        secondary: {
          DEFAULT: "#1A1A1A",
          hover: "#2A2A2A",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "rgba(255, 255, 255, 0.8)",
          foreground: "#1A1A1A",
          border: "rgba(62, 255, 203, 0.2)",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at top right, rgba(62, 255, 203, 0.15), rgba(255, 255, 255, 0) 50%)',
        'gradient-dots': 'radial-gradient(rgba(62, 255, 203, 0.1) 1px, transparent 1px)',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
