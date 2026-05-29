---
title: "Last Epoch Info (TunkLab)"
description: "Database independiente de Last Epoch hospedada por TunkLab. Cubre items, affixes, uniques, skills, classes, monolith timelines, faction info, plus calculators dedicados de defense, ward y damage. Bias hacia reference técnica, no editorial."
quickTake: "Para theorycrafters que necesitan datos crudos: TunkLab tiene la database más completa de mecánicas de LE, plus calculators que ninguna otra fuente ofrece. La UI es spartan, sin curaduría editorial — solo data. Indispensable si vas a hacer cálculos serios."
---

## Qué es

Last Epoch Info (lastepoch.tunklab.com) es la sección LE de TunkLab, una plataforma de databases gaming-focused. Mantiene database exhaustiva de mecánicas del juego con calculators dedicados que no existen en otro lado.

Provee:
- **Equipment Database**: items por tipo (helmets, body armor, weapons, etc.) con stat ranges.
- **Affixes**: prefixes y suffixes con tier breakdowns y class restrictions.
- **Unique Items**: catalog completo con stats y notes.
- **Skills**: árbol completo per skill activa con nodos y efectos.
- **Classes**: passive trees de cada clase y mastery.
- **Monolith Timelines**: las 10 timelines del Monolith con blessings que rolean.
- **Factions**: info de Merchant's Guild y Circle of Fortune (ranks, prophecies).
- **Calculators**: defense, ward, damage — input stats y ves outputs precisos.

Free, sin login.

## Qué problema resuelve

Para theorycrafters: cuando estás optimizando ward stacking o calculando defense layers, necesitas saber **exactamente** cómo se computa cada stat — qué es additive, qué es multiplicative, qué orden de operaciones aplica. TunkLab tiene esto documented y con calculators que te dejan input valores.

Para builders que quieren saber **todos los affixes que pueden rollear en un slot específico**, TunkLab tiene la tabla más limpia (mejor que Last Epoch Tools para esta tarea específica).

Para players curiosos sobre **monolith blessings**: la tabla de qué blessings rolean en qué timeline es referencia obligatoria para planificar progression.

## Diferenciación vs Last Epoch Tools

- **TunkLab**: database pura + calculators. No tiene planner ni builds. UI técnica, sparkline editorial.
- **Last Epoch Tools**: database + planner + builds + community features. UI amigable, más casual.

Use case ideal: TunkLab para lookup específico ("qué affixes puede tener este item base"), LE Tools para todo lo demás.

## Para qué la usa la gente

**Calculator de defense**: input HP base, armor, dodge, glancing blow, resistances y ves effective HP exacto. Critical para validar si tu build sobrevive Tier 4 corruption.

**Calculator de ward**: input ward decay rate, generación, max ward y ves dinámica per second. Ward es uno de los stats más complejos de LE, este calculator es el único que lo computes bien.

**Calculator de damage**: input base damage, multipliers, conditional bonuses y ves output final. Útil para verificar claims sin instalar PoB.

**Affix lookup por slot**: vas a Equipment → eliges base type → ves todos los affixes posibles con sus ranges.

**Blessings de timeline X**: monolith section te dice qué blessings rolean dónde, útil para targeting durante echoes.

## Para quién NO es esta herramienta

- **Casuals que solo quieren copiar un build**: TunkLab no te dice qué build usar. Solo data. Vas a LE Tools o Maxroll.
- **Players que quieren UI bonita**: TunkLab es funcional pero spartan. Tablas crudas, poco styling.
- **Quienes quieren planificar build interactivo**: no hay planner. Solo lookup.
- **Hispanohablantes**: solo inglés.

## Cómo se usa en la práctica

1. Anda a [lastepoch.tunklab.com](https://lastepoch.tunklab.com/).

2. **Para lookup de item**: menu → **Equipment** → filtras por type → eliges base → ves affixes posibles.

3. **Para affix specifico**: menu → **Affixes** → buscas por nombre → ves tier range y restrictions.

4. **Para unique**: menu → **Uniques** → buscas por nombre o filter por slot.

5. **Para skill tree completo**: menu → **Skills** → eliges skill → ves todos los nodos y efectos.

6. **Para calculator**: menu → **Tools** → eliges calc específico → input stats → output.

7. **Para monolith**: menu → **Monolith** → ves timelines y blessings.

## Limitaciones honestas

**UI dated**: el diseño es funcional pero no moderno. Tablas crudas, navigation con menos polish que LE Tools.

**Sin planner ni builds**: no usar como hub principal. Tiene que ser complemento de otro tool.

**Sin community features**: no hay sharing, profiles, ladders.

**Updates dependen de TunkLab**: el sitio es proyecto secundario para el operador (también mantiene PoEDB). Si TunkLab está busy en otro juego, LE updates pueden lagear 1-2 semanas.

**No tiene búsqueda global**: cada sección tiene su propio search. Buscar across categories requiere clicks extra.

**No mobile-first**: usable en mobile pero diseñado para desktop.

## Cómo empezar

1. [lastepoch.tunklab.com](https://lastepoch.tunklab.com/). Sin signup.

2. **Para empezar**: home tiene cards a cada sección. Eliges la que necesitas.

3. **Para theorycrafters**: bookmark directamente Tools/Calculators. Es el único site que ofrece esos calcs específicos.

4. **Para lookups rápidos**: Usa el search dentro de cada sección.

5. **Combo recomendado**: TunkLab para lookup específico + LE Tools para todo lo demás. Los dos juntos cubren database needs al 100%.
