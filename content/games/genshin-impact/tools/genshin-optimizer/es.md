---
title: "Genshin Optimizer"
description: "Optimizador web completo de builds, artefactos y cálculo de daño para Genshin Impact, open source y disponible en múltiples idiomas."
quickTake: "La herramienta indispensable para cualquier jugador de Genshin que quiera optimizar daño en serio. Si farmeas artefactos, no usar Genshin Optimizer es desperdiciar tu tiempo."
---

## Qué es

Genshin Optimizer (GO) es una aplicación web open source que permite gestionar todo lo relacionado con builds en Genshin Impact: personajes, armas, artefactos, equipos completos, y cálculo de daño. Su funcionalidad estrella es el optimizador de artefactos, que dado tu inventory actual, calcula matemáticamente la combinación óptima de artefactos para maximizar el rendimiento de cada personaje.

Es completamente gratuita, sin registro, y los datos se guardan localmente en tu navegador. Está disponible en múltiples idiomas incluyendo español, inglés, francés, japonés, coreano, ruso, y chino.

El proyecto es mantenido por frzyc y un equipo de contribuyentes en GitHub bajo licencia MIT, actualizándose con cada nuevo parche del juego.

## Qué problema resuelve

Genshin Impact tiene un sistema de artefactos complejo: cada personaje puede equipar 5 piezas, cada pieza tiene una stat principal y hasta 4 substats, y existen docenas de sets con bonos diferentes. Si tienes 100 artefactos en tu inventory, el número de combinaciones posibles es astronómico. Decidir manualmente cuáles equipar es prácticamente imposible.

Genshin Optimizer resuelve esto matemáticamente. Le dices al optimizer "quiero maximizar el daño de Hu Tao usando set Crimson Witch + Wanderer's Troupe", y el sistema evalúa millones de combinaciones de tus artefactos para encontrar la que produce mayor DPS. En segundos. Sin que tengas que probar manualmente.

Más allá del optimizer, GO también es una calculadora de daño completa: ingresas tu personaje con su build actual y te muestra el DPS exacto, el daño por skill, el daño con buffs activos, contra enemigos específicos. Lo que en el juego solo se siente como "siento que pega más", GO te lo muestra como números concretos.

## Para qué la usa la gente

**Optimizar artefactos farmeados**: el caso de uso central. Después de farmear horas de domain runs, tienes un montón de artefactos nuevos. GO te dice instantáneamente cuáles vale la pena equipar y cuáles tirar.

**Comparar builds antes de invertir**: ¿vale la pena cambiar de set Gladiator a Shimenawa para tu Xiangling? GO te calcula el daño con cada opción antes de gastar resin farmeando un set nuevo.

**Planificar progresión a largo plazo**: ¿qué tan fuerte sería tu Yelan si consiguieras tal arma 5-estrellas? GO te permite simular ese escenario sin gastar primogems en wishes.

**Theory-crafting de team comps**: ¿cómo se compara un equipo Hyperbloom vs Spread? GO te permite armar ambos equipos completos y comparar resultados teóricos.

**Identificar bottlenecks de tu personaje**: ¿por qué tu Raiden no pega tan duro como esperabas? GO te muestra exactamente dónde está el cuello de botella (falta de Energy Recharge, ER% mal balanceado, attack vs crit ratio incorrecto).

**Decidir qué personajes mejorar**: si tienes resin limitado y quieres priorizar mejorar a uno solo, GO te muestra cuál tiene más potencial de crecimiento dado tu inventory actual.

## Cómo se usa en la práctica

El flujo básico tiene dos versiones: manual y automática.

**Manual**: Agregas cada personaje, weapon y artefacto manualmente. Tedioso al inicio pero te da control total. Para cada artefacto ingresas su set, slot, stat principal, substats, y nivel. Lo mismo con weapons (refinement, nivel, ascensión).

**Automática con scanner**: existe Genshin Scanner, una herramienta complementaria que toma screenshots de tu inventory y los procesa con OCR para importar todo a GO automáticamente. Setup inicial toma 30-60 minutos pero después GO tiene tu inventory completo.

Una vez tienes tus datos en GO, el flujo típico es:

1. Eliges un personaje y su weapon objetivo.

2. Eliges qué stat quieres maximizar (DPS, healing, shield strength, etc.).

3. Eliges qué sets de artefactos considerar (todos, solo specific sets, etc.).

4. Click en "optimize". El sistema evalúa combinaciones y te muestra las mejores 50.

5. Comparas builds, eliges la mejor, equipas en el juego.

Para usuarios que no quieren usar el optimizer per se, GO también funciona como calculadora de daño pura: ingresas tu build manualmente y te muestra los números resultantes.

## Limitaciones honestas

**Curva de aprendizaje inicial**. La interfaz tiene mucha información y muchas opciones. Para aprovecharla a fondo necesitas entender el sistema de combat de Genshin (reacciones elementales, multiplicadores, scaling stats, etc.). Para principiantes que solo quieren saber "qué equipar a mi personaje" hay tools más simples que dan recomendaciones genéricas.

**Setup de datos toma tiempo**. La primera vez que la usas, ingresar tus 50+ artefactos puede tomar una hora si lo haces manual. Con scanner es más rápido pero requiere setup adicional.

**No considera mecánicas avanzadas perfectamente**. Algunas interacciones específicas de personaje (cierto talent passive, ciertos team buffs muy específicos) pueden no estar perfectamente modelados. Para builds extremadamente nicho conviene verificar manualmente.

**No te dice cómo jugar**. GO te muestra el DPS teórico optimizando rotación. Pero ejecutar esa rotación correctamente in-game es otra cosa. Una build optimal en GO requiere skill de jugador para alcanzar su daño teórico.

**Los datos son locales**. Si pierdes tu navegador o limpias datos, pierdes tu inventory entero. GO permite exportar/importar tu data como JSON, vale la pena hacer backups.

**No incluye Spiral Abyss specifics**. GO calcula daño contra "enemigos genéricos". Si tu objetivo es clear Spiral Abyss específico (con sus modifiers únicos por ciclo), tienes que ajustar manualmente las simulaciones.

## Cómo empezar

No requiere instalación ni cuenta. Vas a `frzyc.github.io/genshin-optimizer` desde cualquier navegador.

Para tu primera vez, recomendación práctica: empieza con UN solo personaje, no intentes ingresar todo tu inventory de inmediato. Elige a tu personaje principal, ingresa su weapon actual, ingresa solo los 5 artefactos que tiene equipados, y juega con la calculadora de daño para entender la interfaz.

Una vez te familiarices, ahí sí vale la pena ingresar más inventory. Para usuarios que quieren ir all-in, considerar Genshin Scanner para automatizar el proceso.

Para entender qué hacer con los resultados, vale la pena complementar GO con guías de personajes (KQM/Keqing Mains tiene guides excelentes que te dicen "para Hu Tao busca este set, este weapon, estos stats objetivo"). GO te ayuda a alcanzar esos objetivos óptimamente, pero saber cuáles son los objetivos requiere conocimiento previo.

La documentación oficial dentro de la propia tool tiene tutoriales que cubren funcionalidades avanzadas. No es necesario leerla toda al inicio, pero está ahí cuando quieras profundizar.