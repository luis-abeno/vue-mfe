import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      filename: "product-mfe-entry.js",
      name: "product-mfe",
      shared: ["vue"],
      exposes: {
        "./App": "./src/App.vue",
      },
      // remotes: {
      //   "cart-mfe": "http://localhost:3002/assets/cart-mfe-entry.js",
      // },
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    port: 3001,
  },
  preview: {
    port: 3001,
  },
});
