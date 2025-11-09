"use client";

import Link from "next/link";
import { useState } from "react";

type Vid = { id: string; title: string };

const videos: Vid[] = [
  { id: "YEUFX349irw", title: "Intro and Background video" },
  { id: "GAAJ4P2g5oc", title: "Human Technology · My Vision" },
  { id: "A--z2ptn5nQ", title: "2 Core Skills to uncover intuition and demo" },
];

function VideoCard({ id, title }: Vid) {
  const [play, setPlay] = useState(false);
  const embed = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`;
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-[#00E0FF]/20">
      {/* neon glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
      <div className="aspect-video w-full">
        {play ? (
          <iframe
            className="h-full w-full"
            src={embed + "&autoplay=1"}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            aria-label={`Play ${title}`}
            onClick={() => setPlay(true)}
            className="relative h-full w-full"
          >
            <img
              src={thumb}
              alt={title}
              className="h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#070B2A] shadow-lg ring-1 ring-white/40 transition-transform group-hover:scale-105">
              ▶
            </span>
          </button>
        )}
      </div>
      <div className="p-4 text-center">
        <h3 className="text-white text-sm md:text-base">{title}</h3>
        {!play && (
          <Link
            href={`https://youtu.be/${id}`}
            target="_blank"
            className="mt-1 inline-block text-xs text-[#9EC5FF] underline underline-offset-4 hover:text-white"
          >
            Open on YouTube
          </Link>
        )}
      </div>
    </div>
  );
}

export default function Videos() {
  return (
    <section
      id="videos"
      className="relative min-h-svh isolate overflow-hidden bg-[#070B2A] px-[5.5%] py-24 flex flex-col justify-center"
    >
      {/* smooth-edge overlay (requires .noise-container in globals.css) */}
      <div className="noise-container pointer-events-none absolute inset-0 z-30" />

      {/* background grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-15"
      >
        <defs>
          <pattern
            id="video-grid"
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
        <rect width="100%" height="100%" fill="url(#video-grid)" />
      </svg>

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_10%,_transparent_0%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />

      <div className="relative z-20 mx-auto w-full max-w-6xl">
        <h2 className="mb-10 text-3xl text-white md:text-5xl">
          Ivan&apos;s Videos
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {videos.map((v) => (
            <VideoCard key={v.id} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
