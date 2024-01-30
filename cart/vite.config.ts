import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      filename: "cart-mfe-entry.js",
      name: "cart-mfe",
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
    port: 3003,
  },
  preview: {
    port: 3003,
  },
});
