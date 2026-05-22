---
title: "Garland Tools"
description: "Base de datos exhaustiva de FFXIV con items, recetas, NPCs, peces, mobs, nodos de gathering y drops — todo cross-referenciado con filtros granulares y vista en árbol."
quickTake: "Garland Tools es la database power-user de FFXIV. Cuando necesitas 'cuántas Spruce Logs por una receta de carpenter 100 + dónde se gatherean' o 'qué fish requiere mooching de Y a la hora X', acá lo encuentras en segundos. La UI es densa pero exhaustiva."
---

## Qué es

Garland Tools (garlandtools.org) es una database web de FFXIV mantenida por ufx desde 2013. Es uno de los primeros tools comunitarios sobrevivientes y se actualiza patch tras patch sin falta. Open source en GitHub (`ufx/GarlandTools`).

La data cubre:

- **Items**: cualquier item del juego con sus drops, vendors, recipes, uses.
- **Recipes**: por crafter, con ingredientes recursivos.
- **NPCs y vendors**: qué venden y a qué precio.
- **Mobs**: qué dropean, dónde aparecen.
- **Fishing**: nodos, baits, weather requirements, hookset, mooching chains.
- **Gathering**: nodos de Miner/Botanist con coords y timing.
- **Achievements**: requirements y rewards.
- **Quests**: brief overview, no walkthroughs detallados.

Soporta inglés, francés, alemán y japonés.

## Qué problema resuelve

FFXIV tiene decenas de miles de items con relaciones complejas (recipe trees, drop chains, gathering rotations). Sin una database queryable, encontrar la mejor forma de obtener X item es un dolor.

Garland Tools centraliza eso:

- "¿Dónde consigo Spruce Logs?" → lista de nodos con timing y zone.
- "¿Cómo se hace un Sharpened Tomahawk?" → recipe tree completo con todos los mats recursivamente.
- "¿Qué peces hay en La Noscea Western?" → lista filtrable por bait y weather.
- "¿Qué item es Yellow Scrip exchange en patch X.Y?" → vendor lookup.

Para crafters, gatherers y achievement hunters es la herramienta de consulta diaria.

## Diferenciación vs Teamcraft

Garland Tools y Teamcraft cubren mucho del mismo terreno pero con enfoques distintos:

- **Garland Tools**: database puro. Vas, quieres info, la encuentras. No te ayuda a planificar rotaciones de crafting.
- **Teamcraft**: planner y workflow. Simulas rotaciones, listas de mats, inventory sync.

Para queries puntuales rápidas, Garland Tools es más directo. Para flujo de crafting completo (creo X items, optimizo rotación, calculo profit), Teamcraft. Muchos usan ambos.

## Para qué la usa la gente

**Búsqueda de items**: "¿qué dropea el Forgotten Knight NPC?" Lookup directo.

**Recipe trees recursivos**: planificas craftear gear pre-Savage. Garland expande la receta a todos los mats raíz (mineral X, fish Y, etc.) y te dice cuántos necesitas.

**Fishing logs**: Cazas un fish específico para Achievement. Garland te muestra el spot, bait, weather y hora de día requeridas.

**Gathering nodes**: te falta una mat específica. Garland te muestra los nodos con coords + timing.

**Cross-reference**: Quieres saber "este item se obtiene de qué fuentes". Garland te lista vendor, drop, gathering, recipe, todo en una vista.

## Para quién NO es esta herramienta

- **Combat focus puro**: no relevante para análisis de raid o BiS. Para eso es FFLogs/Etro.
- **UI-sensitive users**: Garland tiene UI densa, cero ornamento, mucha info por pantalla. Si prefieres UIs limpias y modernas, Teamcraft o Gamerescape se ven mejor.
- **Glamour exclusive**: si solo te interesa glamour, Eorzea Collection tiene mejor catálogo visual.
- **Mobile users**: la UI es desktop-first. Mobile funciona pero es tediosa.

## Cómo se usa en la práctica

1. Anda a [garlandtools.org](https://garlandtools.org).

2. La barra de búsqueda top: escribes el item, NPC, mob, fish o achievement que quieres. Auto-complete sugiere.

3. Cada entry tiene tabs: **Overview**, **Source** (cómo obtenerlo), **Used in** (recipes que lo usan), **Notes**.

4. Para recipe trees: haces click un crafted item → tab **Recipe**. Garland expande recursivamente todos los mats.

5. Para fish: filtros por zone, bait, weather, time-of-day. Cada fish tiene su record de catch chain.

6. Para gathering: filtros por job (MIN/BTN), zone, item. Te muestra coordenadas y timing.

## Limitaciones honestas

**UI desactualizada**: la UI se ve del 2013. Funcional pero no bonita. Filtros y vistas requieren acostumbramiento.

**No simula crafting rotations**: Garland te dice qué materials necesitas, no qué rotación de crafting usar para hacer el HQ. Para eso Teamcraft.

**No tiene inventory sync**: no puedes conectar tu cuenta y ver "qué me falta para esta recipe". Manual nomás. Teamcraft sí tiene esto.

**Updates dependen de un solo maintainer**: ufx mantiene el sitio solo. Si tarda en actualizar post-patch, todos esperamos. Históricamente la cadencia ha sido buena, pero el bus factor es real.

**Mobile experience pobre**: aunque el sitio carga en mobile, la cantidad de info por pantalla la hace difícil de leer.

**Inglés primario**: aunque soporta 4 idiomas, hay contenido (especialmente community notes) solo en inglés.

## Cómo empezar

1. Anda a [garlandtools.org](https://garlandtools.org).

2. Busca algo familiar (ej: tu job's starter weapon). Explora las tabs (Overview, Source, Used in).

3. Prueba una query típica de gathering: "Allagan Tomestone of X" → ves dónde se cambia.

4. Para crafting: busca un endgame item crafted (ej: weapon de tu job en patch X.0). Mira el recipe tree y los mats recursivos.

5. Para fish: filtros por zone + weather → ves todos los fish gettable en esa combinación.

6. Compara con Teamcraft para queries similares — Teamcraft te muestra lo mismo con planning workflow. Cuál preferir depende de tu caso de uso.

7. Si encuentras un dato outdated o bug, puedes reportar al GitHub de ufx — el maintainer responde aunque puede tardar.
