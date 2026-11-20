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
    cta: "Download",
    language: "Language",
    home: "MotoMap, home",
  },
  hero: {
    eyebrow: "Offline GPS tracker · Android",
    titleStart: "Ride where",
    titleHighlight: "the signal ends.",
    subtitle:
      "Live speed, lean angle and position on a map that keeps working with no signal. Every ride is kept on your phone — no account, nothing uploaded.",
    primaryCta: "Download the APK",
    secondaryCta: "See the features",
    status: "Android APK · 4.5 MB · in English and French",
    trust: ["No account", "Maps without signal", "Records with the screen off", "Android 5.0 and up"],
  },
  pillars: {
    heading: "Built for the road, not the cloud",
    intro:
      "Four promises that hold at the bottom of a valley, abroad, or on 2% battery.",
    items: [
      {
        title: "Works with no signal",
        body: "The map caches as you ride, and you can download a region in advance. No signal? Nothing changes.",
      },
      {
        title: "Records with the screen off",
        body: "Lock the phone or let the screen go dark in the cradle: the ride keeps recording, video included. A notification shows it's still running.",
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
    eyebrow: "Four tabs",
    heading: "Everything you need, at a glance",
    intro:
      "An interface you can read while riding: three screens for the road, each with one job, and Settings for everything you decide before you leave.",
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
      {
        name: "Settings",
        title: "Everything else, in one place",
        body: "Map style and offline downloads, video quality and sound, four colour palettes, light or dark mode, English or French.",
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
  allFeatures: {
    eyebrow: "Full inventory",
    heading: "Everything MotoMap does",
    intro: "Every feature in the current version, screen by screen.",
    groups: [
      {
        title: "Map",
        items: [
          "Three map styles: OpenStreetMap, OpenTopoMap and HikeBikeMap",
          "Position and heading, a rotating marker, the live track of the ride",
          "Four controls only: re-centre, strict offline, arm video, video settings",
          "GPS status (off, searching, locked): one tap opens the phone's settings",
          "While riding: speed, lean, distance, duration and average, with RECORDING or PAUSED spelled out",
          "Camera monitor with a REC timer, enlarged with a tap",
        ],
      },
      {
        title: "Offline",
        items: [
          "Every tile drawn is kept on the phone, with no expiry",
          "Area download: frame a region, pick a detail level (up to 25,000 tiles)",
          "Each style says whether it can be downloaded; for OpenStreetMap, which can't, the app offers OpenTopoMap or HikeBikeMap",
          "Strict offline mode: no roaming data used",
        ],
      },
      {
        title: "Speedometer",
        items: [
          "Full-screen analogue speedometer",
          "Lean gauge with left and right peaks held",
          "Lean zeroing for your mount, one zero for portrait and one for landscape",
          "Distance, time, top speed and moving average",
          "Heading and altitude",
        ],
      },
      {
        title: "Recording",
        items: [
          "Keeps going with the screen off or the phone locked, shown by an ongoing ride notification",
          "Saved continuously every five seconds, not just at the end",
          "A ride cut short is recovered and marked \"recovered\"; a clean stop when the battery runs critical",
          "An accidental start (fewer than three fixes) is dropped, unless it carries video",
          "Filtered GPS: inaccurate fixes and impossible jumps rejected, Doppler speed, no Google Play Services",
          "Peak lean only counted above 11 km/h",
        ],
      },
      {
        title: "Ride video",
        items: [
          "Armed from the map, for the whole ride",
          "Phone in portrait or landscape, front or rear camera, resolution, sound",
          "Front camera never mirrored; if the chosen lens is missing, the other one takes over and you're told",
          "One-minute segments: a power cut costs only the segment in progress",
          "Files private to the app, no storage permission, deleted with their ride",
        ],
      },
      {
        title: "Trips",
        items: [
          "Every ride listed, with the total distance and each ride's key figures",
          "Route coloured by speed, with a legend, start and finish",
          "Distance, duration, top speed, average, peak lean left and right, moving time, elevation gain",
          "Speed and lean profiles, with the peak marked",
          "Rename or delete a ride",
        ],
      },
      {
        title: "Replay",
        items: [
          "The footage with the exact telemetry of every frame",
          "A real map inset that follows the bike, available offline",
          "Segments stitched into one playback, locked to real time",
          "Scrub bar and playback speed",
          "Separate quarter-turn rotation for the picture and the panel",
          "The name of the place you rode through, looked up only during replay, never while riding",
        ],
      },
      {
        title: "Video export",
        items: [
          "A single MP4 with the telemetry burned in, plays anywhere",
          "Editor: drag, enlarge, shrink or remove each element, and check it at any moment of the ride",
          "Eight elements: speed, lean, map, distance, ride time, top speed, altitude, title and date",
          "The map comes off in one tap, and your layout is remembered",
          "As filmed, 1080p or 720p, with or without sound",
          "Share to another app, or copy to the gallery (Android 10 and up)",
        ],
      },
      {
        title: "Settings",
        items: [
          "Four palettes: orange, crimson, racing blue, hi-vis yellow",
          "Light, dark, or follow the phone",
          "Map style and offline downloads",
          "Video quality and sound",
          "English or French, down to the notification and exported videos",
          "Terms, privacy policy and app version",
        ],
      },
      {
        title: "First launch",
        items: [
          "Terms shown before anything else, in English and French",
          "Five-step guided setup: the app, location and why, the map style, how offline works, the first area",
          "The first area is checked to really work offline before you start",
          "\"Not now\" if you have no connection",
          "Updates install over the old version, keeping your rides",
        ],
      },
    ],
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
        q: "Can I turn the screen off during a ride?",
        a: "Yes. The screen stays on while the app is open, which suits a cradle, but you can lock the phone or put it in a pocket: position, stats and video keep recording, shown by a notification. Only arming video needs the app open.",
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
        a: "Android 5.0 and newer. On the oldest phones ride video may not work; everything else does. There's no iPhone version for now.",
      },
      {
        q: "Where do I get it?",
        a: "From the button on this page: the APK (4.5 MB) is hosted on Google Drive. Open it on your phone; Android asks once to allow installs from the app you used (Drive, Chrome or Files). Google Play Protect may warn about an unknown developer: choose \"Install anyway\". A new version installs over the old one and keeps your rides.",
      },
    ],
  },
  cta: {
    heading: "Your next ride deserves better than one bar of signal.",
    body: "Download the APK, install it, save your area and go. No account, no signal needed.",
    button: "Download the APK",
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
    shots: {
      map: "MotoMap's Map screen: offline map and the Start ride button",
      mapRecording: "The Map screen during a ride: recording, speed, lean, distance, duration, Pause and Finish buttons",
      speed: "The Speed screen: analogue speedometer and lean-angle gauge",
      settings: "The Settings screen: map style, offline maps, video quality, sound and language",
      replay: "A ride replay: road footage with speed, lean, distance and a map inset",
    },
    distance: "Distance",
    time: "Time",
    trips: "Trips",
    offline: "Offline",
    maxSpeed: "Max",
    tripNames: ["Col de la Croix", "Tarn Gorges", "Ridge Road"],
    tripDates: ["Sat 12 Sep", "Sun 6 Sep", "Sat 29 Aug"],
    recovered: "Recovered",
  },
};

export default en;
