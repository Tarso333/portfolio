# tarsohebert.dev.br

Portfólio pessoal de Tarso Hebert. Site estático de página única, em português (`/`) e inglês (`/en/`).

## Estrutura da página

Seções na ordem: Sobre, Experiência, Projetos (próprios e do trabalho), Stack e Contato.
A coluna esquerda é fixa no desktop e traz nome, cargo, navegação, contatos e os seletores de idioma (PT / EN) e tema.
A troca de idioma mantém a seção em que o visitante está (`/#projetos` → `/en/#projects`).

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

- **Textos do site** (experiências, métricas, projetos, stack, contato, rótulos da interface): `src/i18n/pt.ts` e `src/i18n/en.ts`
  - Os dois arquivos seguem o tipo `Content` de `src/i18n/types.ts`: um campo que falte em uma tradução quebra o build
  - Links no texto: `[rótulo](url)`
  - Números em destaque: `**40**`
- **Dados que não mudam com o idioma** (nome, e-mail, GitHub, LinkedIn): `src/data/profile.ts`
- **Foto:** `src/assets/tarso.jpg` (retrato 4:5)
- **Imagens de compartilhamento:** `public/og.png` e `public/og-en.png` (1200×630). Para gerar de novo: `python scripts/gerar-og.py`
- **Currículos em PDF:** `public/curriculo-tarso-hebert.pdf` e `public/resume-tarso-hebert.pdf`, ambos sem telefone,
  gerados pelos scripts em `Documents/Feedbacks/Curriculo/gerador` (`gerar_curriculos.py` e `gerar_curriculo_en.py`)
- **Tokens de cor, tipografia e raio:** `src/styles/global.css`

## Deploy

Publicado na Vercel a partir da branch `main`. Cada push gera um novo deploy.
