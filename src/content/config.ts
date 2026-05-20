import { defineCollection, z } from 'astro:content';

const episodes = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    author: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    episode_image: z.string().optional(),
    thumbnail: z.string().optional(),
    images: z.array(z.string()).default([]),
    podcast_file: z.string().optional(),
  }),
});

export const collections = { episodes };