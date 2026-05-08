---
title: "Lineup Simulator"
description: "Simulador oficial de HoYoverse para armar y compartir team comps de Genshin: 4 personajes con sus armas, artifacts y constellations, sin necesidad de tenerlos in-game."
quickTake: "Útil para teorizar comps antes de pullear o para mostrarle a alguien una composición sin instalar third-parties. Tiene también la base de datos de comps publicadas por la comunidad para inspirarte."
---

## Qué es

Lineup Simulator es la herramienta oficial de HoYoverse dentro de HoYoLAB para crear team compositions de Genshin Impact. Permite seleccionar 4 personajes, asignarles armas, artifact sets, niveles, talents y constellations específicos, y guardar/compartir el resultado como una "lineup".

Funciona sin requerir que tengas los personajes in-game — podés simular comps con personajes que no tenés todavía. Es web-based, gratis, y se integra con HoYoLAB para publicar lineups que otros usuarios pueden ver y comentar. También navegás lineups publicadas por la comunidad organizadas por contexto (Spiral Abyss, Co-op, Boss runs).

## Qué problema resuelve

Genshin tiene mecánicas de equipo complejas: reactions elementales (Vaporize, Melt, Hyperbloom, etc.), buffs/debuffs entre personajes, requisitos de energy regen para Bursts, sinergias específicas. Decidir si un comp va a funcionar requiere o tener todos los personajes equipados (caro), o teorizar abstractamente sin visualizar.

Lineup Simulator resuelve esto permitiendo construir el comp completo visualmente antes de comprometerte. Vés en pantalla los 4 personajes con sus armas y artifacts, podés iterar variantes, y compartirlo para que otros opinen. Es planning sin costo de pulls o de farming.

## Diferenciación con Genshin Lab

Genshin Lab cubre el mismo caso de uso con UX más limpia y mejor data layer (cálculos de damage estimados, comparison entre comps). Lineup Simulator es más simple pero tiene la ventaja oficial de **publicación dentro de HoYoLAB**: tu lineup queda accesible junto a comments y reacciones de la comunidad oficial, no en un site third-party.

Recomendación: usá Genshin Lab cuando quierás profundidad analítica, Lineup Simulator cuando quierás compartir un comp dentro del foro oficial o navegar comps populares en Spiral Abyss.

## Para qué la usa la gente

**Decidir si pullear un personaje nuevo**: querés saber si Furina realmente brilla en tus comps actuales antes de gastar primogems. Construís el comp con Furina + tus existentes y comparás con alternativas que ya tenés. Decisión informada.

**Optimizar comp para Spiral Abyss del cycle actual**: cada cycle tiene buffs específicos (ej: Hydro damage +75%). Probás varios comps que aprovechen el buff y elegís el más viable con tu roster.

**Compartir comp para feedback**: posteás tu lineup en HoYoLAB con la pregunta "¿es viable este team?". Otros usuarios comentan, sugieren cambios. Útil para principiantes con dudas.

**Inspirarte de comps populares**: navegás lineups con más likes en HoYoLAB. Ves qué comps están usando jugadores top para ciertos floors del Abyss. Replicás o adaptás.

**Planificar farming de artifacts**: si decidís un comp objetivo, sabés qué artifact sets necesitás cada personaje. Eso te dice qué domains farmear con prioridad.

## Para quién NO es esta herramienta

Si solo usás 1-2 comps fijos y no estás teorizando nuevos, no necesitás esto. Si querés cálculo numérico de damage (DPS estimado, comparación quantitativa entre comps), Akasha System o gcsim son mejores. Si publicás contenido en otros foros (Reddit, Discord), las lineups oficiales no se renderizan ahí — son solo intra-HoYoLAB.

## Cómo se usa en la práctica

1. Andás a `act.hoyolab.com/ys/event/bbs-lineup-ys-sea/index.html` con tu cuenta logueada.

2. Click en "Create Lineup". Aparece interfaz para elegir 4 personajes (drag & drop o click).

3. Para cada personaje: eligís nivel, talents, constellation, weapon y nivel de weapon, artifact set y stats principales.

4. Eligís el contexto: Spiral Abyss / Co-op / Boss / General. Esto categoriza tu lineup para que aparezca en navegación correcta.

5. (Opcional) Agregás descripción explicando la rotación de skills, sinergias, y cuándo usar el comp.

6. Click en "Publish" para que sea pública o "Save Draft" si todavía estás iterando.

7. Para navegar comps de otros: filtrás por personaje principal o contexto y leés.

## Limitaciones honestas

**No calcula damage real**. Te muestra el comp visualmente pero no te dice "este team hace X DPS". Para cálculos numéricos vas a tools como Akasha o gcsim.

**Búsqueda y filtrado básicos**. Encontrar lineups específicas (ej: "comps de Furina sin Neuvillette") puede ser tedioso por la UI de filtros. La community ha pedido mejoras pero HoYoverse no las implementó.

**Idiomas se mezclan**. Las lineups publicadas pueden estar en cualquier idioma. Si buscás solo en español, vas a tener resultados limitados — la comunidad activa publica más en inglés y chino.

**Constellation y refinement de armas no se cross-validan con tu cuenta**. Podés simular C6R5 sin importar si lo tenés. Útil para teorizar pero confunde si esperás que el sim refleje tu cuenta real.

**Updates con nuevos personajes pueden tardar**. Cuando sale un personaje nuevo, suele estar disponible en el sim al day-1 del banner, pero ocasionalmente hay delays. Siempre cross-check con el patch live.

**No integra con tu inventario real**. A diferencia del Enhancement Calculator, este no lee qué tenés ni te dice qué te falta. Es pura simulación.

## Cómo empezar

Andá a HoYoLAB.com → Tools → Lineup Simulator. Para tu primera lineup, recomiendo replicar tu comp actual de Spiral Abyss para entender la interfaz: eligís tus 4 personajes con sus equipos reales, lo guardás como draft. En 5 minutos tenés feel de cómo funciona.

Después de eso, podés probar variantes: ¿qué pasa si reemplazo a Bennett por Furina? ¿Y si cambio el weapon de Hu Tao? La iteración es donde está el valor real.

Para inspirarte: navegá a "Hot Lineups" y ordená por contexto = Spiral Abyss. Vas a ver los comps top del cycle actual con sus rotaciones. Replicá uno con personajes que tengas y andá ajustando.
