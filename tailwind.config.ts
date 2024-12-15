/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#FFFCF5",
        "primary-dark": "#131313",
        beige: "#F6E5C5",
        brown: "#C0BAAB",
        sand: "#D2C9AE",
        "light-gold": "#DFC153",
        "dark-gold": "#79692D",
      },
      fontFamily: {
        manjari: ["Manjari", "sans-serif"],
        cormorant: ["Cormorant Unicase", "serif"],
      },
      letterSpacing: {
        normal: "0.05em",
        wide: ".08em",
        wider: ".12em",
        widest: ".18em",
      },
      fontSize: {
        xxs: "0.55rem",
        "10xl": "8.5rem",
      },
      backgroundImage: (theme) => ({
        "main-section": "url('./src/assets/bg-main-section.png')",
      }),
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1024px",
      lg: "1250px",
      xl: "1600px",
      xxl: "2400px",
    },
  },
  plugins: [],
};
