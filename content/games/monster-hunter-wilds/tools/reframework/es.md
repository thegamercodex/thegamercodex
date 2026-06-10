---
title: "REFramework"
description: "Framework de modding open-source para juegos RE Engine, incluido Monster Hunter Wilds, con una API de scripting en Lua sobre la que corren overlays y mods de la comunidad."
quickTake: "La base del modding en PC. No es una tool de uso directo: es el cimiento sobre el que corren HunterPie y la mayoría de los mods. Si vas a modear Wilds, empiezas acá."
---

## Qué es

REFramework es un framework de modding open-source (licencia MIT, repo de praydog) para juegos construidos con el RE Engine de Capcom, incluido Monster Hunter Wilds. Provee una API de scripting en Lua y un sistema de inyección que permite a otros mods hookear el juego. Es gratis y es la infraestructura sobre la que se apoya buena parte del ecosistema de mods de PC.

## Qué problema resuelve

Sin un framework común, cada mod tendría que reinventar cómo accede a la memoria y a las funciones del juego. REFramework estandariza eso: ofrece una capa estable para que los modders escriban scripts y overlays sin pelear con los internos del motor. Para el jugador, significa que herramientas como HunterPie y muchos QoL mods tienen un cimiento sobre el que funcionar.

## Diferenciación

No compite con HunterPie ni con un mod manager: los habilita. HunterPie es la aplicación que ves; REFramework es lo que le permite leer el estado del juego. Fluffy Mod Manager organiza e instala mods; REFramework es la base técnica que muchos de esos mods requieren. Es infraestructura, no producto final.

## Para qué la usa la gente

- **Base para overlays**: habilitar HunterPie y otros overlays que leen estado del juego.
- **Correr scripts Lua**: usar mods de QoL escritos sobre su API.
- **Menú de desarrollador**: acceder a herramientas de debug e inspección in-game.
- **Cimiento de modding**: requisito previo de buena parte del catálogo de mods.

## Para quién NO es esta herramienta

Jugadores de consola no pueden usarlo. Si no vas a instalar mods, no lo necesitas. Y si esperas una interfaz pulida lista para usar, esto es una capa técnica: su valor está en lo que habilita, no en una UI propia.

## Cómo se usa en la práctica

1. Descarga REFramework desde el repo de praydog (la build que corresponda a Wilds).
2. Coloca el archivo (típicamente `dinput8.dll`) en la carpeta donde está el ejecutable del juego.
3. Inicia el juego: el framework se carga junto a él.
4. Instala los mods u overlays que dependen de él.
5. Actualiza el framework tras cada patch grande del juego.

## Limitaciones honestas

- **Solo PC**: no aplica a consolas.
- **Uso indirecto**: su valor es habilitar otros mods, no una función propia para el jugador casual.
- **Frágil tras patches**: el anti-tamper del juego puede romper compatibilidad hasta que se actualice; han existido reportes de crashes.
- **Riesgo de mods online**: usar mods en multiplayer público conlleva riesgos; respeta las reglas del juego.

## Cómo empezar

Descarga la build de REFramework para Wilds desde el GitHub de praydog y colócala en la carpeta del juego. Si lo que quieres es un overlay, un mod manager como Fluffy simplifica instalar el framework y los mods juntos.
