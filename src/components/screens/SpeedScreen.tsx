import type { Dictionary } from "@/i18n/dictionaries";
import { arc, polar } from "./geometry";

const MAX = 220;
const START = 150;
const SWEEP = 240;
const angleFor = (kmh: number) => START + (SWEEP * kmh) / MAX;
const leanAngle = (deg: number) => 270 + deg * 1.5;

/** The Speed tab: analogue speedometer, lean gauge with peak-hold marks, live ride stats. */
export function SpeedScreen({ t, label }: { t: Dictionary["screens"]; label: string }) {
  const speed = 87;
  const lean = -32;
  const peaks = [-41, 38];
  const needle = polar(150, 200, 92, angleFor(speed));
  const leanTip = polar(150, 430, 86, leanAngle(lean));

  return (
    <svg viewBox="0 0 300 600" role="img" aria-label={label} className="h-full w-full">
      <rect width="300" height="600" fill="#171411" />

      {/* Status */}
      <g transform="translate(20 52)">
        <rect width="86" height="24" rx="12" fill="#28231F" />
        <circle className="rec-dot" cx="14" cy="12" r="4.5" fill="#E26464" />
        <text x="25" y="16.5" fill="#ECEAE9" fontSize="11" fontWeight="700" letterSpacing="0.08em">
          {t.recording}
        </text>
      </g>
      <text x="280" y="68" textAnchor="end" fill="#C0B9B4" fontSize="11" className="font-mono tabular">
        1:12:48
      </text>

      {/* Speedometer */}
      <path d={arc(150, 200, 110, START, START + SWEEP)} stroke="#28231F" strokeWidth="14" fill="none" strokeLinecap="round" />
      <path d={arc(150, 200, 110, START, angleFor(speed))} stroke="#F56E0A" strokeWidth="14" fill="none" strokeLinecap="round" />
      {Array.from({ length: 12 }, (_, i) => i * 20).map((v) => {
        const a = polar(150, 200, 96, angleFor(v));
        const b = polar(150, 200, v % 40 === 0 ? 86 : 90, angleFor(v));
        const l = polar(150, 200, 72, angleFor(v));
        return (
          <g key={v}>
            <line x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#4B443F" strokeWidth="2" />
            {v % 40 === 0 && (
              <text x={l.x} y={l.y + 4} textAnchor="middle" fill="#C0B9B4" fontSize="10" className="font-mono">
                {v}
              </text>
            )}
          </g>
        );
      })}
      <line x1="150" y1="200" x2={needle.x} y2={needle.y} stroke="#ECEAE9" strokeWidth="5" strokeLinecap="round" />
      <circle cx="150" cy="200" r="7" fill="#ECEAE9" />
      <text x="150" y="268" textAnchor="middle" fill="#ECEAE9" fontSize="52" fontWeight="700" className="font-mono tabular">
        {speed}
      </text>
      <text x="150" y="288" textAnchor="middle" fill="#C0B9B4" fontSize="12">
        {t.speedUnit}
      </text>

      {/* Lean gauge */}
      <path d={arc(150, 430, 86, 180, 360)} stroke="#28231F" strokeWidth="10" fill="none" strokeLinecap="round" />
      <path d={arc(150, 430, 86, leanAngle(lean), 270)} stroke="#5E87E8" strokeWidth="10" fill="none" strokeLinecap="round" />
      {peaks.map((p) => {
        const a = polar(150, 430, 74, leanAngle(p));
        const b = polar(150, 430, 98, leanAngle(p));
        return <line key={p} x1={a.x} y1={a.y} x2={b.x} y2={b.y} stroke="#F5BE0A" strokeWidth="3" strokeLinecap="round" />;
      })}
      <circle cx={leanTip.x} cy={leanTip.y} r="8" fill="#ECEAE9" />
      <text x="150" y="420" textAnchor="middle" fill="#ECEAE9" fontSize="30" fontWeight="700" className="font-mono tabular">
        {Math.abs(lean)}°
      </text>
      <text x="150" y="440" textAnchor="middle" fill="#C0B9B4" fontSize="11">
        {t.lean}
      </text>
      <text x="150" y="462" textAnchor="middle" fill="#F5BE0A" fontSize="10" className="font-mono tabular">
        {t.peak} 41° · 38°
      </text>

      {/* Totals */}
      <g transform="translate(16 500)">
        <rect width="268" height="64" rx="16" fill="#201b18" stroke="#4B443F" />
        {[
          [t.distance, "84.6", "km"],
          [t.time, "1:12", "h"],
          [t.average, "71", "km/h"],
        ].map(([k, v, u], i) => (
          <g key={k} transform={`translate(${20 + i * 88} 0)`}>
            <text y="24" fill="#C0B9B4" fontSize="9.5" letterSpacing="0.06em">
              {k.toUpperCase()}
            </text>
            <text y="48" fill="#ECEAE9" fontSize="18" fontWeight="700" className="font-mono tabular">
              {v}
              <tspan fill="#C0B9B4" fontSize="10" fontWeight="400" dx="3">
                {u}
              </tspan>
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
}
