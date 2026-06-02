---
title: TarkovTracker vs Tarkov Advisor — qué tracker de tasks usar
description: "Las dos tools dominantes para track de quests y hideout en Tarkov. Misma misión, filosofías opuestas: minimalism open-source vs feature-rich con stash y tier list."
---

TarkovTracker y Tarkov Advisor compiten directamente por el mismo trabajo: ayudarte a no perderte en los cientos de tasks y docenas de módulos del hideout de Escape from Tarkov. Pero las dos tools tomaron caminos editoriales opuestos. Una es minimalista y open-source; la otra suma stash management, tier lists y planner visual. Elegir bien depende menos de qué hace cada una y más de cómo quieres trabajar.

## Filosofías opuestas

TarkovTracker apareció primero, en 2018, y se mantuvo fiel a la filosofía minimalista que la mayoría de jugadores hardcore prefiere: hace una cosa muy bien (track de tasks y hideout) y no agrega nada que no haga falta. La organización TarkovTracker.org en GitHub mantiene el proyecto bajo GPL-3.0, con tarkovdata como el repo base que también alimenta a otras tools. La comunidad de contributors es activa y las decisiones de feature están abiertas en issues públicos.

Tarkov Advisor llegó después, en 2020-2021, con una premisa distinta: ¿por qué tener cinco tabs abiertas (tracker, tier list, stash, hideout planner, item prices) cuando puede ser una sola? Implementó task tracking, pero sumó stash management para inventariar items, tier list por value-per-slot y planner gráfico de hideout con dependency tree. Reporta 80,000+ usuarios activos. La trade-off es que es closed-source y su feature set "todo en uno" implica decisiones de UX más opinadas.

## Team sync — la diferencia más práctica

Acá TarkovTracker gana claramente. Su feature de team sync es la más madura del ecosistema: creas un team, compartes el invite, y cada miembro ve el progreso de los demás. La sección Required Items agrega todos los items Found-In-Raid que cualquier miembro del team necesita, así nadie vende por error un wrench que otro jugador va a necesitar para una task más adelante.

Tarkov Advisor también tiene team sync, pero menos refinado. Funciona para grupos chicos pero la agregación de required items es menos clara. Si tu wipe es solo, esto no importa. Si es en team comprometido, TarkovTracker es la opción correcta — por eso es la tool que la mayoría de organizaciones de Tarkov adopta.

## Stash management

Acá Advisor gana sin discusión. Su sistema te permite marcar items que tienes guardados en tu stash actual. Una vez inventariado, el sistema cruza ese state con tus tasks pendientes y hideout upgrades para mostrarte exactamente qué te falta — y qué te sobra que puedes vender o usar.

TarkovTracker no tiene esta feature. Para él, tu stash es invisible: solo sabe qué tasks marcaste como completadas y qué items dijiste tener (no cuántos). Si tu valor en la tool incluye gestionar el caos de un stash de 60+ items con tasks de FIR pendientes, Advisor te ahorra horas. Si tu wipe es más simple, la feature es overkill.

## Tier list por value-per-slot

Otra feature exclusiva de Advisor: ranking de items por valor por slot del stash. En Tarkov el slot es recurso escaso y caro de expandir (los upgrades del Stash module en hideout cuestan mucho). Saber que un item que ocupa 4 slots vale lo mismo que uno que ocupa 1 te ayuda a decidir qué loot mantener vs vender.

TarkovTracker no tiene tier list — su filosofía minimalista no la incluye. Para conseguir el equivalente tendrías que cruzar tarkov.dev a mano. Para flippers o jugadores que optimizan stash al máximo, Advisor es la diferencia.

## UX y curva de aprendizaje

TarkovTracker tiene UX minimalista — efectiva pero sin frills. La home muestra tasks ordenadas por trader, tus completadas, las disponibles, y nada más. Setup es instantáneo: login con email/Google, marca lo que ya hiciste, listo.

Advisor te da más layout: dashboard con módulos separados (tracker, stash, hideout planner, tier list, items), navegación entre ellos cross-linked. La curva inicial es más empinada — saber qué módulo mirar para qué decisión toma una semana. Pero una vez orientado, tienes más en una sola vista.

## Hideout planning

Tarkov tiene 30+ módulos del hideout con dependencias intrincadas (algunos requieren otros módulos pre-levelaeados, otros requieren items FIR específicos). TarkovTracker te lista pending modules con costo total y materiales necesarios — útil pero plano.

Advisor te da un dependency tree visual que muestra qué desbloquea qué. Para planificar la orden óptima de upgrades en un wipe largo, eso es genuinamente más útil. Otra vez: si tu hideout strategy es "subir cuando se puede", overkill. Si optimizas cada upgrade, vale la pena.

## Sostenibilidad y data sources

Ambas tools dependen de la API de tarkov.dev para datos de items y precios. Eso es bueno (consistencia en el ecosistema) y arriesgado (si tarkov.dev se rompe, ambas sufren).

La diferencia es que TarkovTracker, siendo open-source, tiene fallback: si los maintainers desaparecen, alguien puede forkear y continuar. Advisor depende de la empresa o individuo que lo mantiene. La track record es buena (años activos) pero el riesgo de discontinuación es mayor.

## Cuándo gana cada una

| Caso de uso | Ganador | Por qué |
|---|---|---|
| Team wipe coordinado | TarkovTracker | Team sync más maduro con required items agregados |
| Track de tasks solo, simple | TarkovTracker | UX limpia, sin features extra que distraen |
| Stash de 100+ items pidiendo orden | Tarkov Advisor | Stash management que TarkovTracker no tiene |
| Decidir loot por value-per-slot | Tarkov Advisor | Tier list integrada |
| Plan hideout con muchas dependencias | Tarkov Advisor | Dependency tree visual |
| Necesidad de contribuir o auditar código | TarkovTracker | Open-source en GitHub |
| Single login para todo el companion | Tarkov Advisor | Todo bajo el mismo login Google |
| Tool sostenible a largo plazo | TarkovTracker | Open-source = forkable si falla maintainer |

## Recomendación combinada

Si tu wipe es solo y no te obsesionas con value-per-slot, TarkovTracker es la opción correcta: minimalista, open-source, hace una cosa muy bien. Si tu wipe es en team de 3-5, TarkovTracker también gana por team sync. Si solo o no, pero quieres stash management, tier list y hideout planner visual, Advisor te justifica el feature-creep adicional. La mayoría de jugadores serios usa TarkovTracker por team sync y va a tarkov.dev directamente para los datos extra; algunos minoritarios prefieren la integración de Advisor. Ninguna de las dos es mala — son diferentes editorialemente y la elección depende de tu workflow real.
