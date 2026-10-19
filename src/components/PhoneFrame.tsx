import type { ReactNode } from "react";

/** A plain phone outline. Purely decorative: the screen inside carries its own accessible label. */
export function PhoneFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative aspect-[300/620] w-full rounded-[2.6rem] border border-line bg-[#05070b] p-2.5 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8),0_0_0_1px_rgb(255_255_255/0.04)_inset] ${className}`}
    >
      <div className="absolute top-4 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" aria-hidden />
      <div className="h-full w-full overflow-hidden rounded-[2rem] bg-bg">{children}</div>
    </div>
  );
}
