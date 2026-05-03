---
title: "CSNADES.gg"
description: "CS2 utility lineup database — smokes, flashes, molotovs, and HE grenades — organized by map, side (CT/T), origin position, destination position, and difficulty."
quickTake: "If you need to learn the exact smoke pro X throws from Y position to Z chokepoint, this is the database. Low learning curve, short video tutorials, and broad coverage of the active map pool."
---

## What it is

CSNADES.gg is a database dedicated to Counter-Strike 2 utility lineups. It organizes thousands of smokes, flashes, molotovs, and HE grenades by map, side (CT or T), origin position, destination position, difficulty, and utility type. Each lineup has a short video tutorial (~30-60 seconds) showing exactly where to stand, where to aim, and what movement to do (jumpthrow, runthrow, standthrow).

The idea is to solve the classic "I saw a pro smoke but I don't remember the lineup well" problem. Instead of rooting around YouTube for compilations or memorizing from demos, you open CSNADES, filter by map and position, and have the video ready.

It covers the CS2 active map pool (Mirage, Inferno, Dust2, Nuke, Ancient, Anubis, Vertigo, Train) with good depth. Maps outside the pool have more fragmented coverage or are absent.

## What problem it solves

Learning utility for CS is one of the game's most valuable meta-skills. A good smoke can define a round, a well-thrown flash wins a duel. But knowledge is scattered: pros throwing lineups on streams, YouTubers making long videos, reddit posts with vague descriptions.

CSNADES centralizes all that in queryable format. The information unit isn't "a 20-minute video on Mirage" but "specific smoke for CT mid Mirage to A site, executed from T spawn." Useful granularity for deliberate practice.

## What people use it for

**Learning a new map fast**: when they add a map to the pool or you want to expand your map pool, CSNADES gives you the 10-15 essential lineups without watching 4 hours of YouTube.

**Post-update refresh**: when Valve patches a map (changing sightlines, adjusting models), some lineups stop working. CSNADES flags lineups verified post-patch as priority.

**Deliberate practice**: filter "T side Mirage smokes of beginner difficulty" and assemble a set of 10 lineups to practice in a 30-min offline-map session.

**Quick warmup reference**: before a match, refresh 2-3 lineups for your usual position. The UX is optimized for fast lookups.

**Learning specific lineups you saw in pro play**: filter by "CT mid Inferno smoke to A apartment" and find multiple options, including the ones pros use.

## Who this tool isn't for

CSNADES is excellent for utility lineups but it isn't:

- **For analyzing your own performance** → that's scope.gg or Leetify.
- **For learning macro strategy** → CSNADES teaches individual executions, not rotations or macro game.
- **For practicing against bots or simulating matches** → it's only reference; practice happens in the game client.
- **For workshop or legacy maps** → coverage focuses on active pool. Cobble, Cache, old Train versions have less info.

## How it's used in practice

1. Go to `csnades.gg`. Home shows map pool with thumbnails.

2. Click on a map → map view with overlay of categorized lineups. Filters: type (smoke/flash/molly/HE), side (CT/T), difficulty (beginner/intermediate/advanced), origin, destination.

3. Click on a lineup → modal with short video, movement description (e.g., "jumpthrow + lookat point X"), and community comments.

4. For practice: set up your CS2 in offline map (`mp_warmuptime 9999; sv_cheats 1; sv_grenade_trajectory_prac_pipreview 1`) and replicate the lineup watching the video alongside.

5. If something doesn't work post-patch, comments usually flag it — the user base is active about reporting broken lineups.

## Honest limitations

**Video quality varies**: most are short and well done but some have low audio or rushed framing. Comments tend to flag it.

**Uneven utility-type coverage by map**: smokes are exhaustively covered; flashes have good coverage; molotovs are OK; HE grenades are more underdocumented (because they're used less).

**Update lag post-patch**: when Valve patches a map, there's 1-2 weeks of lag until lineups are reverified. Comments are the first signal of "this no longer works."

**Not exhaustive on pro lineups**: pro teams have custom lineups that aren't in public bases. CSNADES covers the "public and verified" universe — for deep pro stuff you need demos.

**Somewhat heavy UX on maps with many lineups**: Mirage has 200+ lineups. Filters help but the first load can feel overwhelming.

**No paid tier / no personal tracking**: 100% public reference. You can't mark lineups "already practiced" or save persistent favorites (without your own login).

## How to get started

1. Go to `csnades.gg` and pick a map you regularly play.

2. Filter by **beginner** difficulty and **smoke** type. Go from least to most complex.

3. For your first practice session: pick 5 smokes (three CT, two T) and replicate on offline map. 30 minutes is usually enough to internalize 5 lineups.

4. Set up handy CS2 commands for training:
   ```
   mp_warmuptime 9999; sv_cheats 1; sv_grenade_trajectory 1; sv_grenade_trajectory_prac_pipreview 1
   ```

5. For session-long practice: rotate 1 map per week. Repeating old lineups + adding 5 new ones keeps memorization fresh.

6. Combine with scope.gg post-match: scope shows you which smokes you threw badly in real games, CSNADES teaches you the correct version.
