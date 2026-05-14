---
title: Synthesis vs SSEEdit — patches automatizados o manuales para Skyrim
description: Comparación entre el framework de auto-patchers C# y el editor de records xEdit. Cuándo automatizar, cuándo abrir records a mano y por qué la mayoría de modders usa ambos.
---

Synthesis y SSEEdit (xEdit) son las dos herramientas centrales para resolver conflicts entre plugins en Skyrim, pero abordan el problema desde lados opuestos. **SSEEdit** es un editor de records: te muestra cada modificación de cada plugin y te deja editar overrides a mano. **Synthesis** es un framework que ejecuta patchers escritos en C# (por la comunidad o por ti) que regeneran parches deterministamente cada vez que cambias la modlist. La mayoría de modders serios usa los dos en distintos momentos del workflow — esta comparación te ayuda a saber cuál abrir para qué.

## Filosofías opuestas

SSEEdit es la rama de Skyrim del proyecto **xEdit**, el editor de records que ElminsterAU mantiene desde Oblivion. Es la herramienta universal para inspeccionar y modificar plugins de Bethesda. Abres SSEEdit, cargas tu load order, y ves un árbol enorme con cada record que cualquier plugin tocó. Si dos mods modifican el mismo NPC, ves los dos overrides lado a lado y decides qué versión gana.

El workflow es manual y específico: para resolver un conflict entre Mod A y Mod B, abres el record en disputa, copias el ganador a un nuevo plugin, y editas. Cada parche que escribes queda como un archivo ESP/ESL en tu load order. Si mañana desinstalas Mod B, tu parche queda con referencias muertas y hay que regenerarlo a mano.

Synthesis es un proyecto más reciente (Noggog & el team de Mutagen) que cambia el paradigma: en lugar de editar records, **escribes una función que describe cómo deben combinarse los records de cierto tipo**. Esa función la ejecuta Synthesis cada vez que cambia tu modlist y produce un parche fresco que refleja la modlist actual exactamente.

Ejemplos típicos de patchers de Synthesis:
- **SynLeveledList**: combina leveled lists de todos los mods (el equivalente automatizado del Leveled List Patcher de SSEEdit).
- **SynNpcAttributesForwarder**: forwarea atributos de NPCs (face geometry, stats, factions) entre múltiples overhauls.
- **SynRaceMenuPlus**: integra cambios de races sin perder mods de presets.
- **SynBashedPatcher**: el equivalente moderno de Wrye Bash en C#.

La promesa central: una vez configurado tu pipeline de Synthesis, cualquier cambio en la modlist se absorbe con un click en lugar de horas de re-trabajo manual.

## Inspección vs transformación

Cuando un mod hace algo raro en el juego, el flujo de debug típico es:

1. Abrir SSEEdit.
2. Cargar el load order.
3. Buscar el record sospechoso (ej: un NPC que aparece sin cabeza).
4. Ver la cadena de overrides: vanilla → Mod A → Mod B → tu parche.
5. Identificar qué override está rompiendo (probablemente Mod B no forwardeó el head record de Mod A).
6. Decidir el fix.

Synthesis no sirve para este flujo. **Synthesis es para ejecutar transformaciones**, no para investigar plugins. No tiene UI de exploración de records.

Para todo lo que sea "qué está pasando en mi load order", SSEEdit gana sin discusión.

## Repetibilidad y mantenimiento

Acá Synthesis gana. Una modlist de 200+ mods típicamente necesita:

- Un parche de leveled lists (para que items y enemigos de todos los mods aparezcan en el mundo).
- Un parche de NPC appearance (para que el USSEP forwardee correcciones a NPCs que mods cosméticos también tocan).
- Un bashed patch o equivalente (consolidación de cambios menores entre plugins).
- Parches específicos entre mods que conflictan en records concretos.

Con SSEEdit cada uno de estos se hace a mano. Si agregas dos mods nuevos, repites el proceso. Si los actualizas, repites. Si los quitas, repites y limpias parches.

Con Synthesis configuras los patchers una vez y se re-ejecutan en segundos. El parche resultante refleja tu modlist actual sin "drift" entre lo que está en disco y lo que tus parches asumen.

Para modders que mantienen modlists vivas (agregando y quitando mods seguido), Synthesis paga la curva inicial de configuración en pocas semanas.

## Curva de aprendizaje

**SSEEdit es más accesible en el corto plazo**. Cualquiera con curiosidad puede abrirlo, navegar records y entender qué hace cada plugin. Hay miles de tutoriales en YouTube y guías escritas. Los conceptos (record, override, master, FormID) se aprenden visualmente.

**Synthesis tiene más curva en el setup pero menos en el uso diario**. Configurar tu primer pipeline de Synthesis (instalar el runtime de .NET, agregar patchers desde el repositorio público, configurar settings) toma una tarde la primera vez. Después es solo abrir y darle Run. Si quieres escribir un patcher custom necesitas saber C# y la librería Mutagen — eso sí es una curva real, pero la mayoría de modders nunca escribe patchers, solo los consume.

## Lo que SSEEdit hace y Synthesis no

- **Limpiar masters oficiales** (ITM/UDR de Update.esm, Dawnguard.esm, etc.). El Quick Auto Clean de SSEEdit es estándar; el guide oficial de SE recomienda correrlo antes de modear.
- **Editar records a mano** para patches puntuales.
- **Investigar conflicts** record por record.
- **Aprender la estructura de plugins de Bethesda** — herramienta pedagógica número uno.
- **Convertir plugins entre versiones** (LE a SE) usando funciones de comparison.

## Lo que Synthesis hace y SSEEdit no (cómodamente)

- **Patches deterministas que se regeneran**. SSEEdit puede ejecutar scripts pero no es su foco.
- **Pipeline de patchers encadenados** que producen un único output ESP final.
- **Distribución de patchers via repositorio**: te suscribes a un patcher en el directorio y se actualiza solo.
- **Logs estructurados** de qué hizo cada patcher en qué record.

## En resumen

| Escenario | Mejor opción |
|---|---|
| Investigar qué hace un plugin | SSEEdit |
| Limpiar masters oficiales | SSEEdit |
| Resolver un conflict puntual entre 2 mods | SSEEdit |
| Mergear leveled lists de toda la modlist | Synthesis |
| Forwardear NPC appearance entre overhauls | Synthesis |
| Modlist viva con cambios frecuentes | Synthesis |
| Aprender plugins de Bethesda | SSEEdit |
| Escribir patcher custom reutilizable | Synthesis |

## Veredicto final

No elijas entre ellos: **vas a usar los dos**.

SSEEdit es la herramienta universal de plugin authoring de Bethesda — la abres para entender, debuggear, limpiar y escribir patches manuales. Es imprescindible y no tiene sustituto.

Synthesis es la capa de automatización encima: cuando los patches que necesitas son repetitivos (leveled lists, NPC forwards, bashed-style merges), Synthesis los hace en un click y los mantiene sincronizados con tu modlist.

Una pipeline típica de modlist seria: instalas mods → corres LOOT → corres Synthesis para los patches automatizables → abres SSEEdit para escribir los parches específicos que Synthesis no cubre → juegas.

Si recién empiezas, **aprende SSEEdit primero**. Synthesis tiene sentido cuando ya entiendes qué está automatizando.
