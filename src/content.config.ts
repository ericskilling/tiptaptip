import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.union([z.array(z.string()), z.string()]).transform((val) => {
      if (typeof val === 'string') {
        return val ? [val] : [];
      }
      return val;
    }).default([]),
    tags: z.union([z.array(z.string()), z.string()]).transform((val) => {
      if (typeof val === 'string') {
        return val ? [val] : [];
      }
      return val;
    }).default([]),
    description: z.string().optional(),
    image: z.string().optional(),
    images: z.array(z.string()).default([]),
    podcast_file: z.string().optional(),
  }),
});

export const collections = { episodes };