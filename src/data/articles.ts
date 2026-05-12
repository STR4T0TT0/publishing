import type { Language } from "../config/i18n";
import type { CategorySlug } from "../config/categories";

export interface ArticleImage {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
}

export interface ArticleInfographic extends ArticleImage {
  title: string;
  format: "square" | "portrait" | "landscape" | "carousel";
  usage: Array<"article" | "linkedin" | "x" | "bluesky" | "newsletter">;
}
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
  contentPath: string;

  seoTitle: string;
  seoDescription: string;
  strategicAngle: string;

  updated?: string;

  heroImage?: ArticleImage;
  ogImage?: ArticleImage;
  inlineMedia?: ArticleImage[];
  infographics?: ArticleInfographic[];

  sourceUrl?: string;
  sourceLabel?: string;
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
    contentPath: 
      "what-the-chinese-ai-market-reveals.en.mdx",
    
    seoTitle: 
      "What the Chinese AI Market Reveals",
    seoDescription:
      "How Chinese AI market signals reveal capital intensity, governance constraints, and the early repricing of AI assumptions.",
    strategicAngle:
      "Chinese AI market signals reveal how capital begins pricing AI infrastructure risk before visible crisis.",

    sourceUrl:
      "https://medium.com/@str4t0tt0/what-the-chinese-ai-market-reveals-10cc19a68f01",
    sourceLabel: "Originally published on Medium",

    heroImage: {
      src: 
        "/images/articles/ai/what-the-chinese-ai-market-reveals/ai-chinese-ai-market-en-hero.webp",
      alt: 
        "Artificial intelligence as Infrastructure (A2I)",
      caption:
        "AI markets increasingly price infrastructure control, dependency, and strategic optionality.",
},

    ogImage: {
      src: "/images/articles/ai/what-the-chinese-ai-market-reveals/ai-chinese-ai-market-en-og.webp",
      alt: "Artificial intelligence as Infrastructure (A2I)",
    
},
  },
  {

    translationGroupId: "what-the-chinese-ai-market-reveals",

    language: "fr",

    category: "ai",

    slug: "ce-que-revele-le-marche-chinois-de-l-ia",

    canonical: false,

    published: true,

    featured: true,

    title: "Ce que révèle le marché chinois de l’IA",

    subtitle:

      "Comment les marchés de capitaux évaluent et gèrent la valeur de l’intelligence artificielle avant que la crise ne devienne visible.",

    description:

      "Une analyse stratégique des signaux du marché chinois de l’IA, de l’intensité capitalistique, des contraintes de gouvernance et de la revalorisation précoce des hypothèses liées à l’IA.",

    date: "2026-01-11",

    readingTime: 16,

    tags: [

      "Intelligence artificielle",

      "Marchés de capitaux",

      "Gouvernance",

      "Stratégie",

      "Gestion du risque",

    ],

    contentPath: "what-the-chinese-ai-market-reveals.fr.mdx",

    seoTitle: 
      "Ce que révèle le marché chinois de l’IA",
    seoDescription:
      "Comment les signaux du marché chinois de l’IA révèlent l’intensité capitalistique, les contraintes de gouvernance et la revalorisation précoce des hypothèses liées à l’IA.",
    strategicAngle:
      "Les signaux du marché chinois de l’IA révèlent comment le capital commence à valoriser le risque d’infrastructure avant la crise visible.",

    heroImage: {
      src: 
        "/images/articles/ai/what-the-chinese-ai-market-reveals/ai-chinese-ai-market-fr-hero.webp",
      alt: 
        "L’intelligence artificielle en tant qu’infrastructure (A2I)",
      caption:
        "Les marchés de l’IA valorisent de plus en plus le contrôle d’infrastructure, la dépendance et l’optionalité stratégique.",
},

    ogImage: {
      src: "/images/articles/ai/what-the-chinese-ai-market-reveals/ai-chinese-ai-market-fr-og.webp",
      alt: "L'intelligence artificielle en tant qu'infrastructure (A2I)",
},

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

export function getArticlesByCategory(
  language: Language,
  category: CategorySlug,
): Article[] {
  return articles
    .filter(
      (article) =>
        article.language === language &&
        article.category === category &&
        article.published,
    )
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}