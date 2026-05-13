import { getCollection, type CollectionEntry } from "astro:content";
import type { Article } from "./articles";
import type { Language } from "../config/i18n";
import type { CategorySlug } from "../config/categories";

export type ArticleEntry = CollectionEntry<"articles">;

function getContentPath(entry: ArticleEntry): string {
  if (entry.id.endsWith(".md") || entry.id.endsWith(".mdx")) {
    return entry.id;
  }

  return `${entry.id}.mdx`;
}

export function toArticle(entry: ArticleEntry): Article {
  return {
    ...entry.data,
    contentPath: getContentPath(entry),
  };
}

export async function getArticlesFromCollection(): Promise<Article[]> {
  const entries = await getCollection("articles");

  return entries
    .map(toArticle)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export async function getPublishedArticlesFromCollection(): Promise<Article[]> {
  const articles = await getArticlesFromCollection();

  return articles.filter((article) => article.published);
}

export async function getArticleByRouteFromCollection(
  language: Language,
  category: CategorySlug,
  slug: string,
): Promise<Article | undefined> {
  const articles = await getPublishedArticlesFromCollection();

  return articles.find(
    (article) =>
      article.language === language &&
      article.category === category &&
      article.slug === slug,
  );
}

export async function getArticleTranslationsFromCollection(
  article: Article,
): Promise<Partial<Record<Language, string>>> {
  const articles = await getPublishedArticlesFromCollection();

  const relatedArticles = articles.filter(
    (candidate) =>
      candidate.translationGroupId === article.translationGroupId,
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

export async function getArticlesByCategoryFromCollection(
  language: Language,
  category: CategorySlug,
): Promise<Article[]> {
  const articles = await getPublishedArticlesFromCollection();

  return articles
    .filter(
      (article) =>
        article.language === language &&
        article.category === category,
    )
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export async function getFeaturedArticlesByLanguageFromCollection(
  language: Language,
): Promise<Article[]> {
  const articles = await getPublishedArticlesFromCollection();

  return articles
    .filter(
      (article) =>
        article.language === language &&
        article.featured,
    )
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export async function getPublishedArticleCountByCategoryFromCollection(
  language: Language,
  category: CategorySlug,
): Promise<number> {
  const articles = await getPublishedArticlesFromCollection();

  return articles.filter(
    (article) =>
      article.language === language &&
      article.category === category,
  ).length;
}

// garder à la fin du fichier car pour la route article on a besoin de l’entry Astro complet
export async function getPublishedArticleEntriesFromCollection(): Promise<ArticleEntry[]> {
  const entries = await getCollection("articles");

  return entries
    .filter((entry) => entry.data.published)
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
    );
}

export async function getArticleEntryByRouteFromCollection(
  language: Language,
  category: CategorySlug,
  slug: string,
): Promise<ArticleEntry | undefined> {
  const entries = await getPublishedArticleEntriesFromCollection();

  return entries.find(
    (entry) =>
      entry.data.language === language &&
      entry.data.category === category &&
      entry.data.slug === slug,
  );
}