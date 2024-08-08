/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'color-one': '#E63946',
        'color-two': '#F1FAEE',
        'color-three': '#A8DADC',
        'color-four': '#457B9D',
        'color-five': '#1D3557'
      },
      fontFamily: {
        "lato-regular": ["Lato-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
}

