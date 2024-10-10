/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens : {
        '900px': '900px',
      },
      fontFamily: {
        mont: ["Montserrat"],
        lexend: ["Lexend"],
      },
      colors: {
        primary: "#7CD466",
        white: "#FFFFFF",
        black: "#020202",
        red: "#F57C7C",
        grey: "#828282",
        inputBorder: "#DDDDDD",
        categoryColor: "#F7FBFB",
      },
    },
    boxShadow: {
      custom:
        "0 1px 3px 0 rgba(47, 43, 67, .1), inset 0 -1px 0 0 rgba(47, 43, 67, .1)",
    },
    backgroundImage: {
      blurImage: "url('/assets/imgs/homeImgBlur.png')",
    },
  },
  fontSize: {
    // Tailles de police personnalisées
    xs: ["0.75rem", { lineHeight: "1rem" }], // 12px
    sm: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
    base: ["1rem", { lineHeight: "1.5rem" }], // 16px
    lg: ["1.125rem", { lineHeight: "1.75rem" }], // 18px
    xl: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
    "2xl": ["1.5rem", { lineHeight: "2rem" }], // 24px
    "3xl": ["1.875rem", { lineHeight: "2.25rem" }], // 30px
    "4xl": ["2.25rem", { lineHeight: "2.5rem" }], // 36px
    "5xl": ["3rem", { lineHeight: "1" }], // 48px
    "6xl": ["3.75rem", { lineHeight: "1" }], // 60px
    "7xl": ["4.5rem", { lineHeight: "1" }], // 72px
  },
  container: {
    center: true, // Centre le conteneur sur tous les écrans
    padding: {
      xs: "1rem", // Padding par défaut pour tous les écrans
      sm: "2rem", // Padding pour les écrans `sm` (640px et plus)
      md: "2rem", // Padding pour les écrans `md` (768px et plus)
      lg: "4rem", // Padding pour les écrans `lg` (1024px et plus)
      xl: "5rem", // Padding pour les écrans `xl` (1280px et plus)
      "2xl": "6rem", // Padding pour les écrans `2xl` (1536px et plus)
    },
  },
  plugins: [],
};
