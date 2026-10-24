"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
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
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#0b0d0c]/85 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="site-shell flex h-[74px] items-center justify-between">
        <Link href="/" className="group flex items-center gap-3" aria-label="Junaid Ali — Home">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/5 font-display text-sm font-semibold transition-colors group-hover:border-[#c9ff63] group-hover:text-[#c9ff63]">JA</span>
          <span className="font-display text-[15px] font-medium tracking-tight">Junaid Ali</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="rounded-full px-4 py-2 text-[13px] text-[#b9bcb6] transition-colors hover:bg-white/5 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <a href="/My Resume.pdf" download="Junaid_Ali_Resume.pdf" className="button-secondary hidden min-h-[42px] px-4 text-xs md:inline-flex">
          Resume <ArrowUpRight size={15} />
        </a>

        <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="border-t border-white/10 bg-[#0b0d0c]/95 px-5 py-6 backdrop-blur-xl md:hidden"
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
