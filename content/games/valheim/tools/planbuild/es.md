---
title: "PlanBuild"
description: "Mod de construcción que agrega Plan Hammer (planificación sin materiales) y Blueprint Rune (copy/paste de estructuras enteras). Habilita workflows imposibles en vanilla, especialmente para bases grandes y compartibles."
quickTake: "Si construyes en Valheim más allá de la cabaña básica, PlanBuild cambia el juego. Plan Hammer convierte la fase de design en algo iterativo, y Blueprint Rune te deja replicar tu castillo entero en otro server con un click."
---

## Qué es

PlanBuild es un mod open-source (MIT) creado por **MathiasDecrock** y mantenido hoy por **sirskunkalot**. Agrega dos items al juego:

- **Plan Hammer**: una versión "ghost" del martillo. Construyes estructuras enteras sin gastar materiales — todas las piezas quedan en estado plan (translúcidas, sin colisión funcional). Cuando estás satisfecho, juntas los materiales y un sistema te deja construir las piezas planeadas una por una, o usas un totem custom que las construye automáticamente.
- **Blueprint Rune**: una vara que captura una estructura existente en un blueprint object. Lo guardas, lo compartes, lo pegas en otro mundo. Funciona como copy/paste de cualquier construcción.

Adicionalmente tiene **modos de terraform** (raise/lower/level/paint terrain) y **immersion items** (estructuras decorativas extra). El paquete completo cubre el ciclo de "diseñá → construí → replica → comparte" que vanilla no soporta.

## Qué problema resuelve

Construir en Valheim vanilla tiene tres fricciones grandes:

1. **No puedes planear sin gastar**. Quieres ver si una idea de techo funciona — tienes que gastar madera real, romperla si no te gusta, gastar más. Iteración costosa.
2. **No puedes replicar fácilmente**. Construiste una base hermosa. Quieres repetirla en otro mundo. Sacar capturas, abrir el nuevo mundo, intentar reconstruir desde memoria. Doloroso.
3. **No puedes compartir builds**. Tu castillo épico se queda en tu mundo. Para que otro player lo tenga, tiene que verlo en YouTube y reconstruirlo a mano.

PlanBuild resuelve los tres:
- Plan Hammer permite **iterar sin costo**. diseñas, ajustas, borras, redibujas. Cuando apruebas, gastas materiales.
- Blueprint Rune permite **replicar instantáneo**. Tu base entera cabe en un objeto que paste el contenido en otro mundo (siempre que tengas los materiales).
- Combinado con **Valheimians.com** (sitio de blueprint sharing), tu build queda al alcance de cualquier player con el mod.

## Diferenciación

No tiene competidor directo. **PlanBuild define la categoría** de construcción avanzada en Valheim. Es el mod que cualquier builder serio instala.

Existió **BuildShare** antes (mod más simple solo para copy/paste, sin Plan Hammer). PlanBuild lo absorbió: hace todo lo de BuildShare más planificación. La comunidad migró completamente.

Frente a **vanilla**: vanilla no tiene nada equivalente. Iron Gate no ha agregado planning ni blueprints, y por la filosofía del juego (cada estructura tiene su precio), probablemente no lo haga.

## Para qué la usa la gente

**Diseño iterativo de bases**. Construyes el outline con Plan Hammer, das vueltas alrededor, ajustas techos, alteras el layout. Materiales sin gastar. Cuando funciona, juntas el wood/stone y materializas.

**Megabases y castillos**. Estructuras de cientos de piezas se diseñan in stages: torre por torre, ala por ala. Plan Hammer permite ver el conjunto antes de comprometer.

**Replicar tu base en un mundo nuevo**. Iron Gate lanza patch, quieres mundo fresh, no quieres perder tu base actual: Blueprint Rune captura todo, paste en el nuevo mundo, listo.

**Compartir blueprints**. Subes tu build a Valheimians.com con su PlanBuild file. Otros players lo descargan y lo construyen en su mundo.

