---
title: "Last Epoch Tools"
description: "All-in-one community hub for Last Epoch: interactive build planner, complete item and affix database, loot filter creator and sharing, build collection auto-crawled from YouTube, identifiable character profiles, and per-season ladders."
quickTake: "If you only open one third-party site for LE, this one. It covers so many use cases that it ends up as the default bookmark for most serious players. The planner isn't as deep as Path of Building for LE, but no one matches the DB + filters + builds + profiles integration in a single domain."
---

## What it is

Last Epoch Tools (lastepochtools.com) is the most-used third-party site in the LE community. It's run by an independent team since the game's Early Access (2020+) and positions itself as a generalist hub: it never claims to be the best at any single thing, but the most complete in coverage.

What it offers, main sections:
- **Build Planner**: web planner with class, mastery, skills, passives, idols, gear, and stats. No installation required.
- **Item Database**: complete catalog of uniques, sets, prefixes, suffixes with filters by tier, class, and type.
- **Loot Filters**: tool to create, share, and edit filters online, with a community gallery.
- **Builds**: auto-crawled collection of builds from YouTube and community submissions, sortable by patch version and class.
- **Character Profiles**: enter your account name and see your published characters — useful for showing your setup to friends without screenshots.
- **Ladders**: competitive ladder leaderboards with filters by cycle, hardcore, solo self-found.
- **News**: aggregated patch notes and dev updates.

Free, no signup required to read. Login to save builds and filters under your account.

## What problem it solves

LE has a lot of critical info outside the game: affix tier list, which uniques matter, which blessings roll in which timeline, which builds are meta. The in-game client doesn't expose any of this comfortably — a unique's tooltip doesn't tell you whether it's good, nor does it show you which affixes you could roll.

Last Epoch Tools solves this by centralizing everything on a single domain. Instead of jumping between Maxroll for the build, ArreatSummit for the price, a wiki for the unique's lore, and a Pastebin for the filter, you open lastepochtools.com and do everything from there.

## How it differs from Maxroll

Both are large hubs with planner + builds + guides + ladders, but their tone differs:

- **Last Epoch Tools**: community-driven bias. Auto-crawled builds, filters shared by any player, planner without editorial curation. More breadth, less opinion.
- **Maxroll**: editorial-driven bias. Builds published by staff with curated leveling + endgame, tier lists with editorial justification, long guides. More depth, more opinion.

Most players use both in different flows: Maxroll to pick the build and understand the why; Last Epoch Tools to share the final planner, import a filter from a specific creator, and review ladders.

## What people use it for

**Personal theorycrafting**: open the planner from scratch (no published build), pick class and mastery, and start moving skills/passives/idols watching how stats update in real time.

**Importing someone else's build**: copy the share URL from a creator's planner (Maxroll, YouTube description) and open it in LE Tools to view, modify, or clone.

**Creating a custom loot filter**: the visual editor lets you define rules (color, sound, hide) by affix tier, item class, level requirement. More comfortable than editing XML by hand.

**Importing another player's filter**: copy a filter ID/URL from Reddit or Discord and open it in lastepochtools to inspect, export in the in-game format, and edit.

**Looking up info on a specific unique**: go to the DB, type the name, and see all affixes it rolls, LP value, and which builds use it.

**Showing off your character**: link your character profile in your Discord/forum signature so people see your gear without screenshots.

## Who it's NOT for

- **Theorycrafters who want deep DPS simulation**: the planner is good for visualization but doesn't compute DPS with the depth of Path of Building for LE. For absolute min-max, complement with PoB.
- **Players who want strong editorial curation**: auto-crawled builds vary in quality. If you want a guarantee that the build is good, Maxroll or ArreatSummit.
- **Mobile-first**: the UI works on mobile but is designed for desktop. The planner is hard to manage on touch.

## How it's used in practice

1. Go to [lastepochtools.com](https://www.lastepochtools.com/).

2. **To plan a build**: click **Build Planner** → pick class and mastery → assign skills and passives using the visual tree → add gear with affixes from the DB. Stats update in real time.

3. **To inspect an item**: click **Database** → **Items / Uniques / Prefixes / Suffixes** depending on what you need. Side filters by tier, class, equipment type.

4. **To create a loot filter**: click **Loot Filters** → **Create new** → define rules in the visual editor → export as an `.xml` file you'll copy to your LE save data folder.

5. **To share**: every build, filter, or character profile has a unique URL you can paste into Reddit, Discord, etc. The planner supports versioning so old builds stay accessible.

## Honest limitations

**Build collection has no curation**: most are auto-crawled from YouTube; some are outdated or meme builds disguised as meta. You have to filter by cycle/patch before trusting them.

**Planner light on advanced calculations**: for shock DPS, critical ailment scaling, or affix min-maxing, the planner falls short. Path of Building for LE covers that better.

**Occasional Cloudflare**: the site uses Cloudflare strict mode; during traffic spikes post season-launch a challenge page sometimes shows up for 2-3 seconds.

**English only**: no localization to Spanish, German, or other languages.

**No dedicated mobile app**: usable from a phone but ugly. The planner is desktop-first.

**Moderate ads**: there are banner ads and a newsletter prompt. Manageable with adblock; nowhere near the intrusive level of some competitors.

## How to start

1. [lastepochtools.com](https://www.lastepochtools.com/). No signup to read.

2. **If you're new to LE**: go to **Builds** → filter by current cycle (Season 4) → sort by views/likes to see popular builds. Click one → open planner to understand structure.

3. **If you want to build your own**: go to **Build Planner** → New build → pick class. The UI is self-explanatory: click a skill to open its tree, drag/drop gear from the side DB.

4. **For loot filters**: go to **Loot Filters** → search a popular one for your mastery → export → copy the file to `LastEpoch/Saved/Filters/` → activate it in-game with Shift+F.

5. **Optional account**: signing up lets you save builds, filters, and characters in your permanent profile; without it you'll only have shareable URLs.

6. **Recommended bookmark**: the home (lastepochtools.com) by default takes you to the most recent builder. Useful when you're actively iterating builds.
