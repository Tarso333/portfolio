import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tarsohebert.dev.br",
  devToolbar: { enabled: false },
  // Página única: CSS embutido no HTML evita uma requisição que bloqueia a renderização.
  build: { inlineStylesheets: "always" },
  vite: {
    plugins: [tailwindcss()],
  },
});
