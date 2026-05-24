---
title: Oxide / uMod
description: Framework de modding dominante de Rust con repositorio de 1400+ plugins gratis, sistema de permissions, hooks y compatibilidad cross-version.
quickTake: Si vas a hostear un server modded, Oxide es el default — la mayoría de plugins de la comunidad fueron escritos para él. Carbon es la alternativa moderna; Oxide es el incumbent que cubre 90% de los servers.
---

## Qué es

Oxide (rebrandeado a uMod en 2018, aunque la comunidad sigue diciendo Oxide indistintamente) es un framework de modding open-source para Rust mantenido desde 2014. Provee un sistema de hooks que intercepta eventos del juego (player connect, entity spawn, damage, etc.) y permite a plugins en C# modificar comportamiento. El repositorio en umod.org tiene 1400+ plugins gratis, todos open-source, con sistema de versioning y dependencies.

## Qué problema resuelve

Rust vanilla es brutal e inflexible — gather rates fijos, server config limitado, sin economía, sin kits, sin teleport. Para correr un server con comunidad activa hay que customizar: ajustar gather rates, dar starter kits, agregar shops, crear PvP arenas, lo que sea. Oxide es el framework que hace eso posible sin recompilar el server ni tocar el código del juego. Instalas Oxide, dropeás plugins en una carpeta, y restartás.

## Diferenciación

La alternativa real es Carbon (carbonmod.gg), un framework más moderno con boot times 30-40% más rápidos y compatibilidad cross-Oxide del ~99%. Carbon corre los mismos plugins .cs y muchos devs ya releasean dual o "Carbon only". La pregunta entre los dos: Oxide gana en estabilidad histórica y catálogo (todos los plugins están escritos pensando en él); Carbon gana en performance y features nuevas. Para servers nuevos en 2026, muchos eligen Carbon. Para servers ya corriendo Oxide sin problemas, no hay urgencia para migrar.

## Para qué la usa la gente

- **Customizar gather rates**: GatherManager y similares permiten ajustar rates por resource type.
- **Permission system para staff**: PermissionsGUI + comandos para granular admin permissions.
- **Starter kits para wipes**: Kits plugin para que players nuevos arranquen con loadout.
- **Anti-cheat y bans**: NoEscape, BetterChat, plugins de logging de death events.
- **Eventos custom**: shop economies, arenas, event scheduling, raid block en cooldown.
- **Convivir con Carbon**: 99% de plugins de uMod corren en Carbon sin cambios.

## Para quién NO es esta herramienta

Si juegas en oficiales de Facepunch (vanilla), no puedes usar Oxide — solo aplica a servers community-hosted. Si quieres admin sin tocar plugins, los oficiales son la mejor opción. Si tu server necesita performance crítica con cientos de plugins, Carbon puede dar mejores resultados.

## Cómo se usa en la práctica

1. Tu Rust dedicated server tiene que estar instalado (via SteamCMD).
2. Descargás el último Oxide.Rust release desde umod.org/games/rust.
3. Extraes sobre la carpeta del server (root del RustDedicated).
4. Restart el server — Oxide se instala automático y crea `oxide/plugins/` y `oxide/config/`.
5. Para instalar plugins: download .cs file desde umod.org/plugins, drop en `oxide/plugins/`, automáticamente carga.
6. Para configurar: archivos .json en `oxide/config/` se generan al cargar el plugin, los editas con un editor de texto.

## Limitaciones honestas

- **Plugins activos pueden romperse con parches grandes**: cuando Facepunch refactor algo grande, plugins viejos pueden romperse hasta que su dev los update.
- **Carbon performance edge**: Carbon arranca 30-40% más rápido y consume menos RAM en benchmarks recientes.
- **Sin GUI nativa para management**: todo es files + comandos. Hay panels de hosting (Pterodactyl, etc.) que abstraen eso, pero Oxide solo no lo provee.
- **uMod paid plugins no existen**: todo en umod.org es free. Si quieres plugins paid (premium), tienes que ir a Codefling.
- **Migrar a Carbon es relativamente fácil pero requiere validation**: el ~1% de plugins incompatibles típicamente son los que dependen de Oxide internals.

## Cómo empezar

Instalar Rust dedicated server primero (los hosts como Pterodactyl, RocketNode, Shockbyte abstraen esto con templates). Después, descargar Oxide desde umod.org/games/rust y seguir el install guide en la wiki de uMod. Para arrancar con plugins, los esenciales que la mayoría installa primero son: Kits, BetterChat, GatherManager, PermissionsGUI. La comunidad de Discord de uMod responde dudas de installation.
