import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    preset: "netlify",
  },
  vite: {
    plugins: [tailwindcss(), tsConfigPaths()],
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
