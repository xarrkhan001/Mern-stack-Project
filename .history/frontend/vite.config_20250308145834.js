import { defineConfig } from "vite"; // Import defineConfig
import react from "@vitejs/plugin-react"; // Import React plugin

export default defineConfig({
  plugins: [react()], // Use the react plugin
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
  build: {
    outDir: "dist", // Use 'dist' as the output directory
  },
});
