/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    "./theme.config.js",
    "./pages/styles.css",
  ],
  theme: {
    extend: {}
  },
  plugins: [],
  darkMode: 'class'
}