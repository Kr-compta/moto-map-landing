import type { Dictionary } from "../fr";

/* English twin of ./fr.ts, from the app's res/values/strings.xml (terms_* and privacy_*). */
const legal: Dictionary["legal"] = {
  back: "Back to home",
  contents: "Contents",
  otherDoc: "See also:",
  terms: {
    title: "Terms and conditions",
    description:
      "The terms and conditions of MotoMap, the offline GPS tracker for motorcycle riders: what the app does, what it does not do, and what stays your responsibility.",
    updated: "Edition 1 · 21 October 2026",
    intro:
      "MotoMap records your rides on your phone. Here is what the app does, what it does not do, and what stays your responsibility as a rider. These terms are shown in the app before first use and can be read again at any time in Settings, under Legal.",
    sections: [
      {
        heading: "1. Accepting these terms",
        body: "MotoMap is an app for riders, and using it means accepting what is written here. They are put in front of you the first time you open the app: if you do not accept them, the app closes having recorded and kept nothing.",
      },
      {
        heading: "2. What MotoMap is",
        body: "MotoMap is a ride recorder: it reads the phone’s GPS and motion sensors to show speed and lean angle, draws your position on a map, keeps each ride, and can film the road and export a video with the figures burned in. It is not a navigation app, it gives no directions, and it is neither an emergency service nor roadside assistance. Never rely on it to call for help.",
      },
      {
        heading: "3. Riding stays your responsibility",
        body: "Ride within the law and within your own limits. Set the app up before you move off, mount the phone so it cannot come loose, and do not read the screen — or touch it — while riding. Whatever MotoMap shows, speed limits, road signs and the conditions in front of you come first. You are solely responsible for how you ride, for any offence, and for any damage, injury or loss arising from using the app on the road.",
      },
      {
        heading: "4. The figures are indicative",
        body: "Speed, distance, altitude, lean angle and position come from the consumer sensors in a phone. They drift, they lag, and they lose accuracy with poor satellite reception, in tunnels, under trees, with the phone loose in its mount, or in the cold. Nothing MotoMap shows or exports is a calibrated measurement, an official record, or evidence of how you rode. Do not use it to contest a fine, to support an insurance claim, or to prove anything.",
      },
      {
        heading: "5. Your data stays on your phone",
        body: "There is no account and no server. Rides, GPS points, trackers and video files are written to your phone’s own storage and are never uploaded anywhere by the app. Nothing is sold, shared or analysed, because nothing leaves the device. The other side of that is that nothing is backed up either: uninstalling MotoMap, clearing its data or losing the phone deletes every ride permanently, so export what matters to you. A video you share yourself leaves the app’s hands, and what happens to it afterwards is between you and wherever you sent it.",
      },
      {
        heading: "6. Permissions",
        body: "Location is used to show your position and to record a route. The camera and the microphone are used only while you have armed ride video. Notifications carry the ongoing recording notice, which is what keeps tracking alive with the screen off. Internet is used only to fetch map tiles. Any permission can be refused, or withdrawn later in your phone’s settings; the features that depend on it simply stop working.",
      },
      {
        heading: "7. Filming and sound",
        body: "If you record video, you are the one filming. The rules on capturing people, vehicles, number plates and private property, and on recording sound, differ from one country to the next, and some places forbid a camera on the handlebars outright. Check what applies where you ride before recording, and again before publishing anything. MotoMap gives you the tool; what you capture and where you post it is yours alone.",
      },
      {
        heading: "8. Maps and other people’s data",
        body: "Map tiles come from third-party services: OpenStreetMap, OpenTopoMap and HikeBikeMap. Map data is © OpenStreetMap contributors, available under the Open Database Licence. Each provider sets its own usage policy and may change, throttle or withdraw its tiles at any time — which is why OpenStreetMap’s own style cannot be downloaded as an area and only caches the roads you ride past. Use the offline download reasonably. Fetching tiles uses mobile data and can cost you money while roaming.",
      },
      {
        heading: "9. No warranty",
        body: "MotoMap is provided as it is, with no warranty of any kind. It may contain faults, it may stop recording, it may lose a ride, an export may fail, and a phone may overheat, run its battery flat or refuse to charge while filming. There is no promise that the app suits any particular purpose or that it will work on your phone.",
      },
      {
        heading: "10. Limitation of liability",
        body: "To the fullest extent the law allows, the publisher of MotoMap is not liable for any accident, injury, fine, loss of data, lost recording, damage to your phone or equipment, data charges, or any indirect loss arising from use of the app. Nothing here limits liability where the law does not allow it to be limited.",
      },
      {
        heading: "11. Age and licence",
        body: "Use MotoMap only if you are old enough to hold a licence for the vehicle you ride and are legally entitled to ride it. If you are a minor, ask the adult responsible for you before using the app.",
      },
      {
        heading: "12. Changes",
        body: "These terms may change as the app does. When a change is substantial you will be asked to read and accept the new edition at launch. The current edition and its date are at the top of this page, and you can read it again at any time from the app’s Settings.",
      },
      {
        heading: "13. Governing law and contact",
        body: "These terms are governed by the law of Madagascar. If a clause turns out to be unenforceable, the rest stays in force. For any question about them, write to amour@ramana.mg.",
      },
    ],
  },
  privacy: {
    title: "Privacy policy",
    description:
      "The MotoMap privacy policy: no account, no server, no analytics. What is stored on your phone, the little that leaves it, and your rights.",
    updated: "Updated 21 October 2026",
    intro:
      "MotoMap records your rides on your phone and leaves them there. This policy says what is stored, what little leaves the device, and what you can do about it. It is short because the app does very little with your data. It covers the app; this website counts its visitors anonymously, without cookies.",
    sections: [
      {
        heading: "1. The short version",
        body: "There is no account, no server and no analytics. MotoMap collects nothing about you, sends nothing to its publisher, and has nothing to sell. Everything it records — rides, positions, video — is written to your phone and stays there until you delete it or share it yourself.",
      },
      {
        heading: "2. What is stored on your phone",
        body: "Rides and the GPS points that make them up — time, position, speed, altitude and lean angle — go into a database in the app’s own storage, and the trackers you save during a ride sit beside them. Ride video is written as one-minute segments in the app’s own folder, with exported videos next to it. Your settings — palette, map style, language, mount and calibration — are kept as ordinary app preferences. None of it is readable by other apps.",
      },
      {
        heading: "3. What leaves the phone",
        body: "Two things, and only two. Map tiles are fetched from third-party servers — OpenStreetMap, OpenTopoMap or HikeBikeMap, whichever style you picked — so those servers see your phone’s IP address and which tiles were asked for, which roughly describes the area you are looking at. They are contacted when the map draws a tile it has not cached, or when you download an area in advance, and never to report a ride. The second is a video you share or save to the gallery yourself: the moment you hand it to another app it is out of MotoMap’s hands, and the rules of wherever you sent it apply.",
      },
      {
        heading: "4. Permissions, and what each one is for",
        body: "Location: your position on the map, your speed, and the route of a ride. Camera and microphone: only while you have armed ride video — the microphone records that video’s sound, which can be dropped again when you export. Notifications: the ongoing notice that keeps recording alive with the screen off. Internet: map tiles, nothing else. MotoMap never asks for background location; recording survives the screen going off because a foreground service was started while the app was open, not because the app watches you in the background. Any permission can be refused, or withdrawn later in your phone’s settings — the feature that needs it stops, and the rest of the app carries on.",
      },
      {
        heading: "5. No backup, no copies",
        body: "Android copies app data to the owner’s Google Drive by default, and copies it again to a new phone during a transfer. MotoMap switches both off, so nothing of yours is sent to a cloud account — not by the app, and not by the system on its behalf. The cost of that is real: uninstalling the app, clearing its data or losing the phone deletes every ride for good, so export what you would miss.",
      },
      {
        heading: "6. Keeping and deleting",
        body: "A ride is kept until you delete it, and deleting one takes its GPS points and its video segments with it. Clearing the app’s data in your phone’s settings, or uninstalling it, removes everything including the cached map tiles. A video you have already copied to the gallery or sent somewhere else is untouched by any of that — it is outside the app.",
      },
      {
        heading: "7. No ads, no analytics, no trackers",
        body: "There is no advertising, no advertising identifier, no analytics and no crash reporting. The app carries map, camera, media and database libraries only, and none of them reports back. Nothing about how you use MotoMap is measured, by its publisher or by anybody else.",
      },
      {
        heading: "8. Children",
        body: "MotoMap is for riders old enough to hold a licence for the vehicle they ride. It is not directed at children, and nothing in it is designed to attract them.",
      },
      {
        heading: "9. Your rights",
        body: "Data protection law gives you rights of access, correction, deletion and portability over personal data a company holds about you. The publisher of MotoMap holds none of yours: there is no copy of your rides anywhere but your phone, so there is nothing to request and nothing for us to erase. On the phone those rights are directly in your hands — read a ride, export it as a video, delete it, or clear the app’s data. For anything else, write to the address below.",
      },
      {
        heading: "10. Changes to this policy",
        body: "If what the app does with your data changes, this document changes with it and the date at the top moves. A change that affects what you agreed to is put in front of you at launch rather than left here to be found.",
      },
      {
        heading: "11. Contact",
        body: "Questions about this policy, or about the data the app holds: write to amour@ramana.mg. The publisher of MotoMap is established in Madagascar.",
      },
    ],
  },
};

export default legal;
