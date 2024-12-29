/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1112px",
    },
    extend: {
      colors: {
        "dark-700": "#5A6573",
        "dark-900": "#1A2B3D",
        "dark-600": "#77818C",
        "primary-500": "#1882FF",
        "cgreen-500": "#03A629",
      },
      container: {
        center: true,
      },
      boxShadow: {
        cardShadow: "0px 4px 12px 0px #00000026",
      },
      backgroundImage: {
        "discount-gradient":
          "linear-gradient(272.89deg, #FFA03B 0%, #F27D00 100%)",
      },
    },
  },
  plugins: [],
};
