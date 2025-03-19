/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        clr: {
          background: "var(--background)",
          secondary: "var(--secondary-background)",
          primary: "var(--primary)",
        },
      },
    },
  },
  plugins: [],
};
