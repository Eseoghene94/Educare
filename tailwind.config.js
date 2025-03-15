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
          primary: "var(--primary)",
          surface: "var(--surface)",
          accent: "var(--accent)",
          success: "var(--success)",
          error: "var(--error)",
          warning: "var(--warning)",
          hover: "var(--hover)",
          border: "var(--border)",
          search: "var(--search)",
          select: "var(--select)",
          txt: {
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
            tertiary: "var(--text-tertiary)",
            accent: "var(--text-accent)",
          },
        },
      },
    },
  },
  plugins: [],
};

