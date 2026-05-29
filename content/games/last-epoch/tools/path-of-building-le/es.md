---
title: "Path of Building for Last Epoch"
description: "Fork open-source de Path of Building adaptado a Last Epoch por Musholic. Provee simulación de DPS más profunda que los planners web, soporte offline completo y versión web sin instalación en lastepochplanner.com. La opción canónica para theorycrafting serio en LE."
quickTake: "Si necesitas saber el DPS exacto de tu build, esta es la única opción honesta en LE. Los planners web son visuales y rápidos para inspección, pero PoB calcula con simulación real: shock stacks, ailments, multipliers, todo. Para theorycrafters; overkill para casuals."
---

## Qué es

Path of Building for Last Epoch (PoB-LE) es un fork open-source del Path of Building original de PoE 1, adaptado por la community a las mecánicas de Last Epoch. Lo mantiene **Musholic** en GitHub con commits regulares (último Apr 2026). Tiene dos formas de uso:

- **Desktop**: Descargas el binario de GitHub, lo corres offline en Windows/Mac/Linux.
- **Web**: [lastepochplanner.com](https://lastepochplanner.com/) corre la misma lógica en browser sin install.

Ambas versiones leen las mismas mecánicas y producen los mismos números. La diferencia es solo workflow: el desktop es más responsive para iteraciones rápidas; la web es más cómoda para sharear builds via URL.

Es **free** y **MIT-licensed**. Acepta contribuciones via PR en GitHub.

## Qué problema resuelve

Los planners web (Last Epoch Tools, Maxroll, ArreatSummit) son buenos para **visualizar** tu build y mostrar stats finales, pero hacen aproximaciones en cálculos complejos:
- Ailments stacking (ignite, shock, bleed)
- DOT multipliers
- Conditional damage (vs full life, while channeling, on crit)
- Defense layers calculados con el order correcto de mitigaciones

PoB-LE simula esto con la precision del original de PoE. Si tu build depende de mecánicas como "Stacking Shock para DPS amplification", el web planner te da un número aproximado; PoB-LE te dice el real.

Para crafters y theorycrafters, esta diferencia matters — la diferencia entre tier 6 y tier 7 en un affix critical puede ser 30% DPS, y solo PoB la calcula bien.

## Diferenciación vs Last Epoch Tools planner

- **PoB-LE**: profundidad de simulación. Cálculos de DPS exactos, comparación de items lado a lado, support de mecánicas obscure. Curva de aprendizaje empinada (UI heredada de PoE PoB).
- **Last Epoch Tools planner**: visualización rápida y community sharing. Stats finales accurate-enough para 90% de casos. UI más amigable.

Theorycrafters serios usan los dos: LE Tools para iterar visual, PoB-LE para validar números antes de decidir gastar gold en crafting.

## Para qué la usa la gente

**Compare 2 items lado a lado**: en PoB-LE puedes equipar item A, ver DPS, swap por item B y ver delta exacto. Critical para decidir entre uniques alternativas o entre tiers de affixes.

**Optimizar crafting target**: antes de gastar runes/glyphs en un item base, simulas el resultado en PoB con los affixes target y ves si llega al breakpoint que necesitas.

**Theorycraft fuera del juego**: armas builds completos sin estar in-game, exportas el resultado para usarlo después.

**Verificar claims de creators**: cuando un YouTuber dice "este build hace 50M DPS", lo importas a PoB y verificas en tu copia local que los números cuadran.

**Plan blessings con depth**: el planner permite simular qué blessings priorizar viendo impacto exacto en stats finales — más útil que la heuristic "el max-tier siempre".

## Para quién NO es esta herramienta

- **Newcomers a LE**: la UI hereda complejidad de PoB PoE. Si nunca usaste el original, hay curva de aprendizaje real. Empieza con LE Tools.
- **Quienes solo quieren copiar un build**: si solo necesitas leer Maxroll y replicar, PoB es overkill. Para implementar builds publicados, los planners web son suficiente.
- **Mobile-first**: el desktop no corre en mobile y la web es difícil de usar en touch.
- **Hispanohablantes que necesitan UI traducida**: PoB es inglés solamente, sin localización.

## Cómo se usa en la práctica

1. **Versión web (sin install)**: anda a [lastepochplanner.com](https://lastepochplanner.com/) → empezas a armar el build directamente en browser.

2. **Versión desktop**: bajas el ZIP desde [github.com/Musholic/PathOfBuildingForLastEpoch/releases](https://github.com/Musholic/PathOfBuildingForLastEpoch/releases) → extraes → corres el `.exe` (Windows) o el binario equivalente.

3. **Nuevo build**: Eliges clase y mastery → asignas pasivas en el árbol → defines skills activas con sus pasivas → equipas items con affixes específicos.

4. **Para comparar builds**: Importas dos builds en pestañas separadas; PoB muestra delta de stats al cambiar entre ellos.

5. **Para sharear**: en web, copias URL del build; en desktop, exportas a "build code" que pegas en Discord/Reddit y otro user importa.

6. **Para verificar build ajeno**: Copias build code de un creator → importas → corres simulación → comparas con el DPS que el creator claim.

## Limitaciones honestas

**Curva de aprendizaje empinada**: la UI no está optimizada para LE de cero — hereda layout de PoB PoE que asume familiaridad. Newcomers necesitan tutorial.

**No simula todo el endgame**: algunas mecánicas muy específicas de LE (corruption stacking exacto, blessing rolls dinámicos) están approximated. La precision es alta pero no perfect.

**Updates dependen del community fork**: cuando sale balance change, Musholic y contributors actualizan el fork. Hay lag de 1-2 semanas vs patch día 1.

**No tiene DB integrada como LE Tools**: para buscar item info, complementar con Last Epoch Tools o lastepoch.tunklab.com.

**Sin sistema de cloud save oficial**: en desktop, tus builds viven en tu disco. Backup manual recomendado.

**Versión web ocasionalmente lenta**: la simulación corre en JS browser, builds muy complejos pueden tomar 2-3 segundos por recalc.

## Cómo empezar

1. **Decisión web vs desktop**: si quieres compartir builds via URL fácil, web. Si quieres performance máximo y offline, desktop.

2. **Web**: [lastepochplanner.com](https://lastepochplanner.com/) → click **New build** → eliges clase → ya estás en el planner.

3. **Desktop**: clona el repo o baja release zip de [github.com/Musholic/PathOfBuildingForLastEpoch](https://github.com/Musholic/PathOfBuildingForLastEpoch) → README explica install.

4. **Tutorial recomendado**: el repo tiene tutorial básico en su README. Para uso advanced, hay videos de community en YouTube buscando "Path of Building Last Epoch tutorial".

5. **Empezar con build conocido**: importa build code de un creator de Maxroll → estudia cómo está estructurado → modifica desde ahí. Aprendes más rápido que arrancando from scratch.

6. **Para reportar bugs**: el repo en GitHub acepta issues. Musholic responde frecuentemente.

7. **Para contribuir**: PRs welcome. El proyecto está en Lua + scripting menor; familiarity con PoB original ayuda mucho.
