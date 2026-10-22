/** Point on a circle; angles in degrees, clockwise from +x (SVG's y axis points down). */
export function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function arc(cx: number, cy: number, r: number, from: number, to: number) {
  const a = polar(cx, cy, r, from);
  const b = polar(cx, cy, r, to);
  const large = to - from > 180 ? 1 : 0;
  return `M${a.x.toFixed(2)},${a.y.toFixed(2)} A${r},${r} 0 ${large} 1 ${b.x.toFixed(2)},${b.y.toFixed(2)}`;
}

/** The app's speed ramp (TrackPolylines.kt), deliberately not themed: blue when crawling, red at 120+ km/h. */
export const speedColors = ["#3DA9FC", "#30C48D", "#FFD230", "#FF8A3D", "#E5484D"];
