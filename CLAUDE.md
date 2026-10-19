# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

The marketing landing page for **MotoMap**, an offline GPS tracker for motorcycle riders (Android).
The repository is empty for now: no framework, build tool, or test setup has been chosen yet. When
one is added, record its dev/build/lint/test commands here.

## The app this page sells: `/Users/macbook/motomap`

The Android app's source lives in a separate repository at `/Users/macbook/motomap` (Kotlin,
Jetpack Compose, osmdroid, Room; min SDK 24, target 35; package `com.motomap`, version 1.8).
It is **read-only reference** from this project: read anything there, never modify it.

Its `README.md` is the source of truth for product copy. Take features and claims from it rather
than inventing them. The parts most useful for the landing page:

- **Three tabs:** Map (offline map, live track, start/pause/finish), Speed (analogue speedometer,
  lean-angle gauge with peak hold), Trips (every saved ride with speed-coloured route and profiles).
- **Offline and private:** everything is stored on the phone, no account, nothing uploaded. Maps
  work with no signal via tile caching and area pre-download (OpenTopoMap / HikeBikeMap only; the
  standard OSM style cannot be pre-downloaded by policy).
- **Ride video:** records with the screen off, portrait or landscape mount, front or rear camera,
  segmented so a dead battery loses at most one minute.
- **Replay and export:** watch a ride with telemetry overlaid; export a single video with the ride
  burned in so it plays anywhere.
- **Survives a flat battery:** rides are checkpointed continuously and recovered after a shutdown.
- **Built for gloves:** 48dp targets, haptics, monospaced figures, state in words not just colour.

The README's "Not built yet" section lists what does **not** exist (GPX export, navigation/routing,
imperial units, auto-pause, `.mbtiles` import) — don't advertise these.

App icon background colour: `#0B0E14` (`app/src/main/res/values/colors.xml`). Launcher assets are
under `app/src/main/res/mipmap*`.

## Legal constraints that affect page content

- MotoMap is **proprietary, all rights reserved**, intended as a paid app. Don't describe it as open
  source or link the APKs in `/Users/macbook/motomap/dist/` for public download — they are
  development builds that may not be redistributed.
- Copyright © 2026 Amour Ramanantsiresy. Contact for enquiries: GitHub (https://github.com/Kr-compta).
- Any map imagery shown must keep its attribution: © OpenStreetMap contributors (ODbL), OpenTopoMap
  (CC-BY-SA), HikeBikeMap.

## Workflow

- Commit each change as its own commit once it's made.
- Commit messages must **not** include a `Co-Authored-By: Claude` trailer or any Claude attribution
  (also enforced by `attribution` in `.claude/settings.json`).
