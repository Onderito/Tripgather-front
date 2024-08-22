/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        mont: ["Montserrat"],
        lexend: ["Lexend"],
      },
      colors: {
        primary: "#7CD466",
        white : "FFFFFF",
        black : "020202",
        red : "F57C7C",
        grey : "828282",
        inputBorder : "CCCCCC",
        categoryColor : "F7FBFB"
      },
    },
  },
  plugins: [],
};

