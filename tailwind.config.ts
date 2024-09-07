import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./shared/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      level: {
        "100": "#D7FEC0",
        "200": "#92F05B",
        "300": "#409210",
      },
      social: {
        "100": "#85EDE7",
        "200": "#76DED8",
      },
      grayScale: {
        "100": "#F4F4F5",
        "200": "#e4e4e7",
        "300": "#d4d4d8",
        "400": "#a3a3a3",
        "500": "#71717a",
        "600": "#3F3F46",
      },
      required: "#F2501D",
      disabled: "#E4E4E7",
      pointBlue: "#2596E7",
      white: "#FFFFFF",
      black: "#000000",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        "nav-bar": "0 0px 4px 0px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
