import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vaccine Records | J-9 Dog Salon",
  description: "Submit your dog's vaccination records to J-9 Dog Salon in Sturgeon Bay, WI.",
};

const required = [
  {
    name: "Rabies",
    detail: "Every 1 or 3 years depending on vaccine type",
  },
  {
    name: "DHPP",
    detail: "Every 1 or 3 years for adult dogs",
  },
  {
    name: "Bordetella (kennel cough)",
    detail: "Every 6 to 12 months",
  },
];

export default function VaccinesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-sage-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Vaccine Records</h1>
          <p className="text-stone-500 max-w-lg mx-auto">
            For the safety of all dogs in our care, we require proof of current vaccinations
            before any grooming appointment.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">

          {/* Info block */}
          <div className="mb-10 space-y-4 text-stone-600 leading-relaxed">
            <p>
              Please use the form below to submit your dog&apos;s vaccination records. We accept
              records directly from your veterinarian, printed copies, or photos of your vaccine card.
            </p>

            {/* Required vaccines */}
            <div className="mt-8">
              <h2 className="text-lg font-bold text-stone-900 mb-4">Required Vaccines</h2>
              <ul className="flex flex-col gap-3">
                {required.map((v) => (
                  <li key={v.name} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-sage-600 flex-shrink-0" />
                    <span>
                      <span className="font-semibold text-stone-800">{v.name}</span>
                      <span className="text-stone-500"> — {v.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact note */}
            <p className="pt-4 text-stone-500 text-sm">
              Questions? Call us at{" "}
              <a href="tel:9204952306" className="text-sage-600 hover:text-sage-700 font-medium">
                920-495-2306
              </a>{" "}
              or email{" "}
              <a href="mailto:joan@j9dogs.com" className="text-sage-600 hover:text-sage-700 font-medium">
                joan@j9dogs.com
              </a>
            </p>
          </div>

          {/* Embedded Google Form */}
          <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-sm">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfF_qZwpikVRjP0GLXHSSzgf1y8DNIzXD4vFCuaCEPmJz0QSA/viewform?embedded=true"
              width="100%"
              height="900"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Vaccine Records Submission Form"
            >
              Loading…
            </iframe>
          </div>

        </div>
      </section>
    </div>
  );
}
