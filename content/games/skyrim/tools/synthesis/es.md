---
title: "Synthesis"
description: "Framework open-source en C# que ejecuta patchers automáticos sobre tu modlist: leveled lists, NPC face generation, perks, item distribution."
quickTake: "Si tu modlist tiene patrones repetitivos (distribuir loot, ajustar leveled lists, propagar cambios de raza), Synthesis los resuelve con código. Más mantenible que un patch SSEEdit manual."
---

## Qué es

Synthesis es un framework open-source (MIT) construido sobre Mutagen — una librería .NET para manipular plugins de Bethesda. Mantenido por Noggog y el equipo Mutagen-Modding, distribuido vía Nexus (`nexusmods.com/skyrimspecialedition/mods/33996`) y GitHub.

Funcionalmente, Synthesis es un host para "patchers" — pequeños programas en C# que leen tu modlist completa y emiten un plugin custom como output. La comunidad publica patchers ya escritos que cubren tareas comunes; puedes correrlos como cualquier otro mod automation tool.

## Qué problema resuelve

Hay cosas en una modlist que se hacen mejor con código que a mano:
- Distribuir un ítem nuevo a todos los leveled lists de bandidos.
- Aplicar el mismo nombre custom a 50 NPCs.
- Convertir armaduras de un body type a otro masivamente.
- Generar patches NPC visuales (face mods) automáticamente.

Con SSEEdit/xEdit haces esto a mano: abres el plugin, navegas records, copias overrides, repites. Para 5 records, está bien. Para 500, vas a errar.

Synthesis automatiza eso. Un patcher en C# itera todos los records relevantes y aplica la lógica. Output: un plugin generado consistente.

## Diferenciación

Frente a **SSEEdit scripts** (Pascal): SSEEdit tiene su propio scripting language (Pascal-like). Funciona pero el lenguaje es legacy y la documentación es pobre. C# de Synthesis tiene auto-complete, type safety y la comunidad .NET completa.

Frente a **zEdit autopatchers**: zEdit es otro framework de auto-patching basado en JavaScript. Synthesis es más moderno y más activo en desarrollo. La elección depende de qué patchers necesitas — algunos solo existen para uno u otro.

Frente a **patches manuales con SSEEdit**: para tareas one-off, SSEEdit manual es más rápido. Para tareas recurrentes (cada vez que cambias tu modlist tienes que rehacer el patch), Synthesis paga al automatizar.

## Para qué la usa la gente

**Leveled list integration**: los patchers como "ENB Light" o "Skyrim Souls patch" distribuyen items/efectos a todos los enemies relevantes sin que vos tengas que tocar cada leveled list.

**NPC Face Patcher**: cuando tienes varios mods que modifican apariencia de NPCs, Synthesis genera un patch que toma la versión más alta en load order para cada NPC sin que tengas que armarlo manual.

**Spell Perk Item Distributor (SPID) patchers**: hay patchers que generan distribución condicional automáticamente.

**Outfit assignment automation**: cuando agregas armor mods, Synthesis puede distribuir las nuevas armaduras a NPCs según tags.

**Encounter scaling**: ajustar levels de NPCs masivamente según reglas (este enemigo es +2 levels, ese -1) sin tocar cada NPC manualmente.

## Para quién NO es esta herramienta

Si nunca tocaste un IDE de programming, Synthesis es advanced — aunque puedes usar patchers de terceros sin escribir código, la mentalidad técnica ayuda.

Si tu modlist es chica (<50 mods), probablemente no necesitas auto-patchers — los conflicts son pocos y manuales con SSEEdit alcanzan.

Si tu workflow ya usa zEdit y estás feliz, no necesitas migrar — los dos sistemas son válidos.

## Cómo se usa en la práctica

1. Baja Synthesis desde Nexus o GitHub releases.
2. Extrae en una carpeta dedicada (NO Program Files).
3. Lanza `Synthesis.Bethesda.GUI.exe`. La primera vez te pide configurar tu game type (Skyrim Special Edition).
4. Add patchers via el browser de Nexus o el GitHub registry que viene built-in.
5. Para cada patcher, configura settings específicos (ej: "incluir mod X" o "excluir tag Y").
6. Cliquea "Run" — Synthesis compila los patchers (si es la primera vez baja el SDK .NET necesario) y los ejecuta sobre tu modlist.
7. Output va a una carpeta `Output/`. Muévelo a un mod nombrado "Synthesis Output" en MO2 y actívalo.
8. Lanza Skyrim normalmente.

Cada vez que cambies mods relevantes, vas a rerun Synthesis para regenerar el patch.

## Limitaciones honestas

**Requiere .NET runtime**. Synthesis necesita .NET SDK instalado. Para usuarios sin background dev, la primera setup puede ser intimidante.

**Tiempo de primera compilación**. La primera corrida descarga dependencias y compila patchers — puede tomar 10-20 minutos. Subsequent runs son fast.

**Patchers de terceros pueden quedar abandonados**. Como cualquier ecosystem open-source, algunos patchers en el registry tienen mantenimiento esporádico.

**Output puede solaparse con otros patches**. Synthesis output a veces conflicta con SSEEdit patches manuales o Wabbajack-shipped patches. Hay que entender el flow completo.

**No tiene una UI rica para configuración**. La GUI es funcional pero austera. Configuraciones complejas a veces requieren editar JSONs a mano.

## Cómo empezar

1. Verifica que tienes .NET SDK 6+ instalado (link en la página de Synthesis).
2. Baja Synthesis desde Nexus (`nexusmods.com/skyrimspecialedition/mods/33996`).
3. Extrae en `C:\Modding\Synthesis\`.
4. Configura Skyrim Special Edition como game.
5. Empieza con un patcher simple: "Outfit Patcher" o "Race Patcher" son entry-friendly.
6. Run → mové output a MO2 → testear in-game.

Para deep dive, el wiki en `mutagen-modding.github.io/Synthesis` cubre cómo escribir tus propios patchers.
