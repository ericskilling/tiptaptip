import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const episodes = await getCollection('episodes');
  const siteUrl = 'https://tiptaptip.com';
  
  const items = episodes
    .filter(e => e.data.title && e.data.date)
    .map(e => {
      const num = e.id.match(/(\d+)/)?.[1] || '';
      return {
        title: `Ep. ${num}: ${e.data.title}`,
        pubDate: new Date(e.data.date),
        description: (e.body || '').slice(0, 200) || `Tip Tap Tip Episode ${num}`,
        link: `/episodes/${e.id}/`,
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.pubDate).valueOf();
      const dateB = new Date(b.pubDate).valueOf();
      // Handle invalid dates by putting them at the end
      if (isNaN(dateA)) return 1;
      if (isNaN(dateB)) return -1;
      return dateB - dateA;
    })
    .slice(0, 100);

  return rss({
    title: 'Tip Tap Tip Podcast',
    description: 'A podcast about technology, geek culture, and Eurovision.',
    site: siteUrl,
    items,
    customData: `<language>en-us</language>`,
  });
}
