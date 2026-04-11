import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-sage-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">About J-9 Dog Salon</h1>
          <p className="text-stone-500 max-w-xl mx-auto">
            A little about who we are and why we love what we do.
          </p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row gap-14 items-center">
          {/* Joan's photo */}
          <div className="flex-shrink-0">
            <div className="relative w-64 h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/gallery-3.jpeg"
                alt="Joan Barlas, Owner and Lead Groomer at J-9 Dog Salon"
                fill
                className="object-cover object-center scale-110"
                sizes="256px"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-stone-900 mb-1">Meet Joan Barlas</h2>
            <p className="text-sage-600 font-medium text-sm mb-4">Owner &amp; Lead Groomer</p>
            <div className="space-y-4 text-stone-600 leading-relaxed">
              <p>
                Hi, I&apos;m Joan — the owner and lead groomer here at J-9 Dog Salon. I founded this
                salon with a simple mission: to give every dog the kind of gentle, expert care that
                their owners would give them themselves. Located at 525 Jefferson Street in Sturgeon Bay,
                I&apos;m proud to be a trusted part of the Door County community.
              </p>
              <p>
                I bring years of hands-on experience working with all breeds, from tiny Chihuahuas to
                giant Bernese Mountain Dogs. I believe grooming should be a positive experience —
                not a stressful one — so I take the time to make sure every dog feels safe, comfortable,
                and well cared for from start to finish.
              </p>
              <p>
                Whether it&apos;s a quick bath and brush or a full breed cut, I treat each dog as an
                individual and give them my full, undivided attention. When you drop your pup off with
                me, you can trust they&apos;re in good hands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-stone-900 text-center mb-10">What We Stand For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🐾",
                title: "Dog-First Approach",
                desc: "Every decision we make starts with what's best for the dog. We never rush, never cut corners.",
              },
              {
                icon: "🤝",
                title: "Trust & Transparency",
                desc: "We communicate openly with pet owners about what your dog needs and how every service is performed.",
              },
              {
                icon: "🌿",
                title: "Safe Products Only",
                desc: "We use gentle, professional-grade, pet-safe products free from harsh chemicals.",
              },
              {
                icon: "🏡",
                title: "Community Rooted",
                desc: "We&apos;re a small, local business proud to serve Sturgeon Bay and the greater Door County area.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-stone-100 flex gap-4 items-start">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-stone-800 mb-1">{item.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 text-center">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Come Meet Us</h2>
          <p className="text-stone-500 mb-6">
            We&apos;d love to meet you and your pup. Stop by, give us a call, or book online.
          </p>
          <Link
            href="/booking"
            className="inline-block px-8 py-3 rounded-xl bg-sage-600 text-white font-semibold hover:bg-sage-700 transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
