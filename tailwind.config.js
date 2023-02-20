/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '500': '500px',
        '700': '700px',
        '300': '300px',
        '100': '100px',
        '200':'200px'
      }
    },
  },
  plugins: [],
}
