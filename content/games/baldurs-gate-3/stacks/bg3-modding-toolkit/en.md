---
title: The complete Baldur's Gate 3 modding toolkit
description: "The six tools used together to mod BG3 on PC stably: manager, mod hub, base frameworks, and the documentation that keeps it all from crashing."
---
Modding Baldur's Gate 3 on PC isn't install-a-file-and-done: it's an ecosystem of pieces that depend on one another. This stack gathers the six tools that cover the full workflow, from download to stable game, in the order they come into play. They aren't the "best" standalone tools, but the ones that complement each other so the setup works.

## The flow

It all starts at **Nexus Mods**, the hub nearly every mod you install comes from, with versions, requirements, and comments that flag if something broke with the latest patch. From there, **BG3 Mod Manager** is the core: it imports .pak mods, lets you sort the load order with fine control, and exports the result to the file the game reads at launch.

When a mod needs more than data changes, **Baldur's Gate 3 Script Extender** comes in: the runtime hook that enables advanced mods' real logic, installable from BG3 Mod Manager itself. If your mods add races or classes, **ImpUI** stabilizes the interface so those options appear without breaking the UI, and **Mod Configuration Menu** gathers all your compatible mods' settings into a single in-game panel.

Running through the whole process is the **BG3 Modding Community Wiki**: the load order guide and installation tutorials that prevent rookie silent crashes. It's the reference worth keeping open while you build the setup.

## Why these six

- **Management and source** → BG3 Mod Manager + Nexus Mods: where to get the mods and how to order them.
- **Base frameworks** → Script Extender + ImpUI + Mod Configuration Menu: the infrastructure advanced mods depend on.
- **Documentation** → BG3 Modding Community Wiki: the manual that explains the why behind each step.

## Closing

The key to the stack is complementarity: each piece covers a different layer of the workflow, and together they turn BG3 modding from a fragile process into a stable, maintainable setup. Start with the manager and the hub, add the frameworks only when a mod asks for them, and lean on the wiki for any order question. Each tool has its full analysis in the codex.
