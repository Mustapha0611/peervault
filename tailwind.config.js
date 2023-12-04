/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#404040',
        'secondary':'#368ABF',
        'font-color':'#f2f2f2',
        'buttonbg':'#6fa660'
      }
    },
  },
  plugins: [],
}

