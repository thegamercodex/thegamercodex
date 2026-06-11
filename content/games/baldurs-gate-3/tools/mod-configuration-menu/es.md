---
title: "Mod Configuration Menu"
description: "Framework que agrega un menú in-game centralizado para configurar mods en BG3. Library de la que dependen muchos mods con opciones."
quickTake: "El panel de control único para todos tus mods configurables. En lugar de editar archivos por cada mod, MCM junta sus opciones en un menú dentro del juego. Si tus mods tienen settings, este es el lugar donde los tocas."
---

## Qué es

Mod Configuration Menu (MCM) es un framework de modding para Baldur's Gate 3 que provee una interfaz in-game centralizada donde los jugadores ajustan las opciones de los mods que la soportan. Se distribuye en Nexus Mods y se apoya en las capacidades del Script Extender.

Es una library mod: no agrega contenido propio, sino que les da a otros mods un lugar consistente donde exponer sus settings. Los autores que integran MCM ahorran tener que armar su propia UI de configuración.

## Qué problema resuelve

Sin un framework común, cada mod configurable resuelve sus opciones a su manera: editar un archivo de texto, usar un item especial in-game, o directamente no ofrecer ajustes. Para el jugador, eso significa un método distinto por mod y cero centralización.

MCM unifica todo eso. Los mods compatibles exponen sus opciones en un único menú dentro del juego, con sliders, toggles y dropdowns. Cambiar el comportamiento de un mod pasa a ser cuestión de abrir MCM y tocar la opción, sin salir del juego ni editar archivos.

## Para qué la usa la gente

**Configurar mods desde un solo lugar**: ajustar settings de todos los mods compatibles en un menú común.

**Evitar edición de archivos**: cambiar opciones con UI en vez de editar configs a mano.

**Soportar mods que dependen de MCM**: muchos mods listan MCM como requisito para sus ajustes.

**Cambiar settings sin reiniciar**: tocar opciones in-game y ver el efecto sin recargar el juego en muchos casos.

## Para quién NO es esta herramienta

Si ninguno de tus mods soporta MCM, instalarlo no aporta nada: es infraestructura que solo cobra valor cuando otros mods la usan.

Si juegas en consola, no aplica: MCM vive en el modding de PC vía Nexus y depende de Script Extender, fuera del catálogo oficial.

## Cómo se usa en la práctica

1. Verifica si algún mod de tu setup pide MCM como dependencia.
2. Confirma que tienes Script Extender instalado, ya que MCM se apoya en él.
3. Descarga MCM desde Nexus y agrégalo en BG3 Mod Manager, por encima de los mods que dependen de él.
4. Instala los mods compatibles con MCM.
5. Abre el menú de MCM dentro del juego para ajustar las opciones.

## Limitaciones honestas

**Requiere Script Extender**: sin BG3SE, MCM no funciona, lo que suma un paso de setup.

**Es dependencia, no contenido**: por sí solo no cambia nada; su valor es habilitar la configuración de otros mods.

**Orden de carga**: debe ir por encima de los mods que lo usan o esos mods no encuentran su panel.

**Solo PC**: sin presencia en consola.

## Cómo empezar

Instálalo cuando un mod lo pida como requisito. Asegúrate primero de tener Script Extender, baja MCM de su página de Nexus y ubícalo en el load order por encima de los mods que dependen de él en BG3 Mod Manager. Una vez en juego, abre el menú de MCM y vas a encontrar ahí las opciones de todos tus mods compatibles.
