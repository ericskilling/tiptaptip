import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Strip wrapping quote characters (e.g. '"TTT 1: ..."' -> 'TTT 1: ...')
// so episode titles never render with quotes, no matter how they are
// quoted in the markdown frontmatter. Only strips balanced pairs, so a
// legitimate trailing apostrophe ("Gone Eatin'") is left intact.
function stripWrappingQuotes(value: string): string {
  let title = value.trim();
  while (
    title.length > 2 &&
    ((title.startsWith('"') && title.endsWith('"')) ||
      (title.startsWith("'") && title.endsWith("'")))
  ) {
    title = title.slice(1, -1).trim();
  }
  return title;
}

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    title: z.string().transform(stripWrappingQuotes),
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