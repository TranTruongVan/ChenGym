/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#16873D",
        primary: "#1DB954",
        "white-1": "#e4e6eb", //text
        "black-1": "#1d232a", //background
        "black-2": "#2a323c", //items
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          secondary: "#16873D",
          primary: "#1DB954",
          tertiary: "#1B3B26",
          "white-1": "#e4e6eb", //text
          "black-1": "#1d232a", //background
          "black-2": "#2a323c", //items
          accent: "#1FB2A5",
          neutral: "#191D24",
          "base-100": "#2A303C",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
};
