---
title: "Sidekick"
description: "Overlay open source bajo MIT para Path of Exile 1 y 2 con price check, verificación de modificadores de mapa peligrosos, y soporte multi-OS."
quickTake: "Si querés un overlay que respete tu sistema (open source, sin Overwolf, sin telemetry escondida, corre nativo en Linux también) Sidekick es la opción. Tiene menos features que POE Overlay, pero las que tiene están bien hechas y el código está disponible si querés auditar o forkear."
---

## Qué es

Sidekick es un overlay open source bajo licencia MIT, escrito en C#, que se sobrepone al cliente de Path of Exile 1 y 2 para ofrecer price check de items con hotkey y verificación de modificadores peligrosos en maps antes de entrar.

Lo mantiene la organización Sidekick-Poe en GitHub, tiene ~475 stars, comunidad Discord activa, y se distribuye vía releases binarios para Windows y Linux (AppImage). Las donaciones van a Buy Me A Coffee.

## Qué problema resuelve

PoE tiene una abundancia de overlays, pero los más conocidos (POE Overlay, Awakened PoE Trade modificado) son closed source o tienen dependencia de runtimes terceros como Overwolf. Sidekick ataca el mismo nicho desde un ángulo distinto: un overlay simple, auditable, multi-OS, que hace lo esencial bien.

El feature de "dangerous map modifiers" es particularmente útil — Sidekick analiza los mods de un map antes de que entres y te alerta si hay combinaciones que pueden one-shotear tu build (reflect, no regen, ele weakness con mob específico). Eso reduce muertes inesperadas y pérdida de XP en hardcore.

## Diferenciación

Frente a POE Overlay: Sidekick es open source y multi-OS (Linux nativo); POE Overlay tiene más features pero solo Windows y closed source.

Frente a exiled-exchange-2: ambos open source, ambos multi-OS, pero exiled-exchange-2 está hecho específicamente para PoE 2 (y deriva de Awakened PoE Trade). Sidekick cubre PoE 1 y PoE 2 desde una sola codebase, lo que tiene pros (continuidad) y contras (PoE 2 puede ir un poco detrás de exiled-exchange-2 en updates específicas de PoE 2).

## Para qué la usa la gente

**Price check sin alt-tab**: hover sobre item + hotkey, aparece overlay con precio estimado. El workflow esencial.

**Map modifier check antes de entrar**: hover sobre map en stash o map device, hotkey, ves los mods analizados con flags de qué es peligroso para tu build.

**Verificación cruzada con otras tools**: muchos players usan Sidekick + un tracker externo (poe.ninja o PoE 2 Scout) para tener doble confirmación de precios.

**Setup en Linux**: para players de Linux que corren PoE vía Proton/Wine, Sidekick es de los pocos overlays que tienen build nativa AppImage y funcionan sin hacks.

**Forking y customización**: el código está abierto, si querés agregar feature específica (ej: alertas custom para modifiers que tu build no tolera) podés forkear.

## Para quién NO es esta herramienta

Si querés feature parity con POE Overlay (servicios browser, market history visual), Sidekick no llega ahí. Es deliberadamente más minimalista.

Si jugás SSF, no hay trade que checkear — el overlay aporta menos.

Si te asusta instalar binarios desde GitHub releases y preferís el wizard de Overwolf, POE Overlay es más amigable.

Si solo jugás casual unas horas a la semana, instalar y configurar overlay puede ser overkill.

## Cómo se usa en la práctica

1. Vas al repo en GitHub: `github.com/Sidekick-Poe/Sidekick`. Releases tab, descargás el binario para tu OS.
2. En Windows: ejecutás el installer o el portable. En Linux: AppImage marcado como ejecutable y corrido.
3. Configurás Sidekick para que detecte tu liga activa (Standard, Hardcore, temp league del momento).
4. Configurás hotkeys (defaults razonables; podés cambiarlos).
5. In-game: hover sobre item o map + hotkey → overlay con info.
6. Updates: bajás la nueva release manualmente (no hay auto-update). Suscribite a las notificaciones del repo en GitHub para enterarte.

## Limitaciones honestas

**Sin auto-update**. Tenés que monitorear releases en GitHub. Para algunos usuarios eso es no-ir; para otros es preferible vs runtimes terceros.

**Solo en inglés**. Sin localizaciones. La interfaz es chica así que no es bloqueador grande.

**Linux AppImage requiere dependencias** (xsel, webkit2gtk, dotnet runtime). En Arch o Ubuntu modernos suele resolverse vía repo, pero distros más exóticas pueden requerir ajustes.

**No tiene macOS oficial**. PoE en macOS es ya complicado (Wine/CrossOver), pero igualmente Sidekick no tiene build nativa.

**Menor adopción** que POE Overlay (~475 stars vs millón+ usuarios). En issues de GitHub la respuesta puede ser lenta cuando hay bugs específicos.

**Documentación community-driven**. No hay docs oficiales muy pulidas — depende de README, issues cerradas, y el Discord para troubleshooting.

## Cómo empezar

Vas a `github.com/Sidekick-Poe/Sidekick/releases/latest` y descargás el binario para tu OS. En Windows ejecutás directo; en Linux marcás el AppImage como ejecutable y lo corrés.

Si tenés problemas de instalación o configuración, el Discord linkeado en el README es el primer lugar a buscar — la comunidad responde y los maintainers están presentes.

Para entender qué hace cada hotkey, revisá la sección de configuration al primer launch. La curva de aprendizaje es similar a otros overlays: la primera sesión usás solo el price check; el resto se descubre orgánicamente.
