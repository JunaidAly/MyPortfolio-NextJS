"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ScrollSection from "@/components/ui/ScrollSection";
import { capabilities, profile } from "@/constants/portfolio";

export default function About() {
  return (
    <ScrollSection
      id="about"
      className="section-pad bg-[#f3efe5] text-[#0b0d0c]"
      direction="scale"
    >
      <div className="site-shell">
        <Reveal>
          <span className="eyebrow !text-[#5f635d]">What I bring</span>
          <div className="grid gap-9 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <h2 className="section-title">Product thinking, <span className="text-[#777b74]">engineering depth.</span></h2>
            <p className="text-base leading-8 text-[#555951]">I work across the product surface—not just isolated screens. That means clearer architecture, fewer handoff gaps, and experiences that remain maintainable after launch.</p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-black/10 bg-black/10 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.number} delay={index * 0.08} className="bg-[#f8f5ec] p-7 md:p-9">
              <motion.div whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 280, damping: 26 }}>
              <div className="flex items-center justify-between">
                <span className="font-display text-sm text-[#7b7f78]">{capability.number}</span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-black/10"><ArrowUpRight size={17} /></span>
              </div>
              <h3 className="mt-16 font-display text-3xl font-medium tracking-[-.04em]">{capability.title}</h3>
              <p className="mt-4 min-h-[84px] text-sm leading-7 text-[#686c65]">{capability.description}</p>
              <p className="mt-7 border-t border-black/10 pt-5 text-xs font-semibold uppercase tracking-[.1em] text-[#444840]">{capability.tools}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 grid overflow-hidden rounded-[28px] bg-[#151816] text-[#f3efe5] md:grid-cols-[.85fr_1.15fr]" delay={0.12}>
          <div className="border-b border-white/10 p-8 md:border-b-0 md:border-r md:p-10">
            <p className="text-xs uppercase tracking-[.16em] text-[#c9ff63]">Working style</p>
            <p className="mt-6 font-display text-3xl leading-tight tracking-[-.04em]">Calm execution. Clear communication. No black boxes.</p>
          </div>
          <div className="grid gap-5 p-8 md:grid-cols-2 md:p-10">
            {["Reusable systems over one-off screens", "Performance considered from day one", "Product decisions explained clearly", "Remote collaboration that stays visible"].map((item) => (
              <div key={item} className="flex items-start gap-3 text-sm leading-6 text-[#c0c4bd]"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#c9ff63] text-black"><Check size={12} /></span>{item}</div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold">Based in {profile.location}</p>
            <p className="mt-1 text-sm text-[#6c7069]">English (professional) · Urdu (native)</p>
          </div>
          <a href={profile.resume} download="Junaid_Ali_Resume.pdf" className="inline-flex items-center gap-2 text-sm font-semibold hover:underline">Download full resume <ArrowUpRight size={16} /></a>
        </Reveal>
      </div>
    </ScrollSection>
  );
}
