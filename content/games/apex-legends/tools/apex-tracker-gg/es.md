---
title: "Tracker.gg — Apex Legends"
description: "Plataforma de Tracker Network dedicada a Apex Legends: stats personales y globales con KD, win rate, kills por minuto, headshot accuracy, leaderboards regionales y overlay in-game opcional vía la app Overwolf."
quickTake: "El default que todos en Apex bookmarkean tarde o temprano. La integración con Overwolf y la profundidad de leaderboards lo hacen difícil de superar, aunque la dependencia en Cloudflare y los ads pueden frustrar. Si solo abres un tracker, este."
---

## Qué es

Tracker.gg es el stats tracker multi-juego más grande de PC gaming, y Apex fue una de sus primeras integraciones importantes en 2019. La página dedicada (apex.tracker.gg) agrega data de cada match jugada por cualquier player que tenga el game vinculado a un EA account público, y la expone como dashboards con KD, win rate, damage per match, kills per minute, headshot accuracy, peak rank y más. Gratis para uso básico, con tier Premium opcional ($5/mes) que quita ads y agrega features.

## Qué problema resuelve

Apex no expone in-game stats persistentes. Tu screen post-match te muestra cuántos kills hiciste en ESA match, pero no puedes ver tu KD agregado, tu evolución por temporada, o cómo te comparas con otros players de tu rank. Tracker.gg llena ese gap: ingresas tu name + plataforma y obtienes decadas de matches procesados en stats tangibles. También permite comparar dos profiles side-by-side — útil para coaching o para verificar smurfs.

## Diferenciación

- **vs apex-legends-status**: ALS está orientado a META (qué legend pickea el top 1%, pick rates globales, win rates). Tracker.gg está orientado a tú: tus stats personales y cómo te comparas. Son complementarios, no substitutos.
- **vs Blitz.gg**: Blitz tiene overlay más feature-rich integrado (Apex companion app dentro de Blitz). Tracker.gg tiene mejor catálogo histórico y leaderboards más detallados.
- **vs Stryda.gg**: Stryda agrega gamification con challenges. Tracker.gg es más data-pura sin gamification layer.

## Para qué la usa la gente

- **Verificar tu rank progress y projection**: ver tus matches recientes, cuánto te falta para el next tier, qué legends rinden mejor en tu hands.
- **Comparar con friends/team mates**: side-by-side analysis cuando armas trios.
- **Detectar smurfs en lobbies**: subir el name del enemigo a tracker.gg te dice si es brand new account con stats sospechosamente altos.
- **Leaderboard hunting**: ver el top 100 global por damage, kills, wins, etc.
- **Overlay during play**: con la app de Overwolf, ver stats de teammates y enemies live al inicio de cada match.

## Para quién NO es esta herramienta

Si no quieres instalar Overwolf y solo quieres data sobre el meta del juego (no sobre tu performance personal), apexlegendsstatus.com te da más. Si juegas casual sin importarte tus stats, no agrega valor.

## Cómo se usa en la práctica

1. Entra a [apex.tracker.gg](https://apex.tracker.gg).
2. Search bar: ingresa tu IGN exacto + plataforma (Origin/Steam/PS/Xbox/Switch). Tu account debe ser pública en EA Account settings.
3. Una vez cargado tu profile, navega las tabs: Overview (stats core), Legends (per-legend breakdown), Weapons (gun stats), Sessions (por session).
4. Para overlay: descarga la Overwolf app desde el banner del sitio, instálala, login. La overlay aparece automáticamente al lanzar Apex.
5. Para comparar profiles: clic en "Compare" en cualquier profile y agrega hasta 4 names para comparar.

## Limitaciones honestas

- **Ads sin Premium**: free tier tiene ads visibles, especialmente en mobile. Premium ($5/mes) los quita.
- **Dependencia de Cloudflare**: tracker.gg ha tenido outages cuando Cloudflare cae. Sin failover propio.
- **Account privacy gating**: si tu EA account está private, no apareces. Default es public pero a veces players los privatizan.
- **Lag con stats post-patch**: cuando Respawn patchea, tracker tarda unos días en reflejar legends/weapons new o rebalanceadas en sus dashboards.
- **No tiene API pública gratuita** para queries programáticas. Si quieres data programmatic, las options son apexlegendsstatus o mozambiquehe.re.

## Cómo empezar

Abre [apex.tracker.gg](https://apex.tracker.gg), search tu IGN + plataforma, y bookmark tu profile. Para uso pasivo eso alcanza. Si quieres overlay en match, descarga la Overwolf app — setup inicial son 5 minutos pero después está integrado al launch del game. La Premium puede esperar hasta que confirmes que la usas frecuente y los ads te molestan.
