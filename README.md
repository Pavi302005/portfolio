# Pavithra Sodavaram: Portfolio (HTML, CSS, JavaScript + Three.js)

A static website. No build step and no installs needed.

## Files
- `index.html`  page structure
- `styles.css`  all styling (colours are CSS variables at the top: `--coral`, `--aqua`, `--sun`, `--violet`, `--ink`, `--paper`)
- `script.js`   all behaviour: project list, 3D scenes, skills sphere, resume viewer, voice guide
- `images/`     your photos, certificates and project pictures

## Run it on your computer
Open `index.html` in Chrome or Edge (internet needed for the fonts and three.js).
Or in VS Code: right-click `index.html` > "Open with Live Server".

## Put it online with GitHub Pages
1. Create a repository and upload every file and the `images` folder.
2. Settings > Pages > Source: "Deploy from a branch" > main > / (root) > Save.
3. Your site will be at `https://<your-username>.github.io/<repository>/`.

## Common edits (all in script.js unless noted)
- Projects: the `projects` list near the top (title, image key, link, text, emoji, tech).
- Experience: the `exp` list.  Education, strengths, languages: search for `eduExtra`.
- Skill percentages: the `groups` list under `// skills`.
- Voice guide script: the `steps` list under `// Voice guide`.
- Replace a photo: overwrite the file in `images/` (keep the same name).
- Email, LinkedIn, GitHub, location: the `links` list (search for `sodavarampavithra`) and the buttons at the top of `index.html`.
- 3D project scenes: the `SC` object (one function per project).

## Notes
- The map is an illustration with working + and - zoom. To use a real Google map, put this in `index.html` where the map is:
  `<iframe src="https://www.google.com/maps?q=BTM+1st+Stage,+Bengaluru+560029&z=14&output=embed" loading="lazy"></iframe>`
  (this works on GitHub Pages, but not inside the Claude preview).
- The contact form was removed; contact is by the email, LinkedIn and GitHub cards.
- The voice guide uses the browser's built-in text-to-speech, so voices differ by device.
