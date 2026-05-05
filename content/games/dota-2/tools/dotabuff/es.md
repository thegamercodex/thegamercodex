---
title: "Dotabuff"
description: "El tracker de match history más usado de Dota 2, con stats por héroe, win rate por bracket de MMR, leaderboards y la plataforma premium TrueSight de análisis de replays."
quickTake: "Si vas a usar una sola tool de stats para Dota 2, esta es la apuesta segura. Web only, sin instalación, el dataset más amplio del ecosistema y la versión gratis cubre el 95% de lo que la mayoría de jugadores necesita."
---

## Qué es

Dotabuff es la web de estadísticas más antigua y más usada de Dota 2. El sitio opera desde 2012 — prácticamente desde el lanzamiento del juego — y sigue siendo la referencia default para cualquier jugador que necesita revisar stats de una cuenta, scoutear a un oponente o chequear si un héroe está fuerte en el meta actual.

El uso es directo: pegar un Steam ID o buscar por nombre de jugador, y la página devuelve un perfil completo con historial público de partidas, win rate por héroe, rendimiento reciente y stats acumulados de toda la vida. No requiere instalación, cliente ni overlay — solo una web app gratuita accesible desde cualquier navegador.

La versión gratis cubre todo lo que la mayoría de jugadores necesita. Dotabuff Plus (~$3.50/mes) desbloquea filtros profundos, retención de historial extendida y la plataforma TrueSight de análisis de replays que descarga automáticamente cada replay y lo desglosa movimiento por movimiento. Para la mayoría de jugadores la versión gratis alcanza; jugadores competitivos que quieren post-match deep dives pueden encontrar Plus útil.

## Qué problema resuelve

El perfil in-game de Dota 2 muestra solo historial básico de partidas con filtros limitados. Comparar performance por héroe entre parches, scoutear un oponente en champ select o encontrar héroes meta por bracket de MMR es imposible desde el cliente.

Dotabuff cubre ese gap con un perfil público por Steam ID: stats acumulados, win rate por héroe (general y reciente), historial de partidas con desgloses completos por jugador, tier lists del meta por parche y bracket de MMR, y leaderboards globales. El dataset es genuinamente enorme — Dotabuff lleva más de una década ingesteando data de partidas públicas.

## La diferencia con OpenDota y STRATZ

Las tres webs grandes de stats comparten función base pero tienen filosofías distintas:

**Dotabuff**: closed-source, UI más amigable, marca con mayor reconocimiento, oferta premium más fuerte (TrueSight). El más "pop" de los tres.

**OpenDota**: 100% open-source, la API más accesible para desarrolladores, estética "honest hacker". Menos pulido, más profundidad para quien sabe dónde mirar.

**STRATZ**: closed-source pero tier gratis generoso, UI moderna y agresiva, predicciones AI-powered y match breakdowns. El más nuevo de los tres y el que más invierte en features de producto.

Para lookup casual y interfaz familiar: Dotabuff. Para deep data dives o construir tools: OpenDota. Para visualizaciones modernas e insights AI: STRATZ. La mayoría de jugadores comprometidos bookmarkean los tres.

## Para qué la usa la gente

**Review post-partida rápida**: abrir Dotabuff, encontrar la última partida, revisar builds del equipo, item timings y damage por jugador. La forma más rápida de leer "qué pasó en esa partida".

**Scouting en champ select**: pegar el nombre de un teammate o oponente para ver su pool de héroes, win rate reciente y performance reciente. Contexto valioso de 30 segundos.

**Browsing del meta de héroes**: la pestaña "Heroes" muestra win rate, pick rate y ban rate por bracket de MMR y parche. Pulso útil del meta sin meterse en stats pro.

**Tracking de progreso personal**: ver evolución de MMR, identificar tus mejores héroes, detectar tilt streaks en gráficos de largo plazo.

**Leaderboards**: rankings regionales (Americas, Europe, SEA, China) de los top players del mundo.

## Para quién NO es esta herramienta

Dotabuff es excelente como dashboard general pero no la mejor para todo uso:

- **Construir tools o data pipelines** → la API open de OpenDota es más amigable para developers.
- **Predicciones AI-powered y UX moderna** → STRATZ invirtió más en esas features.
- **Tracking solo de alto MMR** → Dota2ProTracker es más targeted.
- **Stats de torneos profesionales** → datdota es más especializada.
- **Asistencia in-game en vivo** → Dota Coach o DotaPlus by Overwolf dan tips en tiempo real.

## Cómo se usa en la práctica

1. Ir a `dotabuff.com` y buscar por nombre de jugador o pegar URL del perfil de Steam.

2. Abrir tu perfil para ver stats acumulados, últimas 20 partidas, win rate por héroe y performance por rol.

3. Hacer click en cualquier partida para abrir vista detallada: KDA por jugador, builds finales, desglose de damage, gráficos de gold/xp y resumen de team fights.

4. Browsear la pestaña Heroes para tier list del parche actual filtrado por bracket de MMR.

5. Para TrueSight premium: activar Dotabuff Plus y la plataforma auto-parsea cada replay con data de posicionamiento, uso de vision, smoke timings y desgloses por team fight.

Para uso recurrente, seguir las cuentas de tu duo para mantener su match history visible desde tu dashboard.

## Limitaciones honestas

**Sincronización puede demorar**: una partida recién terminada puede tomar 5-30 minutos en aparecer, dependiendo de la cola de la Steam API. No es un problema de Dotabuff sino de la API de Valve — todos los terceros lo experimentan.

**Ads en el tier gratis**: como toda web de gaming stats, Dotabuff carga ads que se vuelven molestos en mobile. Plus los elimina.

**Algunos perfiles privados no se pueden trackear**: si un jugador escondió su perfil de Steam o su match history, Dotabuff no puede acceder a su data. Es comportamiento esperado, no bug.

**TrueSight premium requiere Plus**: el análisis de replays más profundo está tras paywall. OpenDota gratis ofrece data raw comparable pero en interfaz menos pulida.

**La metadata de héroes puede demorar un parche**: cuando se lanza un parche grande, descripciones de items o habilidades nuevas pueden tomar 1-2 días en poblar completamente. Los stats agregados se refrescan rápido.

## Cómo empezar

No se necesita registro para lo básico. Ir a `dotabuff.com`, buscar tu nombre de jugador y carga tu perfil. Para mejorar la experiencia:

1. Linkear la cuenta de Steam para reclamar tu perfil y desbloquear favoritos.

2. Bookmarkear la pestaña Heroes filtrada por tu bracket de MMR — útil antes de cada sesión.

3. En champ select, abrir perfiles de oponentes en paralelo (toma 30 segundos y agrega contexto).

4. Considerar Dotabuff Plus solo si vas a usar TrueSight de replays regularmente — la mayoría de jugadores no lo hace, y la versión gratis alcanza.
