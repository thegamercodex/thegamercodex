---
title: "U.GG"
description: "Hub de builds, runas y tier lists para todos los campeones de League of Legends, con dataset masivo agregado y una UX más moderna que el promedio de la categoría."
quickTake: "La referencia más limpia para consultar builds y runas por champion. Si tu pregunta es 'qué construyo en este champion', U.GG la resuelve más rápido que ninguna. Para historial personal y tier lists generales, OP.GG sigue siendo más cómodo."
---

## Qué es

U.GG es una plataforma web de builds, runas y stats por campeón en League of Legends, lanzada en 2018 y operada por la empresa del mismo nombre con sede en Estados Unidos. Su foco original fue construir el sitio de builds más rápido y limpio del ecosistema, en una época donde Mobafire y otros sitios legacy dominaban la categoría con UX cargada y poco actualizada.

El uso más común es directo: buscás un champion, elegís rol, y la página te muestra la build óptima del patch actual (items, runas, hechizos, orden de habilidades) calculada sobre millones de partidas agregadas. Cubre además match history (estilo OP.GG), counters por matchup, tier lists y probuilds.

Tiene una tier paga ("U.GG Premium", ~3 USD/mes) que remueve ads y desbloquea filtros avanzados, pero todo el core editorial de la herramienta es gratis y consultable directo desde el navegador, sin login.

## Qué problema resuelve

Hay dos preguntas distintas que un jugador de LoL se hace constantemente: "¿cómo me fue?" y "¿qué construyo en este champion?". OP.GG resuelve la primera de forma canónica. U.GG resuelve la segunda.

El cliente de Riot trae builds recomendadas, pero son estáticas, genéricas y muchas veces desactualizadas respecto del meta real. Un jugador que quiere optimizar su build necesita data agregada de partidas reales, idealmente filtrada por rango (Diamond+) y rol. U.GG cubre exactamente ese gap, con presentación clara: ítem por ítem, con tasa de victorias asociada y porcentaje de uso.

## La diferencia con OP.GG

OP.GG y U.GG cubren funciones que se solapan, pero la entrada principal de cada una es distinta:

**OP.GG**: la entrada natural es **un summoner**. Buscás una cuenta y desde ahí navegás a sus matches, sus champions, sus stats. Las builds y tier lists existen pero son secundarias.

**U.GG**: la entrada natural es **un champion**. Buscás "Yasuo mid" y obtenés directamente la build, runas, matchups, items por situación. El match history existe pero es funcionalidad complementaria.

Otro punto: U.GG suele aparecer descrita como "Riot-approved" en foros y reddits. **No existe** un programa formal de "Riot Partner" para sites de builds — ese rol está reservado a creadores de contenido. U.GG fue sponsor de un segmento del LCS en 2019 (un acuerdo comercial puntual), y su propio sitio incluye el disclaimer estándar "isn't endorsed by Riot Games". Es third-party, igual que OP.GG, Mobalytics y Blitz.

Si tu workflow empieza por "quiero ver mi última partida", OP.GG. Si empieza por "qué construyo en este champion para este matchup", U.GG.

## Para qué la usa la gente

**Consultar build optimizada del patch actual**: el caso de uso dominante. Buscás el champion + rol y obtenés items, runas, hechizos y orden de habilidades en una vista única.

**Importar runas al cliente**: U.GG tiene una desktop app opcional que importa la página de runas directo al cliente de LoL al detectar el champion seleccionado en champ select.

**Estudiar matchups**: la sección "Counters" muestra contra qué champions tu pick gana / pierde, con porcentajes basados en data agregada. Útil para decidir bans o adaptar tu pick.

**Ver tier lists por rol y rango**: tier list propia de U.GG con código de colores (S+, S, A, B, C, D) calculada sobre win rate ajustado por pick rate.

**Probuilds**: sección con builds recientes de jugadores profesionales por champion, útil para ver qué están construyendo los pros en patches nuevos antes de que la data agregada se estabilice.

## Para quién NO es esta herramienta

U.GG es excelente como guía de builds rápida y consulta de meta, pero no es la mejor opción para:

- **Análisis estadístico profundo** → Lolalytics y League of Graphs ofrecen breakdowns más granulares (por timing de power spike, por composición enemiga, por duración de partida).
- **Coaching estructurado y mejora personal** → Mobalytics tiene el GPI (Gamer Performance Index) que te dice qué áreas mejorar, U.GG no entra en ese terreno.
- **Asistencia activa durante champ select y partida** → Porofessor (overlay nativo) o Blitz (overlay con automation) son las opciones específicas.
- **Match history como entrada principal** → OP.GG sigue siendo más cómodo cuando tu pregunta empieza por una cuenta y no por un champion.

## Cómo se usa en la práctica

1. Vas a `u.gg` y buscás el nombre del champion (o navegás por la grilla de champions).

2. Seleccionás el rol (top, jungle, mid, ADC, support) — el sitio detecta el rol más común si no especificás.

3. La página carga la build recomendada con: starting items, core build path, items situacionales, runas primarias y secundarias, hechizos de invocador, orden de habilidades.

4. Pestañas adicionales por champion: **Counters** (matchups), **Probuilds** (builds de pros), **Statistics** (win rate por item, por matchup, por duration), **Tier List** (ranking general del rol).

5. Filtros disponibles: por rango (Platinum+, Diamond+, Master+), por región, por patch específico.

Si querés importar runas automáticamente al cliente, instalás la desktop app — pero para consulta web pura no es necesaria.

## Limitaciones honestas

**Anuncios cargados en la versión gratuita**: U.GG depende fuertemente de ads en la tier free. En desktop son tolerables, en mobile pueden volverse molestos. Un ad-blocker resuelve la mayoría.

**Algoritmo de tier list es opaco**: U.GG asigna tiers (S+, S, A, etc.) con un algoritmo propio que pondera win rate y pick rate, pero no publica la fórmula exacta. Lolalytics es más transparente en cómo deriva sus rankings.

**Smaller regions tienen gaps**: igual que op.gg, los stats agregados son super confiables en KR, NA, EUW, pero pueden ser menos representativos en LAS, LAN, OCE, BR.

**Cobertura competitiva no es su fuerte**: U.GG tiene Probuilds pero la base es más chica que la de Probuilds.net o Probuild.gg, que son sitios dedicados exclusivamente a esa función.

**Premium tier es opcional pero ofrecido frecuentemente**: el sitio empuja la suscripción con popups y banners. Si solo querés consultar builds, ignorá los upsells — la versión gratis cubre el 95% de los casos de uso.

## Cómo empezar

No requiere registro ni instalación. Vas a `u.gg`, buscás un champion, elegís rol, listo. Para sacarle máximo provecho:

1. Bookmarkeá la URL del champion + rol que más juegues — las builds se actualizan automáticamente cada patch.

2. Si te interesa el meta general de tu rol, marcá la tier list correspondiente como recurso de inicio de sesión.

3. Antes de cada partida ranked, abrí la sección Counters de tu champion para ver qué bans priorizar.

4. Considerá la desktop app solo si te interesa el auto-import de runas — para todo lo demás, la web es suficiente.

5. Si querés entender por qué una build funciona (no solo qué construir), complementá con Lolalytics que muestra mejor el "porqué" estadístico.
