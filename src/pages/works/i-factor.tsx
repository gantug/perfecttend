// app/works/intuition-training-program/page.tsx
"use client";

import WorkPageShell from "@/components/WorkPageShell";

export default function IntuitionTrainingProgram() {
  return (
    <WorkPageShell
      title="The Intuition training program"
      subtitle="Course Background and Content"
    >
      <p>
        We are living in a time when many know more about their phone than the
        mechanisms of their own mind—how to learn and how to operate it for the
        best results. This must change to build healthier, happier, and truly
        successful people and societies.
      </p>

      <p>
        Ivan is a pioneer in HUMAN TECHNOLOGY. By developing ourselves—not just
        tools—we can raise quality of life in every dimension, not only
        material.
      </p>

      <p>
        A key insight: you already have latent abilities that the right
        mentoring can unlock. There is extensive research supporting this
        approach.
      </p>

      <p>
        Ivan has spent his adult life researching Human Potential and practicing
        heightened perception, rapid learning, and advanced concentration. This
        lets him teach beginners to learn the following human technologies
        quickly:
      </p>

      {/* skills */}
      <ul className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {[
          "Mental Concentration",
          "Basic Telepathy (how to begin to experience this phenomenon)",
          "Intuition",
          "Clairvoyance",
          "Auric Vision",
        ].map((t) => (
          <li
            key={t}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl text-white/90"
          >
            {t}
          </li>
        ))}
      </ul>

      {/* note */}
      <div className="rounded-2xl border border-amber-500/25 bg-amber-500/10 text-amber-200 px-4 py-3 text-sm">
        <span className="font-semibold">Please note:</span> Ivan’s uniqueness is
        not only his education and experience but his unmatched ability to{" "}
        <span className="underline underline-offset-4">demonstrate</span> these
        abilities at will.
      </div>

      {/* pricing */}
      <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
        <h3 className="text-white text-lg md:text-xl font-semibold">
          Training courses available
        </h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Format</div>
            <div className="text-base">1-to-1 individual coaching</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Price</div>
            <div className="text-base">$200 USD per session</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:col-span-2">
            <div className="text-xs text-white/70">Recommendation</div>
            <div className="text-base">10 sessions recommended</div>
          </div>
        </div>
      </div>
    </WorkPageShell>
  );
}
