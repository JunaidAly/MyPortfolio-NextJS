"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ScrollSection from "@/components/ui/ScrollSection";
import { experiences } from "@/constants/portfolio";

export default function Experience() {
  return (
    <ScrollSection
      id="experience"
      className="theme-page section-pad section-compact-bottom"
      direction="left"
    >
      <div className="site-shell">
        <Reveal className="grid gap-8 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <span className="eyebrow">Experience</span>
            <h2 className="section-title">Built in real teams, <span className="text-[#7c807a]">for real users.</span></h2>
          </div>
          <p className="section-copy self-end lg:justify-self-end">From client platforms to internal systems, I&apos;ve worked across the full delivery cycle: interface design, architecture, data, integrations, and deployment.</p>
        </Reveal>

        <div className="mt-16 border-t border-white/10">
          {experiences.map((experience, index) => (
            <Reveal key={`${experience.company}-${experience.period}`} delay={index * 0.07}>
              <motion.article className="group grid gap-6 border-b border-white/10 py-9 transition-colors hover:bg-white/[.025] md:grid-cols-[.55fr_.8fr_1.6fr_auto] md:px-4" whileHover={{ x: 7 }} transition={{ type: "spring", stiffness: 260, damping: 28 }}>
                <p className="text-xs uppercase tracking-[.13em] text-[#888c86]">{experience.period}</p>
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-[-.035em]">{experience.role}</h3>
                  <p className="mt-2 text-sm text-[#c9ff63]">{experience.company}</p>
                  <p className="mt-1 text-xs text-[#757972]">{experience.location}</p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-[#afb3ac]">{experience.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => <span key={skill} className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[.08em] text-[#9ca099]">{skill}</span>)}
                  </div>
                </div>
                <ArrowUpRight className="hidden text-[#5c605a] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#c9ff63] md:block" size={20} />
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="theme-card mt-10 flex flex-col gap-4 rounded-2xl border p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#aeb2ab]"><span className="mr-2 text-[#c9ff63]">Education</span> BS Computer Science — COMSATS University Islamabad, 2020–2024</p>
          <span className="text-xs uppercase tracking-[.12em] text-[#71756f]">5+ years building for the web</span>
        </Reveal>
      </div>
    </ScrollSection>
  );
}
