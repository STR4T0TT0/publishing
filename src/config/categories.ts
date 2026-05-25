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
      en: "Artificial Intelligence",
      fr: "Intelligence Artificielle",
    },
    descriptions: {
      en: "Strategic analysis of artificial intelligence as infrastructure, investment pressure, and governance constraint.",
      fr: "Analyse stratégique de l’intelligence artificielle comme infrastructure, enjeu d’investissement et pression de gouvernance.",
    },
  },
  cybersecurity: {
    slug: "cybersecurity",
    labels: {
      en: "Cybersecurity",
      fr: "Cybersécurité",
    },
    descriptions: {
      en: "Cyber risk, resilience, systemic exposure, and the economics of security under stress.",
      fr: "Risque cyber, résilience, exposition systémique et économie de la sécurité sous contrainte.",
    },
  },
  crypto: {
    slug: "crypto",
    labels: {
      en: "Digital Assets",
      fr: "Crypto-actifs",
    },
    descriptions: {
      en: "Digital assets, enforcement limits, market structure, and the governance under programmable value.",
      fr: "Crypto-actifs, limites de l’application réglementaire, structure de marché et gouvernance de la valeur programmable.",
    },
  },
};