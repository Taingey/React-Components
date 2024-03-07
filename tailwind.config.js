/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Bebas_Neue: ["Bebas Neue"],
        Vollkorn: ["Vollkorn"],
        Satisfy: ["Satisfy"],
        Staatliches: ["Staatliches"]
      }
    },
    screens: {
      md: { max: "1050px" },
      sm: { max: "739px" },

    }
  }
};
