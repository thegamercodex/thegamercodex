---
title: "datdota"
description: "Plataforma de estadísticas especializada en Dota 2 profesional: queries personalizables sobre data de torneos, análisis de drafts, performance por héroe por parche y por contexto competitivo."
quickTake: "La tool del analista. Si solo sigues pubs, es overkill. Si sigues la scene profesional con seriedad o quieres entender tendencias de draft entre parches, datdota tiene data que no se consigue en otro lado."
---

## Qué es

datdota es una web de estadísticas de Dota 2 especializada exclusivamente en partidas profesionales. La creó Ben "Noxville" Steenhuisen, un estadístico conocido dentro del esports de Dota 2 que ha trabajado con equipos pro y broadcasters como analista de data. Activa desde 2014, datdota se convirtió en referencia para analistas, casters y entusiastas de la scene competitiva que quieren data seria sobre cómo evoluciona el meta a nivel más alto.

A diferencia de Dotabuff, OpenDota o STRATZ — que mezclan partidas públicas con pro games — datdota solo ingestea partidas profesionales: torneos DPC, majors, ligas regionales y eventos selectos de terceros. Eso significa que la data es mucho más curada y menos ruidosa: exactamente las partidas que vale la pena analizar para entender el meta pro.

La tool es totalmente gratis y el enfoque está en queries customizables: combinaciones de filtros por héroe, parche, torneo, región, equipo, jugador e item para extraer cruces específicos de data. No hay UI fancy ni app mobile — datdota es una tool para usuarios que saben qué buscan y quieren máxima flexibilidad de data.

## Qué problema resuelve

Las stats pro de Dota 2 importan para analistas, creadores de contenido y entusiastas serios de la scene. Pero sacarlas de trackers genéricos es doloroso: Dotabuff y STRATZ mezclan todas las partidas y requieren mucho filtro para aislar contexto profesional. Liquipedia es excelente para resultados de torneos y contexto histórico pero no permite queries custom sobre la data.

datdota es la opción que combina: dataset profesional limpio, capacidad de filtrar por múltiples dimensiones específicas y visualización de tendencias históricas. La página "Statistics" contiene cientos de queries pre-construidas (win rate por héroe por parche en pro games, drafts más pickeados en TI, jugadores con mayor GPM), y la sección "Custom Queries" permite armar las propias.

## Para qué la usa la gente

**Tracking del meta pro en un parche específico**: filtrar "win rate por héroe en parche 7.42 en torneos DPC". Útil antes de cada major para saber qué héroes son reales en el contexto de torneo vs solo populares en pubs.

**Análisis de drafts por torneo específico**: qué héroes fueron baneados o pickeados primero en cada partida de un torneo, con agregados globales de torneo. Perfecto para creadores de contenido o análisis de fantasy league.

**Comparativas históricas por jugador y equipo**: win rate, hero pool, GPM promedio y KDA de cualquier jugador pro a lo largo de su carrera entera, filtrado por parche o equipo.

**Análisis de efectos de parche**: cuándo un héroe recibe un cambio mayor (rework, nerf grande, Aghanim nuevo), cómo evolucionó su pick rate pro en las semanas siguientes. datdota es de las pocas fuentes para eso.

**Material de cast y analista pre-game**: la profundidad de queries pre-construidas la vuelve útil para casters preparando torneos y analistas haciendo prep para broadcasts.

## Para quién NO es esta herramienta

datdota es hiper-especializada. Muchos usuarios están mejor servidos en otro lado:

- **Jugadores casuales que solo siguen su propio MMR** → Dotabuff o STRATZ son lo correcto.
- **Análisis de meta de partidas públicas (4K-7K MMR)** → Dota2ProTracker es más apropiado.
- **Resultados de torneos y historia de equipos/jugadores** → Liquipedia provee más contexto editorial.
- **UI amigable y sugerencias de "qué debo mejorar"** → STRATZ es más user-facing.
- **Análisis de replays en tiempo real de pubs** → el parser de OpenDota es más directo.

## Cómo se usa en la práctica

1. Ir a `datdota.com`. El home muestra torneos recientes y shortcuts a queries populares.

2. Navegar la pestaña "Statistics" para queries pre-construidas: Heroes, Players, Teams, Tournaments, Items, etc. Cada una muestra data agregada filtrada por contexto de torneo.

3. Usar los filtros en la parte superior de cada tabla para acotar por parche, tier de torneo, región, equipo y rango de tiempo.

4. Para queries específicas no pre-construidas, navegar a "Custom Queries" — combinar múltiples dimensiones y parámetros.

5. La tool "Drafts" ofrece visualización de patrones de pick/ban por torneo y equipo, útil para entender preferencias estratégicas.

6. La mayoría de tablas se exportan a CSV para análisis en Excel/Google Sheets si quieres construir tus propias visualizaciones.

## Limitaciones honestas

**UI espartana**: datdota es funcional, densa y no está visualmente pulida. Usuarios nuevos a tools de data pueden necesitar unos minutos para orientarse.

**No cubre partidas públicas**: si quieres stats de pubs de tu bracket, datdota no las tiene. Es feature, no bug — pero es limitación real si querías data de pubs.

**No app mobile**: web only y el diseño responsive funciona pero no está afinado para mobile.

**La cobertura de torneos prioriza tier 1**: datdota cubre DPC, majors y eventos grandes de terceros. Torneos regionales más chicos pueden tener cobertura parcial o nula.

**Patch lag posible**: cuando se lanza un parche grande, puede tomar unas semanas en acumular suficientes pro games para que las stats sean significativas.

## Cómo empezar

No se necesita registro. Ir a `datdota.com` y empezar a explorar.

1. La primera pantalla útil es "Statistics → Heroes" — top actual del meta pro filtrado por parche reciente.

2. Desde ahí, hacer click en cualquier héroe para ver su breakdown completo: win rate por parche, por equipo, quiénes lo juegan más, etc.

3. Para entender un torneo actual, navegar a "Tournaments" y seleccionar el torneo. El dashboard muestra data completa: drafts, stats por equipo, top performers.

4. Para análisis custom, aprender la tool de Custom Queries — hay curva, pero para usuarios que saben SQL básico es intuitiva en un par de sesiones.

5. Combinar con Liquipedia para contexto editorial (resultados, brackets, narrativas) y tienes el toolkit pro de Dota 2 más completo.
