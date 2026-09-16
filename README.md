# tarsohebert.dev.br

Portfólio pessoal de Tarso Hebert. Site estático de página única.

## Stack

- [Astro 5](https://astro.build) (saída estática)
- [Tailwind CSS 4](https://tailwindcss.com), com tema restrito em `src/styles/global.css`
- Tipografia IBM Plex Sans e Plex Mono via Fontsource

## Desenvolvimento

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o build localmente
```

## Onde editar

- **Conteúdo** (textos, experiências, projetos, links): `src/data/profile.ts`
  - Links no texto: `[rótulo](url)`
  - Números em destaque: `**40**`
- **Foto:** `src/assets/tarso.jpg` (retrato 4:5)
- **Imagem de compartilhamento:** `public/og.png` (1200×630, arquivo estático; precisa ser gerada de novo se os números do resumo mudarem)
- **Tokens de cor, tipografia e raio:** `src/styles/global.css`

## Deploy

Publicado na Vercel a partir da branch `main`. Cada push gera um novo deploy.
