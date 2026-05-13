---
title: "Destiny Item Manager"
description: "Aplicación web open-source para gestionar el inventario, vault y loadouts de Destiny 2 desde el browser, mobile o desktop."
quickTake: "Si juegas Destiny 2 más de un par de horas a la semana, DIM no es opcional. Mover gear entre personajes, armar loadouts y filtrar el vault sin DIM es masoquismo voluntario."
---

## Qué es

Destiny Item Manager (DIM) es una aplicación web progressive (PWA) open-source que se conecta a tu cuenta Bungie.net y te deja gestionar todo tu inventario de Destiny 2 sin entrar al juego. Mantenida por una comunidad de contribuidores en GitHub bajo licencia MIT, sin afiliación oficial a Bungie pero usando su API pública. Activa desde 2017.

Funciona en browser desktop, mobile (iOS y Android como PWA) y se puede instalar como app de escritorio. La traducción a español está disponible y se mantiene al día con cada update.

## Qué problema resuelve

El inventario in-game de Destiny 2 es estructuralmente limitado: la postmaster tiene capacidad reducida, el vault no se puede filtrar más allá de tabs básicas, y mover un arma entre personajes implica abrir character screens, transferir al vault, cambiar de personaje y bajarlo del vault. Multiplicado por 200+ items, la gestión consume horas semanales.

DIM colapsa todo eso en una grilla buscable: ves los tres personajes y el vault en una sola pantalla, drag-and-drop entre slots, búsquedas con sintaxis poderosa (`is:weapon is:masterwork perk:rampage` filtra al instante), y loadouts guardados que se equipan con un click.

## Diferenciación

Frente a Braytech (la alternativa OSS más cercana), DIM se centra en **gestión activa** del inventario, mientras que Braytech está orientado a **tracking de progresión** (bounties, triumphs, vendor checklists). Las dos coexisten en el flujo de muchos jugadores: DIM para "armar la build de hoy", Braytech para "ver qué me falta esta semana".

Frente a la app Companion oficial de Bungie, DIM gana en velocidad, capacidad de búsqueda y loadouts. La oficial gana en integración con clan/fireteam finder.

## Para qué la usa la gente

**Armar loadouts por actividad**: guardas "Loadout PvE Solar Warlock", "Loadout Trials Hunter", "Loadout Raid DPS" y los equipas con un click antes de la actividad. DIM transfiere todo el gear y mods automáticamente.

**Limpiar el vault sin pánico**: con búsquedas tipo `is:dupe is:weapon -is:masterwork` ves duplicados sin masterwork de un solo vistazo y los desensamblas en bulk. Lo mismo con armaduras viejas que ya no usas.

**Comparar god rolls**: tag a mano (favorite, junk, infuse) las armas según el rol y filtras por tag para decidir qué mantener cuando el vault se llena.

**Mover gear rápido**: drag-and-drop entre personaje y vault, sin el tedio del flow oficial. Cuando estás en raid y cambian la rotación, DIM te salva minutos.

**Loadout Optimizer**: la pestaña dedicada combina armaduras + mods + stats target y te dice qué pieza usar en cada slot para llegar al stat budget que quieres.

## Para quién NO es esta herramienta

Si juegas Destiny 2 muy casual (una hora cada par de semanas) y nunca tocas endgame, DIM es overkill. La app Companion oficial cubre lo básico.

Si no tienes cuenta Bungie.net o no quieres autenticarla con OAuth, DIM no funciona — la conexión a la API es obligatoria para cualquier acción.

## Cómo se usa en la práctica

1. Abres `destinyitemmanager.com` y le das "Authorize with Bungie.net" — flujo OAuth normal, no pide credenciales directas.
2. Esperas a que sincronice tu inventario (3-5 segundos la primera vez).
3. Para mover un item, lo arrastras al personaje destino o al vault. La animación in-game lo refleja en segundos.
4. Para crear un loadout: click en el personaje → "Loadouts" → "Create Loadout" → seleccionas items y mods → guardas con nombre.
5. Para búsquedas avanzadas: barra superior con sintaxis tipo `is:weapon -is:masterwork stat:range:>50`. La doc completa de queries está en el botón de help.

## Limitaciones honestas

**Depende de la API de Bungie**: si Bungie tiene maintenance o el servicio cae, DIM no funciona. Esto pasa típicamente en patch days de expansión grande.

**Loadouts están limitados a items que ya tienes**: no puedes "planear" una build con armas que aún no dropearon. Para eso hay otras tools.

**La curva de búsqueda es real**: la sintaxis es potente pero leer la doc paga. Los nuevos suelen ignorar el filtrado avanzado y se pierden la mitad del valor.

**No reemplaza al juego para algunas operaciones**: ciertos flows (claim de seasonal pass tiers, exotic quest steps) siguen requiriendo abrir Destiny 2.

## Cómo empezar

Entra a `destinyitemmanager.com`, autorizá con tu cuenta Bungie.net (Steam / PlayStation / Xbox), y ya estás dentro. La primera vez explora los tres personajes, prueba mover un item al vault, y anda al panel de Loadouts. En menos de 10 minutos ya estás moviendo gear más rápido que dentro del juego.
