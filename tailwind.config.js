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
          default: "#baf5df", //custom : bg
          transparent: "#baf5df80", //custom
          100: "#defbf0", //bg
          300: "#8ee7c6", //bg
          500: "#39b98d",
          700: "#1f8c72",
          900: "#1f4d4a",
        },
        accent: {
          cyan: "#20c8f4",
          blue: "#1b73f0",
          purple: "#3c37a6",
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