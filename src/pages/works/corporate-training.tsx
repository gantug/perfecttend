// app/works/corporate-training-workshop/page.tsx
"use client";

import WorkPageShell from "@/components/WorkPageShell";

export default function CorporateTrainingWorkshop() {
  return (
    <WorkPageShell
      title="Corporate training workshop"
      subtitle="Performance and Mindfulness workshops"
    >
      <p>
        Most medium to large and nearly all large companies or corporations have
        some psychology consultant or coach as part of the management board.
        Leaders now recognize the value of employing experts in human behavior
        to achieve greater success.
      </p>

      <p>
        Research backs mottos like “a happy worker is a productive worker,”
        “without a vision, a company will perish,” and “our focus determines our
        reality.” Psychology offers practical means to raise outcomes while
        benefiting both management and staff.
      </p>

      <p>
        Positive psychology adds a new dimension to corporate wellness and
        executive coaching. It focuses on strengths and conditions for flow and
        engagement using interventions shown to work.
      </p>

      <h2 className="text-xl md:text-2xl font-semibold text-white/90 mt-2">
        Workshop focus areas
      </h2>
      <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/90">
        {[
          "Leadership strategies",
          "Setting long-term and short-term goals",
          "Mindfulness Based Stress Reduction techniques",
          "Concentration and attention development techniques",
          "Latest communication techniques and skills",
          "Team-building exercises",
          "Productivity",
          "Efficiency training",
        ].map((t) => (
          <li
            key={t}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 backdrop-blur-xl"
          >
            {t}
          </li>
        ))}
      </ul>

      <p>
        Each workshop includes practical techniques to improve productivity plus
        practice and tips on bringing mindfulness into the workplace. Sessions
        are participative, engaging, and build intrinsic motivation with natural
        positive reinforcement.
      </p>
    </WorkPageShell>
  );
}
