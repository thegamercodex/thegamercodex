---
title: "WSE Project — Windrose Save Editor and ItemDB"
description: "Save editor con item database integrada para Windrose. Permite editar inventario, stats, talents y discoveries directamente sobre el archivo de save, sin lanzar el juego. Distribuido por Nexus Mods."
quickTake: "Si quieres respec sin gastar resources o testear una build sin grindear, este editor te lo permite. Usalo responsable — single-player o servers donde tengas autorización, no en multiplayer competitivo."
---

## Qué es

WSE Project (Windrose Save Editor and ItemDB) es una herramienta Windows que abre y modifica archivos de save de Windrose. Incluye una database integrada de items: en vez de tener que conocer el ID interno de cada weapon o armor, puedes buscarlo por nombre y el editor lo inserta en el inventory. También permite resetear talent allocation, ajustar stat points, dar resources y unlock discoveries.

## Qué problema resuelve

Windrose tiene respec limitado y crafting de end-game items que consume horas de farming. WSE Project ofrece una vía alternativa para players que prefieren spend ese tiempo en otras partes del juego: testing combat, exploring nuevas regiones, o simplemente experimentar con builds sin compromiso permanente. Para modders y theorycrafters es además la herramienta para validar hipótesis sin invertir runs completos.

## Diferenciación

- Frente a la **in-game console** (habilitada por Simple Mod Loader): la consola permite spawn y comandos pero requiere conocer command syntax. WSE Project ofrece UI structured con browse capability.
- Frente a un **planner web** (Windrose.tools): el planner es proyección, WSE Project es mutación real del save.
- Frente a **mods QoL** tipo Hero Reforged: los mods buffean stats globalmente. WSE Project hace edits puntuales — más cirugía, menos sledgehammer.

## Para qué la usa la gente

- **Respec sin restricciones**: resetear todo y reasignar 12 talent + 45 stat points sin pagar penalty.
- **Validar builds antes de grindear**: dar el gear necesario, testear si el build funciona, decidir si invertir el grind real.
- **Recuperar saves corruptos**: si un bug rompió tu progress, hay chance de salvar manualmente lo que se rompió.
- **Skip grind tedioso**: jugadores con poco tiempo que quieren ver content de end-game sin las 50+ horas previas.
- **Modder workflow**: testear que un mod de items custom funciona insertando el item directo en el save.

## Para quién NO es esta herramienta

Si juegas multiplayer competitivo o en servers PvP donde el host detecta cheating, no la uses — puedes ser kicked/banned. Si parte del fun para vos es el progresión orgánica, esta herramienta arruina la experiencia. Si juegas en Mac/Linux, no hay build cross-platform.

## Cómo se usa en la práctica

1. **Backup el save primero** — siempre. Copy `%LOCALAPPDATA%\Windrose\Saved\SaveGames\` antes de tocar nada.
2. Descarga [WSE Project desde Nexus](https://www.nexusmods.com/windrose/mods/153). Suscripción gratuita requerida.
3. Cierra el juego antes de editar — el editor no soporta hot-reload.
4. Abre la app, carga tu save desde el dialog de "Open".
5. Navega las tabs (Inventory, Stats, Talents, Discoveries) para editar lo que necesites.
6. Save y abre el juego para verificar los cambios.

## Limitaciones honestas

- **Save format puede cambiar con patches**: cuando Windrose patcha, el editor puede no abrir saves nuevos hasta que el author libera update.
- **Sin undo dentro del editor**: si commiteas un cambio errado al save, no hay deshacer — por eso backup primero.
- **Item database puede tener gaps**: items muy recientes pueden no estar en la DB todavía.
- **Closed source**: hay que confiar en el author. El tool toca un save file binario, riesgo no-trivial.
- **No es FOSS**: sin fork option si el author abandona.

## Cómo empezar

Haz backup de tu save primero. Descarga WSE Project, abre tu save (no el original — la copia). Empieza con un cambio chico (agregar 100 gold) para verificar que la pipeline funciona. Una vez confirmado, puedes hacer edits más grandes. Para uso seguro, mantén dos saves: uno editado y uno "puro" sin tocar.
