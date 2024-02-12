/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Condensed: ["Roboto Condensed", "sans-serif"],
        Anton: ["Anton", "Sans-serif"],
      },
    },
  },
  plugins: [],
};
