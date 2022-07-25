/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "560px",
      md: "768px",
      lg: "1050px",
      xl: "1180px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        "primary-color": "#0052ff",
        "header-font-color": "#050f19",
        "base-font-color-1": "#0a0b0d",
        "base-font-color-2": "#5b616e",
        "footer-font-color": "#113355",
        ...colors,
      },

      gridTemplateColumns: {
        "nav-bar": "repeat(2, max-content)",
      },

      animation: {
        slideDown: "slideDown 0.2s cubic-bezier(0.6, 0, 0.15, 1) 1",
      },
    },
  },
  plugins: [],
};
