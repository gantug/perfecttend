"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

export default function IntutorProgram() {
  const [play, setPlay] = useState(false);
  const videoId = "A--z2ptn5nQ";
  const embed = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1`;
  const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <section
      id="intutor-program"
      className="relative min-h-svh isolate overflow-hidden px-[5.5%] py-24 bg-[#070B2A]"
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
            id="intutor-grid"
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
        <rect width="100%" height="100%" fill="url(#intutor-grid)" />
      </svg>

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_10%,_transparent_0%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />

      <div className="relative z-20 mx-auto w-full max-w-6xl">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.12 }}
          className="flex flex-col gap-10"
        >
          {/* Heading */}
          <motion.div variants={fadeUp}>
            <h2 className="text-3xl md:text-5xl text-white mb-3">
              The Intutor Program
            </h2>
            <p className="text-xl md:text-2xl text-[#CFE7FF] font-light">
              Helping You uncover your latent abilities
            </p>
          </motion.div>

          <div className="grid gap-10 md:gap-16 md:grid-cols-[1fr,1fr] items-start">
            {/* Content */}
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
                <div className="absolute -inset-[1px] rounded-[26px] bg-gradient-to-r from-[#00E0FF] via-[#3F5DCC] to-[#00FFC6] opacity-30 blur-md" />
                <div className="relative space-y-5 text-white/90">
                  <p className="text-sm md:text-lg leading-relaxed">
                    With the release of{" "}
                    <span className="font-semibold">The Telepathy Tapes</span>,
                    interest in Psychic abilities and Intuitive are growing
                    exponentially. Join this ever growing group of forward
                    thinking people who know we have much more potential as
                    human beings.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed">
                    Join Ivan and discover, uncover and train Your own
                    Intuition, perceptions and inner wisdom.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed">
                    Ivan has over 20 years experience both in research and more
                    importantly practise fine tuning his own Intuitive skills so
                    much so that he can readily demo these abilities (a very
                    rare level in this area)
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed">
                    But more importantly he knows everyone has with in them
                    Intuitive skills that can be tapped into and cultivated.
                  </p>
                  <p className="text-sm md:text-lg leading-relaxed">
                    Ivan offers individual and group training. Please see
                    details in{" "}
                    <Link
                      href="/works/i-factor"
                      className="text-[#9EC5FF] hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Intuitive Training Program
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Video */}
            <motion.div variants={fadeUp} className="w-full">
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-[#00E0FF]/20">
                {/* neon glow */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                <div className="aspect-video w-full">
                  {play ? (
                    <iframe
                      className="h-full w-full"
                      src={embed + "&autoplay=1"}
                      title="The Telepathy Tapes"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      type="button"
                      aria-label="Play The Telepathy Tapes"
                      onClick={() => setPlay(true)}
                      className="relative h-full w-full"
                    >
                      <img
                        src={thumb}
                        alt="The Telepathy Tapes"
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
                  <h3 className="text-white text-sm md:text-base">
                    The Telepathy Tapes
                  </h3>
                  {!play && (
                    <Link
                      href={`https://www.youtube.com/watch?v=${videoId}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-xs text-[#9EC5FF] underline underline-offset-4 hover:text-white"
                    >
                      Open on YouTube
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
