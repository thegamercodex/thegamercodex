---
title: "Inventory Kamera"
description: "Automated scanner that captures your Genshin Impact inventory through OCR and exports it directly to Genshin Optimizer, eliminating tedious manual setup."
quickTake: "If you use Genshin Optimizer seriously, Inventory Kamera is practically a requirement. Converts 1-2 hours of manual input into 15-30 minutes of automatic scanning."
---

## What it is

Inventory Kamera is a Windows desktop software that automates importing your Genshin Impact inventory to Genshin Optimizer. It works by taking screenshots of the game while you navigate your inventory, processing those images with OCR (optical character recognition), and generating a JSON file that Genshin Optimizer can import directly.

It's an open source project led by Andrewthe13th with active community contributions, distributed under GPL-3.0 license. Currently only available for Windows, which is an important limitation for Mac or Linux users.

Despite not being officially endorsed by HoYoverse, it's widely used by the community without reports of issues. The tool doesn't connect to the game client or inject code, only reads screen screenshots, which keeps it in safe zone regarding anti-cheat.

## What problem it solves

Genshin Optimizer is the most complete tool for build optimization in Genshin Impact, but has a big operational problem: initial setup. For GO to be useful, you need to input your complete inventory (artifacts, weapons, characters) with all their exact data.

Manually, this means for each artifact:

Selecting the set among dozens of options.

Choosing the slot (flower, plume, sands, goblet, circlet).

Inputting the main stat with its value.

Inputting up to 4 substats with their precise values.

Specifying the artifact's current level.

Multiplied by 50-100+ typical artifacts in an active inventory, that's 1-2 hours of tedious work. Every time you farm new artifacts in domains, you repeat the process for the new ones. The friction is so high that many users abandon GO before taking advantage of its real value.

Inventory Kamera solves this by delivering complete automation. You start the scanner, open your inventory in-game, and the software does the rest. In 15-30 minutes you have your complete inventory imported to GO. For incremental updates with new artifacts, it takes 5 minutes.

This operational difference transforms GO from "theoretically useful but tedious tool" to "practical tool with low entry barrier".

## What people use it for

**Initial Genshin Optimizer setup**: the central use case. You just installed GO and need to populate your inventory. Inventory Kamera automates the process of inputting 100+ artifacts in minutes instead of hours.

**Updates after farming sessions**: you ran domains for an hour and got 10 new artifacts. Instead of inputting them manually, you run Inventory Kamera and it only scans the new artifacts.

**Synchronization after in-game changes**: you leveled up a character, upgraded a weapon, ascended artifacts. Instead of manually updating each change in GO, you re-scan and everything syncs.

**Complete inventory backup**: the JSON exported by Inventory Kamera works as backup. If something happens to your GO data, you have the file backed up.

**Migration between devices**: if you use GO on work computer and home, export/import via Inventory Kamera keeps both synced.

**Analysis of your account's complete state**: having complete scanned inventory enables macro analysis: what percentage of artifacts are useful, how many characters you have builded, where the gaps are. GO with partial inventory doesn't give this overview.

## How it complements Genshin Optimizer

Inventory Kamera and Genshin Optimizer are fundamentally connected tools:

**Genshin Optimizer**: the main optimization tool. Does calculations, optimizes builds, recommends configurations.

**Inventory Kamera**: the companion that solves GO's setup.

Without Inventory Kamera, GO still works but with high input friction. Without GO, Inventory Kamera has no utility — it only generates JSON files without purpose.

The operational reality is that practically any serious GO user ends up using Inventory Kamera (or a similar scanner) eventually. The automation is so superior to manual input that the additional setup of installing the software is worth it.

## About safety and legitimacy

