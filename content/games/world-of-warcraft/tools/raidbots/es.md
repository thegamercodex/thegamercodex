---
title: "Raidbots"
description: "Interfaz cloud y servicio web para correr simulaciones de SimulationCraft sin instalación local. Permite a cualquier jugador con acceso al navegador comparar gear, talents, stat weights y rotaciones via Monte Carlo simulation."
quickTake: "Raidbots democratizó SimC. Antes había que compilarlo y entender la línea de comando; ahora pegas tu profile, click un botón, y minutos después tienes stat weights y Top Gear sim para tu char. Es la tool de gear-optimization que cualquier raider serio usa al menos una vez por temporada."
---

## Qué es

Raidbots (raidbots.com) es un servicio web operado por seriallos (David), que provee interfaz amigable para SimulationCraft (SimC), el motor open-source de simulación de combate de WoW. SimC en sí es un proyecto comunitario que ha existido desde 2008, mantenido por theorycrafters dedicados que codifican rotación y mecánica de cada spec con extreme detalle.

Antes de Raidbots, usar SimC requería: descargar el binario o compilarlo, escribir un profile (.simc) describiendo tu personaje (gear, talents, stats), correrlo en local con CPU brindada por uno mismo, y leer el output como texto plano. Para casuales era prohibitivo. Raidbots cambió eso al ofrecer:

- **Web UI navegable** para configurar simulaciones.
- **Cloud compute** (servidores de Raidbots corren la sim, tú no).
- **Importer**: pegas `/simc` desde el addon SimC y carga tu personaje completo.
- **Sims pre-empaquetadas**: Top Gear, Droptimizer, Stat Weights, Talent Comparison.

Es free para sims básicas, con tier Premium ($20/mes o $200/año) que da prioridad de cola, sims más largas (más iterations = menos variance), y features adicionales. El tier free es completamente funcional para uso casual; Premium se justifica cuando haces sims múltiples a la semana.

## Qué problema resuelve

Decisiones de gear, talents y stat priorities en WoW no son obvias. Dos items con ilvl similar pueden dar DPS muy distinto según stats, set bonuses, y proc interactions. Una talent build óptima para Mythic raid puede ser subóptima para M+. El stat weight teórico ("Crit > Mastery > Haste") es una simplificación que ignora breakpoints, cooldown alignment, y mil otros detalles.

SimC resuelve esto modelando la pelea entera en simulación: usa la rotación óptima de tu spec, simula 50.000+ pulls de boss, y produce un DPS estimado con confidence interval. Comparas dos configs y sabes objetivamente cuál es mejor.

Raidbots saca el friction de SimC. En 5 minutos puedes:

- Importar tu char.
- Correr Top Gear: prueba 100+ combinaciones de tu bag y dice cuál maximiza DPS.
- Correr Stat Weights: simula tu char +1 de cada stat y devuelve magnitudes relativas.
- Correr Droptimizer: simula tu char con cada item del raid actual, y muestra qué drops son upgrades.

Esto convierte gear decisions de "creo que esto es mejor" a "objetivamente esto es +3.2% DPS".

## Para qué la usa la gente

**Top Gear semanal**: post-raid, abres Raidbots, importas tu char, y Top Gear te dice si tienes que reorganizar gear con los nuevos drops. Output es directo: "este combo de items da +250 DPS sobre tu setup actual".

**Stat weights pre-gemming**: antes de gastar gold en gemmas y enchants, sim tus stat weights. Si Crit es 2.4 y Haste es 1.8, sabes priorizar Crit. Útil después de cambios grandes de gear.

**Talent comparisons**: tienes dudas entre talent A y talent B para un boss específico. Raidbots las simula lado a lado y devuelve diferencia de DPS estimada.

**Droptimizer pre-raid**: antes del raid, sim tu char con cada item del raid actual. Sabes cuáles loot tickets priorizar y te ayuda a decidir si pasas un drop a otro raider.

**Mythic+ optimization**: aunque SimC es más fiel para single-target, también modela AoE y cleave. Para M+ optimization, Bloodmallet a veces es complemento mejor (ver siguiente).

**Rotation testing**: SimC te permite tweakear la APL (rotación scripted). Útil para advanced theorycrafters que quieren validar tweaks de rotación antes de probarlos in-game.

## La diferencia con Bloodmallet

