/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heading: "'Oswald', sans-serif",
        subheading: "'Parisienne', cursive",
        body: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [],
}

