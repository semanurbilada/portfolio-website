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
      xl: "1080px", //dene!
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
      'animation': {
        'gradient-x':'gradient-x 6s ease infinite',
      },
      'keyframes': {
        'gradient-x': {
          '0%, 100%': {
            'background-size':'400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size':'200% 200%',
            'background-position': 'right center'
          }
        }
      },
      colors: {
        greenery: {
          default: "#aef9e0", //custom : bg
          transparent: "#aef9e080", //custom
          100: '#d1fae5', //bg
          300: '#6ee7b7', //bg
          500: '#10b981',
          700: '#047857',
          900: '#134e4a'
        },
        gray: {
          400: "#73787c",
          800: "#393d40",
        },
      },
      fontFamily: {
        fira: ["Fira Code", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        '3xl': 'inset 0 35px 60px -15px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [],
}