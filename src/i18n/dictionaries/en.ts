import type { Dictionary } from "./fr";
import legal from "./legal/en";

const en: Dictionary = {
  meta: {
    title: "MotoMap — Offline motorcycle GPS tracker for Android",
    description:
      "Live speed, lean angle and position on a map that keeps working with no signal. Ride video, telemetry replay and export. Everything stays on your phone: no account, nothing uploaded.",
    keywords: [
      "offline motorcycle GPS",
      "motorcycle GPS tracker",
      "motorcycle lean angle app",
      "motorcycle speedometer app",
      "Android motorcycle app",
      "offline maps for riders",
      "motorcycle ride recorder",
      "motorcycle dash cam app",
    ],
    ogAlt: "MotoMap — the offline GPS tracker for motorcycle riders",
  },
  nav: {
    skip: "Skip to content",
    features: "Features",
    video: "Video",
    offline: "Offline",
    faq: "FAQ",
    cta: "Google Play",
    language: "Language",
    home: "MotoMap, home",
  },
  hero: {
    eyebrow: "Offline GPS tracker · Android",
    titleStart: "Ride where",
    titleHighlight: "the signal ends.",
    subtitle:
      "Live speed, lean angle and position on a map that keeps working with no signal. Every ride is kept on your phone — no account, nothing uploaded.",
    primaryCta: "Get it on Google Play",
    secondaryCta: "See the features",
    status: "On Google Play · in English and French",
    trust: ["No account", "Maps without signal", "Android 7.0 and up"],
  },
  pillars: {
    heading: "Built for the road, not the cloud",
    intro:
      "Three promises that hold at the bottom of a valley, abroad, or on 2% battery.",
    items: [
      {
        title: "Works with no signal",
        body: "The map caches as you ride, and you can download a region in advance. No signal? Nothing changes.",
      },
      {
        title: "Your rides stay yours",
        body: "No account, no server, no ads or analytics. Trips, stats and video are stored on the phone and nowhere else.",
      },
      {
        title: "Survives a flat battery",
        body: "The ride is saved continuously. If the phone dies, it is recovered on the next launch, footage included.",
      },
    ],
  },
  tabs: {
    eyebrow: "Three screens for the ride",
    heading: "Everything you need, at a glance",
    intro:
      "An interface you can read while riding: three screens, each with one job. Everything else waits in Settings: four colour palettes, light or dark mode, English or French.",
    items: [
      {
        name: "Map",
        title: "Your track, live",
        body: "Offline map, your position and heading, the track being recorded, and the start / pause / finish controls.",
      },
      {
        name: "Speed",
        title: "Speedometer and lean",
        body: "Full-screen analogue speedometer, lean-angle gauge with peak-hold marks, and the live stats for the ride.",
      },
      {
        name: "Trips",
        title: "Every ride, kept",
        body: "The route coloured by speed, the full summary, and speed and lean profiles across the whole ride.",
      },
    ],
  },
  video: {
    eyebrow: "Ride video",
    heading: "Film the road, screen off",
    body: "Arm the camera and ride. Recording carries on even when the screen goes dark in the mount.",
    points: [
      {
        title: "Portrait or landscape",
        body: "Tell the app how the phone sits in its cradle: footage keeps a level horizon and the screen turns with it.",
      },
      {
        title: "Front or rear camera",
        body: "The road ahead, or the rider. Recordings are never mirrored, so road signs read the right way round.",
      },
      {
        title: "One minute lost, at worst",
        body: "Video is recorded in one-minute segments. A dead battery only costs the segment in progress.",
      },
    ],
  },
  replay: {
    eyebrow: "Replay and export",
    heading: "Relive every corner, then share it",
    body: "Watch the ride with telemetry overlaid: speed, lean with its peaks, distance, time, and a map inset that follows the bike.",
    exportTitle: "One video that plays anywhere",
    exportBody:
      "Export a single MP4 with the ride burned into the picture. Drag each piece into place — speed, lean, map, distance, ride time, top speed, altitude, title — or switch it off. Then share it, or save it to the gallery.",
    privacy:
      "The map inset comes off in one tap: sharing a corner shouldn't mean sharing the road home.",
  },
  battery: {
    eyebrow: "Flat battery",
    heading: "The phone dies, the ride doesn't",
    body: "MotoMap doesn't wait for the end of the ride to save it. A sudden shutdown won't cost you the day.",
    steps: [
      {
        title: "Continuous checkpoints",
        body: "Distance, top speed, moving time and peak lean are written to disk every five seconds.",
      },
      {
        title: "Segmented video",
        body: "Every filmed minute becomes a playable file the moment it closes. Replay stitches them back seamlessly.",
      },
      {
        title: "Automatic recovery",
        body: "A ride left open by a shutdown is closed and kept on the next launch, flagged as recovered.",
      },
    ],
  },
  gloves: {
    eyebrow: "Built for gloves",
    heading: "Readable at a glance, usable with gloves",
    intro: "Every detail of the interface is designed for a quick look and a gloved hand.",
    items: [
      {
        title: "Large touch targets",
        body: "48dp minimum buttons, well spaced, so a gloved finger lands where it means to.",
      },
      {
        title: "Haptic feedback",
        body: "A vibration confirms start, pause and finish, so you never take your eyes off the road.",
      },
      {
        title: "Monospaced figures",
        body: "Digits don't change width as they count, so the readout never twitches at speed.",
      },
      {
        title: "State in words",
        body: "RECORDING and PAUSED are spelled out, never colour alone, readable even through a tinted visor.",
      },
      {
        title: "Pause and Finish kept apart",
        body: "Two deliberately unequal buttons, so a ride isn't ended by mistake at a junction.",
      },
      {
        title: "Respects reduced motion",
        body: "The REC dot stops blinking when the system asks for less motion.",
      },
    ],
  },
  offline: {
    eyebrow: "Offline, for real",
    heading: "Two ways to have the map without signal",
    intro: "Offline is set up on first launch: guided setup saves a first area and checks that it really renders with no network.",
    steps: [
      {
        title: "Ride-past caching",
        body: "Every tile drawn is kept and never expires. Ride a road once with signal and it renders forever without.",
      },
      {
        title: "Area pre-download",
        body: "Frame a region, pick a detail level and download it before you leave.",
      },
    ],
    toggleTitle: "Strict offline mode",
    toggleBody:
      "One button stops the map requesting anything over the network, so a ride abroad can't quietly burn roaming data.",
    styleNote:
      "Area download works with the OpenTopoMap and HikeBikeMap styles. The standard OpenStreetMap style can't be pre-downloaded (OSM tile usage policy), but it still caches normally as you ride.",
  },
  faq: {
    heading: "Frequently asked questions",
    items: [
      {
        q: "Do I need a signal to use MotoMap?",
        a: "No. GPS works with no network, and the map renders offline for any area you've ridden or downloaded in advance. The network is only used to load new map tiles.",
      },
      {
        q: "Do I need to create an account?",
        a: "No. There's no account and no sign-up. Install the app and ride.",
      },
      {
        q: "Are my rides uploaded anywhere?",
        a: "No. Trips, GPS points and video are stored only on your phone. The only network requests are for map tiles. During a replay, the name of the place you rode through comes from the phone's own geocoder; nothing is looked up while you ride.",
      },
      {
        q: "Does MotoMap need Google services?",
        a: "No. Position comes straight from the phone's GPS chip, without Google Play Services. Speed uses the GNSS Doppler measurement where available, which is more accurate than working it out from positions.",
      },
      {
        q: "How accurate is the lean angle?",
        a: "It follows the bike into and out of corners faithfully thanks to the gyroscope, but can underestimate in long, steady corners — a physical limit of any phone-based measurement. It's a riding aid, not instrumentation.",
      },
      {
        q: "What happens if my phone dies mid-ride?",
        a: "The ride is saved continuously. On the next launch it is recovered with its stats and video segments; at worst you lose the last filmed minute.",
      },
      {
        q: "Does MotoMap do turn-by-turn navigation?",
        a: "No. MotoMap shows where you are and where you've been; it doesn't plan routes. It works well alongside your navigation app.",
      },
      {
        q: "Are my rides backed up to the cloud?",
        a: "No, on purpose. MotoMap even switches off Android's automatic backup to Google Drive, so nothing about your rides leaves the phone. The flip side is that uninstalling the app or losing the phone deletes your rides; export the ones that matter as video.",
      },
      {
        q: "Which languages?",
        a: "English and French. The app follows your phone's language, and you can pick the other one in Settings.",
      },
      {
        q: "Which phones does it run on?",
        a: "Android 7.0 and newer. There's no iPhone version for now.",
      },
      {
        q: "Where do I get it?",
        a: "On Google Play: search for \"MotoMap\" or follow the button on this page.",
      },
    ],
  },
  cta: {
    heading: "Your next ride deserves better than one bar of signal.",
    body: "Install MotoMap from Google Play, download your area and go. No account, no signal needed.",
    button: "Get it on Google Play",
  },
  footer: {
    tagline: "The offline GPS tracker for motorcycle riders.",
    rights: "All rights reserved.",
    proprietary: "MotoMap is proprietary software.",
    contact: "Contact",
    mapData: "Map data",
    language: "Language",
    legal: "Legal",
    terms: "Terms and conditions",
    privacy: "Privacy policy",
  },
  legal,
  screens: {
    speedUnit: "km/h",
    lean: "Lean",
    peak: "Peak",
    recording: "REC",
    paused: "PAUSED",
    distance: "Distance",
    time: "Time",
    average: "Average",
    pause: "Pause",
    finish: "Finish",
    trips: "Trips",
    offline: "Offline",
    maxSpeed: "Max",
    tripNames: ["Col de la Croix", "Tarn Gorges", "Ridge Road"],
    tripDates: ["Sat 12 Sep", "Sun 6 Sep", "Sat 29 Aug"],
    recovered: "Recovered",
    replay: "Replay",
  },
};

export default en;
