// Fonte única de conteúdo do site. Layout e componentes só leem daqui.

export const profile = {
  name: "Tarso Hebert",
  fullName: "Tarso Hebert Camilo Vieira",
  role: "Desenvolvedor de Software",
  focus: ["Python", "Automação", "Back-end"],
  tagline:
    "Construo robôs e sistemas para a Justiça Federal. A suíte em que trabalho tem 40 automações em produção, usadas por 370 pessoas.",
  location: "Brasília, DF",
  email: "tarsohebert.ti@outlook.com",
  links: {
    github: "https://github.com/Tarso333",
    linkedin: "https://www.linkedin.com/in/tarso-hebert/",
  },
};

export const sections = [
  { id: "sobre", n: "01", label: "Sobre" },
  { id: "experiencia", n: "02", label: "Experiência" },
  { id: "projetos", n: "03", label: "Projetos" },
] as const;

export type SectionId = (typeof sections)[number]["id"];

// Links no texto usam a sintaxe [rótulo](url), renderizada por RichText.astro.
export const about = [
  "Sou desenvolvedor de software no [Tribunal Regional Federal da 1ª Região](https://www.trf1.jus.br), na equipe que automatiza o trabalho judicial. Escrevo robôs em Python e Selenium que operam o PJe em 13 estados e no Distrito Federal, e aplicações web que colocam essas automações nas mãos de quem precisa delas.",
  "Me importo com confiabilidade. Uma automação que falha de vez em quando gera mais trabalho do que economiza, então invisto em testes, sincronização baseada em estado e revisão de código. Também gosto da parte menos técnica: sentar com as áreas usuárias e transformar uma rotina jurídica em especificação.",
  "Curso Ciência da Computação na [Universidade Católica de Brasília](https://ucb.catolica.edu.br), com conclusão prevista para 2027. Nas horas livres, desenvolvo projetos próprios, como o [APROVA](https://github.com/Tarso333/ConcursoSedesDF), plataforma desktop de estudos para concursos, e o [PropostaJá](https://github.com/Tarso333/propostaja), app de orçamentos para profissionais autônomos.",
];

export const portrait = {
  alt: "Foto de Tarso Hebert, sorrindo, de camisa escura",
  caption: "Brasília, DF",
};

// Em textos de experiência, **trecho** destaca uma métrica (RichText.astro).
export type Experience = {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  via?: string;
  location: string;
  summary: string;
  highlights: string[];
  // Depoimento autorizado, sem identificar a pessoa. Texto literal, sem destaques.
  quote?: { text: string; source: string };
  stack: string[];
};

export const experience: Experience[] = [
  {
    period: "mai 2026 — atual",
    role: "Desenvolvedor de Software",
    company: "TRF1",
    companyUrl: "https://www.trf1.jus.br",
    via: "G&E Serviços Terceirizados",
    location: "Brasília, DF",
    summary:
      "Suíte de automação do tribunal: **40** robôs em produção, **370** usuários e mais de **1,9 milhão** de processos analisados, com **97,32%** de sucesso em 15 mil execuções.",
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
];

export type Project = {
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

export const projects: Project[] = [
  {
    name: "Testes automatizados da suíte de RPA",
    kind: "Qualidade",
    year: 2026,
    context: "Interno · TRF1",
    description:
      "Criei as suítes de testes e a análise no SonarQube de mais de **20** robôs, com mais de **800** testes, entre eles registrar voto, pagamento de perícias, busca de termos, preparar RPV, triagem com Gemini, leitura de PDF, baixa de peças e download de processos.",
    stack: ["pytest", "SonarQube", "GitLab CI"],
  },
  {
    name: "Consulta processual 1º e 2º grau",
    kind: "RPA",
    year: 2026,
    context: "Interno · TRF1",
    description:
      "Criei o robô que recebe uma planilha de processos, consulta cada um no PJe de 1º e 2º grau em sessões paralelas e entrega um único Excel consolidado com status, órgão julgador e data da última movimentação.",
    stack: ["Python", "Selenium", "openpyxl"],
  },
  {
    name: "Registrar voto",
    kind: "RPA",
    year: 2026,
    context: "Interno · TRF1",
    description:
      "Desenvolvo o robô que registra e libera votos no PJe: preenche tipo, modelo e movimento processual, etiqueta e encaminha cada processo para a pauta virtual. Suíte com **299** testes e **100%** de cobertura.",
    stack: ["Python", "Selenium", "pytest", "SonarQube"],
  },
  {
    name: "Pagamento de perícias",
    kind: "RPA",
    year: 2026,
    context: "Interno · TRF1",
    description:
      "Desenvolvo o robô que lê as etiquetas dos processos no PJe e cria as solicitações de pagamento de peritos no AJG, estável em lotes grandes e com processos sigilosos. Suíte com **115** testes e **99%** de cobertura.",
    stack: ["Python", "Selenium", "pandas", "pytest"],
  },
  {
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
];

export const education = {
  course: "Bacharelado em Ciência da Computação",
  school: "Universidade Católica de Brasília",
  status: "6º semestre, conclusão prevista para 2027",
};

export const certifications = [
  { name: "Docker", issuer: "Udemy", year: 2026 },
  { name: "Selenium + Python para Web Scraping e Automação", issuer: "Udemy", year: 2026 },
  { name: "JavaScript com Node.js", issuer: "Udemy", year: 2025 },
  { name: "Python, Machine Learning e Automação", issuer: "Udemy", year: 2025 },
];
