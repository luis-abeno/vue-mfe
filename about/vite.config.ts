import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      filename: "about-mfe-entry.js",
      name: "about-mfe",
      shared: ["vue"],
      exposes: {
        "./App": "./src/App.vue",
      },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3002,
  },
  preview: {
    port: 3002,
  },
});
