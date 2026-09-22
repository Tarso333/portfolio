import type { Content } from "./types";

// Conteúdo em inglês, para recrutadores de fora. Mesma estrutura do pt.ts, com contexto
// extra onde um leitor estrangeiro não conhece o termo (TRF1, PJe, AJG).

export const en: Content = {
  htmlLang: "en",
  ogLocale: "en_US",
  langName: "English",
  langShort: "EN",

  meta: {
    description:
      "Tarso Hebert, software engineer in Brasília, Brazil. Python backend and automation for the federal judiciary: 40 bots in production, 370 users and 1.9 million case files analyzed.",
    jobTitle: "Software Engineer",
    knowsAbout: ["Python", "Robotic process automation (RPA)", "Selenium", "Django", "Flask", "Backend development"],
    ogImage: "/og-en.png",
    ogImageAlt: "Tarso Hebert, Software Engineer. Python, Backend, Automation.",
  },

  role: "Software Engineer",
  focus: ["Python", "Backend", "Automation"],
  tagline:
    "I build backend systems and automations that run in production in Brazil's federal judiciary, from requirements to testing and ongoing support.",
  location: "Brasília, Brazil",
  resume: "/resume-tarso-hebert.pdf",

  sections: [
    { id: "about", n: "01", label: "About" },
    { id: "experience", n: "02", label: "Experience" },
    { id: "projects", n: "03", label: "Projects" },
    { id: "stack", n: "04", label: "Stack" },
    { id: "contact", n: "05", label: "Contact" },
  ],

  about: [
    "I'm a software engineer at the [Federal Regional Court of the 1st Region](https://www.trf1.jus.br), a Brazilian federal court. I work on systems that run every day: I write the Python and Selenium automations that operate the court's case systems, and the web applications that put those automations in the hands of the people who use them.",
    "I gather requirements with the people who live the problem, almost always outside the technical team, and turn their routine into a specification. The rest is engineering: tests, code review and support for what is already in production. Reliability is the criterion I decide by — an automation that fails every now and then hands back the work it was meant to take away.",
    "I'm studying Computer Science at [Universidade Católica de Brasília](https://ucb.catolica.edu.br), graduating in 2027, and I keep my own projects outside work: [APROVA](https://github.com/Tarso333/ConcursoSedesDF), a desktop study platform for civil-service exams, and [PropostaJá](https://github.com/Tarso333/propostaja), a quoting app for independent workers.",
  ],

  portrait: {
    alt: "Photo of Tarso Hebert, smiling, in a dark shirt",
    caption: "Brasília, Brazil",
  },

  experience: [
    {
      period: "May 2026 — Present",
      role: "Software Engineer",
      company: "TRF1",
      companyUrl: "https://www.trf1.jus.br",
      via: "G&E Serviços Terceirizados",
      location: "Brasília, Brazil",
      summary:
        "I build and maintain the court's automation suite, which operates PJe, the Brazilian electronic case system, across 13 states and the Federal District, plus the web applications that deliver those automations to the teams that use them.",
      metrics: [
        { value: "40", label: "bots in production" },
        { value: "370", label: "users served" },
        { value: "1.9M", label: "case files analyzed" },
        { value: "97.32%", label: "success across 15,000 runs" },
      ],
      highlights: [
        "Cut intermittent failures from **~50%** to **~9%** with state-based synchronization and pytest suites reaching up to **99%** coverage.",
        "Integrated Google Gemini into document analysis, taking triage from **20 min** to **1 min**.",
        "Built the automation that extracts case data into spreadsheets, used by **35** people on **~100** cases a day.",
        "Maintain the internal RPA library reused by more than **50** bots, and RPAHub, the suite's catalog built in Flask.",
        "Work on SILVA 1G, an AI-assisted decision support system for judges, with Django REST Framework and Next.js.",
      ],
      quote: {
        text: "I just tested the RPA and it was 100% successful, working perfectly.",
        source: "User of the expert-payment bot · translated from Portuguese",
      },
      stack: ["Python", "Selenium", "Flask", "Django", "pytest", "SonarQube", "Docker", "GitLab CI", "Gemini"],
    },
    {
      period: "Mar — Apr 2026",
      role: "IT Intern, Automation",
      company: "TRF1",
      companyUrl: "https://www.trf1.jus.br",
      via: "CIEE",
      location: "Brasília, Brazil",
      summary:
        "I joined the automation team supporting the development of Python and Selenium bots, and was hired as a full-time developer within two months.",
      highlights: [],
      stack: ["Python", "Selenium"],
    },
    {
      period: "Jan 2022 — Sep 2023",
      role: "Administrative Apprentice, Data and Operations",
      company: "Grupo Petrópolis",
      location: "Bom Jesus da Lapa, Brazil",
      summary:
        "Supported logistics data analysis and production planning and control at a large brewing plant, taking part in inventory automation and traceability initiatives.",
      highlights: [],
      stack: ["Data analysis", "Production planning", "Logistics"],
    },
  ],

  projectGroups: [
    {
      id: "proprios",
      label: "Personal projects",
      note: "Products I design and build from scratch, outside the corporate environment.",
    },
    {
      id: "trabalho",
      label: "At TRF1",
      note: "Internal court systems: no public link, because the code and access are restricted.",
    },
  ],

  projects: [
    {
      group: "trabalho",
      name: "Automated tests for the RPA suite",
      kind: "Quality",
      year: 2026,
      context: "Internal · TRF1",
      description:
        "I created the test suites and SonarQube analysis for more than **20** bots, with over **800** tests, covering vote registration, expert payments, term search, small-claim payment orders, Gemini triage, PDF parsing, document retrieval and case file downloads.",
      stack: ["pytest", "SonarQube", "GitLab CI"],
    },
    {
      group: "trabalho",
      name: "Case lookup across both instances",
      kind: "RPA",
      year: 2026,
      context: "Internal · TRF1",
      description:
        "I built the bot that takes a spreadsheet of cases, looks each one up in PJe at the first and second instance in parallel sessions, and delivers a single consolidated Excel file with status, court unit and date of the last update.",
      stack: ["Python", "Selenium", "openpyxl"],
    },
    {
      group: "trabalho",
      name: "Vote registration",
      kind: "RPA",
      year: 2026,
      context: "Internal · TRF1",
      description:
        "I develop the bot that records and releases judges' votes in PJe: it fills in the type, template and procedural event, tags each case and sends it to the virtual session docket. Suite with **299** tests and **100%** coverage.",
      stack: ["Python", "Selenium", "pytest", "SonarQube"],
    },
    {
      group: "trabalho",
      name: "Expert witness payments",
      kind: "RPA",
      year: 2026,
      context: "Internal · TRF1",
      description:
        "I develop the bot that reads case tags in PJe and files payment requests for court-appointed experts in AJG, the legal-aid payment system, staying stable on large batches and sealed cases. Suite with **115** tests and **99%** coverage.",
      stack: ["Python", "Selenium", "pandas", "pytest"],
    },
    {
      group: "proprios",
      name: "APROVA",
      kind: "Desktop",
      year: 2026,
      context: "Personal project",
      description:
        "Offline-first prep platform for Brazilian civil-service exams: mock exams in the official format, spaced-repetition flashcards, a PDF syllabus importer and an AI tutor that runs locally. The business rules are covered by **84** tests.",
      stack: ["Electron", "React", "TypeScript", "SQLite", "Drizzle"],
      href: "https://github.com/Tarso333/ConcursoSedesDF",
      hrefKind: "repo",
    },
    {
      group: "proprios",
      name: "PropostaJá",
      kind: "Mobile",
      year: 2026,
      context: "Mobile Development course, UCB",
      description:
        "App that lets independent workers put together a PDF quote and send it over WhatsApp while still at the client's home. Works **100%** offline, with local SQLite and amounts stored in cents to avoid rounding errors.",
      stack: ["React Native", "Expo", "TypeScript", "SQLite"],
      href: "https://github.com/Tarso333/propostaja",
      hrefKind: "repo",
    },
    {
      group: "proprios",
      name: "API Monitor",
      kind: "Web",
      year: 2025,
      context: "Porto Digital tech residency",
      description:
        "Public-API monitoring dashboard built by a team of **9**. I owned the backend and observability: Express endpoints, a Docker Compose environment and latency metrics in Dynatrace.",
      stack: ["Node.js", "Express", "React", "Docker Compose", "Dynatrace"],
      href: "https://api-monitor-alpha.vercel.app",
      hrefKind: "demo",
    },
  ],

  stack: [
    {
      label: "Backend",
      items: ["Python", "Django", "Django REST Framework", "Flask", "SQLAlchemy", "Node.js", "REST APIs"],
    },
    { label: "Automation", items: ["Selenium", "RPA", "web scraping", "pandas", "openpyxl", "PyInstaller"] },
    { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Astro", "Tailwind CSS"] },
    { label: "Data", items: ["PostgreSQL", "SQLite", "Redis", "Drizzle ORM"] },
    { label: "Quality", items: ["pytest", "SonarQube", "code review", "Conventional Commits"] },
    { label: "DevOps", items: ["Docker", "Docker Compose", "GitLab CI", "Nginx", "Git", "Linux"] },
    { label: "Applied AI", items: ["Google Gemini", "document classifiers", "Ollama"] },
  ],

  contact: {
    intro:
      "Open to conversations about backend, automation and system reliability. Email is the most direct way to reach me.",
  },

  ui: {
    mainId: "content",
    skipToContent: "Skip to content",
    navLabel: "Sections",
    contactsLabel: "Contact and preferences",
    langGroupLabel: "Language",
    resume: "Resume",
    resumeLong: "Resume (PDF)",
    email: "Email",
    newTab: "opens in a new tab",
    pdfNewTab: "PDF, opens in a new tab",
    repoHint: "opens the GitHub repository in a new tab",
    demoHint: "opens the live demo in a new tab",
    demoBadge: "live demo",
    allProjects: "See all projects on GitHub",
    techLabel: "Technologies",
    themeToggle: "Toggle theme",
    themeToLight: "Switch to light theme (current: dark)",
    themeToDark: "Switch to dark theme (current: light)",
    colophon: "Static site built with Astro and Tailwind CSS, set in IBM Plex, deployed on Vercel.",
    notFound: {
      code: "Error 404",
      title: "Page not found",
      text: "This address doesn't exist or has moved.",
      back: "Back to home",
      navLabel: "Site sections",
    },
  },
};
