// app/works/corporate-coaching-fee/page.tsx  (example usage)
"use client";

import WorkPageShell from "@/components/WorkPageShell";

export default function CorporateCoachingFee() {
  return (
    <WorkPageShell title="Corporate coaching fee">
      <p>
        The fee is discussed with management and is based on a number of factors
        including number of staff etc.
      </p>

      <p>
        Ivan has a background in business as well as being an occupational
        psychologist and performance coach. He has provided stress management
        training, workshops in positive psychology and positive psychology
        coaching to a variety of organisations including:
      </p>

      <ul className="list-disc pl-5 space-y-1">
        <li>Hunnu Coal</li>
        <li>USP</li>
        <li>Blayney Blades</li>
        <li>Women’s Groups</li>
        <li>ESP Foundation</li>
        <li>Toastmasters</li>
        <li>Universities and Schools</li>
        <li>The National Cancer Center</li>
        <li>Olympic Committee</li>
      </ul>
    </WorkPageShell>
  );
}
