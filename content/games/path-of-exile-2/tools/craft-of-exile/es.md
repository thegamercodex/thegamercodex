---
title: "Craft of Exile (PoE 2)"
description: "Simulador online de crafting para Path of Exile 2 que computa odds, costos esperados y outcomes posibles."
quickTake: "El crafting de PoE 2 es brutal — items no se re-rollean. Antes de tirar 30 Exalted en un slam, Craft of Exile te dice qué probabilidad real tienes. Para crafters serios es input casi obligatorio."
---

## Qué es

Craft of Exile (`craftofexile.com`) es un simulador online de crafting que cubre tanto Path of Exile 1 como PoE 2 (toggle en la esquina superior izquierda). Computa odds matemáticas para cada método de crafting: chance de hit modos específicos, modal de costos esperados en chaos, simulaciones masivas que muestran distribución de outcomes.

Es un proyecto mantenido por Siegrest desde la era PoE 1 — extendido a PoE 2 cuando los archivos de game files lo permitieron. Todo en browser, gratis, sin registro requerido.

## Qué problema resuelve

PoE 2 cambió drásticamente el sistema de crafting respecto a PoE 1. Filosofía: items no se reset ni se full-rerollean — cada paso es semi-permanente. Eso significa que tirar 30 Exalted Orbs en un slam sin saber las odds es financialmente reckless.

Craft of Exile expone las matemáticas. ¿Qué chance hay de que un Regal Orb agregue exactamente el mod que quieres? ¿Cuál es el costo esperado en currency para llegar a un item de 4 mods con stats X, Y, Z usando metodo determinado? ¿Cuántos intentos de promedio necesitas? El sitio responde estas preguntas antes de gastar.

## Diferenciación

Frente a PoE2DB (data raw), Craft of Exile procesa esa data. PoE2DB te dice "este mod tiene weight 1000"; Craft of Exile te dice "con weight 1000 entre 5000 mods totales, tu chance de hitearlo en un slam es 20%, costo esperado 5 orbs si quieres probabilidad acumulada del 90%".

Frente a Path of Building (foco en damage scaling), Craft of Exile es la otra cara: PoB optimiza output, CoE optimiza el camino para llegar al item. Workflow combinado: PoB define qué item necesitas, CoE te dice cómo llegar a él económicamente.

## Para qué la usa la gente

**Modelar costo esperado de un craft**: Tienes un objetivo concreto (rare ring con +life, +crit, +tres resistencias) y quieres saber si vas a gastar 50 Exalted o 500. Craft of Exile simula y te da el rango.

**Comparar métodos alternativos**: ¿conviene craftear con Essences o ir slam puro? ¿Vale la pena chrome de items específicos antes de slammear? CoE te muestra el costo de cada estrategia para el mismo objetivo.

**Verificar odds antes de un step crítico**: estás por usar un Divine Orb caro en un item half-decent — ¿probabilidad real de mejorar? CoE te lo modela.

**Simulación masiva para distribuciones**: opciones de Mass Simulation muestran qué distribución de outcomes puedes esperar de 100 o 1000 intentos de un craft. Útil para entender variance, no solo promedio.

**Investigar mod pools**: el sitio expone qué mods pueden rollar en cada base type, en qué tiers, con qué weights. Útil para target-craft con estrategia explícita.

## Para quién NO es esta herramienta

Si recién empiezas PoE 2 y todavía no tradeas, Craft of Exile no aporta. El crafting serio empieza cuando ya tienes currency surplus y quieres optimizar gear que no se compra.

Si juegas casual y compras todo en trade, no necesites CoE. La herramienta paga su curva de learning cuando crafteas items propios — para players de "buy gear" puro, es overkill.

Si la matemática de probabilidad te incomoda, CoE puede ser frustrante. Las simulaciones requieren cierta intuición de qué significa "70% chance acumulado tras 10 intentos". Sin esa base, los números se interpretan mal.

## Cómo se usa en la práctica

1. Vas a `craftofexile.com/?game=poe2` (o cambias toggle en home si llegas a la versión PoE 1).
2. Construyes el item base: eliges category (weapon, armor, accessory), base type específico, item level. CoE muestra el mod pool aplicable.
3. Defines tus mods objetivo: marcas cuáles quieres y a qué tier mínimo. CoE bloquea otros mods o los deja libres según tu setup.
4. Eliges método de crafting: alch+slam, essence-spam, fossil (si aplica en PoE 2), graveyard, etc. El sitio recalcula odds.
5. Read out: chance per attempt, expected cost en currency, distribution con mass simulation.

Workflow real: estás por craftear, abres CoE en pestaña paralela, modelas el plan, decides si vale la pena, ejecutas in-game con los números en la cabeza.

## Limitaciones honestas

**Solo en inglés**. Sin localización al español. El vocabulario técnico de crafting es exigente — necesitas manejar términos como "weight", "tag", "tier" en inglés.

**Cubre crafting estándar; mecánicas exóticas pueden no estar 100% modeladas**. PoE 2 introduce métodos nuevos (graveyard, Sekhema-based crafting) que CoE va incorporando. Si una mecánica recién salió, puede tardar semanas en aparecer en el simulador.

**La interfaz es densa**. Mucha información por pantalla, vocabulario asumido, navegación que premia familiaridad. Curva de aprendizaje empinada los primeros 20 minutos.

**Los costos en currency son aproximaciones**. CoE usa precios de mercado pero la economía cambia daily — los outputs son orientativos, no exactos al cent.

**Sin import desde el juego**. Empiezas cada simulación from scratch construyendo el item base manualmente. No hay paste-from-game como tiene PoB.

## Cómo empezar

No requiere registro. Vas a `craftofexile.com/?game=poe2`. La primera vez prueba un caso simple: simular alch+slam en un base que conozcas para validar que los números coinciden con tu intuición.

Para profundizar, el sitio tiene "crafting guides repository" con explicaciones de estrategias específicas. Útil cuando quieres aprender un método nuevo (ej: graveyard crafting) sin cero de contexto.

CoE no es daily-use — es consultivo. Lo abres cuando vas a invertir currency significativa en crafting. Una sesión de 15 minutos modelando antes de gastar te ahorra horas de frustración después.
