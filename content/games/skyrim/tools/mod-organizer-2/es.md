---
title: "Mod Organizer 2"
description: "Mod manager open-source con virtual file system: cada mod vive en su carpeta y se monta virtualmente sobre la carpeta del juego al lanzar."
quickTake: "Para modlists de Skyrim de más de 50 mods, MO2 es el estándar de la comunidad. La VFS te permite probar combinaciones, ordenar y desinstalar sin dejar archivos huérfanos en Data/."
---

## Qué es

Mod Organizer 2 (MO2) es un mod manager open-source (GPL-3.0) creado originalmente por Tannin para juegos de Bethesda (Oblivion, Skyrim, Fallout) y ahora mantenido por la comunidad MO2 en GitHub. Soporta Skyrim Special/Anniversary Edition, Fallout 4, Starfield y más.

Su diferenciador clave es el **virtual file system (VFS)**: en lugar de copiar archivos de mod a `Data/` del juego (como Vortex y los instaladores manuales), MO2 mantiene cada mod en su carpeta aparte y al lanzar el juego "monta" todos los mods activos virtualmente. El juego ve los archivos donde espera verlos, pero en disco siguen separados.

## Qué problema resuelve

Sin VFS, cada vez que activas/desactivas un mod, archivos se mueven. Con 50+ mods, eso se vuelve frágil: archivos sueltos quedan en Data/ después de desinstalar mods, conflicts son invisibles, no puedes mantener varias modlists.

MO2 resuelve todo eso:
- Cero archivos copiados a Data/ — la carpeta queda como Bethesda la dejó.
- Conflicts visibles en una columna del UI: si dos mods sobrescriben el mismo archivo, MO2 lo muestra y te deja elegir cuál gana.
- Profiles: cambias entre "vanilla limpio", "modlist gráfica", "playthrough de mago", "Requiem hardcore" sin reinstalar nada.
- Desinstalación instantánea: desactivar un mod literalmente lo quita del montaje virtual, sin huellas.

## Diferenciación

Frente a **Vortex** (también de Nexus): Vortex copia archivos a Data/ con symbolic links. MO2 usa VFS pura. Para modlists chicas (~20 mods) Vortex es más amigable; para modlists pesadas (200+) MO2 escala mejor porque las desinstalaciones no degradan el state del juego.

Frente a **instalación manual**: manual te da control absoluto pero no escala. Después de 10 mods, recordar qué archivo es de qué mod es imposible.

Frente a **Wabbajack**: Wabbajack instala modlists curadas usando MO2 por debajo. Si quieres tu propia modlist desde cero, usa MO2 directo. Si quieres una premade lista para arrancar, usa Wabbajack — pero el resultado final corre en MO2.

## Para qué la usa la gente

**Modlists pesadas (100+ mods)**: la VFS es indispensable cuando tienes muchos mods. MO2 maneja el orden de mounting (mods de arriba pierden contra mods de abajo, o viceversa según el "left pane" order) y muestra conflicts in real-time.

**Múltiples profiles**: un profile para Requiem, otro para SkyRim hardcore, otro para casual con mods estéticos. Switch entre ellos en segundos.

**Testing modlist incremental**: activas/desactivas mods uno a uno y observas el impacto sin reinstalar.

**Compartir setups**: el profile completo (mods + load order + plugin list + INI tweaks) cabe en una exportación de MO2 que otro player puede importar.

**Soporte multi-juego**: si modeas Skyrim Y Fallout 4 Y Starfield, MO2 maneja los tres con instances separadas.

## Para quién NO es esta herramienta

Si vas a instalar 1-5 mods muy específicos, MO2 es overkill. Para esos casos, Vortex o instalación manual son más simples.

Si nunca tocaste un mod manager antes y los conceptos de "load order", "plugin priority", "VFS" te abruman: empieza con Vortex y migrá a MO2 cuando tu modlist crezca.

Si tu disco principal está saturado, MO2 ocupa espacio: cada mod descargado vive en `Downloads/` y cada mod activo vive en `mods/` — ambos pueden moverse a otro drive, pero por defecto se acumulan en la instalación.

## Cómo se usa en la práctica

1. Descarga MO2 desde Nexus (`nexusmods.com/skyrimspecialedition/mods/6194`) o GitHub releases.
2. Instala MO2 fuera de Program Files (típicamente `C:\Modding\MO2-Skyrim\`) — Windows protege Program Files y MO2 puede tener problemas de permisos ahí.
3. Al primer lanzamiento, MO2 detecta tu instalación de Skyrim. Confirma la ruta.
4. Configura ejecutables: agrega `skse64_loader.exe` y márcalo como default. A partir de ahora MO2 lanza el juego con SKSE.
5. Descarga mods desde Nexus. Con MO2 abierto, el botón "Mod Manager Download" en Nexus los manda directo a MO2.
6. En MO2, los mods aparecen en el "left pane". Tildalos para activarlos, ordénalos arrastrando.
7. En el "right pane" están los plugins (.esp/.esm/.esl). Ordénalos manualmente o usa LOOT desde el botón en MO2.
8. Lanza el juego desde MO2 con el botón "Run" arriba a la derecha.

## Limitaciones honestas

**Curva de aprendizaje empinada**. Conceptos como "left pane vs right pane", "mod order vs plugin order", "overwrite folder", "conflict winner" toman varias horas de modding real para internalizar. Documentación oficial es decente pero asume contexto previo.

**Instalación fuera de Program Files mandatoria**. Si lo instalas en Program Files (como Steam por defecto), Windows UAC interferirá y MO2 lanzará errores raros. La regla: nunca en Program Files.

**No soporta todos los juegos**. MO2 está orientado a juegos de Bethesda y similares con estructura de Data/. Para juegos como Cyberpunk 2077 funciona pero con caveats — la mayoría usa Vortex ahí. Para Skyrim/Fallout/Starfield, MO2 es la elección obvia.

**UI denso y técnico**. Muchas columnas, muchas opciones, muchos menús contextuales. No es Vortex en términos de pulido visual.

## Cómo empezar

1. Instala SKSE64 primero (ver tool relacionada).
2. Descarga MO2 desde `nexusmods.com/skyrimspecialedition/mods/6194`.
3. Instálalo en `C:\Modding\MO2-Skyrim\` (NO en Program Files).
4. Configura SKSE64 como ejecutable por defecto.
5. Para los primeros mods, instala Address Library + SkyUI desde Nexus usando "Mod Manager Download".
6. Activa cada mod en el left pane.
7. Lanza desde MO2 y verifica que SkyUI cargó (deberías ver la interfaz nueva al abrir el inventario).

Para una guía más profunda, el wiki oficial en `modorganizer2.github.io` cubre todos los flujos avanzados.
