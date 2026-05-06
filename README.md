# TheGamerCodex

A curated, bilingual directory of tools, creators, and resources for gamers — organized by game.

Live: [thegamercodex.com](https://thegamercodex.com)

## What it is

A static site that catalogs the practical ecosystem around each game it covers: the tools players actually use (build planners, trade aggregators, overlays), the creators worth following, and curated guides/videos by category. Each game has its own theme that takes over while you're inside its section.

Currently covers Counter-Strike 2, Destiny 2, Dota 2, Genshin Impact, League of Legends, Path of Exile, Path of Exile 2, Valorant, and World of Warcraft.

## Stack

- Next.js 16 (App Router, SSG + ISR, Turbopack)
- TypeScript (strict)
- Tailwind CSS v4
- `next-intl` for ES/EN bilingual routing
- Markdown + JSON content (no database)
- YouTube RSS at build time, no API key
- Hosted on Vercel

## Run locally

```bash
nvm use 22
npm install
npm run dev
```

Dev server runs on [http://localhost:3030](http://localhost:3030).

## Build

```bash
npm run build
```

The site is fully static (SSG) with selective ISR — creator pages revalidate every 6h to pick up new YouTube uploads.

## Project structure

- `content/games/<game>/` — every game's content (`meta.json`, bilingual `*.md`, tools, creators, resources)
- `src/app/[locale]/` — App Router routes; root layout lives here, there is no top-level `src/app/layout.tsx`
- `src/components/` — UI components (server-first; client components only when state/effects/handlers are needed)
- `src/lib/` — content loaders, markdown rendering, YouTube RSS, JSON-LD builders
- `messages/{es,en}.json` — UI strings
- `public/images/` — game heroes/logos, creator avatars, tool screenshots

## Contributing

The codex is editorially curated — it's not an open submission directory. If you spot a broken link, the in-app "Report broken link" button pings the maintainers directly. Issues and PRs for code-level improvements (accessibility, performance, bugs) are welcome.

## License

Code is released under the [MIT License](./LICENSE). Editorial content (tool and creator analyses, curation decisions) and third-party assets (game logos, creator avatars sourced from YouTube/Twitch, tool screenshots) are not covered by the MIT grant — they remain with their respective owners.
