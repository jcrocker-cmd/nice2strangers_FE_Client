/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}", // Next.js app folder
    "./components/**/*.{ts,tsx}", // All custom components
    "./src/**/*.{ts,tsx}", // Optional, if you have a src folder
  ],
  theme: {
    extend: {
      fontFamily: {
        kalam: ['"Kalam"', "cursive"],
        grotesk: ['"Space Grotesk"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        bubble: ['"ChoretBubble"', "cursive"],
      },
      colors: {
        primary: "#5b6eff",
        secondary: "#6c757d",
        tertiary: "#1e293b",
        success: "#5bb75b",
        warning: "#ffc85b",
        danger: "#ff5b5b",
        disabled: "#e5e7eb",
      },
      screens: {
        "lg-custom": "1110px",
      },
    },
  },
  plugins: [],
};
