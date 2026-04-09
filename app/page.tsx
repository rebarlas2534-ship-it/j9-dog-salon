import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-sage-50 overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <span className="inline-block mb-4 px-3 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-medium">
              Sturgeon Bay, WI
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-stone-900 leading-tight mb-6">
              Where Every Pup<br />
              <span className="text-sage-600">Leaves Looking Great</span>
            </h1>
            <p className="text-lg text-stone-600 max-w-lg mb-8 mx-auto md:mx-0">
              Professional dog grooming with a gentle touch. We treat your furry
              family member with the care and love they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/booking"
                className="px-8 py-3 rounded-xl bg-sage-600 text-white font-semibold hover:bg-sage-700 transition-colors text-center"
              >
                Book Now
              </Link>
              <Link
                href="/services"
                className="px-8 py-3 rounded-xl border-2 border-sage-600 text-sage-700 font-semibold hover:bg-sage-50 transition-colors text-center"
              >
                View Services
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80"
                alt="Well-groomed golden dog"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-4">
            Why Dog Owners Love J-9
          </h2>
          <p className="text-stone-500 text-center mb-12 max-w-xl mx-auto">
            We've built our reputation on trust, expertise, and genuine love for every dog we groom.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "✂️",
                title: "Expert Groomers",
                desc: "Our experienced team knows how to handle every breed, coat type, and temperament with confidence.",
              },
              {
                icon: "🌿",
                title: "Safe & Natural Products",
                desc: "We use gentle, pet-safe shampoos and conditioners that leave coats clean, shiny, and healthy.",
              },
              {
                icon: "❤️",
                title: "Stress-Free Experience",
                desc: "Appointment-based scheduling means one-on-one attention so your dog stays calm and comfortable.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-2xl bg-stone-50 border border-stone-100">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-stone-800 mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-sage-600 py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book Your Pup&apos;s Appointment?
          </h2>
          <p className="text-sage-100 mb-8">
            Call us at{" "}
            <a href="tel:9204952306" className="underline font-semibold hover:text-white">
              (920) 495-2306
            </a>{" "}
            or book online today.
          </p>
          <Link
            href="/booking"
            className="inline-block px-10 py-3 rounded-xl bg-white text-sage-700 font-bold hover:bg-sage-50 transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
