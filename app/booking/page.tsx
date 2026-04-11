"use client";

import Script from "next/script";

export default function BookingPage() {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Book an Appointment</h1>
          <p className="text-stone-500">
            Schedule your dog&apos;s grooming session online. Prefer to call?{" "}
            <a href="tel:9204952306" className="text-sage-600 font-medium hover:underline">
              (920) 495-2306
            </a>
          </p>
        </div>

        {/* Square Appointments Widget */}
        <div className="w-full min-h-96">
          {/* Start Square Appointments Embed Code */}
          <Script
            src="https://square.site/appointments/buyer/widget/uc3yno4komnjs6/LMVWX2XP612M9.js"
            strategy="lazyOnload"
          />
          {/* End Square Appointments Embed Code */}
        </div>

        {/* Info cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: "📍", label: "Location", value: "525 Jefferson St\nSturgeon Bay, WI" },
            { icon: "📞", label: "Phone", value: "(920) 495-2306" },
            { icon: "🕐", label: "Hours", value: "Mon–Fri: 8am–5pm\nSat: 8am–3pm" },
          ].map((item) => (
            <div key={item.label} className="bg-stone-50 rounded-xl p-6 border border-stone-100">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className="text-xs text-stone-400 font-medium uppercase tracking-wide mb-1">{item.label}</p>
              <p className="text-stone-700 font-medium text-sm whitespace-pre-line">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
