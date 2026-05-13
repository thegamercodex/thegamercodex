---
title: "OpenDota"
description: "Plataforma de estadísticas de Dota 2 totalmente open-source con parsing profundo de replays, la API pública más accesible del ecosistema y una comunidad activa de contribuidores."
quickTake: "Si Dotabuff es el producto consumer pulido, OpenDota es la opción del ingeniero. Open-source, data raw más profunda y la API que todo proyecto Dota 2 termina integrando."
---

## Qué es

OpenDota es una plataforma de estadísticas de Dota 2 lanzada en 2014 como alternativa 100% open-source a los trackers cerrados. El codebase, la pipeline de ingest de datos y la API backend son públicos en GitHub bajo licencia MIT. Cualquiera puede correr su propia instancia, contribuir features o construir tools derivadas sobre la API pública.

La web en sí ofrece lo que otros trackers ofrecen: perfiles de jugador, match history, stats por héroe, win rates y leaderboards. Pero el diferenciador está debajo — el replay parser (YASP, luego Manta) extrae data inusualmente detallada por partida: usos de habilidad, posicionamiento de wards, smoke timings, asignaciones de lane, runas recogidas y data posicional completa cuando los replays se parsean en detalle.

El proyecto se sostiene por contribuciones comunitarias y un modelo "Plus" (~$3/mes) que financia infraestructura pero no paywallea la data core. La API es gratis para uso no-comercial hasta 50,000 llamadas/mes, paga arriba de eso. Decenas de tools de Dota 2 — incluyendo algunas con marca propia — usan fundamentalmente la API de OpenDota o su replay parser open-source.

## Qué problema resuelve

Dotabuff y STRATZ son excelentes productos pero son cajas cerradas: solo puedes ver lo que ellos eligen mostrarte, y no puedes construir encima. Para desarrolladores, jugadores avanzados y la comunidad Dota 2 en su conjunto, esto es una limitación significativa.

OpenDota resuelve eso de dos formas: primero, exponiendo la misma data raw y queryable vía API, permitiendo que cualquiera construya sus propias tools o análisis. Segundo, siendo transparente sobre la metodología de parsing — si un stat parece mal, puedes auditar cómo se calcula.

Para un usuario final también tiene usos únicos: consultar "Explorer" con SQL custom sobre la base de datos pública de partidas es la forma más poderosa de responder preguntas como "cuál es la tasa promedio de buyback de héroes que ganan partidas arriba de 4K MMR" o "cuál es el win rate de Templar Assassin en Dota 2 con vs sin Desolator en este parche".

## La diferencia con Dotabuff

Ambos hacen fundamentalmente lo mismo — tracking de stats de Dota 2 — pero con audiencias muy distintas:

**Dotabuff**: closed-source, UI pulida, tier premium fuerte (TrueSight), reconocimiento de marca más amplio. El default para la mayoría de jugadores casuales.

**OpenDota**: open-source, UI más directa, data raw más profunda, API pública para developers, sin paywall agresivo. El default para usuarios avanzados, builders y cualquiera que quiera data verificable.

Para lookup típico de match history cualquiera funciona. Para análisis profundos, queries custom o construir cosas, OpenDota gana.

## Para qué la usa la gente

**Análisis detallado de partidas**: cada partida tiene parsed-replay data con timings, posiciones y granularidad inigualadas por competidores. Excelente para deep dives honestos post-match.

**SQL Explorer**: la página Explorer pública permite correr SQL custom sobre la base de datos de partidas. Las queries ejemplo responden preguntas reales del meta ("Top 50 héroes por win rate en 5K+ MMR últimos 30 días") y puedes escribir las tuyas.

**API pública para tools**: decenas de tools Dota 2, overlays de Twitch y bots de Discord usan la API de OpenDota como data backend. Si vas a construir algo relacionado a Dota 2, esta es la API a aprender.

**Análisis del meta a nivel de parche**: las tablas de meta de héroes se actualizan por bracket de MMR y parche, con filtros estándar por rango de tiempo y skill level.

**Lookup de perfil público**: como Dotabuff, solo que con UI más densa y mejores filtros para usuarios técnicos.

## Para quién NO es esta herramienta

La fortaleza de OpenDota (raw, completa, open) es también su limitación. Algunos perfiles de usuario están mejor servidos en otro lado:

- **Jugadores casuales que quieren lookup visual rápido** → Dotabuff es más amigable y rápido de leer.
- **Coaching AI-driven con insights ML** → STRATZ invirtió específicamente en eso.
- **Experiencia mobile pulida** → Dotabuff y STRATZ tienen mejor UX mobile.
- **Stats pro competitivas con contexto editorial** → datdota y Liquipedia proveen más curación.
- **Tips in-game en vivo** → para eso necesitas un overlay (Dota Coach, DotaPlus).

## Cómo se usa en la práctica

1. Ir a `opendota.com` y buscar por nombre de jugador o pegar Steam ID.

2. El perfil muestra stats por héroe, partidas recientes y stats acumulados. Hacer click en cualquier partida para ver data parseada en detalle.

3. Para investigación profunda, navegar a `opendota.com/explorer` — el SQL Explorer con la base de datos pública de partidas. El dropdown sugiere queries ejemplo que funcionan como templates listos.

4. Para construir algo encima: leer la documentación de la API en `docs.opendota.com`. El tier gratis (50K calls/mes) alcanza para proyectos personales y tools chicas.

5. Para parsing de replays: subir un replay manualmente o esperar que el sistema auto-parsee una partida. El parsing detallado requiere más tiempo/recursos, así que no todas las partidas se parsean automáticamente — puedes solicitar partidas específicas vía Plus.

## Limitaciones honestas

**UI menos pulida que Dotabuff o STRATZ**: la experiencia es funcional y densa, con menos atención al onboarding visual. Usuarios nuevos pueden necesitar unos minutos para orientarse.

**El parsing de replays no es automático para todas las partidas**: por costo computacional, OpenDota parsea solo algunas partidas en detalle por default. Plus garantiza parsing para tus partidas; si no, puedes solicitar manualmente.

**Rate limits de la API**: el tier gratis es generoso (50K calls/mes) pero si construyes una tool con tráfico, vas a necesitar plan pago o tu propia instancia.

**Sustentabilidad del proyecto depende de la comunidad**: como proyecto open-source, la continuidad de OpenDota depende de contribuciones voluntarias y donaciones. Hubo períodos históricos de updates lentos. Actualmente activo.

**UI mobile detrás de los competidores**: el diseño responsive funciona pero no está afinado para uso one-handed mobile como sí está Dotabuff.

## Cómo empezar

Para uso pasivo, no se necesita registro: `opendota.com`, buscar tu nombre de jugador, navegar la data. Para sacarle más:

1. Hacer login con Steam para reclamar tu perfil y desbloquear favoritos de partidas.

2. Probar el SQL Explorer en `opendota.com/explorer`. Empezar con las queries ejemplo del dropdown — te enseñan qué data está disponible.

3. Si tienes perfil developer, leer la documentación de la API y aplicar a una API key. Las primeras 50K calls/mes son gratis.

4. Considerar OpenDota Plus solo si genuinamente usas la plataforma a diario y quieres apoyar el proyecto — no hay paywall funcional core.

5. Para comparación o fact-checking contra otro tracker, abrir Dotabuff o STRATZ en paralelo — los tres son complementarios, no redundantes.
