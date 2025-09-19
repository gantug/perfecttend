// components/layout/WorkPageShell.tsx
"use client";

import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";

type Props = {
  title: string;
  subtitle?: string;
  backHref?: string;
  children: React.ReactNode;
  className?: string;
};

export default function WorkPageShell({
  title,
  subtitle,
  backHref = "/",
  children,
  className = "",
}: Props) {
  return (
    <section
      id="work"
      className={[
        "relative min-h-svh isolate overflow-hidden px-[5.5%] py-24 bg-[#070B2A]",
        className,
      ].join(" ")}
    >
      {/* smooth edges (requires .noise-container in globals.css) */}
      <div className="noise-container pointer-events-none absolute inset-0 z-30" />

      {/* background grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-15"
      >
        <defs>
          <pattern
            id="work-grid"
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
        <rect width="100%" height="100%" fill="url(#work-grid)" />
      </svg>

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_10%,_transparent_0%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />

      <div className="relative z-20 mx-auto w-full max-w-4xl">
        <div className="flex flex-col gap-6">
          <Link
            href={backHref}
            className="inline-flex w-fit items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur-xl hover:bg-white/10"
          >
            <SlArrowLeft className="h-4 w-4" />
            Back
          </Link>

          <h1 className="text-2xl md:text-4xl font-bold text-white">{title}</h1>
          {subtitle ? <p className="text-white/80">{subtitle}</p> : null}
        </div>

        <div className="mt-6 flex flex-col gap-5 text-white/90 font-light">
          {children}
        </div>
      </div>
    </section>
  );
}
