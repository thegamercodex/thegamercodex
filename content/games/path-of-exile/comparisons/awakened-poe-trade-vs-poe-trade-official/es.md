---
title: Awakened PoE Trade vs sitio oficial — cuál usar para tradear en Path of Exile
description: Comparación profunda entre el overlay de trading más popular y el sitio oficial de GGG. Velocidad, filtros, live search y limitaciones reales para que sepas cuál usar y cuándo.
---

Cualquiera que tradee en Path of Exile termina enfrentando la misma decisión: ¿uso un overlay como Awakened PoE Trade (APT) o me quedo en la web del sitio oficial? Las dos cumplen el mismo objetivo a alto nivel — encontrar precios y comprar/vender ítems —, pero el flujo de trabajo, las fortalezas y los puntos ciegos son distintos. Esta comparación cubre los escenarios reales donde una gana a la otra y dónde lo razonable es usar ambas.

## Velocidad y flujo de trabajo

El argumento más fuerte de APT es la **velocidad sin perder foco**. Hoverearas un ítem en el inventario o en el suelo, presionas `Ctrl+D` (o la hotkey que hayas configurado) y aparece una ventanita con precios estimados, filtros aplicables y un botón directo a la búsqueda en el sitio oficial. Sin alt-tab, sin pegar texto, sin cambiar de pantalla. Para un mapper que termina un map con 30 ítems no identificados, ese segundo por ítem se acumula rápido.

El sitio oficial, en cambio, asume que vas a salir del juego (o a una ventana separada) y abrirás un browser. El flujo es: copiar el ítem (`Ctrl+C`), pegarlo en la web, esperar a que parseé los stats, y entonces tienes la búsqueda. Cada price-check tarda unos cinco a diez segundos, varias veces más que APT.

Donde APT pierde velocidad es cuando necesitas **iterar sobre filtros**: agregar un mod adicional, ajustar un rango, refinar la búsqueda. El overlay tiene una UI compacta que cubre el caso común pero limita la profundidad de ajustes. El sitio oficial, con su layout web, te permite manipular filtros sin restricciones de espacio.

## Profundidad de filtros y búsqueda avanzada

Acá la web gana claro. El sitio oficial expone:

- Búsqueda por **stat groups** con operadores `Sum`, `If`, `Count` para combinar mods de manera no trivial.
- Rangos numéricos exactos por mod individual, incluyendo mods pseudo (suma de implicit + explicit).
- Filtros por tipo de socket, tier de jewel, requisitos, niveles, calidad, corrupted, mirrored, identified, fractured, synthesized, etc.
- Búsqueda por league específica, account, sellers en línea solamente, listed within X time.

APT cubre los filtros que importan en el 80% de los price-checks: nombre del ítem, mods principales, rareza. Pero cuando estás buscando algo específico — un ring fracturado con un mod particular y un rango exacto de life — el overlay queda corto y de todas maneras te termina abriendo el sitio oficial.

Para builders que comparan múltiples opciones de upgrade o crafters que evalúan bases para crafting, la web es la herramienta primaria. APT es el complemento para el día a día de farmeo.

## Configuración inicial y seguridad

APT requiere instalación con permisos elevados en Windows: el overlay necesita capturar input global (hotkeys mientras el juego está en foco) y leer el clipboard. Los binarios están firmados y el código fuente está en GitHub (es open source), pero igual involucra confiar en un binario third-party con acceso a hooks de sistema. Para muchos usuarios eso es aceptable porque la comunidad lo audita; para una minoría conservadora con su PC (cuentas con saldo de currency real, por ejemplo) puede ser un dealbreaker.

El sitio oficial corre en navegador. Cero instalación, cero permisos especiales, cero superficie de ataque adicional. Es el camino más seguro por default y también el único viable si estás tradeando desde una máquina que no es tuya (LAN party, PC del trabajo en break, laptop ajena).

## Live search y alertas de trade

Para flippers, builders armando un setup específico, o cualquiera que quiera saber cuándo aparece un ítem que coincide con sus filtros, el **live search nativo del sitio oficial** es la feature decisiva. Configuras tu búsqueda, le das al botón de "live" y el sitio dispara notificaciones del browser cuando aparece un nuevo listing. Funciona en background con la pestaña abierta y combinado con sonido del sistema te permite reaccionar en segundos.

APT no replica esto a nivel nativo. Existen herramientas de terceros que se montan sobre la API de trade (PoE Trade Macro, scripts, etc.) que sí proveen live search con hotkeys de whisper directo, pero ya estás en el ecosistema de overlays y vale la pena considerar si justifica la complejidad versus simplemente dejar una pestaña con live abierta.

## Limitaciones y costos

**Limitaciones de APT**:
- Solo funciona con el juego activo y en foco.
- Cada update del cliente de PoE puede romper temporalmente el parsing de ítems hasta que la comunidad publique un patch.
- Algunas leagues con mecánicas nuevas tardan días en tener soporte completo de mods.
- Macros y overlays están permitidos por GGG pero técnicamente son responsabilidad del usuario; cambios futuros de política son posibles.

**Limitaciones del sitio oficial**:
- Rate-limit en búsquedas: si abusas de live searches o queries automatizadas, puedes perder acceso por un rato.
- La UI carga lento cuando la cantidad de listings es muy alta (early league, ítems super baratos).
- Los precios son lo que la gente pide, no lo que vale: requiere experiencia para filtrar listings desactualizados o trolling.

Ambas son gratuitas. APT no tiene tier paid, no tiene ads, no monetiza. El sitio oficial es servicio oficial de GGG y se sostiene del juego.

## En resumen

| Escenario | Mejor elección |
|---|---|
| Price-check de loot en mapas | APT |
| Build research y comparación de upgrades | Sitio oficial |
| Live search para flips | Sitio oficial |
| Trade en máquina ajena o sin instalación | Sitio oficial |
| Identificar 50 ítems después de un map | APT |
| Currency exchange en bulk | Sitio oficial |

La respuesta práctica de la mayoría de jugadores activos es **usar ambas**: APT para el ciclo rápido de play-and-check, sitio oficial cuando se pone serio (live search, búsquedas precisas, builds). No se cancelan, se complementan.

## Veredicto final

Si solo vas a elegir uno, **APT** para jugadores activos en SC trade league y **sitio oficial** para quienes valoran zero-install o tradean menos seguido pero más estratégicamente. La decisión real es cuándo dejar de usar uno solo y agregar el segundo. Para la mayoría de jugadores que pasan más de 10 horas semanales en PoE, ese momento llega rápido y el setup combinado se vuelve estándar.

Si recién empiezas y quieres un solo punto de entrada, arranca por el **sitio oficial** — aprendes cómo funciona el sistema de trade desde la fuente, sin abstracciones — y suma APT cuando empieces a sentir que el alt-tab te está costando tiempo real.
