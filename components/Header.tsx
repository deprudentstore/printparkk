"use client";

import Link from "next/link";
import { useState } from "react";
import { Icon } from "./Icons";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/categories", label: "Categories" },
  { href: "/packages", label: "Packages" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-dark text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-lg bg-brand flex items-center justify-center text-dark font-black">P</span>
          <span>
            <span className="block font-extrabold text-lg leading-none">PrintParkk</span>
            <span className="block text-[10px] tracking-widest text-white/50 leading-none mt-0.5">WEAR YOUR IMAGINATION</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-white/80">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+12345678900" className="flex items-center gap-2 text-sm text-white/80">
            <Icon name="phone" className="w-5 h-5 text-brand" />
            <span>
              <span className="block">+1 (234) 567-8900</span>
              <span className="block text-[11px] text-white/40">Talk to our experts</span>
            </span>
          </a>
          <Link href="/contact" className="bg-brand text-dark font-semibold text-sm px-5 py-2.5 rounded-lg hover:brightness-110 transition">
            Get a Quote
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="lg:hidden p-2 -mr-2 text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "close" : "menu"} className="w-7 h-7" />
        </button>
      </div>

      {open && (
        <div id="mobile-dashboard" className="lg:hidden bg-dark border-t border-white/10 px-4 pb-6 pt-2">
          <nav className="flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 border-b border-white/5 text-white/85 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <a href="tel:+12345678900" className="flex items-center gap-2 mt-4 text-sm text-white/80">
            <Icon name="phone" className="w-5 h-5 text-brand" />
            +1 (234) 567-8900
          </a>
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-center mt-4 bg-brand text-dark font-semibold text-sm px-5 py-3 rounded-lg"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
