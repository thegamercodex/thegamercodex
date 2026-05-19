---
title: "Sens Converter — Apex Legends"
description: "Web app combining cross-game sensitivity converter (Apex ↔ CS2/Valorant/Overwatch/PUBG) with a filterable DB of 50+ Apex pros including eDPI, ADS multiplier, role, and region."
quickTake: "The main draw is the converter — if you jump from Valorant to Apex, keeping mechanical consistency across the two games is huge. As a bonus, the pro DB complements ProSettings, sometimes with fresher info."
---

## What it is

SensConverter.app is a cross-game tool specialized in sensitivity math. Lets you convert between 30+ mainstream FPS — input your current sens from one game, output the exact equivalent in another assuming the same cm/360°. For Apex specifically, it also has a 50+ pro DB filterable by role (entry fragger, IGL, support) and region (NA/EU/APAC/Latam). Free, no login.

## What problem it solves

Players who play multiple FPS suffer from sensitivity confusion: your Valorant sens is different from your Apex sens because games use different internal formulas. The professional way to maintain consistency is to calculate cm per 360° (how many centimeters of mousepad for a full rotation) and replicate that value across games. SensConverter does that math automatically — you just enter your current settings and which game to convert to.

## Differentiation

- **vs ProSettings.com**: ProSettings is a large static DB. SensConverter is calculator + smaller but role-searchable DB. Complementary.
- **vs Mouse-Sensitivity.com**: similar function, SensConverter has more modern UI and a more curated pro DB.
- **vs manual cm/360 math**: doing the math yourself is 5 minutes with a calculator and Google. SensConverter is 10 seconds.

## What people use it for

- **Migrate sens from another FPS to Apex**: switch from Valorant/CS2 with mechanical consistency.
- **Switch between Apex and casual FPS**: players who alternate Apex and Warzone or The Finals.
- **Calculate eDPI**: input DPI + in-game sens → output eDPI. Standard metric in the pro community.
- **Filter pro DB by role**: "what eDPI does the average entry fragger run?" or "what's the typical IGL ADS multiplier?"
- **Test different sens fast**: try 5 different pros' sens and see what feels best without having to visit each individual page.

## Who this tool is NOT for

If you only play Apex and never touch other FPS, the converter adds nothing — you only need configs. If you want full pro gear lists, ProSettings has more detail.

## How it's used in practice

1. Open [sensconverter.app/apex-pro-settings](https://sensconverter.app/apex-pro-settings/).
2. For the converter: "Sens Converter" tab → select source game (current sens), target game (Apex), enter DPI + in-game sens, read the output.
3. For the pro DB: "Apex Pro Settings" tab → filters by role/region/team, eDPI averages comparison, click on a pro for detail.
4. Apply the values manually in Apex settings.

## Honest limitations

- **Converter assumes same hardware**: if you change mouse or pad, the conversion isn't 1:1 anymore — you'll need to physically re-measure cm/360.
- **DB smaller than ProSettings**: 50+ pros vs 100+. If looking for a specific pro, check both.
- **No config export**: manual application of settings.
- **English only**.

## How to get started

Open [sensconverter.app/apex-pro-settings](https://sensconverter.app/apex-pro-settings/). If you're coming from another FPS, first use the converter to port your current sens to Apex — that gives you a familiar baseline. Then compare against the average eDPI for your role to see if you're in the normal pro range.
