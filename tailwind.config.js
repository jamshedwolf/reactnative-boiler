/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",       // all screens
    "./components/**/*.{js,jsx,ts,tsx}", // all components
    "./navigation/**/*.{js,jsx,ts,tsx}", // if you have a navigation folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
