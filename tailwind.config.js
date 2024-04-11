/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        desktop: "url('/src/assets/images/background-pattern-desktop.svg')",
        mobile: "url('/src/assets/images/background-pattern-mobile.svg')",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      colors:{
        purple:'#2f1533',
        lightPurple:'#8c6991'
      },
      screens:{
        mobile:{'max':'375px'}
      }
    },
  },
  plugins: [],
};
