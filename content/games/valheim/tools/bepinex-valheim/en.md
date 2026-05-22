---
title: "BepInExPack Valheim"
description: "Pre-configured pack of BepInEx 5 — the plugin injection framework for Unity games — adapted specifically to Valheim."
quickTake: "To run any mod in Valheim, BepInEx must be installed. It's not optional: it's the piece that loads mod DLLs at game start. Any modern mod manager installs it automatically."
---

## What it is

BepInEx (Bepis Injector Extensible) is an open-source modding framework for Unity games. It injects a loader into the game binary that loads external DLLs as "plugins" at boot. It's been around since 2018, supports hundreds of Unity games, and is maintained by an open team.

**BepInExPack Valheim** is the Valheim-specific pre-configured version, packaged by denikson and maintained today by Azumatt, Vapok, and Margmas in the Valheim community. It bundles the correct BepInEx 5 (currently 5.4.23.x), a `doorstop_config.ini` already tuned to Valheim, plus game-specific patches to improve compatibility and performance.

## What it solves

Valheim has no official modding API. Without BepInEx, modding the game would require:
- Editing the game binary (manual assembly patching).
- Each mod reinventing how to inject itself.
- Mods would be mutually incompatible because each one patches its own way.

BepInEx solves this by being the **single entry point**:
- One patch to the game binary (`winhttp.dll` redirects to `BepInEx/core/`).
- It defines a plugin API any mod can use.
- It provides `Harmony` (a runtime patcher) and ConfigurationManager (in-game UI to configure mods).
- Mods follow a uniform convention: DLL in `BepInEx/plugins/`, inheriting from `BaseUnityPlugin`.

Without BepInEx, the Valheim modding ecosystem wouldn't exist.

## Differentiation

There's no real competitor. BepInEx is **the de facto standard** for modding Unity games of the last decade (Risk of Rain 2, Lethal Company, REPO, Valheim, Subnautica, and hundreds more).

Historical alternatives like **Unity Mod Manager** exist but aren't used in Valheim. For non-Unity games (Skyrim, Cyberpunk), the equivalent framework is different (SKSE for Skyrim, Cyber Engine Tweaks for CP77).

The only practical "choice" for someone modding Valheim is: install BepInEx automatically via r2modman/Gale/TMM (recommended), or manually by downloading from Thunderstore and unzipping into the game folder.

## What people use it for

**Running any mod in Valheim**. Without BepInEx, zero mods work. That's why every manager pulls it in as an auto-dependency.

**In-game mod configuration**. If a mod uses ConfigurationManager (most do), pressing F1 in-game opens a panel with all toggles, sliders, and dropdowns of every loaded mod.

**Debug logs**. When something breaks, BepInEx logs at `BepInEx/LogOutput.log` show which mod loaded, what failed, and why. For troubleshooting, that log is the first thing the community asks for.

**Developing mods**. To write your own mod, the BepInEx SDK + Jotunn as an abstraction library are the standard starting point.

## Who this tool is not for

The "not for you" filter doesn't really apply — if you're modding Valheim, **BepInEx is mandatory**. The question isn't whether to install it, it's how (manager or manual).

If you're NOT modding Valheim and only want to play vanilla: don't touch BepInEx. Installing it for no reason adds an injected loader that fires with the game and may conflict with anti-cheats in OTHER games on the same PC (Valheim itself has no anti-cheat, but for cleanliness, only install if you actually mod).

## How it works in practice

**Via mod manager (recommended)**:
1. r2modman/Gale/TMM auto-detect that BepInEx isn't installed when you enable the first mod.
2. They download and unzip it into the game folder with no user action.
3. When you launch from the manager, BepInEx loads and you'll see the black console open before the game, showing the loaded plugins.

**Manually**:
1. Go to `valheim.thunderstore.io/package/denikson/BepInExPack_Valheim/`.
2. Download the latest version ZIP.
3. Extract the contents into the folder where `valheim.exe` lives (typically `C:\Program Files (x86)\Steam\steamapps\common\Valheim\`).
4. Make sure `winhttp.dll` ends up in that folder — that's the file that injects BepInEx.
5. Launch Valheim normally from Steam. The BepInEx black console should open before the game.

## Honest limitations

**Disk footprint**. ~50MB for the BepInEx base + plugins. Your `BepInEx/` folder can grow fast with many mods loaded.

**Game patch compatibility**. When Iron Gate ships a big patch (Ashlands, Call to Arms), BepInEx may not work until denikson and the community update the pack. Typically takes 1-3 days. In the meantime, mods break and the community posts workarounds in the Discord.

**Security software conflicts**. Some antivirus engines flag BepInEx as suspicious because of the injection. False positive — the code is OSS, auditable — but you may need to whitelist it in Defender or similar.

**Verbose logs**. `LogOutput.log` can grow to several MB in long sessions with many mods. The community recommends clearing it between sessions to keep it readable.

## Getting started

**If you use a mod manager (r2modman, Gale, TMM)**: do nothing manually. Install your first mod and the manager handles it.

**If you mod by hand**:
1. Back up your Valheim folder in case something goes wrong.
2. Download BepInExPack Valheim from Thunderstore.
3. Extract into the game folder.
4. Launch Valheim — if the black console appears and reads "BepInEx 5.x.x.x" on the first line, it's installed correctly.
5. Any mod you download goes into `BepInEx/plugins/<mod-name>/` with its DLL inside.

For deeper guides, the official BepInEx wiki (`docs.bepinex.dev`) and the Jotunn docs (`valheim-modding.github.io/Jotunn/`) cover installation, troubleshooting, and mod development.
