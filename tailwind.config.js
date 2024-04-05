/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Dark1':'#403F3F',
        'Dark2':'#706F6F',
        'Dark3':'#F3F3F3',
        'Btnbg':'#D72050'
      },
      fontFamily: {
        poppins : '"Poppins", sans-serif'
      }
    },
  },
  plugins: [require("daisyui")],
}

