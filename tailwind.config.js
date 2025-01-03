const { addIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"]
      }
    },
  },
  plugins: [
    addIconSelectors(["solar", "basil", "fontisto"]),
  ],
}