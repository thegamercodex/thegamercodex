---
title: "Diablo 4 Companion"
description: "Loot filter open-source para D4: defines affixes deseados, la app destaca on-screen los items que matchean — automatiza evaluación de drops que manualmente requiere mouse-over por item."
quickTake: "El loot filter que D4 nunca tuvo. Defines qué affixes quieres en tu build, juegas normal, y items con esos affixes se destacan visualmente. Ahorra horas evaluando drops en Helltides y dungeons. Open source en GitHub."
---

## Qué es

Diablo 4 Companion (github.com/josdemmers/Diablo4Companion) es una aplicación desktop open-source desarrollada por **josdemmers** que actúa como loot filter visual para D4. La app corre en background mientras juegas y, mediante OCR + image recognition, identifica items con affixes que matchean tus criteria definidos y los highlights visualmente.

Funcionalidades:
- **Filter por affix**: defines listas de affixes "wanted" per class/build.
- **Visual highlighting**: items matching tus filters se destacan on-screen.
- **Build presets**: Importas filters de comunidad (presets de top builds).
- **Multi-build**: Cambias entre filter presets según character actual.
- **Open source**: código auditable, contributors community.

## Qué problema resuelve

D4 in-game tiene loot filter básico (rarity-based) pero no por affix. Para players que farmean ancestrals/mythics con affixes specific para sus builds, evaluating cada drop manualmente (open inventory, hover, read 4 affixes, compare with current gear) toma 5-10 segundos per item. En una hora de Helltide farm dropean 50+ items, fácil 1+ hora perdida solo en evaluation.

Diablo 4 Companion automatiza eso. Solo los items que matchean tus criteria destacan. El resto los ignoras visually.

## Diferenciación vs D4Builds Overlay / Mobalytics Overlay

- **D4Builds/Mobalytics Overlays**: companions desktop que muestran builds y guides en overlay. NO hacen filtering automatic.
- **Diablo 4 Companion**: filter visual basado en affix matching. Diferente categoría functional.

Los overlays show info. Companion filters loot. Complementarios, no competidores.

## Para qué la usa la gente

**Helltide farming**: 50-100 drops per hour. Companion identifies los 5-10 que matchean.

**Targeted gear hunting**: Buscas specific affix para build optimization. Companion alerts cuando dropea.

**Multi-character economy**: con varios chars activos, switchear filter preset según char.

**Sharing presets**: top builds comparten Companion configs en Discord.

**Quality of life passive**: una vez setup, runs in background sin interaction.

## Para quién NO es esta herramienta

- **Casuales sin specific gear targeting**: si juegas casual y todo drop es OK, no aporta.
- **Quien evita third-party software**: técnicamente unaffiliated con Blizzard. Riesgo TOS gray area (nadie ha sido baneado por uso normal, pero el plugin technically infringe TOS).
- **Mac / Linux users**: Windows native only.
- **Console players**: PC-exclusive.

## Cómo se usa en la práctica

1. Descarga la app desde GitHub releases o source build.

2. Configura filters per character: affixes wanted, weights, threshold.

3. Lanza D4 con la Companion running en background.

4. Items matching destacan visually on-screen.

5. Para community presets, navega releases del repo o community channels.

## Limitaciones honestas

**TOS gray area**: Blizzard no aprueba third-party. En practice nadie ha sido baneado pero technical risk existe.

**Windows only**: macOS/Linux no soportado.

**OCR fragility**: depende de UI scaling y in-game text rendering. Post-patches puede romperse hasta que la community actualice.

**Setup overhead**: configurar filters per build requiere time investment inicial.

**No replace de manual inspection**: el filter highlights candidates. Validation final manual sigue siendo recommended para drops importantes.

**Community plugin sostenibility**: depende de open-source maintainer activity.

## Cómo empezar

1. Descarga desde [github.com/josdemmers/Diablo4Companion releases](https://github.com/josdemmers/Diablo4Companion/releases).

2. Lee setup guide del README — incluye configuración de game UI scaling.

3. Para tu primer build: importa un preset community del Discord o crea simple filter (ej: "+max life", "+all stats", "+armor"`).

4. Run D4 + Companion. Verifica que items wanted highlightea correctamente.

5. Ajusta threshold según tus standards.

6. Compartí presets con tu group si sirves a community.
