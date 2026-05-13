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

  seoTitle: string;
  seoDescription: string;
  strategicAngle: string;

  date: string;
  updated?: string;
  readingTime: number;

  tags: string[];

  heroImage?: ArticleImage;
  ogImage?: ArticleImage;
  inlineMedia?: ArticleImage[];
  infographics?: ArticleInfographic[];

  sourceUrl?: string;
  sourceLabel?: string;

  contentPath: string;
}