import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <section className="bg-sage-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Contact Us</h1>
          <p className="text-stone-500 max-w-md mx-auto">
            Questions? Ready to book? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-8">Get in Touch</h2>
            <div className="space-y-6">
              {[
                {
                  icon: "📍",
                  label: "Address",
                  content: "525 Jefferson Street\nSturgeon Bay, WI",
                  href: undefined,
                },
                {
                  icon: "📞",
                  label: "Phone",
                  content: "(920) 495-2306",
                  href: "tel:9204952306",
                },
                {
                  icon: "✉️",
                  label: "Email",
                  content: "hello@j9dogsalon.com",
                  href: "mailto:hello@j9dogsalon.com",
                },
                {
                  icon: "🕐",
                  label: "Hours",
                  content: "Mon–Fri: 8:00am – 5:00pm\nSat: 8:00am – 3:00pm\nSun: Closed",
                  href: undefined,
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-stone-400 uppercase tracking-wide mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-stone-700 hover:text-sage-600 font-medium whitespace-pre-line">
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-stone-700 font-medium whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="mt-10 overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2!2d-87.3776!3d44.8397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805b2b2b2b2b2b3%3A0x0!2s525+Jefferson+St%2C+Sturgeon+Bay%2C+WI+54235!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: 8 }}
                allowFullScreen
                loading="lazy"
                title="J-9 Dog Salon location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-stone-900 mb-8">Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
