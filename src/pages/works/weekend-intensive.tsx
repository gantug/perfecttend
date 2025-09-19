// app/works/weekend-intensive/page.tsx
"use client";

import WorkPageShell from "@/components/WorkPageShell";

export default function WeekendIntensive() {
  return (
    <WorkPageShell
      title="Weekend intensive workshop"
      subtitle="Introductory course of intuitive awareness"
    >
      <p>
        Most people know their phone better than their own mind—how to learn and
        operate it for results. This workshop focuses on practical “human
        technology” so participants build healthier, happier, more effective
        lives.
      </p>

      <p>
        The approach develops the person, not just their tools. With the right
        mentoring you can unlock latent abilities and apply them in daily
        decisions and performance.
      </p>

      <p>
        Based on Ivan’s practice in heightened perception, rapid learning, and
        advanced concentration, beginners progress quickly through core skills:
      </p>

      {/* Skills */}
      <ul className="mt-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {[
          "Mnemonics",
          "Advanced concentration training",
          "Visualization with power",
          "Practical intuition for decisions",
          "Physical and mental relaxation",
        ].map((t) => (
          <li
            key={t}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl text-white/90"
          >
            {t}
          </li>
        ))}
      </ul>

      {/* One-day plan */}
      <div className="group relative mt-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
        <h3 className="text-white text-lg md:text-xl font-semibold">
          1-day workshop
        </h3>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-white/90">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Day</div>
            <div className="text-base">Saturday</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Start time</div>
            <div className="text-base">10:00 AM ET</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Fee</div>
            <div className="text-base">$500 USD per person</div>
          </div>
        </div>
      </div>

      {/* Two-day plan */}
      <div className="group relative mt-3 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
        <h3 className="text-white text-lg md:text-xl font-semibold">
          2-day workshop
        </h3>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3 text-white/90">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Days</div>
            <div className="text-base">Saturday + Sunday</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Start time</div>
            <div className="text-base">Saturday 10:00 AM ET</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Fee</div>
            <div className="text-base">$850 USD per person</div>
          </div>
        </div>
      </div>
    </WorkPageShell>
  );
}
