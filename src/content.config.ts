import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const articleImageSchema = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  credit: z.string().optional(),
});

const articleInfographicSchema = articleImageSchema.extend({
  title: z.string(),
  format: z.enum(["square", "portrait", "landscape", "carousel"]),
  usage: z.array(
    z.enum(["article", "linkedin", "x", "bluesky", "newsletter"]),
  ),
});

const articles = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/articles",
  }),
  schema: z.object({
    translationGroupId: z.string(),
    language: z.enum(["en", "fr"]),
    category: z.enum(["ai", "cybersecurity", "crypto"]),
    slug: z.string(),
    canonical: z.boolean(),
    published: z.boolean(),
    featured: z.boolean(),

    title: z.string(),
    subtitle: z.string(),
    description: z.string(),

    seoTitle: z.string(),
    seoDescription: z.string(),
    strategicAngle: z.string(),

    date: z.string(),
    updated: z.string().optional(),
    readingTime: z.number(),

    tags: z.array(z.string()),

    heroImage: articleImageSchema.optional(),
    ogImage: articleImageSchema.optional(),
    inlineMedia: z.array(articleImageSchema).optional(),
    infographics: z.array(articleInfographicSchema).optional(),

    sourceUrl: z.string().url().optional(),
    sourceLabel: z.string().optional(),
  }),
});

export const collections = {
  articles,
};