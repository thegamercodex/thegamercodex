---
title: "Enka.Network (Honkai: Star Rail)"
description: "Public character showcase and open source API for Honkai: Star Rail. Works as the build-sharing layer and as the data source for other tools in the ecosystem."
quickTake: "If you want to share your build with someone, Enka is the link. It's also the API that tools like Fribbels consume to extract your roster without you importing data manually."
---

## What it is

Enka.Network is a web platform that displays a player's public characters from their UID. For Star Rail, it reads the in-game showcase and builds a page with the complete details of each unit: light cones, traces, eidolons, final stats and relics with their individual substats.

It's an open source project maintained by the Enka team (`github.com/EnkaNetwork`) that originally started for Genshin Impact and was extended to Star Rail and Zenless Zone Zero. The whole infrastructure is free, no login, no aggressive ads, no paywalls.

Beyond the visual interface, it exposes a public API that serves the same data in JSON format. That API is the backbone of a good chunk of the tools ecosystem: Fribbels, several calculators and community dashboards query Enka instead of asking the user for credentials.

## What problem it solves

Star Rail has no in-game system to share builds. If you want to show someone how you've equipped Acheron, options are screenshot, video, or describing everything by hand. None scale well.

Enka solves that with a link. You enter your UID, the characters you have in showcase appear rendered with all their data, and you share the URL. Whoever opens it sees exactly what you see in your inventory, including relic substats that normally require clicks inside the game.

The second problem it solves is for tool developers: instead of each app asking the user to import data manually or hand over sensitive credentials, all of them read from the same public Enka endpoint. For the user it's transparent, for devs it greatly simplifies integration.

## Differentiation (vs similar-cluster tools)

The key comparison is with Fribbels HSR Optimizer. They're complementary parts of the same workflow: Fribbels is the optimization engine, Enka is the public presentation layer and the data source.

Concretely, Fribbels uses Enka as input. When you tell Fribbels "import my account", what it does under the hood is call the Enka API with your UID. Without Enka, Fribbels would force you to configure each relic by hand. That's why they coexist without competing: Enka shows and shares, Fribbels analyzes and optimizes.

Another important difference: Enka is read-only. It doesn't give you tier lists, doesn't recommend anything, doesn't calculate damage. It's a structured viewer of your showcase. That simplicity is a feature, not a limitation: every tool in the ecosystem builds on top.

## What people use it for

**Sharing builds on Discord or social**: you paste your Enka link and the other person sees all the detail without you sending screenshots. The de facto standard for showing builds in the community.

**Importing your account to Fribbels and other optimizers**: most stat tools ask for your UID and query Enka under the hood. You don't have to configure anything extra.

**Verifying substats before upgrading relics**: the game shows substats but hidden behind menus. Enka renders them all at a glance, which helps decide if a piece is worth continuing to upgrade.

**Asking the community for build feedback**: on HSR subreddits and Discords, the norm is for people to ask for your Enka link to give opinions. Without it the conversation is much slower.

**Showing progression in posts or videos**: creators use Enka captures to visualize setups in guides, compare before/after farming runs, or explain build choices.

## Who this tool isn't for

If you have no interest in sharing builds with anyone or in using external tools that consume its API, Enka provides little direct value. All the data is inside the game.

If you're looking for recommendations, tier lists or damage calculations, Enka does none of that. It's a neutral viewer. For analysis you need Fribbels, MD✦C or Prydwen.

If you're worried that anyone with your UID can see your roster, remember that showcase is already public from the game itself. Enka just renders it more neatly. If you want privacy, the solution is not enabling showcase, not avoiding Enka.

## How it works in practice

1. Make sure your character showcase is enabled in-game (privacy settings, make the showcase public).

2. Add to the showcase the characters you want to be visible (slot limit per the game's system).

3. Find your UID inside the game (bottom right corner of the main menu).

4. Go to `enka.network/hsr` and enter your UID in the search.

5. The page renders all characters you have in showcase with their complete build.

6. To share, copy the direct profile URL and paste it wherever you want.

7. If you're going to use Fribbels or any optimizer, you only need the UID. Those tools call Enka under the hood automatically.

## Honest limitations

**Only shows characters in showcase**: your showcase has limited slots, and only those characters are visible via Enka. To show others you have to rotate them in the showcase from the game.

**Cache can take time to refresh**: after changing a relic or leveling a character, Enka may show old data for minutes or hours until the cache updates. It's not instant.

**You depend on HoYoverse's privacy policy**: if at some point HoYoverse decides to close the public showcase endpoint, Enka stops working. It's a structural risk of the project.

**No history**: Enka shows the current state of your account. It doesn't save snapshots to compare your build today vs three months ago.

**The interface prioritizes data over aesthetics**: there are tools with prettier or more editorial UI, but all depend on Enka under the hood. Enka is the source, not the packaging.

**The UID is public and permanent**: once shared, you can't "recover" the link. If your showcase has info you later don't want to show, you have to change the showcase from the game.

## How to get started

No installation or account required. Go to `enka.network/hsr`, enter your UID, and that's it.

Before sharing your link, check what you have in the game's showcase. That's the only configuration you need to control: whatever you put there is what gets shown via Enka.

If you plan to use Fribbels or any optimizer, you already have half the setup done just by having the UID and showcase configured. Ecosystem tools assume Enka as a source and query it without you having to do anything extra.
