import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/constants/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080a09]">
      <div className="site-shell grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-display text-3xl font-medium tracking-[-0.04em]">Let&apos;s build something useful.</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-[#8f938d]">Full-stack product development from Islamabad, collaborating with teams worldwide.</p>
        </div>
        <div className="flex gap-3">
          <a href={profile.github} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[#b9bcb6] transition hover:-translate-y-1 hover:border-white/35 hover:text-white" aria-label="GitHub"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[#b9bcb6] transition hover:-translate-y-1 hover:border-white/35 hover:text-white" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href={`mailto:${profile.email}`} className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-[#b9bcb6] transition hover:-translate-y-1 hover:border-white/35 hover:text-white" aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
      <div className="site-shell flex flex-col gap-3 border-t border-white/10 py-5 text-xs text-[#747872] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Junaid Ali. Built with Next.js.</p>
        <a href="/#home" className="inline-flex items-center gap-2 transition hover:text-white">Back to top <ArrowUpRight size={13} /></a>
      </div>
    </footer>
  );
}
