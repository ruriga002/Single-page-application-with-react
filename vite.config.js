import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // FIXED: must match your repo name exactly
  base: "/Single-page-application-with-react/",

  test: {
    globals: true,
    environment: "jsdom"
  }
});