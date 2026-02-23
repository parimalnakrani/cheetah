/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'antonio': ['Antonio', 'sans-serif'],
        'archivo': ['Archivo Narrow', 'sans-serif'],
      },
      colors: {
        'dark': '#111111',
        'carbon': '#0b0b0b',
      }
    },
  },
  plugins: [],
}
