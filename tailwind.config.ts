/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#FFFCF5",
        "primary-dark": "#131313",
        "beige": "#FAE6C3",
        "brown": "#9B9380"
      }
      ,

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
      md: "1075px",
      lg: "1250px",
      xl: "1600px",
      xxl: "2400px",
    },
  },
  plugins: [],
};
