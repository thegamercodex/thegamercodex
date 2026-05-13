---
title: "Appearance Menu Mod (AMM)"
description: "Mod de Cyberpunk 2077 que permite spawn de NPCs, vehículos, poses, cambiar outfits y decorar el apartamento — la herramienta de referencia para photo mode."
quickTake: "Si lo que quieres es hacer fotos de cosplay, scenes narrativas, o capturar momentos del juego con control absoluto, AMM es el estándar. Empezó como replacement de NPC outfits en 2021 y se convirtió en photo mode completo."
---

## Qué es

Appearance Menu Mod (AMM) es un mod open-source (MIT) para Cyberpunk 2077 mantenido por MaximiliumM en GitHub. Empezó en 2021 como una manera de cambiar outfits de NPCs y guardar appearances; hoy es una suite completa de control sobre photo mode, scenes narrativas y customización.

Es uno de los mods más descargados de Cyberpunk 2077 — según las stats de Nexus, está consistentemente en los top mods del juego. Depende de Cyber Engine Tweaks (CET) y RED4ext.

## Qué problema resuelve

El photo mode vanilla de Cyberpunk 2077 está limitado: pocas poses, NPCs no se mueven, no puedes spawnear vehículos, V queda fijo. Para players que quieren capturar Night City con control creativo (cosplayers, photographers in-game, machinima creators), las limitaciones son frustrantes.

AMM levanta esas limitaciones:
- Spawn de NPCs (companions, enemigos, NPCs únicos de la story) en cualquier ubicación.
- Spawn de vehículos (todos los del juego, incluidos los que no puedes conseguir normalmente).
- Pose system extendido para NPCs y V.
- Cambio de outfits en NPCs y player.
- Decoración del apartamento de V con muebles custom.
- Modificación de attitude de companions (que parezcan estar peleando, riendo, etc.).

## Diferenciación

Frente a **Photo Mode Unlocker** (Nexus 4319): Photo Mode Unlocker remove restricciones del photo mode vanilla (más rango de cámara, más poses) — es complementario a AMM, no alternativa. Muchos cosplayers usan los dos juntos.

Frente a **AMM Collab** (mod extensions de AMM): AMM tiene un ecosistema de extensions creados por la comunidad — librerías de poses, animations adicionales, objetos para decorar. AMM core es la base; las extensions agregan content.

Frente a **CET console scripting**: técnicamente todo lo que AMM hace se podría hacer con scripts CET, pero AMM ofrece UI amigable y presets. Hacer in scripts requiere conocer las APIs internas.

## Para qué la usa la gente

**Photo mode profesional**: cosplayers y in-game photographers capturan scenes elaboradas — V con outfit custom, companions posando, vehículo de fondo, NPCs spawned por mood.

**Machinima / video content**: creators de YouTube/TikTok hacen short films usando AMM para spawn de characters, poses, scenes. La capacidad de mover camera + pose NPCs + cambiar outfits es lo que hace ese content posible.

**Cosplay outfit testing**: si tu V tiene un look que quieres que mache un cosplay real, AMM te deja swap outfits rápido para iterar.

**Decoración del apartamento de V**: AMM permite agregar muebles, objetos decorativos, transformar el apartmente en un space personalizado. Players que invierten en story-living lo usan extensivamente.

**Exploración**: spawn de vehículos que normalmente requieren progress significativo para conseguir. Útil para players que ya completaron campaign y quieren joyride.

## Para quién NO es esta herramienta

Si juegas vanilla por la story sin tocar mods, AMM es overkill — no aporta gameplay, solo creativity tools.

Si tu hardware es marginal, AMM agrega overhead. Spawnear 5+ NPCs simultáneamente puede causar drops de FPS notables en GPUs midrange.

Si quieres un photo mode más conservador (poses fijas, sin spawn), Photo Mode Unlocker solo es más liviano que AMM completo.

## Cómo se usa en la práctica

1. **Pre-requisitos**: instalar Cyber Engine Tweaks (CET) y RED4ext primero. AMM no funciona sin esos.
2. Bajar AMM desde Nexus (`nexusmods.com/cyberpunk2077/mods/790`) o GitHub.
3. Extraer el contenido en `bin\x64\plugins\cyber_engine_tweaks\mods\`. AMM debería aparecer como una sub-carpeta ahí.
4. Levantar el juego. Cargar un save (no funciona desde el main menu).
5. Abrir el overlay de CET (hotkey configurable). En la lista de mods, AMM aparece — clic para abrirlo.
6. La UI de AMM tiene tabs: Spawn (NPCs y vehículos), Appearance (cambiar outfits), Poses, Decor, etc.
7. Experimentas: spawneas un NPC, le pones un outfit, lo posas, capturas screenshot via photo mode vanilla.

## Limitaciones honestas

**Curva de aprendizaje**. Aunque la UI es funcional, AMM tiene muchas features y descubrir cada una toma horas. Tutorials en YouTube ayudan.

**Updates necesarios post-patch**. Como depende de CET y RED4ext, después de un patch del juego AMM puede fallar hasta que actualice. Esperar 1-2 semanas post-major-patch antes de usar AMM intensivamente.

**No todos los NPCs son spawneables o controlables**. Story-critical NPCs pueden tener restricciones (Johnny en algunos contexts, ciertos bosses). AMM tries lo mejor pero hay límites del engine.

**FPS impact**. Spawnear muchas entities simultáneamente impacta performance. Para GPUs midrange (RTX 3060-3070), 3-5 NPCs spawned + ray tracing puede caer a 30-40fps.

**Stability ocasional**. Mod complejo con muchas interactions; bugs raros existen (NPCs con animations rotas, decor que glitch). Save scumming es common practice.

**Sin localización al español**. Toda la UI en inglés. AMM extensions community pueden tener algunas localizadas, no es consistente.

## Cómo empezar

1. Verifica que tienes CET y RED4ext instalados y working. Si no, instala esos primero (ver sus respectivas guías).
2. Baja AMM desde Nexus (mod ID 790). La versión más reciente que es compatible con tu patch del juego (Nexus muestra compatibility).
3. Extrae el ZIP. AMM viene como una carpeta `AppearanceMenuMod` — copia esa carpeta a `bin\x64\plugins\cyber_engine_tweaks\mods\`.
4. Levanta el juego. Carga tu save.
5. Abre el overlay de CET. Si AMM cargó OK, verás "Appearance Menu Mod" en la lista de mods. Click → la UI de AMM abre.
6. Como primer experiment, ve a Spawn tab → eligí un NPC → spawn cerca de V. Si aparece, AMM funciona.

Tip: AMM tiene una sub-comunidad activa con guías especializadas (cosplay tutorials, scene composition tips). El Discord del modding community y el subreddit r/cyberpunkmodders tienen content útil.
