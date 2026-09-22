import { en } from "./en";
import { pt } from "./pt";
import type { Content, Lang } from "./types";

export type { Content, Experience, Lang, Project, ProjectGroupId, Section } from "./types";

// Português na raiz (/) e inglês em /en/. A ordem define o seletor: PT · EN.
export const languages: Lang[] = ["pt", "en"];
export const defaultLang: Lang = "pt";

const dictionary: Record<Lang, Content> = { pt, en };

// Astro.currentLocale vem da URL (config i18n em astro.config.mjs); fora dela, cai no português.
export function toLang(locale: string | undefined): Lang {
  return languages.includes(locale as Lang) ? (locale as Lang) : defaultLang;
}

export function getContent(locale: string | undefined): Content {
  return dictionary[toLang(locale)];
}

export function homePath(lang: Lang): string {
  return lang === defaultLang ? "/" : `/${lang}/`;
}
