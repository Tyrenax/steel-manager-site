import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    tags: z.array(z.string()),
    authors: z
      .array(
        z.object({
          name: z.string(),
          role: z.string(),
          linkedin: z.string().optional(),
        }),
      )
      .default([{ name: 'Équipe DevTeix', role: 'DevTeix' }]),
    language: z.enum(['fr', 'en']).default('fr'),
    readTime: z.string(),
    featured: z.boolean().default(false),
    cover: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    seoTitle: z.string().optional(),
    canonical: z.string().optional(),
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        }),
      )
      .default([]),
  }),
});

export const collections = { blog };
