"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/constants/portfolio";

const serviceLinks = [
  { label: "Full Stack Development", href: "/full-stack-development" },
  { label: "MERN Stack Development", href: "/mern-stack-development" },
  { label: "React & Next.js Development", href: "/react-nextjs-development" },
  { label: "SaaS Development", href: "/saas-development" },
  { label: "Hire a Full Stack Developer", href: "/hire-full-stack-developer" },
] as const;

const pageLinks = [
  { label: "Projects & Case Studies", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Freelance Profiles", href: "/freelance" },
  { label: "Contact", href: "/contact" },
] as const;

export default function Footer() {
  return (
    <footer className="theme-footer border-t">
      <div className="site-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_.9fr_.8fr_auto] lg:items-start">
        <div>
          <p className="font-display text-3xl font-medium tracking-[-0.04em]">Let&apos;s build something useful.</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#8f938d]">
            Junaid Ali — Full Stack Developer in Islamabad, Pakistan, building React, Next.js, Node.js, MERN, and SaaS applications for teams worldwide.
          </p>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8f938d]">Services</p>
          <ul className="mt-3 space-y-2 text-xs text-[#747872]">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="theme-hover-link transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8f938d]">Explore</p>
          <ul className="mt-3 space-y-2 text-xs text-[#747872]">
            {pageLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="theme-hover-link transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="theme-hover-link grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[#b9bcb6] transition hover:-translate-y-1 hover:border-[#c9ff63]" aria-label="GitHub"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="theme-hover-link grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[#b9bcb6] transition hover:-translate-y-1 hover:border-[#c9ff63]" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`} className="theme-hover-link grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[#b9bcb6] transition hover:-translate-y-1 hover:border-[#c9ff63]" aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>

      <div className="site-shell flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-[#747872] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Junaid Ali. Built with Next.js.</p>
        <div className="flex flex-wrap items-center gap-5">
          <Link href="/hire-full-stack-developer" className="theme-hover-link transition">Hire a full-stack developer</Link>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="theme-hover-link inline-flex items-center gap-2 transition"
          >
            Back to top <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
