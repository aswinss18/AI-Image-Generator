/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#15171E",
        bgLight: "#1C1E27",
        bgDark: "#15171E",
        primary: "#007AFF",
        secondary: "#9747FF",
        navbar: "#1C1E27",
        arrow: "#AFAFB5",
        menu_primary_text: "#F2F3F4",
        menu_secondary_text: "#b1b2b3",
        text_primary: "#F2F3F4",
        text_secondary: "#b1b2b3",
        card: "#1C1E27",
        card_light: "#191924",
        disabled: "#b1b2b3",
        shadow: "#00000060",
        white: "#FFFFFF",
        black: "#000000",
        green: "#12ff75",
        yellow: "#fccc00",
        red: "#ef5350",
        orange: "#F7AD63",
      },
    },
  },
  plugins: [],
};
