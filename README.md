# Katastacia's Underground

Personal portfolio based on the structure and retro filesystem/CRT aesthetic of the reference project. Replace the placeholder content and links before publishing.

## Requirements

- Node.js 20+ (recommended)
- npm

## Run locally

```bash
npm install
npm run dev -- --open
```

For a production build:

```bash
npm run check
npm run build
```

## Where to edit content

- **Games:** `src/lib/data/games.ts`. Add images to `static/games/` and use paths such as `/games/portal2.webp`.
- **Spotify playlists:** `src/lib/data/music-playlists.ts`. Change each playlist name, description, and Spotify URL.
- **Applications:** `src/lib/data/applications.ts`. Add images to `static/apps/` and update the image path.
- **Projects:** `src/lib/data/projects.ts`. Add descriptions, technologies, repository links, and demos.
- **About text:** `src/translations/en.json` and `src/translations/es.json`.
- **Skills:** `src/lib/data/skills.ts`.
- **Applications:** `src/lib/data/applications.ts`.
- **Hardware/inventory placeholders:** `src/lib/components/about/Workspace.svelte` and `src/lib/components/about/Inventory.svelte`.
- **Social links:** `src/lib/components/Header.svelte`, `src/routes/contact/+page.svelte`, and `src/routes/links/+page.svelte`.
- **CV:** place your PDF at `static/resume.pdf`, then uncomment the download link in `src/routes/resume/+page.svelte`.
- **Avatar:** replace `static/katastacia-avatar.svg` with your own artwork (or update its references).

The games and applications pages use a placeholder image until you add your own images. Spotify links are placeholders and must be replaced with your real playlist URLs. Review your skills, hardware, contact information, and all links before publishing.
