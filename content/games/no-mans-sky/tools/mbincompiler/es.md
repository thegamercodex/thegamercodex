---
title: "MBINCompiler"
description: "Tool open-source que decompila archivos .MBIN de No Man's Sky (formato binario propietario de Hello Games) a XML legible y editable, y los recompila tras modificación. Mantenido por monkeyman192 con cadencia rápida tras cada patch del juego."
quickTake: "Es el prerequisite invisible del modding scene de NMS. Si vas a usar mods, no necesitas conocerlo. Si vas a crear mods que tocan logic del juego (no solo texturas), MBINCompiler es lo que abre los archivos. monkeyman192 es de los héroes silenciosos del ecosistema — sin esta tool no habría mod scene."
---

## Qué es

MBINCompiler es un tool de línea de comandos open-source que decompila los archivos `.MBIN` de No Man's Sky a formato XML legible (`.MXML`), permitiendo editarlos en cualquier editor de texto, y los recompila a `.MBIN` tras modificación. Vive en github.com/monkeyman192/MBINCompiler, escrito en C# (corre en Windows, Linux y macOS con .NET).

El proyecto fue iniciado por emoose y ahora lo mantiene monkeyman192. La cadencia de releases sigue el calendario de patches de NMS: tras cada patch grande (que suele cambiar el formato binario), monkeyman saca un release actualizado en cuestión de días o semanas. Esto es crítico — sin compatibilidad con la version actual del juego, no se pueden hacer mods nuevos.

Open source bajo licencia MIT (algo permisiva). Completamente gratis.

## Qué problema resuelve

Hello Games guarda casi toda la lógica del juego (balance, items, recipes, behavior de enemies, drops, sound, world generation seeds) en archivos `.MBIN` binarios. Sin decompilarlos, son bloques opacos. Con MBINCompiler, los abres como XML, modificas campos, recompilas, y NMS los lee como si fueran originales.

Es la abstracción base que hace posibles 90% de los mods de Nexus que no son solo cambios de texturas.

## Diferenciación

Frente a **Nexus Mods**: Nexus es el repo del usuario final. MBINCompiler es la tool del autor de mods. No compiten — son complementarias en el stack.

Frente a herramientas similares: no hay competencia real. MBINCompiler es la única implementación viable porque requiere reverse-engineering constante del formato MBIN propietario de Hello Games. La comunidad coordinó alrededor de este proyecto desde hace años.

Frente a **NMS.py** (también de monkeyman192): NMS.py es un framework Python para inyectar lógica en runtime sin tocar archivos. Distinto caso de uso — NMS.py para experimentación dinámica, MBINCompiler para mods estáticos clásicos.

## Para qué la usa la gente

**Modificar archivos de balance**: drop rates, costs, ship stats. Buscas el .MBIN correcto, decompilas, editas los valores en el XML, recompilas.

**Cambiar comportamiento de fauna**: spawn rates, agresividad, tamaños. Editar el archivo correspondiente en /METADATA.

**Tweakear UI**: text strings, layouts (limitado), colores via los archivos de config.

**Investigar la estructura del juego**: muchos modders empezaron simplemente decompilando archivos para entender cómo NMS estructura datos.

**Validar mods de otros**: si bajas un mod y quieres saber qué cambia, decompilas el .pak y miras el XML.

## Para quién NO es esta herramienta

Si solo quieres usar mods, no es para vos — bajas de Nexus directamente.

Si te incomoda la línea de comandos: MBINCompiler es CLI primero. Hay GUIs comunitarias (AMUMSS la usa internamente) pero el uso directo asume terminal.

Si nunca leíste XML o tocaste config files de juegos antes, hay una curva. La sintaxis de MXML no es fácil sin contexto previo.

Si juegas solo en consola: irrelevante. Modding NMS es PC-only.

## Cómo se usa en la práctica

1. Bajas el último release desde github.com/monkeyman192/MBINCompiler/releases/latest. Verifica que la versión matchea con tu version de NMS — el nombre del release lo indica explícitamente (ejemplo: "MBINCompiler 6.30.0 for NMS 6.30").
2. Extraes el ZIP a una carpeta. Tienes `MBINCompiler.exe` (Windows) o el binario equivalente.
3. Para decompilar, ejecutas: `MBINCompiler.exe convert input.mbin` — produce `input.mxml`.
4. Para recompilar, lo mismo con el .mxml: `MBINCompiler.exe convert input.mxml` — produce `input.mbin`.
5. Para batch: pasas un directorio entero, procesa recursivamente.
6. El flujo típico: extraer el .pak vanilla con `psarc.exe` (de Sony Toolkit), decompilar los .mbin que quieres editar, modificar XML, recompilar a .mbin, repackagear como .pak con orden de carpetas correcto, dropear al MODS folder.

## Limitaciones honestas

**CLI-only**. No hay GUI oficial. La comunidad armó tools encima (AMUMSS por ejemplo) pero el wrapping no es perfecto.

**Necesita .NET runtime**. En Linux y macOS hay que instalar .NET. En Windows está casi siempre disponible.

**Lag tras patches grandes**. Cuando Hello Games cambia el formato binario significativamente, MBINCompiler necesita rebuild. Mientras tanto, no puedes hacer mods nuevos compatibles con esa version.

**Sin documentation extensa**. El README cubre lo básico pero la mayoría del knowledge sobre qué archivos tocar para qué efecto vive en wikis informales y posts de Nexus.

**Riesgo de breakage**. Si recompilas un .mxml editado mal, NMS puede crashear o ignorar el archivo. Hay que probar.

**Single maintainer del fork actual**. monkeyman192 mantiene el fork productivo; pausa = lag para todos los modders.

## Cómo empezar

Vas a github.com/monkeyman192/MBINCompiler/releases/latest y bajas el ZIP correspondiente a tu OS y a la version de NMS que estás corriendo.

Extraes a una carpeta como `C:\nms-modding\mbincompiler\` y agregas esa carpeta al PATH (o ejecutas desde ahí directamente).

Para experimentar, instala psarc.exe (parte del Sony Toolkit, accesible legalmente) o usa AMUMSS que abstrae el flujo.

Empieza con un mod simple: extrae `NMSARC.GLOBAL.MERGED.PAK`, encuentra un .mbin trivial (típicamente `BALANCE/STARSHIPCATALOGUE.MBIN` para variantes de ship), decompila, abre el .mxml en VSCode, cambiá un valor numérico, recompila, empaquétalo de vuelta como .pak en `MODS/`, lanzá NMS y verifica.

Cuando ese flujo funciona, tienes la base para mods más complejos.
