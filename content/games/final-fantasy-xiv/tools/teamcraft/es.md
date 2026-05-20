---
title: "FFXIV Teamcraft"
description: "Suite todo-en-uno para crafters y gatherers de FFXIV: simulador de rotación HQ, listas de mats, alarmas de gathering nodes, inventory sync, market data y desktop companion app open source."
quickTake: "Si crafteás o gathereas seriamente en FFXIV, Teamcraft es la herramienta. Reemplaza spreadsheets, calculadoras y guides en un solo workflow integrado. La app desktop con inventory sync es lo que separa los crafters casuales de los serios."
---

## Qué es

FFXIV Teamcraft (ffxivteamcraft.com) es una suite web + desktop para crafters (DoH) y gatherers (DoL) maintained por Supamiu y la comunidad. Open source en GitHub (`ffxiv-teamcraft/ffxiv-teamcraft`), licencia MIT. Existe desde 2018 y se actualiza con cada patch.

Funcionalidades principales:

- **Crafting rotation simulator**: simula tu rotación de crafting paso a paso, muestra progreso/quality/durability y predice si la receta sale HQ.
- **Recipe lists**: listás items que quieres craftear, Teamcraft expande los mats recursivos y te calcula totals.
- **Inventory sync**: con la desktop app, ve qué tienes en bags/retainers en tiempo real.
- **Gathering nodes con alarmas**: spawn timers, alarms in-game para nodos timed.
- **Market integration**: precios via Universalis para calcular profit de crafting.
- **Workshops y FC crafting**: planning multi-jugador para Free Companies.

Tiene web (full features), desktop app (con inventory sync — Windows/macOS), y mobile companion.

## Qué problema resuelve

Crafting endgame en FFXIV es complejo: rotaciones precisas requeridas para HQ consistente, materials trees recursivos, market timing para profit, inventory tracking para no doblar farms. Sin herramienta, todo esto es spreadsheet manual + memoria.

Teamcraft centraliza:

- **Rotación**: simulás antes de craftear, validás que tu setup funciona.
- **Mats list**: agregás 5 items a craftear → Teamcraft te dice "necesitas X de Y y Z, gatherealos así".
- **Inventory sync**: el desktop app lee tu inventory live → te dice "ya tienes 50 de Spruce Logs, te faltan 30".
- **Market timing**: ¿vale la pena craftear este item ahora vs en 2 días? Teamcraft compara prices.

Esto convierte horas de planning en minutos.

## Diferenciación vs Garland Tools

- **Garland Tools**: database puro. Lookup eficiente, no planificás workflow.
- **Teamcraft**: workflow tool. Empezás con "quiero craftear X", Teamcraft te lleva del recipe a la ejecución.

Para queries puntuales de "¿dónde está este mat?", Garland es más rápido. Para "voy a craftear todo el BiS de Disciples of the Hand", Teamcraft es la opción. Muchos serios usan ambos.

## Para qué la usa la gente

**Pre-Savage crafting**: 2 semanas antes de un tier, agregás los crafted accessories al list en Teamcraft. Te dice qué mats farm y qué rotación usar para HQ consistente.

**Daily crafting rotations**: rotaciones complejas de 30+ steps (con Reuse, Trained Eye, etc.) se programan en el simulator, se guardan, y se ejecutan en game con macros.

**Gathering alarms**: nodos rare (legendary, ephemeral) requieren tu presencia a una hora ET específica. Teamcraft te avisa con alarma 5-15 min antes.

**Free Company supply runs**: coordinás con tu FC qué cada uno gathereará para una raid de materials.

**Profit flipping**: chequeás precios de Universalis vs cost of mats → Teamcraft te dice si vale la pena craftear para market vs comprar directo.

## Para quién NO es esta herramienta

- **Pure combat players**: nada de combat acá. Si solo raideas y no crafteás, Teamcraft no aporta.
- **Casual leveling crafters**: si solo levelás crafters por trofeo y no optimizás, las features avanzadas (rotation sim, inventory sync) son overkill. Garland Tools alcanza.
- **Mobile-only users**: la web funciona en mobile pero las features avanzadas (rotation sim) son desktop-first.
- **PC sin Windows o macOS**: el inventory sync requiere desktop app — Linux solo via Electron build community.

## Cómo se usa en la práctica

1. Andá a [ffxivteamcraft.com](https://ffxivteamcraft.com). Creá cuenta para guardar listas.

2. **List Maker** → buscas un item (ej: "Endwalker BiS Crafter's Tools"), Teamcraft genera el mat list recursivo.

3. **Simulator** → eliges una recipe, configuras stats (Craftsmanship, Control, CP), corrés la rotación que quieres probar. El simulator te muestra resultado expected.

4. Para inventory sync: descargás la desktop app, configuras (requiere XIVLauncher para captura legal). Tu inventory aparece live.

5. **Gathering Alarms** → seleccionás nodos timed que te interesan. La app te avisa cuando spawn.

6. **Market sync**: Teamcraft consulta Universalis automáticamente para precios. Filtros por server.

## Limitaciones honestas

**Curva de aprendizaje fuerte**: la app tiene MUCHAS features. Para nuevos crafters es overwhelming. Empezá con List Maker y Simulator, ignora el resto inicialmente.

**Inventory sync requiere setup técnico**: la desktop app + integration con XIVLauncher/ACT puede ser frágil. Funciona pero requiere paciencia inicial.

**Performance**: en machines viejas la app puede ser pesada. Web es más liviana pero pierde features.

**Updates dependen de Supamiu y contributors**: cambios mayors post-patch pueden tardar 1-2 semanas para todas las features (rotación sim al día, recipe data exacta).

**Market data depende de Universalis**: si Universalis tiene poco data en tu server (servers pequeños), profit calculations son inexactos.

**Mobile companion limitado**: la mobile app es viewer-only, no editás listas serias desde el celular.

## Cómo empezar

1. Andá a [ffxivteamcraft.com](https://ffxivteamcraft.com). Creá cuenta.

2. **List Maker** → primer list: agregá 1-2 endgame crafted items (ej: weapon DoH actual). Mirá el mat tree expandido.

3. **Simulator** → carga una rotación recomendada por The Balance para tu job DoH. Ajustá stats y corrélo. Familiarizate con la UI.

4. Descargá la **desktop app** si quieres inventory sync. Seguí la guía de setup (incluye config con XIVLauncher).

5. **Gathering Alarms** → seleccioná 2-3 nodos timed que te interesen. Verificá que la alarma funciona.

6. Cuando estés cómodo con la UI, explorás features avanzadas: workshops, FC crafting, market flipping.

7. El [Discord oficial de Teamcraft](https://discord.gg/N67vfgD) es activo si necesitas ayuda con setup o reporte de bugs.
