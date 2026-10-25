"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Github,
  LockKeyhole,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import ScrollSection from "@/components/ui/ScrollSection";
import { moreProjects, projects } from "@/constants/portfolio";

const PROJECTS_PER_PAGE = 6;
const orderedMoreProjects = [...moreProjects].sort((first, second) => {
  const featuredDifference =
    Number("featured" in second && second.featured) - Number("featured" in first && first.featured);

  if (featuredDifference !== 0) return featuredDifference;
  return Number(second.gallery.length > 0) - Number(first.gallery.length > 0);
});

function ProductMockup({ accent, title, compact = false }: { accent: string; title: string; compact?: boolean }) {
  return (
    <div className={`project-visual ${accent} ${compact ? "!h-[210px]" : ""}`} aria-label={`${title} interface preview`}>
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

function ProjectMediaCarousel({
  images,
  title,
  accent = "cyan",
  compact = false,
  priority = false,
}: {
  images: readonly string[];
  title: string;
  accent?: string;
  compact?: boolean;
  priority?: boolean;
}) {
  const [activeImage, setActiveImage] = useState(0);

  if (!images.length) {
    return <ProductMockup accent={accent} title={title} compact={compact} />;
  }

  const showPrevious = () => setActiveImage((current) => (current - 1 + images.length) % images.length);
  const showNext = () => setActiveImage((current) => (current + 1) % images.length);

  return (
    <div className={`always-dark group/media relative overflow-hidden rounded-[22px] bg-[#080b09] ${compact ? "aspect-[16/10]" : "aspect-[16/10]"}`}>
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={images[activeImage]}
          initial={{ opacity: 0, x: 32, scale: 1.025 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -24, scale: 0.985 }}
          transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={images[activeImage]}
            alt={`${title} project screen ${activeImage + 1}`}
            fill
            priority={priority && activeImage === 0}
            sizes={compact ? "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" : "(max-width: 1024px) 100vw, 50vw"}
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:border-[#c9ff63] hover:text-[#c9ff63] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9ff63]"
            aria-label={`Previous ${title} image`}
          >
            <ChevronLeft size={19} />
          </button>
          <button
            type="button"
            onClick={showNext}
            className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-black/55 text-white backdrop-blur-md transition hover:border-[#c9ff63] hover:text-[#c9ff63] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9ff63]"
            aria-label={`Next ${title} image`}
          >
            <ChevronRight size={19} />
          </button>
        </>
      )}

      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
        <span className="rounded-full bg-black/60 px-3 py-1 text-[9px] uppercase tracking-[.14em] text-white/80 backdrop-blur-md">Project gallery</span>
        <div className="flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-2 backdrop-blur-md" aria-label={`Image ${activeImage + 1} of ${images.length}`}>
          {images.map((image, index) => (
            <button
              type="button"
              key={image}
              onClick={() => setActiveImage(index)}
              className={`h-1.5 rounded-full transition-all ${index === activeImage ? "w-5 bg-[#c9ff63]" : "w-1.5 bg-white/45 hover:bg-white"}`}
              aria-label={`Show image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);
  const allProjectsVisible = visibleProjects >= orderedMoreProjects.length;

  const handleProjectToggle = () => {
    if (allProjectsVisible) {
      setVisibleProjects(PROJECTS_PER_PAGE);
      window.requestAnimationFrame(() => {
        document.getElementById("project-archive")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    setVisibleProjects((current) => Math.min(current + PROJECTS_PER_PAGE, orderedMoreProjects.length));
  };

  return (
    <ScrollSection id="work" className="theme-surface section-pad" direction="up">
      <div className="site-shell">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title">Complex systems, <span className="text-[#7f837d]">made clear.</span></h2>
          </div>
          <p className="section-copy max-w-lg">Explore real product screens, move through each gallery, then open the complete case study for the build details.</p>
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06} className="h-full">
              <motion.article className="soft-card flex h-full flex-col overflow-hidden rounded-[30px] p-3 md:p-4" whileHover={{ y: -8, scale: 1.006 }} transition={{ type: "spring", stiffness: 240, damping: 24 }}>
                <ProjectMediaCarousel images={project.gallery} accent={project.accent} title={project.title} priority={index < 2} />
                <div className="flex flex-1 flex-col p-4 pb-5 pt-7 md:p-6 md:pb-7">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-[10px] uppercase tracking-[.15em] text-[#8c9089]">{project.index} · {project.category}</p>
                        {(("ownerBadge" in project && project.ownerBadge) || ("projectBadge" in project && project.projectBadge)) && (
                          <span className="rounded-full bg-[#c9ff63] px-2.5 py-1 text-[9px] font-bold uppercase tracking-[.12em] text-[#10130f] shadow-[0_0_20px_rgba(201,255,99,.18)]">
                            {"ownerBadge" in project ? project.ownerBadge : "projectBadge" in project ? project.projectBadge : null}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-3 font-display text-4xl font-medium tracking-[-.045em]">{project.title}</h3>
                    </div>
                    {project.live ? (
                      <motion.a href={project.live} target="_blank" rel="noreferrer" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/15 transition hover:border-[#c9ff63] hover:text-[#c9ff63]" aria-label={`Visit ${project.title}`} whileHover={{ rotate: 8, scale: 1.1 }} whileTap={{ scale: 0.92 }}><ArrowUpRight size={19} /></motion.a>
                    ) : (
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/10 text-[#6f736d]" title="Private client project"><LockKeyhole size={17} /></span>
                    )}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-[#aeb2ab]">{project.description}</p>
                  <div className="mt-auto pt-7">
                    <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
                      {project.stack.map((technology) => <span key={technology} className="rounded-full bg-white/[.055] px-3 py-1.5 text-[10px] text-[#b9bdb6]">{technology}</span>)}
                      <span className="ml-auto text-[10px] uppercase tracking-[.1em] text-[#777b75]">{project.metric}</span>
                    </div>
                  </div>
                  <Link href={`/projects/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#c9ff63] transition hover:gap-3">
                    View case study <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <div id="project-archive" className="scroll-mt-24 pt-28">
          <Reveal className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="eyebrow">Project archive</span>
              <h3 className="mt-4 font-display text-4xl font-medium tracking-[-.045em] md:text-5xl">More work, <span className="text-[#7f837d]">across every stack.</span></h3>
            </div>
            <p className="text-sm text-[#8f938d]">{orderedMoreProjects.length} additional projects · {orderedMoreProjects.filter((project) => project.status === "Ongoing").length} currently ongoing</p>
          </Reveal>

          <motion.div layout className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence initial={false} mode="popLayout">
              {orderedMoreProjects.slice(0, visibleProjects).map((project, index) => (
                <motion.article
                  layout
                  key={project.title}
                  initial={{ opacity: 0, y: 34, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 18, scale: 0.97 }}
                  transition={{ duration: 0.48, delay: (index % PROJECTS_PER_PAGE) * 0.045, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="theme-card group flex min-h-[440px] flex-col overflow-hidden rounded-[26px] border p-3 transition-colors hover:border-[#c9ff63]/35"
                >
                  <ProjectMediaCarousel images={project.gallery} title={project.title} compact />

                  <div className="flex flex-1 flex-col p-3 pt-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[.16em] text-[#a9ada6]">{project.category}</span>
                      <span className={`h-2 w-2 rounded-full ${project.status === "Ongoing" ? "bg-[#c9ff63] shadow-[0_0_14px_rgba(201,255,99,.7)]" : "bg-[#666b64]"}`} aria-label={project.status} />
                    </div>

                    <div className="mt-5 flex-1">
                      <p className="text-[10px] uppercase tracking-[.14em] text-[#777c75]">{project.period} · {project.status}</p>
                      <h4 className="mt-3 font-display text-2xl font-medium tracking-[-.035em] text-[#f3f5f0]">{project.title}</h4>
                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#9fa49d]">{project.description}</p>
                    </div>

                    <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                      <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-xs font-semibold text-[#c9ff63] transition hover:gap-3">
                        View details <ArrowRight size={14} />
                      </Link>
                      <div className="flex shrink-0 gap-2">
                        {project.github && (
                          <motion.a whileTap={{ scale: 0.9 }} href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} source code`} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-[#b9bdb6] transition hover:border-[#c9ff63] hover:text-[#c9ff63]">
                            <Github size={15} />
                          </motion.a>
                        )}
                        {project.live && (
                          <motion.a whileTap={{ scale: 0.9 }} href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`} className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-[#b9bdb6] transition hover:border-[#c9ff63] hover:text-[#c9ff63]">
                            <ArrowUpRight size={15} />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <Reveal className="mt-10 flex flex-col items-center gap-5">
            <motion.button
              type="button"
              onClick={handleProjectToggle}
              aria-expanded={allProjectsVisible}
              aria-controls="project-archive"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex min-w-52 items-center justify-center gap-2 rounded-full bg-[#c9ff63] px-6 py-3.5 text-sm font-semibold text-[#10130f] transition hover:bg-[#dcff9a]"
            >
              {allProjectsVisible ? <>Show less <ChevronUp size={17} /></> : <>Load more projects <ChevronDown size={17} /></>}
            </motion.button>
            <p className="text-xs text-[#70756e]">Showing {Math.min(visibleProjects, orderedMoreProjects.length)} of {orderedMoreProjects.length} archive projects</p>
          </Reveal>

          <Reveal className="mt-12 flex justify-center">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-[#aeb2ab] transition hover:text-[#c9ff63]">
              Browse the complete work archive <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </div>
    </ScrollSection>
  );
}
