import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      {children}
    </svg>
  );
}

/** The launcher icon: speedometer arc, needle and hub (app/src/main/res/drawable/ic_launcher_foreground.xml). */
export function Logo(props: IconProps) {
  return (
    <svg viewBox="0 0 108 108" aria-hidden {...props}>
      <rect width="108" height="108" rx="26" fill="#0B0E14" />
      <path d="M30,68 A24,24 0 1,1 78,68" stroke="#FF6B2D" strokeWidth="6" strokeLinecap="round" fill="none" />
      <path d="M54,68 L68,48" stroke="#F2F5FA" strokeWidth="5" strokeLinecap="round" />
      <circle cx="54" cy="64" r="4" fill="#F2F5FA" />
    </svg>
  );
}

export const NoSignal = (p: IconProps) => (
  <Icon {...p}>
    <path d="M2 2l20 20M8.5 16.5a5 5 0 0 1 7 0M5 12.9a10 10 0 0 1 5.2-2.8M19 12.9a10 10 0 0 0-2-1.5M2 8.8a15 15 0 0 1 4.2-2.6M22 8.8A15 15 0 0 0 11 5" />
    <circle cx="12" cy="20" r="0.6" fill="currentColor" />
  </Icon>
);

export const Lock = (p: IconProps) => (
  <Icon {...p}>
    <rect x="4" y="11" width="16" height="10" rx="2.5" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </Icon>
);

export const Battery = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2" y="7" width="17" height="10" rx="2.5" />
    <path d="M22 11v2M6 10.5v3" />
  </Icon>
);

export const Camera = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2" y="6" width="14" height="12" rx="2.5" />
    <path d="M16 10.5l6-3.5v10l-6-3.5" />
  </Icon>
);

export const Rotate = (p: IconProps) => (
  <Icon {...p}>
    <rect x="7" y="2" width="10" height="16" rx="2" />
    <path d="M3 14a9 9 0 0 0 9 8M21 10a9 9 0 0 0-3-6" />
    <path d="M10 22h2v-2" />
  </Icon>
);

export const Flip = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3v18M8 7l-5 5 5 5M16 7l5 5-5 5" />
  </Icon>
);

export const Segments = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2" y="7" width="5.5" height="10" rx="1.5" />
    <rect x="9.25" y="7" width="5.5" height="10" rx="1.5" />
    <rect x="16.5" y="7" width="5.5" height="10" rx="1.5" strokeDasharray="2 2" />
  </Icon>
);

export const Hand = (p: IconProps) => (
  <Icon {...p}>
    <path d="M7 11V5.5a1.5 1.5 0 0 1 3 0V10M10 9.5v-6a1.5 1.5 0 0 1 3 0v6M13 9.5V5a1.5 1.5 0 0 1 3 0v5.5M16 9.5a1.5 1.5 0 0 1 3 0V15a7 7 0 0 1-7 7 6.5 6.5 0 0 1-5.4-2.9L4 15.5a1.6 1.6 0 0 1 2.5-2L7 14" />
  </Icon>
);

export const Vibrate = (p: IconProps) => (
  <Icon {...p}>
    <rect x="7" y="3" width="10" height="18" rx="2" />
    <path d="M3 9v6M21 9v6" />
  </Icon>
);

export const Digits = (p: IconProps) => (
  <Icon {...p}>
    <path d="M4 7h4v10M4 17h8M14 7h5l-4 5a3 3 0 1 1-2 4" />
  </Icon>
);

export const Text = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="5" cy="12" r="2.5" fill="currentColor" stroke="none" />
    <path d="M11 9h10M11 15h7" />
  </Icon>
);

export const Buttons = (p: IconProps) => (
  <Icon {...p}>
    <rect x="2" y="8" width="7" height="8" rx="2" />
    <rect x="11" y="8" width="11" height="8" rx="2" fill="currentColor" fillOpacity="0.25" />
  </Icon>
);

export const Motion = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 9.5v5M15 9.5v5" />
  </Icon>
);

export const Download = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3v12M7 10l5 5 5-5M4 20h16" />
  </Icon>
);

export const Route = (p: IconProps) => (
  <Icon {...p}>
    <circle cx="6" cy="19" r="2.5" />
    <circle cx="18" cy="5" r="2.5" />
    <path d="M8.5 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5" />
  </Icon>
);

export const Shield = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </Icon>
);

export const Check = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12.5l4.5 4.5L19 7.5" />
  </Icon>
);

export const Arrow = (p: IconProps) => (
  <Icon {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const Plus = (p: IconProps) => (
  <Icon {...p}>
    <path d="M12 5v14M5 12h14" />
  </Icon>
);

export const GitHub = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...p}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.6 22.4c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 12 .5z" />
  </svg>
);
