"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ThemeToggle from "@/components/layout/ThemeToggle";

const navItems = [
  { label: "Intro", href: "/#intro" },
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ${scrolled ? "pt-3" : "pt-0"}`}>
      <div
        className={`site-shell flex items-center justify-between rounded-full border px-3 transition-[height,background-color,border-color,box-shadow] duration-300 md:px-5 ${
          scrolled
            ? "theme-nav-floating h-[62px] backdrop-blur-xl md:h-[66px]"
            : "h-[74px] border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="group flex items-center gap-3" aria-label="Junaid Ali — Home">
          <span className="theme-brand-mark grid h-9 w-9 place-items-center rounded-full border font-display text-sm font-semibold transition-colors group-hover:border-[#c9ff63] group-hover:text-[#c9ff63]">JA</span>
          <span className="font-display text-[15px] font-medium tracking-tight">Junaid Ali</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="theme-nav-link rounded-full px-4 py-2 text-[13px] transition-colors">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="/My Resume.pdf" download="Junaid_Ali_Resume.pdf" className="button-secondary hidden min-h-[42px] px-4 text-xs md:inline-flex">
            Resume <ArrowUpRight size={15} />
          </a>

          <button type="button" onClick={() => setOpen((value) => !value)} className="theme-icon-button grid h-10 w-10 place-items-center rounded-full border md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className={`theme-mobile-menu px-5 py-6 backdrop-blur-xl md:hidden ${
              scrolled ? "site-shell mt-2 rounded-[26px] border shadow-2xl" : "border-t"
            }`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-display text-2xl hover:bg-white/5">
                  {item.label}
                </Link>
              ))}
              <a href="/My Resume.pdf" download="Junaid_Ali_Resume.pdf" className="button-primary mt-3">Download resume <ArrowUpRight size={17} /></a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
