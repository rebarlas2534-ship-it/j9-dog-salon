import Link from "next/link";

export default function BookingPage() {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back link */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sage-600 text-sm font-medium hover:text-sage-800 transition-colors"
          >
            <span aria-hidden="true">←</span> Back to J-9 Dog Salon
          </Link>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Book an Appointment</h1>
          <p className="text-stone-500">
            Prefer to call?{" "}
            <a href="tel:9204952306" className="text-sage-600 font-medium hover:underline">
              (920) 495-2306
            </a>
          </p>
        </div>

        {/* Booking CTA */}
        <div className="bg-sage-50 border border-sage-200 rounded-2xl px-8 py-14 text-center mb-10">
          <span className="text-5xl mb-6 block">📅</span>
          <p className="text-stone-700 text-lg mb-8 max-w-md mx-auto">
            Ready to book? Click below to schedule your appointment online.
          </p>
          <a
            href="https://app.squareup.com/dashboard/appointments/booking/channels"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-3 rounded-xl bg-sage-600 text-white font-semibold hover:bg-sage-700 transition-colors"
          >
            Book an Appointment
          </a>
        </div>

        {/* Info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
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
