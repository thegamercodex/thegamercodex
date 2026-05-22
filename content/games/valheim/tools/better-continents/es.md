---
title: "Better Continents"
description: "Mod que reemplaza la generación de terreno procedural de Valheim por mapas custom basados en image files. Permite definir heightmaps, biomas, ubicación de POIs y cobertura forestal con precisión pixel a pixel."
quickTake: "Better Continents es la herramienta para custom map makers que quieren diseñar un mundo de Valheim a mano. No es para el player promedio — requiere preparar imágenes de heightmap y biomas — pero abre posibilidades imposibles con world gen vanilla."
---

## Qué es

Better Continents es un mod (MIT) originalmente creado por **billw2012** y hoy mantenido por **JereKuusela**. Reemplaza el generador de terreno procedural de Valheim por uno que acepta **image maps** como input: PNGs grayscale que definen altura, capas de bioma, ubicación de locaciones y forest coverage.

Combinado con un sistema de noise layers propio (basado en FastNoiseLite), permite mezclar generación procedural con override manual. Tiene un UI in-game para ajustar settings sin reiniciar el mundo, y exporta la config a un archivo `.BetterContinents` que viaja con el mundo y se puede compartir.

## Qué problema resuelve

La generación procedural de Valheim es excelente — biomas con identidad, distribución razonable, exploración inagotable — pero **no puedes controlarla**. Si quieres un mundo con una isla grande central y archipiélago alrededor, o un continente único con biomas alternos, no puedes. Tiras seeds hasta encontrar algo que funcione (Valheim-map.world ayuda a previsualizar) pero no diseñas nada.

Better Continents resuelve eso:
- **Heightmap externo**: una imagen grayscale (blanco = alto, negro = bajo) define el relieve del mundo.
- **Biome mask**: otra imagen con colores específicos define qué bioma va en cada zona.
- **POI placement**: Fuerzas ubicación de specific locations (boss altars, traders, crypts) en coordenadas exactas.
- **Forest coverage**: cuántos árboles crecen en cada región.
- **Layers de noise**: Agregas procedural noise encima del input manual para que no quede artificial.

Para creadores de mapas custom o servers temáticos (RP, recreaciones de mapas famosos, custom challenges), Better Continents es la única opción seria.

## Diferenciación

No tiene competidor directo en Valheim. **Es el único mod de world-gen override** activo y mantenido. Otros mods tocan worldgen tangencialmente (ej: Cartography Skill agrega mecánicas de mapas, no genera terreno) pero ninguno reemplaza el generador entero.

Frente a **mod simples de "more biomes" o "biome diversity"**: esos mods rebalancean parámetros del worldgen vanilla; Better Continents lo reemplaza por uno que vos controlas. Son layers distintos del problema.

Frente a **Valheim-map.world** (seed viewer): el viewer te muestra qué generaría un seed específico. Better Continents te deja diseñar el mundo desde cero ignorando el seed.

## Para qué la usa la gente

**Mapas custom para servers de RP** — comunidades que recrean mapas de Skyrim, Westeros, Lord of the Rings, Earth, etc. en Valheim. El heightmap permite mapear cualquier coastline/relief razonablemente.

**Challenge maps** — mundos diseñados con biome difícil up-front (todo Swamp, todo Mountain) para grupos que buscan dificultad extra.

**Recreaciones de seeds famosos editados** — tomas un seed conocido bueno, lo modificas (mueve un Haldor que quedó muy lejos, reduces un Swamp gigante) y guardas como mundo nuevo.

**Mapas competitivos** — speedruns o races donde todos los players juegan exactamente el mismo mundo (un .BetterContinents compartido garantiza determinismo).

**Diseño narrativo** — para mods de quest o stories custom, controlar el layout del mundo es necesario. Better Continents es la base.

## Para quién NO es esta herramienta

Si solo quieres **jugar Valheim normal**: Better Continents es overkill brutal. La generación vanilla es excelente.

Si no tienes experiencia con **Photoshop/GIMP/Krita** para hacer image maps: la curva es empinada. Necesitas entender cómo se mapea grayscale a altura, cómo elegir colores de bioma, cómo evitar artefactos.

Si tu PC es modesta: world gen custom puede ser pesado. La generación inicial del mundo es más lenta y exige más RAM.

Si modeas para multiplayer con players que NO tienen el mod: rompe. Better Continents debe estar en clients + server por igual.

## Cómo se usa en la práctica

1. Instala Better Continents vía r2modman/Gale/TMM (categoría modding-utilities).
2. Lanza el juego una vez para que el mod genere su carpeta de config y settings defaults.
3. Crea un mundo nuevo. Antes de generar, el menú extra del mod te deja indicar paths a heightmap PNG, biome mask PNG, forest mask PNG.
4. Genera el mundo. La carpeta `worlds/<world-name>/` tiene los archivos del mundo + un `.BetterContinents` con la config.
5. Si quieres iterar, puedes ajustar settings in-game (UI del mod, abierto con keybind configurable). Cambios se aplican parcialmente sin regenerar — algunos requieren mundo nuevo.
6. Para compartir, envías el `.fwl` + `.db` + `.BetterContinents` y otro player con el mod ya tiene tu mundo idéntico.

Para learning, la doc oficial en `jerekuusela.github.io/BetterContinents-Docs/introduction.html` cubre cada parámetro con visuales.

## Limitaciones honestas

**Curva de aprendizaje empinada**. Aunque hay UI, entender cómo image maps se traducen a terreno toma horas. La doc es decente pero asume comodidad con herramientas de edición de imagen.

**Iteración costosa**. Algunos cambios requieren regenerar el mundo entero, lo que toma minutos. diseñas imagen, generas, ves resultado, ajustas imagen, regeneras. Workflow no es rápido.

**Conflicts con otros mods de worldgen**. Si tu modlist tiene mods que tocan generación de mundo (raros pero existen), pueden ser incompatibles.

**Multiplayer requiere matching**. Server y clients deben tener el mismo `.BetterContinents` para sincronizar. Si un client no lo tiene, no puede conectar.

**Patches de Iron Gate pueden romper**. Cuando hay patch grande, Better Continents puede necesitar update antes de que worldgen ande de nuevo. Típicamente JereKuusela actualiza en días.

## Cómo empezar

1. Si nunca diseñaste un mapa custom: lee la doc en `jerekuusela.github.io/BetterContinents-Docs/` antes de descargar. Vas a entender qué es realmente.
2. Instala Better Continents en una modlist limpia (no la mezcles con tu modlist QoL principal mientras experimentas).
3. Descarga un ejemplo de heightmap + biome mask de la docu (vienen samples para arrancar).
4. Lanza Valheim, crea un mundo con esos samples como input.
5. Explora in-game para ver cómo el image map se tradujo a terreno.
6. Modificá la imagen en GIMP/Krita, regenera el mundo, comparálos.
7. Cuando manejes el flow, diseña tu propio mapa desde cero.

Para inspiración, hay servers públicos que publicaron sus `.BetterContinents` (busca en subreddits de Valheim "Better Continents map share").
