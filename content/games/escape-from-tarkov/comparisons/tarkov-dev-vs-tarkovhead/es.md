---
title: Tarkov.dev vs TarkovHead — base de datos vs hub editorial
description: Las dos webs comunitarias más visibles de Tarkov. Tarkov.dev es la fuente de datos cruda; TarkovHead es la capa editorial con quests, guides y news.
---

Tarkov.dev y TarkovHead apuntan a un mismo problema (centralizar info de Tarkov) pero con filosofías opuestas. tarkov.dev es la base de datos pura, open-source, con API gratis. TarkovHead es el hub editorial con guides linkeadas, recap de TarkovTV y un panel de quests interactivo. No compiten — complementan — pero la elección de cuál abrir primero depende del trabajo a hacer.

## tarkov.dev: data primero

tarkov.dev es lo más cercano a una "fuente de verdad" estructurada que tiene la community. Items, traders, recetas, tasks, mapas, ammo charts — todo accesible vía search rápido o API GraphQL gratuita. Es read-only por diseño: no maneja tu progreso, solo te da los datos.

Esa minimalism es su feature. Cuando estás bajo presión en una raid y necesitas saber cuánto vende un item, abres tarkov.dev, escribes el nombre, lees el precio. Tres segundos.

## TarkovHead: editorial primero

TarkovHead suma capa editorial sobre los datos. Quests con video guides embebidas, recaps escritos de los streams oficiales de BSG (TarkovTV), un panel de quests con links cross-referenced a items y mapas relacionados. El layout es más rico — más cosas para mirar, más navegación entre componentes.

Para alguien que arranca un wipe y quiere entender la story de quests desde cero, TarkovHead es mejor entry point que tarkov.dev. Para alguien que necesita un dato puntual rápido, es overkill.

## Velocidad de updates

Acá tarkov.dev gana clarísimo. Como pulla datos del repo tarkovdata vía PRs automáticas y community-driven, los updates son en horas. TarkovHead, al tener capa editorial encima, requiere edits manuales a las guides escritas — eso introduce lag de días a semanas tras parches grandes.

## API y ecosystem

tarkov.dev expone GraphQL gratis y abierta. Eso significa que TarkovTracker, RatScanner, Tarkov Advisor y docenas de otras tools dependen de él. TarkovHead consume parte de esos datos también, pero no expone API equivalente. Si tu necesidad incluye programar contra los datos, tarkov.dev es la opción única.

## Cuándo gana cada uno

| Caso de uso | Ganador | Por qué |
|---|---|---|
| Buscar precio de un item ya | tarkov.dev | Search rápido sin layout extra |
| Entender quest path con guides | TarkovHead | Cross-link a guides editoriales |
| Recap de TarkovTV stream oficial | TarkovHead | Sección dedicada a esto |
| Datos numéricos actualizados | tarkov.dev | Updates en horas |
| API para tu propia tool | tarkov.dev | GraphQL gratis |
| Layout pulido para casual browsing | TarkovHead | UX más rica |

## Recomendación

Si solo abres uno, tarkov.dev — la API y velocidad lo hacen referencia operacional inevitable. Si arrancas wipe y quieres layout editorial con cross-links a guides, TarkovHead complementa bien. Ningún jugador serio usa solo uno: tarkov.dev permanente como tab abierta, TarkovHead cuando aparece un parche con event nuevo.
