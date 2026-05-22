---
title: "Garland Tools vs Gamerescape — database técnico o wiki narrativo"
description: "Resuelven preguntas distintas. Garland Tools es la database queryable; Gamerescape es el wiki con walkthroughs y lore."
---

A primera vista parecen competidores: ambos cubren FFXIV con info exhaustiva. En realidad ocupan nichos distintos y el overlap es chico — la elección no es "cuál es mejor", sino "qué pregunta estás haciendo".

## Garland Tools: database con filtros

Garland es una database pura. La utilidad es **querying**: Escribes un item, NPC, fish o gathering node y obtienes data exhaustiva con filtros granulares. Soporta:

- Items con todas sus sources (drop, vendor, recipe, gathering).
- Recipe trees recursivos que se expanden hasta los raw materials.
- Fishing logs con bait + weather + time requirements.
- Gathering nodes con coords y spawn timing.
- Mob loot tables.

Para players que crafean, gatherean o cazan items específicos, Garland es la herramienta de lookup diaria. UI densa, sin frills, info-heavy.

## Gamerescape: wiki con narrativa

Gamerescape es un wiki MediaWiki community-edited. La utilidad es **context**: páginas dedicadas para cada quest, dungeon, NPC, item, region. Cubre:

- Quest walkthroughs paso-a-paso con prerequisites y rewards.
- Dungeon/raid walkthroughs con mecánicas explicadas.
- NPC profiles con dialogue, ubicaciones, apariciones cross-expansion.
- Lore deep dives sobre primals, beast tribes, regiones, historia política.
- Music tracks por dungeon/raid con orchestrion roll source.

Para players que necesitan walkthrough de quest stuck o context lore, Gamerescape es donde vivir.

## Casos de uso opuestos

Las preguntas que cada uno responde mejor son casi disjoint:

**Garland Tools responde**:
- "¿Dónde dropea Spruce Logs?" → lista de nodos con coords.
- "¿Cuántos mats necesito para craftear este weapon?" → recipe tree expandido.
- "¿Qué peces hay en Western La Noscea con baitfish entre 2 PM y 6 PM ET?" → filtros directos.
- "¿Qué bagaje rare puedo conseguir farmean este mob?" → loot table.

**Gamerescape responde**:
- "Estoy stuck en la quest 'Heavensward MSQ Part 4'. ¿Qué hago?" → walkthrough completo.
- "¿Quién es Hraesvelgr y cuál es su historia?" → página de lore extensa.
- "¿Cómo unlock el job Dancer?" → quest prerequisites detallados.
- "¿Qué orchestrion roll dropea de este dungeon?" → music tracklist con source.

Si confundes cuál es cuál y vas al wrong tool, pierdes tiempo.

## El terreno compartido (chico)

Hay algunos casos donde ambos cubren parcialmente:

- **Items básicos**: ambos listan stats y vendors. Para datos técnicos, Garland. Para context histórico ("¿qué expansion introdujo este item?"), Gamerescape.
- **NPCs**: Garland los lista con qué venden; Gamerescape narra quiénes son. Útil cruzarlos.

Pero en el 80% de queries, claramente uno gana. No es solapamiento real.

## Recomendación práctica

- **Crafters / gatherers / achievement hunters**: Garland Tools es la herramienta diaria.
- **Players de MSQ/sidequest stuck o que quieren entender lore**: Gamerescape.
- **Quien hace queries técnicas sobre items que vió mencionados en una quest**: ambos, en secuencia.

Tener los dos bookmarkeados como complementarios, no como alternatives, es lo correcto.
