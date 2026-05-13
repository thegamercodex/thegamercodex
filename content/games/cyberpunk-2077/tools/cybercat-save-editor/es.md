---
title: "CyberCAT Save Editor"
description: "Editor desktop de archivos de save de Cyberpunk 2077. Permite editar stats, inventory, apariencia, money y quest flags."
quickTake: "Si arruinaste tu build, te corrompió un quest flag, o quieres clonar el personaje a otro slot, CyberCAT te lo resuelve sin reinstalar nada. Single-player, no rompe nada — pero úsalo con backups."
---

## Qué es

CyberCAT Save Editor (Project CyberCAT-SimpleGUI) es un editor de archivos `.sav` de Cyberpunk 2077, desarrollado por Deweh como fork simplificado del CyberCAT original de SirBitesalot. Open-source (MIT), gratis, mantenido en GitHub.

Es la herramienta de referencia de la comunidad para editar saves: cambiar el aspecto de V, ajustar atributos, modificar inventory, agregar money, marcar quest flags. El uso es 100% single-player — Cyberpunk 2077 no tiene multiplayer ni achievements bloqueables por save edit (los achievements sí dependen de que CET no esté inyectando code, pero save edits puros no los bloquean).

## Qué problema resuelve

Cyberpunk 2077 tiene casos donde un save legitimate llega a estados problemáticos:
- Quest bug que deja un flag bloqueado sin manera de avanzar.
- Distribución de perks/attributes terrible que el Tarot Card no resuelve sin tedio.
- Apariencia de V que ya no te gusta y quieres cambiar sin empezar de cero.
- Curiosidad de probar un build sin grindear los items.

CyberCAT abre el archivo `.sav` (binario propietario de REDengine 4) y expone los datos para edición. Save → cargas → editas → guardas → cargas el save modificado in-game.

## Diferenciación

Frente a **WolvenKit**: WolvenKit edita assets del juego (modelos, texturas); CyberCAT edita el state del player (V, inventory). Son herramientas diferentes para problemas diferentes.

Frente a **PixelRick's CyberpunkSaveEditor**: el de PixelRick (`github.com/PixelRick/CyberpunkSaveEditor`) es otro editor de saves, más raw — expone más datos pero con menos abstractions visuales. CyberCAT-SimpleGUI es más amigable; PixelRick es más poderoso para data avanzada. Para 95% de usos, CyberCAT alcanza.

Frente a **CET console** (editar via runtime Lua): CET puede modificar player state en runtime via comandos, pero eso requiere conocer las APIs internas. CyberCAT edita offline directamente el `.sav`, no requiere tener el juego abierto.

## Para qué la usa la gente

**Cambiar apariencia de V mid-playthrough**: Cyberpunk 2077 base no tiene mirror para re-customizar (lo agregaron en un patch, pero algunos players quieren más options). CyberCAT te deja editar todos los sliders de creator desde fuera.

**Respec sin Tarot Card**: en lugar de gastar el item raro, abres CyberCAT, reseteas atributos y perks, distribuyes de nuevo.

**Add money / components / items**: para players que quieren testing rápido o just probar un build sin grindear, CyberCAT permite agregar eddies, weapons, components.

**Unstuck quests**: cuando un quest tiene flag bug y no avanza, CyberCAT permite editar el flag manualmente. Requiere saber qué flag mover (community en Reddit / Discord ayuda).

**Clonar V a otro slot**: copiar un personaje completo a otro save, útil para experimentar paths narrativos paralelos.

## Para quién NO es esta herramienta

Si te importa el sense de progresión legítima, save editing rompe eso por definición. CyberCAT es para player que ya completó el game o que tiene un problema concreto, no para shortcuts en first playthrough.

Si juegas en consola (PS5, Xbox), CyberCAT no aplica — PC-only.

Si quieres modificar entities del game (NPCs, world state), CyberCAT no llega tan profundo — está enfocado en player save data, no en world state.

## Cómo se usa en la práctica

1. Bajas CyberCAT-SimpleGUI desde `github.com/Deweh/CyberCAT-SimpleGUI/releases` o desde Nexus Mods (`nexusmods.com/cyberpunk2077/mods/718`).
2. Lo extraes a cualquier folder — es portable, no requiere install.
3. **HAZ BACKUP** de tu save antes de tocar nada. Los saves de Cyberpunk viven en `Saved Games\CD Projekt Red\Cyberpunk 2077\`. Copia la carpeta entera a otro lado.
4. Abres CyberCAT y cargas el `.sav` (el archivo se llama `sav.dat` dentro de una carpeta por save slot).
5. Las tabs muestran: Appearance (sliders del creator), Character (atributos, perks), Inventory (items), Stats (money, level, etc.), Facts (quest flags).
6. Editas lo que necesites, guardas. CyberCAT escribe el archivo modificado.
7. Cargas el save in-game. Si funciona, perfecto. Si hay corruption, restauras el backup.

## Limitaciones honestas

**Riesgo de save corruption**. Editar el `.sav` mal puede dejarlo unreadable por el juego. CyberCAT trata de validar, pero edge cases existen. **Siempre con backup**.

**No identifica todos los quest facts**. Para quest flags raros, CyberCAT muestra el ID hex pero no el nombre legible. Investigar qué flag tocar requiere foros y mods de community.

**Soporte de Phantom Liberty**. Los saves de PL agregaron flags y entidades nuevas. CyberCAT se mantuvo con updates pero algunos campos exóticos pueden no estar perfectamente etiquetados.

**Updates poco frecuentes**. El último push de Deweh fue julio 2025 al momento de escribir esto. Sigue funcional para saves actuales del juego, pero futuras versiones del save format podrían no ser soportadas inmediatamente.

**Sin localización al español**. Toda la UI en inglés. Para players de comunidad hispana, los nombres técnicos en inglés son barrera extra.

## Cómo empezar

1. Antes de bajar CyberCAT, asegúrate de tener una copia backup limpia de tu save. **Copia toda la carpeta `Saved Games\CD Projekt Red\Cyberpunk 2077\` a otro disk o cloud**.
2. Baja la última release desde GitHub (o Nexus). Extrae el zip.
3. Ejecutá `CP2077SaveEditor.exe`. La UI abre.
4. File → Open → navega hasta tu save folder → eligí el `sav.dat` que quieras editar.
5. Haz un cambio mínimo primero (ej: agregar 10 eddies). Salvalo. Carga in-game para verificar que el save sigue funcional.
6. Después de validar que el flow funciona, haces tus cambios reales.

Tip: si vas a usar CyberCAT para fix un quest bug específico, primero busca en Reddit o en el Discord del modding community el flag exacto. Editar flags a ciegas puede romper más quests downstream que el que quieres arreglar.
