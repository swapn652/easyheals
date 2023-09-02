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
      'lineColor': '#757575',
      'green2': '#4DAE45',
      'purple': '#9881FF',
      'cyan': '#CEEEEA'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1536px) { ... }
    }
  }
}