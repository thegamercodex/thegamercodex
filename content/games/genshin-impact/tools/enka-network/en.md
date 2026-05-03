---
title: "Enka.Network"
description: "Character showcase platform based on UID, with publicly visible builds and a public API that powers the Genshin Impact tool ecosystem."
quickTake: "If you want to share your builds publicly or research those of other players, Enka is the standard platform. Also critical infrastructure that powers Akasha and other tools."
---

## What it is

Enka.Network is a web platform that allows public viewing of any Genshin Impact player's showcased characters via their UID. Beyond its direct use, Enka functions as ecosystem infrastructure: its public API is the data source that tools like Akasha System use for community rankings.

It's an open source project, free, and available in 14 languages including native Spanish. Also covers Honkai Star Rail and Zenless Zone Zero, positioning itself as a multi-game tool of the HoYoverse ecosystem.

Unlike Akasha which focuses on comparative rankings, or Genshin Optimizer which is for personal optimization, Enka fulfills more specific role: exposing builds publicly for sharing, comparison, and consumption by other tools.

## What problem it solves

Genshin Impact has an in-game showcase system where you can show up to 8 characters to other players visiting your profile. But that showcase has limitations:

It's only seen when someone actually visits your profile within the game.

Not shareable as direct link.

Doesn't persist when you're offline.

Other players need to know your UID and add you as friend (in some cases) to see it.

Has no useful format for comparison or analysis.

For cases like "I want to share my build with a friend via Discord", "I want to see how that top player I saw in stream is built", or "I want analytics of my own account without being in-game", the in-game showcase falls short.

Enka.Network solves this by exposing showcases via public web. Any player can:

Share a permanent link to their showcase.

See the showcase of any public UID without being in-game.

Investigate detailed builds with calculated stats.

Compare configurations between accounts.

And along the way, feeds the ecosystem of tools that need programmatic access to this data.

## What people use it for

**Sharing builds on social media**: the most direct use case. You have an optimized Hu Tao build and want to show it on Twitter, Discord, or Reddit. You generate Enka link and share URL anyone can open to see your complete setup.

**Researching top player builds**: you saw a YouTube creator with spectacular build of a certain character. If their UID is public, you can see it on Enka and study exactly what artifacts, weapons, and stats they have.

**Verifying friends' builds**: your friend says their Raiden hits 1 million damage. You ask for their UID, look it up on Enka, and verify if they actually have the build they claim to have.

**Public backup of your progress**: if you want to visually document your progression over time, Enka works as visual timestamp of how your account is at specific moment.

**Showcase for community engagement**: many Discord or Reddit communities share Enka profiles regularly. Having an updated one facilitates engagement with other players.

**Meta research**: by seeing builds of many top players, you identify patterns: what weapons predominate, what target stats they aim for, what team comps they use. This complements what tools like Akasha do automatically.

**As base for other tools**: when you upload your account to Akasha System, the data comes from Enka.Network. When some new community-built tool needs account data, it also uses Enka. It's infrastructure.

## The unique role of Enka.Network in the ecosystem

It's important to understand Enka has dual function:

**For users**: public web showcase platform for sharing and viewing builds.

**For developers**: public API serving structured account data to other tools.

Akasha System, for example, doesn't have its own infrastructure to extract account data. What it does is query Enka.Network's API for registered UIDs, process that data, and generate its rankings. Without Enka.Network, Akasha wouldn't exist.

This means many ecosystem tools depend on Enka functioning correctly. It's similar to PoEDB's role in the PoE ecosystem: not only useful tool directly, also technical reference that other tools consume.

This aspect may not be visible to end user, but is important context: Enka is more fundamental to the ecosystem than appears at first glance.

## How it complements other tools

Enka works well in combination with tools you already have in the directory:

**With Akasha System**: you register your UID in Enka, add Akasha to ecosystem, and Akasha automatically tracks your builds for rankings.

**With Genshin Optimizer**: although GO works with your private inventory, Enka serves to "see inspiring builds" of other players and replicate them in your own GO.

**With KQM**: when KQM publishes recommended builds, seeing real implementations in Enka lets you see how current players apply those recommendations.

**With Honey Hunter World**: Enka shows final calculated stats, Honey shows primary data. Combining both allows understanding the "how each stat is built".

## Honest limitations

**Only shows characters in game showcase**. If you have 50 characters but only 8 are in showcase, Enka only sees those 8. To cover more characters, you need to rotate who you put in showcase.

**Requires your profile to be public**. In game settings, you must enable public visibility. If you have private profile, you don't appear in Enka.

**Latency between in-game changes and Enka**. When you equip new artifacts or level up, Enka can take minutes to hours to reflect changes. Not real-time.

**Only showcase data, not inventory**. Unlike Genshin Optimizer which knows your complete inventory, Enka only sees what's in showcase. For broad inventory analysis, GO is necessary.

**Doesn't have optimization tools**. Enka only exposes data, doesn't analyze or optimize. It's showcase and reference platform, not calculator. For active analysis you need other tools.

**Some characters may have incomplete data**. Very new characters or those with specific mechanics (like certain constellation abilities) may not be perfectly reflected in Enka initially.

**Doesn't include gameplay context**. Enka shows that a player has certain build but doesn't show how they play it, what team they use, or in what context. To understand execution you need video or stream.

**Profile linking can be confusing**. Creating your own profile in Enka requires registering UID and configuring settings. Some users find initial setup less intuitive than expected.

## How it's used in practice

The basic flows:

**To see another player's profile**:

1. You go to `enka.network` and input the public UID.

2. If the UID has public showcase, Enka shows characters with complete builds.

3. Click on each character shows details: final stats, exact artifacts with substats, weapon, talents.

**To create your own profile**:

1. In-game, configure your showcase with characters you want to display (8 slots).

2. In settings, enable public visibility.

3. Go to Enka.Network and input your UID.

4. Enka automatically extracts your showcase.

5. The URL of your profile (`enka.network/u/[uid]`) becomes permanent shareable link.

**For recurring use**:

Bookmark your own profile and profiles of players you follow.

Every time you update builds in-game, Enka reflects changes automatically (with latency).

Sharing Enka links is ideal for Discord, Reddit, Twitter — any platform where you want to show builds.

## How to get started

Doesn't require installation, registration, or account. You go to `enka.network` from any browser.

For your first time, practical recommendation: explore a couple of UIDs before focusing on yours. Some creators have public UIDs visible in their videos (e.g., in streams). Investigating their profiles familiarizes you with the format and shows you what information is visible.

To create your own profile:

1. In-game, open Paimon menu (ESC).

2. Go to your player profile.

3. Configure "Character Showcase" with the 8 characters you want to display.

4. In "Edit Display" verify that showcase is publicly visible.

5. Your UID is in the bottom right corner of the settings menu.

6. Input the UID in Enka.

For Spanish users, Enka has Spanish-translated interface. Change language from the top corner of the site. Translation quality is good, didn't feel "Google translate vibes" like in other tools.

For maximum benefit of the ecosystem:

Enka as public source of your account.

Akasha System to see your rankings vs community (uses Enka data).

Genshin Optimizer for personal inventory optimization.

KQM to understand what goals to pursue.

Each tool brings specific perspective of the complete account management and optimization cycle.