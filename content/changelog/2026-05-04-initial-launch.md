---
date: 2026-05-04
titleEs: "Lanzamiento inicial"
titleEn: "Initial launch"
summaryEs: "TheGamerCodex abre con 6 juegos, 76 herramientas curadas, 18 creators y 145 recursos en video."
summaryEn: "TheGamerCodex launches with 6 games, 76 curated tools, 18 creators, and 145 video resources."
gameAdded: null
---

<!-- es -->

## Juegos en el codex

- **Path of Exile** — ARPG de Grinding Gear Games desde 2013. 13 herramientas curadas, 5 creators, 25 recursos.
- **Path of Exile 2** — Sucesor en Early Access desde 2024. Categorías iniciales en proceso, 10 recursos cubriendo mecánicas, builds, trading y boss-rushing del 0.4 Last of the Druids.
- **World of Warcraft** — MMORPG de Blizzard. 15 herramientas, 5 creators (incluyendo Liquid como guild de RWF), 30 recursos cubriendo Midnight Season 1.
- **League of Legends** — MOBA de Riot. 15 herramientas, 5 creators, 25 recursos para Season 16.
- **Counter-Strike 2** — FPS competitivo de Valve. 15 herramientas, 5 creators, 25 recursos cubriendo el regreso de Cache y el rework Animgraph 2.
- **Genshin Impact** — Action RPG de HoYoverse. 15 herramientas, 5 creators, 30 recursos cubriendo 6.5 Luna VI.

## Sistema editorial

- Bilingüe completo: cada herramienta, creator y recurso tiene contenido en español y en inglés.
- Localización por defecto en inglés, con switch a español disponible.

## Stack técnico

- Next.js 16 con SSG + ISR para creators (revalidate 6h por el RSS de YouTube).
- Sin base de datos: todo el contenido vive en archivos markdown + JSON dentro de `content/games/`.
- Búsqueda client-side con Fuse.js sobre los datos hidratados.
- SEO completo: sitemap dinámico, JSON-LD por tipo de página, hreflang en cada locale.

<!-- en -->

## Games in the codex

- **Path of Exile** — Grinding Gear Games' ARPG since 2013. 13 curated tools, 5 creators, 25 resources.
- **Path of Exile 2** — Successor in Early Access since 2024. Initial categories underway, 10 resources covering 0.4 Last of the Druids mechanics, builds, trading, and boss-rushing.
- **World of Warcraft** — Blizzard's MMORPG. 15 tools, 5 creators (including Liquid as the RWF guild), 30 resources covering Midnight Season 1.
- **League of Legends** — Riot's MOBA. 15 tools, 5 creators, 25 resources for Season 16.
- **Counter-Strike 2** — Valve's competitive FPS. 15 tools, 5 creators, 25 resources covering Cache's return and the Animgraph 2 rework.
- **Genshin Impact** — HoYoverse's action RPG. 15 tools, 5 creators, 30 resources covering 6.5 Luna VI.

## Editorial system

- Fully bilingual: every tool, creator, and resource ships content in both Spanish and English.
- Default locale is English; switch to Spanish available everywhere.

## Tech stack

- Next.js 16 with SSG + ISR for creator pages (6h revalidate driven by YouTube RSS).
- No database: all content lives as markdown + JSON inside `content/games/`.
- Client-side search with Fuse.js over hydrated data.
- Full SEO: dynamic sitemap, JSON-LD per page type, hreflang on every locale.
