---
title: gcsim vs Akasha System — simulación teórica vs ranking empírico
description: Comparación corta entre el simulador Monte Carlo de combate y el leaderboard de builds reales. Theorycrafting vs data observada y cuándo usar cada uno.
---

gcsim y Akasha System son dos herramientas de damage analysis de Genshin Impact pero abordan el problema desde lados opuestos. **gcsim** simula combate en condiciones controladas: define una rotación, ejecutar miles de trials Monte Carlo y promediar el DPS. **Akasha System** observa builds reales: extrae data de Spiral Abyss vía Enka.Network y publica leaderboards de quién pega más con cada personaje.

## Teoría vs observación

gcsim responde "¿cuánto daño hace esta rotación si todo sale como planeado?". Es una herramienta de **theorycrafting**: defines team, weapons, artifacts (stats objetivo, no necesariamente reales), buffs y la rotación que quieres testear. El sim corre la rotación frame por frame, modela reactions, ICDs, uptime de buffs y produce un DPS promedio. Cambias una variable (otro weapon, otro stat target) y comparas deltas.

Es la herramienta que los theorycrafters de KQM usan para producir las recomendaciones que ves en guías de Keqing Mains.

Akasha responde "¿qué tan bueno es mi build comparado con el resto de la comunidad?". Es una herramienta de **observación empírica**: extrae builds reales de Spiral Abyss (los slots de personaje que la gente expone públicamente vía showcase), calcula su daño teórico bajo condiciones estandarizadas y los ranquea.

Si tu Ayaka está en percentil 78, sabes que tu build supera al 78% de las Ayakas mostradas. No te dice por qué — solo dónde estás parado.

## Tipo de pregunta que respondes

- **"¿Cuál team comp pega más, Hyperbloom o Mono-Hydro?"** → gcsim. Simula ambas y compara.
- **"¿Está bien mi build de Raiden?"** → Akasha. Te muestra tu percentil.
- **"¿Vale la pena cambiar a este weapon para mi Yelan?"** → gcsim, con valores actuales y propuestos.
- **"¿Qué weapon usan los top 10% de Hu Tao?"** → Akasha. Distribución observada.
- **"¿Funciona esta rotación de 18 segundos sin gap de energy?"** → gcsim. Modela energy management.
- **"¿Mi Nahida está overbuilt o underbuilt?"** → Akasha. Compara stats vs comunidad.

## Profundidad y fricción

gcsim es potente pero requiere learning. Para correr un sim necesitas:
- Definir el team en sintaxis específica.
- Listar weapons, sets, stats.
- Escribir la rotación en lenguaje gcsim.
- Configurar trials, target HP, condiciones del enemy.

El payoff es enorme — sims publicables, comparables, reproducibles. La curva es real.

Akasha es transparente. Buscas un personaje, navegas leaderboards. Cero setup. Si quieres ver tu propio build, ingresas tu UID y aparece.

## Limitaciones

gcsim asume rotaciones perfectas. En la práctica un jugador humano no clava la rotación al frame exacto. Los números de gcsim son **upper bounds teóricos**, no lo que harías jugando.

Akasha solo cubre personajes que la gente expone en showcase. Si un personaje no es popular o no se usa en Spiral Abyss alto, su leaderboard es ralo. Y porque depende de Enka.Network, solo ve players que hicieron público su perfil — está sesgado hacia jugadores serios.

## Complementarios

Una pregunta típica como "¿debería cambiar a este artifact set?" se responde mejor combinando los dos:

1. **gcsim**: simula el daño teórico con set A vs set B.
2. **Akasha**: ¿qué set están eligiendo los top players? Esa data validates o desafía la conclusión teórica.

Si gcsim dice "set A es 8% mejor" pero Akasha muestra que el 85% del top tier usa set B, hay algo que la sim no está capturando bien (puede ser que set B sea más alcanzable en práctica, más consistente, o que la rotación testeada en sim no represente bien el uso real).

## En resumen

- **gcsim** = ¿qué es óptimo en teoría?
- **Akasha** = ¿qué están haciendo los buenos players en realidad?

Son herramientas distintas para audiencias parcialmente solapadas. Theorycrafters usan ambas; jugadores casuales rara vez tocan gcsim pero pueden usar Akasha como benchmark de progreso.
