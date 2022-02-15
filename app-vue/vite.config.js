import path from "path";
import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "design-system": path.resolve(__dirname, "./node_modules/design-system/"),
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
