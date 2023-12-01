/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight:{
        topbarHeight: '4.2rem'
      }
    },
  },
  plugins: [],
}