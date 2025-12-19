/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "ui-sans-serif", "SF Pro Text", "Inter", "sans-serif"],
        serif: ["\"Iowan Old Style\"", "Georgia", "serif"],
      },
      colors: {
        brand: {
          50: "#f5f3ff",
          100: "#ede9fe",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
        },
      },
      boxShadow: {
        "soft-xl": "0 24px 60px rgba(15,23,42,0.65)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};


