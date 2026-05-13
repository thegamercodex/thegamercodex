---
title: "Blitz.gg"
description: "Asistente all-in-one para League of Legends con overlay nativo durante champ select y partida, auto-import de builds y runas al cliente, y dashboard post-partida con análisis automatizado."
quickTake: "Si quieres una sola tool que automatice todo el flujo —desde champ select hasta post-game— Blitz es la opción más ambiciosa. A cambio aceptas un cliente desktop pesado, paywall agresivo y telemetría amplia. Para usuarios que valoran convenience por encima de control fino."
---

## Qué es

Blitz.gg es un asistente all-in-one para League of Legends, lanzado en 2018 por Blitz Esports (equipo previamente conocido por contenido editorial y video producción de esports). A diferencia de las tools especializadas que cubren un slice del flujo (Porofessor para champ select, U.GG para builds, OP.GG para match history), Blitz busca ser **el único cliente externo** que un jugador necesita correr.

Su producto principal es una desktop app (Windows y macOS, sin Overwolf — runtime propio) que detecta el estado del cliente de LoL y dispara contextualmente: durante champ select muestra overlay con builds y runas importables a un click; durante la partida muestra info de items y matchup; al terminar dispara dashboard post-game con análisis. También tiene web app (blitz.gg) para consulta dashboard estilo OP.GG.

Tier paga ("Blitz Pro", ~5 USD/mes) desbloquea histórico ampliado, post-game analysis avanzado y remoción de ads. La tier free cubre overlay básico, builds y runas, y dashboard reciente.

## Qué problema resuelve

Hay un perfil de jugador que no quiere fragmentar su flujo entre 4 tools (una para builds, una para scout, una para history, una para coaching). Quiere abrir el cliente, jugar, y que todo lo demás sea automático: que la build se cargue sola, que las runas se importen sin click extra, que el scout aparezca cuando entra a champ select, y que al terminar tenga un resumen ya armado.

Blitz cubre exactamente ese perfil. La inversión técnica está en la integración con el cliente y la automation — no es la herramienta con la data más profunda, ni la con builds más curadas, ni la con coaching más estructurado, pero es la que **menos fricción operativa** tiene una vez instalada.

## Para qué la usa la gente

**Auto-import de builds y runas a un click**: caso de uso central. Durante champ select, Blitz detecta tu pick y muestra build/runas; con un botón importas directo al cliente, sin copiar manualmente.

**Overlay durante partida**: stats en tiempo real del matchup, recordatorios de power spikes, info de items recomendados según situación.

**Post-game dashboard automático**: al terminar la partida, Blitz dispara una pantalla con resumen, KDA comparativo, recommendations de mejora, y guarda histórico.

**Match history estilo OP.GG**: como funcionalidad complementaria, perfil de summoner con histórico, accesible desde la web sin necesidad de la desktop app.

**Champ select scouting**: similar a Porofessor — info de teammates y oponentes en el lobby, aunque Porofessor sigue siendo el specialist en este nicho específico.

## Para quién NO es esta herramienta

Blitz es ambicioso en scope pero no es la opción correcta si:

- **Prefieres web puro sin instalar cliente desktop** → OP.GG cubre match history y U.GG cubre builds desde el navegador, sin runtime extra ni telemetría de la app.
- **Solo quieres ayuda específica en champ select** → Porofessor es más liviano y especializado, sin el resto del feature creep.
- **Quieres coaching estructurado y mejora a largo plazo** → Mobalytics tiene el GPI con framework de improvement; Blitz hace post-game analysis pero más superficial.
- **Te molesta la telemetría amplia o no quieres depender de Pro tier para features avanzadas** → el modelo de monetización de Blitz es notablemente más empujado que op.gg / Porofessor.

## Cómo se usa en la práctica

1. Vas a `blitz.gg` y descargas la desktop app (Windows o macOS).

2. Instalas y permites que se integre con el cliente de LoL. La primera vez te pide login (Riot ID o cuenta Blitz).

3. La app corre en background. Cuando abres el cliente de LoL y entras a champ select, Blitz dispara automáticamente el overlay con build y runas para tu pick.

4. Click en "Import" envía build y runas directo al cliente — no tienes que copiar manualmente ni cambiar de ventana.

5. Durante la partida, puedes invocar el overlay para ver stats actuales y recomendaciones de items según el matchup.

6. Al terminar la partida, Blitz dispara automáticamente el dashboard post-game con análisis y guarda el match en histórico.

7. Web app (blitz.gg) funciona en paralelo para consulta sin desktop app.

Configuración recomendada: deja la desktop app en startup para que esté disponible sin intervención manual.

## Limitaciones honestas

**Paywall agresivo**: Blitz Pro empuja con popups, banners y features bloqueadas que aparecen como teasers en la versión gratuita. Más visible que op.gg / Porofessor / U.GG. Ignorable, pero molesto.

**Telemetría amplia**: la desktop app tiene runtime propio que captura signals del cliente de LoL para alimentar features (auto-detección, recomendaciones contextuales). Privacy policy es legible pero el footprint de tracking es mayor que el de tools web-first. Para usuarios sensibles a telemetría, esto es un trade-off real.

**Footprint del sistema**: la app pesa más en RAM y disco que Porofessor o que la web app de op.gg. En setups con specs limitadas, esto se nota.

**Builds y runas son derivadas, no curadas**: Blitz agrega data automáticamente como U.GG/Lolalytics, pero no tiene curación editorial pesada. Para meta complejo (champions con builds situacionales fuertes), las recomendaciones pueden ser genéricas.

**Dependencia de la app para el value real**: la web app cubre solo dashboard y match history. El verdadero diferencial (auto-import, overlay, post-game) requiere instalar la desktop app. Si tu objetivo es uso casual ocasional, no compensa.

## Cómo empezar

1. Descarga la desktop app desde `blitz.gg` (Windows o macOS).

2. Instala y aceptá los permisos de integración con el cliente de LoL. Login con Riot ID.

3. La primera vez que abras champ select, Blitz dispara overlay automáticamente. Prueba importar runas y build a un click para validar la integración.

4. Configurá la app para arranque con el sistema si planeas usarla en cada sesión — eso elimina toda fricción manual.

5. Si después de 1-2 semanas sientes que la automation justifica la complejidad, considera Pro tier. Si sientes que el overlay molesta más de lo que ayuda, desinstalala y vuelve a tools especializadas (op.gg + U.GG + Porofessor cubren funciones equivalentes con menos overhead).

6. Para uso puro de match history desde web sin instalar cliente, mantenete con op.gg — Blitz no aporta valor diferencial en ese modo.
