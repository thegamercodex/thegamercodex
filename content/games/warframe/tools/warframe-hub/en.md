---
title: "Warframe Hub"
description: "Web dashboard of Warframe's world state: Cetus, Vallis and Cambion day/night cycles, void fissures, sorties, invasions, Nightwave, Baro Ki'Teer and events in real time."
quickTake: "Warframe's world clock on a single screen. You open it to know whether it's day in Cetus, which fissures are active and when Baro arrives."
---

## What it is

Warframe Hub is the game's classic world-state dashboard. On a single screen it shows: the Cetus, Orb Vallis and Cambion Drift day/night cycles, active void fissures, the daily sortie, invasions, Nightwave, the Baro Ki'Teer countdown, arbitrations and ongoing events.

It's maintained by WFCD on the open `warframestat.us` API, which powers most of the ecosystem's trackers. It's free, ad-free and open source.

## What problem it solves

Much of Warframe's content is tied to real time. Quality fishing and mining in Cetus depend on the day/night cycle; certain fissures appear and disappear; Baro Ki'Teer only arrives every two weeks with rotating stock; the sortie and arbitrations change daily. The game shows some of this, but scattered and without clear countdowns.

Warframe Hub centralizes everything into one view with precise timers. You know at a glance whether it's worth fishing now or waiting for nightfall, which fissures are available to crack your relics, and how long until Baro arrives. It's session planning: you decide what to do based on what's active.

## Differentiation

Versus Tenno Tools, Warframe Hub is the full panoramic dashboard: the whole world state at a glance. Tenno Tools leans more on notifications (browser/push) so you don't miss time-limited rewards. Hub to view the full state, Tenno Tools if you want active alerts.

Versus Cephalon Navis (an Android app), Hub is the web/desktop version. They share the same data backend (`warframestat.us`): you pick Hub in the browser, Navis on your phone.

## What people use it for

**Checking the Cetus/Vallis/Cambion cycle**: key for fishing, mining or hunting at the optimal moment (day vs night).

**Viewing active fissures**: to plan which relics to crack based on the available fissures.

**Waiting for Baro Ki'Teer**: the countdown and, when he arrives, his rotating inventory.

**Following Nightwave and sorties**: the daily/weekly tasks and their rewards.

**Planning arbitrations and invasions**: rotating content with specific rewards.

## Who this tool isn't for

If you want alerts that notify you actively (without having to open the page), Tenno Tools or Cephalon Navis with notifications fit better.

If you play casually without chasing time-gated content, the Hub adds little — its value is in optimizing around what's active.

## How it's used in practice

1. Go to `hub.warframestat.us`.
2. Pick your platform (PC/PS/Xbox/Switch) if the timers differ.
3. Look at the panel: cycles, fissures, sortie, Baro, Nightwave.
4. Decide your session based on what's active (e.g. "it's night in Cetus, I'll go hunting").
5. Check back when you switch activity.

## Honest limitations

**English only**: the interface isn't translated.

**It's informational, not actionable**: it tells you what's active, but doesn't take you there or alert you on its own (for alerts, Tenno Tools/Navis).

**API-dependent**: if `warframestat.us` hiccups, data can lag momentarily.

## How to get started

No registration needed. Go to `hub.warframestat.us`, select your platform and bookmark it. The most useful move is to open it at login to decide what to do based on the world state, and check back when you switch activity.
