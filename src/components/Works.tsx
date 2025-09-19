"use client";

import Link from "next/link";
import {
  CiChat1,
  CiRead,
  CiReceipt,
  CiSettings,
  CiUser,
  CiViewTable,
  CiVoicemail,
} from "react-icons/ci";

const services = [
  {
    href: "/works/one-to-one-session",
    title: "Zoom or in person: One-to-one session",
    Icon: CiVoicemail,
  },
  {
    href: "/works/performance-and-mindfulness",
    title: "Performance and mindfulness workshops",
    Icon: CiViewTable,
  },
  { href: "/works/guest-lecturer", title: "Guest lecturer", Icon: CiUser },
  {
    href: "/works/corporate-training",
    title: "Corporate training & coaching",
    Icon: CiSettings,
  },
  {
    href: "/works/i-factor",
    title: "The Intuition training program",
    Icon: CiRead,
  },
  {
    href: "/works/corporate-fee",
    title: "Corporate coaching fee",
    Icon: CiChat1,
  },
  {
    href: "/works/weekend-intensive",
    title:
      "2 Day • Weekend intensive workshop — introductory course of intuitive awareness",
    Icon: CiReceipt,
  },
];

export default function Works() {
  return (
    <section
      id="work"
      className="relative min-h-svh isolate overflow-hidden px-[5.5%] py-24 bg-[#070B2A]"
    >
      {/* smooth edge overlay if you use .noise-container from globals.css */}
      <div className="noise-container pointer-events-none absolute inset-0 z-30" />

      {/* subtle grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15 z-0"
      >
        <defs>
          <pattern
            id="svc-grid"
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
        <rect width="100%" height="100%" fill="url(#svc-grid)" />
      </svg>

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_10%,_transparent_0%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />

      <div className="relative z-20 mx-auto w-full max-w-6xl">
        <h2 className="text-3xl md:text-5xl text-white mb-10">Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map(({ href, title, Icon }, i) => (
            <Link key={i} href={href} className="group focus:outline-none">
              <div
                className="
                  relative h-full rounded-2xl border border-white/10 bg-white/[0.05]
                  p-5 md:p-6 backdrop-blur-xl shadow-lg
                  transition-transform duration-300 will-change-transform
                  hover:-translate-y-1
                  focus-visible:ring-2 focus-visible:ring-[#00E0FF]
                "
              >
                {/* neon glow on hover */}
                <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />

                {/* icon chip */}
                <div className="mb-4 flex items-center justify-center">
                  <div className="relative grid place-items-center h-20 w-20 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-tr from-[#00E0FF]/30 to-[#00FFC6]/20 blur-sm opacity-60" />
                    <Icon className="relative h-10 w-10 text-white/90" />
                  </div>
                </div>

                {/* title */}
                <h3 className="text-white text-base md:text-lg text-center leading-snug">
                  {title}
                </h3>

                {/* bottom accent */}
                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
