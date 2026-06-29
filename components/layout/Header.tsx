"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur border-b border-line shadow-[0_2px_20px_-12px_rgba(0,48,64,0.3)]" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="wrap-wide flex items-center justify-between h-[70px]">
        <Logo variant="dark" />

        <nav className="hidden lg:flex items-center gap-7">
          {nav.slice(1, -1).map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="font-[family-name:var(--font-display)] font-semibold text-[0.92rem] text-ink-2 hover:text-navy ul-grow transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a href={site.phoneHref} className="font-[family-name:var(--font-display)] font-bold text-[0.92rem] text-navy hover:text-teal-deep transition-colors">
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="bg-teal-deep hover:bg-teal text-white font-[family-name:var(--font-display)] font-bold text-[0.9rem] rounded-full px-5 py-2.5 transition-colors shadow-[0_8px_18px_-8px_rgba(21,128,143,0.7)]"
          >
            Free Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden flex flex-col gap-[5px] p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 bg-navy transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-navy transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-x-0 top-[70px] bottom-0 bg-white transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-1">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="font-[family-name:var(--font-display)] text-2xl font-bold text-navy py-3 border-b border-line"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="mt-6 bg-teal-deep text-white text-center font-[family-name:var(--font-display)] font-bold rounded-full py-4"
          >
            Call {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
