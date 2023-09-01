/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  theme: {
    colors: {
      'buttonColor': '#EA4E24',
      'white': 'white',
      'underlineColor': '#EA4E24',
      'indigo-600': 'indigo',
      'green': 'green',
      'lineColor': '#757575'
    }
  }
}