---
title: "SkinPeek"
description: "Open-source Valorant store tracker: daily store, accessory shop, night market, and full skin catalog."
quickTake: "If you farm VP waiting for your skin, SkinPeek + the Discord bot notify you automatically when it appears. Free, open source, and no web-login friction."
---

## What it is

SkinPeek is an open-source project maintained by giorgi-o on GitHub under MIT license. Originally a Discord bot that notified you about your daily store, now also has a website. Fully free, no premium tier, no ads. Active since 2022.

Covers: your 4-skin daily store, accessory shop, night market when active, and full skin catalog with stats (price, edition, animations, fx).

## What problem it solves

Valorant's store rotates every 24h with 4 random skins. If you're chasing a specific skin, opening the client each day to check is tedious. For night markets (limited-time events with discounts), forget what's this weekend while you're away.

SkinPeek solves this. The Discord bot sends a notification when your wishlisted skin appears in your daily store. The web shows your store and night market without entering the game.

## How it differs

Versus Blitz.gg / Tracker.gg that also have daily store viewers, SkinPeek is **specialized in skins only** and has the **integrated Discord bot** the others lack.

Versus the Valorant client directly, SkinPeek has a **wishlist + notification system** the client doesn't expose.

Versus other shop trackers that have come and gone, SkinPeek has the advantage of being open-source and actively maintained — lower risk of sudden shutdown.

## What people use it for

**Automatic wishlist notification**: configure "I want Prime Vandal" and the bot pings you on Discord when it appears in your daily store.

**Daily store check without entering the client**: fast web viewer to check today.

**Night market preview**: when Riot announces night market, SkinPeek shows it as soon as the bot updates with the API.

**Browse the full catalog**: explore all of Valorant's historical skins with stats. Useful for editorial wishlist.

**Tracking accessory shop skins**: rotation of gun buddies, cards, and sprays.

## Who it's not for

If you don't buy skins (gameplay-only player), SkinPeek is invisible to you.

If you only want stats, not skins, other tools (Tracker.gg, etc.) cover that. SkinPeek is niche.

If you don't use Discord, you lose the best feature (bot notifications). The web is still useful but less compelling.

## How to use it in practice

1. Go to `skinpeek.com` or add the bot to your Discord (link on GitHub).
2. Auth with Riot account via OAuth (needed to see YOUR store, not shared).
3. Configure wishlist by selecting skins you want.
4. Bot sends notification when a wishlisted skin appears in your daily store.
5. For night market: bot announces when it starts, showing what you got.

## Honest limitations

**Riot auth has perceived risk**. SkinPeek requests Riot credentials (via official OAuth), which some players distrust. The integration is legitimate but requires comfort with third-party auth.

**Open source but solo dev**. giorgi-o actively maintains, but solo project. If they leave, continuity risk.

**Discord bot can rate-limit**. Discord bots can hit rate limits or occasional downtime.

**Not localized**. English only.

**No local-currency pricing**. Always in VP, no USD/EUR/etc. conversion. Your client converts.

**Doesn't replace the client for buying**. The transaction has to happen inside Valorant. SkinPeek is lookup + notification, not e-commerce.

## How to get started

If you care about skins: add the bot to your Discord server, configure wishlist with 5-10 skins you'd want. In 1-2 weeks you'll see the first ping when one appears. No additional friction. If you don't use Discord but want web viewer, the `skinpeek.com` page takes you to the same lookup.
