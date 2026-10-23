import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One entry per accomplishment. Body is one or two sentences of context.
// Only list a stat when it is the number that makes the entry land.
const cv = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/cv' }),
  schema: z.object({
    title: z.string(),
    org: z.string(),
    period: z.string(),
    order: z.number(),
    stats: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .max(2)
      .default([]),
  }),
});

export const collections = { cv };
