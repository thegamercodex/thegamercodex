---
title: "MD✦C Calculator"
description: "Calculadora de daño minimalista para Honkai: Star Rail. Una sola pantalla con personaje, light cone, relics, buffs y enemy para obtener el número de daño directo."
quickTake: "Para validar deltas rápidos (¿8% más crit damage vale qué?), MD✦C es más rápido que abrir todo Fribbels. Tool de un job y bien hecha."
---

## Qué es

MD✦C Calculator es una web app gratuita que calcula daño teórico para skills específicas de Honkai: Star Rail. Eligís personaje, light cone, set de relics, buffs activos y enemy, y la app te devuelve el número de daño que pegaría ese skill bajo esas condiciones.

La interfaz es deliberadamente minimalista: todo entra en una sola pantalla. No hay tabs, no hay flows multi-paso, no hay configuración de cuenta. La idea es que puedas tirar un cálculo en menos de un minuto y comparar dos escenarios rápido.

No requiere login ni importar tu cuenta. Configurás los inputs manualmente cada vez, lo cual suena tedioso pero en la práctica es el trade-off por la velocidad y simplicidad.

## Qué problema resuelve

A medida que farmeas relics, aparecen preguntas constantes del tipo "esta pieza tiene 8% más crit damage pero 12% menos atk, vale el cambio?". Responderlas con intuición es traicionero porque los multiplicadores no son lineales.

La forma rigurosa es calcular. Fribbels lo hace, pero abrir Fribbels para una pregunta puntual es overkill: tienes que esperar el sync, navegar al personaje, ajustar y comparar. Para una decisión rápida es muchos clicks.

MD✦C resuelve ese caso específico. Abres la página, configurás el personaje con sus stats actuales, simulas el cambio que estás considerando, ves el delta de daño. Diez segundos. Después cerrás la pestaña y vuelves al juego.

## Diferenciación (con tools de cluster similar)

El damage calculator integrado de Fribbels es más completo: trabaja con tu inventory real, tiene optimizer matemático, considera rotaciones complejas. Para análisis profundo de un personaje, Fribbels gana.

MD✦C juega otro partido: es la herramienta de un job. Calcular el daño de una skill bajo ciertas condiciones, sin necesidad de tener una cuenta importada ni configurar un workflow. La UI es de una sola pantalla justamente porque no quiere ser una suite, quiere ser una calculadora.

Otra forma de verlo: Fribbels es Excel con macros para tu portfolio, MD✦C es la calculadora del bolsillo para sumar la cuenta del restaurante. Las dos suman pero resuelven problemas distintos.

## Para qué la usa la gente

**Validar substat trade-offs antes de upgradear**: Tienes una pieza con HP% y otra con atk%. Configurás ambos escenarios en MD✦C y ves cuál pega más para tu build actual.

**Comparar light cones disponibles para un personaje**: Pruebas dos o tres light cones rápido y ves cuál genera más daño con tu setup actual.

**Estimar el impacto de un buff o debuff específico**: Quieres saber cuánto agrega Pela con su debuff de def. Calculas con y sin Pela y ves la diferencia.

**Verificar guías antes de seguir sus recomendaciones**: una guía dice "este set pega 15% más que el alternativo". Lo confirmás vos mismo con tus stats reales antes de gastar weeks de farming.

**Aprender cómo se compone el daño**: ver los inputs separados (atk base, mult de skill, crit, dmg%, def, resist) ayuda a internalizar la fórmula. Útil sobre todo si recién empiezas con teorycrafting.

## Para quién NO es esta herramienta

Si nunca te hiciste preguntas de stat optimization y solo quieres saber qué team usar, MD✦C no es relevante. Está pensada para quienes ya están metidos en el detalle.

Si quieres analizar rotations completas con energía y skill points, MD✦C calcula daño puntual de una skill por vez. Para análisis de rotation completa necesitas Fribbels u hojas de cálculo dedicadas.

Si te molesta cargar stats a mano, esta tool va a ser frustrante. La configuración manual es central a su diseño. Quien quiere todo automático debería usar Fribbels desde el principio.

## Cómo se usa en la práctica

1. Entra a `hsr-mdc.vercel.app` desde el navegador.

2. Selecciona el personaje y la skill que quieres calcular.

3. Elige el light cone equipado y su superimposition.

4. Configura el set de relics (4-pc y 2-pc) que tienes o estás considerando.

5. Ingresa manualmente los stats finales del personaje (atk, crit rate, crit dmg, dmg%, etc.). Los puedes leer del juego o de Enka.

6. Activa los buffs y debuffs que correspondan a tu team comp.

7. Configura el enemy: nivel, defensa, resistencias, debilidad.

8. Mira el número de daño que devuelve y, si quieres comparar, cambia un input y ve el delta.

9. Para preguntas tipo "vale la pena cambiar X por Y", calculá el escenario actual y el alternativo y restá los resultados.

## Limitaciones honestas

**Carga manual de stats**: Tienes que ingresar atk, crit rate, crit dmg y demás cada vez. No hay sync con tu cuenta. Para usos repetidos esto se vuelve tedioso.

**Skills por separado, no rotation completa**: calcula una skill por vez. Si quieres daño total de una rotación (basic + skill + ultimate combinada), tienes que sumar a mano cada cálculo.

**No considera todos los buffs nichos**: cubre los buffs principales pero algunos efectos muy específicos de eidolons altos o sinergias raras pueden estar simplificados o ausentes.

**Hosting en Vercel sin SLA**: es un proyecto gratuito hosteado en plan free. Si el dev abandona o el dominio expira, desaparece sin aviso. Como con cualquier tool no oficial.

**Sin login significa sin guardado**: no puedes salvar setups para reusar después. Cada sesión empieza desde cero.

**La fórmula puede atrasarse uno o dos parches**: cuando HoYoverse cambia algo del damage calculation (raro pero pasa), la app puede tardar días en ajustarse.

## Cómo empezar

No requiere instalación ni registro. Entra a `hsr-mdc.vercel.app`, elige personaje y empieza a configurar.

La forma más eficiente de usarla es tener una segunda pestaña con Enka.Network abierta. Así copias los stats de tu personaje real desde Enka y los pegas en MD✦C sin tener que mirar tu inventory dentro del juego.

Para preguntas recurrentes (tipo "qué pasa si cambio X stat por Y"), conviene anotar los resultados base en un archivo aparte. La app no guarda historial y cada sesión arranca limpia.
