"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Slide, toast } from "react-toastify";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (v: typeof inputFields) => {
    const e: Record<string, string> = {};
    if (!v.name.trim()) e.name = "Please, add your name.";
    if (!v.email.trim()) e.email = "Please, add your email.";
    if (!v.message.trim()) e.message = "Please, add your message.";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setInputFields({ ...inputFields, [e.target.name]: e.target.value });

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const errs = validate(inputFields);
    setErrors(errs);
    if (Object.keys(errs).length) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_APP_SERVICE_ID!,
        process.env.NEXT_PUBLIC_APP_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_APP_PUBLIC_KEY!
      );
      toast.success("Message sent!", { theme: "dark", transition: Slide });
      form.reset();
      setInputFields({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong, please try again later!", {
        theme: "dark",
        transition: Slide,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-svh isolate overflow-hidden px-[5.5%] py-24 bg-[#070B2A] flex items-center"
    >
      {/* smooth edges (requires .noise-container in globals.css) */}
      <div className="noise-container pointer-events-none absolute inset-0 z-30" />
      {/* grid */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-15 z-0"
      >
        <defs>
          <pattern
            id="contact-grid"
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
        <rect width="100%" height="100%" fill="url(#contact-grid)" />
      </svg>
      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(60%_60%_at_50%_10%,_transparent_0%,_transparent_40%,_rgba(0,0,0,0.45)_100%)]" />

      <div className="relative z-20 grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 mx-auto">
        <div>
          <h2 className="text-3xl md:text-6xl text-white mb-6 font-medium">
            Let’s work together!
          </h2>
          <p className="text-base md:text-xl text-white/90 font-light">
            Let me help you become even greater at what you do.
            <br />
            Fill out the form and I’ll respond within 24 hours.
          </p>
        </div>

        <form onSubmit={sendEmail} className="flex flex-col gap-8">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-2">
              What’s your name?
            </label>
            {errors.name && (
              <p className="text-sm text-red-500">{errors.name}</p>
            )}
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Type your full name"
              className="w-full bg-transparent px-0 py-3 border-b border-white/30 text-white outline-none focus:border-white"
              value={inputFields.name}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-2">
              What’s your email?
            </label>
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email}</p>
            )}
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Type your email"
              className="w-full bg-transparent px-0 py-3 border-b border-white/30 text-white outline-none focus:border-white"
              value={inputFields.email}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-white mb-2">
              What’s your message?
            </label>
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Type your message"
              className="w-full resize-y bg-transparent px-0 py-3 border-b border-white/30 text-white outline-none focus:border-white"
              value={inputFields.message}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="relative w-fit rounded-xl px-6 py-3 text-white font-medium m-auto md:m-0
                       border border-white/30 hover:border-transparent transition
                       disabled:opacity-60 disabled:cursor-not-allowed
                       before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-[#00E0FF] before:to-[#3F5DCC] before:opacity-0 hover:before:opacity-100 before:-z-10 before:transition-opacity"
          >
            {isSubmitting ? "Sending..." : "Send a message"}
          </button>
        </form>
      </div>
    </section>
  );
}
