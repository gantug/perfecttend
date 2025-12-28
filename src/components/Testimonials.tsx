"use client";

import { useState } from "react";

type TestimonialVid = {
  id: string;
  title: string;
  kind: "youtube" | "facebook";
  url: string;
};

const testimonialVideos: TestimonialVid[] = [
  {
    id: "vXxGMxxYxDk",
    kind: "youtube",
    url: "https://youtu.be/vXxGMxxYxDk?si=DXqPq20E3IfKVHuN",
    title: "Working with Ivan · Client perspective",
  },
  {
    id: "fM41iDqko5Q",
    kind: "youtube",
    url: "https://youtu.be/fM41iDqko5Q?feature=shared",
    title: "How Ivan's work changed my decisions",
  },
];

function TestimonialVideoCard({ id, title, kind, url }: TestimonialVid) {
  const [play, setPlay] = useState(false);

  const youtubeEmbed =
    kind === "youtube"
      ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`
      : undefined;

  // Facebook embed uses the full URL
  const facebookEmbed =
    kind === "facebook"
      ? `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
          url
        )}&show_text=false&width=500&height=281`
      : undefined;

  const youtubeThumb =
    kind === "youtube"
      ? `https://img.youtube.com/vi/${id}/hqdefault.jpg`
      : undefined;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-[#00E0FF]/20">
      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />

      <div className="aspect-video w-full">
        {play ? (
          kind === "youtube" && youtubeEmbed ? (
            <iframe
              className="h-full w-full"
              src={youtubeEmbed + "&autoplay=1"}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : kind === "facebook" && facebookEmbed ? (
            <iframe
              className="h-full w-full"
              src={facebookEmbed}
              title={title}
              scrolling="no"
              allow="encrypted-media;autoplay;clipboard-write"
              allowFullScreen
            />
          ) : null
        ) : (
          <button
            type="button"
            aria-label={`Play testimonial: ${title}`}
            onClick={() => setPlay(true)}
            className="relative h-full w-full"
          >
            {kind === "youtube" && youtubeThumb ? (
              <img
                src={youtubeThumb}
                alt={title}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,_#3F5DCC_0%,_#070B2A_55%,_#020314_100%)]">
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">
                  Facebook testimonial
                </span>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-[#070B2A] shadow-lg ring-1 ring-white/40 transition-transform group-hover:scale-105">
              ▶
            </span>
          </button>
        )}
      </div>

      <div className="p-4 text-center">
        <h3 className="text-sm text-white md:text-base">{title}</h3>
        {!play && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-block text-xs text-[#9EC5FF] underline underline-offset-4 hover:text-white"
          >
            Open on {kind === "youtube" ? "YouTube" : "Facebook"}
          </a>
        )}
      </div>
    </div>
  );
}

export default function TestimonialVideos() {
  return (
    <section
      id="testimonials"
      className="relative min-h-svh isolate flex flex-col justify-center overflow-hidden bg-[#070B2A] px-[5.5%] py-24"
    >
      <div className="noise-container pointer-events-none absolute inset-0 z-30" />

      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-15"
      >
        <defs>
          <pattern
            id="testimonial-video-grid"
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
        <rect width="100%" height="100%" fill="url(#testimonial-video-grid)" />
      </svg>

      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_10%,_transparent_0%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />

      <div className="relative z-20 mx-auto w-full max-w-6xl">
        <h2 className="mb-6 text-3xl text-white md:text-5xl">
          Client testimonials
        </h2>
        <p className="mb-10 max-w-2xl text-sm text-white/60 md:text-base">
          Real stories from people who&apos;ve experienced Ivan&apos;s work and
          brought it into their teams, products, and lives.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonialVideos.map((v) => (
            <TestimonialVideoCard key={v.id} {...v} />
          ))}
        </div>

        {/* Written Testimonials */}
        <div className="mt-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* First Testimonial */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-lg p-6 md:p-8">
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <p className="mb-4 text-xs text-white/50">March 20th, 2017</p>
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Re: Testimonial regarding Psychologist Ivan Hopkins
                </h3>
                <div className="space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
                  <p>
                    Ivan helped me in so many ways, but I would like to express
                    the recent and most astonishing result about my 6 years old
                    son.
                  </p>
                  <p>
                    Ivan gave me powerful advice about having the right mind set
                    when communicating with my son and giving him the right
                    encouragement and support. When I have a session with him he
                    always tells me to encourage my son&apos;s goodness and
                    bring out the potential in him. From then on I encouraged
                    him whatever good he did and praised him for his success in
                    doing tasks.
                  </p>
                  <p>
                    For example, my son was preparing for an exam to enroll in
                    first grade at &quot;Shine Mongol&quot; high school. Just
                    over a month before the examination, I went to Ivan to get
                    advice on how to prepare my son for the examination. Like
                    always he told me to encourage him no matter what. He also
                    taught me how to use a technique called &quot;positive
                    reinforcement&quot;. This I applied with amazing results.
                  </p>
                  <p>
                    I followed his advice and my son scored the top point out of
                    955 children in the interview!
                  </p>
                  <p>
                    I truly recommend Ivan as a therapist who knows exactly what
                    an individual child needs and he truly knows his stuff.
                  </p>
                  <p className="mt-6 text-sm text-white/60">
                    Please do not hesitate to contact me via email at{" "}
                    <a
                      href="mailto:d_emma48@yahoo.com"
                      className="text-[#9EC5FF] underline underline-offset-4 hover:text-white"
                    >
                      d_emma48@yahoo.com
                    </a>{" "}
                    if you have any questions.
                  </p>
                </div>
                <p className="mt-6 font-semibold text-white">
                  With kind regards,
                  <br />
                  D. Dulamsuren
                </p>
              </div>
            </div>

            {/* Second Testimonial */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl shadow-lg p-6 md:p-8">
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-[#00E0FF]/0 via-[#3F5DCC]/10 to-[#00FFC6]/0 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
              <div className="relative z-10">
                <p className="mb-4 text-xs text-white/50">19th June, 2017</p>
                <h3 className="mb-4 text-lg font-semibold text-white">
                  Re: Ivan Hopkins
                </h3>
                <div className="mb-6 space-y-2 text-sm text-white/70">
                  <p className="font-semibold text-white">Margaret Forde</p>
                  <p>
                    Chartered Organizational and Counselling Psychologist (PsSI)
                  </p>
                  <p>Accredited Holistic Psychotherapist (IAHM)</p>
                  <p>316 Howth Rd, Dublin, Ireland D05P024</p>
                  <p>Tel +353 1 8339902</p>
                  <p>Mobile: +353 86 290 82 52</p>
                  <p>
                    <a
                      href="mailto:fordemargaret@gmail.com"
                      className="text-[#9EC5FF] underline underline-offset-4 hover:text-white"
                    >
                      fordemargaret@gmail.com
                    </a>
                  </p>
                </div>
                <div className="space-y-4 text-sm leading-relaxed text-white/80 md:text-base">
                  <p>
                    Ivan Hopkins came to our College of Holistic Medicine in
                    2012/2013 to take our diploma in Applied Positive
                    Psychology. He had previously completed his degree in
                    psychology specializing in mindfulness and mind training.
                  </p>
                  <p>
                    He was a most dedicated and enthusiastic student. I also
                    supervised the work he did with clients for a year after the
                    course. He showed great integrity and practicality as a
                    therapist and trainer, and got excellent results with
                    individuals and groups. He showed himself to be very
                    adaptable, utilizing techniques from different sources to
                    obtain the best results. He had a passion for working with
                    young people and parents in an educational setting, and set
                    up some innovative and successful programs.
                  </p>
                  <p>
                    I can confidently recommend him as a consultant and
                    practitioner in youth wellbeing, parental education, and
                    mental health promotion.
                  </p>
                  <p className="mt-6 text-sm text-white/60">
                    Should you need more information, I can be reached on whats
                    app or viber.
                  </p>
                </div>
                <p className="mt-6 font-semibold text-white">
                  Yours sincerely,
                  <br />
                  Margaret Forde, BA, H.Dip Ed, M. App Psych
                </p>
                <p className="mt-4 text-xs text-white/50">
                  Corporate Wellness - Mindfulness - Leadership Development -
                  Keynote Speaker
                  <br />
                  Director, Positive Psychology Coaching Institute{" "}
                  <a
                    href="https://www.positivepsychology.ie"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#9EC5FF] underline underline-offset-4 hover:text-white"
                  >
                    www.positivepsychology.ie
                  </a>
                  <br />
                  Director, Irish Association of Holistic Medicine
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
