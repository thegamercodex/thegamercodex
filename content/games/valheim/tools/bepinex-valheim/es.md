---
title: "BepInExPack Valheim"
description: "Pack pre-configurado de BepInEx 5 — el framework de inyección de plugins para juegos Unity — adaptado específicamente a Valheim."
quickTake: "Si quieres correr cualquier mod en Valheim, BepInEx tiene que estar instalado. No es opcional: es la pieza que carga los DLLs de los mods al iniciar el juego. Cualquier mod manager moderno lo instala automáticamente."
---

## Qué es

BepInEx (Bepis Injector Extensible) es un framework de modding open-source para juegos Unity. Inyecta un loader al binario del juego que carga DLLs externos como "plugins" al arrancar. Existe desde 2018, soporta cientos de juegos Unity, y es mantenido por un equipo abierto.

**BepInExPack Valheim** es la versión pre-configurada para Valheim, empaquetada por denikson y mantenida hoy por Azumatt, Vapok y Margmas en la comunidad de Valheim. Incluye la versión correcta de BepInEx 5 (actualmente 5.4.23.x) con `doorstop_config.ini` ya ajustado a Valheim, plus parches específicos para mejorar compatibilidad y performance en este juego en particular.

## Qué problema resuelve

Valheim no tiene API oficial de mods. Sin BepInEx, modear el juego implicaría:
- Editar el binario del juego (assembly patching manual).
- Cada mod tendría que reinventar cómo inyectarse.
- Mods serían incompatibles entre sí porque cada uno hace su patch.

BepInEx resuelve eso siendo el **único punto de entry**:
- Un solo patch al binario del juego (`winhttp.dll` redirige a `BepInEx/core/`).
- Define una API de plugins que cualquier mod puede usar.
- Provee `Harmony` (patcher de runtime) y un ConfigurationManager (UI in-game para configurar mods).
- Mods siguen una convención uniforme: DLL en `BepInEx/plugins/`, hereda de `BaseUnityPlugin`.

Sin BepInEx, el ecosistema de mods de Valheim no existiría.

## Diferenciación

No hay competidor real. BepInEx es **el estándar de facto** del modding en juegos Unity de la última década (Risk of Rain 2, Lethal Company, REPO, Valheim, Subnautica, y cientos más).

Alternativas históricas como **Unity Mod Manager** existen pero no se usan en Valheim. Para juegos no-Unity (Skyrim, Cyberpunk), el framework equivalente es otro (SKSE para Skyrim, Cyber Engine Tweaks para CP77).

La única "elección" práctica para alguien modeando Valheim es: instalar BepInEx automáticamente vía r2modman/Gale/TMM (recomendado), o manualmente bajándolo de Thunderstore y desempaquetando en la carpeta del juego.

## Para qué la usa la gente

**Correr cualquier mod en Valheim**. Sin BepInEx, cero mods funcionan. Por eso todos los managers lo instalan automáticamente como dependencia.

**Configurar mods in-game**. Si un mod usa ConfigurationManager (la mayoría lo hace), aprietas F1 in-game y aparece un panel con todos los toggles, sliders y dropdowns de cada mod cargado.

**Logs de debug**. Cuando algo rompe, los logs de BepInEx en `BepInEx/LogOutput.log` muestran qué mod cargó, qué falló y por qué. Para troubleshoot, ese log es lo primero que mira la comunidad.

**Desarrollar mods**. Si quieres escribir tu propio mod, el SDK de BepInEx + Jotunn como librería de abstracción son el punto de partida estándar.

## Para quién NO es esta herramienta

No aplica el filtro "no es para ti" — si modeas Valheim, **BepInEx es obligatorio**. La pregunta no es si instalarlo, es cómo (manager o manual).

Si NO modeas Valheim y solo quieres jugar vanilla: no toques BepInEx. Instalarlo sin propósito agrega un loader inyectado que arranca con el juego y puede causar conflicts con anti-cheats de OTROS juegos en la misma PC (no hay anti-cheat en Valheim, pero por hábito de cleanliness, mejor solo si vas a modear).

## Cómo se usa en la práctica

**Vía mod manager (recomendado)**:
1. r2modman/Gale/TMM detectan automáticamente que BepInEx no está instalado al activar el primer mod.
2. Lo descargan y desempaquetan en la carpeta del juego sin intervención del usuario.
3. Cuando lanzas el juego desde el manager, BepInEx se carga y vas a ver la consola negra abrirse antes del juego mostrando los plugins cargados.

**Manualmente**:
1. Anda a `valheim.thunderstore.io/package/denikson/BepInExPack_Valheim/`.
2. Descarga el ZIP de la última versión.
3. Extrae el contenido en la carpeta donde está `valheim.exe` (típicamente `C:\Program Files (x86)\Steam\steamapps\common\Valheim\`).
4. Asegúrate de que el archivo `winhttp.dll` queda en esa carpeta — esa es la pieza que inyecta BepInEx.
5. Lanza Valheim normalmente desde Steam. La consola negra de BepInEx debería abrirse antes del juego.

## Limitaciones honestas

**Requiere espacio en disco**. ~50MB para la base de BepInEx + plugins. Tu carpeta `BepInEx/` puede crecer rápido con muchos mods cargados.

**Compatibilidad con parches del juego**. Cuando Iron Gate lanza un patch grande (Ashlands, Call to Arms), BepInEx puede no funcionar hasta que denikson y la comunidad ajusten el pack. Típicamente toma 1-3 días. Mientras tanto, mods rotos y la community reporta workarounds en el Discord.

**Conflicts con software de seguridad**. Algunos antivirus marcan a BepInEx como sospechoso por la inyección. False positive — el código es OSS, auditable — pero a veces hay que añadir excepción manual a Defender o similar.

**Logs verbosos**. `LogOutput.log` puede crecer a varios MB en sesiones largas con muchos mods. La comunidad recomienda limpiarlo entre sesiones para mantenerlo legible.

## Cómo empezar

**Si usas un mod manager (r2modman, Gale, TMM)**: no hagas nada manual. Instala tu primer mod y el manager se encarga.

**Si modeas a mano**:
1. Backup de tu carpeta de Valheim por si algo sale mal.
2. Descarga BepInExPack Valheim de Thunderstore.
3. Extrae en la carpeta del juego.
4. Lanza Valheim — si la consola negra aparece y dice "BepInEx 5.x.x.x" en la primera línea, está instalado correctamente.
5. Cualquier mod que descargues va en `BepInEx/plugins/<nombre-del-mod>/` con su DLL adentro.

Para guías más detalladas, el wiki oficial de BepInEx (`docs.bepinex.dev`) y la doc de Jotunn (`valheim-modding.github.io/Jotunn/`) cubren instalación, troubleshooting y desarrollo de mods.
