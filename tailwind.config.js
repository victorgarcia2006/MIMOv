/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#5B7A99",
        "primary-light": "#B7C9DA",
        "primary-dark": "#4A6580",
        secondary: "#F0E4D4",
        accent: "#9C1710",
        "accent-soft": "#E8D573",
        base: "#FBF8F4",
        ink: "#2B2622",
        "ink-muted": "#6B6259",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],

  corePlugins: {
    preflight: false,
  },
};
