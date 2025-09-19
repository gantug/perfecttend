"use client";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh overflow-hidden isolate flex items-center justify-center px-[5.5%] py-24 bg-[#070B2A]"
    >
      {/* Futuristic grid */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
      >
        <defs>
          <pattern
            id="grid"
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
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Aurora beams */}
      <div className="pointer-events-none absolute inset-0 blur-3xl">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-[conic-gradient(at_top_left,_#4F7BFF_0%,_#00E0FF_30%,_#7B7BFF_60%,_#4F7BFF_100%)] opacity-40" />
        <div className="absolute -bottom-24 right-1/4 h-96 w-96 rounded-full bg-[conic-gradient(at_bottom_right,_#00FFC6_0%,_#3F5DCC_50%,_#00E0FF_100%)] opacity-35" />
      </div>

      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,_transparent_0%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />

      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12 }}
        className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-[auto,1fr]"
      >
        {/* Avatar card */}
        <motion.div variants={fadeUp} className="mx-auto md:mx-0">
          <div className="group relative">
            {/* Neon ring */}
            <div className="absolute -inset-1 rounded-[28px] bg-[conic-gradient(from_180deg_at_50%_50%,#00E0FF_0%,#3F5DCC_50%,#00FFC6_100%)] opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-90" />
            {/* Glass */}
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
              <motion.img
                src="images/ivans.jpeg"
                alt="Ivan portrait"
                className="h-[240px] w-[240px] rounded-2xl object-cover object-top md:h-[300px] md:w-[300px]"
                whileHover={{ scale: 1.03, rotate: -0.4 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
              />
            </div>
          </div>
        </motion.div>

        {/* Copy + actions */}
        <div className="flex flex-col items-center md:items-start">
          <motion.h1
            variants={fadeUp}
            className="text-center md:text-left text-4xl leading-tight md:text-6xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-[#CFE7FF] to-white bg-clip-text text-transparent">
              Accelerated Learning,{" "}
            </span>
            <br className="hidden sm:block" />
            <span className="text-white/90">
              Positive Psychology & Intuitive Coaching
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-2xl text-center md:text-left text-base md:text-lg text-[#E1E2F5]/90"
          >
            Unlock latent potential. Train intuition. Build durable growth.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            {/* Primary CTA */}
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="relative cursor-pointer select-none rounded-xl px-6 py-3 text-white font-medium"
            >
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#00E0FF] to-[#3F5DCC] opacity-90 transition hover:opacity-100" />
              <span className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-[#00E0FF] to-[#00FFC6] blur-md opacity-50" />
              <span className="relative">Talk with Ivan</span>
            </Link>

            {/* Secondary CTA */}
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer select-none rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-white/90 hover:bg-white/10 transition"
            >
              See Ivan’s Work
            </Link>
          </motion.div>

          {/* Social proof micro-row */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex items-center gap-3 text-xs md:text-sm text-white/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00FFC6]" />
            <span>1:1 Sessions · Workshops · Corporate Training</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.button
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 0.75, y: 0 }}
        transition={{ delay: 0.9 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 hover:text-white"
        onClick={() =>
          document
            .getElementById("work")
            ?.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M12 19l-5-5M12 19l5-5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>
    </section>
  );
}
