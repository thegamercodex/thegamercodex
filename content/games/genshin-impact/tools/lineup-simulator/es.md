---
title: "Lineup Simulator"
description: "Simulador oficial de HoYoverse para armar y compartir team comps de Genshin: 4 personajes con sus armas, artifacts y constellations, sin necesidad de tenerlos in-game."
quickTake: "Útil para teorizar comps antes de pullear o para mostrarle a alguien una composición sin instalar third-parties. Tiene también la base de datos de comps publicadas por la comunidad para inspirarte."
---

## Qué es

Lineup Simulator es la herramienta oficial de HoYoverse dentro de HoYoLAB para crear team compositions de Genshin Impact. Permite seleccionar 4 personajes, asignarles armas, artifact sets, niveles, talents y constellations específicos, y guardar/compartir el resultado como una "lineup".

Funciona sin requerir que tengas los personajes in-game — puedes simular comps con personajes que no tienes todavía. Es web-based, gratis, y se integra con HoYoLAB para publicar lineups que otros usuarios pueden ver y comentar. También navegas lineups publicadas por la comunidad organizadas por contexto (Spiral Abyss, Co-op, Boss runs).

## Qué problema resuelve

Genshin tiene mecánicas de equipo complejas: reactions elementales (Vaporize, Melt, Hyperbloom, etc.), buffs/debuffs entre personajes, requisitos de energy regen para Bursts, sinergias específicas. Decidir si un comp va a funcionar requiere o tener todos los personajes equipados (caro), o teorizar abstractamente sin visualizar.

Lineup Simulator resuelve esto permitiendo construir el comp completo visualmente antes de comprometerte. Ves en pantalla los 4 personajes con sus armas y artifacts, puedes iterar variantes, y compartirlo para que otros opinen. Es planning sin costo de pulls o de farming.

## Diferenciación con Genshin Lab

Genshin Lab cubre el mismo caso de uso con UX más limpia y mejor data layer (cálculos de damage estimados, comparison entre comps). Lineup Simulator es más simple pero tiene la ventaja oficial de **publicación dentro de HoYoLAB**: tu lineup queda accesible junto a comments y reacciones de la comunidad oficial, no en un site third-party.

Recomendación: usa Genshin Lab cuando quieras profundidad analítica, Lineup Simulator cuando quieras compartir un comp dentro del foro oficial o navegar comps populares en Spiral Abyss.

## Para qué la usa la gente

**Decidir si pullear un personaje nuevo**: quieres saber si Furina realmente brilla en tus comps actuales antes de gastar primogems. Construyes el comp con Furina + tus existentes y comparas con alternativas que ya tienes. Decisión informada.

**Optimizar comp para Spiral Abyss del cycle actual**: cada cycle tiene buffs específicos (ej: Hydro damage +75%). Pruebas varios comps que aprovechen el buff y eliges el más viable con tu roster.

**Compartir comp para feedback**: posteas tu lineup en HoYoLAB con la pregunta "¿es viable este team?". Otros usuarios comentan, sugieren cambios. Útil para principiantes con dudas.

**Inspirarte de comps populares**: navegas lineups con más likes en HoYoLAB. Ves qué comps están usando jugadores top para ciertos floors del Abyss. Replicas o adaptas.

**Planificar farming de artifacts**: si decides un comp objetivo, sabes qué artifact sets necesitas cada personaje. Eso te dice qué domains farmear con prioridad.

## Para quién NO es esta herramienta

Si solo usas 1-2 comps fijos y no estás teorizando nuevos, no necesitas esto. Si quieres cálculo numérico de damage (DPS estimado, comparación quantitativa entre comps), Akasha System o gcsim son mejores. Si publicas contenido en otros foros (Reddit, Discord), las lineups oficiales no se renderizan ahí — son solo intra-HoYoLAB.

## Cómo se usa en la práctica

1. Vas a `act.hoyolab.com/ys/event/bbs-lineup-ys-sea/index.html` con tu cuenta logueada.

2. Click en "Create Lineup". Aparece interfaz para elegir 4 personajes (drag & drop o click).

3. Para cada personaje: eliges nivel, talents, constellation, weapon y nivel de weapon, artifact set y stats principales.

4. Eliges el contexto: Spiral Abyss / Co-op / Boss / General. Esto categoriza tu lineup para que aparezca en navegación correcta.

5. (Opcional) Agregas descripción explicando la rotación de skills, sinergias, y cuándo usar el comp.

6. Click en "Publish" para que sea pública o "Save Draft" si todavía estás iterando.

7. Para navegar comps de otros: filtras por personaje principal o contexto y lees.

## Limitaciones honestas

**No calcula damage real**. Te muestra el comp visualmente pero no te dice "este team hace X DPS". Para cálculos numéricos vas a tools como Akasha o gcsim.

**Búsqueda y filtrado básicos**. Encontrar lineups específicas (ej: "comps de Furina sin Neuvillette") puede ser tedioso por la UI de filtros. La community ha pedido mejoras pero HoYoverse no las implementó.

**Idiomas se mezclan**. Las lineups publicadas pueden estar en cualquier idioma. Si buscas solo en español, vas a tener resultados limitados — la comunidad activa publica más en inglés y chino.

**Constellation y refinement de armas no se cross-validan con tu cuenta**. Puedes simular C6R5 sin importar si lo tienes. Útil para teorizar pero confunde si esperas que el sim refleje tu cuenta real.

**Updates con nuevos personajes pueden tardar**. Cuando sale un personaje nuevo, suele estar disponible en el sim al day-1 del banner, pero ocasionalmente hay delays. Siempre cross-check con el patch live.

**No integra con tu inventario real**. A diferencia del Enhancement Calculator, este no lee qué tienes ni te dice qué te falta. Es pura simulación.

## Cómo empezar

Ve a HoYoLAB.com → Tools → Lineup Simulator. Para tu primera lineup, recomiendo replicar tu comp actual de Spiral Abyss para entender la interfaz: eliges tus 4 personajes con sus equipos reales, lo guardas como draft. En 5 minutos tienes feel de cómo funciona.

Después de eso, puedes probar variantes: ¿qué pasa si reemplazo a Bennett por Furina? ¿Y si cambio el weapon de Hu Tao? La iteración es donde está el valor real.

Para inspirarte: navega a "Hot Lineups" y ordena por contexto = Spiral Abyss. Vas a ver los comps top del cycle actual con sus rotaciones. Replica uno con personajes que tengas y ve ajustando.
