---
title: "Warcraft Logs"
description: "El servicio canónico de logging y análisis de raids en WoW desde 2014. Sube combat logs, los parsea boss por boss, calcula percentiles globales y mantiene leaderboards históricos por spec, encounter y temporada."
quickTake: "Si tu guild raidea Mythic en serio, Warcraft Logs no es opcional. Es la infraestructura sobre la que viven WoWAnalyzer, Wipefest y la conversación entera del raid PvE. El Premium tier termina siendo prácticamente obligatorio si quieres exprimirlo."
---

## Qué es

Warcraft Logs (warcraftlogs.com) es el servicio dominante de combat logging para WoW. Lanzado en 2014 por Kihra, parsea combat logs subidos por los players y los convierte en reportes navegables: damage done, healing taken, deaths, interrupts, dispels, cooldown usage, posicionamiento de mecánicas — todo lo que el archivo de log captura.

El sitio mantiene además rankings globales por encounter, difficulty y spec. Cada parse se compara con la distribución mundial (de 0 a 100 percentil), y los top performers aparecen en leaderboards públicos. Ese percentil es la métrica de referencia que las guilds usan para evaluar candidatos al recruit.

Warcraft Logs es propiedad de Fanbyte (ZAM Network LLC), subsidiaria de Tencent — el mismo grupo corporativo que opera WoWHead. La integración entre ambos sitios es real (links cruzados, stats compartidas) pero las dos plataformas operan equipos editoriales separados.

## Qué problema resuelve

WoW genera un archivo de combat log enorme cada raid (cada hechizo casteado, cada daño aplicado, cada heal, cada cooldown, cada muerte, con timestamp). Sin parsing, ese archivo es ilegible. Antes de Warcraft Logs había varios parsers (WowMeterOnline, WoL, etc.) pero ninguno consolidó.

Warcraft Logs resolvió tres problemas a la vez: subida automática vía addon (WarcraftLogs Uploader o ARL), parsing rápido con UI navegable, y comparación contextual contra el resto del mundo. Eso último es clave: saber que hiciste 500k DPS no significa nada hasta que ves que el percentil 50 del boss en tu spec es 480k y el percentil 99 es 720k.

Para guilds en progresión, los logs son el debrief obligatorio post-raid. Para players individuales, el percentil es feedback directo de cómo está su rotación, gear y uso de cooldowns vs. el resto de su spec a nivel global.

## La diferencia con WoWAnalyzer y Wipefest

Las tres viven en el cluster `raid-logs` pero hacen cosas distintas:

- **Warcraft Logs** es **el motor**: la base de datos crudo + parser + rankings. Sin él, los otros dos no existen — ambos consumen logs subidos a Warcraft Logs.
- **WoWAnalyzer** es **análisis automatizado por spec**: Lee tu log y te dice "usaste este cooldown 12 segundos tarde", "este buff tuvo 78% uptime y deberías estar en 92%", con sugerencias accionables.
- **Wipefest** es **análisis de mecánicas y wipes**: por qué murió la raid, qué mecánica falló, qué jugador no salió a tiempo de un AoE.

Para review individual: WoWAnalyzer. Para review de raid leadership / mecánicas: Wipefest. Para data crudo y leaderboards: Warcraft Logs. La mayoría de guilds Mythic los usan los tres.

## Para qué la usa la gente

**Review post-raid de tu propia performance**: Abres tu log, ves tu percentil por boss, comparas con el top de tu spec, identificas dónde perdiste DPS o uptime.

**Review de la guild para raid leaders**: timeline completo de la pelea, deaths con causa, daño taken, cooldown coverage, identificación de gaps en mitigation.

**Recruiting**: las guilds piden link a tu Warcraft Logs como CV. El percentil promedio en el current tier es el filtro más usado para entrevistas.

**Theorycrafting**: comparar parses top-100 de una spec para ver qué builds, talents y rotaciones están funcionando en práctica vs. en simulación.

**Debugging de wipes**: en un wipe inesperado, el log dice exactamente quién murió primero, por qué, y qué cadena de eventos lo causó.

## Para quién NO es esta herramienta

- **Players casuales que no raidean Mythic**: el setup (instalar addon, subir logs, leer percentiles) es overhead innecesario si solo haces LFR o Heroic puntuales.
- **PvP-only**: Warcraft Logs cubre PvE. Para arena, ataques específicos a stats de PvP, hay otras tools.
- **Mythic+ tracking**: aunque WCL parsea M+ logs, la herramienta dominante para M+ es Raider.IO.
- **Análisis automatizado paso-a-paso**: para "qué hago para mejorar concretamente", WoWAnalyzer es más directo. WCL te da el dato; WoWAnalyzer te da la sugerencia.

## Cómo se usa en la práctica

1. Instalas el addon **Advanced Combat Logging** (ya viene con WoW: `/console combatLogVersion 2`) o el companion app de WoW.

2. Activas logging in-game con `/combatlog` (o automatizado vía addon como **AutoCombatLogger**).

3. Después del raid, subes el archivo `.txt` desde `Logs/` de tu carpeta de WoW. Hay tres formas: web upload, **Warcraft Logs Uploader** (desktop, Windows/macOS), o el companion vía addon.

4. Esperas unos minutos a que parse. Recibes link al reporte.

5. Abres boss por boss: tab Damage Done para DPS, Healing para healers, Deaths para wipes, Buffs/Debuffs para uptime de buffs críticos.

6. Comparas contra rankings: dropdown que filtra por difficulty (LFR / Normal / Heroic / Mythic), region, y rango de fechas.

## Limitaciones honestas

**Premium prácticamente requisito para análisis avanzado**: el tier free deja ver tus logs y rankings, pero **private logs** (logs que solo tu guild ve), **historical parse comparisons**, **stat-by-stat breakdowns**, y **filtros avanzados** requieren Premium ($5/mes o $50/año, depende del plan). Para una guild Mythic, suele ser uno o dos oficiales con Premium que comparten reportes.

**Curva de aprendizaje empinada**: las primeras visitas son abrumadoras. Las tabs, filtros, y métricas requieren tiempo para entender qué mirar. Un raid leader nuevo necesita varias semanas de uso antes de extraer todo el valor.

**Ranking inflation por gear y comp**: el percentil no es perfectamente justo — equipos con mejor comp o gear desproporcionado pueden sesgar percentiles altos. Hay variantes (Best Performance Average vs All Star Points) que ayudan pero ningún rating es 100% comparable across guilds.

**Cobertura solo de WoW Retail y Classic**: WCL no parsea logs de SoD/Hardcore con la misma profundidad que Retail. Mejoró con tiempo pero sigue siendo el foco principal Retail.

**UI dated**: la interfaz funciona pero no es moderna. Tab navigation, scroll horizontal, y tablas densas son la norma.

**Propiedad corporativa Tencent**: igual que WoWHead, está bajo el grupo Fanbyte/Tencent. Misma cadena corporativa termina en China. Para users sensibles a privacy y data policy, vale conocerlo.

## Cómo empezar

1. Crea cuenta gratuita en [warcraftlogs.com](https://www.warcraftlogs.com).

2. Instala el companion (Warcraft Logs Uploader desktop o el addon **WCL Uploader**). El desktop client es más estable; el addon más conveniente si raideas regularmente.

3. Activa Advanced Combat Logging in-game (`/console combatLogVersion 2` la primera vez).

4. Después de tu primer raid, sube el log. Compara tu primer reporte con los rankings públicos de tu spec.

5. Si tu guild raidea Mythic en serio, considera el plan Premium — o coordina que algún oficial lo tenga para compartir analysis profundos al resto.
