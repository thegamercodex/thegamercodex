---
title: "Baldur's Gate 3 Script Extender"
description: "Runtime hook de Norbyte que expone funciones internas de BG3 a los mods. Dependencia base de buena parte del modding avanzado."
quickTake: "El cimiento invisible del modding avanzado de BG3. No hace nada por sí solo, pero medio ecosistema de mods con lógica real no arranca sin él. Si un mod pide Script Extender, no es opcional."
---

## Qué es

Baldur's Gate 3 Script Extender (BG3SE) es un runtime hook desarrollado por Norbyte que expone funcionalidad interna del juego al código de los mods. Es open source y se distribuye desde el repositorio de GitHub de Norbyte y como entrada en Nexus.

En concreto, BG3SE permite que los mods ejecuten lógica en Lua y accedan a sistemas del juego que el modding básico no toca. Por eso es una dependencia: muchos mods no agregan archivos sin más, sino que necesitan este puente para correr su código.

## Qué problema resuelve

El modding de solo datos (cambiar valores, agregar items) tiene un techo. Los mods que cambian comportamiento real —nuevas mecánicas, lógica condicional, sistemas que reaccionan al estado del juego— necesitan ejecutar código, y el juego base no expone esa puerta.

Script Extender abre esa puerta. Es lo que separa los mods cosméticos de los mods que de verdad alteran cómo funciona BG3. Sin BG3SE, una franja entera del ecosistema simplemente no existiría.

## Para qué la usa la gente

**Habilitar mods avanzados**: cualquier mod que ejecute lógica en Lua lo requiere como base.

**Soportar frameworks**: herramientas como Mod Configuration Menu se apoyan en las capacidades que expone BG3SE.

**Acceder a sistemas internos**: los autores de mods usan la API para interactuar con mecánicas que el modding de datos no alcanza.

**Mantener compatibilidad por patch**: el manager descarga la versión de BG3SE que corresponde al build vigente del juego.

## Para quién NO es esta herramienta

Si solo quieres mods cosméticos —skins, reemplazos visuales, ajustes de UI simples— probablemente no necesites Script Extender; muchos de esos mods funcionan sin él.

Si juegas en consola, BG3SE no aplica: el modding de consola pasa por el catálogo oficial de mod.io, que no incluye mods dependientes de Script Extender.

## Cómo se usa en la práctica

1. Confirma que algún mod de tu setup pide Script Extender.
2. Usa BG3 Mod Manager: Tools → Download & Extract Script Extender, que baja la versión correcta para tu patch.
3. Alternativamente, instala manualmente los archivos del repo de Norbyte en la carpeta bin del juego.
4. Verifica que la consola de Script Extender aparece al arrancar el juego con los mods activos.
5. Tras cada actualización de Larian, vuelve a descargar la versión actualizada.

## Limitaciones honestas

**Atado al build del juego**: una versión de BG3SE compilada para un patch no funciona en otro. Tras un update hay que actualizarla o los mods que dependen de ella fallan.

**No hace nada solo**: es infraestructura; sin mods que lo usen, no aporta nada visible.

**Setup técnico**: aunque el manager lo simplifica, sigue siendo un componente que el jugador casual puede encontrar intimidante.

**Solo PC**: sin presencia en consola.

## Cómo empezar

La forma más segura es dejar que BG3 Mod Manager lo instale por ti: Tools → Download & Extract Script Extender trae la versión firmada correcta desde el GitHub de Norbyte. Después de instalarlo, arranca el juego con tus mods y confirma que la consola de BG3SE aparece. Recuerda reactualizarlo cada vez que Larian publique un patch nuevo.
