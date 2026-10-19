import type { Content } from "./types";

// Conteúdo em português. Versão de referência: o inglês em en.ts segue esta estrutura.

export const pt: Content = {
  htmlLang: "pt-BR",
  ogLocale: "pt_BR",
  langName: "Português",
  langShort: "PT",

  meta: {
    description:
      "Tarso Hebert, desenvolvedor de software em Brasília. Back-end e automação em Python na Justiça Federal: 40 automações em produção, 370 usuários e 1,9 milhão de processos analisados.",
    jobTitle: "Desenvolvedor de Software",
    knowsAbout: ["Python", "Automação de processos (RPA)", "Selenium", "Django", "Flask", "Back-end"],
    ogImage: "/og.png",
    ogImageAlt: "Tarso Hebert, Desenvolvedor de Software. Python, Backend, Automação.",
  },

  role: "Desenvolvedor de Software",
  focus: ["Python", "Backend", "Automação"],
  tagline:
    "Desenvolvo back-end e automações que rodam em produção na Justiça Federal, do levantamento de requisitos aos testes e à sustentação.",
  location: "Brasília, DF",
  resume: "/curriculo-tarso-hebert.pdf",

  sections: [
    { id: "sobre", n: "01", label: "Sobre" },
    { id: "experiencia", n: "02", label: "Experiência" },
    { id: "projetos", n: "03", label: "Projetos" },
    { id: "stack", n: "04", label: "Stack" },
    { id: "contato", n: "05", label: "Contato" },
  ],

  // Links no texto usam a sintaxe [rótulo](url), renderizada por RichText.astro.
  about: [
    "Sou desenvolvedor de software no [Tribunal Regional Federal da 1ª Região](https://www.trf1.jus.br). Trabalho em sistemas que rodam todo dia: escrevo em Python e Selenium as automações que operam os sistemas judiciais e as aplicações web que entregam essas automações a quem usa.",
    "Levanto o requisito com quem vive o problema, quase sempre fora da área técnica, e traduzo a rotina em especificação. O resto é engenharia: testes, revisão de código e sustentação do que já está em produção. Confiabilidade é o critério que uso para decidir — uma automação que falha de vez em quando devolve o trabalho que deveria ter tirado.",
    "Curso Ciência da Computação na [Universidade Católica de Brasília](https://ucb.catolica.edu.br), com conclusão prevista para 2027, e mantenho projetos próprios fora do trabalho: o [APROVA](https://github.com/Tarso333/ConcursoSedesDF), plataforma desktop de estudos para concursos, e o [PropostaJá](https://github.com/Tarso333/propostaja), app de orçamentos para autônomos.",
  ],

  portrait: {
    alt: "Foto de Tarso Hebert, sorrindo, de camisa escura",
    caption: "Brasília, DF",
  },

  experience: [
    {
      period: "mai 2026 — atual",
      role: "Desenvolvedor de Software",
      company: "TRF1",
      companyUrl: "https://www.trf1.jus.br",
      via: "G&E Serviços Terceirizados",
      location: "Brasília, DF",
      summary:
        "Desenvolvo e sustento a suíte de automação do tribunal, que opera o sistema judicial PJe em 13 estados e no Distrito Federal, e aplicações web que entregam essas automações às áreas usuárias.",
      metrics: [
        { value: "40", label: "automações em produção" },
        { value: "370", label: "usuários atendidos" },
        { value: "1,9 mi", label: "processos analisados" },
        { value: "97,32%", label: "de sucesso em 15 mil execuções" },
      ],
      highlights: [
        "Reduzi falhas intermitentes de **~50%** para **~9%** com sincronização baseada em estado e suítes em pytest com até **99%** de cobertura.",
        "Integrei o Google Gemini à análise de documentos e levei a triagem de **20 min** para **1 min**.",
        "Criei a automação que extrai dados de processos para planilhas, usada por **35** pessoas em **~100** processos por dia.",
        "Mantenho a biblioteca interna de RPA reutilizada por mais de **50** robôs e o RPAHub, catálogo da suíte em Flask.",
        "No SILVA 1G, sistema de apoio à decisão judicial com IA, atuo com Django REST Framework e Next.js.",
      ],
      quote: {
        text: "Acabei de testar o RPA e foi 100% de sucesso, funcionando perfeitamente.",
        source: "Usuária do robô de pagamento de perícias",
      },
      stack: ["Python", "Selenium", "Flask", "Django", "pytest", "SonarQube", "Docker", "GitLab CI", "Gemini"],
    },
    {
      period: "mar — abr 2026",
      role: "Estagiário de TI, Automação",
      company: "TRF1",
      companyUrl: "https://www.trf1.jus.br",
      via: "CIEE",
      location: "Brasília, DF",
      summary:
        "Entrei na equipe de automação apoiando o desenvolvimento de robôs em Python e Selenium e fui efetivado como desenvolvedor em dois meses.",
      highlights: [],
      stack: ["Python", "Selenium"],
    },
    {
      period: "jan 2022 — set 2023",
      role: "Aprendiz Administrativo, Dados e Operações",
      company: "Grupo Petrópolis",
      location: "Bom Jesus da Lapa, BA",
      summary:
        "Apoio à análise de dados logísticos e ao planejamento e controle da produção em uma planta industrial de grande porte, com participação em iniciativas de automação de estoque e rastreabilidade.",
      highlights: [],
      stack: ["Análise de dados", "PCP", "Logística"],
    },
  ],

  projectGroups: [
    {
      id: "proprios",
      label: "Projetos próprios",
      note: "Produtos que desenho e desenvolvo do zero, fora do ambiente corporativo.",
    },
    {
      id: "trabalho",
      label: "No TRF1",
      note: "Sistemas internos do tribunal: sem link público, porque o código e o acesso são restritos.",
    },
  ],

  projects: [
    {
      group: "trabalho",
      name: "Testes automatizados da suíte de RPA",
      kind: "Qualidade",
      year: 2026,
      context: "Interno · TRF1",
      description:
        "Criei as suítes de testes e a análise no SonarQube de mais de **20** robôs, com mais de **800** testes, entre eles registrar voto, pagamento de perícias, busca de termos, preparar RPV, triagem com Gemini, leitura de PDF, baixa de peças e download de processos.",
      stack: ["pytest", "SonarQube", "GitLab CI"],
    },
    {
      group: "trabalho",
      name: "Consulta processual 1º e 2º grau",
      kind: "RPA",
      year: 2026,
      context: "Interno · TRF1",
      description:
        "Criei o robô que recebe uma planilha de processos, consulta cada um no PJe de 1º e 2º grau em sessões paralelas e entrega um único Excel consolidado com status, órgão julgador e data da última movimentação.",
      stack: ["Python", "Selenium", "openpyxl"],
    },
    {
      group: "trabalho",
      name: "Registrar voto",
      kind: "RPA",
      year: 2026,
      context: "Interno · TRF1",
      description:
        "Desenvolvo o robô que registra e libera votos no PJe: preenche tipo, modelo e movimento processual, etiqueta e encaminha cada processo para a pauta virtual. Suíte com **299** testes e **100%** de cobertura.",
      stack: ["Python", "Selenium", "pytest", "SonarQube"],
    },
    {
      group: "trabalho",
      name: "Pagamento de perícias",
      kind: "RPA",
      year: 2026,
      context: "Interno · TRF1",
      description:
        "Desenvolvo o robô que lê as etiquetas dos processos no PJe e cria as solicitações de pagamento de peritos no AJG, estável em lotes grandes e com processos sigilosos. Suíte com **115** testes e **99%** de cobertura.",
      stack: ["Python", "Selenium", "pandas", "pytest"],
    },
    {
      group: "proprios",
      name: "APROVA",
      kind: "Desktop",
      year: 2026,
      context: "Projeto pessoal",
      description:
        "Plataforma offline-first de preparação para concursos: simulados no formato da banca, flashcards com revisão espaçada, importador de editais em PDF e um tutor de IA que roda localmente. As regras de negócio têm **84** testes.",
      stack: ["Electron", "React", "TypeScript", "SQLite", "Drizzle"],
      href: "https://github.com/Tarso333/ConcursoSedesDF",
      hrefKind: "repo",
    },
    {
      group: "proprios",
      name: "PropostaJá",
      kind: "Mobile",
      year: 2026,
      context: "Desenvolvimento Mobile, UCB",
      description:
        "App para autônomos montarem orçamentos em PDF e enviarem pelo WhatsApp ainda na casa do cliente. Funciona **100%** offline, com SQLite local e valores em centavos para evitar erro de arredondamento.",
      stack: ["React Native", "Expo", "TypeScript", "SQLite"],
      href: "https://github.com/Tarso333/propostaja",
      hrefKind: "repo",
    },
    {
      group: "proprios",
      name: "API Monitor",
      kind: "Web",
      year: 2025,
      context: "Residência Tecnológica Porto Digital",
      description:
        "Dashboard de monitoramento de APIs públicas feito em equipe de **9** pessoas. Fiquei com o back-end e a observabilidade: endpoints em Express, ambiente em Docker Compose e métricas de latência no Dynatrace.",
      stack: ["Node.js", "Express", "React", "Docker Compose", "Dynatrace"],
      href: "https://api-monitor-alpha.vercel.app",
      hrefKind: "demo",
    },
  ],

  // Apenas tecnologias que aparecem na experiência ou nos projetos deste site.
  stack: [
    {
      label: "Back-end",
      items: ["Python", "Django", "Django REST Framework", "Flask", "SQLAlchemy", "Node.js", "APIs REST"],
    },
    { label: "Automação", items: ["Selenium", "RPA", "web scraping", "pandas", "openpyxl", "PyInstaller"] },
    { label: "Front-end", items: ["React", "Next.js", "TypeScript", "Astro", "Tailwind CSS"] },
    { label: "Dados", items: ["PostgreSQL", "SQLite", "Redis", "Drizzle ORM"] },
    { label: "Qualidade", items: ["pytest", "SonarQube", "code review", "Conventional Commits"] },
    { label: "DevOps", items: ["AWS", "Docker", "Docker Compose", "GitLab CI", "Nginx", "Git", "Linux"] },
    { label: "IA aplicada", items: ["Google Gemini", "classificadores de documentos", "Ollama"] },
  ],

  certifications: {
    label: "Certificações",
    items: [
      { name: "Cloud Foundations", issuer: "AWS Academy", date: "out 2026", url: "https://www.credly.com/go/MJZVGo2W" },
      { name: "Cloud Security Foundations", issuer: "AWS Academy", date: "out 2026", url: "https://www.credly.com/go/JyCUB5uK" },
      { name: "Docker: Ferramenta essencial para Desenvolvedores", issuer: "Udemy", date: "ago 2026", url: "https://ude.my/UC-33779b30-6934-4620-a21d-33de734d78db" },
      { name: "Selenium + Python para Web Scraping e Automação", issuer: "Udemy", date: "jun 2026", url: "https://ude.my/UC-654b973f-6173-4b46-86a4-b0b1c4d5d08d" },
      { name: "Ciclo TakeOff: IA, Prompt Engineering, DevOps e Docker", issuer: "Rocketseat", date: "abr 2026" },
      { name: "Programação Python do Zero à Inteligência Artificial", issuer: "Udemy", date: "abr 2026", url: "https://ude.my/UC-ebc37e0a-f3be-4df2-b4d5-88a2d85226d1" },
      { name: "JavaScript do básico ao avançado com Node.js", issuer: "Udemy", date: "fev 2026", url: "https://ude.my/UC-d6113768-9dc8-4b1a-8205-3c7afc8c772e" },
    ],
  },

  contact: {
    intro:
      "Aberto a conversas sobre back-end, automação e confiabilidade de sistemas. O caminho mais direto é o e-mail.",
  },

  ui: {
    mainId: "conteudo",
    skipToContent: "Pular para o conteúdo",
    navLabel: "Seções",
    contactsLabel: "Contato e preferências",
    langGroupLabel: "Idioma",
    resume: "Currículo",
    resumeLong: "Currículo em PDF",
    email: "E-mail",
    newTab: "abre em nova aba",
    pdfNewTab: "PDF, abre em nova aba",
    repoHint: "abre o repositório no GitHub em nova aba",
    demoHint: "abre a demo em nova aba",
    demoBadge: "demo no ar",
    allProjects: "Ver todos os projetos no GitHub",
    techLabel: "Tecnologias",
    verifyHint: "verificar certificado, abre em nova aba",
    themeToggle: "Alternar tema",
    themeToLight: "Mudar para o tema claro (atual: escuro)",
    themeToDark: "Mudar para o tema escuro (atual: claro)",
    colophon: "Site estático em Astro e Tailwind CSS, com tipografia IBM Plex, publicado na Vercel.",
    notFound: {
      code: "Erro 404",
      title: "Página não encontrada",
      text: "Este endereço não existe ou mudou de lugar.",
      back: "Voltar para o início",
      navLabel: "Seções do site",
    },
  },
};
