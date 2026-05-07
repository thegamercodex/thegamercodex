# PoE 2 Batch Tools — May 2026

Batch sourced from poe2.info bundle gap analysis. Goal: round out PoE 2 catalog before Reddit launch in r/PathOfExile2.

| Tool | Status | URL | Category | Type | Editorial notes |
|---|---|---|---|---|---|
| PoE 2 Scout | ✅ done | poe2scout.com | economy | web-app | MIT, real-time market tool, 45 GH stars, official API. Direct alternative to poe.ninja focused on PoE 2. |
| POE Overlay | ✅ done | poeoverlay.com | trading | overlay | Closed source, donation-funded, 1M+ users, separate PoE 2 build (PoE Overlay II). Overwolf or standalone. |
| Sidekick | ✅ done | sidekick-poe.github.io | trading | overlay | Open source MIT, 475 GH stars, cross-platform (Win/Linux native), price check + map mod check, PoE 1 + PoE 2. |
| Exile Companion | ✅ done | apps.apple.com / Play Store | trading | mobile-app | AES Tech AB, freemium ($24.99 lifetime), 8 langs incl. Spanish, 4.5/5 stars, OCR price scan. Multi-game. |
| Path of Crafting | ✅ done | pathofcrafting.net | crafting | web-app | Web sim is now actively PoE 2 focused (current site says "Updated for Last of the Druids 0.4"). Closed source for the web version. Legacy mobile app for PoE 1 still exists. |
| Hideout Showcase | ✅ done (both catalogs) | hideoutshowcase.com | reference | web-app | User flagged the actual filter URL — `/hideouts/search?...&game_version=2` (PoE 2) and `=1` (PoE 1). Each filter returns 25+ entries verified live. Multi-game tool: added to both PoE 2 and PoE 1 catalogs with cross-linked `multiGame.otherGames`. PoE 2 version honest about smaller database. |

## Open editorial questions

- **Path of Crafting**: confirm whether `pathofcrafting.net/craft` actually has PoE 2 mods/items integrated, or if it's still PoE 1 only with a PoE 2 landing aspiration.
- **Hideout Showcase**: similar — confirm if any PoE 2 hideouts have been uploaded yet. May need to lower confidence in the analysis or position it as "useful while PoE 2 hideout system matures".
- **Logos**: not downloaded yet. User to add. `existsSync` fallback handles absence.

## Conventions for this batch

- All meta.json `lastVerified: "2026-05-07"`
- `essential: false` for everything (these are second-tier additions, not bedrock tools)
- `multiGame.available: true` for Sidekick, POE Overlay, Exile Companion (clearly PoE 1 + PoE 2). Path of Crafting also multi-game in theory but quality lopsided.
- Categories used: `economy`, `trading`, `crafting`, `reference`. No new category added for "overlay" — represented via `type: "overlay"` instead.
