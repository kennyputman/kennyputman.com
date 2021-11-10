module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "fx-dark-primary": "#2b2a33",
        "fx-dark-second": "#42414d",
        "txt-emph": "#60A5FA",
        gray: {
          "dark-soft": "#9CA3AF",
          "light-soft": "#374151",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
