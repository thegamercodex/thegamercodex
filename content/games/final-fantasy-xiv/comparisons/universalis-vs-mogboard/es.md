---
title: "Universalis vs Mogboard — qué market tracker usar"
description: "Comparativa entre los dos market board trackers cross-world de FFXIV. Universalis dominó la categoría; Mogboard sigue activo como alternativa."
---

Ambos rastrean precios del market board cross-world consumiendo data crowdsourceada por plugins Dalamud. La pregunta no es cuál es "mejor" en abstracto — es cuál encaja mejor en tu workflow.

## Por qué Universalis ganó la categoría

Universalis lanzó después que Mogboard, pero crecio más rápido por dos razones concretas:

1. **Pool de uploaders más grande**. Universalis fue agresivo en convocar contributors via plugin de Dalamud Marketboard Uploader. Mogboard también acepta uploads pero su comunidad es más chica. Resultado: en servers populares, Universalis suele tener data fresca a minutos; Mogboard puede tener data de hace 1-3 días en items menos populares.

2. **API pública robusta y bien documentada**. Tools third-party (Teamcraft, varios scripts/bots de FC) consultan a Universalis por default porque su API es estable y documentada. Mogboard tiene API también pero no se volvió el standard.

Para uso diario, Universalis es la opción. Esa es la realidad práctica para 95% de los usuarios.

## Cuándo Mogboard sigue valiendo la pena

Aunque secundario, Mogboard tiene su lugar:

**Como backup**. Universalis ocasionalmente tiene downtime (mantenimiento, problemas de scaling). Cuando eso pasa y necesitas chequear un precio urgente, Mogboard suele estar funcional con data similar.

**UI clásica preferida**. Algunos usuarios prefieren la UI más sobria de Mogboard para queries puntuales sin distractions. Es preferencia personal — ambos tienen los mismos datos core.

**Si ya estás en el ecosistema XIVAPI**. Mogboard es parte de la suite XIVAPI (de Vekien). Si construyes un bot o script que ya consulta XIVAPI para items, NPCs, lore, etc., Mogboard integra de forma natural en ese flow.

## Lo que ninguno cubre bien

Ambos dependen del Dalamud Marketboard Uploader, lo cual genera issues comunes:

- **Plugin TOS gray area**: técnicamente Square Enix no aprueba ese plugin. En la práctica nadie ha sido baneado, pero el riesgo existe.
- **Servers chicos con poca data**: JP small datacenters y NA/EU lesser-populated servers tienen data más esparsa. Ningún tool resuelve esto — es problema de adopción comunitaria.
- **Sin predicción de futuro**: ambos son históricos. Si el precio de un item va a subir mañana porque sale un patch, ninguno te lo dice.

## Recomendación práctica

- **Usuario casual o serio con uso diario**: Universalis. Sin debate.
- **Quien busca un backup**: ten Mogboard bookmarkeado por si Universalis está down.
- **Quien construye tooling propio**: API de Universalis es la opción default. Mogboard como secundario.
- **Quien valora UI minimalista sobre fresh data**: Mogboard puede ganar por preferencia personal.

En la práctica, los dos hacen lo mismo. La diferencia operativa es Pool de uploaders y adopción community. Universalis ganó esa carrera; Mogboard sobrevive como alternativa viable pero no líder.
