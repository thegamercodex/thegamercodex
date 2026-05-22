---
title: "Thunderstore Mod Manager"
description: "Mod manager oficial de Thunderstore distribuido vía Overwolf. Onboarding amigable con overlay opcional in-game para gestionar mods sin alt-tab."
quickTake: "TMM es la opción 'plug and play' avalada por Thunderstore. Más fácil que r2modman para alguien que nunca modeó, pero requiere instalar Overwolf — un overhead que la comunidad veterana evita."
---

## Qué es

Thunderstore Mod Manager (TMM) es la app oficial de Thunderstore para gestionar mods, distribuida a través de Overwolf — una plataforma de overlays in-game que monetiza con ads opcionales y tiene SDK para devs. TMM cubre los mismos juegos que r2modman y Gale (Valheim, Lethal Company, REPO, Risk of Rain 2, etc.), con el endorsement del equipo de Thunderstore.

A diferencia de r2modman/Gale, TMM no es open-source y requiere descargar Overwolf primero. A cambio, ofrece un overlay para abrir el manager mientras juegas (`Ctrl+Shift+M` por defecto), notificaciones de updates de mods sin abrir la app, y un installer guiado que detecta problemas comunes.

## Qué problema resuelve

El target es claro: gente que nunca modeó un juego y se intimida con un instalador standalone. TMM resuelve la fricción de:
- "¿Cómo sé dónde instaló Steam el juego?" — Overwolf integra detección automática de installs.
- "¿Qué carpeta es BepInEx?" — TMM lo descarga y configura sin que el usuario vea el filesystem.
- "¿Cómo actualizo todo?" — overlay in-game notifica updates con un click.
- "¿Mods están funcionando?" — TMM muestra logs de BepInEx en una pestaña dedicada con highlighting de errores.

Para alguien que viene de console o nunca tocó archivos del juego, TMM baja la barrera de entrada significativamente.

## Diferenciación

Frente a **r2modman** y **Gale**: el feature set para gestionar mods es el mismo (mismo catálogo Thunderstore, mismo flow de profiles, mismo BepInEx). Las diferencias reales son:
- TMM requiere **Overwolf** instalado (~150MB) y cuenta Overwolf (gratis pero hay que registrarse).
- TMM tiene **overlay in-game** — abres el manager con un shortcut sin alt-tab. r2modman/Gale no tienen esto.
- TMM **no es open-source**; el código vive cerrado en Overwolf.
- TMM se monetiza con **ads opcionales** de Overwolf en el panel principal (pueden desactivarse en settings, pero existen).

Si el overlay no te importa y desconfías de tracking, r2modman o Gale son mejores. Si quieres el flujo más guiado posible, TMM lo es.

## Para qué la usa la gente

**Primer mod jamás** — usuarios que arrancan en modding y se sienten más cómodos con un installer integrado a una plataforma reconocible (Overwolf tiene varios millones de usuarios).

**Players de varios juegos Overwolf** — alguien que ya tiene Overwolf por CurseForge (Minecraft) o por Outplayed (replays automáticos de LoL/Valorant) le suma TMM sin agregar otra app.

**Overlay in-game** — abrir el manager con `Ctrl+Shift+M` mientras estás en una partida Valheim para activar/desactivar un mod sin cerrar el juego es realmente útil. r2modman te obliga a alt-tab.

**Guías de YouTube** — muchos tutoriales de "cómo modear X juego" usan TMM porque es el más fotogénico (UI pulida, instalación clickeable, notificaciones visibles). Para seguir esos videos paso a paso, tener TMM ayuda.

**Notificaciones de updates** — TMM puede notificar cuando un mod publica nueva versión incluso si no abriste la app. Para mods críticos en servers compartidos, es práctico.

## Para quién NO es esta herramienta

Si quieres evitar **Overwolf** por overhead o desconfianza (ads, telemetría, otra cosa corriendo en background): TMM no es la opción.

Si modeas en **Linux o macOS**: TMM solo corre en Windows. r2modman/Gale son cross-platform.

Si ya tienes **una modlist activa en r2modman**: no migra perfectamente. Vas a tener que recrear el profile.

Si valoras **open-source y auditabilidad**: TMM no lo es. r2modman y Gale sí.

## Cómo se usa en la práctica

1. Instala **Overwolf** desde `overwolf.com` si no lo tienes.
2. Una vez Overwolf corriendo, abre el Overwolf App Store dentro de la aplicación.
3. Busca "Thunderstore Mod Manager" e instala.
4. TMM se abre dentro de Overwolf. Selecciona "Valheim" de la lista.
5. Crea un profile.
6. En "Browse" busca e instala mods con un click.
7. Click "Start modded" — TMM lanza Valheim con BepInEx y los mods.
8. En-juego, `Ctrl+Shift+M` abre el overlay para activar/desactivar mods sin salir.

## Limitaciones honestas

**Overwolf requerido**. ~150MB adicional, cuenta a crear, y un servicio que corre en background. Para muchos es un dealbreaker.

**Ads ocasionales**. El panel principal de TMM muestra ads de Overwolf (banners de otras apps). Hay toggle para desactivarlos pero por defecto están on.

**Solo Windows**. Linux y macOS no soportados.

**Closed source**. No puedes auditar el código ni contribuir bugs. La comunidad reporta issues en el Discord de Thunderstore pero el fix viene cuando el equipo lo decida.

**No es claramente más rápido**. La promesa de "easier" se cumple en onboarding, no en velocidad: TMM corre dentro de Overwolf que ya es Electron-like.

## Cómo empezar

1. Anda a `overwolf.com` y descarga Overwolf. Instalalo.
2. Abre Overwolf y entra al App Store interno.
3. Busca "Thunderstore Mod Manager" e instala.
4. Abre TMM, selecciona "Valheim".
5. Crea un profile.
6. Instala BepInExPack + Jotunn + 2-3 mods QoL.
7. "Launch modded" para correr.

Si en algún momento te cansa Overwolf, puedes migrar a r2modman exportando el profile (TMM lo permite) y reimportándolo allí.
