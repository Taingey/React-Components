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
      },
      boxShadow: {
        shadowHover: [
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.2) 0px 18px 36px -18px inset"
        ],
        shadowStripe: [
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;"
        ],
        shadowRegion: ["0px 14px 5px 1px rgb(206, 220, 221)"]
      },
      backgroundColor: {
        darkGray: "#303136",
        darkBlue: "#1f2937"
      }
    },
    screens: {
      ml: { max: "780px" },
      // => @media (max-width: 1535px) { ... }

      mb: { max: "1280px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "575px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1050px" },
      // => @media (max-width: 767px) { ... }
      fb: { max: "650px" },
      sm: { max: "739px" },
      // => @media (max-width: 639px) { ... }
      pl: { max: "770px" },
      // => @media (min-width: 640px) { ... }
      xll: "1280px",
      // => @media (min-width: 1280px) { ... }
      kd: { max: "1050px" },
      // => @media (max-width: 1050px) { ... }
      kll: { max: "545px" },
      xll2: { max: "455px" }
    }
  }
};
