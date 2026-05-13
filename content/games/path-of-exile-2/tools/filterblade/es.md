---
title: "FilterBlade"
description: "Editor visual y personalizador del NeverSink Loot Filter para Path of Exile 1 y 2."
quickTake: "Sin filtro de loot en PoE 2 te ahogas en items basura. Sin FilterBlade, customizar el filtro de NeverSink es manual labor con sintaxis Path of Exile. Para 95% de los players, FilterBlade es 'el filtro' — la única interfaz que necesitan."
---

## Qué es

FilterBlade (`filterblade.xyz`) es la herramienta web oficial del proyecto NeverSink para descargar, previsualizar y customizar loot filters tanto de Path of Exile 1 como Path of Exile 2. Es el companion site del filtro NeverSink: el filtro define la lógica, FilterBlade es la GUI para ajustarla a tu gusto sin tocar código.

El filtro NeverSink para PoE 2 vive en su propio repositorio (`NeverSinkDev/NeverSink-Filter-for-PoE2`) y FilterBlade carga la última versión automáticamente. Cada level de strictness (suave a uber-plus-strict) está pre-configurado, y tú puedes customizar a partir de cualquiera de ellos.

## Qué problema resuelve

PoE 2 dropea decenas de items por map, mucho de eso basura económica. Sin filtro, tu pantalla durante endgame es un caos visual de items que no valen el segundo de inspección. El motor in-game de filters de PoE acepta archivos `.filter` con sintaxis específica — escribir uno desde cero es trabajo de horas y lleva cierta paranoia (te pierdes items valiosos por un mod).

NeverSink resolvió esto creando un filtro maestro maintenido constantemente, basado en data económica. FilterBlade resuelve la siguiente capa: customizarlo. ¿Quieres que ciertos uniques sean louder? ¿Que los maps T1 sean azules en lugar de violetas? ¿Que un currency raro tenga sound efecto especial? Click en el ítem en FilterBlade, ajustas visual y sonido, exportas. Cero código.

## Diferenciación

No tiene competencia real en PoE 2 actualmente. Otros filtros existen (custom community filters, generadores básicos), pero ninguno combina la base autoritativa de NeverSink con la GUI de customización de FilterBlade.

Frente a editar el archivo `.filter` a mano: FilterBlade es 100x más rápido y previene errores de sintaxis. Solo lo manual gana cuando necesitas reglas extremadamente custom que el GUI no expone — caso muy raro.

## Para qué la usa la gente

**Bajar el filtro de NeverSink listo para usar**: la página principal te deja descargar las strictness presetdas (Soft, Regular, Semi-Strict, Strict, Very Strict, Uber-Strict, Uber-Plus-Strict) en un click.

**Customizar visibilidad de items específicos**: editas reglas item-por-item. Quiero que el Tabula Rasa siempre sea louder, que las gemas de quality 20 tengan beam, que los currencies pequeños desaparezcan after level 80.

**Probar previews antes de aplicar**: FilterBlade tiene preview visual que muestra cómo se vería un item con tu filtro. Útil para ajustar colores antes de meter el filtro en el juego.

**Cambiar entre strictness rápido**: durante campaña quieres Soft (ver más cosas). En endgame quieres Strict (filtrar lo que no escala). FilterBlade te deja generar variantes y switchear entre ellas.

**Update automático cuando hay nueva league**: cada vez que GGG cambia balance, NeverSink ajusta el filtro y FilterBlade refleja la actualización. Bajas la nueva versión, pegas in-game, listo.

## Para quién NO es esta herramienta

Si juegas SSF Hardcore con foco en hardcore minimal — filtro custom muy específico, sin tunning de visuals — FilterBlade puede ser demasiada interfaz para tan poco use. En ese caso, código manual o filtros community alternativos rinden.

Si nunca usaste loot filters y estás en early campaign, probablemente no necesites customización todavía. Bajas Soft o Regular preset, lo aplicas, y aprendes con la base. FilterBlade pesa cuando empiezas a tener opiniones sobre qué ver y qué no.

## Cómo se usa en la práctica

1. Vas a `filterblade.xyz`. La home te pregunta PoE 1 o PoE 2 — eliges PoE 2.
2. Strictness selector: eliges entre 7 levels. Para campaña, Semi-Strict es buen default. Para endgame, Strict o Very Strict.
3. Click "Download" → te baja archivo `.filter`. Copias a `Documents/My Games/Path of Exile 2/` (Windows).
4. In-game: F8 → Item Filter → "Reload". Tu filtro está activo.
5. Para customizar: en FilterBlade, click cualquier item del preview → cambias color, sonido, visibility. Re-descargas.

Para PoE 2 específicamente, el filtro tiene "campaign leveling mode": el shift entre lógica de leveling y endgame ocurre automáticamente cuando alcanzas area level 65. No hace falta cambiar de filter manualmente.

## Limitaciones honestas

**Solo en inglés**. El sitio y el filtro. Para users hispanos, la curva inicial requiere vocabulario técnico (T1 mods, base types, etc.).

**Gross customization solo, no extreme tuning**. Si quieres reglas hyper-específicas (hide rare swords con menos de 3 mods que sean de pre-tier 4), FilterBlade puede no exponer suficiente granularidad. Para esos cases, terminas editando el .filter resultante a mano.

**El filtro NeverSink puede no matchear tus preferencias exactas**. Es opinionated — refleja la opinión de NeverSink y su community. Si discrepas (por ejemplo, quieres ver currency basura para vendor recipes), tienes que customizar.

**Necesitas re-bajar y re-aplicar después de cada update**. No hay sync automático con el juego. Cuando hay nueva league de PoE 2, vas a FilterBlade, bajas la versión actualizada, pegas in-game.

**Algunos rincones del filtro requieren conocimiento de mecánicas**. Para customizar reglas avanzadas (Sekhema-related, atlas mods), tienes que entender qué son los items económicamente. Si recién empiezas, los presets de NeverSink ya cubren bien.

## Cómo empezar

No requiere registro. Vas a `filterblade.xyz`, eliges PoE 2, eliges strictness (Semi-Strict si dudas), descargas. Lo copias al folder correcto y activas in-game.

Ya con el filtro corriendo, juegas unas horas. Cuando empiezas a notar items que no quieres ver (o items que sí quieres ver pero el filtro no muestra), vuelves a FilterBlade y customizas esos casos puntuales. La curva de aprendizaje del editor es muy suave — drag-and-click sobre items.

Para la mayoría de players, NeverSink Filter + FilterBlade es setup-once-then-update — no requiere atención mensual ni domain expertise.
