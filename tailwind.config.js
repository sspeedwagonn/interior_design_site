/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#6d7d7d",
          "200": "#212828",
          "300": "#191d1d",
          "400": "#131616",
          "500": "rgba(255, 255, 255, 0)",
        },
        white: "#fff",
        whitesmoke: "#e9f1f1",
      },
      spacing: {},
      fontFamily: {
        kanit: "Kanit",
        nunito: "Nunito",
        "martel-sans": "'Martel Sans'",
        mitr: "Mitr",
        "alex-brush": "'Alex Brush'",
        almarai: "Almarai",
      },
      borderRadius: {
        "81xl": "100px",
        "31xl": "50px",
      },
    },
    fontSize: {
      "21xl": "40px",
      base: "16px",
      "13xl": "32px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
