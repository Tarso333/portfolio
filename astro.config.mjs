import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tarsohebert.dev.br",
  devToolbar: { enabled: false },
  // Português na raiz e inglês em /en/. Os textos de cada idioma ficam em src/i18n/.
  i18n: {
    defaultLocale: "pt",
    locales: ["pt", "en"],
    routing: { prefixDefaultLocale: false },
  },
  // Página única: CSS embutido no HTML evita uma requisição que bloqueia a renderização.
  build: { inlineStylesheets: "always" },
  vite: {
    plugins: [tailwindcss()],
  },
});
