---
title: "LOOT (Load Order Optimization Tool)"
description: "Herramienta que ordena automáticamente tus plugins .esp/.esm/.esl según una masterlist curada por la comunidad, evitando crashes por load order incorrecto."
quickTake: "El orden de carga de plugins en Skyrim importa mucho — un mod que debería ir al final pero está al medio causa CTDs misteriosos. LOOT resuelve el 95% de eso en un click."
---

## Qué es

LOOT (Load Order Optimization Tool) es una herramienta open-source (GPL-3.0) mantenida por el equipo LOOT desde 2014. Reemplazó a BOSS, su predecesor. Soporta Skyrim Special/Anniversary Edition, Skyrim LE, Skyrim VR, Fallout 4, Fallout New Vegas, Starfield, Oblivion y Morrowind.

Funciona consultando una **masterlist** colaborativa hospedada en GitHub que define reglas de ordenamiento entre plugins (este plugin debe ir antes de aquel, este plugin requiere ese otro como master). Al correr LOOT, lee tus plugins activos, busca cada uno en la masterlist y los reordena según las rules.

## Qué problema resuelve

En Skyrim, los plugins (.esp/.esm/.esl) se cargan en orden y el orden importa. Si un mod sobrescribe un record que otro mod también modifica, el último cargado gana. Para que la modlist funcione correctamente:
- Los masters (.esm de Bethesda) van primero.
- Los plugins que dependen de otros van después de sus dependencias.
- Patches de compatibilidad van al final, después de los mods que parchean.

Calcular ese orden a mano para 100 plugins es imposible. LOOT lo hace en segundos consultando la masterlist comunitaria.

## Diferenciación

Frente a **ordenar manualmente**: viable para 5-10 plugins simples. Más allá de eso, manual es propenso a errores.

Frente a **BOSS legacy**: BOSS está deprecado. LOOT es su reemplazo oficial.

Frente al **auto-sort interno de Vortex**: Vortex usa LOOT por debajo. Si usas Vortex, no necesitas LOOT standalone — el sort button del UI lo invoca.

Frente al **sort en MO2**: MO2 también tiene LOOT integrado vía plugin. Standalone vs integrado, el motor es el mismo.

## Para qué la usa la gente

**Ordenar plugins después de instalar mods nuevos**: cada vez que agregas mods, corre LOOT antes de jugar. Garantiza que el load order sigue válido.

**Detectar mods sin master**: LOOT marca plugins que dependen de un master que no tienes instalado. Sin eso, Skyrim crashea al cargar el save.

**Detectar dirty edits**: LOOT identifica plugins con records "sucios" — ediciones no intencionales que pueden causar bugs. Te avisa para limpiarlos con SSEEdit.

**Generar reporte de la modlist**: el botón "Copy load order" exporta el orden completo como texto, útil para compartir cuando pedís ayuda en foros.

**Validar antes de un playthrough largo**: antes de empezar un save serio, una corrida de LOOT confirma que todo está ordenado y no hay warnings críticos.

## Para quién NO es esta herramienta

Si solo tienes 3-5 mods sencillos, LOOT es overhead — el orden no es problemático con tan pocos plugins.

Si tu modlist requiere un orden manual específico que la masterlist no contempla (típico en setups custom con cientos de patches), vas a tener que crear rules locales en LOOT. Posible pero técnico.

Si usas MO2 o Vortex y ya tienes LOOT integrado, descargar el standalone es redundante.

## Cómo se usa en la práctica

1. Baja LOOT desde `loot.github.io` o instálalo via Nexus.
2. Al primer lanzamiento, LOOT detecta tus juegos instalados.
3. Selecciona "Skyrim Special Edition" del dropdown.
4. La primera vez, LOOT baja la masterlist actualizada (link a GitHub).
5. Cliquea "Sort". LOOT analiza tus plugins activos y los reordena.
6. Revisa los warnings: cada plugin puede tener notas ("dirty edits", "missing master", "incompatibilidad conocida"). Atendé los críticos.
7. Cliquea "Apply" para guardar el orden al `plugins.txt` del juego.

Si usas MO2: corre LOOT desde dentro de MO2 (botón en la barra superior). Esto asegura que LOOT lea/escriba el plugins.txt del profile activo, no el global.

## Limitaciones honestas

**No es infalible**. La masterlist es colaborativa — mods nuevos pueden no estar registrados aún, y el orden propuesto puede ser sub-óptimo para tu setup específico.

**No resuelve conflictos de records**. LOOT ordena, pero si dos mods modifican el mismo NPC, solo el último gana — eso requiere patches con SSEEdit, no es problema de LOOT.

**Reglas locales requieren conocimiento**. Para overrides custom, hay que editar las rules en el UI. Sintaxis tipo "load <plugin> after <otherplugin>" toma un rato para internalizar.

**Performance lenta con masterlists enormes**. Para juegos con miles de mods registrados, el sort puede tomar varios segundos.

**No actualiza plugin metadata**. Si un mod cambió su nombre o estructura, LOOT puede tener info vieja hasta que la masterlist se actualice.

## Cómo empezar

1. Baja LOOT desde `loot.github.io`.
2. Instálalo (Windows installer estándar) o usalo portable si prefieres.
3. Abre LOOT, selecciona Skyrim Special Edition.
4. Espera que baje la masterlist (primera vez).
5. Cliquea "Sort" → revisa warnings → "Apply".
6. Lanza Skyrim. Si arranca sin CTD, LOOT hizo su trabajo.

Repetí el sort después de cada cambio de modlist. Hábito típico: instalar mods nuevos, correr LOOT, jugar.
