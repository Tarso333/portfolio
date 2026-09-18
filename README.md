# tarsohebert.dev.br

Portfólio pessoal de Tarso Hebert. Site estático de página única.

## Estrutura da página

Seções na ordem: Sobre, Experiência, Projetos (próprios e do trabalho), Stack e Contato.
A coluna esquerda é fixa no desktop e traz nome, cargo, navegação e contatos.

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

- **Conteúdo** (textos, experiências, métricas, projetos, stack, contato, links): `src/data/profile.ts`
  - Links no texto: `[rótulo](url)`
  - Números em destaque: `**40**`
- **Foto:** `src/assets/tarso.jpg` (retrato 4:5)
- **Imagem de compartilhamento:** `public/og.png` (1200×630). Para gerar de novo: `python scripts/gerar-og.py`
- **Currículo em PDF:** `public/curriculo-tarso-hebert.pdf`, gerado pelo script em `Documents/Feedbacks/Curriculo/gerador`
- **Tokens de cor, tipografia e raio:** `src/styles/global.css`

## Deploy

Publicado na Vercel a partir da branch `main`. Cada push gera um novo deploy.
