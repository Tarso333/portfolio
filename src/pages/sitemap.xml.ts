import type { APIRoute } from "astro";
import { getContent, homePath, languages } from "../i18n";

// Uma URL por idioma, cada uma listando a outra como versão alternativa (hreflang).
export const GET: APIRoute = ({ site }) => {
  const alternates = languages
    .map((lang) => {
      const href = new URL(homePath(lang), site).href;
      return `    <xhtml:link rel="alternate" hreflang="${getContent(lang).htmlLang}" href="${href}"/>`;
    })
    .join("\n");

  const urls = languages
    .map((lang) => `  <url>\n    <loc>${new URL(homePath(lang), site).href}</loc>\n${alternates}\n  </url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
