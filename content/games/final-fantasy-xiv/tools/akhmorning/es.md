---
title: "Akhmorning"
description: "Sitio de theorycraft profundo para FFXIV con fórmulas de damage, stat tiers, breakpoints de speed y math derivada por contributors anonymous. Referencia académica del optimization community."
quickTake: "Akhmorning es donde vive el math de FFXIV. Si quieres entender por qué SkS X tier vs Y tier hace exactamente este DPS, las fórmulas detalladas están acá. The Balance usa este content como base; los contributors de Akhmorning son los theorycrafters serios del community."
---

## Qué es

Akhmorning (akhmorning.com) es un sitio de theorycraft de FFXIV mantenido por contributors anónimos (algunos identificados, otros no). Existe desde Heavensward (~2015) y se ha mantenido patch tras patch como referencia técnica.

Cubre:

- **Fórmulas de damage**: cómo calcular DPS por job. Skill Speed → GCD → DPS relationship explicada con math.
- **Stat tiers**: cuál es el next breakpoint de Crit/DH/Det para cada stat, con cálculos exactos.
- **Speed breakpoints**: qué SkS o SpS te da el GCD que quieres (2.40, 2.50, 2.45, etc.).
- **Job-specific docs**: páginas dedicadas con math específica de cada job (BLM rotation analysis, SMN burst windows, etc.).
- **Substat priority**: derivado de sims o análisis matemático.

Es text-heavy, denso, sin animaciones. UI estilo "academic paper".

## Qué problema resuelve

Para players que no se conforman con "Crit > DH > Det", sino que quieren entender por qué:

- **Verificación independiente**: The Balance recomienda X build. ¿Por qué? Akhmorning te da el math que sustenta esa recomendación.
- **Edge cases**: parties con compositions raras donde el meta default no aplica. Necesitas recalcular stat priority manualmente.
- **Custom builds**: experimentación con builds non-standard requiere entender stat formulas.
- **Theorycraft propio**: si quieres contribuir al community theorycraft, Akhmorning es el material de referencia para empezar.

Para casuales, esto es overkill. Para theorycrafters, indispensable.

## Diferenciación vs The Balance y XIVAnalysis

- **Akhmorning**: math y fórmulas. Referencia académica estática.
- **The Balance**: aplicación práctica del theorycraft con community discussion. Es donde la math se vuelve "opener canónico".
- **XIVAnalysis**: aplicación a tu log específico. Toma las fórmulas de Akhmorning y te dice "hiciste X mal".

Los tres son complementarios. The Balance recomienda; Akhmorning explica el porqué; XIVAnalysis verifica tu execution.

## Para qué la usa la gente

**Entender stat tiers**: estás considerando un meld de Crit vs DH. Akhmorning te da el formula exacta y vos calculas cuál es mejor para tu setup.

**Verificar Balance recommendations**: el lead dice "Crit > DH para BLM en patch X.Y". ¿Por qué? Akhmorning te muestra el math.

**Hacer custom sims**: si construyes un sim personal o spreadsheet, las formulas vienen de Akhmorning.

**Job rework analysis**: tras un job rework, Akhmorning publishes analysis técnico (a veces antes que The Balance updaten su guide).

**Education**: si quieres aprender how FFXIV works under the hood, Akhmorning es donde se documenta.

## Para quién NO es esta herramienta

- **Casual players**: si solo quieres "que rotación uso para BLM", vete a The Balance. Akhmorning es para understand why.
- **Quien quiere quick answers**: las pages son densas. No es buena para Q&A rápido.
- **Visual learners**: el content es 100% text + tablas + formulas. Sin videos ni gifs.
- **Quien busca tutorial step-by-step**: Akhmorning asume conocimiento básico de FFXIV combat math. No es para principiantes.
- **Mobile users**: el sitio es responsive pero las tablas grandes son tediosas en pantalla chica.

## Cómo se usa en la práctica

1. Anda a [www.akhmorning.com](https://www.akhmorning.com).

2. Top menu: General (stat formulas, damage formulas) o Jobs (deep dive per job).

3. Páginas típicas tienen: explanation prose + formula breakdown + tables con valores específicos.

4. Para stat tiers: encuentras tabla de "Crit % → DPS multiplier" o similar. Buscas tu valor current.

5. Para job-specific: vas a página de tu job (ej: BLM). Encuentras analysis de rotation, damage windows, opening sequences.

6. Cross-referencias con The Balance: Akhmorning te da el math, Balance te da el practical translation.

## Limitaciones honestas

**Updates can lag**: tras patches grandes, Akhmorning puede tardar weeks en actualizar formulas. Mientras tanto, The Balance suele tener guidance preliminary.

**Bus factor**: pocos contributors anónimos sostienen el sitio. Si pierde contributors, content se vuelve stale.

**Sin community engagement directo**: no hay forum, comments, ni Discord directo. Es read-only. Discusión sucede en The Balance o Reddit.

**UI minimalista hasta austera**: funcional pero no engaging. Si no estás motivado por content density, te vas a aburrir.

**Foco en theorycraft profundo, no broad**: cubre lo que el contributor decidió cubrir. Algunos jobs tienen pages exhaustivas; otros, stubs.

**No tiene calculators interactivos**: a diferencia de Etro, no puedes "input tu gear y obtener output". Akhmorning te da formula, vos haces el math.

## Cómo empezar

1. Anda a [akhmorning.com](https://www.akhmorning.com). No requires login.

2. Si sos nuevo, lee la **General → Damage Formulas** page. Esa es la base. Familiarizate con el lenguaje.

3. Para tu job específico, ve a Jobs → tu job. Lee la página de top a bottom.

4. Cruzás con The Balance: si Balance dice "usa rotación X", buscas en Akhmorning el math de why X > Y.

5. Para stat tiers en práctica: cuando vas a meldear materia, abres Akhmorning para verificar el next breakpoint. Si tu DH actual es 12.5%, el next tier puede ser 12.6% o 12.8% dependiendo del item — Akhmorning te dice exactly.

6. Si encuentras bugs o info outdated, reportar es harder porque no hay Discord oficial. Algunos contributors están en el Discord de The Balance.

7. Para deeper involvement, considera contribuir directamente. El sitio acepta theorycraft serios; reach out via el Discord de The Balance suele ser el canal.
