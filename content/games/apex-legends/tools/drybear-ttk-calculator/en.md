---
title: "Drybear's Apex Legends TTK Calculator"
description: "Google Sheets TTK calculator built by Christopher Mykles (Drybear) in February 2019, right after Apex's launch. Documents each weapon with damage profile, accounts for armor tiers, hipfire vs ADS, body part hit, and attachment effects."
quickTake: "The legendary OG of Apex weapon math. Today there are modern tools with better UX, but Drybear's spreadsheet remains the most comprehensive reference when you want to understand the raw mechanics, without abstractions."
---

## What it is

Drybear's TTK Calculator is a Google Sheet created by Christopher Mykles (known as Drybear, ex-NRG content creator and early competitive Apex reference) in February 2019. Documents each weapon in the game with full damage profile: base damage per bullet, damage falloff by distance, headshot multipliers, body multipliers, leg shot reduction, fire rate, mag size, reload time. Includes armor calculations for white/blue/purple/red shields. The spreadsheet is view-only — Drybear updates it after major patches.

## What problem it solves

When Apex launched in 2019, there were no specialized websites. Drybear, with a technical background, built the definitive spreadsheet in its first weeks, and it became **the** reference pros and community used for everything: balance discussions, tier lists, loadout decisions, theorycrafting. Today there are sites with better UX, but the Sheet remains where the most granular, unabstracted math lives — useful when you want to verify what a modern calculator tells you.

## Differentiation

- **vs apexseasons-weapon-stats**: ApexSeasons is the spiritual successor with modern web UI. Drybear is the raw Sheet — more math, less polish.
- **vs alienfusiongenerator**: alienfusion includes ability multipliers (Fortified, etc.). Drybear is pure weapon math without abilities.
- **Historical significance**: Drybear is cited in Reddit posts and video guides since 2019. Has legacy credibility newer sites don't replicate.

## What people use it for

- **Claim verification**: when someone says "X weapon kills faster than Y", the Sheet is the source the community uses to confirm or refute.
- **Deep theorycrafting**: if you want to calculate TTK manually with custom modifiers, the Sheet exposes the formulas directly.
- **Backup when sites are down**: if apexseasons or alienfusion are down, Drybear works — it's Google Sheets, rock-solid infrastructure.
- **Historical research**: see pre-patch damage values via the Sheet's version history.
- **Reference for writers/streamers**: balance discussion articles often include screenshots of the Sheet.

## Who this tool is NOT for

If you're not comfortable navigating Google Sheets — multiple tabs, visible formulas, less friendly filters — ApexSeasons' web UI is way more accessible. If you just want a quick "what's this gun's TTK", apexseasons or editorial tier lists answer faster.

## How it's used in practice

1. Open [Drybear's Google Sheet](https://docs.google.com/spreadsheets/d/1iNF-aa9eR6giunmHe4Ed_fpf0QnRHx_knxfruvjdMAE/edit).
2. Multiple tabs at the bottom: each weapon class has its tab (Assault Rifles, SMGs, LMGs, Shotguns, Snipers, Pistols).
3. Each weapon row has calculated columns: damage per shot, against each armor tier, calculated TTK, mag dump damage.
4. To customize: File → Make a copy → edit your copy with custom values.
5. Drybear's update notes are in a dedicated tab — read that to know the last update date.

## Honest limitations

- **UX is Google Sheets**: if you've never used Sheets complex navigation, there's a learning curve.
- **Update cadence depends on Drybear**: no editorial team, just him. After a patch, can take 1-2 weeks to update everything.
- **No visualizations**: comparisons aren't graphical, just numbers in cells.
- **Not mobile-friendly**: Sheets on phone is pain.
- **English only**.

## How to get started

Open [the Sheet](https://docs.google.com/spreadsheets/d/1iNF-aa9eR6giunmHe4Ed_fpf0QnRHx_knxfruvjdMAE/edit), bookmark if you plan to revisit. First time, navigate tabs to understand the organization (each weapon class in its tab). For specific queries, ApexSeasons is probably faster — use Drybear when you want depth or validation of a specific claim.
