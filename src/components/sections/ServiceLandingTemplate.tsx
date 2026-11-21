import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Code2, Layers3, Rocket } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { allProjects, profile } from "@/constants/portfolio";
import { servicePageList, type ServicePageData } from "@/constants/services";
import { SITE_URL } from "@/lib/seo";

const capabilityIcons = [Layers3, Code2, Rocket] as const;

export default function ServiceLandingTemplate({ service }: { service: ServicePageData }) {
  const canonicalUrl = `${SITE_URL}${service.path}`;
  const relatedProjects = service.relatedProjectSlugs
    .map((slug) => allProjects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  const otherServices = servicePageList.filter((item) => item.slug !== service.slug);

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: service.metaTitle.replace(" | Junaid Ali", ""),
      description: service.metaDescription,
      url: canonicalUrl,
      areaServed: "Worldwide",
      provider: { "@id": `${SITE_URL}/#person` },
      serviceType: [...service.serviceTypes],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/hire-full-stack-developer` },
        {
          "@type": "ListItem",
          position: 3,
          name: service.metaTitle.replace(" | Junaid Ali", ""),
          item: canonicalUrl,
        },
      ],
    },
  ];

  return (
    <div className="theme-page min-h-screen pt-[74px]">
      <JsonLd data={schema} />

      <section className="relative overflow-hidden border-b section-pad">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="hero-orb" aria-hidden="true" />
        <div className="site-shell relative z-10">
          <p className="eyebrow">{service.eyebrow}</p>
          <h1 className="max-w-5xl font-display text-[clamp(3rem,7.4vw,6.8rem)] font-medium leading-[.9] tracking-[-.07em]">
            {service.h1Lead} <span className="text-[#8b8f89]">{service.h1Muted}</span>
          </h1>
          <p className="section-copy mt-8 max-w-3xl">{service.intro}</p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[#959a93]">{service.extendedIntro}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/contact" className="button-primary">
              Discuss your project <ArrowUpRight size={17} />
            </Link>
            <Link href="/projects" className="button-secondary">
              Explore case studies <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      <section className="theme-surface section-pad">
        <div className="site-shell">
          <p className="eyebrow">Core capabilities</p>
          <div className="grid gap-9 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <h2 className="section-title">
              What I build and <span className="text-[#8b8f89]">deliver in production.</span>
            </h2>
            <p className="section-copy">
              Practical engineering focused on clean architecture, secure data flows, and interfaces that stay maintainable as your product grows.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {service.capabilities.map((capability, index) => {
              const Icon = capabilityIcons[index % capabilityIcons.length];
              return (
                <article key={capability.title} className="soft-card rounded-[26px] p-7 md:p-8">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#c9ff63] text-[#0b0d0c]">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-9 font-display text-2xl font-medium tracking-[-.035em]">{capability.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#aeb2ab]">{capability.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="theme-page section-pad border-t border-white/10">
        <div className="site-shell">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Real-world proof</p>
              <h2 className="section-title">
                Verified projects using <span className="text-[#8b8f89]">this stack.</span>
              </h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9ff63] transition hover:gap-3">
              View all portfolio projects <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {relatedProjects.map((project) => (
              <article key={project.slug} className="theme-card flex flex-col justify-between rounded-[28px] border p-7 md:p-8">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[10px] uppercase tracking-[.15em] text-[#8c9089]">{project.category}</span>
                    <span className="text-[10px] uppercase tracking-[.13em] text-[#777c75]">{project.period}</span>
                  </div>
                  <h3 className="mt-3 font-display text-3xl font-medium tracking-[-.04em]">{project.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#aeb2ab]">{project.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1 text-[11px] text-[#c3c7c0]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
                  <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9ff63] transition hover:gap-3">
                    Read {project.title} case study <ArrowRight size={15} />
                  </Link>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="theme-hover-link inline-flex items-center gap-1.5 text-xs text-[#9ca099]">
                      Live product <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3efe5] py-20 text-[#0b0d0c] md:py-28">
        <div className="site-shell">
          <p className="eyebrow !text-[#5f635d]">Development approach</p>
          <h2 className="max-w-3xl font-display text-4xl font-medium tracking-[-.05em] md:text-6xl">
            How we take your product from architecture to launch.
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {service.approach.map((phase) => (
              <article key={phase.step} className="rounded-[26px] border border-black/10 bg-[#f8f5ec] p-7 md:p-8">
                <span className="inline-flex rounded-full bg-[#c9ff63] px-3 py-1 font-display text-xs font-semibold text-[#0b0d0c]">
                  Step {phase.step}
                </span>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-[-.035em]">{phase.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#555951]">{phase.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-page section-pad">
        <div className="site-shell grid gap-14 lg:grid-cols-[.75fr_1.25fr]">
          <div>
            <p className="eyebrow">Technologies & tools</p>
            <h2 className="font-display text-4xl font-medium tracking-[-.05em] md:text-5xl">
              Production stack, selected for reliability.
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span key={tech} className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-[#b9bcb6]">
                  <Check size={12} className="text-[#c9ff63]" /> {tech}
                </span>
              ))}
            </div>

            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-[.14em] text-[#7d827b]">Related specializations</p>
              <div className="mt-4 flex flex-col gap-2.5">
                {otherServices.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.path}
                    className="theme-hover-link inline-flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm text-[#c3c7c0] transition hover:border-[#c9ff63]/40"
                  >
                    <span>{item.metaTitle.replace(" | Junaid Ali", "")}</span>
                    <ArrowRight size={15} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="eyebrow">Frequently asked questions</p>
            <h2 className="font-display text-3xl font-medium tracking-[-.04em] md:text-4xl">
              Common questions before starting.
            </h2>
            <div className="mt-8 divide-y border-y border-white/10">
              {service.faqs.map((faq) => (
                <article key={faq.question} className="py-7">
                  <h3 className="font-display text-xl font-medium">{faq.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#aeb2ab]">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="theme-surface border-t py-20">
        <div className="site-shell flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Ready to build?</p>
            <h2 className="max-w-3xl font-display text-4xl font-medium tracking-[-.05em] md:text-6xl">
              Let&apos;s discuss your product requirements.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="button-primary shrink-0">
              Start a conversation <ArrowUpRight size={17} />
            </Link>
            <a href={`mailto:${profile.email}`} className="button-secondary shrink-0">
              Email {profile.email} <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
