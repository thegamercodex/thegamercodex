---
title: TarkovTracker
description: Tracker open-source de tasks y módulos del hideout con sincronización entre miembros del team para coordinar progreso de wipe.
quickTake: TarkovTracker es la tool esencial para wipes en team. La sincronización entre cuentas te dice exactamente qué item Found-In-Raid necesita el grupo en cada momento, evitando que tres jugadores vendan el mismo wrench que el cuarto necesita para un task.
---

## Qué es

TarkovTracker es una web app open-source mantenida por la organización TarkovTracker.org en GitHub. Permite marcar progreso por task (de cada trader), por módulo del hideout y por item Found-In-Raid necesario, con sync entre miembros de un team para coordinar acumulación de items. Licencia GPL-3.0, repo público, comunidad activa de contributors.

## Qué problema resuelve

Tarkov tiene cientos de tasks y docenas de módulos de hideout. Cada task pide items específicos que muchas veces necesitan ser "Found-In-Raid" (FIR), lo que significa que solo cuentan si los loteás vos mismo. Sin tracker, es trivial perder horas farmeando algo que ya tienes o vendiendo por error un item FIR que ibas a usar para un task más adelante. TarkovTracker centraliza el state.

## Diferenciación

Frente a Tarkov Advisor (similar feature set pero closed-source, con stash y tier list extra), TarkovTracker tiene el track record más largo, es open-source y tiene la mejor implementación de team sync. La trade-off es que la UX es más minimalista — sin layout de tier list ni stash management.

## Para qué la usa la gente

- **Marcar tasks completadas** y ver next tasks disponibles por cada trader.
- **Track de items FIR** necesarios para tasks futuras, así no vendes lo que vas a necesitar.
- **Hideout module checklist** con costo total en roubles y materiales pendientes.
- **Team sync**: el wipe en grupo donde cada uno ve el progreso de los demás y coordina quien farmea qué item.
- **API GraphQL**: para devs que quieren construir dashboards encima del state de su team.

## Para quién NO es esta herramienta

Si juegas solo casualmente y no te importa optimizar quest order, puedes salir con la lista de tasks del wiki. Si quieres tier list de items por valor y stash management, Tarkov Advisor agrega esas capas.

## Cómo se usa en la práctica

1. Visita tarkovtracker.io y regístrate con email o Google.
2. En el dashboard ves todas las tasks ordenadas por trader. Marca completadas y bloqueá las que no quieres ver.
3. La sección Hideout muestra módulos pendientes con costo total y materiales necesarios.
4. Para team sync, crea un team y compartí el código con tus partners — todos ven el progreso de los demás.
5. La sección "Required Items" agrega todos los items FIR que necesitas, sumando demanda entre team members.

## Limitaciones honestas

- **UX minimalista**: efectiva pero sin frills. Si quieres tier list o stash management, no está acá.
- **Solo en inglés**: sin localización.
- **Data depende de tarkovdata**: el repo tarkovdata es la fuente de tasks/items. Cuando un parche cambia objetivos, hay lag mientras se actualiza.
- **Team sync requiere disciplina**: si los miembros no marcan progreso, el sync no aporta. Funciona mejor en teams comprometidos.

## Cómo empezar

Visita tarkovtracker.io y regístrate. Para team coordinación, el primer miembro crea el team desde Settings y comparte el invite link. El repo público en github.com/TarkovTracker/TarkovTracker acepta PRs y reporta bugs.
