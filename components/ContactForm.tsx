"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up form submission (e.g. Resend, Formspree, or server action)
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl bg-sage-50 border border-sage-200 p-10 text-center">
        <span className="text-5xl mb-4 block">✅</span>
        <h3 className="text-lg font-semibold text-stone-800 mb-2">Message Sent!</h3>
        <p className="text-stone-500 text-sm">
          Thanks for reaching out. We&apos;ll get back to you as soon as possible.
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
        className="w-full py-3 rounded-xl bg-sage-600 text-white font-semibold hover:bg-sage-700 transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
