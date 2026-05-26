---
title: "StarGuide"
description: "Team builder personalizado para Honkai: Star Rail que importa tu roster real desde HoYoLAB y recomienda composiciones para endgame con los personajes que efectivamente tienes."
quickTake: "Las tier lists generales no te ayudan si te falta el meta unit. StarGuide te dice qué armar con tu roster real y qué pullear next basándose en lo que ya invertiste."
---

## Qué es

StarGuide es una web app gratuita que conecta con tu cuenta de HoYoLAB para leer tu roster real de Honkai: Star Rail y generar recomendaciones de equipos basadas en los personajes que efectivamente tienes. En lugar de mostrarte la tier list ideal del meta actual, te muestra qué composiciones puedes armar hoy con tu colección.

Es un proyecto de un desarrollador solo, lanzado en 2025 y actualmente en mantenimiento activo. La interfaz es directa: importas tu cuenta, eliges el modo endgame que quieres clearear (Memory of Chaos, Pure Fiction, Apocalyptic Shadow), y la app te devuelve teams ordenados por viabilidad para tu inventory específico.

La gracia es que no asume que tienes acceso al roster perfecto. Si te falta una unidad meta, te ofrece alternativas con tus propios personajes y te dice qué trade-offs tiene esa elección.

## Qué problema resuelve

Casi toda la información de meta para Star Rail asume condiciones ideales: "el mejor team de Acheron incluye Pela, Sparkle y Aventurine". Pero si juegas F2P o low-spender, probablemente no tengas las cuatro unidades del team óptimo. Las guías genéricas no se adaptan a esa realidad.

StarGuide invierte la pregunta. En lugar de "cuál es el mejor team para X personaje", responde "con lo que tengo, cuál es el mejor team para clearear X modo endgame". Es una diferencia operativa importante: una pregunta es teórica, la otra es accionable.

Además, una vez que conoce tu roster, puede sugerir pull priorities concretos: "si pulleás a Robin, estos cuatro teams de tu colección suben de tier" es más útil que "Robin es S+ en general".

## Diferenciación (con tools de cluster similar)

La comparación natural es con Prydwen. Prydwen mantiene tier lists generales y guías de personaje del meta agregado: te dice qué unidades son mejores en abstracto. Es excelente reference, pero no sabe nada de tu cuenta.

StarGuide trabaja al revés: parte de tu roster como restricción y deriva recomendaciones desde ahí. No reemplaza a Prydwen, lo complementa. Prydwen contesta "qué pullear si pudieras tener cualquier cosa"; StarGuide contesta "con lo que ya pulleaste, cómo armas teams competitivos esta semana".

Para jugadores que ya tienen roster amplio el valor cae: si tienes a todo el meta, las recomendaciones de StarGuide se vuelven obvias. El sweet spot es F2P y low-spender con colecciones incompletas que necesitan optimizar lo que ya invirtieron.

## Para qué la usa la gente

**Armar teams para Memory of Chaos sin estudiar mucho**: Importas tu cuenta, eliges el modo, y obtienes tres o cuatro composiciones viables ordenadas por sinergia. Útil cuando sale un nuevo ciclo de MoC y no quieres perder una hora investigando.

**Decidir pull priorities con data de tu cuenta**: la app puede mostrarte cuánto mejorarían tus opciones de team si pullearas a un personaje específico del banner actual. Eso convierte la decisión de "vale la pena" en algo más cuantitativo.

**Identificar agujeros en tu roster**: si la app te dice "para este modo no tienes ningún sustain viable", es señal clara de qué pullear próximo.

**Validar teams improvisados antes de gastar fuel**: Pruebas un team que se te ocurrió y la app te dice si tiene sinergia razonable o si estás dejando damage en la mesa.

**Aprender qué unidades cubren roles parecidos**: al ver las alternativas que ofrece para teams meta, descubrís sinergias secundarias que no aparecen en guías mainstream.

## Para quién NO es esta herramienta

Si tienes una cuenta whale con todas las unidades meta, StarGuide te va a confirmar lo obvio: usa el team óptimo que ya conocés. El valor diferencial desaparece cuando no hay restricción de roster.

Si recién empezaste el juego y solo tienes los starters más algún 5★ random, los teams sugeridos van a ser inevitablemente débiles y eso es esperable. La app no inventa unidades, solo trabaja con lo que hay.

Si quieres comparaciones de daño numérico entre builds, esto no es un damage calculator. Para eso está Fribbels o MD✦C. StarGuide opera a nivel de team composition, no de stat optimization.

## Cómo se usa en la práctica

1. Entra a `starguide.gg` desde el navegador.

2. Conecta tu cuenta de HoYoLAB siguiendo las instrucciones (proceso similar al de otras tools que leen tu roster).

3. Espera que la app sincronice tu lista de personajes y sus niveles aproximados.

4. Elige el modo endgame para el que quieres sugerencias (MoC, Pure Fiction o Apocalyptic Shadow).

5. Revisa los teams sugeridos. Cada uno incluye los personajes, el rol que cumple cada uno, y notas sobre qué unidad falta del team meta y qué trade-off implica esa sustitución.

6. Para pull priority, abre la sección de banners actuales y mira cómo cambian tus opciones de team con cada potencial pull.

7. Volvé después de cada parche para que la app actualice las recomendaciones con los nuevos enemies y units.

## Limitaciones honestas

**Dependés de HoYoLAB sync**: si HoYoverse cambia la API o tu cuenta tiene problemas de privacidad, la importación puede fallar. No es culpa de StarGuide pero te afecta igual.

**Las recomendaciones asumen builds decentes**: la app no puede saber si tus relics son basura o están bien rolleadas. Sugiere teams asumiendo que las unidades están razonablemente buildeadas. Si tienes a Acheron a nivel 80 pero con relics de la primera semana, el team sugerido va a underperform vs lo que predice.

**Pure Fiction y Apocalyptic Shadow tienen menos cobertura que MoC**: como modos más nuevos, la base de datos de teams probados es más chica. Las sugerencias mejoran con cada parche pero todavía hay menos refinamiento que en MoC.

**Es un proyecto de un solo dev**: el ritmo de updates depende de una persona. En parches grandes puede haber lag de algunos días hasta que se incorporen unidades nuevas.

**No reemplaza criterio propio**: la app sugiere desde reglas de sinergia, no entiende preferencias de playstyle ni constraints de energía. Toma las sugerencias como punto de partida, no como verdad cerrada.

## Cómo empezar

No requiere instalación. Entra a `starguide.gg` desde cualquier navegador, conecta tu cuenta de HoYoLAB siguiendo el flujo guiado, y espera un minuto a que sincronice tu roster.

La primera vez que abres la app, te conviene revisar las tres categorías de endgame (MoC, Pure Fiction, Apocalyptic Shadow) para entender qué cubre tu roster bien y dónde tienes huecos. Esa lectura rápida te orienta mucho mejor para decidir el próximo pull que cualquier tier list genérica.

Combinala con Prydwen para tener las dos vistas: Prydwen para meta general, StarGuide para "qué puedo hacer hoy". Las dos juntas cubren el ciclo completo de decisión: qué pullear a largo plazo y qué armar esta semana.
