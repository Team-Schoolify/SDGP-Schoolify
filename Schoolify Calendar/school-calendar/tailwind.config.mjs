const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.css", 
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        "custom-dark": "0px 4px 6px rgba(0, 0, 0, 0.7)", 
      },
    },
  },
  darkMode: "class", 
  plugins: [
    heroui(),
    require("@tailwindcss/forms"), 
    require("@tailwindcss/typography"),
  ],
};
