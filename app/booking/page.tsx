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

        {/* MoeGo Booking Widget Placeholder */}
        <div className="rounded-2xl border-2 border-dashed border-sage-300 bg-sage-50 p-12 text-center min-h-64 flex flex-col items-center justify-center gap-4">
          <span className="text-5xl">📅</span>
          <p className="text-stone-600 font-medium">Online Booking Coming Soon</p>
          <p className="text-stone-400 text-sm max-w-sm">
            {/* Insert MoeGo embed code here */}
            The online booking widget will appear here once your MoeGo account is connected.
          </p>
          <a
            href="tel:9204952306"
            className="mt-2 inline-block px-6 py-2 rounded-lg bg-sage-600 text-white font-medium hover:bg-sage-700 transition-colors text-sm"
          >
            Call to Book: (920) 495-2306
          </a>
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
