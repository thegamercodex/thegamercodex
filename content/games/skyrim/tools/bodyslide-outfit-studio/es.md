---
title: "BodySlide and Outfit Studio"
description: "Editor open-source para customizar body types (CBBE, UNP, 3BA) y adaptar armaduras al body elegido sin romper el rigging."
quickTake: "Si tu modlist incluye CBBE, UNP o 3BA y armaduras custom, BodySlide es donde unes todo. Sin él, las armaduras no se ajustan al body y aparecen clipping o gaps."
---

## Qué es

BodySlide and Outfit Studio es una suite open-source (GPL-3.0) mantenida por ousnius y Caliente. Distribuida desde Nexus (`nexusmods.com/skyrimspecialedition/mods/201`) y GitHub. Soporta Skyrim Special/Anniversary Edition, Skyrim LE, Fallout 4 y otros juegos con assets de Bethesda.

Está compuesta de dos apps:
- **BodySlide**: editor con sliders. Cargas un preset (body shape) y un set de armaduras compatibles, y la app genera los meshes finales con la forma del body aplicada.
- **Outfit Studio**: editor full de meshes. Permite tomar una armadura, ajustarla a un body type nuevo, fix clipping, conformar mesh, gestionar weights.

## Qué problema resuelve

Skyrim viene con dos body types vanilla (femenino y masculino, sin variaciones). La comunidad creó body replacements: CBBE (Caliente's Beautiful Bodies Edition), UNP, 3BA, HIMBO, etc. Cada uno define un mesh distinto del cuerpo.

El problema: si instalas CBBE, tu PC tiene un body distinto al vanilla, pero las armaduras del juego siguen modeladas para el body original. Resultado: clipping, gaps, armaduras flotando.

BodySlide resuelve esto generando armaduras adaptadas a tu body. Funcionalmente:
- Eliges un preset (ej: CBBE "Vanilla SSE" o un preset custom).
- Marcas "Build" sobre cada armor que tienes instalada.
- BodySlide genera los meshes ajustados, los guarda en la carpeta correcta y sobrescribe los originales.

## Diferenciación

Frente a **instalar mods de body directamente**: muchos mods de body (CBBE, UNP) traen meshes pre-generados para algunas armor sets. Pero solo cubren un body shape específico — si quieres personalizar el shape o adaptar armaduras de terceros, BodySlide es indispensable.

Frente a **Blender / 3ds Max**: editores 3D profesionales son más potentes pero la curva es enorme. BodySlide está optimizado para el workflow de Skyrim — abres, ajustas sliders, "Build", listo.

Frente a **Outfit Studio standalone**: Outfit Studio viene incluido en el pack de BodySlide. Para uso casual usas solo BodySlide; para edición avanzada de meshes nuevos, Outfit Studio.

## Para qué la usa la gente

**Generar armaduras compatibles con CBBE/UNP/3BA**: el use case principal. Instalas un body, instalas armaduras, lanzas BodySlide, "Batch Build" sobre todo. Las armaduras se ajustan al body.

**Crear presets custom de body**: BodySlide tiene sliders para alterar proporciones (busto, cintura, glúteos, peso). Guardas como preset y todas las armaduras se buildean a ese shape.

**Fix clipping en armaduras**: cuando una armor specific no encaja perfecto, abres el .nif en Outfit Studio, ajustas manualmente.

**Convertir armaduras de un body type a otro**: una armadura modelada para UNP puede convertirse a CBBE con Outfit Studio (conform process).

**Crear armaduras nuevas**: si modelaste algo en Blender, Outfit Studio te permite rigging y weighting para llevarlo a Skyrim.

## Para quién NO es esta herramienta

Si juegas con male character y no usas body replacements masculinos custom (HIMBO, SOS), no necesitas BodySlide.

Si juegas con female character pero no instalaste body replacement y te conformas con el vanilla, BodySlide es overhead.

Si modeas Skyrim solo a nivel gameplay (combat overhauls, quest mods) sin tocar cosmetics, BodySlide no aporta.

Si te abruma el concepto de meshes, .nif files, sliders y weights, postergá BodySlide hasta tener una modlist más confortable.

## Cómo se usa en la práctica

1. Decidí body type: CBBE 3BA y CBBE SE son los más populares hoy.
2. Instala el body via Nexus (con MO2 o Vortex).
3. Instala BodySlide and Outfit Studio (`nexusmods.com/skyrimspecialedition/mods/201`).
4. Configura BodySlide como ejecutable en tu mod manager.
5. Instala las armaduras que quieres. Cada mod de armor compatible con CBBE/UNP trae BodySlide files (sliders + reference templates).
6. Lanza BodySlide desde tu mod manager.
7. En el dropdown "Outfit/Body", elige "CBBE Body" (o el body que instalaste).
8. Elige un preset del dropdown "Preset" (vanilla, custom, slider tweaks).
9. Marca "Batch Build" → selecciona todos los outfits → "Build". Espera.
10. Los meshes generados se guardan en `Data/meshes/` (o en el folder del mod en MO2).

## Limitaciones honestas

**El output va a Overwrite en MO2**. Como con Nemesis, BodySlide escribe meshes al Overwrite. Hay que mover a un mod nombrado tipo "BodySlide Output" para que persista.

**No conoce armaduras de Bethesda vanilla por defecto**. Las armaduras del juego base no traen sliders BodySlide. Necesitas un mod tipo "CBBE Vanilla Outfits" que añade los sliders para ellas.

**Outfit Studio tiene curva propia**. Mesh editing real (conform, weight painting, vertex movement) toma horas para entender bien.

**Bone weighting es propenso a errores**. Si modificas manualmente armadura, el riggeo puede romperse: armadura que se deforma raro al caminar. Hay que respetar el bone weight de la referencia.

**Genera muchos archivos**. Cada body build escribe muchos .nif. Modlists con muchas armaduras llegan a varios GB de meshes generados.

## Cómo empezar

1. Instala CBBE (`nexusmods.com/skyrimspecialedition/mods/198`) o tu body type elegido.
2. Instala BodySlide and Outfit Studio.
3. Configura BodySlide.exe como executable en MO2/Vortex.
4. Instala un mod de armor compatible (ej: Immersive Armors o CBBE Vanilla Outfits).
5. Lanza BodySlide, elige preset "Vanilla SSE" o "CBBE Curvy".
6. "Batch Build" → marca todos → "Build".
7. Mueves el Overwrite (en MO2) a un mod "BodySlide Output" y actívalo.
8. Lanza Skyrim, equipa una armor. Debe ajustarse al body shape.

Tutorial estándar: video "BodySlide Tutorial for Skyrim SE" en YouTube cubre el flow completo.
