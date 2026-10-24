"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ScrollSection from "@/components/ui/ScrollSection";
import { freelanceProfiles } from "@/constants/portfolio";

export default function Freelance() {
  return (
    <ScrollSection
      className="border-y border-white/10 bg-[#0b0d0c] py-10"
      ariaLabel="Freelance profiles"
      direction="scale"
    >
      <div className="site-shell">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl font-medium tracking-[-.035em]">Prefer a freelance platform?</p>
            <p className="mt-2 text-sm text-[#888c85]">Find my verified profiles on your preferred marketplace.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {freelanceProfiles.map((platform) => (
              <motion.a key={platform.name} href={platform.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs text-[#c3c7c0] transition hover:border-white/35 hover:text-white" whileHover={{ y: -4, scale: 1.03 }} whileTap={{ scale: 0.96 }}>
                {platform.name} <ArrowUpRight size={13} />
              </motion.a>
            ))}
          </div>
        </Reveal>
      </div>
    </ScrollSection>
  );
}
