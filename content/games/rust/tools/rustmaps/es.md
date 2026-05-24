---
title: RustMaps
description: Generador y galería de mapas procedurales de Rust con filtros por monumentos, heatmaps de recursos y API para servers.
quickTake: Si admin un server, esto no es opcional — es como decides qué mapa va a usar tu comunidad cada wipe. Para jugadores, sirve para scoutear el mapa del server antes de logear el wipe nuevo.
---

## Qué es

RustMaps es la herramienta web standard para generación y discovery de mapas de Rust. Tiene tres usos principales: generar mapas custom con seed/size específicos, browsear una galería de mapas ya generados, y consumir todo via API desde un server o un plugin. Es gratis para uso básico (genera mapas que se publican hasta el próximo force wipe) y tiene tier paid para custom map generation con retención de 2 meses.

## Qué problema resuelve

Cada server elige el mapa con el que arranca el wipe — seed + size determina monumentos, terreno y distribución de recursos. Sin RustMaps, los admins generaban a ciegas: o tomaban el mapa default de Facepunch para esa seed (que podía spawn sin Oil Rig o con todos los monumentos en una esquina), o usaban procedural maps custom sin saber qué iban a recibir. RustMaps muestra el mapa entero antes de servirlo, con filters por presencia de monumentos, número de nodos, biome distribution, etc.

## Diferenciación

Es el único generador con la galería pública grande y los filters detallados. Hay alternativas como Rust:IO (live map plugin para servers ya corriendo) que cubren el caso de jugar en el server, pero ninguna replica el "generate + filter before commit" de RustMaps. Para custom maps editados manualmente, RustEdit es el complemento (no competencia) — RustEdit edita, RustMaps genera procedurales.

## Para qué la usa la gente

- **Admins eligiendo mapa para el wipe**: generar varios candidatos, filtrar por size + monumentos presentes, pickear el mejor.
- **Jugadores scouting su server actual**: copy el seed + size del server desde la consola, pegar en RustMaps, ver mapa antes de logear.
- **Plugin integration**: MapVoter y Automated Maps consumen la RustMaps API para que la comunidad del server vote el próximo mapa.
- **Heatmaps de recursos**: ver dónde hay más sulfur nodes, animales, prospect points — useful para roaming planning.
- **Monument coordinates**: copiar coordenadas de un monumento específico para chat o screenshots.

## Para quién NO es esta herramienta

Si solo juegas vanilla en servers oficiales de Facepunch sin ser admin, casi nunca abres RustMaps — los servers oficiales rotan mapas automáticamente. Si quieres un mapa custom diseñado a mano (con custom monuments, lore, puzzles), RustMaps no edita; para eso, RustEdit.

## Cómo se usa en la práctica

1. Entras a rustmaps.com, sin registro para gallery viewing.
2. Para generar un mapa: "Generate" → meter seed (cualquier número) + size (3000-6000), wait ~2-5 min.
3. El mapa aparece con monuments listados, biome distribution, heatmaps togglables.
4. Para uso de admin via API: registrar cuenta, obtener API key, integrar con plugin de tu choice (MapVoter, Automated Maps, RustMaps CLI).
5. Para custom retention de 2 meses, suscribirse al tier paid.

## Limitaciones honestas

- **Generación demora**: 2-5 minutos por mapa, hasta más para sizes grandes (5000+).
- **Maps free expiran al próximo force wipe**: si quieres persistencia, tier paid o regenerate.
- **Solo inglés**: sin localización.
- **API tier paid para uso heavy**: free tier limita number de generations/día para uso casual.
- **No edita mapas**: si quieres un mapa con custom monumentos, RustEdit es el tool.

## Cómo empezar

Para uso casual (browse + ver el mapa del server actual): rustmaps.com sin cuenta. Para admin de server: registrar, obtener API key desde dashboard, instalar MapVoter o Automated Maps via uMod/Carbon, configurar el plugin con tu API key. La docs de RustMaps en guides.rustmaps.com tiene walkthroughs por integration.
