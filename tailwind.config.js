/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clr: {
          base: "var(--base)",
          background: "var(--background)",
          secondary: "var(--secondary-background)",
        },
      },
    },
  },
  plugins: [],
};
