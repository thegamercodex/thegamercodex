---
title: "Mobalytics"
description: "Plataforma de coaching para League of Legends construida alrededor del GPI (Gamer Performance Index), con análisis de áreas de mejora, builds por champion y desktop app integrada en Overwolf."
quickTake: "Si tu pregunta es 'qué tengo que mejorar para subir de elo', Mobalytics es la única tool del ecosistema que te lo responde de forma estructurada. Todo el resto te dice qué construir o qué pasó; Mobalytics te dice por qué perdés."
---

## Qué es

Mobalytics es una plataforma de coaching y análisis personal para League of Legends, lanzada en 2016 por una empresa con base en San Francisco que recibió varias rondas de inversión específicamente para construir herramientas de "self-improvement" para gamers. Su producto central es el **GPI (Gamer Performance Index)**: un score multidimensional que descompone tu performance en 8 áreas (combat, vision, farming, aggression, consistency, objectives, versatility, survivability) y te dice cuáles son tus puntos fuertes y débiles relativo a jugadores de tu rango.

Tiene tres formas de uso: el sitio web (mobalytics.gg) para consulta y dashboard, una desktop app que corre dentro del cliente Overwolf, y un set de guías de coaching escritas por coaches y pros. Cubre además funciones que se solapan con OP.GG y U.GG (match history, builds, runas, tier lists), pero su angle editorial es siempre la mejora del jugador, no solo la consulta.

Tier paga ("Mobalytics Pro", ~5 USD/mes) desbloquea histórico ilimitado, recomendaciones más profundas y guías premium. La tier free cubre el GPI básico, builds, y dashboard de partidas recientes.

## Qué problema resuelve

OP.GG te dice **qué pasó** en tu partida (KDA, gold, daño). U.GG te dice **qué construir** en un champion. Pero ninguna de las dos te dice **por qué seguís estancado en tu elo actual** ni **en qué áreas concretas tenés que enfocarte para mejorar**.

Esa pregunta es la que ataca Mobalytics. El GPI procesa tus partidas, las compara con jugadores de tu mismo rango y rol, y devuelve un diagnóstico legible: "tu farming está en percentil 80 (excelente), pero tu vision score está en percentil 30 (debajo del promedio de tu rango — área prioritaria de mejora)". Encima del diagnóstico, propone acciones concretas y guías específicas para trabajar esas áreas.

Esto cubre un gap real: la mayoría de jugadores de elos medio-bajo no saben qué priorizar. Mobalytics traduce data en plan de acción.

## Para qué la usa la gente

**Identificar áreas de mejora prioritarias**: el caso de uso central. Mirás tu GPI, identificás los 1-2 ejes con score más bajo, y enfocás tu práctica ahí.

**Tracking de progreso a lo largo del tiempo**: el GPI guarda histórico, así que podés ver si tu vision score (por ejemplo) realmente está mejorando después de dos semanas de enfocarte en wards.

**Builds y runas con contexto pedagógico**: igual que U.GG, lista builds por champion, pero las anota con explicaciones del "por qué" — qué situaciones favorecen cada item, cuándo desviarte del core.

**Guías de coaching escritas**: la sección de Academy tiene guías largas escritas por coaches sobre macro game, wave management, vision control, mentalidad. Útil para players que aprenden mejor leyendo que viendo videos.

**Champ select assistant (desktop)**: la desktop app detecta tu champion en champ select y carga automáticamente la build, runas y tips del matchup específico que vas a jugar.

## Para quién NO es esta herramienta

Mobalytics es excelente como herramienta de mejora estructurada, pero no es lo que necesitás si:

- **Solo querés consultar tu rank o el de un amigo** → OP.GG es más rápido y directo, sin la capa pedagógica que en ese caso sobra.
- **Solo querés ver builds y runas** → U.GG es más liviano y tiene la data de builds más limpia, sin la parte de coaching.
- **No querés instalar el cliente Overwolf** → la web app de Mobalytics funciona, pero la desktop app requiere Overwolf como runtime (ver "Limitaciones honestas"). Porofessor tiene un overlay más liviano si solo querés champ select assistance.
- **Buscás stats agregados profundos del meta** → Lolalytics y League of Graphs son mejores para ese tipo de análisis estadístico.

## Cómo se usa en la práctica

1. Vas a `mobalytics.gg`, te creás cuenta gratis (login con Google, Discord o Riot ID).

2. Conectás tu cuenta de LoL ingresando tu Riot ID. Mobalytics importa tus últimas partidas y calcula el GPI inicial.

3. Dashboard principal muestra: GPI con sus 8 áreas, ranking comparativo vs tu elo, áreas prioritarias de mejora destacadas, y recomendaciones de guías relacionadas.

4. Por cada partida reciente: análisis automático con feedback ("alta presión en lane fase pero bajo impacto en team fights — considerá practicar positioning post-15min").

5. Sección de **Champions**: builds, runas, matchups, igual que U.GG pero con notas pedagógicas.

6. Si instalás la desktop app (vía Overwolf), te asiste automáticamente en cada champ select cargando la build correspondiente sin tener que navegar al sitio.

## Limitaciones honestas

**Desktop app requiere Overwolf**: en noviembre 2022, Mobalytics migró su desktop app del runtime standalone (Electron) a Overwolf. La app vieja está congelada y todo feature nuevo va al build de Overwolf. Esto significa que para usar el champ select assistant necesitás instalar Overwolf, que es una plataforma con su propio runtime, ads inyectados, y telemetría propia (controvertida en partes de la comunidad gaming). La web app NO tiene esta limitación — corre en cualquier navegador sin runtime extra.

**El GPI es opaco en su fórmula exacta**: Mobalytics no publica los pesos exactos del algoritmo del GPI. Sabés que combina varios sub-scores y los compara con tu peer group, pero el detalle es propietario. Eso lo hace útil como guía direccional pero no como ground truth absoluto.

**Curva de aprendizaje del propio GPI**: las 8 áreas de performance toman tiempo de internalizar. Un jugador que recién llega puede sentirse abrumado por dashboards densos.

**Tier paga empuja con upsells**: Mobalytics Pro ofrece histórico extendido y guías premium. Los upsells aparecen seguido en la tier free. El producto core (GPI básico, builds, dashboard) sigue siendo gratis y útil sin upgrade.

**Recomendaciones genéricas en niveles bajos de data**: si solo tenés 5-10 partidas analizadas, el GPI tiene baja confianza estadística y las recomendaciones pueden sentirse genéricas. Mejora con volumen (50+ partidas).

## Cómo empezar

1. Andá a `mobalytics.gg` y creá cuenta (login con Riot, Google o Discord).

2. Conectá tu Riot ID en la región correspondiente. Esperá ~2-3 minutos a que importe partidas y calcule el GPI inicial.

3. Mirá tus 8 áreas del GPI. Identificá las 1-2 con score más bajo respecto a tu peer group — esas son tus prioridades reales.

4. Buscá en la sección Academy una guía relacionada con esa área (ej: si tu vision score está bajo, buscá guías de warding y vision control).

5. Volvé a chequear el GPI cada 1-2 semanas para ver evolución. Si recién arrancás, esperá a tener 30-50 partidas analizadas antes de tomar decisiones grandes basadas en el score.

6. Si querés el champ select assistant, decidí si te compensa instalar Overwolf. Si tu prioridad es lean/standalone, quedate solo con la web app — el dashboard cubre el 80% del valor sin extras.
