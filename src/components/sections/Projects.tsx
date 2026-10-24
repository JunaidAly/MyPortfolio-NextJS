"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, LockKeyhole } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ScrollSection from "@/components/ui/ScrollSection";
import { projects } from "@/constants/portfolio";

function ProductMockup({ accent, title }: { accent: string; title: string }) {
  return (
    <div className={`project-visual ${accent}`} aria-label={`${title} interface preview`}>
      <div className="mock-window">
        <div className="mock-bar"><i /><i /><i /></div>
        <div className="mock-content">
          <div className="mock-sidebar" />
          <div className="mock-stack">
            <div className="mock-row" />
            <div className="mock-chart" />
            <div className="grid grid-cols-2 gap-3"><div className="mock-row" /><div className="mock-row" /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <ScrollSection
      id="work"
      className="section-pad bg-[#121513]"
      direction="up"
    >
      <div className="site-shell">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">Complex systems, <span className="text-[#7f837d]">made clear.</span></h2>
          </div>
          <p className="section-copy max-w-lg">A focused selection of production products where I worked across interface, architecture, integrations, and delivery.</p>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <motion.article className="soft-card overflow-hidden rounded-[30px] p-3 md:p-4" whileHover={{ y: -8, scale: 1.006 }} transition={{ type: "spring", stiffness: 240, damping: 24 }}>
                <ProductMockup accent={project.accent} title={project.title} />
                <div className="p-4 pb-5 pt-7 md:p-6 md:pb-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-[10px] uppercase tracking-[.15em] text-[#8c9089]">{project.index} · {project.category}</p>
                      <h3 className="mt-3 font-display text-4xl font-medium tracking-[-.045em]">{project.title}</h3>
                    </div>
                    {project.live ? (
                      <motion.a href={project.live} target="_blank" rel="noreferrer" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 transition hover:border-[#c9ff63] hover:text-[#c9ff63]" aria-label={`Visit ${project.title}`} whileHover={{ rotate: 8, scale: 1.1 }} whileTap={{ scale: 0.92 }}><ArrowUpRight size={19} /></motion.a>
                    ) : (
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 text-[#6f736d]" title="Private client project"><LockKeyhole size={17} /></span>
                    )}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[#aeb2ab]">{project.description}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
                    {project.stack.map((technology) => <span key={technology} className="rounded-full bg-white/[.055] px-3 py-1.5 text-[10px] text-[#b9bdb6]">{technology}</span>)}
                    <span className="ml-auto text-[10px] uppercase tracking-[.1em] text-[#777b75]">{project.metric}</span>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#8f938d]">Also shipped AR admin tooling, e-commerce platforms, marketing sites, and internal operations systems.</p>
          <a href="https://github.com/JunaidAly" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9ff63]">More on GitHub <ArrowUpRight size={16} /></a>
        </Reveal>
      </div>
    </ScrollSection>
  );
}
