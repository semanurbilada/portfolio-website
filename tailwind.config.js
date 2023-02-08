/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1080px",
      "2xl": "1294px",
      "3xl": "1921px",
      "4xl": "2880px"
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
        },
      },
      colors: {
        greenery: {
          default: "#aef9e0", //background color
          transparent: "#aef9e080",
          100: '#d1fae5',
          300: '#6ee7b7',
          500: '#10b981', 
          700: '#047857',
          900: '#134e4a'
        },
        gray: {
          400: "#73787c",
          800: "#393d40",
        },
      },
    },
  },
  plugins: [],
}