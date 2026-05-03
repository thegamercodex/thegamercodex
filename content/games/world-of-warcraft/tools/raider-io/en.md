---
title: "Raider.IO"
description: "The dominant Mythic+ and raid-progression tracking service for WoW. Around since 2017, it includes a public web app with leaderboards, a companion addon for in-game lookups, and a score (RIO) the community uses as the reference invite metric for keys."
quickTake: "If you ever pug Mythic+, you live on Raider.IO. The RIO score is the invite filter for practically all LFG, and the companion addon is one of the most universally installed in WoW. Independent, founded by Aspyric, with no corporate ties to WCL/WoWHead."
---

## What it is

Raider.IO (raider.io) is the canonical service to track Mythic+ and raid progression in WoW. It combines three things: a public web app with character profiles, per-dungeon and per-season leaderboards; a companion addon (Raider.IO Mythic Plus) that displays player scores in-game when hovering over a name; and an API that third-party addons and tools consume.

Launched in 2017 by Aspyric, the project became mandatory reference when Blizzard introduced Mythic+ as the competitive end-game system. The **RIO Score** — an aggregate number of best timed keys per dungeon for the current season — went from useful metric to social standard: most PUG groups in LFG filter applicants by minimum score.

Unlike Warcraft Logs, Raider.IO is independent — not part of the Fanbyte/Tencent ecosystem. That gives it its own identity and policies.

## What problem it solves

When Blizzard introduced Mythic+, it didn't include leaderboards or a visible progression system. Each account had its own completed keys but there was no standard way to know how good someone was at M+ without inviting them and seeing for yourself. For PUG players this created a problem: how do you evaluate a stranger before putting them in a 30-minute key?

Raider.IO solved three things:

1. **Visible, comparable score**: the RIO Score consolidates current-season performance into one number with context (top 0.1%, top 5%, etc.).
2. **In-game lookups**: the companion addon reads any player's score and shows it in tooltips, in LFG, and in raid frames. That turned "who is this stranger?" into "score 3247, top 1%, OK invited."
3. **Leaderboards and tracking**: the web app shows historical runs, dungeons where you struggle, best time per dungeon, most frequent comp.

For PUG players, this became infrastructure. For guilds, it's reference for evaluating M+ candidates.

## What people actually use it for

**Filtering LFG invites**: the most common case. You're forming a key, your addon shows each applicant's RIO score, you invite based on a threshold tied to the key's difficulty.

**Seeing your season progress**: your profile has score per dungeon, best timed key, and delta vs. last week. Useful for identifying which dungeons you need to work on.

**Investigating a new player**: paste their name + server into raider.io and see full career: historical scores, raid progression, past teams.

**Raid progression tracking**: beyond M+, Raider.IO tracks raid progress (which bosses a guild has killed at what difficulty, world/region/server ranking). It's the easiest way to see where a guild stands in a tier.

**Key planning with your group**: using the web app, see which dungeons your group is weak on and which week's affixes favor which comp.

**Recruiting**: guilds review WCL logs + RIO profile before accepting an applicant. Implicit CV.

## Who it's NOT for

- **Players who don't M+ or raid**: if you only do leveling, professions, or RP, RIO doesn't apply.
- **PvP**: doesn't cover rated arena or rated BG. Different services exist for that.
- **Deep pull or boss analysis**: for "why did I fail this key," Warcraft Logs + WoWAnalyzer are the right ones. RIO gives the result, not the why.
- **Players sensitive to "score-based gatekeeping"**: the RIO system is honestly part of the social problem with PUG M+ (filtering by score can exclude competent players with less time). If the culture bothers you, you can ignore it, but the bulk of PUG meta uses it.

## How it's actually used

**On the web**:

1. Go to [raider.io](https://raider.io).

2. Search your character by name + realm.

3. See your profile: current RIO score, breakdown per dungeon, best runs, raid progression, relevant mounts/achievements.

4. To investigate another player, same — search box at the top.

5. For per-dungeon leaderboards: menu **Mythic Plus → Leaderboards**, choose region, dungeon, and week.

**With the addon (Raider.IO Mythic Plus)**:

1. Install via CurseForge, Wago, or the WoWUp manager.

2. Activate in-game (usually on by default after install).

3. In LFG, applicants display their score and best run per dungeon in tooltip.

4. In raid/party, hovering over a player name shows their current score.

5. The addon syncs with the raider.io API to keep data updated.

## Honest limitations

**Score-based gatekeeping**: the RIO system incentivizes a meta where high-score players exclude low-score players. For newcomers to M+, breaking that cycle is hard — if no one invites you for low score, you can't raise your score. Workarounds exist (own keys, guild groups), but the friction is real.

**Doesn't measure execution, measures outcome**: the score only reflects that you timed a key. It doesn't reflect whether you played the rotation well, if your positioning was correct, if you made smart decisions. For that read, you need logs.

**Moderate Premium tier nudge**: free tier is fully functional. Premium ($5/month) adds finer search filters, no ads, and extra stats. Not aggressive but the upsell appears.

**Addon occasionally lags behind the web**: sync between in-game client and raider.io.com can lag by hours. If you just timed a key, it may not show in the addon until the next sync.

**Doesn't detect boost runs / carries**: if someone bought a carry to raise score, RIO only sees the final score. There are high-score players without the actual skill for keys at that level — the RIO filter isn't perfect, you need to combine it with judgment.

**Retail-only coverage**: Classic and SoD have no M+ tracking because the system doesn't exist. For Classic raid progression, other tools (WoWProgress) have more historical data.

## How to get started

1. Open [raider.io](https://raider.io). Search your character (Region → Realm → Name) and review your profile.

2. Install the **Raider.IO Mythic Plus** addon via [CurseForge](https://www.curseforge.com/wow/addons/raiderio) or Wago.

3. Verify your character shows in-game with visible score when hovering over your own name in raid frames.

4. For a key, open LFG and review applicants' scores before inviting — the standard filter is usually "score equal to or above the key level you're running."

5. If you want to track progress, bookmark your raider.io profile: review weekly to see how your per-dungeon score grew.
