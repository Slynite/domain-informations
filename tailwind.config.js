/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            gradient: {
              primary: "#23B4E8",
              secondary: "#2AF598",
            },
          },
      },
    },
    plugins: [],
  }