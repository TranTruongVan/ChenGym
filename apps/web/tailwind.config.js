/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        foreground: "var(--foreground)",
        background: "var(--background)",

        secondary: "#16873D",
        tertiary: "#1B3B26",

        muted: "var(--muted)",
        card: "var(--card)",
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
          error: "#f04438",
        },
      },
    ],
  },
};
