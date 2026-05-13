---
title: "LoLDraftAI"
description: "Asistente de draft basado en machine learning para League of Legends. Simulas un draft pick por pick y el modelo predice el win rate del lado azul/rojo en tiempo real, con sugerencias de próximo pick rankeadas. Open source, modelo retrainado cada patch."
quickTake: "La tool más interesante del nicho de draft analysis. Si te interesa entender cómo se construyen composiciones competitivas o practicar drafting con feedback predictivo, vale la prueba. Tool joven (~1 año), bus-factor 1, usar como complemento experimental — no como ground truth."
---

## Qué es

LoLDraftAI es un asistente de draft basado en machine learning, lanzado alrededor de 2024 por un proyecto independiente (sin attribution personal visible) y open-sourceado en mayo 2025. La tool simula el draft pick por pick — tú eliges picks y bans para ambos equipos — y el modelo predice el win rate del lado azul versus el rojo en tiempo real, con sugerencias de próximo pick rankeadas por delta de win rate predicho.

El modelo se reentrena cada patch (típicamente sábado después del patch del jueves), lo cual mantiene las predicciones alineadas con el meta vigente. La página suele mostrar un indicador del patch actual (ej: "Patch 16.09 · Updated May 2") en la home, señal útil de actividad.

Es free, sin tier paga visible. Open source en GitHub bajo la organización del proyecto. Discord público para discusión y feedback. No requiere login.

## Qué problema resuelve

Drafting en LoL es uno de los aspectos menos transparentes del juego competitivo. Coaches profesionales pasan horas analizando composiciones, sinergias, counters y power spikes para preparar drafts — pero esa intuición es difícil de transmitir a players de elo medio que solo tienen acceso a tier lists planas.

LoLDraftAI ataca este gap con un approach distinto a las tools existentes: en vez de mostrarte stats agregadas (estilo Lolalytics) o tier lists individuales (estilo U.GG), simula el draft completo y te dice cuál es la probabilidad de victoria del lado al que estás drafteando, basado en data agregada de partidas pasadas. Eso te permite probar hipótesis ("¿qué pasa si pickeo este champion en vez del meta?") con feedback inmediato.

Para players que practican drafting (capitanes de equipos amateur, coaches en formación, fans del esports que quieren entender por qué un pick tiene sentido), es una herramienta pedagógica única.

## Para qué la usa la gente

**Practicar drafting con feedback inmediato**: caso de uso central. Simulas un draft completo, haces cambios, y ves cómo la prediction del modelo se mueve con cada decisión.

**Evaluar picks emergentes o off-meta**: si quieres saber si un champion fuera del consenso tiene viabilidad real en un draft específico, el modelo te da una señal cuantitativa.

**Estudiar drafts de partidas competitivas reales**: replicas un draft real de un torneo (LCS, MSI, Worlds) y ves qué predice el modelo — útil para entender la lógica detrás de decisiones de coaches pros.

**Experimentar con composiciones de equipo**: prueba si tu equipo amateur funciona mejor con engage frontline o poke composition, y mira la prediction comparativa.

**Curiosidad sobre el meta**: para fans interesados en cómo se modela la complejidad de un draft con ML, la tool open source es ejemplo accesible y educativo.

## Para quién NO es esta herramienta

LoLDraftAI es interesante pero claramente experimental. No es lo que necesitas si:

- **Quieres ground truth para decisiones de alto stake** → modelo joven, bus-factor 1, predicciones son señal direccional pero no oracle. Para coaches de equipos competitivos serios, complementá con análisis humano.
- **Quieres stats agregadas de matchups individuales** → Lolalytics es la fuente para datos por matchup específico, no por draft completo.
- **Quieres tier lists o builds** → U.GG y Lolalytics cubren esa función mejor; LoLDraftAI no recomienda items ni runas.
- **Buscas herramientas establecidas con track record largo** → LoLDraftAI tiene ~1 año, otras tools del ecosistema tienen 5-10. Si estabilidad institucional es prioridad, espera a que madure.

## Cómo se usa en la práctica

1. Vas a `loldraftai.com`. Sin login.

2. Verifica el indicador de patch en la home (ej: "Patch 16.09 · Updated May 2") — confirma que el modelo está al día.

3. Inicias un nuevo draft: empiezas con la fase de bans, después picks alternados entre equipo azul y rojo siguiendo el orden estándar (1 azul, 2 rojo, 2 azul, 2 rojo, 1 azul, etc.).

4. Mientras drafteas, el panel de prediction muestra el win rate estimado del lado azul vs el rojo, actualizándose con cada pick.

5. Sugerencias de próximo pick aparecen rankeadas por delta de win rate — el champion que más sube tu win rate predicho aparece primero.

6. Al terminar el draft completo, puedes guardar la composición o compartirla via URL.

7. Para análisis profundo, lee los posts del blog (`/blog`) — contienen explainers de cómo funciona el modelo y comparativas con otras tools de drafting (DraftGap, iTero, LoLTheory).

## Limitaciones honestas

**Tool joven (~1 año)**: lanzada alrededor de 2024, open-sourceada en mayo 2025. Track record limitado vs tools con 5-10 años. Para apuestas competitivas serias, conviene tratar las predicciones como signal directional, no como oracle.

**Bus-factor 1**: el proyecto está branded como "LoLDraftAI" sin attribution personal visible. Si el maintainer único deja de mantenerlo, no hay equipo de respaldo. El open source mitiga parcialmente (otros podrían forkear), pero el riesgo existe.

**Modelo es black box parcialmente**: aunque está open source, los detalles del entrenamiento y los pesos exactos son técnicos. Para validar predicciones, requerirías reentrenar el modelo localmente o confiar en la metodología publicada.

**Sin recommendation editorial**: te dice qué pickear según el modelo pero no explica el "por qué" táctico. Para entender la lógica, necesitas complementar con análisis humano (videos de coaches, posts de Reddit, guías escritas).

**Cobertura solo competitive draft format**: el modelo está entrenado en data de partidas pro y high-elo soloqueue. Para soloqueue de elos medios (Gold-Plat) donde drafts se rompen y autofills son comunes, las predicciones son menos representativas.

## Cómo empezar

1. Vas a `loldraftai.com`. Sin registro.

2. Confirmá que el indicador de patch está al día (visible en la home). Si está atrasado por más de un patch, las predicciones pueden no reflejar el meta actual.

3. Tu primer draft de prueba: replicá un draft real reciente (LCS, MSI, Worlds — busca videos en YouTube). Compará la prediction del modelo con el resultado real de la partida. Eso te calibra qué tan confiable es el modelo en casos conocidos.

4. Para practicar drafting: simula scenarios típicos de tu rol o composición preferida. Notá qué picks suben más el win rate y cuáles lo bajan.

5. Si tienes perfil técnico (data science o ML), explora el repo de GitHub — el código abierto es buen ejemplo de aplicación de ML a domain-specific data.

6. Sumate al Discord si quieres discutir la tool con otros usuarios o reportar bugs/feedback al maintainer. Para tools jóvenes, el feedback comunitario acelera el desarrollo.
