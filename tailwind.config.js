/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'herrmann-red': '#ff5d73',
        'herrmann-gray': '#f3f3f3',
        'herrmann-gray-light': '#e9ecef',
        'herrmann-gray-dark': '#415a77',
        'herrmann-blue-gray': '#cadde8',
        'gradient-1': '#5390d9',
        'gradient-2': '#56cfe1',
        'gradient-3': '#72efdd'
      }
    },
  },
  plugins: [],
}