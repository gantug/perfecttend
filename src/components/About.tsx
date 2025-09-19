"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [readMore, setReadMore] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-svh overflow-hidden isolate flex items-center justify-center px-[5.5%] py-24 bg-[#070B2A] "
    >
      <div className="noise-container" />

      {/* Grid */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15"
      >
        <defs>
          <pattern
            id="about-grid"
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
        <rect width="100%" height="100%" fill="url(#about-grid)" />
      </svg>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,_transparent_0%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl text-white mb-10"
        >
          About Ivan
        </motion.h2>

        <div className="grid gap-10 md:gap-16">
          {/* Text + Read more */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
              <div className="absolute -inset-[1px] rounded-[26px] bg-gradient-to-r from-[#00E0FF] via-[#3F5DCC] to-[#00FFC6] opacity-30 blur-md" />
              <div className="relative space-y-5 text-white/90">
                <p className="text-sm md:text-lg leading-relaxed">
                  Ivan is a mind coach and psychologist, a pioneer and teacher
                  of human potential. He has spent 20+ years in positive
                  psychology, holistic health, and accelerated learning. His
                  motto: results count, and learning should be applied to daily
                  life.
                </p>
                <p className="text-sm md:text-lg leading-relaxed">
                  In November 2019 he co-organized international medical
                  conferences with experts from Japan, Ireland, China, and
                  Mongolia on pain-free operations without general anesthetic.
                </p>
                <p className="text-sm md:text-lg leading-relaxed">
                  While many focus on AI hype, Ivan develops people. His
                  approach is practical and applied.
                </p>

                <AnimatePresence initial={false}>
                  {readMore && (
                    <motion.div
                      key="more"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="space-y-5 overflow-hidden"
                    >
                      <p className="text-sm md:text-lg leading-relaxed">
                        He has trained across psychology, yoga, meditation,
                        mindfulness, intuitive and perceptive training, plus 25+
                        years of workplace experience delivering results in
                        psychotherapy, teaching, management, healing, and human
                        potential.
                      </p>
                      <p className="text-sm md:text-lg leading-relaxed">
                        Ivan is one of the rare practitioners who can{" "}
                        <span className="font-semibold underline underline-offset-4">
                          demonstrate detailed intuitive awareness on demand
                        </span>
                        . Parapsychology research suggests as few as{" "}
                        <span className="underline underline-offset-4">
                          1 in 1000
                        </span>{" "}
                        claimed psychics can do so reliably.
                      </p>
                      <div className="text-sm md:text-base text-[#CFE7FF] space-y-2">
                        <a
                          href="https://www.youtube.com/watch?v=jiforOAnXWs"
                          target="_blank"
                          className="inline-flex items-center hover:text-white transition-colors"
                          rel="noreferrer"
                        >
                          Intuition expertise →
                        </a>
                        <br />
                        <a
                          href="https://www.youtube.com/watch?v=XSYRvLZLgmk"
                          target="_blank"
                          className="inline-flex items-center hover:text-white transition-colors"
                          rel="noreferrer"
                        >
                          Typical clairvoyance demo →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  onClick={() => setReadMore((v) => !v)}
                  className="mt-1 inline-flex items-center gap-2 text-[#9EC5FF] hover:text-white transition-colors underline underline-offset-8"
                >
                  {readMore ? "Read less" : "Read more"}
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      readMore ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.2l3.71-2.97a.75.75 0 01.94 1.16l-4.24 3.4a.75.75 0 01-.94 0l-4.24-3.4a.75.75 0 01.02-1.06z" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10 flex flex-wrap items-center gap-3 text-xs md:text-sm text-white/70"
        >
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
            Positive Psychology
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
            Intuition Training
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
            Workshops
          </span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">
            Corporate Programs
          </span>
        </motion.div>
      </div>
    </section>
  );
}
