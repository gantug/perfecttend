// app/works/one-to-one-session/page.tsx
"use client";

import WorkPageShell from "@/components/WorkPageShell";

export default function OneToOneSession() {
  return (
    <WorkPageShell title="One-to-one session" subtitle="Zoom or in person">
      <p>
        ONE-to-ONE sessions with Ivan Hopkins—psychologist and mind coach,
        expert in advanced concentration and relaxation. Sessions are tailored
        to goals and can include mindfulness, stress management, holistic
        psychotherapy, positive psychology, and performance coaching.
      </p>

      <p>
        A single session costs <strong>€180</strong> or <strong>$200</strong>.
        For depth and durable results, multiple sessions are recommended.
      </p>

      <p>
        With individuals, the work targets relaxation, stress management, and
        outcome-focused change. Methods draw from SFT, CBT, and NLP to reduce
        negative self-talk and build resilience, aligned with positive
        psychology principles.
      </p>

      <p>
        Cadence is weekly or fortnightly depending on schedule, with a follow-up
        consolidation session one month later. By appointment only.
      </p>

      <p>
        You already hold latent abilities that the right mentoring can unlock.
        Ivan’s background in human technology—heightened perception, rapid
        learning, and advanced concentration—helps beginners progress quickly.
      </p>

      <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
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

      {/* Pricing card */}
      <div className="group relative mt-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
        <h3 className="text-white text-lg md:text-xl font-semibold">
          Session pricing
        </h3>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">EUR</div>
            <div className="text-2xl font-bold">€180</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">USD</div>
            <div className="text-2xl font-bold">$200</div>
          </div>
        </div>
        <p className="mt-3 text-sm text-white/70">
          Multi-session plans available on request.
        </p>
      </div>
    </WorkPageShell>
  );
}
