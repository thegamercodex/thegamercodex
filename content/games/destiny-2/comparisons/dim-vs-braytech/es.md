---
title: "DIM vs Braytech — gestión de inventario o tracking de progresión"
description: "Dos web apps open-source para Destiny 2 con focos opuestos: DIM gestiona tu inventario y loadouts, Braytech audita tu progresión semanal. Cuándo usar cada una."
---

Es común comparar DIM y Braytech porque ambas son web apps open-source, gratuitas, se conectan a tu cuenta Bungie.net vía OAuth y conviven en el flujo de muchos jugadores. Pero resuelven problemas distintos: DIM se centra en la **gestión activa** del inventario (mover gear, armar loadouts, limpiar el vault), mientras que Braytech está orientada al **tracking de progresión** (vendor checklists, triumphs, collections, lost sector rotation). No son rivales directas; la pregunta real no es cuál elegir, sino para qué tarea usas cada una.

## Qué hace cada una

DIM colapsa los tres personajes y el vault en una sola grilla buscable. Drag-and-drop entre slots, búsquedas con sintaxis potente (`is:weapon is:masterwork perk:rampage`), loadouts guardados que se equipan con un click, y un Loadout Optimizer que combina armadura, mods y stats target. Todo gira en torno a "armar la build de hoy y mover gear rápido".

Braytech consolida los sistemas de progresión paralelos del juego en una pantalla:

- Vendor checklists (qué tiene Banshee, Spider, Saint-14 esta semana y qué ya posees).
- Triumph progress filtrable por seal o título (Conqueror, Flawless, Dredgen).
- Collections para gap analysis por slot.
- Lost sector rotation y trackers semanales (Nightfall, Empire Hunts).

DIM no cubre nada de eso, y Braytech no mueve ni un solo item de tu inventario.

## Profundidad y mantenimiento

DIM está activa desde 2017, mantenida por una comunidad de contribuidores bajo licencia MIT. Braytech está activa desde 2018, mantenida por un solo dev (Tom Chapman, justrealmilk) bajo GPL-3.0. Ambas dependen de la API de Bungie, así que las dos pueden caer en patch days de expansión grande o lagear cuando cambia el manifest.

La curva de DIM es real: la sintaxis de búsqueda es potente pero hay que leer la doc para exprimirla. Braytech apuesta por un diseño minimalista y limpio que algunos sienten frío — todo es grilla y data, sin decoración.

## Idiomas, plataformas y monetización

- **DIM**: web, Windows, macOS, Linux, Android e iOS (como PWA). Disponible en inglés y español. Free, open-source, sin ads.
- **Braytech**: solo web. Solo en inglés, sin localización. Free, open-source, sin ads.

Si necesitas la herramienta en español o desde el móvil, DIM es la única de las dos que cubre ese caso.

## ¿Cuál usar?

- **Mover gear entre personajes y vault** → DIM. Es su función central; Braytech no toca inventario.
- **Armar y equipar loadouts por actividad** → DIM. Loadout builder y optimizer dedicados.
- **Limpiar duplicados y desensamblar en bulk** → DIM. Búsquedas `is:dupe` y tags resuelven en segundos.
- **Ver qué te falta de cada vendor esta semana** → Braytech. Vendor checklists con filtro "no tengo aún".
- **Chase de un seal o título** → Braytech. Triumph progress filtrable por seal.
- **Auditar collections por slot** → Braytech. Gap analysis para completionists.

En la práctica suelen ser complementarias: DIM para "armar la build de hoy", Braytech para "ver qué me falta esta semana". Si juegas endgame con cierta regularidad, tener ambas abiertas es lo normal.
