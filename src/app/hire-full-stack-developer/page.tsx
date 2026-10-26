import Link from "next/link";
import { ArrowUpRight, Check, Code2, Layers3, Rocket } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { profile, skills } from "@/constants/portfolio";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

const description =
  "Hire Junaid Ali, a remote full-stack and frontend developer for React, Next.js, Node.js, SaaS, dashboard, API, and web application projects.";

export const metadata = createPageMetadata({
  title: "Hire a Full Stack & Frontend Developer",
  description,
  path: "/hire-full-stack-developer",
});

const services = [
  {
    icon: Layers3,
    title: "Full-stack web applications",
    description: "Production-ready products covering responsive UI, authentication, APIs, databases, permissions, integrations, and deployment.",
  },
  {
    icon: Code2,
    title: "Frontend development",
    description: "Fast, accessible React and Next.js interfaces built from your designs or refined collaboratively from an early product idea.",
  },
  {
    icon: Rocket,
    title: "SaaS products and dashboards",
    description: "Admin panels, booking systems, analytics dashboards, multi-role workflows, and scalable product foundations for growing teams.",
  },
] as const;

const faqs = [
  {
    question: "What can I hire you to build?",
    answer: "I work on SaaS products, dashboards, admin panels, booking platforms, marketplaces, business websites, APIs, and focused frontend builds. I can contribute to an existing codebase or own a new product from planning through launch.",
  },
  {
    question: "Do you work with international and remote clients?",
    answer: "Yes. I am based in Islamabad, Pakistan and work remotely with clients and product teams across time zones, with clear written updates, demos, and milestone-based delivery.",
  },
  {
    question: "Which technologies do you use?",
    answer: "My core stack includes React, Next.js, TypeScript, Node.js, Supabase, PostgreSQL, Firebase, FastAPI, and AWS. The final stack is selected around the product requirements rather than forcing one setup onto every project.",
  },
  {
    question: "How do we start a project?",
    answer: "Send a short brief describing the product, current stage, desired outcome, and timeline. I will review it and reply with the most useful next step, typically within one to two business days.",
  },
] as const;

export default function HireFullStackDeveloperPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Full Stack and Frontend Web Development",
      description,
      url: `${SITE_URL}/hire-full-stack-developer`,
      areaServed: "Worldwide",
      provider: { "@id": `${SITE_URL}/#person` },
      serviceType: ["Full-stack development", "Frontend development", "SaaS development", "Web application development"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Hire a Full Stack Developer", item: `${SITE_URL}/hire-full-stack-developer` },
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
          <p className="eyebrow">Available for select client projects</p>
          <h1 className="max-w-6xl font-display text-[clamp(3.3rem,8vw,7.2rem)] font-medium leading-[.9] tracking-[-.07em]">
            Hire a full-stack developer who can take your product <span className="text-[#8b8f89]">from idea to launch.</span>
          </h1>
          <p className="section-copy mt-8">
            I&apos;m Junaid Ali, a full-stack and frontend developer based in Islamabad and working remotely worldwide. I build clear, scalable web products with React, Next.js, TypeScript, Node.js, and dependable backend services.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={`mailto:${profile.email}?subject=Full-stack development project`} className="button-primary">
              Discuss your project <ArrowUpRight size={17} />
            </a>
            <Link href="/projects" className="button-secondary">
              Review case studies <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-[24px] border bg-white/10 sm:grid-cols-3">
            {[
              ["5+ years", "Product development"],
              ["Remote", "Worldwide collaboration"],
              ["1–2 days", "Typical response time"],
            ].map(([value, label]) => (
              <div key={label} className="theme-card p-6">
                <p className="font-display text-2xl font-medium">{value}</p>
                <p className="mt-1 text-xs text-[#858983]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-surface section-pad">
        <div className="site-shell">
          <p className="eyebrow">Development services</p>
          <div className="grid gap-9 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <h2 className="section-title">One developer across the <span className="text-[#8b8f89]">whole product surface.</span></h2>
            <p className="section-copy">A single technical partner for interface quality, application logic, data flows, and production delivery—without losing sight of the business goal.</p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, description: serviceDescription }) => (
              <article key={title} className="soft-card rounded-[26px] p-7 md:p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#c9ff63] text-[#0b0d0c]"><Icon size={21} /></span>
                <h3 className="mt-9 font-display text-2xl font-medium tracking-[-.035em]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#aeb2ab]">{serviceDescription}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3efe5] py-20 text-[#0b0d0c] md:py-28">
        <div className="site-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="eyebrow !text-[#5f635d]">A practical engagement</p>
            <h2 className="font-display text-4xl font-medium tracking-[-.05em] md:text-6xl">Built for founders, agencies, and product teams.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Clear milestones and visible progress",
              "Responsive, accessible frontend implementation",
              "Maintainable components and application architecture",
              "API, authentication, database, and third-party integrations",
              "Performance, SEO, testing, and deployment support",
              "Direct communication with the developer doing the work",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white/40 p-4 text-sm leading-6">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#c9ff63]"><Check size={12} strokeWidth={3} /></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="theme-page section-pad">
        <div className="site-shell grid gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Core technology</p>
            <h2 className="font-display text-4xl font-medium tracking-[-.05em] md:text-5xl">Modern tools, selected for the product.</h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill) => <span key={skill} className="rounded-full border px-4 py-2 text-xs text-[#b9bcb6]">{skill}</span>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">Common questions</p>
            <div className="divide-y border-y">
              {faqs.map((faq) => (
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
            <p className="eyebrow">Ready to talk?</p>
            <h2 className="max-w-3xl font-display text-4xl font-medium tracking-[-.05em] md:text-6xl">Tell me what you&apos;re building.</h2>
          </div>
          <Link href="/contact" className="button-primary shrink-0">Start a conversation <ArrowUpRight size={17} /></Link>
        </div>
      </section>
    </div>
  );
}
