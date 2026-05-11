import type { Language } from "../config/i18n";
import type { CategorySlug } from "../config/categories";

export interface Article {
  translationGroupId: string;
  language: Language;
  category: CategorySlug;
  slug: string;
  canonical: boolean;
  published: boolean;
  featured: boolean;

  title: string;
  subtitle: string;
  description: string;

  date: string;
  readingTime: number;

  tags: string[];
}

export const articles: Article[] = [
  {
    translationGroupId: "what-the-chinese-ai-market-reveals",
    language: "en",
    category: "ai",
    slug: "what-the-chinese-ai-market-reveals",
    canonical: true,
    published: true,
    featured: true,

    title: "What the Chinese AI Market Reveals",
    subtitle:
      "How capital markets evaluate and manage the value of artificial intelligence before the crisis occurs.",
    description:
      "A strategic analysis of how Chinese AI market signals reveal capital intensity, governance constraints, and the early repricing of AI assumptions.",

    date: "2026-01-11",
    readingTime: 15,

    tags: [
      "Artificial Intelligence",
      "Capital Markets",
      "Governance",
      "Strategy",
      "Risk Management",
    ],
  },
];

export function getArticleByRoute(
  language: Language,
  category: CategorySlug,
  slug: string,
): Article | undefined {
  return articles.find(
    (article) =>
      article.language === language &&
      article.category === category &&
      article.slug === slug &&
      article.published,
  );
}

export function getArticleTranslations(
  article: Article,
): Partial<Record<Language, string>> {
  const relatedArticles = articles.filter(
    (candidate) =>
      candidate.translationGroupId === article.translationGroupId &&
      candidate.published,
  );

  return relatedArticles.reduce<Partial<Record<Language, string>>>(
    (links, candidate) => {
      links[candidate.language] =
        `/${candidate.language}/${candidate.category}/${candidate.slug}/`;

      return links;
    },
    {},
  );
}