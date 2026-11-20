import Image, { type StaticImageData } from "next/image";
import map from "@/assets/screens/map.jpg";
import mapRecording from "@/assets/screens/map-recording.jpg";
import replay from "@/assets/screens/replay.jpg";
import settings from "@/assets/screens/settings.jpg";
import speed from "@/assets/screens/speed.jpg";

/** Real captures from the app (French UI, 738×1600), keyed like `Dictionary["screens"]["shots"]`. */
export const shots = { map, mapRecording, speed, settings, replay } satisfies Record<string, StaticImageData>;

/** A screenshot filling a PhoneFrame; the frame is a touch wider than the capture, so it crops from the bottom. */
export function Screenshot({
  src,
  alt,
  sizes = "(min-width: 768px) 250px, 70vw",
  priority = false,
}: {
  src: StaticImageData;
  alt: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      sizes={sizes}
      placeholder="blur"
      priority={priority}
      className="h-full w-full object-cover object-top"
    />
  );
}
