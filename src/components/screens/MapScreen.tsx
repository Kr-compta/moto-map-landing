import type { Dictionary } from "@/i18n/dictionaries";
import { speedColors } from "./geometry";

/** The ridden track, split so each stretch can carry its speed colour. */
const track = [
  "M60,560 C70,520 40,490 62,452",
  "M62,452 C84,414 130,430 140,392",
  "M140,392 C150,354 104,330 118,292",
  "M118,292 C132,254 196,262 204,222",
  "M204,222 C210,190 176,176 182,150",
];
const trackColors = [speedColors[1], speedColors[2], speedColors[0], speedColors[3], speedColors[2]];

/** The Map tab: offline map, live track, heading arrow, telemetry card and ride controls. */
export function MapScreen({ t, label }: { t: Dictionary["screens"]; label: string }) {
  return (
    <svg viewBox="0 0 300 600" role="img" aria-label={label} className="h-full w-full">
      <rect width="300" height="600" fill="#121a17" />

      {/* Terrain: contour lines, a river, a few roads */}
      <g fill="none" stroke="#1d2a24" strokeWidth="1.2">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M-10,${120 + i * 70} C60,${90 + i * 70} 120,${170 + i * 70} 200,${130 + i * 70} S300,${100 + i * 70} 320,${140 + i * 70}`}
          />
        ))}
      </g>
      <path d="M310,40 C240,120 270,200 210,300 S120,420 160,620" stroke="#1d3446" strokeWidth="9" fill="none" />
      <g stroke="#2a3530" fill="none" strokeLinecap="round">
        <path d="M-10,300 C80,280 200,340 310,310" strokeWidth="5" />
        <path d="M30,-10 C40,120 10,220 60,320" strokeWidth="3.5" />
        <path d="M230,620 C250,520 300,480 310,460" strokeWidth="3.5" />
      </g>
      <g fill="#3a4740" fontSize="9" fontStyle="italic">
        <text x="196" y="372">Le Tarn</text>
        <text x="24" y="250">D 907</text>
      </g>

      {/* Track */}
      <g fill="none" strokeWidth="6" strokeLinecap="round">
        {track.map((d, i) => (
          <path key={d} d={d} stroke={trackColors[i]} />
        ))}
      </g>

      {/* Position + heading */}
      <g transform="translate(182 150)">
        <circle r="22" fill="#3DA9FC" opacity="0.18" />
        <circle r="11" fill="#3DA9FC" stroke="#F2F5FA" strokeWidth="3" />
        <path d="M0,-24 L7,-12 L-7,-12 Z" fill="#F2F5FA" />
      </g>

      {/* Offline chip + map controls */}
      <g transform="translate(18 50)">
        <rect width="94" height="26" rx="13" fill="#0B0E14" opacity="0.9" stroke="#2C3543" />
        <path d="M14,17 a7,7 0 0 1 12,0 M17,14 a4,4 0 0 1 6,0 M12,8 L28,20" stroke="#30C48D" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <text x="35" y="17.5" fill="#F2F5FA" fontSize="11" fontWeight="600">
          {t.offline}
        </text>
      </g>
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(240 ${44 + i * 54})`}>
          <rect width="44" height="44" rx="14" fill="#0B0E14" opacity="0.9" stroke="#2C3543" />
          {i === 0 && <path d="M12,16 L22,11 L32,16 L22,21 Z M12,22 L22,27 L32,22 M12,28 L22,33 L32,28" stroke="#F2F5FA" strokeWidth="1.6" fill="none" strokeLinejoin="round" />}
          {i === 1 && (
            <g stroke="#F2F5FA" strokeWidth="1.8" fill="none">
              <rect x="10" y="15" width="17" height="14" rx="3" />
              <path d="M27,20 L34,16 L34,28 L27,24" strokeLinejoin="round" />
            </g>
          )}
          {i === 2 && <path d="M22,10 L22,34 M10,22 L34,22" stroke="#F2F5FA" strokeWidth="1.8" />}
        </g>
      ))}

      {/* Telemetry card */}
      <g transform="translate(14 446)">
        <rect width="272" height="138" rx="20" fill="#0B0E14" opacity="0.95" stroke="#2C3543" />
        <circle className="rec-dot" cx="22" cy="24" r="4.5" fill="#E5484D" />
        <text x="33" y="28" fill="#F2F5FA" fontSize="10.5" fontWeight="700" letterSpacing="0.08em">
          {t.recording}
        </text>
        <text x="20" y="74" fill="#F2F5FA" fontSize="40" fontWeight="700" className="font-mono tabular">
          64
        </text>
        <text x="74" y="74" fill="#97A3B6" fontSize="11">
          {t.speedUnit}
        </text>
        <text x="252" y="56" textAnchor="end" fill="#97A3B6" fontSize="10">
          {t.lean}
        </text>
        <text x="252" y="76" textAnchor="end" fill="#3DA9FC" fontSize="20" fontWeight="700" className="font-mono tabular">
          24°
        </text>
        <rect x="16" y="92" width="96" height="34" rx="12" fill="#1D2430" />
        <text x="64" y="113" textAnchor="middle" fill="#F2F5FA" fontSize="12" fontWeight="600">
          {t.pause}
        </text>
        <rect x="120" y="92" width="136" height="34" rx="12" fill="#FF6B2D" />
        <text x="188" y="113" textAnchor="middle" fill="#0B0E14" fontSize="12" fontWeight="700">
          {t.finish}
        </text>
      </g>
    </svg>
  );
}
