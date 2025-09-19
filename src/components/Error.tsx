// app/not-found.tsx  (404 page, App Router)
import Link from "next/link";

export default function Error() {
  return (
    <section className="relative min-h-svh isolate overflow-hidden bg-[#070B2A] px-[5.5%] py-24 flex items-center">
      {/* smooth edge overlay (requires .noise-container in globals.css) */}
      <div className="noise-container pointer-events-none absolute inset-0 z-30" />
      {/* grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-15"
      >
        <defs>
          <pattern
            id="nf-grid"
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
        <rect width="100%" height="100%" fill="url(#nf-grid)" />
      </svg>
      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_15%,_transparent_0%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />

      <div className="relative z-20 mx-auto w-full max-w-4xl text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white">
          404
        </h1>
        <p className="mt-3 text-white/80 text-lg md:text-xl">Page not found.</p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="relative rounded-xl px-5 py-3 text-white font-medium border border-white/30 hover:border-transparent
                       before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-[#00E0FF] before:to-[#3F5DCC]
                       before:opacity-0 hover:before:opacity-100 before:-z-10 before:transition-opacity"
          >
            Go to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
