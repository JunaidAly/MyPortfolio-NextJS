import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Github } from "lucide-react";
import CaseStudyGallery from "@/components/projects/CaseStudyGallery";
import JsonLd from "@/components/seo/JsonLd";
import Reveal from "@/components/ui/Reveal";
import { allProjects, getProjectBySlug } from "@/constants/portfolio";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

type ProjectPageProps = { params: { slug: string } };

export function generateStaticParams() {
  return allProjects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) return { title: "Project not found", robots: { index: false, follow: false } };

  const metadata = createPageMetadata({
    title: `${project.title} — ${project.category} Case Study`,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.gallery[0] || "/myprofile.jpg",
    keywords: [project.title, project.category, ...project.stack, "Junaid Ali case study"],
  });

  return metadata;
}

export default function ProjectCaseStudy({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const projectIndex = allProjects.findIndex((item) => item.slug === project.slug);
  const nextProject = allProjects[(projectIndex + 1) % allProjects.length];
  const status = "status" in project ? project.status : project.period.includes("Present") ? "Ongoing" : "Completed";
  const github = "github" in project ? project.github : null;
  const projectBadge = "ownerBadge" in project
    ? project.ownerBadge
    : "projectBadge" in project
      ? project.projectBadge
      : null;
  const highlights = "highlights" in project
    ? project.highlights
    : [project.description, `Built with ${project.stack.join(", ")}.`];
  const overview = "overview" in project ? project.overview : project.description;
  const contribution =
    "contribution" in project
      ? project.contribution
      : `Designed and implemented key application features, user interfaces, and data workflows using ${project.stack.join(", ")}.`;
  const architecture =
    "architecture" in project
      ? project.architecture
      : `Built with ${project.stack.join(", ")}, structured for maintainable component boundaries and reliable runtime performance.`;
  const challenges = "challenges" in project ? project.challenges : null;

  const projectUrl = `${SITE_URL}/projects/${project.slug}`;
  const isLiveSoftware =
    Boolean(project.live && !project.live.includes("youtube.com")) ||
    project.category.toLowerCase().includes("saas") ||
    project.category.toLowerCase().includes("dashboard") ||
    project.category.toLowerCase().includes("application") ||
    project.category.toLowerCase().includes("system");

  const primaryEntitySchema = isLiveSoftware
    ? {
        "@context": "https://schema.org",
        "@type": ["SoftwareApplication", "CreativeWork"],
        "@id": `${projectUrl}#software`,
        url: projectUrl,
        name: project.title,
        headline: `${project.title} — ${project.category} Case Study`,
        description: overview,
        applicationCategory: "WebApplication",
        operatingSystem: "Web",
        ...(project.gallery.length
          ? { image: project.gallery.map((image) => `${SITE_URL}${image}`) }
          : {}),
        author: { "@id": `${SITE_URL}/#person` },
        creator: { "@id": `${SITE_URL}/#person` },
        keywords: project.stack.join(", "),
        ...(project.live ? { sameAs: project.live } : {}),
      }
    : {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "@id": `${projectUrl}#case-study`,
        url: projectUrl,
        name: `${project.title} case study`,
        description: overview,
        ...(project.gallery.length
          ? { image: project.gallery.map((image) => `${SITE_URL}${image}`) }
          : {}),
        author: { "@id": `${SITE_URL}/#person` },
        creator: { "@id": `${SITE_URL}/#person` },
        keywords: project.stack.join(", "),
        ...(project.live ? { sameAs: project.live } : {}),
      };

  const schema = [
    primaryEntitySchema,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
        { "@type": "ListItem", position: 3, name: project.title, item: projectUrl },
      ],
    },
  ];

  return (
    <div className="theme-surface min-h-screen pb-24 pt-32">
      <JsonLd data={schema} />
      <div className="site-shell">
        <Reveal>
          <Link href="/projects#project-archive" className="inline-flex items-center gap-2 text-sm text-[#92978f] transition hover:text-[#c9ff63]">
            <ArrowLeft size={16} /> Back to all projects
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-10 border-b border-white/10 pb-14 lg:grid-cols-[1fr_320px] lg:items-end">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              {projectBadge && (
                <span className="inline-flex rounded-full bg-[#c9ff63] px-3.5 py-2 text-[10px] font-bold uppercase tracking-[.15em] text-[#10130f] shadow-[0_0_24px_rgba(201,255,99,.18)]">
                  {projectBadge}
                </span>
              )}
              <span className="eyebrow !mb-0">{project.category} · Case study</span>
            </div>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(3.5rem,8vw,7.5rem)] font-medium leading-[.86] tracking-[-.065em]">{project.title}</h1>
            <p className="mt-8 max-w-3xl text-base leading-8 text-[#adb2aa] md:text-lg">{overview}</p>
          </Reveal>

          <Reveal delay={0.08} className="theme-card grid grid-cols-2 gap-5 rounded-[24px] border p-5 text-sm lg:grid-cols-1">
            <div><p className="text-[9px] uppercase tracking-[.16em] text-[#70756e]">Timeline</p><p className="mt-2 text-[#e5e8e2]">{project.period}</p></div>
            <div><p className="text-[9px] uppercase tracking-[.16em] text-[#70756e]">Status</p><p className="mt-2 text-[#e5e8e2]">{status}</p></div>
          </Reveal>
        </div>

        <Reveal className="mt-12" delay={0.06}>
          <CaseStudyGallery images={project.gallery} title={`${project.title} (${project.category})`} />
        </Reveal>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1.15fr_.85fr]">
          <Reveal>
            <span className="eyebrow">Key deliverables</span>
            <h2 className="mt-5 font-display text-4xl font-medium tracking-[-.045em] md:text-5xl">What went into the build.</h2>
            <div className="mt-8 space-y-4">
              {highlights.map((highlight) => (
                <div key={highlight} className="theme-card flex gap-4 rounded-[22px] border p-5">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#c9ff63] text-[#10130f]"><Check size={14} strokeWidth={3} /></span>
                  <p className="text-sm leading-7 text-[#b1b6ae]">{highlight}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="theme-card rounded-[24px] border p-6">
                <p className="text-[10px] uppercase tracking-[.15em] text-[#c9ff63]">My contribution</p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-[-.035em]">Role & ownership</h3>
                <p className="mt-3 text-sm leading-7 text-[#adb2aa]">{contribution}</p>
              </article>

              <article className="theme-card rounded-[24px] border p-6">
                <p className="text-[10px] uppercase tracking-[.15em] text-[#c9ff63]">Technical architecture</p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-[-.035em]">System design</h3>
                <p className="mt-3 text-sm leading-7 text-[#adb2aa]">{architecture}</p>
              </article>
            </div>

            {challenges && (
              <article className="theme-card mt-6 rounded-[24px] border p-6">
                <p className="text-[10px] uppercase tracking-[.15em] text-[#c9ff63]">Engineering challenges & solutions</p>
                <h3 className="mt-3 font-display text-2xl font-medium tracking-[-.035em]">How key problems were solved</h3>
                <p className="mt-3 text-sm leading-7 text-[#adb2aa]">{challenges}</p>
              </article>
            )}
          </Reveal>

          <Reveal delay={0.08} className="theme-card h-fit rounded-[28px] border p-7 md:p-9">
            <span className="eyebrow">Technology stack</span>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((technology) => (
                <span key={technology} className="rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-xs text-[#c5c9c2]">{technology}</span>
              ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-[10px] uppercase tracking-[.15em] text-[#737870]">Explore the product</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#c9ff63] px-5 py-3 text-sm font-semibold text-[#10130f] transition hover:bg-[#dcff9a]">
                    Live project <ArrowUpRight size={16} />
                  </a>
                )}
                {github && (
                  <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm transition hover:border-[#c9ff63] hover:text-[#c9ff63]">
                    Source code <Github size={16} />
                  </a>
                )}
                {!project.live && !github && <p className="text-sm leading-7 text-[#858a83]">Private client work — public repository and live access are unavailable.</p>}
              </div>
            </div>

            <div className="mt-10 border-t border-white/10 pt-7">
              <p className="text-[10px] uppercase tracking-[.15em] text-[#737870]">Related services</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/full-stack-development" className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-[#b9bdb6] transition hover:border-[#c9ff63] hover:text-[#c9ff63]">
                  Full Stack Development
                </Link>
                <Link href="/react-nextjs-development" className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-[#b9bdb6] transition hover:border-[#c9ff63] hover:text-[#c9ff63]">
                  React & Next.js
                </Link>
                <Link href="/mern-stack-development" className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-[#b9bdb6] transition hover:border-[#c9ff63] hover:text-[#c9ff63]">
                  MERN Stack
                </Link>
                <Link href="/saas-development" className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-[#b9bdb6] transition hover:border-[#c9ff63] hover:text-[#c9ff63]">
                  SaaS Development
                </Link>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-24 border-t border-white/10 pt-10">
          <Link href={`/projects/${nextProject.slug}`} className="theme-card group flex items-end justify-between gap-6 rounded-[28px] border p-7 transition hover:border-[#c9ff63]/40 md:p-10">
            <div>
              <span className="eyebrow">Next case study</span>
              <h2 className="mt-4 font-display text-3xl font-medium tracking-[-.04em] md:text-5xl">{nextProject.title}</h2>
            </div>
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#c9ff63] text-[#10130f] transition group-hover:translate-x-1"><ArrowRight size={21} /></span>
          </Link>
        </Reveal>
      </div>
    </div>
  );
}
