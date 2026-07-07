import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET() {
  const episodes = await getCollection('episodes');
  const siteUrl = 'https://tiptaptip.com';

  const items = episodes
    .filter(e => e.data.title && e.data.date && e.data.podcast_file)
    .map(e => {
      const num = e.id.match(/(\d+)/)?.[1] || '';
      const description = (e.data.description || (e.body || '').slice(0, 200) || `Tip Tap Tip Episode ${num}`).replace(/\\/g, '');
      return {
        title: `Ep. ${num}: ${e.data.title}`,
        pubDate: new Date(e.data.date),
        description,
        link: `${siteUrl}/episodes/${e.id}/`,
        enclosure: e.data.podcast_file
          ? {
              url: e.data.podcast_file,
              type: 'audio/mpeg',
            }
          : undefined,
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.pubDate).valueOf();
      const dateB = new Date(b.pubDate).valueOf();
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
    customData: `
      <language>en-us</language>
      <itunes:author>Eric & Rachelle</itunes:author>
      <itunes:summary>A podcast about technology, geek culture, and Eurovision.</itunes:summary>
      <itunes:owner>
        <itunes:name>Tip Tap Tip</itunes:name>
        <itunes:email>hello@tiptaptip.com</itunes:email>
      </itunes:owner>
      <itunes:explicit>yes</itunes:explicit>
      <itunes:image href="https://tiptaptip.com/images/canadavision.jpg" />
      <itunes:category text="Comedy" />
      <itunes:category text="Technology" />
      <itunes:category text="Society & Culture" />
    `,
  });
}
