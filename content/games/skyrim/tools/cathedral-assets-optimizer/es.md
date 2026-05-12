---
title: "Cathedral Assets Optimizer"
description: "Optimizador open-source para texturas, meshes y animaciones de Skyrim — convierte assets LE a formato SE y comprime para mejor performance."
quickTake: "Cuando portás un mod de Skyrim LE a SE o cuando una modlist consume demasiada VRAM, CAO es la herramienta de optimización. Batch processing rápido y resultados consistentes."
---

## Qué es

Cathedral Assets Optimizer (CAO) es un optimizer open-source (GPL-3.0) mantenido por G_k. Distribuido vía Nexus (`nexusmods.com/skyrimspecialedition/mods/23316`) y GitHub. Soporta Skyrim Special/Anniversary Edition, Skyrim LE, Fallout 4 y otros juegos de Bethesda.

Procesa tres tipos de assets:
- **Textures (.dds)**: comprime con BC7, downsamples si la resolución es excesiva, fix mipmaps.
- **Meshes (.nif)**: convierte format LE → SE (la geometría es igual pero el binary header difiere), optimiza estructura.
- **Animations (.hkx)**: convierte LE → SE.

## Qué problema resuelve

Dos problemas concretos:

**1. Convertir mods LE a SE**: muchos mods buenos solo tienen versión LE (Skyrim original, 2011-2016). Para usarlos en SE/AE, los meshes y animations tienen que convertirse al formato nuevo. Sin conversión, el juego crashea al cargar el mod.

**2. Reducir VRAM**: modlists con texturas 4K consumen GB de VRAM. CAO puede downsampling a 2K manteniendo calidad visual, recompresión a BC7 (formato moderno más eficiente), y fix de mipmaps mal generados.

Ambos son problemas que la mayoría de modders enfrenta tarde o temprano.

## Diferenciación

Frente a **NIF Optimizer (legacy)**: NIF Optimizer es predecesor — solo optimiza meshes y conversión LE→SE. CAO es el reemplazo moderno con scope ampliado.

Frente a **paint.net / Photoshop manual**: para optimization de una sola texture, herramientas de imagen funcionan. Para batch processing de cientos de archivos, CAO es radicalmente más rápido.

Frente a **DDSopt / GIMP scripts**: scripts custom funcionan si sabes programar. CAO es la GUI estándar de la comunidad para users no-coders.

## Para qué la usa la gente

**Portar mods LE → SE**: el use case más común. Bajas un mod LE que no tiene versión SE, lo metes en CAO, batch process, output usable en SE.

**Optimizar texturas pesadas**: tienes HD texture packs que comen 8 GB de VRAM. CAO los recompresa con BC7 (mejor relación calidad/peso) y opcionalmente downsamplea a resolución más razonable.

**Fix mipmaps malos**: texturas sin mipmaps generan shimmering a distancia. CAO genera mipmaps correctos automáticamente.

**Reducir tamaño total de modlist**: para modlists pesadas (50+ GB), CAO puede achicar significativamente el footprint en disco.

**Pre-process antes de subir mods**: modders que publican sus mods usan CAO para entregar texturas/meshes en el format más eficiente.

## Para quién NO es esta herramienta

Si tu modlist es chica y tu VRAM es suficiente, CAO es overhead — no hace falta optimization.

Si te importa preservar la calidad visual exacta de cada texture al 100% (modding photoreal extremo), CAO con downsampling puede degradar imperceptible o no — verifica comparando antes/después.

Si solo trabajas con Skyrim SE puro (no portás de LE), la mitad de las features de CAO no aplican.

## Cómo se usa en la práctica

1. Baja CAO desde Nexus (`nexusmods.com/skyrimspecialedition/mods/23316`).
2. Extrae en una carpeta dedicada (NO Program Files).
3. Lanza `Cathedral Assets Optimizer.exe`.
4. En "General settings": elige tu mode (Skyrim SE), selecciona la carpeta input (un mod sin procesar).
5. En "Texture" / "Mesh" / "Animation" tabs: configura qué optimizaciones quieres (compresión, resampling, formato).
6. Cliquea "Run" → CAO procesa todos los archivos del input folder.
7. Output: la carpeta original se sobrescribe (hay backup option) o se genera en otra carpeta según config.
8. Si era para SE conversion, metes el output como mod en MO2 y testeas.

Workflow típico para conversion LE→SE: input es la carpeta del mod LE descomprimido, output es un mod nuevo "MyMod-SE".

## Limitaciones honestas

**No garantiza que el mod funcione**. CAO convierte formatos. Si un mod usa scripts Papyrus específicos de LE que no existen en SE, CAO no resuelve eso — solo arregla los assets.

**Settings opacos**. Los settings de optimization tienen muchos parámetros (compression formats, resampling filters, etc.). Sin background técnico, elegir bien toma tiempo.

**Downsampling es lossy**. Si downsampleas una texture 4K a 2K para ahorrar VRAM, pierdes detalle. La elección es trade-off, no gratis.

**Batch processing de modlist completa puede tardar mucho**. Una modlist con 50 GB de assets puede tardar 1-3 horas en CAO.

**Bugs ocasionales en versions nuevas**. Como cualquier OSS chico, releases nuevos a veces traen regressions. Quedarse en una version estable conocida es seguro.

## Cómo empezar

1. Baja CAO desde Nexus.
2. Extrae en `C:\Modding\CAO\`.
3. Identificá un mod LE que quieres portar a SE.
4. Descomprimí el ZIP del mod en una carpeta input.
5. Lanza CAO, configura mode Skyrim SE, point a la input folder.
6. Settings recomendados para conversion: "Necessary optimization" + Mesh enabled + Texture optional.
7. Run. Output será un mod portado a SE.
8. Metelo en MO2, activá, prueba in-game.

Para optimization de modlist existente, hay guides específicas en `r/skyrimmods` sobre balance de quality vs VRAM.