Ambas son gear-optimizers basadas en SimC, pero approaches distintos:

- **Raidbots**: full character optimization, customizable. Tú das tu char y simula. Output es DPS específico para *tu* setup.
- **Bloodmallet**: charts pre-computed comparativos. Pre-corrieron sims sobre todos los trinkets, talents, tier sets, y muestran charts. Tú consultas "cuál trinket es mejor para Fire Mage" y ves un ranking. No es customizable, pero es instantáneo.

Para "cuál es la decisión óptima para *mi* char con *mi* gear actual": Raidbots. Para "cuál trinket farmeo de la Vault esta semana": Bloodmallet, en 30 segundos.

Las dos se complementan y la mayoría de raiders serios usan ambas según el caso.

## Para quién NO es esta herramienta

- **Players casuales sin Mythic raid o keys altas**: si estás en Heroic o keys ≤+10, las diferencias de gear son marginales y no compensan el time invested. Stat priority de Icy Veins es suficiente.
- **PvP-only**: SimC modela combate PvE con NPCs scripted, no PvP humano. Hay otros recursos para PvP optimization.
- **Levelers**: Raidbots no aplica al gameplay leveling. Es solo end-game.
- **Players sensibles a cloud compute**: Raidbots corre tus sims en sus servidores. Si prefieres compute local, instalar SimC directamente sigue siendo opción.

## Cómo se usa en la práctica

1. In-game: instala el addon **SimulationCraft**.

2. Tipeá `/simc` en chat. Te abre una ventana con un texto largo que describe tu personaje.

3. Copias todo ese texto.

4. Vas a [raidbots.com](https://www.raidbots.com), eliges el tipo de sim (Top Gear, Stat Weights, Droptimizer, etc.).

5. Pegas tu profile en el textarea. Configuras opciones (fight type, duration, target count).

6. Click "Run Simulation". Esperas 1-15 minutos según tipo y tier (free/premium).

7. Output: report navegable con stats de tu char, DPS estimado, y comparaciones con alternativas.

8. Implementás los cambios in-game (re-gem, re-talent, swap gear).

## Limitaciones honestas

**Modela pelea idealizada**: SimC asume rotación óptima ejecutada perfecto, sin movement obligatorio inesperado, sin downtime por mecánicas. En la realidad, las peleas tienen interruptions y human error. La diferencia entre sim y log real puede ser ±10-15%. Útil para comparaciones relativas (gear A vs B), menos para predecir tu DPS absoluto.

**Cobertura de specs depende de SimC contributors**: si una spec no tiene maintainer activo en SimC, el modelado puede estar atrasado o tener errores. Specs populares se actualizan rápido; specs nicho a veces tardan.

**Premium en cola para sims grandes**: el tier free funciona pero las sims más largas (50k+ iterations) pueden tener cola. Premium evita eso.

**APL editing requires expertise**: customizar la rotación scripted de SimC requiere entender su DSL. Para uso casual no es necesario, pero advanced theorycrafters van a chocar con la curva.

**Solo single-target / AoE básico**: M+ optimization es menos confiable porque las peleas reales son contextual (priority targets, cleave dynamics, mob movement). Sims de AoE en SimC son aproximación.

**No incluye PvP gear**: SimC modela PvE.

**Resultado depende de input correcto**: si tu profile tiene gear desactualizado o talents incorrectos, la sim no compensa. Re-importar `/simc` cada vez es buena práctica.

## Cómo empezar

1. Instala el addon **SimulationCraft** (o **Raidbots Importer**) via CurseForge / Wago.

2. In-game, haz `/simc` y copia el output.

3. Anda a [raidbots.com](https://www.raidbots.com) y entra a **Top Gear** o **Stat Weights** (los más útiles para empezar).

4. Pega tu profile, run sim, y lee el output. La primera vez puede ser abrumador — los reportes tienen mucha info, foco en la sección "Top Gear" o "Stat Weights" main result.

5. Comparate los resultados con tu setup actual. Si Top Gear sugiere cambios, implementalos.

6. Como referencia editorial: SimulationCraft es **open source** y mantenido por la comunidad ([github.com/simulationcraft/simc](https://github.com/simulationcraft/simc)). Raidbots es la interfaz cloud comercial sobre ese motor — vale conocer y dar crédito al proyecto upstream que hace todo posible.
