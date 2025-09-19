// app/works/corporate-coaching-fee/page.tsx
"use client";

import WorkPageShell from "@/components/WorkPageShell";

export default function CorporateCoachingFee() {
  return (
    <WorkPageShell title="Corporate coaching fee">
      <p>
        Ivan is a prolific speaker known for engaging, enlightening
        presentations. He hosts workshops and courses on Psychology and Positive
        Living to empower people to lead fulfilling lives. He also organizes
        speaking competitions and debates for college students.
      </p>

      <p>
        He has spoken at TED Talk Mongolia and many corporate events, covering
        Workplace Productivity, the benefits of Everyday Mindfulness, and
        related topics.
      </p>

      <p>
        Colleagues, clients, and students value his animated delivery,
        entertaining style, and ability to inspire with practical ideas.
      </p>

      {/* Pricing card */}
      <div className="group relative mt-2 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
        <h3 className="text-white text-lg md:text-xl font-semibold">
          Half-day workshop / lecture
        </h3>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/90">
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Price</div>
            <div className="text-2xl font-bold">€900 EUR</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
            <div className="text-xs text-white/70">Alternative</div>
            <div className="text-2xl font-bold">$1,000 USD</div>
          </div>
        </div>
        <p className="mt-3 text-sm text-white/70">
          Final fee may vary by audience size, session scope, and logistics.
        </p>
      </div>
    </WorkPageShell>
  );
}
