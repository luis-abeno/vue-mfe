import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "root-app",
      filename: "root-app-entry.js",
      shared: ["vue"],
      remotes: {
        "product-mfe": "http://localhost:3001/dist/assets/product-mfe-entry.js",
        "about-mfe": "http://localhost:3002/dist/assets/about-mfe-entry.js",
        "cart-mfe": "http://localhost:3003/dist/assets/cart-mfe-entry.js",
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
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
