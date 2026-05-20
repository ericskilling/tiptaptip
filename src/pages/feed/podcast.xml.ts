import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const episodes = await getCollection('episodes');
  const siteUrl = 'https://tiptaptip.com';
  
  const items = episodes
    .filter(e => e.data.title)
    .map(e => {
      const num = e.id.match(/(\d+)/)?.[1] || '';
      return {
        title: `Ep. ${num}: ${e.data.title}`,
        pubDate: new Date(e.data.date),
        description: (e.body || '').slice(0, 200) || `Tip Tap Tip Episode ${num}`,
        link: `/episodes/${e.id}/`,
      };
    })
    .sort((a, b) => new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf());

  return rss({
    title: 'Tip Tap Tip Podcast',
    description: 'A podcast about technology, geek culture, and Eurovision.',
    site: siteUrl,
    items,
    customData: `<language>en-us</language>`,
  });
}
