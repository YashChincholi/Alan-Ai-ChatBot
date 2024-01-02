/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        10: "10px",
      },
      colors: {
        "neon-blue": "#22289a",
      },
    },
  },
  plugins: [],
};
