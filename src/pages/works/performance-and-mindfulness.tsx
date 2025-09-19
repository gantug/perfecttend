// app/works/performance-and-mindfulness/page.tsx
"use client";

import WorkPageShell from "@/components/WorkPageShell";

export default function PerformanceAndMindfulness() {
  return (
    <WorkPageShell
      title="Performance and mindfulness workshops"
      subtitle="Interactive, practical, and tailored to your team"
    >
      <p>
        These participative sessions run ~2.5 hours and blend mindfulness with
        performance coaching. Content is customized to your company and role
        profiles.
      </p>

      {/* Focus areas */}
      <h2 className="text-white/90 text-lg md:text-xl mt-2">Focus areas</h2>
      <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
        {[
          "Setting long-term and short-term goals",
          "Mindfulness-Based Stress Reduction",
          "Concentration and attention development",
          "Modern communication skills",
          "Excelling at your job",
        ].map((t) => (
          <li
            key={t}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl text-white/90"
          >
            {t}
          </li>
        ))}
      </ul>

      {/* What participants do */}
      <p>
        Each workshop includes live practice and concrete take-home routines to
        bring mindfulness into daily work. The format is hands-on, engaging, and
        designed to build intrinsic motivation and positive reinforcement.
      </p>

      {/* Quick facts card */}
      <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-white/90">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Duration</div>
            <div className="text-base">~2.5 hours</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Format</div>
            <div className="text-base">Interactive workshop</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Customization</div>
            <div className="text-base">Tailor-made per team</div>
          </div>
        </div>
      </div>
    </WorkPageShell>
  );
}
