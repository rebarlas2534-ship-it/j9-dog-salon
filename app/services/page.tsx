import Link from "next/link";

const services = [
  {
    name: "Bath + Brush Out",
    description: "Full bath plus a thorough brush-out to reduce shedding and tangles.",
    addon: false,
    prices: { small: "$55", medium: "$70", large: "$90", xl: "$110", xxl: "$130" },
  },
  {
    name: "Full Groom",
    description: "Bath, breed-specific cut, nail trim, and ear cleaning — all included.",
    addon: false,
    prices: { small: "$65", medium: "$85", large: "$105", xl: "$130", xxl: "$160+" },
  },
  {
    name: "De-Shedding",
    description: "Specialized shampoo, deep conditioning, and intensive brush-out. Add-on to any service.",
    addon: true,
    prices: { small: "+$20", medium: "+$25", large: "+$30", xl: "+$35", xxl: "+$100" },
  },
  {
    name: "Nail Trim",
    description: "Standalone nail clipping and filing. Already included in Full Groom.",
    addon: false,
    prices: { small: "$15", medium: "$15", large: "$20", xl: "$20", xxl: "$25" },
  },
];

const sizes = [
  { key: "small", label: "Small", sub: "Under 20 lbs" },
  { key: "medium", label: "Medium", sub: "20–50 lbs" },
  { key: "large", label: "Large", sub: "50–80 lbs" },
  { key: "xl", label: "XL", sub: "80–100 lbs" },
  { key: "xxl", label: "XXL", sub: "100+ lbs" },
] as const;

export default function ServicesPage() {
  return (
    <div className="py-16 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-stone-900 mb-4">Services & Pricing</h1>
          <p className="text-stone-500 max-w-xl mx-auto">
            All services are appointment-based. Pricing is based on your dog&apos;s size.
            Call us at{" "}
            <a href="tel:9204952306" className="text-sage-600 font-medium hover:underline">
              (920) 495-2306
            </a>{" "}
            with any questions.
          </p>
        </div>

        {/* Pricing Table */}
        <div className="overflow-x-auto rounded-2xl border border-stone-200 shadow-sm">
          <table className="w-full text-sm min-w-[700px]">
            <thead className="bg-sage-600 text-white">
              <tr>
                <th className="text-left px-6 py-4 font-semibold w-56">Service</th>
                {sizes.map((s) => (
                  <th key={s.key} className="px-4 py-4 font-semibold text-center">
                    {s.label}
                    <br />
                    <span className="font-normal text-sage-200 text-xs">{s.sub}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {services.map((svc, i) => (
                <tr key={svc.name} className={i % 2 === 0 ? "bg-white" : "bg-stone-50"}>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-stone-800">{svc.name}</p>
                      {svc.addon && (
                        <span className="text-xs bg-sage-100 text-sage-700 px-2 py-0.5 rounded-full font-medium">
                          Add-on
                        </span>
                      )}
                    </div>
                    <p className="text-stone-500 text-xs mt-1 max-w-xs leading-relaxed">
                      {svc.description}
                    </p>
                  </td>
                  {sizes.map((s) => (
                    <td key={s.key} className="px-4 py-5 text-center font-semibold text-sage-700">
                      {svc.prices[s.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 bg-stone-50 border border-stone-200 rounded-xl px-6 py-5 text-sm text-stone-600 leading-relaxed">
          <p>
            <span className="font-semibold text-stone-800">Please note: </span>
            All prices are starting prices and may vary based on coat condition, breed, and
            temperament. Dogs that are heavily soiled or matted require extra time and care — we&apos;ll
            assess your dog at drop-off and provide a quote before we begin.{" "}
            <span className="font-semibold text-stone-800">No surprises.</span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/booking"
            className="inline-block px-10 py-3 rounded-xl bg-sage-600 text-white font-semibold hover:bg-sage-700 transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
