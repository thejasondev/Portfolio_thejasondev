/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{astro,html,js,ts,tsx}",
    "./src/components/**/*.astro",
    "./src/layouts/**/*.astro",
    "./src/pages/**/*.astro",
  ],
  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter Variable", "sans-serif"],
        heading: ["Playfair Display", "serif"],
        body: ["Inter Variable", "sans-serif"],
      },
      colors: {
        // Paleta corporativa: azul marino (ink) + azul acero (accent)
        // Consistente con las CSS variables de global.css
        ink: {
          DEFAULT: "#0B1B33",
          soft: "#1E293B",
        },
        accent: {
          DEFAULT: "#2F5D9F",
          light: "#DCE6F3",
          dark: "#1E3F73",
          soft: "#8FB0DD", // para texto sobre fondos oscuros
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
