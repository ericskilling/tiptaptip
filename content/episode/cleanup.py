import os
import re
import yaml

# Set to '.' if running directly inside the folder with the .md files
posts_dir = '.' 

def clean_podcast_markdown(file_path):
    # Skip the script itself if it's in the same folder
    if file_path.endswith('cleanup.py'):
        return

    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split front matter and body
    parts = re.split(r'---\s*\n', content, maxsplit=2)
    if len(parts) < 3:
        return

    try:
        # Load the front matter YAML
        # parts[0] is empty, parts[1] is the YAML, parts[2] is the body
        front_matter = yaml.safe_load(parts[1])
        body = parts[2]
    except yaml.YAMLError as e:
        print(f"Error parsing YAML in {file_path}: {e}")
        return

    if not front_matter:
        return

    # --- 1. CLEAN THE BODY TEXT ---
    # Removes the '[Download the episode](url)' markdown link and any text following it on that line
    body = re.sub(r'\[Download the episode\].*$', '', body, flags=re.MULTILINE)

    # --- 2. CLEAN THE AUDIO METADATA ---
    # Looks for 'enclosure' or 'audio_file' and extracts just the URL
    audio_keys = ['enclosure', 'audio_file', 'audio_url']
    found_audio = False
    
    for k in audio_keys:
        if k in front_matter and front_matter[k]:
            raw_val = str(front_matter[k]).strip()
            # Split by newline or space and take the first part (the URL)
            clean_url = re.split(r'\s|\n', raw_val)[0].strip().replace("'", "").replace('"', "")
            front_matter['audio_url'] = clean_url
            found_audio = True
            break 

    # --- 3. DEFINE THE ALLOW LIST ---
    # Only these keys will survive the transition
    allowed_keys = [
        'title', 
        'date', 
        'author', 
        'categories', 
        'tags', 
        'cover', 
        'audio_url', 
        'url'
    ]

    # Create new dictionary with only allowed data
    cleaned_fm = {k: front_matter[k] for k in allowed_keys if k in front_matter}

    # --- 4. IMAGE PATH CLEANUP ---
    # Updates /wp-content/uploads/ to /images/ for your new static structure
    if 'cover' in cleaned_fm and isinstance(cleaned_fm['cover'], dict):
        if 'image' in cleaned_fm['cover']:
            img_path = cleaned_fm['cover']['image']
            cleaned_fm['cover']['image'] = img_path.replace('/wp-content/uploads/', '/images/')

    # --- 5. REASSEMBLE AND SAVE ---
    # We use sort_keys=False to keep the order somewhat logical
    new_yaml = yaml.dump(cleaned_fm, sort_keys=False, allow_unicode=True)
    new_content = f"---\n{new_yaml}---\n{body}"

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)

# Main Execution Loop
if __name__ == "__main__":
    print(f"Starting cleanup in: {os.path.abspath(posts_dir)}")
    count = 0
    for filename in os.listdir(posts_dir):
        if filename.endswith('.md'):
            clean_podcast_markdown(os.path.join(posts_dir, filename))
            count += 1
    
    print(f"Successfully cleaned {count} files.")