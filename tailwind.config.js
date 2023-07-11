/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#121F3A",
        pink: "#F73CF2",
        sky: "#46A2DE",
        blue: "#4B83F1",
        gold  : '#F5D242',
        green : ' #0EFF8D',
        error : '#E32A4F'


      },
    },
  },
  plugins: [require("daisyui")],
}

