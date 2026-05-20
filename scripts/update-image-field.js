import fs from 'fs';
import path from 'path';

const episodesDir = '/Volumes/HD3/Documents/Eric/code/tiptaptip/src/content/episodes';

const files = fs.readdirSync(episodesDir).filter(f => f.endsWith('.md'));

let updated = 0;
for (const file of files) {
  const filePath = path.join(episodesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace episode_image with image
  content = content.replace(/episode_image:/g, 'image:');
  
  // Remove thumbnail line
  content = content.replace(/thumbnail: "[^"]*"\n?/g, '');
  
  fs.writeFileSync(filePath, content);
  updated++;
}

console.log(`Updated ${updated} episode files`);