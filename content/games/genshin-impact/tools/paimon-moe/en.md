---
title: "Paimon.moe"
description: "Complete wish, pity, and primogem planning tracker for Genshin Impact, available in 12 languages including Spanish."
quickTake: "If you play Genshin and pull regularly, Paimon.moe helps you not waste primogems. Especially vital for F2P and low-spenders."
---

## What it is

Paimon.moe is a web application dedicated to managing everything related to Genshin Impact's gacha system. Its central functionality is the wish tracker, which records every pull you make and shows you precise statistics on pity, obtained rates, and future planning.

Beyond basic tracking, Paimon.moe includes primogem calculators for guaranteeing specific characters, projected banner calendar, daily task tracker, and ascension materials calculator. It's practically a complete control panel for the game's gacha economy.

It's completely free, no registration required, open source, and available in 12 languages including native Spanish. It's maintained by MadeBaruna and community contributors under MIT license.

## What problem it solves

Genshin Impact's gacha system is mathematically complex and the information the game gives you is minimal. You know how many primogems you have, yes, but you don't know:

How many wishes you have available considering your current pity?

How many primogems you'd need to guarantee the next 5-star character you want?

How many primogems can you farm free in the next 6 weeks?

When approximately does the character you want come back?

If you lose the 50/50 in this banner, do you have enough resources for the next?

Without a tracker, all these decisions are made by intuition. An F2P player who decides poorly can lose a desired character by just 10 wishes difference. Paimon.moe converts these intuitive decisions into informed mathematical decisions.

## What people use it for

**Historical wish tracking**: the most basic use case. Every time you pull, you record it (or import automatically via URL). Paimon.moe tracks everything: how many wishes you did on each banner, how many 5-star characters you got, what your success rate was, what your pity was when you won each character.

**Current pity calculation**: shows you exactly how many pulls you've done since your last 5-star. Critical when you're near soft pity (75+) and deciding whether to keep pulling or wait for the next banner.

**Future banner planning**: you input what specific characters you want and Paimon.moe calculates how many primogems you need, how many you currently have, and how many you can farm before those banners. It tells you if you have enough or not.

**Projected banner calendar**: HoYoverse doesn't officially announce future banners far in advance, but the community maintains reasonable predictions based on historical patterns. Paimon.moe shows these predictions, useful for planning 2-3 months ahead.

**Daily task tracker**: each day you can obtain primogems from various sources (commissions, daily check-in, abyss). Paimon.moe reminds you what to do and tracks how many primogems you're accumulating daily.

**Materials calculator**: you input which characters you want to ascend to what level, and it calculates how many specific materials you need (boss materials, talent books, mora, etc.). Useful for planning domain farming.

**Post-mortem analysis of past banners**: would you have been lucky with your last pull session? Paimon.moe shows you comparative statistics with the community to understand if your rate was lucky or unlucky.

## The importance for F2P players

Paimon.moe is especially vital for Free-to-Play (F2P) and low-spender players. While a whale can buy primogems without thinking, an F2P has finite resources and must plan carefully.

The typical calculation for an F2P is: "I need 90 wishes to guarantee the character in worst case, I have 60 wishes now, 6 weeks until the banner, in 6 weeks I farm approximately 30 additional wishes = I have enough for guarantee". Without Paimon.moe, this calculation is done by eye. With Paimon.moe, you do it with exact numbers.

This becomes critical when there are multiple desired characters in consecutive banners. Deciding which to prioritize, whether to pull until soft pity and stop, whether to buy Welkin Moon or not, all gets resolved with concrete data in Paimon.moe.

## How it's used in practice

To get started, there are two data input methods:

**Manual**: every time you pull, you go to Paimon.moe and register them manually. Slow but no technical setup required.

**Automatic with game URL**: Genshin Impact generates a temporary URL with your wish history. You paste that URL in Paimon.moe and it imports everything automatically. It's the recommended method.

Once you have your data, the typical flow is:

1. When you're going to pull in the game, first you open Paimon.moe.

2. You verify your current pity and rate-up status (whether you won or lost the last 50/50).

3. You calculate how many wishes are enough to reach soft pity or hard pity.

4. You decide whether to pull all or reserve some.

5. After pulling, you import or register the results.

6. Paimon.moe updates your database for future decisions.

For long-term planning, you go to the calculator section, input your objectives (which characters you want in next 2-3 banners), and Paimon.moe shows you if your current resources + projected farming are sufficient. If not, you adjust: pull less in this banner, wait for the next, or consider some extra primogem source.

## Honest limitations

**Doesn't replace game knowledge**. Paimon.moe tracks data but doesn't tell you which characters are good or whether spending resources on them is worth it. For that decision you need tier list guides or meta knowledge.

**Future banner predictions are estimates**. HoYoverse doesn't announce banners far in advance. Paimon.moe predictions are based on historical patterns and sometimes fail when HoYoverse changes expected order.

**Requires usage discipline**. If you don't register your wishes consistently (manual or automatic), the data isn't useful. Some users forget to import after pulling and lose track.

**Only covers Genshin Impact**. HoYoverse has other gacha games (Honkai Star Rail, Zenless Zone Zero) and similar tools exist for those games, but Paimon.moe specifically only covers Genshin.

**Automatic import can occasionally fail**. Changes in how HoYoverse handles wish history URLs sometimes temporarily break automatic import. Generally fixed in days but can be frustrating.

**Build recommendations are basic**. Paimon.moe includes build suggestions for each character, but they're simple compared to dedicated guides like KQM's. For serious optimization, complement with Genshin Optimizer and KQM guides.

## How to get started

Doesn't require installation or an account. You go to `paimon.moe` from any browser.

The first time, the most efficient is to import your complete history via URL. Genshin Impact has an option in wish history for "Get History URL" — you copy that URL and paste it into Paimon.moe. In seconds you have your entire history tracked.

If you prefer not to use the import (some users prefer manual registration), it also works. You register each wish session as you do them.

Once you have data, explore the different sections: Wish Counter for basic tracking, Calculator for planning, Banner Schedule for future predictions, Daily Check-in for tasks. You don't need to use all, choose those that add value according to your playstyle.

To complement Paimon.moe, it's worth following updated tier lists (Genshin Lab, KQM tier list) to know which characters are worth pulling, and using Genshin Optimizer once you obtain the characters you want to optimize.