---
title: BattleMetrics vs Just-Wiped — which server tool to use
description: BattleMetrics and Just-Wiped solve different things in Rust's server world. One for tracking and admin, the other for wipe discovery.
---

The two mainstream Rust server tools are BattleMetrics and Just-Wiped. But they don't directly compete — they cover different needs. Just-Wiped is a server browser focused on fresh wipes. BattleMetrics is a tracking, alerts, and RCON platform. This comparison is to clarify when to use which.

## How they feel

**Just-Wiped** is minimalist: home page with filters up top (Wiped in last 1h/24h/week, tag, region), server list below. Click a server, see details, join. For someone wanting a fresh wipe on force wipe day, it flows in 30 seconds.

**BattleMetrics** is denser: dashboard with server list, player tracking section, alerts, RCON, history. More features but more overhead — requires registering an account and learning the flow.

## What only one covers

**Only Just-Wiped**:
- Filter by wipe schedule (weekly Tuesdays, biweekly, etc.) as a first-class option.
- Ultra-fast browser without login for casual use.
- Default view focused on recent wipes.

**Only BattleMetrics**:
- Watch lists of specific players with push/email alerts when they connect.
- Group tracking — track entire clans with related players.
- Remote RCON from browser/mobile.
- Session history and play patterns.
- Configurable alerts via Discord webhooks.

## When each wins

| Use case | Winner |
|---|---|
| Force wipe day, fresh server fast | Just-Wiped |
| Track specific player | BattleMetrics |
| Remote admin via RCON | BattleMetrics |
| Weekly wipe schedule discovery | Just-Wiped |
| Alerts when server goes down | BattleMetrics |

## Combined recommendation

Bookmark both. Just-Wiped is the home page on force wipe day and for casual wipe browsing. BattleMetrics is the daily driver if you admin a server, track players, or want alerts. They're not competitors — they're complementary.

If you only play casual without admin: Just-Wiped is enough. If you admin server or track players: BattleMetrics is necessary, Just-Wiped is nice-to-have.
