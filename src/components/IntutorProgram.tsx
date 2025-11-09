"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

export default function IntutorProgram() {
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
                  thinking people who know we have much more potential as human
                  beings.
                </p>
                <p className="text-sm md:text-lg leading-relaxed">
                  Join Ivan and discover, uncover and train Your own Intuition,
                  perceptions and inner wisdom.
                </p>
                <p className="text-sm md:text-lg leading-relaxed">
                  Ivan has over 20 years experience both in research and more
                  importantly practise fine tuning his own Intuitive skills so
                  much so that he can readily demo these abilities (a very rare
                  level in this area)
                </p>
                <p className="text-sm md:text-lg leading-relaxed">
                  But more importantly he knows everyone has with in them
                  Intuitive skills that can be tapped into and cultivated.
                </p>
                <p className="text-sm md:text-lg leading-relaxed">
                  Ivan offers individual and group training. Please see details
                  in{" "}
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
        </motion.div>
      </div>
    </section>
  );
}
