import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0B0E14" }}>
        <svg width="180" height="180" viewBox="0 0 108 108">
          <path d="M30,68 A24,24 0 1,1 78,68" stroke="#FF6B2D" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M54,68 L68,48" stroke="#F2F5FA" strokeWidth="5" strokeLinecap="round" />
          <circle cx="54" cy="64" r="4" fill="#F2F5FA" />
        </svg>
      </div>
    ),
    size,
  );
}
