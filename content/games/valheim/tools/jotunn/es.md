---
title: "Jotunn — The Valheim Library"
description: "Librería community para devs de mods de Valheim. Provee APIs estables sobre BepInEx para agregar items, prefabs, recipes, RPCs, custom GUI y más, sin reflection ni Harmony patches a mano."
quickTake: "Jotunn no es un mod que instalas 'porque sí' — es una dependencia que muchos mods importantes requieren. Si tu modlist incluye gear nuevo, mecánicas custom o herramientas de desarrollador, vas a tenerlo sí o sí."
---

## Qué es

Jotunn (jötunn, los gigantes nórdicos) es una librería de modding open-source (GPL-3.0) mantenida por el equipo Valheim-Modding en GitHub. Su rol es ser **la capa de abstracción** entre BepInEx (el loader) y los mods que agregan contenido al juego.

En vez de hacer que cada mod aprenda a usar reflection de C# para inyectar items y prefabs custom — peligroso, frágil ante updates del juego — Jotunn expone APIs limpias: `ItemManager`, `PrefabManager`, `LocalizationManager`, `RPCManager`, `GUIManager`. El mod registra su contenido en Jotunn y la librería se encarga de instanciar bien, sobrevivir a hot-reload, manejar versioning, etc.

## Qué problema resuelve

Sin Jotunn, agregar un item nuevo a Valheim requiere:
- Usar `Harmony.Patch()` para interceptar el ObjectDB del juego.
- Reflection para clonar prefabs existentes y modificarlos.
- Manejar a mano la sincronización cliente-servidor (Valheim es client-authoritative).
- Re-aplicar todo en cada update del juego porque los offsets cambian.

Jotunn abstrae todo eso:
```csharp
var customItem = new CustomItem("MyAxe", "BronzeAxe");
ItemManager.Instance.AddItem(customItem);
```
Tres líneas y tu hacha custom existe, está sincronizada en multiplayer, aparece en recipes, y sobrevive al próximo patch de Iron Gate (si Iron Gate no rompe ObjectDB).

Para devs eso es la diferencia entre poder mantener un mod y abandonarlo después de un update.

## Diferenciación

No tiene competidor directo. **Jotunn es el estándar** del modding en Valheim para mods que agregan contenido. Casi cualquier mod no-trivial (Therzie's monsters, Smoothbrain mods, Epic Loot, Better Trader, etc.) depende de Jotunn.

Antes de Jotunn (~2021), cada mod implementaba su propio approach de inyección y rompían entre ellos. Jotunn unificó eso. Es una de las razones por las que el ecosistema mod de Valheim escaló a miles de mods compatibles.

Para el **usuario final**, Jotunn es invisible — es una dependencia que se instala automática cuando otro mod la requiere.

## Para qué la usa la gente

**Desarrolladores de mods**. Si quieres escribir un mod con contenido nuevo (items, monsters, prefabs, biomas custom), Jotunn es el SDK que usas.

**Usuarios con modlists complejas**. Si tu modlist trae 30+ mods con contenido, casi seguro que 10-15 de ellos dependen de Jotunn. Tenerlo actualizado y funcional es crítico.

**Quien crea localizaciones**. `LocalizationManager` permite agregar traducciones para tus mods con archivos JSON simples. Buena base para que mods inglés-only se vuelvan multi-idioma.

**Custom GUI**. `GUIManager` da hooks limpios para añadir UI in-game (paneles, botones, modales) sin pelearse con el UI system de Unity directamente.

**Custom RPCs**. Comunicación cliente-servidor extra (ej: un mod que sincroniza estado entre players) usa la `RPCManager` de Jotunn en lugar de hackear el sistema de Valheim.

## Para quién NO es esta herramienta

Si solo quieres **jugar Valheim con mods QoL**: no instales Jotunn manualmente. Tu mod manager lo va a instalar como dependencia cuando lo necesite.

Si NO eres desarrollador y NO tienes mods que la requieran: no la necesitas. Instalarla aislada no hace nada útil.

Si modeas un juego que no sea Valheim: Jotunn es Valheim-specific. Para otros juegos Unity, BepInEx es la base universal pero las librerías de abstracción son distintas (ItemLib para Risk of Rain 2, LethalLib para Lethal Company, etc.).

## Cómo se usa en la práctica

**Como usuario**:
1. Tu mod manager (r2modman/Gale/TMM) lo agrega como dependencia automática al instalar mods que la requieran.
2. No hagas nada. Verifica en logs que `Jotunn v2.x.x` carga sin errores.

**Como desarrollador**:
1. Instala Visual Studio o Rider.
2. Cloná `github.com/Valheim-Modding/Jotunn`.
3. Sigue la guía de "Step-by-Step Guide" en `valheim-modding.github.io/Jotunn/guides/guide.html` para armar tu primer mod.
4. Usa los managers (`ItemManager`, `PrefabManager`, etc.) en lugar de Harmony directo cuando sea posible.
5. Publicá en Thunderstore con la dependencia a Jotunn declarada en `manifest.json`.

## Limitaciones honestas

**Versioning estricto**. Si un mod fue compilado contra Jotunn 2.18 y tu manager instala Jotunn 2.20, puede romper. Los managers manejan esto razonablemente bien, pero a veces toca rollback manual.

**Update lag tras patches grandes del juego**. Cuando Iron Gate rompe un sistema interno (ej: ItemDrop changes en Ashlands), Jotunn necesita actualizarse antes que los mods downstream. Toma 1-2 semanas.

**Curva alta para devs**. Si nunca tocaste C# o Unity, leer la doc de Jotunn requiere paciencia. No es Jotunn-specific — es la barrera del modding nativo en juegos Unity.

**Documentación en inglés solamente**. La guía oficial y los samples están todos en inglés. No hay versión española.

**No incluye toolchain visual**. A diferencia de Creation Kit (Skyrim), no hay editor visual de items. Defines todo en código.

## Cómo empezar

**Como usuario**: nada que hacer manual. Tu manager se encarga.

**Como dev**:
1. Anda a `valheim-modding.github.io/Jotunn/`.
2. Lee "Step-by-Step Guide" y "Developer's Quickstart".
3. Cloná el template `JotunnModExample` de su GitHub.
4. Configura VS/Rider, apuntando al `Valheim_Data/Managed/` para resolver las DLLs del juego.
5. Compila, ponlo en `BepInEx/plugins/`, abre el juego, verifica que carga sin errores.
6. Itera. Para support técnico, el Discord de Valheim Modding (linkeado desde su GitHub) es donde la community ayuda.

Para el **usuario casual**, la única acción necesaria es: confirmar que Jotunn esté en tu lista de mods cuando otros mods lo requieran. Todo lo demás lo maneja el manager.
