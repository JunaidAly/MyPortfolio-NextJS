"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, MapPin } from "lucide-react";
import { profile, skills } from "@/constants/portfolio";

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const ticker = [...skills, ...skills];

  return (
    <>
      <section id="home" className="theme-page relative overflow-hidden pb-16 pt-28 md:min-h-screen md:pb-20 md:pt-32">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="hero-orb" aria-hidden="true" />

        <div className="site-shell relative z-10 grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}>
            <motion.div variants={item} transition={{ duration: 0.6 }} className="theme-card mb-8 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#b9bcb6]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#c9ff63] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#c9ff63]" />
              </span>
              Available for select projects
            </motion.div>

            <motion.p variants={item} transition={{ duration: 0.6 }} className="mb-4 font-display text-lg text-[#c9ff63]">
              Full Stack Developer · Islamabad / Remote
            </motion.p>

            <motion.h1 variants={item} transition={{ duration: 0.7 }} className="max-w-4xl font-display text-[clamp(3.2rem,8.7vw,7.6rem)] font-medium leading-[.87] tracking-[-.075em]">
              I build full-stack products that <span className="text-[#8b8f89]">feel effortless.</span>
            </motion.h1>

            <motion.p variants={item} transition={{ duration: 0.6 }} className="mt-8 max-w-2xl text-base leading-8 text-[#aeb2ab] md:text-lg">
              I&apos;m {profile.name}, a full-stack and frontend developer. I turn complex ideas into clear, scalable SaaS platforms, dashboards, and web applications—from interface to API to launch.
            </motion.p>

            <motion.div variants={item} transition={{ duration: 0.6 }} className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <motion.a href="#work" className="button-primary" whileHover={{ y: -4, scale: 1.025 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 360, damping: 24 }}>Explore selected work <motion.span animate={{ y: [0, 3, 0], x: [0, 2, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}><ArrowDownRight size={17} /></motion.span></motion.a>
              <motion.a href="/hire-full-stack-developer" className="button-secondary" whileHover={{ y: -4, scale: 1.025 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 360, damping: 24 }}>Hire me for a project <ArrowUpRight size={17} /></motion.a>
            </motion.div>

            <motion.div variants={item} transition={{ duration: 0.6 }} className="mt-11 grid grid-cols-2 items-center gap-x-5 gap-y-4 text-sm text-[#858983] sm:flex sm:flex-wrap sm:gap-x-7">
              <span className="inline-flex items-center gap-2"><MapPin size={15} /> {profile.location}</span>
              <motion.a href={profile.github} target="_blank" rel="noreferrer" className="theme-hover-link inline-flex items-center gap-2 transition" whileHover={{ x: 3 }}><Github size={15} /> GitHub</motion.a>
              <motion.a href={profile.linkedin} target="_blank" rel="noreferrer" className="theme-hover-link inline-flex items-center gap-2 transition" whileHover={{ x: 3 }}><Linkedin size={15} /> LinkedIn</motion.a>
            </motion.div>
          </motion.div>

          <motion.div className="hero-stage" initial={{ opacity: 0, scale: 0.94, rotateY: 8 }} animate={{ opacity: 1, scale: 1, rotateY: 0 }} transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
            <div className="orbital-ring" aria-hidden="true" />
            <div className="always-dark portrait-card">
              <Image src="/myprofile.jpg" alt="Junaid Ali, Full Stack Developer" fill priority sizes="(max-width: 900px) 90vw, 42vw" />
              <div className="portrait-label">
                <div>
                  <p className="font-display text-xl font-semibold">Junaid Ali</p>
                  <p className="mt-1 text-xs text-white/60">Product-minded engineering</p>
                </div>
                <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[10px] uppercase tracking-[.14em] backdrop-blur">5+ years</span>
              </div>
            </div>

            <div className="always-dark floating-panel top" aria-hidden="true">
              <div className="mb-3 flex items-center justify-between text-[10px] uppercase tracking-[.13em] text-white/50"><span>System status</span><span className="h-2 w-2 rounded-full bg-[#c9ff63]" /></div>
              <p className="font-display text-lg">Shipped to production</p>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-[86%] rounded-full bg-[#c9ff63]" /></div>
            </div>

            <div className="always-dark floating-panel bottom" aria-hidden="true">
              <p className="text-[10px] uppercase tracking-[.13em] text-white/50">Core stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {skills.slice(0, 4).map((skill) => <span key={skill} className="rounded-full bg-white/[.08] px-2.5 py-1 text-[10px]">{skill}</span>)}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="marquee" aria-label="Technology stack">
        <div className="marquee-track">
          {ticker.map((skill, index) => <span className="marquee-item" key={`${skill}-${index}`}>{skill}</span>)}
        </div>
      </div>
    </>
  );
}
