/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
    container: {
      center: true,
      padding: "15px",
    },
    extend: {
      colors: {
        "primary-color": "#ff8f27",
        "header-font-color": "#151515",
        "nav-item-font-color": "#bdbdbd",
        "base-font-color": "#868686",
        "footer-font-color": "#9b9b9b",
        ...colors,
      },

      boxShadow: {
        "header-bottom-section": "0px 1px 0px 0px rgb(255 255 255 / 10%)",
        "nav-item-sub-menu": "0 0 20px 0 rgb(62 28 131 / 10%)",
        "upto-lg-screens-nav-menu": "0 0 5px rgb(0 0 0 / 30%)",
        "close-nav-menu-btn": "2px 3px 3px rgb(0 0 0 / 10%)",
        btn: "0px 5px 15px rgb(0 0 0 / 20%)",
      },
    },
  },
  plugins: [],
};
