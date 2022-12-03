/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'herrmann-red': '#FE5F55',
        'herrmann-gray': '#FFFFFF',
        'herrmann-gray-light': '#e9ecef',
        'herrmann-gray-dark': '#495867',
        'herrmann-blue-gray': '#cadde8',
        'gradient-1': '#F7F7FF',
        'gradient-2': '#BDD5EA',
        'gradient-3': '#5DA9E9'
      }
    },
  },
  plugins: [],
}