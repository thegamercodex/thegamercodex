---
title: "ChampionMastery.gg"
description: "Community tool that maintains global Champion Mastery leaderboards by region and by champion. Open source, maintained since ~2016 by Derpthemeus, with recent commits reacting to Riot API deprecations."
quickTake: "The only tool in the ecosystem dedicated exclusively to mastery leaderboards. If you want to know who the player with the most points on your main champion is, or you're a one-trick wanting to see where you stand globally, this is the source. Niche and specific — not a replacement for op.gg/U.GG."
---

## What it is

ChampionMastery.gg is a community tool that maintains public leaderboards of League of Legends' Champion Mastery system, aggregated by champion and by region. It has existed since around 2016, maintained by Derpthemeus (identified single-maintainer), and is open source on GitHub under MIT license.

The product is direct: for each champion in the game, it lists the players with the most mastery points in each region (NA, EUW, KR, LAS, LAN, etc.). You can view global per-champion leaderboards, regional leaderboards, or a specific summoner's profile with all their champions ordered by mastery points and level reached.

It's 100% free, no paid tier. No mandatory login. Data updates periodically via Riot's API.

## What problem it solves

Champion Mastery is a progression system Riot added to recognize dedication to specific champions — more games played with a champion + better performance = more mastery points and higher levels. But the LoL client only shows your own mastery; there's no native way to see leaderboards of who has the most points on a specific champion.

That specific function is what ChampionMastery.gg covers. It's niche — not relevant to all players — but for a concrete sub-community (one-tricks, fans of a specific champion, content creators covering some champion's mains), it answers a question no other resource answers.

It also serves as informal signal of "per-champion expertise": if a player has top-10 global mastery on a champion, that's a sign they probably know how to play it at a deep level, regardless of their current rank.

## What people use it for

**Looking up a specific champion's leaderboard**: central use case. Who has the most mastery points on Yasuo globally? And in EUW? ChampionMastery.gg tells you.

**Finding famous one-tricks to learn from**: if you want to see streams or videos from the best players of your main champion, the top mastery list is a good starting point.

**Verifying your own ranking**: enter your Riot ID and see where you stand globally and regionally for each champion you play.

**Tracking informal competition with friends**: comparing who has more mastery on a specific champion is fun competition within a small community.

**Pedagogical research for coaches**: identifying one-tricks of rare champions (those who have top mastery without being meta) reveals players who have specialized heavily — useful for studying niche gameplay.

## Who this tool isn't for

ChampionMastery.gg covers a very specific function. It isn't what you need if:

- **You want general stats for your account** → OP.GG is more complete on summoner profile (rank, win rate, recent matches).
- **You want builds, runes, or tier lists** → U.GG and Lolalytics cover that function.
- **You're interested in general (not per-champion) ranking** → Riot's in-client leaderboards cover ranking by elo. ChampionMastery.gg is exclusively about mastery.
- **You're a casual player who doesn't care about mastery** → the tool doesn't add value if you're not invested in the mastery system.

## How it's used in practice

1. Go to `championmastery.gg`. No login.

2. Home shows navigation by: champions (to see leaderboards), summoners (to look up individual profiles), regions.

3. Clicking a champion opens a global leaderboard with top players ordered by mastery points; you can filter by specific region.

4. Clicking a summoner opens their profile with all their champions ordered by mastery points, mastery level reached, and progress percentage to the next level.

5. Summoner search: enter Riot ID and region; the tool imports data from Riot's API.

For recurring use: bookmark your own profile for tracking, and the leaderboards of your main champions to check evolution every so often.

## Honest limitations

**Single-maintainer**: the project depends on Derpthemeus. Bus-factor 1 mitigated by: (a) long maintenance track record (project active since ~2016, recent commits in jun-jul 2025 reacting to Riot API changes), (b) open source code — if the maintainer stopped, others could fork and continue.

**Very niche function**: the tool does one specific thing. If you're not interested in champion mastery as a progression system, the tool doesn't add value.

**Dependence on Riot's API**: if Riot changes the API (like the recent summoner IDs change in 2025), the tool requires maintainer updates. Generally migrations are quick, but they can have temporary gaps.

**Simple, non-modern UX**: the tool prioritizes function over form. Functional but visually unpolished layout.

**Data update isn't real-time**: leaderboards update periodically, not instantly. If you played 5 matches 10 minutes ago, your updated mastery points may take time to reflect.

**Doesn't include Mastery Chest tracking or Hextech progression**: the tool focuses exclusively on mastery points/levels, not on other progression systems Riot added later (chests, eternals, milestones).

## How to get started

1. Go to `championmastery.gg`. No registration.

2. Look up your own profile by entering your Riot ID and region. Look at your champion list ordered by mastery points — you'll probably identify patterns (champions you play heavily vs. occasionally).

3. If you have a clear main champion, open its global leaderboard and look at where you stand. For high-elo + dedicated main players, you may be closer to the top than expected.

4. If you want to learn more about your champion, the top global mastery players are usually famous one-tricks — search their content on YouTube/Twitch for specific gameplay.

5. For tracking competition with friends on a specific champion, share your profile URLs — it's a small but fun competition within a closed circle.

6. The tool is complementary, not a replacement for anything. Combine it with OP.GG (general profile) and U.GG (builds) for complete coverage.
