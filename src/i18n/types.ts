// Contrato do conteúdo do site. Cada idioma em src/i18n/ preenche este mesmo formato,
// então um campo esquecido em uma tradução vira erro de tipo no build.

export type Lang = "pt" | "en";

export type Section = { id: string; n: string; label: string };

// Em textos longos, **trecho** destaca uma métrica e [rótulo](url) vira link (RichText.astro).
export type Experience = {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  via?: string;
  location: string;
  summary: string;
  // Números de impacto exibidos em destaque no topo do cargo.
  metrics?: { value: string; label: string }[];
  highlights: string[];
  // Depoimento autorizado, sem identificar a pessoa. Texto literal, sem destaques.
  quote?: { text: string; source: string };
  stack: string[];
};

export type ProjectGroupId = "proprios" | "trabalho";

export type Project = {
  group: ProjectGroupId;
  name: string;
  kind: string;
  year: number;
  context: string;
  description: string;
  stack: string[];
  // Destino do card inteiro: repositório no GitHub ou versão publicada.
  // Projetos internos do TRF1 não têm link público: o card fica sem hover e sem seta.
  href?: string;
  hrefKind?: "repo" | "demo";
};

export type Content = {
  htmlLang: string;
  ogLocale: string;
  // Nome do idioma na própria língua, para o seletor e para o atributo lang do link.
  langName: string;
  // Rótulo curto do seletor de idioma.
  langShort: string;

  meta: {
    description: string;
    /** Rótulo do cargo no JSON-LD e no título da página. */
    jobTitle: string;
    knowsAbout: string[];
    ogImage: string;
    ogImageAlt: string;
  };

  role: string;
  focus: string[];
  tagline: string;
  location: string;
  // Currículo em PDF do idioma, servido de public/.
  resume: string;

  sections: Section[];
  about: string[];
  portrait: { alt: string; caption: string };
  experience: Experience[];
  projectGroups: { id: ProjectGroupId; label: string; note: string }[];
  projects: Project[];
  stack: { label: string; items: string[] }[];
  contact: { intro: string };

  ui: {
    mainId: string;
    skipToContent: string;
    navLabel: string;
    contactsLabel: string;
    langGroupLabel: string;
    resume: string;
    resumeLong: string;
    email: string;
    newTab: string;
    pdfNewTab: string;
    repoHint: string;
    demoHint: string;
    demoBadge: string;
    allProjects: string;
    techLabel: string;
    themeToggle: string;
    themeToLight: string;
    themeToDark: string;
    colophon: string;
    notFound: {
      code: string;
      title: string;
      text: string;
      back: string;
      navLabel: string;
    };
  };
};
