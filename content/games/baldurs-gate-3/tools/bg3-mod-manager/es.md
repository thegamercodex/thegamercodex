---
title: "BG3 Mod Manager"
description: "Gestor de mods de Baldur's Gate 3 para PC, open source, que ordena el load order y exporta a modsettings.lsx. Mantenido por LaughingLeader."
quickTake: "El gestor de referencia para modear BG3 en serio. Maneja el load order de los mods .pak con un control que el gestor in-game no da, e instala el Script Extender con un click. Si vas más allá de un par de mods cosméticos, lo vas a querer."
---

## Qué es

BG3 Mod Manager (BG3MM) es la herramienta open source de gestión de mods para Baldur's Gate 3 mantenida por LaughingLeader. Su única fuente oficial es el repositorio de GitHub. Está construido sobre .NET 8 y soporta las versiones Patch 7 y Patch 8 del juego.

Su función central es administrar el orden de carga de los mods en formato .pak: los activas, los ordenas arrastrando, y BG3MM exporta el resultado al archivo `modsettings.lsx` que el juego lee al arrancar. También incluye un atajo para descargar e instalar el Script Extender directo desde el repo de Norbyte.

## Qué problema resuelve

Los mods de BG3 con dependencias entre sí o que tocan los mismos sistemas necesitan un orden de carga correcto, o el juego crashea o ignora mods en silencio. Hacer eso a mano, editando archivos, es propenso a errores.

BG3MM te da una interfaz visual donde ves todos tus mods, los reordenas con drag and drop y exportas un load order válido sin tocar texto crudo. Para setups de más de unos pocos mods, es la diferencia entre un juego estable y horas de debugging.

## Diferenciación

Frente al soporte oficial de mods (mod.io), BG3MM da control fino sobre el load order y maneja mods .pak que no están en el catálogo curado de Larian, incluidos los que dependen de Script Extender. El oficial es más simple y cross-platform; BG3MM es para el usuario de PC que quiere el control completo.

Frente a Vortex, BG3MM es dedicado a BG3, mientras Vortex es un gestor multi-juego. BG3MM tiende a sentirse más afinado para las particularidades de BG3; Vortex gana si ya gestionas varios juegos desde una sola app.

## Para qué la usa la gente

**Ordenar el load order**: activar y reordenar mods .pak con control visual preciso.

**Exportar a modsettings.lsx**: generar el archivo de configuración que el juego necesita, sin editarlo a mano.

**Instalar el Script Extender**: bajar la versión correcta para el patch vigente con la opción integrada.

**Importar y exportar orders**: compartir un load order completo o respaldarlo antes de un cambio grande.

**Integrar mods de mod.io**: leer entradas existentes del gestor oficial y unificarlas en un solo orden.

## Para quién NO es esta herramienta

Si juegas en consola, BG3MM no es una opción: el único modding soportado ahí es el oficial vía mod.io. BG3MM es exclusivo de PC.

Si solo quieres un par de mods sencillos y no te interesa el control fino, el gestor in-game oficial es más simple y suficiente. BG3MM brilla cuando el setup crece.

## Cómo se usa en la práctica

1. Descarga la última release desde el GitHub de LaughingLeader.
2. Apunta BG3MM a la carpeta de instalación de BG3.
3. Baja los mods .pak desde Nexus y agrégalos al panel de mods.
4. Reordena el load order respetando dependencias (frameworks primero).
5. Usa Tools para instalar el Script Extender si tus mods lo requieren.
6. Exporta el orden a modsettings.lsx y lanza el juego.

## Limitaciones honestas

**Curva de aprendizaje**: entender load order, dependencias y Script Extender lleva un rato; no es plug and play como el oficial.

**Solo Windows**: no hay versión de consola ni soporte nativo fuera de PC.

**Atado al patch**: tras una actualización de Larian, el Script Extender y algunos mods necesitan actualizarse; el manager ayuda pero no elimina el mantenimiento.

**Distribución community**: la única fuente segura es el GitHub oficial. Hay sitios que reempaquetan el manager; bajar de ahí es un riesgo innecesario.

## Cómo empezar

Baja la release desde el repositorio oficial de LaughingLeader en GitHub, no de mirrors. Apunta el manager a tu carpeta de BG3, importa tus primeros mods .pak y familiarízate con el panel de orden. Para tu primer setup, mantén pocos mods, verifica que el juego arranca, y recién después escala. La BG3 Modding Community Wiki tiene la guía de load order de referencia.
