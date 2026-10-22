import type { Dictionary } from "@/i18n/dictionaries";
import { speedColors } from "./geometry";

/** A frame of ride footage with the telemetry plates an export burns into the picture. */
export function ReplayFrame({ t, label }: { t: Dictionary["screens"]; label: string }) {
  return (
    <svg viewBox="0 0 640 360" role="img" aria-label={label} className="h-full w-full">
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1b2740" />
          <stop offset="0.55" stopColor="#c46a3c" />
          <stop offset="1" stopColor="#f0a35e" />
        </linearGradient>
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a1d22" />
          <stop offset="1" stopColor="#0b0d10" />
        </linearGradient>
      </defs>

      {/* Scene: sunset, hills, a road leaning into a left-hander */}
      <rect width="640" height="200" fill="url(#sky)" />
      <circle cx="420" cy="178" r="34" fill="#ffd29a" opacity="0.85" />
      <path d="M0,170 L90,120 L170,160 L260,104 L360,166 L470,128 L560,160 L640,118 L640,210 L0,210 Z" fill="#2a2430" />
      <path d="M0,190 L120,160 L240,186 L380,150 L520,188 L640,160 L640,220 L0,220 Z" fill="#1c1a22" />
      <g transform="rotate(-9 320 300)">
        <rect x="-60" y="200" width="760" height="220" fill="url(#ground)" />
        <path d="M150,420 C250,320 300,260 360,206 L380,206 C350,262 340,330 470,420 Z" fill="#2b2f36" />
        <path d="M312,420 C322,330 340,262 370,206" stroke="#eceae9" strokeWidth="3" strokeDasharray="18 16" fill="none" opacity="0.8" />
      </g>

      {/* Title plate */}
      <g transform="translate(20 20)">
        <rect width="180" height="44" rx="10" fill="#171411" opacity="0.72" />
        <text x="14" y="20" fill="#ECEAE9" fontSize="13" fontWeight="700">
          {t.tripNames[1]}
        </text>
        <text x="14" y="35" fill="#C0B9B4" fontSize="10">
          {t.tripDates[1]}
        </text>
      </g>

      {/* Map inset */}
      <g transform="translate(500 20)">
        <rect width="120" height="90" rx="12" fill="#121a17" stroke="#ECEAE9" strokeOpacity="0.25" />
        <path d="M8,50 C40,30 80,70 112,40" stroke="#2a3530" strokeWidth="4" fill="none" />
        <path d="M14,82 C24,60 44,66 54,48 S82,22 96,16" stroke={speedColors[3]} strokeWidth="4" fill="none" strokeLinecap="round" />
        <circle cx="54" cy="48" r="6" fill="#5E87E8" stroke="#ECEAE9" strokeWidth="2" />
      </g>

      {/* Speed plate */}
      <g transform="translate(20 262)">
        <rect width="132" height="78" rx="14" fill="#171411" opacity="0.78" />
        <text x="16" y="52" fill="#ECEAE9" fontSize="44" fontWeight="700" className="font-mono tabular">
          102
        </text>
        <text x="16" y="68" fill="#C0B9B4" fontSize="10">
          {t.speedUnit}
        </text>
      </g>

      {/* Lean plate */}
      <g transform="translate(164 262)">
        <rect width="220" height="78" rx="14" fill="#171411" opacity="0.78" />
        <text x="16" y="26" fill="#C0B9B4" fontSize="10">
          {t.lean}
        </text>
        <text x="204" y="28" textAnchor="end" fill="#5E87E8" fontSize="20" fontWeight="700" className="font-mono tabular">
          38°
        </text>
        <rect x="16" y="46" width="188" height="8" rx="4" fill="#28231F" />
        <rect x="56" y="46" width="54" height="8" rx="4" fill="#5E87E8" />
        <line x1="44" y1="40" x2="44" y2="60" stroke="#F5BE0A" strokeWidth="3" strokeLinecap="round" />
        <line x1="172" y1="40" x2="172" y2="60" stroke="#F5BE0A" strokeWidth="3" strokeLinecap="round" />
        <line x1="110" y1="42" x2="110" y2="58" stroke="#ECEAE9" strokeWidth="2" opacity="0.5" />
      </g>

      {/* Distance plate */}
      <g transform="translate(396 262)">
        <rect width="110" height="78" rx="14" fill="#171411" opacity="0.78" />
        <text x="16" y="26" fill="#C0B9B4" fontSize="10">
          {t.distance}
        </text>
        <text x="16" y="56" fill="#ECEAE9" fontSize="22" fontWeight="700" className="font-mono tabular">
          47.3
          <tspan fill="#C0B9B4" fontSize="10" fontWeight="400" dx="3">
            km
          </tspan>
        </text>
      </g>
    </svg>
  );
}
