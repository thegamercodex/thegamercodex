---
title: "RED4ext"
description: "Framework de extensión nativa para REDengine 4 que habilita plugins C++ dentro de Cyberpunk 2077."
quickTake: "RED4ext es el SKSE de Cyberpunk: nadie lo ejecuta directamente, pero TweakXL, ArchiveXL y Codeware (las herramientas que la mayoría de mods usan) dependen de él. Lo instalas una vez y queda."
---

## Qué es

RED4ext es un framework open-source (GPL-3.0) que extiende REDengine 4, el engine propietario de Cyberpunk 2077. Permite que mods escritos en C++ se carguen como plugins dentro del proceso del juego: agregan funciones, modifican comportamientos del engine o exponen nuevas APIs para que otros mods las usen.

Mantenido por WopsS y un grupo de contributors en GitHub. Es el equivalente conceptual a SKSE (Skyrim Script Extender) o F4SE (Fallout 4 Script Extender): infraestructura silenciosa sobre la cual se construye el ecosistema de modding.

## Qué problema resuelve

Las funciones internas de Cyberpunk 2077 viven en C++ compilado. Sin una capa que exponga esas funciones a código externo, escribir mods en C++ requiere parchear binarios manualmente — fragil, no compartible, no mantenible.

RED4ext hace dos cosas:
1. Hookea el game loader y carga plugins desde una carpeta dedicada.
2. Expone wrappers tipados para llamar funciones internas del game seguramente.

Eso habilita que TweakXL, ArchiveXL, Codeware y otras herramientas se distribuyan como DLLs limpias en lugar de patches binarios. Los modders que escriben código nativo dependen de RED4ext.

## Diferenciación

Frente a **Cyber Engine Tweaks (CET)**: CET es la capa de Lua scripting; RED4ext es la capa C++ nativa. Mods Lua usan CET. Mods C++ usan RED4ext. La mayoría de mods complejos usan **ambos**, porque dependencias intermedias (TweakXL, ArchiveXL) son C++ pero los mods finales pueden ser Lua.

Frente a **REDmod**: REDmod es el sistema oficial de CDPR, integrado al launcher. RED4ext es comunitario, paralelo, llega más bajo (al nivel de hooks de C++). REDmod y RED4ext coexisten sin conflicto — muchos mods modernos requieren los dos.

## Para qué la usa la gente

**Como dependency invisible**: el usuario típico instala RED4ext una vez y nunca más interactúa con él. Lo que ve son mods que lo necesitan (TweakXL, ArchiveXL, etc.) — RED4ext está abajo, silencioso.

**Como base para escribir mods nativos**: developers que quieren rendimiento o acceso profundo escriben plugins RED4ext directamente. El repo tiene ejemplos y documentación de cómo armarlos.

**Para garantizar compatibilidad cross-mod**: cuando dos mods de C++ corren en simultáneo, RED4ext provee el contexto compartido (registros de hooks, tabla de plugins, init order) que evita que se pisen.

**Para mantenimiento post-patch**: cuando sale un patch del juego, RED4ext se actualiza primero. Mods C++ se rebuildan contra el nuevo RED4ext. Sin esa capa, cada mod tendría que adaptarse al binario nuevo individualmente.

## Para quién NO es esta herramienta

Si juegas vanilla, RED4ext no aporta nada — no hay UI, no hay features, solo expone APIs. Sin mods que las usen es un DLL durmiente.

Si modeas en consola, RED4ext no aplica — Windows-only por arquitectura.

Si solo quieres mods simples (replacement de texturas, reshade, archivos pak directos), RED4ext puede no ser estrictamente necesario. Pero la mayoría de mods modernos lo asumen, así que en práctica vale instalarlo de entrada.

## Cómo se usa en la práctica

1. Bajas la última release desde `github.com/WopsS/RED4ext/releases` (o desde Nexus Mods).
2. Extraes el ZIP en la carpeta de instalación del juego. RED4ext crea `bin\x64\red4ext\` y un `RED4ext.dll`.
3. Inicias el juego una vez. RED4ext se carga junto al proceso. Si todo bien, no notas nada — los plugins que dependen de él ahora pueden cargarse.
4. Instalas los mods C++ que vayas a usar (TweakXL, ArchiveXL, Codeware, etc.) en la carpeta `red4ext\plugins\` siguiendo la estructura de cada mod.
5. Verificas logs en `red4ext\logs\` después del primer launch: ahí ves qué plugins cargaron OK y cuáles fallaron.

## Limitaciones honestas

**Cero UI**. No hay menú, no hay panel, nada. Si algo falla, el único feedback son los logs de texto. Para users no técnicos eso puede ser frustrante.

**Update obligatorio post-patch del juego**. RED4ext se rompe cuando CDPR cambia el binario del juego (cualquier patch mayor). Hasta que sale nueva versión, todos los mods C++ que dependen del framework no cargan. Espera ventana de 24-72h post-patch.

**Documentación dispersa**. La doc oficial vive en el README de GitHub y en `wiki.redmodding.org`, pero no hay un tutorial paso-a-paso para users finales. Modders avanzados encuentran lo que necesitan; users casuales pueden perderse.

**No tiene "fallback" si falla**. Si RED4ext crashea al cargar, los mods que dependen de él tampoco arrancan. No hay degradación graceful — todo o nada.

**Conflicts con anti-cheats de juegos online**. Cyberpunk 2077 es single-player, así que esto no aplica acá, pero si el binario lo usaras con cualquier integración online, RED4ext lo trigge.

## Cómo empezar

1. Si vas a instalar CET o cualquier mod que liste "REQUIRES RED4ext", bájalo desde `github.com/WopsS/RED4ext/releases` (release más reciente con tag estable).
2. Extrae directamente sobre tu folder de Cyberpunk 2077 (donde está el `bin\x64\Cyberpunk2077.exe`).
3. Levanta el juego una vez para verificar que carga. Si el juego abre normalmente, RED4ext está OK.
4. Procede a instalar los demás mods. RED4ext sigue siendo invisible — solo ves los efectos de los plugins que carga.
5. Si algo falla más adelante, mira los logs en `bin\x64\red4ext\logs\` — los errores ahí indican qué plugin se rompió y por qué.

Tip: cuando salga el próximo patch del juego, antes de jugar con mods, verifica que RED4ext tiene release compatible (chequear releases en GitHub). Si todavía no, mejor jugar vanilla hasta que se actualice.
