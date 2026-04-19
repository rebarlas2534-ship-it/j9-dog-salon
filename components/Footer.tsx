import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="mb-3">
            <Image
              src="/images/j9-logo-dark.svg"
              alt="J-9 Dog Salon"
              width={64}
              height={64}
            />
          </div>
          <p className="text-sm leading-relaxed">
            Professional grooming with love and care in the heart of Sturgeon Bay, Wisconsin.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              { href: "/services", label: "Services & Pricing" },
              { href: "/booking", label: "Book an Appointment" },
              { href: "/about", label: "About Us" },
              { href: "/gallery", label: "Gallery" },
              { href: "/vaccines", label: "Health Records" },
              { href: "/policies", label: "Policies" },
              { href: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-sage-400 transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>525 Jefferson Street</li>
            <li>Sturgeon Bay, WI</li>
            <li>
              <a href="tel:9204952306" className="hover:text-sage-400 transition-colors">
                (920) 495-2306
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-800 py-4 text-center text-xs text-stone-600">
        © {new Date().getFullYear()} J-9 Dog Salon. All rights reserved.
      </div>
    </footer>
  );
}
