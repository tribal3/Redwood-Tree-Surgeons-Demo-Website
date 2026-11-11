/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#173B2D",
          light: "#28553B",
          dark: "#0F2A20",
        },
        sage: {
          DEFAULT: "#A8B99A",
          light: "#C7D3BC",
          dark: "#7C8F6D",
        },
        cream: {
          DEFAULT: "#F5F5EE",
          dark: "#ECEDE2",
        },
        charcoal: "#252A25",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(23, 59, 45, 0.35)",
        card: "0 24px 60px -32px rgba(23, 59, 45, 0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      letterSpacing: {
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};
