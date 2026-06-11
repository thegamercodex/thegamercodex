---
title: "ImpUI (ImprovedUI)"
description: "Framework de UI para BG3 que estabiliza y extiende la interfaz. Requisito de muchos mods de razas, clases y elementos de UI."
quickTake: "El framework de UI que medio ecosistema de mods de razas y clases da por sentado. Se carga primero en el load order y sin él muchos mods de contenido muestran la interfaz rota. Infraestructura, no contenido."
---

## Qué es

ImpUI (ImprovedUI) es un framework de interfaz para Baldur's Gate 3 que expande y estabiliza la UI del juego para que otros mods puedan integrarse sin romperla. Se distribuye en Nexus Mods y es una de las dependencias más comunes del modding de contenido.

Su rol es de base: no agrega gameplay por sí mismo, sino que prepara la interfaz para que mods de razas, clases y otros elementos de UI puedan inyectar sus opciones sin generar conflictos ni layouts rotos.

## Qué problema resuelve

Cuando un mod agrega una raza o una clase nueva, tiene que mostrarla en la pantalla de creación de personaje. Si varios mods tocan la misma UI sin un marco común, la interfaz se rompe: opciones que no aparecen, listas cortadas, menús superpuestos.

ImpUI provee ese marco común. Estandariza cómo los mods extienden la UI, de modo que múltiples mods de contenido conviven sin pelearse por la interfaz. Por eso tantos mods lo listan como requisito.

## Para qué la usa la gente

**Habilitar mods de razas y clases**: la mayoría requiere ImpUI para mostrar sus opciones en creación de personaje.

**Evitar UI rota**: mantener la interfaz estable cuando varios mods de contenido coexisten.

**Servir de base de carga temprana**: se ubica al principio del load order como dependencia de los mods que vienen después.

**Soportar elementos de UI personalizados**: dar a los autores un marco para inyectar interfaz sin reinventarla.

## Para quién NO es esta herramienta

Si no usas mods que toquen la UI —solo cambios de balance, items o ajustes que no agregan opciones a los menús— puede que no necesites ImpUI. Instálalo solo si algún mod lo pide.

Si juegas en consola, no aplica: estos frameworks viven en el modding de PC vía Nexus, fuera del catálogo oficial.

## Cómo se usa en la práctica

1. Verifica si algún mod de tu setup lista ImpUI como requisito.
2. Descarga ImpUI desde su página de Nexus Mods.
3. Agrégalo en BG3 Mod Manager y ubícalo temprano en el load order.
4. Instala después los mods de contenido que dependen de él.
5. Confirma en creación de personaje que las opciones nuevas aparecen bien.

## Limitaciones honestas

**Es dependencia, no contenido**: por sí solo no cambia nada visible; su valor es habilitar a otros mods.

**Orden de carga sensible**: si no se carga temprano, los mods que dependen de él fallan; el load order importa.

**Atado al patch**: tras updates de Larian, puede requerir actualización para seguir siendo compatible.

**Solo PC**: sin presencia en consola.

## Cómo empezar

No lo instales por las dudas: agrégalo cuando un mod concreto lo pida como requisito. Bájalo de su página oficial de Nexus, ponlo al principio de tu load order en BG3 Mod Manager, y luego instala los mods de contenido que lo necesitan. Si la pantalla de creación de personaje muestra las opciones nuevas sin glitches, está funcionando.
