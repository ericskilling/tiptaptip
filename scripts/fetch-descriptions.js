import fs from 'fs';
import path from 'path';

const episodesDir = '/Volumes/HD3/Documents/Eric/code/tiptaptip/src/content/episodes';

const episodeUrls = [
  { id: 'ttt-562-its-alive', url: 'https://tiptaptip.com/2026/05/ttt-562-its-alive/' },
  { id: 'ttt-561-timestamp', url: 'https://tiptaptip.com/2026/03/ttt-561-timestamp/' },
  { id: 'ttt-560-grinding-gears', url: 'https://tiptaptip.com/2026/02/ttt-560-grinding-gears/' },
  { id: 'ttt-559-research-development', url: 'https://tiptaptip.com/2026/01/ttt-559-research-development/' },
  { id: 'ttt-558-play-dates', url: 'https://tiptaptip.com/2025/10/ttt-558-play-dates/' },
  { id: 'ttt-557-around-the-world', url: 'https://tiptaptip.com/2025/05/ttt-557-around-the-world/' },
  { id: 'ttt-556-talk-amongst-yourselves', url: 'https://tiptaptip.com/2025/04/ttt-556-talk-amongst-yourselves/' },
  { id: 'ttt-555-interchangeable-parts', url: 'https://tiptaptip.com/2025/02/ttt-555-interchangeable-parts/' },
  { id: 'ttt-554-wishful-thinking', url: 'https://tiptaptip.com/2024/12/ttt-554-wishful-thinking/' },
  { id: 'ttt-553-buddy', url: 'https://tiptaptip.com/2024/10/ttt-553-buddy/' },
  { id: 'ttt-552-scream-and-shout', url: 'https://tiptaptip.com/2024/07/ttt-552-scream-and-shout/' },
  { id: 'ttt-551-connecting-the-dots', url: 'https://tiptaptip.com/2024/06/ttt-551-connecting-the-dots/' },
];

async function fetchDescription(url) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    
    // Extract description from the content - look for text between the image and the audio link
    const imgMatch = html.match(/<img[^>]+>/);
    const audioMatch = html.match(/https:\/\/media\.blubrry\.com[^\s<>]+/);
    
    if (imgMatch && audioMatch) {
      const imgIndex = html.indexOf(imgMatch[0]);
      const audioIndex = html.indexOf(audioMatch[0]);
      const content = html.slice(imgIndex, audioIndex);
      
      // Extract text content, remove HTML tags
      const description = content
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 500);
      
      return description;
    }
    return null;
  } catch (e) {
    console.log(`Error fetching ${url}:`, e.message);
    return null;
  }
}

async function main() {
  for (const ep of episodeUrls) {
    const filePath = path.join(episodesDir, `${ep.id}.md`);
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${ep.id}`);
      continue;
    }
    
    const description = await fetchDescription(ep.url);
    if (description) {
      let content = fs.readFileSync(filePath, 'utf-8');
      
      // Add description to frontmatter
      if (!content.includes('description:')) {
        content = content.replace(
          '---',
          `---\ndescription: "${description.replace(/"/g, '\\"')}"`
        );
        fs.writeFileSync(filePath, content);
        console.log(`Updated: ${ep.id}`);
      }
    }
  }
}

main();