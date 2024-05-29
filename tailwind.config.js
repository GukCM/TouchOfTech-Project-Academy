/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit-minmax": "repeat(auto-fit, minmax(200px, 1fr))",
      },
    },
  },
  plugins: [],
};
