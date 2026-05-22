---
title: r2modman vs Thunderstore Mod Manager — standalone OSS o platform-backed
description: Comparación corta entre los dos managers oficiales del catálogo Thunderstore. El veterano open-source vs el oficial respaldado por Overwolf.
---

r2modman y Thunderstore Mod Manager (TMM) cubren el mismo job to be done — instalar mods de Valheim del catálogo Thunderstore con BepInEx automático. Pero el plumbing y la filosofía son opuestos. **r2modman** es la pieza standalone open-source que la comunidad veterana usa. **TMM** es la app oficial endorsed por el equipo Thunderstore, distribuida vía Overwolf y orientada a un onboarding más amigable.

## Open-source vs platform-backed

r2modman es OSS (MIT) puro. Lo descargas, lo abres, modeas. No hay cuenta, no hay telemetría, no hay servicios background.

TMM es **closed-source** y vive **dentro de Overwolf**. Para usarlo necesitas:

- Instalar Overwolf (~150MB) — plataforma de overlays in-game con su propio service en background.
- Crear cuenta Overwolf (free, pero registración requerida).
- Aceptar ads opcionales en el panel principal (toggleables pero on por defecto).

Para quien viene del modding clásico (Skyrim, Fallout), Overwolf se siente como overhead innecesario. Para quien viene de Minecraft/CurseForge, Overwolf es familiar — CurseForge App también vive en Overwolf.

## Onboarding

TMM gana acá. Su flujo está diseñado para que un usuario que nunca modeó pueda hacer todo sin tocar archivos:

- Detección automática de installs (Overwolf integra esto).
- BepInEx se descarga sin que el user vea el filesystem.
- Notificaciones in-game cuando hay updates.
- UI con copy más explicativa.

r2modman es más sencillo y directo, pero asume que el usuario está cómodo con un installer standard y conceptos como "profile".

## Cross-platform

r2modman soporta **Windows, Linux y macOS**. Es la única opción para modders no-Windows.

TMM es **Windows-only** porque Overwolf no tiene clients para otras plataformas. Si juegas Valheim en Linux (Steam Deck, Proton, dual-boot), TMM no aplica.

## Overlay in-game

TMM tiene **overlay in-game** con shortcut configurable (default `Ctrl+Shift+M`). Aprietas eso mientras juegas y el manager se abre encima del juego — puedes activar/desactivar mods, ver logs, todo sin alt-tab. Cuando hay update de un mod, una notificación toast aparece in-game.

r2modman no tiene overlay. Para cualquier tweak, alt-tab al desktop.

Para quien tweekea modlists frecuentemente, este overlay es genuino valor. Para quien instala una vez y olvida, irrelevante.

## Cuándo gana cada una

| Escenario | Mejor opción |
|---|---|
| Primer mod jamás, quiero el flow más guiado | TMM |
| Modeo desde Linux/macOS | r2modman |
| Evitar Overwolf y servicios en background | r2modman |
| Notificaciones de updates sin abrir el manager | TMM |
| Tweaks frecuentes con overlay in-game | TMM |
| Workflow standalone, OSS, auditable | r2modman |
| Ya tengo Overwolf por CurseForge | TMM |
| Modlist compartida con community veterana | r2modman (asume r2modman en guías) |

## Veredicto

**Usa r2modman si**: Quieres algo limpio, standalone, OSS, sin overhead de plataforma; modeas Linux/macOS; eres parte de la comunidad veterana donde r2modman es el lingua franca.

**Usa TMM si**: Arrancas de cero y quieres el onboarding más amigable; ya usas Overwolf para otros juegos (CurseForge, Outplayed); valoras overlay in-game para tweaks rápidos; el overhead de Overwolf no te molesta.

Si dudas y tu PC es Windows: prueba TMM una semana — si no te conquista el overlay, migra a r2modman. La inversión de tiempo en aprender ambos managers es bajísima, no son herramientas complejas.
