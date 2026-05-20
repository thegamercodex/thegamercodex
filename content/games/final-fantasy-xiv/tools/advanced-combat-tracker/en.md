---
title: "Advanced Combat Tracker"
description: "Windows desktop parser that captures FFXIV combat logs in real time, displays DPS/HPS overlays and customizable triggers, and uploads logs to FFLogs."
quickTake: "ACT is the cornerstone of FFXIV's parsing ecosystem: without it there are no logs on FFLogs and no in-game overlays. Its setup is notoriously intimidating for new users, but once configured it lives in the background and you barely touch it. Windows only and not officially tolerated by Square Enix."
---

## What it is

ACT (Advanced Combat Tracker) is a Windows desktop parser developed by EQAditu, originally for EverQuest and later adapted to multiple MMOs via plugins. For FFXIV it uses the **FFXIV_ACT_Plugin** (by Ravahn), which parses the client's network traffic to extract combat events.

ACT itself is a framework. The useful functionality comes from plugins:

- **FFXIV_ACT_Plugin**: the network parser — without this it captures nothing.
- **FFLogs Uploader**: automatically uploads logs.
- **OverlayPlugin**: engine for in-game overlays (on-screen DPS meter during combat).
- **Hojoring / Hojoring.RaidcoachPlugin**: sound and text triggers for mechanics.
- **TriggernometryPlugin**: advanced engine for customizable triggers.

It's free, closed-source for base ACT. The FFXIV plugin isn't open source either. Most overlays are open source.

## What problem it solves

Square Enix doesn't provide an official parser, combat metrics, or exportable log files. For post-combat analysis or in-pull feedback, ACT is the only real option.

The concrete problems it solves:

- **On-screen overlays**: see your DPS live, the healer's HPS, damage taken, without alt-tabbing.
- **Capture for FFLogs**: no log uploads to FFLogs without ACT.
- **Mechanic triggers**: sound alerts when your name appears in a cast (e.g., "you have to soak").
- **Party metrics**: compare your DPS vs the rest in real time.

Without ACT, optimizing performance is blind. With ACT, you have immediate data.

## How it differs from XIVLauncher / Dalamud

- **ACT**: parser that lives outside the client, listening to network traffic. Works even if you play with the official launcher.
- **XIVLauncher + Dalamud**: alternative launcher with plugins that inject into the client. Some plugins replicate ACT functions (DPS meter, triggers) but run in-process.

In practice many raiders use both: XIVLauncher for QoL and general plugins, ACT for logs and FFLogs upload. Functions overlap in parts, but the ACT ecosystem around FFLogs remains the standard.

## What people actually use it for

**Upload logs to FFLogs**: the primary flow. No ACT, no upload, no parse rankings.

**DPS overlay during raid**: M+1, healer, and DPS reviewing damage in real time to identify if someone's below tempo.

**Custom triggers**: the tank uses Triggernometry to play a specific alarm when their name appears in a certain raidwide AoE cast.

**Savage / Ultimate mechanics**: auto-generated callouts ("you have northeast tower") via plugins like Cactbot.

**Post-pull analysis without opening FFLogs**: the log stays on disk; you can re-analyze it in ACT without uploading if you want.

## Who it's NOT for

- **Mac / Linux users**: ACT is Windows native. Works in Wine but it's fragile. Most use a Windows VM or a second PC.
- **Casual players without raid**: if you only do MSQ or roulettes, ACT is overkill. Just adds complexity without clear benefit.
- **Those worried about a ban**: Square Enix officially doesn't tolerate ACT — it's against TOS. In practice they never ban for normal use (millions of users) but technically you violate TOS. There are zones (PvP, certain alliance content) where visible overlays shouldn't be used.
- **Setup-averse**: initial configuration requires touching firewall, antivirus allowlists (some AV flag ACT), network permissions. If that makes you nervous, consider whether it's worth the effort.

## How it's actually used

1. Download ACT from advancedcombattracker.com.

2. Run as administrator (required for the network parser).

3. In **Options → Plugins**, install the **FFXIV ACT Plugin** (link in official docs). Configure the region (NA/EU/JP) and process the client files.

4. Install **FFLogs Uploader** and connect your account.

5. Optional: install **OverlayPlugin** for on-screen overlays.

6. Open FFXIV, enter an encounter, and ACT should start capturing (you'll see events in the ACT log).

7. Post-pull: FFLogs Uploader notifies you that it uploaded and gives you the link.

## Honest limitations

**Windows native only**: macOS and Linux require Wine/CrossOver with specific setup. Fragile against game updates.

**Technical TOS violation**: SE doesn't formally allow ACT. Nobody has been banned solely for using it in normal play, but technically you're exposing your account. Never use in PvP.

**Intimidating setup**: first setup can take 30-60 minutes. Common errors: firewall block, AV false positive, plugin out of date post-game-patch.

**Vulnerable to patches**: when an FFXIV patch lands, the FFXIV plugin typically requires updates. Sometimes takes 1-3 days to be ready.

**Plugin desync**: with so many plugins (DPS overlay, triggers, raidcoach, etc.) it's easy to have one out of date that crashes ACT. Maintaining the ecosystem takes discipline.

**Classic Windows UI**: ACT looks like a Windows XP app. It works, it's not pretty.

## How to get started

1. Download ACT (advancedcombattracker.com) — .NET 4.7+ required.

2. Follow the official FFXIV plugin setup guide step by step. Don't skip firewall and AV steps.

3. Configure FFLogs Uploader with your API key (you generate it on fflogs.com).

4. Try in a test encounter (e.g., trial roulette). Verify the log captures and uploads.

5. Once working, add overlays and triggers based on your role. Start simple: just DPS overlay first.

6. For advanced mechanics (Savage / Ultimate triggers), consider **Cactbot** (separate plugin) which comes with community-built pre-made triggers.

7. After game updates, update the FFXIV plugin before playing Savage — if the parser is broken, no logs are generated.
