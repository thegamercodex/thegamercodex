---
title: "Windrose.tools"
description: "Base de datos community-driven que consolida en un solo sitio el interactive map seed-aware, planner de talents, lookup de items/buildings/quests y tracker de discoveries para Windrose."
quickTake: "Si solo vas a abrir una herramienta para Windrose en el browser, esta es. Cubre el 80% de los lookups que la mayoría de jugadores necesita — mapa, talents, items, recetas — sin requerir saltar entre cinco sitios distintos."
---

## Qué es

Windrose.tools es un sitio comunitario lanzado pocas semanas después del lanzamiento de Early Access que se posicionó rápido como la base de datos de referencia para Windrose. Consolida varias herramientas en una sola URL: interactive map con seed detection, talent planner con las cuatro ramas (Fencer, Crusher, Marksman, Toughguy), lookup completo de items/buildings/weapons, y un discovery tracker que ayuda a no perderse POIs únicos por bioma. Es gratuito y sin login obligatorio.

## Qué problema resuelve

El mundo de Windrose es procedural: el shape y POIs de cada island son consistentes, pero su posición y orientación cambian por seed. Sin una herramienta seed-aware, encontrar copper mines, faction camps o boss spawns implica deambular sin guía. Windrose.tools toma tu seed (manualmente o detectado de tu save file) y proyecta el mapa real de tu partida, no un mapa genérico — lo cual hace que las coordenadas y rutas sean directamente accionables.

## Diferenciación

Frente a las alternativas, Windrose.tools es el "todo en uno":

- **Windrose Wiki (wiki.org)** se enfoca en lookup textual y guías escritas. Windrose.tools agrega lo interactivo: clicks sobre el mapa, sharing de builds por URL.
- **Calculators.games/windrose** se especializa en damage/DPS math. Windrose.tools cubre talent planning de manera más visual y user-friendly, pero no tiene la profundidad de cálculo de daño.
- **Windrose Gaming Tools (windrose.gaming.tools)** es el competidor más directo. La elección entre ambos hoy es por preferencia de UI — los dos cubren mapa + planner.

## Para qué la usa la gente

- **Planificar la build antes de invertir levels**: con respec limitado, mucha gente arma el build en el planner web antes de gastar talent points in-game.
- **Encontrar nodos de recursos específicos**: subir el save, ver dónde están las copper mines más cercanas, planear la ruta del barco.
- **Tracking de discoveries**: marcar qué POIs ya completaste y cuáles faltan para completion 100%.
- **Buscar la receta de un item**: lookup directo del item, ver qué materials necesita y de dónde se obtienen.
- **Compartir builds en Discord o foros**: los talent builds exportan a URL que cualquiera puede abrir y editar.

## Para quién NO es esta herramienta

Si necesitas matemática profunda de damage (TTK exacto contra cierto enemy, comparar dos armor sets con perks específicos en stat aggregation), Calculators.games/windrose te da más control numérico. Si solo quieres leer guías textuales largas o ver tier lists, una wiki tradicional (Windrose Wiki o Fextralife) es más adecuada.

## Cómo se usa en la práctica

1. Abre [windrose.tools](https://windrose.tools) en cualquier browser moderno (no requiere login para uso básico).
2. Para el mapa: clic en "Map", luego "Change" (esquina superior derecha) → sube tu save file (`.sav`) para auto-detectar el seed, o ingresa el seed manualmente si lo conoces.
3. Para el planner de talents: clic en "Talents", elige una de las cuatro ramas, distribuye los 12 talent points y 45 stat points, comparte el build copiando la URL.
4. Para item lookup: usa la barra de búsqueda en la parte superior — ingresa nombre exacto o aproximado, filtra por type si es ambiguo.

## Limitaciones honestas

- **Solo inglés**: no hay localización a español ni otros idiomas. La interfaz y datos son full EN.
- **No es FOSS**: sin GitHub público, así que si el sitio cae o se monetiza agresivamente en el futuro no hay fork directo.
- **Dependencia del community update cadence**: cada parche de Windrose introduce items/talents nuevos. El sitio se actualiza relativamente rápido pero hay días de lag entre patch y data sync.
- **Sin advertising blocker integrado**: el sitio tiene ads, no intrusivas pero presentes.

## Cómo empezar

Abre [windrose.tools](https://windrose.tools), navega a la sección que necesites (Map, Talents, Items, Discoveries). Para el mapa, lo más útil es subir tu save una vez para que el seed quede vinculado a tu navegador. El save vive en `%LOCALAPPDATA%\Windrose\Saved\SaveGames\` en Windows.
