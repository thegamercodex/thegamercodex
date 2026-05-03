---
title: Exilence CE
description: Desktop application that calculates your real-time net worth in Path of Exile, shows hourly income with historical snapshots, and lets you group with players to see combined party wealth.
quickTake: The reference tool for any player who wants to know how much they're actually earning per hour with their farming strategy. Initial learning curve exists, but once configured it becomes invisible and gives you data that changes real decisions about how you play.
---

## What it is

Exilence CE (Community Edition) is a desktop application that connects to Path of Exile's public API and poe.ninja's API to calculate in near real-time how much your character, inventory, and stash tabs are worth combined, expressed in chaos orbs and divine orbs. It takes periodic snapshots of your wealth and graphs them over time, letting you see hourly income, session profit, and breakdown by item categories.

The project is the direct community successor to **Exilence Next**, originally created by Viktor Gullmark, who stopped maintaining it in September 2022. A community group forked the code under the exilence-ce organization on GitHub and continued development. The latest stable version is v1.2.11 (February 2025), with support for Settlers of Kalguur, Necropolis, and prior leagues.

It's free software, licensed under Creative Commons BY-NC 3.0, available for Windows, macOS, and Linux.

## What problem it solves

Path of Exile has a complex economy with dozens of currencies, thousands of uniques with variable prices, rare items whose value is hard to estimate, stack sizes of divines fluctuating against chaos orbs, and a market that changes daily during the first weeks of each league. Knowing what you're really worth would require manually price-checking every item in your stash, calculating sums, and repeating the process constantly. Unfeasible.

Beyond static valuation, there's an even more important problem: **farmers don't know how much they're earning per hour with their current strategy**. Without systematic tracking, decisions about what to farm get made by intuition ("I feel I'm earning well with juicy maps") and not by data. Changing strategies takes weeks to "feel" the difference, and many players stay stuck in suboptimal strategies without knowing.

Exilence CE solves both problems. It tells you what you're worth now, what you were worth an hour ago, and by extension how much you're earning. With that data, comparing two farming strategies goes from being a feeling to being a measurable experiment: an hour with strategy A, an hour with strategy B, and the numbers decide.

## What people use it for

Typical use cases:

**Personal hourly income tracking.** Use case #1 historically. You start a session, hit the timer, farm your usual content for an hour or two, and at the end see exactly how many chaos/divines you generated per hour. This changes strategy decisions.

**Farming strategy comparison.** Try Heist for an hour, then maps with sextants for another, then delve for another. The graphs make it clear which pays better with your current investment level and your build.

**Party tracking sessions.** If you farm with friends, everyone can connect to the same Exilence group and see combined group wealth, breakdown per member, and aggregated income. Useful for groups that split loot.

**Historical snapshots to analyze league progression.** Some players use Exilence throughout the entire league and at the end have a graph of their wealth curve, useful to understand when they made big jumps and why.

**Validation of drop strategies.** When someone says "this strategy generates 50 div/hour", you can verify it on your own account before investing many divines in setting up the strategy.

## Differentiation from poe.ninja and Official PoE Trade

These three tools touch the economic ecosystem but do different things:

**poe.ninja** tells you what items are worth in the global market. It's public price information for all players. It doesn't know your stash.

**Official PoE Trade** is where you buy and sell individual items. It doesn't aggregate value or do tracking, it's transactional.

**Exilence CE** is the only one that knows your personal stash, calculates your private wealth, and tracks how it changes over time. It uses poe.ninja's prices as reference (in fact, depends on its API), but the information it produces is individual and temporal: your net worth, your income, your progression.

The three complement each other. poe.ninja gives you market context, PoE Trade executes your transactions, Exilence measures how all of it impacts your personal economy.

## Honest limitations

**Update cadence is slow.** The latest official release is v1.2.11 from February 2025. The community fork is alive (open issues, present maintainers), but doesn't have the release cadence Exilence Next had in its best years. This matters because when GGG adds new item types (runes, allflame embers, coffins, etc.), Exilence needs an update to recognize them. If you play a very recent league, some items may not appear in the calculation until the next patch ships.

**Depends on poe.ninja's API.** If poe.ninja changes its structure or goes down temporarily, Exilence can't price anything. This happened several times historically, and although the dependency is stable, it's not 100% risk-free.

**Initial setup has a curve.** You have to generate a POESESSID (your account session token), select which stash tabs to include, which league to track, and configure profiles if you play with multiple characters. First time takes 15-20 minutes. Then it's invisible.

**Doesn't work with SSF closed.** Solid Self Found technically does (the API works the same), but the tool's main utility —comparing prices with the market— loses meaning when the market isn't your market.

**Imperfect Linux/macOS support.** Although there are builds, historically non-Windows platforms get less testing. There may be specific bugs that take longer to fix.

**Your wealth becomes trackable.** If your Exilence session is public (in a group with others), you technically share your wealth information with that party. For most this isn't a problem, but if you play with strangers in public Exilence groups, consider what you're sharing.

## How it's used in practice

An established farmer's flow:

1. Before the session, opens Exilence CE in background.
2. Verifies the initial snapshot is correct (current net worth matches their intuition).
3. Starts farming their strategy.
4. Every 15-30 minutes, Exilence takes an automatic snapshot and updates the income graph.
5. At the end of the session, looks at the numbers: how much was generated, which specific items contributed most to the delta, whether there were outliers (a drop of an expensive unique that inflates the average).
6. Compares with previous sessions of the same strategy or with alternative strategies to make decisions about what to do next time.

For full league tracking, simply leaves it running all the time and at the end has the complete curve.

## How to get started

Download the installer for your OS from the releases page at github.com/exilence-ce/exilence-ce/releases. Install the app, open it, and follow the initial wizard:

1. Log in with your Path of Exile account (asks for your POESESSID, which you grab from the cookies of pathofexile.com).
2. Select the current league.
3. Mark the stash tabs you want included in the calculation (recommended: all those with currency, uniques, fragments, and valuable items; exclude leveling tabs and junk tabs).
4. Wait for the first snapshot (may take 1-2 minutes depending on how much stash you have).
5. Confirm the displayed net worth is reasonable.

From there the app updates by itself. For advanced use, read the documentation in the repo and consider joining the official Discord where the community resolves doubts and reports issues.