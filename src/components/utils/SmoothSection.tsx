// components/ui/SmoothSection.tsx — drop-in wrapper for any section
"use client";

import { ElementType, ReactNode, useId } from "react";

type Props<T extends ElementType> = {
  as?: T;
  id?: string;
  className?: string;
  children: ReactNode;
  grid?: boolean;
  vignette?: boolean;
  noise?: boolean;
};

export default function SmoothSection<T extends ElementType = "section">({
  as,
  id,
  className = "",
  children,
  grid = true,
  vignette = true,
  noise = true,
}: Props<T>) {
  const Comp = (as || "section") as ElementType;
  const pid = useId(); // unique SVG pattern id

  return (
    <Comp
      id={id}
      className={`relative isolate overflow-hidden bg-[#070B2A] ${className}`}
    >
      {noise && <div className="noise-container" />}

      {grid && (
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-15"
        >
          <defs>
            <pattern
              id={pid}
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M32 0H0V32"
                fill="none"
                stroke="white"
                strokeOpacity="0.08"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${pid})`} />
        </svg>
      )}

      {vignette && (
        <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_10%,_transparent_0%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />
      )}

      <div className="relative z-20">{children}</div>
    </Comp>
  );
}
