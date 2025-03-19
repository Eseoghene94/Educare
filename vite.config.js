import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures assets are loaded from the root URL
  build: {
    outDir: "dist", // Default output directory
  },
});
