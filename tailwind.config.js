/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // button
        'Red': 'hsl(0, 100%, 68%)',
        // text
        'VeryDarkBlue': 'hsl(230, 29%, 20%)',

        'DarkGrayishBlue': 'hsl(230, 11%, 40%)',
        // text mo
        'GrayishBlue': 'hsl(231, 7%, 65%)',
        // white
        'LightGrayishBlue': 'hsl(207, 33%, 95%)'
      }
    },
  },
  plugins: [],
}