---
title: "XIVAnalysis"
description: "Analizador automático de logs de FFLogs que detecta problemas de rotación, alineación de buffs y oGCDs olvidados, con sugerencias accionables job por job. Open source, gratis, sin login."
quickTake: "XIVAnalysis es el complemento perfecto de FFLogs para quien no quiere interpretar el log a mano: pegas el link, te dice exactamente qué hiciste mal en lenguaje humano. Ideal para mejorar sin tener que volverte theorycrafter, aunque sus sugerencias son menos profundas que las de The Balance."
---

## Qué es

XIVAnalysis (xivanalysis.com) es un analizador automático de logs de combate de FFXIV mantenido open source en GitHub (`xivanalysis/xivanalysis`). El proyecto nació en 2018 y es mantenido por una comunidad de devs que escriben módulos específicos por job — cada job lead define las reglas de qué se considera "bien jugado" en su rotación.

El flujo es trivial: pegas un link de FFLogs en xivanalysis.com, el sitio lo procesa, y devuelve un reporte por jugador con:

- **Suggestions**: cosas concretas que hiciste mal o pudiste optimizar.
- **Errors**: violaciones flagrantes de la rotación (cooldown drift, oGCDs sin usar, buffs perdidos).
- **Timeline**: visualización del fight con tus acciones, buffs party, y mecánicas.

Es **gratis y sin login**. Open source en GitHub, licencia AGPL-3.0.

## Qué problema resuelve

FFLogs te muestra **qué pasó** (DPS, percentile, casts). XIVAnalysis te dice **por qué** y **cómo mejorarlo**.

Después de un pull mediocre, FFLogs te dice "estás en p45". XIVAnalysis te dice "perdiste 3 GCDs de buff window en Embolden, no usaste Manafication antes del raid buff window, tu Verflare/Verholy procs estaban desalineados". El primero es un diagnóstico; el segundo es un tratamiento.

Para jugadores que recién empiezan a optimizar, esto baja la barrera de entrada masivamente. No tienes que leer 40 páginas de The Balance para entender qué hiciste mal — XIVAnalysis te lo dice directo.

## Diferenciación vs FFLogs y ACT

- **FFLogs**: el repositorio público con rankings y datos crudos. Es el archivo.
- **XIVAnalysis**: el intérprete automático que toma esos datos y los traduce a feedback accionable.
- **ACT**: el capturer en tiempo real durante el combate.

XIVAnalysis no reemplaza FFLogs — depende de él. Pero para análisis post-pull es más útil para mejorar que mirar el FFLogs raw.

## Para qué la usa la gente

**Self-review post-Savage**: Terminas un pull, lo subes a FFLogs vía ACT, pegas el link en XIVAnalysis, lees las 5 suggestions, las internalizas para el siguiente pull.

**Coaching asincrónico**: el mentor te manda el link de XIVAnalysis de tu log y te dice "fíjate las suggestions de los slots 2 y 4". Más eficiente que interpretar manualmente.

**Validar rotación nueva**: Pruebas una rotación variante para tu job. XIVAnalysis te dice si rompiste las reglas básicas o si efectivamente funcionó.

**Auditar party members**: en static, el raid leader corre los logs de todos por XIVAnalysis y identifica patrones (ej: el SMN consistentemente pierde su 2-minute window).

## Para quién NO es esta herramienta

- **Theorycrafters serios**: las sugerencias de XIVAnalysis son útiles pero **no exhaustivas**. Para casos edge, alineaciones de party con buffs únicos, optimización fina — necesitas The Balance.
- **Jugadores de jobs poco mantenidos**: algunos jobs tienen mejor módulo XIVAnalysis que otros. Si tu job no tiene maintainer activo, las suggestions pueden estar atrasadas vs el patch actual.
- **Healers que buscan análisis profundo de mitigation**: el módulo de healing en XIVAnalysis es más simple que el de DPS. Para healer optimization detallada, conviene The Balance.
- **Quien quiere análisis manual y aprender**: si quieres entender vos mismo qué pasó (vs que un bot te lo diga), prefiere FFLogs raw + The Balance docs.

## Cómo se usa en la práctica

1. Subí tu log a FFLogs (con ACT, post-pull).

2. Copiá el link de tu fight específico (no del report completo).

3. Pégalo en xivanalysis.com. El sitio procesa unos segundos.

4. Resultado: lista de jugadores. Haces click tu nombre.

5. Revisas las pestañas: **Suggestions** (sugerencias por priority), **About** (overview del job), **Timeline** (visualización), y módulos específicos del job (ej: "Mages" para BLM, "Sword Oath" para PLD).

6. Cada suggestion tiene severity (info / warning / major). Priorizá las major y warning primero.

7. Releé las suggestions y vete al próximo pull con esos puntos en mente.

## Limitaciones honestas

**Cobertura de jobs desigual**: jobs populares (BLM, SAM, DRG, MCH) tienen módulos muy detallados; jobs poco jugados (PLD, GNB, AST en healer comp) tienen menos cobertura. El módulo de tu job puede estar 1-2 patches detrás del meta.

**Sugerencias generalistas, no contextuales**: XIVAnalysis no entiende contexto de fight ("perdiste DPS porque el boss saltó a la otra plataforma"). Te marca "perdiste GCD" sin saber si fue forzado o voluntario.

**No detecta everything**: errores sutiles (alinear tu burst con el wrong party buff window, posicionamiento subóptimo en AoE) no aparecen. XIVAnalysis cubre el ~70% de los errores comunes, no el 100%.

**Depende de FFLogs**: si tu log no está en FFLogs, no puedes usar XIVAnalysis. Y eso requiere ACT, que es Windows-only.

**Updates dependientes de contributors**: cuando sale un job rework grande, el módulo de XIVAnalysis puede tardar semanas en actualizarse. Mientras tanto, las suggestions pueden estar fuera de fecha.

## Cómo empezar

1. Subí un log de un encuentro reciente a FFLogs vía ACT.

2. Copiá el link directo al fight (URL termina en algo tipo `/reports/abc123#fight=5&type=damage-done`).

3. Pégalo en xivanalysis.com y dale Enter.

4. Espera unos segundos. El sitio procesa el log local en tu browser (no hace upload, todo client-side).

5. Haz click tu nombre en la lista. Anda a la pestaña **Suggestions** primero.

6. Implementá las 2-3 sugerencias más altas en tu siguiente pull. No intentes arreglar todo de una.

7. Si quieres contribuir o reportar bug, el repo en GitHub está activo y acepta PRs (especialmente en módulos de jobs no muy cubiertos).