**Servers cooperativos**. Un player diseña con Plan Hammer mientras el resto junta materiales. Cuando todo está listo, construyen lo planeado en horas en vez de días.

**Terraforming preciso**. El sistema de terrain modification de PlanBuild es más controlado que vanilla — alturas exactas, paint de bioma, smooth/sharpen tools.

## Para quién NO es esta herramienta

Si **vanilla building te gusta como está**: PlanBuild no agrega valor. La intención de Iron Gate es que cada estructura tenga su costo material y tiempo.

Si juegas en **server público sin mods**: PlanBuild requiere instalación cliente. No te conectarás a un server vanilla con él activo.

Si construyes bases chicas (cabañas, outposts simples): no es necesario. Plan Hammer y Blueprint Rune son overkill para 50 piezas.

Si tu enfoque es **survival hardcore**: para algunos puristas, planificar sin gastar materiales rompe la tension del survival. PlanBuild es para builders más que para survivalists.

## Cómo se usa en la práctica

1. Instala PlanBuild vía r2modman/Gale/TMM (categoría building).
2. Lanza el juego. PlanBuild requiere `Jotunn` como dependencia — el manager lo trae automático.
3. In-game, craftea el **Plan Hammer**. Receta es la misma del martillo vanilla.
4. Equipa el Plan Hammer y construí lo que quieras. Las piezas aparecen translúcidas.
5. Cuando estás contento con el design, puedes:
   - Materializar piezas una por una con el martillo vanilla (te indica qué materiales falta).
   - Usar el **totem de PlanBuild** que se auto-construye cuando deposites los materiales.
6. Para Blueprint Rune: craftéalo (recipe en la wiki del mod). apunta a una estructura existente, seleccionas el bounding box, guardas como blueprint con un nombre.
7. Para usar un blueprint: equipa el rune, seleccionas el blueprint del menú, lo paste en el suelo. Aparece como ghost. Materializas como con Plan Hammer.
8. Para compartir: el blueprint guarda en `BepInEx/config/PlanBuild/blueprints/`. Compartes ese archivo, otros players lo importan.

## Limitaciones honestas

**Modificaciones del juego frescas pueden romper**. Cuando Iron Gate cambia el sistema de building (Hearth & Home lo hizo), PlanBuild necesita update. Típicamente 1-3 días.

**Blueprints complejos pueden lagear**. Castillos con 10,000+ piezas tardan en cargar y materializar. No es bug, es la naturaleza del juego.

**Materiales aún cuestan**. PlanBuild planifica gratis pero la construcción real cuesta. Si tu base diseñada requiere 5,000 madera, vas a juntar 5,000 madera igual.

**Server matching obligatorio**. Server y clients necesitan PlanBuild. Si un client no lo tiene, no puede conectar a un server con PlanBuild activo (o lo conecta pero no ve los planes).

**Curva inicial**. Aunque la idea es simple, dominar Plan Hammer + Blueprint Rune + paste correctamente alineado toma un par de horas.

## Cómo empezar

1. Instala vía r2modman/Gale/TMM en una modlist con BepInEx + Jotunn.
2. Lanza Valheim, entra a un mundo.
3. Craftea el Plan Hammer (necesitas unlock de hammer vanilla primero).
4. Experimentá: planifica una cabaña simple. Prueba borrar piezas, mover, ajustar.
5. Una vez cómodo con Plan Hammer, craftea el Blueprint Rune.
6. Capturá una construcción existente (cualquier estructura que ya tengas).
7. Pasteala en otra parte del mundo para ver cómo funciona.
8. Cuando manejes el flujo, descarga blueprints de la comunidad en Valheimians.com.

Para guías visuales, el `valheim.fandom.com` tiene página dedicada a PlanBuild, y `Valheimians.com/article/planbuild-how-to-install-and-basic-usage` tiene un walkthrough con screenshots.
