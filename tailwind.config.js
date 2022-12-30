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
        'white-gray': '#F2F3F5',
        'gradient-1': '#ffffff',
        'gradient-2': '#788bff',
        'gradient-3': '#adb5bd',
        'gradient-4': '#adb5bd'
      }
    },
  },
  plugins: [],
}