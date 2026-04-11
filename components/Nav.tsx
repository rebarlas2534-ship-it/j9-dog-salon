"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Book Now" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-stone-200">
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/" aria-label="J-9 Dog Salon — Home" className="py-1">
          <Image
            src="/images/j9-logo-light.svg"
            alt="J-9 Dog Salon"
            width={100}
            height={100}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) =>
            l.label === "Book Now" ? (
              <Link
                key={l.href}
                href={l.href}
                className="ml-2 px-4 py-2 rounded-lg bg-sage-600 text-white text-sm font-medium hover:bg-sage-700 transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md text-sm text-stone-600 hover:text-sage-700 hover:bg-sage-50 transition-colors font-medium"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-stone-600 hover:bg-stone-100"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-stone-200 bg-white px-6 pb-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-stone-700 font-medium hover:text-sage-600"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
