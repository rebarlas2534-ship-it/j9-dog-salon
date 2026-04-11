"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("https://formspree.io/f/xlgoqdwn", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.currentTarget),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-sage-50 border border-sage-200 p-10 text-center">
        <span className="text-5xl mb-4 block">🐾</span>
        <h3 className="text-lg font-semibold text-stone-800 mb-2">Message Received!</h3>
        <p className="text-stone-600 text-sm leading-relaxed">
          Thanks for reaching out! Joan will be in touch within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sage-600 text-sm font-medium hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="rounded-2xl bg-red-50 border border-red-200 p-10 text-center">
        <span className="text-5xl mb-4 block">😕</span>
        <h3 className="text-lg font-semibold text-stone-800 mb-2">Something went wrong</h3>
        <p className="text-stone-600 text-sm leading-relaxed">
          We weren&apos;t able to send your message. Please try again, or call us directly at{" "}
          <a href="tel:9204952306" className="text-sage-600 font-semibold hover:underline">
            (920) 495-2306
          </a>
          .
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sage-600 text-sm font-medium hover:underline"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
            Your Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(920) 555-0100"
            className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="dog" className="block text-sm font-medium text-stone-700 mb-1">
          Dog&apos;s Name & Breed <span className="text-stone-400 font-normal">(optional)</span>
        </label>
        <input
          id="dog"
          name="dog"
          type="text"
          placeholder="Buddy, Golden Retriever"
          className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us what you need..."
          className="w-full rounded-xl border border-stone-200 px-4 py-2.5 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-sage-400 focus:border-transparent resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3 rounded-xl bg-sage-600 text-white font-semibold hover:bg-sage-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
