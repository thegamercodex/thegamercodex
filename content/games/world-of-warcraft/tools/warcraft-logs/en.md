---
title: "Warcraft Logs"
description: "The canonical raid logging and analysis service for WoW since 2014. It uploads combat logs, parses them boss by boss, computes global percentiles, and maintains historical leaderboards by spec, encounter, and season."
quickTake: "If your guild seriously raids Mythic, Warcraft Logs is not optional. It is the infrastructure WoWAnalyzer, Wipefest, and the entire raid PvE conversation sit on top of. The Premium tier ends up practically mandatory if you want to extract its full value."
---

## What it is

Warcraft Logs (warcraftlogs.com) is the dominant combat logging service for WoW. Launched in 2014 by Kihra, it parses combat logs uploaded by players and turns them into navigable reports: damage done, healing taken, deaths, interrupts, dispels, cooldown usage, mechanic positioning — everything the log archive captures.

The site also maintains global rankings per encounter, difficulty, and spec. Each parse is compared against the world distribution (0 to 100 percentile) and top performers appear on public leaderboards. That percentile is the reference metric guilds use to evaluate recruit candidates.

Warcraft Logs is owned by Fanbyte (ZAM Network LLC), a subsidiary of Tencent — the same corporate group that operates WoWHead. Integration between both sites is real (cross-links, shared stats), but the two platforms run separate editorial teams.

## What problem it solves

WoW generates a massive combat log per raid (every spell cast, every damage instance, every heal, every cooldown, every death, with timestamps). Without parsing, that file is unreadable. Before Warcraft Logs there were several parsers (WowMeterOnline, WoL, etc.), but none consolidated.

Warcraft Logs solved three problems at once: automatic upload via addon (WarcraftLogs Uploader or ARL), fast parsing with a navigable UI, and contextual comparison against the rest of the world. That last point is key: knowing you did 500k DPS means nothing until you see that the 50th percentile for your spec on that boss is 480k and the 99th is 720k.

For progression guilds, logs are mandatory post-raid debrief. For individual players, the percentile is direct feedback on how your rotation, gear, and cooldown usage stack up against your spec globally.

## The difference vs. WoWAnalyzer and Wipefest

The three live in the `raid-logs` cluster but do different things:

- **Warcraft Logs** is **the engine**: raw database + parser + rankings. Without it, the other two don't exist — both consume logs uploaded to Warcraft Logs.
- **WoWAnalyzer** is **automated per-spec analysis**: reads your log and tells you "you used this cooldown 12 seconds late," "this buff had 78% uptime, you should be at 92%," with actionable suggestions.
- **Wipefest** is **mechanic and wipe analysis**: why the raid died, which mechanic failed, which player didn't dodge an AoE in time.

For individual review: WoWAnalyzer. For raid leadership / mechanics review: Wipefest. For raw data and leaderboards: Warcraft Logs. Most Mythic guilds use all three.

## What people actually use it for

**Post-raid review of your own performance**: open your log, see your percentile per boss, compare against the top of your spec, identify where you lost DPS or uptime.

**Guild review for raid leaders**: full pull timeline, deaths with cause, damage taken, cooldown coverage, identification of mitigation gaps.

**Recruiting**: guilds ask for a Warcraft Logs link as a CV. Average percentile on the current tier is the most-used filter for interviews.

**Theorycrafting**: compare top-100 parses for a spec to see which builds, talents, and rotations are working in practice vs. in simulation.

**Wipe debugging**: in an unexpected wipe, the log says exactly who died first, why, and which chain of events caused it.

## Who it's NOT for

- **Casual players who don't raid Mythic**: the setup (install addon, upload logs, read percentiles) is unnecessary overhead if you only do LFR or one-off Heroic.
- **PvP-only**: Warcraft Logs covers PvE. For arena, PvP-specific stats, there are other tools.
- **Mythic+ tracking**: WCL does parse M+ logs, but the dominant M+ tool is Raider.IO.
- **Step-by-step automated analysis**: for "what should I concretely do to improve," WoWAnalyzer is more direct. WCL gives you the data; WoWAnalyzer gives you the suggestion.

## How it's actually used

1. Install **Advanced Combat Logging** (built into WoW: `/console combatLogVersion 2`) or the WoW companion app.

2. Enable in-game logging with `/combatlog` (or automated via addon like **AutoCombatLogger**).

3. After raid, upload the `.txt` file from your `Logs/` WoW folder. Three options: web upload, **Warcraft Logs Uploader** (desktop, Windows/macOS), or the companion via addon.

4. Wait a few minutes for parsing. You receive a link to the report.

5. Open boss by boss: Damage Done tab for DPS, Healing for healers, Deaths for wipes, Buffs/Debuffs for critical buff uptime.

6. Compare against rankings: a dropdown filters by difficulty (LFR / Normal / Heroic / Mythic), region, and date range.

## Honest limitations

**Premium practically required for advanced analysis**: the free tier shows your logs and rankings, but **private logs** (guild-only), **historical parse comparisons**, **stat-by-stat breakdowns**, and **advanced filters** require Premium ($5/month or $50/year, depending on plan). For a Mythic guild, it's typically one or two officers with Premium who share deep analysis with the rest.

**Steep learning curve**: first visits are overwhelming. Tabs, filters, and metrics take time to understand. A new raid leader needs several weeks before extracting full value.

**Ranking inflation from gear and comp**: percentile isn't perfectly fair — teams with better comp or gear can skew percentiles. Variants exist (Best Performance Average vs. All Star Points) that help, but no rating is 100% comparable across guilds.

**Coverage limited to WoW Retail and Classic**: WCL doesn't parse SoD/Hardcore logs with the same depth as Retail. Improved over time but Retail remains the focus.

**Dated UI**: the interface works but isn't modern. Tab navigation, horizontal scroll, and dense tables are the norm.

**Tencent corporate ownership**: like WoWHead, owned by the Fanbyte/Tencent group. Same corporate chain ends in China. For users sensitive to privacy and data policy, worth knowing.

## How to get started

1. Create a free account at [warcraftlogs.com](https://www.warcraftlogs.com).

2. Install the companion (Warcraft Logs Uploader desktop or **WCL Uploader** addon). The desktop client is more stable; the addon more convenient if you raid regularly.

3. Enable Advanced Combat Logging in-game (`/console combatLogVersion 2` first time).

4. After your first raid, upload the log. Compare your first report against public rankings for your spec.

5. If your guild raids Mythic seriously, consider the Premium plan — or coordinate so an officer has it and shares deep analysis with the team.
