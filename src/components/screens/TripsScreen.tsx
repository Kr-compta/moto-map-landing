import type { Dictionary } from "@/i18n/dictionaries";
import { speedColors } from "./geometry";

const routes = [
  ["M8,40 C20,10 34,44 46,20 S62,8 72,26", "M8,40 C14,28 20,22 26,26"],
  ["M6,30 C18,44 30,8 44,24 S64,40 74,14", "M44,24 C52,32 60,36 66,28"],
  ["M8,18 C24,6 30,40 48,34 S66,10 74,30", "M8,18 C14,14 18,14 22,18"],
];
const stats = [
  ["142", "3:05", "118"],
  ["96.4", "2:12", "104"],
  ["61.8", "1:20", "92"],
];

/** The Trips tab: every saved ride with a speed-coloured route thumbnail and its summary. */
export function TripsScreen({ t, label }: { t: Dictionary["screens"]; label: string }) {
  return (
    <svg viewBox="0 0 300 600" role="img" aria-label={label} className="h-full w-full">
      <rect width="300" height="600" fill="#171411" />
      <text x="20" y="84" fill="#ECEAE9" fontSize="24" fontWeight="700">
        {t.trips}
      </text>

      {t.tripNames.map((name, i) => (
        <g key={name} transform={`translate(16 ${108 + i * 150})`}>
          <rect width="268" height="134" rx="20" fill="#201b18" stroke="#4B443F" />
          <rect x="12" y="12" width="84" height="56" rx="12" fill="#110e0c" />
          <g transform="translate(14 14)" fill="none" strokeLinecap="round" strokeWidth="3.5">
            <path d={routes[i][0]} stroke={speedColors[i === 1 ? 3 : 2]} />
            <path d={routes[i][1]} stroke={speedColors[0]} />
          </g>
          <text x="110" y="34" fill="#ECEAE9" fontSize="14" fontWeight="700">
            {name}
          </text>
          <text x="110" y="54" fill="#C0B9B4" fontSize="11">
            {t.tripDates[i]}
          </text>
          {i === 2 && (
            <g transform="translate(110 62)">
              <rect width="74" height="18" rx="9" fill="#2a2210" />
              <text x="37" y="12.5" textAnchor="middle" fill="#F5BE0A" fontSize="9.5" fontWeight="700">
                {t.recovered}
              </text>
            </g>
          )}
          {[t.distance, t.time, t.maxSpeed].map((k, j) => (
            <g key={k} transform={`translate(${14 + j * 86} 96)`}>
              <text fill="#C0B9B4" fontSize="9" letterSpacing="0.06em">
                {k.toUpperCase()}
              </text>
              <text y="22" fill="#ECEAE9" fontSize="15" fontWeight="700" className="font-mono tabular">
                {stats[i][j]}
                <tspan fill="#C0B9B4" fontSize="9" fontWeight="400" dx="3">
                  {["km", "h", "km/h"][j]}
                </tspan>
              </text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  );
}
