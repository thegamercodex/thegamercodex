---
title: OSRS Wiki DPS Calculator
description: La calculadora de DPS canónica de OSRS, construida y mantenida por Weirdgloop, el equipo detrás de la OSRS Wiki. Arma un loadout y obtén max hit, accuracy, DPS y time-to-kill contra cualquier monstruo del juego.
quickTake: Si solo vas a usar una herramienta de combate en OSRS, que sea esta. Es la referencia de la comunidad, es open source y su matemática se mantiene al día con cada update del juego.
---

## Qué es

OSRS Wiki DPS Calculator es la calculadora de daño por segundo oficial de la OSRS Wiki, construida y mantenida por Weirdgloop, el mismo equipo que opera el wiki. Tú armas un loadout completo —equipo en cada slot, prayers activas, potions y otros buffs, y el estilo de combate— y la herramienta calcula tu max hit, tu accuracy (hit chance), tu DPS y el time-to-kill estimado contra cualquier monstruo del juego.

La gran ventaja es que su matemática usa los mismos datos de combate que el wiki, así que se mantiene actualizada conforme Jagex agrega ítems, cambia mecánicas o introduce monstruos nuevos. Su linaje desciende de la spreadsheet original de DPS de Bitterkoekje, ahora cruzada y verificada contra los datos del wiki.

## Qué problema resuelve

En OSRS la diferencia entre un setup mediocre y uno óptimo puede significar el doble de DPS, y eso se traduce en kills más rápidas, menos supplies gastados y bosses que de pronto se vuelven viables. El problema es que esa diferencia no es obvia: depende de defensas del monstruo, bonificaciones de equipo, prayers, efectos especiales y el estilo de ataque.

Esta calculadora elimina la adivinanza. En lugar de probar gear en vivo y "sentir" si pega más, obtienes números exactos antes de gastar nada.

## Diferenciación

Es la opción **canónica y open source** del trío de calculadoras de combate de OSRS. Su matemática es la más confiable porque deriva directamente de los datos del wiki y cualquiera puede auditar el código.

A diferencia de [GearScape](/es/old-school-runescape/tools/gearscape), no busca el gear por ti: tú armas el loadout manualmente, slot por slot, con control total y precisión. Y a diferencia de [OSRS Best in Slot](/es/old-school-runescape/tools/osrs-best-in-slot), no auto-completa tus stats desde el RSN ni auto-equipa el BiS; pide un poco más de trabajo manual a cambio de ser la fuente de verdad de la comunidad.

## Para qué la usa la gente

- **Comparar dos loadouts antes de comprar:** ver si vale la pena el upgrade de millones de GP midiendo el DPS real lado a lado.
- **Optimizar setups de boss:** ajustar prayers, potions y switches para exprimir el máximo DPS contra un boss específico.
- **Verificar max hit y accuracy exactos:** confirmar si un setup alcanza cierto max hit o supera el defence roll de un monstruo.
- **Validar guías y claims de la comunidad:** reproducir un setup recomendado y ver con tus propios números si rinde lo que prometen.

## Para quién NO es esta herramienta

No es para quien quiere que el programa decida por él. Si esperas escribir el nombre de un boss y que te diga "ponte esto", esta herramienta no hace eso —tú construyes el loadout. Para ese flujo automático, GearScape u OSRS Best in Slot encajan mejor.

Tampoco es para principiantes absolutos que ni siquiera saben qué ítems poseen; conviene tener cierta noción de tu gear y tus stats antes de sacarle provecho.

## Cómo se usa en la práctica

1. Abre dps.osrs.wiki en el navegador.
2. Completa tu loadout: selecciona el equipo en cada slot, activa las prayers, marca las potions y buffs, y elige el estilo de combate.
3. Configura tus combat stats (Attack, Strength, Defence, Ranged, Magic, etc.).
4. Elige el monstruo objetivo del buscador integrado para cargar sus defensas.
5. Lee los resultados: max hit, hit chance, DPS y time-to-kill.
6. Duplica el loadout, cambia un ítem o una prayer y compara los números para decidir el upgrade.

## Limitaciones honestas

- **Requiere construcción manual:** armar y comparar varios loadouts toma tiempo; no hay un botón de "auto-BiS".
- **No carga tu cuenta:** debes ingresar tus stats a mano, no los toma del RSN automáticamente.
- **Modela un escenario teórico:** asume mecánicas estándar y no captura cada interacción rara o RNG del encuentro real.
- **Curva de aprendizaje:** la cantidad de opciones puede abrumar a quien recién empieza con teoría de combate.

## Cómo empezar

Entra a [dps.osrs.wiki](https://dps.osrs.wiki) —no necesitas cuenta ni instalar nada. Empieza con un setup que ya uses, ingresa tus combat stats, elige un monstruo que farmees seguido y mira tu DPS. Luego cambia un solo ítem para entender cómo cada pieza mueve los números. El código es open source bajo GPL-3.0 en GitHub si quieres revisar la matemática.
