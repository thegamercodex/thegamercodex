---
title: "Leetify"
description: "Plataforma de coaching con IA para CS2 que parsea demos automáticamente y entrega feedback estructurado sobre aim, utility, positioning y trade efficiency."
quickTake: "El más cercano a un coach personal asíncrono que existe para CS2. Si quieres feedback accionable sin tener que pagar a un coach humano, este es el camino — pero la tier paga es donde está el valor real."
---

## Qué es

Leetify es una plataforma de análisis de performance para CS2 que combina automated demo parsing con AI scoring para entregar feedback estructurado. Subes tus demos (o las trae automáticamente vía Faceit/Matchmaking integration) y devuelve scores en categorías clave: aim, utility usage, positioning, opening duels, trade efficiency.

Levantó funding significativo en 2021-2022 enfocado en su pitch de "AI coaching", y desde entonces se posicionó como alternativa al coaching humano para players intermedios y avanzados que no pueden pagar sesiones uno-a-uno.

Tiene dos modos principales: el análisis post-match (qué pasó en una partida específica) y el dashboard agregado (cómo evoluciona tu performance en el tiempo, comparada contra el rank inmediatamente superior al tuyo).

El modelo es freemium agresivo: la versión free muestra stats básicos y top-line scores. La versión Pro (~$10 USD/mes en 2025) desbloquea drill-downs, comparativas avanzadas y análisis ilimitado de demos.

## Qué problema resuelve

Mejorar en CS2 a partir de un punto requiere identificar errores específicos y patterns. Pero ver tus propios demos es tedioso, sesgado (no notas errores que no entiendes que son errores), y caro (un coach humano cuesta $30-100 USD/hora).

Leetify automatiza esa primera capa: parsea la demo, identifica métricas estándar (KDA por sí solo dice poco), las contextualiza contra benchmarks de tu rango y del rango superior, y señala áreas concretas donde estás bajo el promedio. Eso funciona como un primer pase de coaching que cualquiera puede usar.

Para el caso "soy MG2, quiero llegar a DMG, no sé qué arreglar primero", Leetify te dice si tu déficit principal es aim consistency, utility damage, o trade timing — algo que sin parser dedicado tomaría horas de revisar demos.

## Para qué la usa la gente

**Identificar weak areas**: el dashboard muestra tu score por categoría y tu delta vs rank superior. Si tu utility usage es notablemente bajo, sabes dónde invertir tiempo de práctica.

**Post-match review estructurado**: después de una partida, ver qué duelos perdiste, en qué situaciones, con qué arma — sin tener que abrir el demo en el cliente.

**Tracking de progreso a largo plazo**: gráficos históricos por mes/temporada de cómo evolucionan tus scores. Útil para confirmar si práctica deliberada está funcionando.

**Comparar con teammates**: sumas a tu duo o equipo y ves head-to-head en categorías. Útil para conversaciones honestas tipo "tú mueres en early round mucho más que yo".

**Aim trainer feedback** (Pro): integración con scenarios específicos para detectar si tu reaction time o spray control están limitando tu rank.

## Para quién NO es esta herramienta

Leetify es excelente para análisis individual estructurado pero no es:

- **Un wallhack o tool de cheating** — solo procesa demos públicas y replays.
- **Análisis de utility lineups** → para eso, scope.gg tiene el demo viewer 2D específico.
- **Stats de matchmaking simple** → si solo quieres KDA + win rate, CS Stats es más liviano y free.
- **Coaching profesional** → ningún parser AI reemplaza un coach humano que entiende narrativa de macro round-a-round y dinámicas de equipo. Es complemento, no reemplazo.
- **Free indefinidamente** → la tier free se siente intencionalmente limitada. Si vas a usar Leetify seriamente, presupuestá la suscripción.

## Cómo se usa en la práctica

1. Vas a `leetify.com` y registras cuenta (Steam OAuth o email).

2. Conectas Faceit (si juegas ahí) — tus demos se importan automáticamente. Para Matchmaking de Valve, puedes subir demos manualmente o instalar el desktop client (Windows) que las detecta.

3. Después de algunos matches procesados, el dashboard se llena con scores y benchmarks. Los primeros días son los más interesantes: ves de golpe dónde estás débil.

4. Para análisis específico de una partida, click en la match → aparece breakdown por round, lista de duelos, mapa de heat con kills/deaths, y highlights de momentos clave.

5. Si activas Pro, puedes cruzar dimensiones (mapa específico × arma × situación táctica) — esto es donde la tool entrega valor real.

## Limitaciones honestas

**Paywall agresivo**: la tier free es muy limitada deliberadamente. Para aprovechar Leetify de verdad hay que pagar Pro. Esto no es problema per se pero conviene saberlo antes de invertir tiempo configurando.

**AI scores son orientativos, no verdad absoluta**: los algoritmos miran métricas cuantificables (timing, accuracy, utility damage) pero no entienden context táctico complejo (ej: morirías 1v1 a propósito para que tu compañero gane info). Toma los scores como pulse, no como veredicto.

**Demos de Premier/MM tienen menos cobertura que Faceit**: el parser funciona mejor con demos de Faceit (formato más limpio, metadata más rica). Si juegas solo Premier o MM, la experiencia es más limitada.

**No hay versión mobile-first**: la web responde en mobile pero el flujo está pensado para desktop. Para review serio necesitas monitor.

**Privacy de demos**: Leetify procesa tus demos en sus servidores. Si te molesta entregar tu data competitiva a un tercero, esto es bloqueante. Sus términos son razonables pero existen.

## Cómo empezar

1. Crear cuenta en `leetify.com` con Steam OAuth.

2. Conectar Faceit si tienes cuenta — esto es lo que más rápido llena tu dashboard.

3. Para matches de Valve Premier/MM, instalar el cliente desktop (Windows) que detecta demos automáticamente. Alternativa: subir manualmente desde tu carpeta `replays`.

4. Esperar 5-10 matches procesados antes de leer scores con seriedad — los promedios son más confiables con muestras grandes.

5. Si después de 2-3 semanas sientes que el feedback es accionable, considerar la tier Pro. Si no, las alternativas más livianas (CS Stats, scope.gg) probablemente cubren lo que necesitas.
