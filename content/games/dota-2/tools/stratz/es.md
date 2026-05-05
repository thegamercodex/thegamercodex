---
title: "STRATZ"
description: "Plataforma moderna de estadísticas de Dota 2 con predicciones AI-powered, dashboards personalizados, forecasting de win rate e insights de mejora basados en machine learning."
quickTake: "Si Dotabuff es la institución y OpenDota es el open source, STRATZ es el producto moderno. UI pulida, insights AI y el roadmap de features más agresivo de los tres trackers grandes."
---

## Qué es

STRATZ es una plataforma de estadísticas de Dota 2 lanzada alrededor de 2017 por ex-pros y veteranos del esports, posicionada como alternativa moderna a Dotabuff y OpenDota. El diferenciador del producto es el enfoque en visualizaciones personalizadas, predicciones AI-powered de partidas y sugerencias de mejora contextual — features que se sienten construidas para los estándares de software consumer actuales, no para dashboards de 2014.

El tier gratis ofrece perfiles públicos, match history, stats por héroe y acceso a la mayoría de los análisis. STRATZ Plus (~$3.50/mes) desbloquea desgloses de partidas más detallados, experiencia sin ads y algunos filtros avanzados. Su API pública (gratis hasta cierto cupo) también está disponible, aunque menos popular que la de OpenDota entre developers.

El equipo opera como un producto de ingeniería más chico que Dotabuff pero ship features más rápido. El sitio ha tenido varios redesigns mayores de UI en años recientes e integra elementos "AI" (predicciones de win rate de partidas, sugerencias de items) más visiblemente que la competencia. También tiene app mobile para iOS y Android.

## Qué problema resuelve

Dotabuff y OpenDota muestran data, pero STRATZ intenta interpretarla. La propuesta diferenciadora es: en lugar de solo mostrar qué pasó en tu partida, STRATZ intenta decirte qué hacer al respecto. Modelos predictivos sobre win probability, sugerencias AI de qué héroes aprender basadas en tu perfil, alertas sobre patrones de juego que correlacionan con derrotas.

Para usuarios que buscan feedback, no solo data raw, STRATZ llena un gap que ni Dotabuff cerrado ni OpenDota open-pero-espartano cubren totalmente. Es un producto más interpretativo.

## La diferencia con Dotabuff y OpenDota

Los tres trackers grandes cubren la misma función base con ángulos distintos:

**Dotabuff**: líder de mercado, marca madura, tier premium fuerte (TrueSight). Default para la mayoría de jugadores casuales.

**OpenDota**: open-source, API para developers, data raw más profunda. Default para builders y fans de data verificable.

**STRATZ**: closed-source pero tier gratis con muchas features, UI moderna agresiva, insights AI, app mobile nativa. Default para usuarios que quieren UX moderna y análisis AI-driven.

Para lookup típico de partidas cualquiera de los tres funciona. Para dashboards modernos y sugerencias de "qué debo mejorar", STRATZ destaca.

## Para qué la usa la gente

**Dashboard personalizado**: la homepage de tu perfil de STRATZ prioriza data relevante para *vos*: héroes que jugaste más recientemente, héroes sugeridos para aprender basados en tu estilo, gráficos de tendencia de MMR y alertas sobre patrones de juego recurrentes.

**Predicciones AI de partidas**: al inicio de una partida (o durante una en curso), STRATZ predice probabilidad de victoria basándose en composiciones de cada equipo e historial de los jugadores participantes. Útil como lectura rápida y entretenimiento.

**Sugerencias de mejora personalizadas**: la herramienta "MMR Estimator" proyecta tu MMR potencial basado en performance individual vs performance del equipo y sugiere áreas a trabajar (visión, last-hit consistency, kill participation).

**App mobile**: la única plataforma de los tres grandes con app nativa robusta para iOS y Android. Útil para review rápida post-match desde el teléfono.

**Stats pro y esports**: la sección dedicada a Esports cubre DPC y majors con visualizaciones limpias y detail de torneos.

## Para quién NO es esta herramienta

STRATZ es excelente en ciertas dimensiones pero no es un default universal:

- **Construir tools o pipelines encima** → la API de OpenDota es más developer-oriented y menos restrictiva.
- **La marca más establecida y UI más familiar** → Dotabuff es la opción más reconocible para jugadores casuales.
- **Data open-source verificable** → OpenDota es la opción si la auditabilidad de la metodología importa.
- **Tracking solo de alto MMR** → Dota2ProTracker es más targeted.
- **Stats de torneos pro con contexto editorial profundo** → datdota provee más curación.

## Cómo se usa en la práctica

1. Ir a `stratz.com` y hacer login con Steam. El perfil se construye automáticamente con tu historia pública.

2. El dashboard personalizado muestra tus héroes más jugados, tendencias de MMR, sugerencias generadas por AI y shortcuts a las herramientas más usadas.

3. Para análisis por partida, hacer click en cualquier match: vista detallada con gráficos posicionales, builds de items, breakdowns AI de "qué pudo haber sido distinto".

4. Browsear la pestaña Heroes para tier list del parche actual filtrado por bracket de MMR y rol.

5. Para uso mobile, instalar la app iOS/Android — sincroniza tu perfil automáticamente y te notifica de partidas terminadas.

6. Para stats pro/esports, visitar la sección Esports: DPC, majors, TI, ligas regionales con dashboards específicos por torneo.

## Limitaciones honestas

**Las predicciones AI son estadísticas, no mágicas**: no apostarse la vida en ellas. Los modelos predictivos funcionan sobre patrones agregados y tienen márgenes de error naturales. Útiles como un input más, no como oráculo.

**Closed-source**: como Dotabuff, no podés auditar la metodología de cálculo. Si la transparencia importa, OpenDota es el camino.

**Tier Plus es más relevante que Dotabuff Plus**: ciertas features (filtros avanzados, breakdowns detallados) están detrás del paywall en una forma que Dotabuff Plus no tiene. El tier gratis sigue siendo generoso, pero la presión de upsell es más visible.

**Marca aún menos establecida que Dotabuff**: por inercia, muchos usuarios siguen yendo a Dotabuff por default para lookup casual. STRATZ tiene comunidad más pequeña en Reddit y foros, con menos tutoriales de terceros.

**API menos popular entre developers**: aunque existe, la API de OpenDota es el estándar de-facto para construir tools de Dota 2. STRATZ tiene ecosistema más liviano.

## Cómo empezar

1. Ir a `stratz.com` y hacer login con Steam.

2. Esperar unos minutos a que el sistema ingestee tu historia pública completa. El dashboard carga progresivamente.

3. Navegar la homepage personalizada — te va a mostrar sugerencias y tendencias específicas a tu cuenta.

4. Probar las herramientas de MMR Estimator y Hero Suggestion para sentir el diferenciador vs Dotabuff.

5. Instalar la app mobile si te beneficia tener lookup rápido sobre la marcha.

6. Considerar STRATZ Plus solo si vas a usar los filtros avanzados regularmente. El tier gratis alcanza para el caso de uso típico.

7. Si querés comparación, abrir Dotabuff y OpenDota en paralelo — los tres son complementarios.
