/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0000FF',
        'primary-dark': '#0000CC',
        'primary-light': '#3333FF',
      },
    },
  },
  plugins: [],
}
