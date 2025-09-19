"use client";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-svh overflow-hidden isolate px-[5.5%] py-24 bg-[#070B2A]"
    >
      {/* Edge fade overlay (uses your .noise-container CSS) */}
      <div className="noise-container pointer-events-none absolute inset-0 z-30" />

      {/* Futuristic grid */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15 z-0"
      >
        <defs>
          <pattern
            id="exp-grid"
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
        <rect width="100%" height="100%" fill="url(#exp-grid)" />
      </svg>

      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_10%,_transparent_0%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />

      <div className="relative z-20 mx-auto w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Column A */}
          <div>
            <h2 className="text-3xl md:text-2xl text-white mb-8">
              Professional Experience & Accreditation
            </h2>

            {/* Timeline */}
            <div className="relative ">
              {/* neon spine */}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "CBT NLP SFBT Humanistic Psychotherapist",
                    meta: "2012 - Present",
                  },
                  {
                    title: "'Real magic' Performer and Entertainer",
                    meta: "2020 - Present",
                  },
                  { title: "Head of Languages Department" },
                  { title: "Language and literature lecturer" },
                  {
                    title: "Past Honoury Member and Member of Toastmasters",
                    meta: "2021 - Present",
                  },
                  {
                    title: "MNEMONICS and Rapid learning techniques",
                    meta: "February 2001 - February 2003",
                  },
                  {
                    title:
                      "Esoteric training in concentration and advanced mindfulness",
                    meta: "June 2004 - Present",
                  },
                  {
                    title: "Member of the PPA (Parapsychology association)",
                    meta: "2021 - Present",
                  },
                  {
                    title: "Member of the memory league",
                    meta: "Current ranking: 105 out of 5000 members",
                  },
                  {
                    title: "Ki-Massage Healing Therapist",
                    meta: "2007 - 2020",
                  },
                  {
                    title: "Honours Bsc Degree in Psychology",
                    meta: "University of Wales, Bangor, UK · 2003 - 2006",
                  },
                  { title: "Photoreading certificate", meta: "London, 2004" },
                  {
                    title: "Applied positive psychology coaching diploma",
                    meta: "Dublin, 2012 - 2013",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative rounded-2xl border border-white/10 bg-white/[0.05] p-5 md:p-6 backdrop-blur-xl shadow-lg hover:shadow-[#00E0FF]/20 transition"
                  >
                    {/* neon hover glow */}
                    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />

                    <h3 className="text-white text-lg md:text-xl font-medium">
                      {item.title}
                    </h3>

                    {item.meta && (
                      <div className="mt-2 text-sm text-[#C8CBD9]">
                        {item.meta}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column B */}
          <div>
            <h2 className="text-3xl md:text-2xl text-white mb-8">
              Unique repertoire of skills
            </h2>

            <div className="space-y-4">
              {[
                {
                  title: "Renowned Teacher and lecturer",
                  body: "For 12+ years Ivan has lectured in Psychology and Learning Techniques, and taught Literature at the IB Academy, helping 700+ students achieve top scores.",
                },
                {
                  title: "Mnemonics Expert",
                  body: "Masters diverse memorization methods. Can memorize 20+ names in 1 minute. Designs custom techniques for faster, effective learning. Member of the Memory League.",
                },
                {
                  title: "Attention and Mental Concentration",
                  body: "Years of meditation and raja yoga concentration practice. Delivers talks on training focus and attention for real-world performance.",
                },
                {
                  title: "Heightened Perception",
                  body: "Perceptual skills comparable to top body-language experts and mentalists, with documented feats like perceiving a stranger’s name in 2–3 attempts.",
                },
                {
                  title: "Intuition Expert",
                  body: "Can demonstrate intuitive awareness on demand, e.g., casually knowing face-down playing cards. See the video evidence: ",
                  link: {
                    href: "https://www.youtube.com/watch?v=jiforOAnXWs",
                    label: "video link",
                  },
                },
                {
                  title: "Rapid Learning and Strategies Trainer",
                  body: "Applies proven methods such as Pomodoro and speed reading to help students and clients learn and work more efficiently.",
                },
                {
                  title: "Advanced Visualisation techniques",
                  body: "Trains scientific visualisation and goal design practices inspired by raja yoga and supervised psychological practice.",
                },
              ].map((s, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-white/10 bg-white/[0.05] p-4 md:p-5 backdrop-blur-xl"
                >
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
                  <h3 className="text-white text-base md:text-lg">{s.title}</h3>
                  <p className="mt-2 text-xs md:text-sm text-[#C8CBD9]">
                    {s.body}
                    {s.link && (
                      <>
                        {" "}
                        <a
                          className="text-white underline underline-offset-4 hover:text-[#9EC5FF] transition-colors"
                          href={s.link.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {s.link.label}
                        </a>
                        .
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
