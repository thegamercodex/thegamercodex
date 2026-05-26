---
title: "HSR Wish Simulator"
description: "Simulador web de warps de Honkai: Star Rail con las tasas de pity reales. Sandbox para probar suerte virtual sin gastar jades."
quickTake: "No es un tool serio, es un sandbox para ver cuánto pity necesitarías sin gastar jades. Útil para gestionar expectativas antes de pullear de verdad."
---

## Qué es

HSR Wish Simulator es una web app gratuita que reproduce la mecánica de gacha de Honkai: Star Rail. Eligís un banner activo o histórico, haces "warps" virtuales con la moneda ficticia que la app te da, y vas viendo lo que te tocaría con las tasas reales y el sistema de pity del juego.

No conecta con tu cuenta. No tracks nada real. No requiere login. Es estrictamente un simulador de práctica que reproduce las probabilities oficiales: 0.6% base de 5★, soft pity a partir del warp 74 aproximadamente, hard pity en el 90, sistema de 50/50 con guarantee al siguiente 5★, etc.

Servido en `hsr.wishsimulator.app`, mantenido por la comunidad. La interfaz imita la del juego para que se sienta familiar: animación de warps, splash de los personajes, contador de pity, todo.

## Qué problema resuelve

Las preguntas más frecuentes antes de un banner son del tipo "con 90 warps, qué probabilidad real tengo de sacar al personaje?" o "si voy a 50/50, qué pasa si pierdo?". Las respuestas teóricas existen en hojas de cálculo y artículos, pero abstractas.

El simulador convierte esas preguntas en experiencia concreta. Haces 100 pulls virtuales y ves qué te tocó. Lo repites varias veces y empiezas a tener intuición de la varianza real: a veces sale al 60, a veces se va al hard pity, a veces pierdes el 50/50 y a veces lo ganas.

Esa intuición ayuda a planificar mejor antes de gastar jades reales. Si descubrís simulando que la mitad de las veces el personaje cuesta 120+ warps, puedes decidir más informado si tienes los recursos para ir.

## Diferenciación (con tools de cluster similar)

Es fundamental no confundirlo con Star Rail Station (SRS). SRS trackea warps reales que ya hiciste, leyendo el historial de tu cuenta. WishSim hace warps virtuales que nunca pasaron. Cubren preguntas opuestas: SRS responde "qué hice", WishSim responde "qué podría pasar".

Combinados son útiles: usas SRS para auditar tu suerte pasada y WishSim para estimar tu suerte futura antes de comprometer recursos. Pero son tools distintas y se confunden seguido en posts comunitarios.

Tampoco es un calculator de probabilidad pura. Si quieres la fórmula matemática del expected pity, hay calculators dedicados que devuelven números. WishSim te da la experiencia, no la fórmula.

## Para qué la usa la gente

**Gestionar expectativas antes de un banner**: simular varias runs de 90 pulls te muestra el rango realista de outcomes. Útil para no entrar al banner con expectativas optimistas que después generan frustración.

**Practicar el orden de pulls sin riesgo**: para jugadores nuevos que todavía no entienden el sistema de 50/50 y pity transfer, hacer warps virtuales acelera el aprendizaje sin costo.

**Simular escenarios "qué pasa si pierdo el 50/50"**: Haces pulls hasta el primer 5★ y si pierdes, sigues hasta el guarantee. Te da una idea concreta de cuántos warps suma esa situación de worst case.

**Probar suerte por entretenimiento puro**: a veces solo quieres sentir la dopamine de la animación de warp sin gastar recursos reales. Es válido y la app lo hace bien.

**Mostrar resultados en clips o memes**: porque la animación imita la del juego, sirve para crear contenido humorístico tipo "simulé 1000 warps en Acheron, esto pasó".

## Para quién NO es esta herramienta

Si quieres trackear tus pulls reales para ver tu pity actual o tu suerte histórica, esto no es para vos. Necesitas Star Rail Station, que lee tu historial de cuenta real.

Si buscas calcular la probability exacta de éxito en X cantidad de pulls (un porcentaje), un calculator matemático es mejor que un simulador estocástico. WishSim te da una muestra, no la fórmula.

Si tendés a desarrollar comportamientos compulsivos con gacha, hacer warps virtuales puede normalizar la frecuencia de pulleo y predisponerte a gastar más después. Si ese es tu perfil, mejor ni abrir este tipo de tools.

## Cómo se usa en la práctica

1. Entra a `hsr.wishsimulator.app` desde el navegador.

2. Elige el banner que quieres simular (current o pasado, según lo que tenga la app).

3. La app te asigna una cantidad de moneda virtual o te deja warps ilimitados, según el modo.

4. Tira warps uno por uno o en tandas de 10, como en el juego.

5. Mira cuánto pity acumulás y cuándo cae tu primer 5★.

6. Si quieres simular el peor caso, asumí que pierdes el 50/50 y sigue pulleando hasta el guarantee del próximo.

7. Repetí el ejercicio varias veces. Una sola simulación dice poco, diez te dan una idea del rango.

8. Apuntá los resultados (a mano o mentalmente) para sacar conclusiones del tipo "en 10 runs, el rango fue 70-140 warps para el target".

## Limitaciones honestas

**No predice tu suerte real**: cada warp en el juego es independiente. Que simulés bien no significa que vayas a tener buena suerte real. La función es educativa, no predictiva individual.

**Puede normalizar el gasto en gacha**: hacer warps virtuales libremente te puede acostumbrar al ritmo de pulleo y hacer que después gastes más sin notarlo. Riesgo real para perfiles sensibles.

**Las tasas son las publicadas, no las observadas**: HoYoverse publica las probabilities oficiales pero la comunidad a veces nota desvíos en muestras grandes. El simulador usa las oficiales, asumí ese baseline.

**No incluye banners departure o weapon banners con la misma fidelity**: la cobertura es principalmente de character banners limited. Otros tipos pueden estar simplificados o ausentes.

**No reemplaza una decisión informada**: simular ayuda a calibrar expectativas pero la decisión de pullear depende de tus recursos reales, prioridades de roster y context que el simulador no conoce.

**Solo entretenimiento, sin valor estratégico claro**: a diferencia de Fribbels o StarGuide, esto no mejora tu juego de forma medible. Es honest fun, nada más.

## Cómo empezar

No requiere instalación ni registro. Entra a `hsr.wishsimulator.app`, elige un banner y empieza a tirar warps.

Para que la experiencia sea informativa más que solo entretenimiento, te recomendamos definir un experimento antes de empezar: por ejemplo, "voy a hacer 5 runs de 90 warps cada una y voy a anotar cuántos personajes 5★ saqué en cada una". Tener esa estructura convierte una sesión de clics en data útil para tu próximo banner real.

Para tracking de tu suerte real, esto no sirve. Para eso pasate a Star Rail Station, que es la herramienta dedicada a ese caso.
