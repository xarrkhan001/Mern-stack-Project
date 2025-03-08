import { defineConfig } from "vite"; // Import defineConfig

export default defineConfig({
  plugins: [react()],
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
