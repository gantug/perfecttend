// app/works/intuition-training-program/page.tsx
"use client";

import WorkPageShell from "@/components/WorkPageShell";

export default function IntuitionTrainingProgram() {
  return (
    <WorkPageShell
      title="The Intutor Training Program"
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
          "Precognition",
          "Clairvoyance & E.S.P",
          "Auric Vision & Awareness of Energy",
          "Ivan's Speciality: Card Clairvoyance",
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

      {/* individual pricing */}
      <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
        <h3 className="text-white text-lg md:text-xl font-semibold">
          Individual and Group training
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

      {/* group training & seminars */}
      <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
        <h3 className="text-white text-lg md:text-xl font-semibold">
          Group Training & Seminars
        </h3>
        <p className="mt-3 text-white/90">
          Group training, weekend programs, and 10-day seminars are also
          available.
        </p>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
          {/* Online seminar */}
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 space-y-1">
            <div className="text-sm font-semibold text-white">
              Next Online Seminar
            </div>

            <div className="text-xs text-white/70">Start date</div>
            <div className="text-sm">January 10th</div>

            <div className="text-xs text-white/70 mt-2">Format</div>
            <div className="text-sm">
              4 weekends, 4 hours on Saturday and Sunday
            </div>

            <div className="text-xs text-white/70 mt-2">Capacity</div>
            <div className="text-sm">Maximum 15 participants</div>

            <div className="text-xs text-white/70 mt-2">Price</div>
            <div className="text-sm">$800 USD</div>

            <div className="text-xs text-white/70 mt-2">Registration</div>
            <div className="text-sm">
              Registration is now open on a first-come, first-served basis.
              <br />
              Email Ivan at:{" "}
              <a
                href="mailto:Ivanhopkins0@gmail.com"
                className="underline underline-offset-4"
              >
                Ivanhopkins0@gmail.com
              </a>
            </div>
          </div>

          {/* In-class seminar */}
          <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 space-y-1">
            <div className="text-sm font-semibold text-white">
              In-Class Seminar
            </div>

            <div className="text-xs text-white/70">Dates</div>
            <div className="text-sm">April 3rd – April 12th</div>

            <div className="text-xs text-white/70 mt-2">Price</div>
            <div className="text-sm">$2900 USD</div>

            <div className="text-xs text-white/70 mt-2">Registration</div>
            <div className="text-sm">
              In-class seminar registration is now open.
              <br />
              For more information and to register, please email Ivan at:{" "}
              <a
                href="mailto:Ivanhopkins0@gmail.com"
                className="underline underline-offset-4"
              >
                Ivanhopkins0@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* attendance policy */}
        <div className="mt-4 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 text-sm">
          Attendance on all programs is at the discretion of Ivan, who holds a
          30-minute interview prior to any commitment by the student or himself.
        </div>
      </div>

      {/* disclaimer */}
      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/85 space-y-3">
        <h3 className="text-base font-semibold text-white">Disclaimer</h3>
        <p>
          Even though Ivan is a highly experienced teacher, mind trainer, and
          intuitive practitioner and demonstrator, due to the nature of this
          area of intuitive awareness being subtle and difficult to develop in a
          highly rigid, measurable manner, there are no guarantees that students
          will definitely experience intuitive awareness.
        </p>
        <p>
          However, if a student follows Ivan&apos;s guidance, the student is
          very likely to cultivate their awareness, including intuitive
          awareness, focus, and more. By the end of the training seminars, one
          can reasonably aim to get around 7 out of 10 colors correct in playing
          cards, as well as get cards close or even exactly right above chance
          consistently, begin to see auras, have some experiences of general
          E.S.P, and improve mental focus.
        </p>
        <p>
          Ivan follows a “no one is left behind” policy, meaning he runs a
          once-a-week intuitive class online for alumni of his program so
          students can continue to train after the seminars end. These classes
          take place at 6pm ET.
        </p>
      </div>
    </WorkPageShell>
  );
}
