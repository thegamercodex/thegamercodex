---
title: TarkovTracker
description: Open-source task and hideout module tracker with team-member sync to coordinate wipe progress across the group.
quickTake: TarkovTracker is the essential tool for team wipes. Cross-account sync tells you exactly which Found-In-Raid item the group needs at any moment, preventing three players from selling the same wrench the fourth needs for a task.
---

## What it is

TarkovTracker is an open-source web app maintained by the TarkovTracker.org organization on GitHub. It lets you mark progress per task (per trader), per hideout module, and per required Found-In-Raid item, with cross-member sync to coordinate item accumulation. GPL-3.0 license, public repo, active contributor community.

## What problem it solves

Tarkov has hundreds of tasks and dozens of hideout modules. Each task asks for specific items that often need to be "Found-In-Raid" (FIR), meaning they only count if you loot them yourself. Without a tracker, it's trivial to lose hours farming something you already have or accidentally selling an FIR item earmarked for a future task. TarkovTracker centralizes the state.

## Differentiation

Versus Tarkov Advisor (similar feature set but closed-source, with extra stash and tier list), TarkovTracker has the longest track record, is open-source, and has the best team-sync implementation. The trade-off is more minimalist UX — no tier list layout or stash management.

## What people use it for

- **Mark completed tasks** and see next available tasks per trader.
- **Track FIR items** required for future tasks so you don't sell what you'll need.
- **Hideout module checklist** with total rouble cost and pending materials.
- **Team sync**: group wipes where everyone sees others' progress and coordinates who farms what.
- **GraphQL API**: for devs who want to build dashboards on top of their team's state.

## Who this tool isn't for

If you play solo casually and don't care about optimizing quest order, you can get by with a wiki task list. If you want item tier lists by value and stash management, Tarkov Advisor adds those layers.

## How it's used in practice

1. Visit tarkovtracker.io and register with email or Google.
2. The dashboard shows all tasks ordered by trader. Mark completed ones and hide the ones you don't want to see.
3. The Hideout section shows pending modules with total cost and required materials.
4. For team sync, create a team and share the code with your partners — everyone sees each other's progress.
5. The "Required Items" section aggregates all FIR items you need, summing demand across team members.

## Honest limitations

- **Minimalist UX**: effective but no frills. If you want tier lists or stash management, it's not here.
- **English only**: no localization.
- **Data depends on tarkovdata**: the tarkovdata repo is the source of tasks/items. When a patch changes objectives, there's a lag while it updates.
- **Team sync requires discipline**: if members don't mark progress, the sync adds nothing. Works best with committed teams.

## How to get started

Visit tarkovtracker.io and register. For team coordination, the first member creates the team from Settings and shares the invite link. The public repo at github.com/TarkovTracker/TarkovTracker accepts PRs and bug reports.
