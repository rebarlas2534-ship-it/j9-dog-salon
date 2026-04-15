import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Policies | J-9 Dog Salon",
  description: "Appointment, cancellation, and safety policies at J-9 Dog Salon in Sturgeon Bay, WI.",
};

const policies = [
  {
    title: "Appointments & Cancellations",
    body: [
      "We ask for at least 24 hours notice if you need to cancel or reschedule. Cancellations with less than 24 hours notice, or no-shows, will be charged a $25 cancellation fee to the card on file.",
      "We understand that life happens — if something unexpected comes up, just give us a call and we'll do our best to work with you.",
    ],
  },
  {
    title: "Pickup",
    body: [
      "Please plan to pick up your dog within 30 minutes of being notified that their appointment is complete. We love your pup, but we have limited space and a busy schedule.",
      "Dogs not picked up within 30 minutes of completion will be charged a $25 late pickup fee.",
    ],
  },
  {
    title: "Fleas & Ticks",
    body: [
      "If your dog arrives with fleas or ticks, we will contact you before proceeding. A flea treatment will be required before we can complete the groom, and an additional flea treatment fee will be added to your service.",
      "This policy protects all the dogs in our care and keeps our salon clean and safe. If you suspect your dog may have fleas, please let us know when you book so we can plan accordingly.",
    ],
  },
  {
    title: "Matting",
    body: [
      "Severely matted coats require special attention. If your dog arrives with matting that cannot be safely brushed out, we will contact you to discuss options. In most cases, the safest and most humane solution is to shave the affected areas. We will always get your consent before proceeding, and an additional dematting/shaving fee will apply.",
      "The best way to avoid matting is regular grooming — we're happy to recommend a schedule that works for your dog.",
    ],
  },
  {
    title: "Health & Safety",
    body: [
      "Please let us know at booking if your dog has any health conditions, injuries, or sensitivities we should be aware of. We ask that all dogs be current on required vaccinations before their appointment — you can submit records on our Health Records page.",
      "We reserve the right to refuse or stop service at any time if we feel it is in the best interest of the dog or the safety of our staff. In those cases, a fee for time spent will apply.",
    ],
  },
  {
    title: "Accidents",
    body: [
      "We take every precaution to keep your dog safe and comfortable. Occasionally, minor incidents such as small nicks or scratches can occur during grooming, particularly with wiggly or anxious dogs.",
      "We will always notify you if anything happens and handle every dog with the greatest care.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-sage-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Our Policies</h1>
          <p className="text-stone-500 max-w-lg mx-auto">
            At J9 Dog Salon, our goal is to make every visit safe, comfortable, and enjoyable for
            your dog. These policies help us do that. If you ever have questions, please don&apos;t
            hesitate to call us at{" "}
            <a href="tel:9204952306" className="text-sage-600 font-medium hover:underline">
              920-495-2306
            </a>
            .
          </p>
        </div>
      </section>

      {/* Policies */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 flex flex-col gap-10">
          {policies.map((p) => (
            <div key={p.title} className="border-b border-stone-100 pb-10 last:border-0 last:pb-0">
              <h2 className="text-xl font-bold text-stone-900 mb-3">{p.title}</h2>
              <div className="flex flex-col gap-3">
                {p.body.map((para, i) => (
                  <p key={i} className="text-stone-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          ))}

          {/* Closing note */}
          <div className="mt-4 bg-sage-50 border border-sage-100 rounded-2xl px-8 py-7 text-stone-600 leading-relaxed italic">
            Thank you for trusting us with your pup. We genuinely love what we do, and your
            dog&apos;s safety and comfort are always our first priority.{" "}
            <span className="not-italic font-semibold text-stone-800">— Joan &amp; the J9 team</span>
          </div>
        </div>
      </section>
    </div>
  );
}
