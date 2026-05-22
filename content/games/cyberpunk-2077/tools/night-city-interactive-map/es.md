---
title: "Night City Interactive Map"
description: "Mapa web interactivo de Cyberpunk 2077 con filtros para collectibles, side jobs, gigs, NCPD scanner hustles, fast travel y vendors."
quickTake: "Cuando persigues el 100% completion o se te perdió una iconic weapon, este mapa muestra exactamente dónde está. UI limpia, filtros buenos, no es el más bonito pero hace el trabajo."
---

## Qué es

Night City Interactive Map (`nightcity.io`) es un mapa web del open world de Cyberpunk 2077, mantenido por la comunidad. Es uno de varios mapas similares (Cyberpunk2077-map.com, AtlasForge, GameMappers) — la elección entre ellos suele ser preferencia personal de UX.

Cubre Night City completo (Watson, Westbrook, Heywood, Pacifica, Santo Domingo, Badlands) y Dogtown si tienes Phantom Liberty. Filtros para tipos de content: side jobs, gigs, NCPD scanner hustles, cyberpsycho sightings, tarot cards, iconic weapons, vehicles, vendors, fast travel.

## Qué problema resuelve

Cyberpunk 2077 tiene cientos de POIs (points of interest) dispersos por Night City. El mapa in-game muestra algunos pero no todos:
- Los iconic weapons no aparecen hasta que descubres su área.
- Los tarot cards solo se marcan después de hablar con Misty post-prologue.
- NCPD scanner hustles aparecen pero sin filtros.

Para players que quieren 100% completion, encontrar todos esos sin guía es weeks de exploración aleatoria. Night City Interactive Map agrega todos los POIs con filtros y permite marcar items como "completed" para tracking de progreso personal.

## Diferenciación

Frente a **Cyberpunk2077-map.com**: contenido similar, layout diferente. Cyberpunk2077-map tiene más densidad informativa per click; Night City es más visual con assets más cleanos. Es cuestión de preferencia.

Frente a **AtlasForge**: AtlasForge intenta una vista 3D (más experimental). Night City es 2D top-down clásico, más rápido de cargar.

Frente al **mapa in-game**: el mapa in-game es authoritative pero estricto sobre lo que muestra (revealed-on-discovery). Night City Interactive te muestra todo upfront — eso es spoiler para players que prefieren descubrir, ventaja para completionists.

Frente a **Fextralife wiki**: Fextralife lista locations en texto; Night City los muestra geográficamente. Complementarios — uno para reading, otro para navigation.

## Para qué la usa la gente

**100% completion runs**: Filtras por tipo (ej: "iconic weapons" o "tarot cards"), ves cuáles ya completaste, ves cuáles te faltan, planificas el path eficiente para hacerlos.

**Encontrar iconic weapons antes**: armas únicas que el juego no destaca específicamente. El mapa te dice exactamente la calle donde está, te llevas eso del primer playthrough.

**NCPD scanner hustles**: actividades menores que dan XP y cred. El mapa los muestra todos, puedes tradeoff "voy en route" vs "desvío 2km por esto".

**Vendor locations**: ripperdoc-finder, weapon vendor, clothes shop. Útil cuando vas a craftear o farm components.

**Planeación de runs específicas**: ej "esta sesión solo voy a hacer cyberpsycho sightings". El mapa te lista 17 ubicaciones, puedes hacerlos en sequence sin volver al menú.

## Para quién NO es esta herramienta

Si juegas first playthrough y quieres descubrir Night City orgánicamente, evita los interactive maps. Te van a tentar a stripear el sentido de exploración. Mejor terminar la story una vez, después usar el mapa para completion.

Si juegas casual sin obsesión por completion, el mapa in-game alcanza. Interactive maps son para "voy por el 100%".

Si tu internet es flaky, el mapa web requiere conexión — sin offline mode. El mapa in-game funciona sin conexión.

## Cómo se usa en la práctica

1. Entras a `nightcity.io` desde cualquier navegador.
2. La default view es Night City completo. Haces zoom in/out con scroll, navegas con drag.
3. Sidebar tiene filtros por categoría: marcas/desmarcas qué tipos de POIs quieres ver.
4. Cada POI tiene tooltip con nombre y descripción al pasar el mouse.
5. Click derecho en un POI te permite marcarlo como "completed" — útil para tracking. Esa data se guarda en localStorage del browser (no en cloud).
6. Si activas Phantom Liberty desde una toggle, aparece Dogtown como overlay sobre el mapa base.

Para play sessions concurrentes: tener el mapa abierto en segundo monitor o teléfono mientras juegas, marcando POIs as you complete them.

## Limitaciones honestas

**No tracking cross-device**. La data de "completed" vive en localStorage del browser. Si cambias de PC, pierdes ese progreso. Sin sync cloud.

**Solo en inglés**. Toda la UI y descripciones en inglés. No hay localización al español.

**Updates manuales post-patch**. Cuando CDPR agrega content via update (a veces lo hacen — Phantom Liberty fue un add masivo, pero también micro-patches con nuevas side jobs), el mapa puede tardar semanas en sincronizar.

**Spoilers de story content**. Algunos side jobs cuyo trigger es story-related se muestran sin warning. Si quieres mantener freshness narrativa, evita leer descripciones de quests con "?" antes de jugarlos.

**Sin filtro "near me"**. No te dice "qué POIs hay en 500m de donde estás ahora" — tienes que orientarte visualmente. Otros mapas (algunos GameMappers) tienen overlay de player position, este no.

## Cómo empezar

1. Abre `nightcity.io` en cualquier browser.
2. Si tienes Phantom Liberty, activa el toggle de Dogtown — sin él, el mapa base es suficiente.
3. Decidí qué buscas: para cazar iconic weapons, filtra solo esa categoría. Para 100% completion run, activa todo.
4. Mientras juegas, deja el mapa abierto en otro device o monitor. Cuando estés cerca de un POI, navega al area y completa. Marca como done después.
5. Itera: progresa story principal en sessions normales, periodicamente abres el mapa para "what's near?" cuando vayas a un district nuevo.

Tip: para evitar spoilers, **no actives el filtro de "main jobs"** hasta haber terminado la story. Los side jobs y NCPD hustles son safe; los main jobs te van a mostrar locations spoilery.
