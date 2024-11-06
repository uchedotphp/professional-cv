/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      heebo: ["Heebo", "sans-serif"],
    },
    fontSize: {
      sm: ["14px", "21px"],
      base: ["16px", "24px"],
      xmd: ["18px", "26px"],
      md: ["20px", "29px"],
      lmd: ["22px", "60px"],
      lg: ["26px", "38px"],
      xl: ["44px", "60px"],
    },
    backgroundColor: {
      "light-blue": "#EDF7FA",
      "light-red": "#FF6464",
    },
    colors: {
      black: "#000000",
      noir: "#21243D",
      white: "#FFFFFF",
      grey: "#8695A4",
      red: "#FF6464",
      "deep-blue": "#142850",
    },
    extend: {},
  },
  plugins: [],
};
