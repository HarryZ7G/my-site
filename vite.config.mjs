import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-site/", // Base path for the application
  plugins: [react()],
  build: {
    outDir: "build", // CRA's default build output
  },
});
