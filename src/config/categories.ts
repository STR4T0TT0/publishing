import type { Language } from "./i18n";

export const categorySlugs = ["ai", "cybersecurity", "crypto"] as const;

export type CategorySlug = (typeof categorySlugs)[number];

export function isCategory(value: string | undefined): value is CategorySlug {
  return categorySlugs.includes(value as CategorySlug);
}

export const categories: Record<
  CategorySlug,
  {
    slug: CategorySlug;
    labels: Record<Language, string>;
    descriptions: Record<Language, string>;
  }
> = {
  ai: {
    slug: "ai",
    labels: {
      en: "AI",
      fr: "IA",
    },
    descriptions: {
      en: "Strategic analysis of artificial intelligence as infrastructure, capital allocation, and governance pressure.",
      fr: "Analyse stratégique de l’intelligence artificielle comme infrastructure, allocation du capital et pression de gouvernance.",
    },
  },
  cybersecurity: {
    slug: "cybersecurity",
    labels: {
      en: "Cybersecurity",
      fr: "Cybersécurité",
    },
    descriptions: {
      en: "Cyber risk, resilience, digital exposure, and the economics of security under stress.",
      fr: "Risque cyber, résilience, exposition numérique et économie de la sécurité sous contrainte.",
    },
  },
  crypto: {
    slug: "crypto",
    labels: {
      en: "Crypto",
      fr: "Crypto",
    },
    descriptions: {
      en: "Digital assets, enforcement limits, market structure, and the governance of programmable value.",
      fr: "Crypto-actifs, limites de l’application des règles, structure de marché et gouvernance de la valeur programmable.",
    },
  },
};