Inventory Kamera works by reading screen screenshots. It doesn't connect to the game client, doesn't modify process memory, doesn't inject code, doesn't automate in-game actions (doesn't play for you). Only reads what's visible on screen, similar to how a human would read their inventory.

This is important because:

**Genshin's anti-cheat doesn't detect it as problem**: HoYoverse's system looks for tools that modify game behavior, not screen readers.

**No reports of bans for using it**: the community has used it widely for years without incidents.

**It's auditable open source code**: anyone can review the GitHub code to confirm it only does OCR of screenshots.

**Doesn't require special access**: doesn't need admin rights or access to game files.

Despite this, use of third-party tools is technically in gray area according to HoYoverse's terms of service. The reality is that information tools (like Inventory Kamera) aren't pursued, while tools that modify gameplay (cheats, real automation) can generate consequences.

For cautious users: the decision is personal, but realistic risk is very low. Thousands of players use Inventory Kamera or similar tools regularly.

## Honest limitations

**Windows only**. This is the most significant limitation. Mac and Linux don't have compatible versions. For users of those systems, options are: manual input in GO, or use Windows on virtual machine (big overhead), or change to alternative that does support their system.

**English only**. The interface is only in English, no Spanish localization. For Spanish-speaking users, there's language barrier although setup is relatively simple.

**Requires specific resolutions**. OCR works better with standard resolutions (1080p, 1440p, 4K). Unusual resolutions or multi-monitor display configurations may require adjustments.

**Initial setup can be frustrating**. Although faster than manual input, configuring Inventory Kamera the first time requires: downloading software, configuring resolution, adjusting game settings, ensuring game language in English (better accuracy), and understanding scanning flow. For non-technical users, can be intimidating.

**Game language must be in English**. OCR is optimized for English text. If you play Genshin in Spanish or another language, you need to temporarily change the game's language to scan, which is inconvenient.

**Occasional OCR errors**. OCR isn't 100% accurate. Occasionally can misread stats, especially with very specific values. GO allows manually editing imported artifacts, so these errors are correctable, but require attention.

**Updates can lag vs the game**. When new artifact sets or new weapons launch, Inventory Kamera needs updates in its database. This can take days after each patch.

**Intensive process**. While scanning, Inventory Kamera uses CPU significantly and requires Genshin to be open. Modest computers may experience lag during the process.

**Some functionalities limited**. The tool scans well basic artifacts, weapons, and characters, but certain advanced mechanics (like specific constellation level detection for characters) may require manual adjustment.

## How it's used in practice

The basic flow has several steps but becomes routine quickly:

**Initial setup (once)**:

1. Download latest release from GitHub.

2. Extract the file and execute.

3. Configure resolution corresponding to your Genshin setup.

4. Change game language to English temporarily (for better accuracy).

5. Configure game's interface scale according to recommendation.

**Scanning sessions**:

1. Open Genshin Impact and start the game normally.

2. Run Inventory Kamera with the game open.

3. Select what you want to scan (artifacts, weapons, characters, or everything).

4. The tool gives you instructions: navigate to your inventory in certain position, press scan.

5. The software automates screenshots and processes each item.

6. When finished, exports JSON file.

7. You import the JSON into Genshin Optimizer.

**For incremental updates**:

After initial scanning, subsequent scans only process new or changed items, which is much faster. 5-10 minutes typically.

## How to get started

It's the first tool in your directory that requires installation, so the process is different from the web-apps you've covered:

**1. Download**: go to `github.com/Andrewthe13th/Inventory_Kamera` and look for "Releases" section in right sidebar. Download the latest version (.zip file generally).

**2. Extract**: unzip the .zip in a folder of your choice.

**3. Execute**: run the main .exe file. Windows may ask for permissions because it's software not signed by Microsoft; this is normal in open source projects.

**4. Configure**: the first time adjust resolution, game language, and other settings according to instructions in the GitHub README.

**5. Test**: run a short scan (only artifacts for example) to verify everything works before complete scan.

For your first time, practical recommendation: read the complete README on GitHub before massive scan. There are important tips about game's interface scale, language, and setup that prevent frustrations.

If you find problems, GitHub's Issues section has reports of common problems with solutions. The community is active and responds frequently.

For Spanish users: temporarily changing Genshin's language to English is mandatory step. Consider it usage overhead. If you only play Genshin in Spanish and changing languages frustrates you, manual input in GO may be less invasive despite being slower.

For maximum benefit of the ecosystem: Inventory Kamera + Genshin Optimizer is practically inseparable combo. Once configured, the flow of "farm → scan → optimize" becomes efficient routine that transforms how you handle builds in Genshin.