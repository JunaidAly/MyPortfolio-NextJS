export const profile = {
  name: "Junaid Ali",
  role: "Full Stack Developer",
  email: "junaidaly131@gmail.com",
  phone: "+92 349 5328703",
  location: "Islamabad, Pakistan",
  availability: "Open to remote product teams and select freelance work",
  github: "https://github.com/JunaidAly",
  linkedin: "https://www.linkedin.com/in/junaid-ali-8679871ab/",
  resume: "/My Resume.pdf",
} as const;

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Firebase",
  "FastAPI",
  "AWS",
] as const;

export const capabilities = [
  {
    number: "01",
    title: "Product interfaces",
    description:
      "Responsive, accessible interfaces with thoughtful interaction states and reusable component systems.",
    tools: "React · Next.js · TypeScript · Tailwind",
  },
  {
    number: "02",
    title: "Full-stack systems",
    description:
      "Authentication, role-based access, real-time features, APIs, dashboards, and dependable data flows.",
    tools: "Node.js · Supabase · Firebase · PostgreSQL",
  },
  {
    number: "03",
    title: "From build to launch",
    description:
      "Performance-minded delivery, cloud deployment, analytics, SEO, and clean handoff to product teams.",
    tools: "AWS · Vercel · Docker · CI/CD",
  },
] as const;

export const experiences = [
  {
    period: "2025 — Present",
    role: "Full Stack Developer",
    company: "CalibreOn International · NorthSpex",
    location: "Remote",
    description:
      "Building multi-client SaaS products with React, Next.js, and Node.js, while shaping REST APIs, system architecture, cloud delivery, and UI/UX across the software division.",
    skills: ["Next.js", "Node.js", "SaaS", "Cloud"],
  },
  {
    period: "2024 — Present",
    role: "Full Stack Developer",
    company: "TeraBit IT Company",
    location: "Islamabad",
    description:
      "Delivered a three-portal booking ecosystem, an AR content admin, a Turkish classifieds platform, and a modular company website for production use.",
    skills: ["React", "TypeScript", "Supabase", "Admin systems"],
  },
  {
    period: "2024",
    role: "Frontend Developer",
    company: "Social Swirl",
    location: "Remote",
    description:
      "Built reusable React interfaces and partnered with design and backend teams to ship responsive, consistent product experiences.",
    skills: ["React", "API integration", "Design systems"],
  },
] as const;

export const projects = [
  {
    index: "01",
    title: "Primus Booking",
    category: "Multi-platform SaaS ecosystem",
    period: "2025 — Present",
    description:
      "Customer, business, and admin portals connected through one booking platform, with secure authentication, scheduling, rewards, and role-aware workflows.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    live: "https://primusbooking.com/",
    accent: "lime",
    metric: "3 connected portals",
  },
  {
    index: "02",
    title: "SkillBridge",
    category: "AI-powered skill exchange",
    period: "2025 — Present",
    description:
      "A MERN marketplace that matches students with teachers through a FastAPI recommendation service, with real-time chat, meetings, credits, OAuth, and 2FA.",
    stack: ["React", "Node.js", "MongoDB", "FastAPI"],
    live: "https://www.skill-bridge.me/",
    accent: "cyan",
    metric: "AI + real-time product",
  },
  {
    index: "03",
    title: "AdPulse",
    category: "Revenue analytics dashboard",
    period: "2025 — Present",
    description:
      "A multi-tenant Google Ad Manager dashboard for scheduled revenue ingestion, publisher reporting, revenue-share rules, approvals, and payout tracking.",
    stack: ["React", "Firebase", "GAM API", "Cloud Functions"],
    live: "https://adpulse.monetize360.eu/",
    accent: "orange",
    metric: "Multi-tenant analytics",
  },
  {
    index: "04",
    title: "Beam Balance",
    category: "Secure document management",
    period: "2025 — Present",
    description:
      "A secure document platform with separate admin and client workspaces for controlled upload, retrieval, organization, and lifecycle tracking.",
    stack: ["Next.js", "AWS S3", "RBAC", "Secure storage"],
    live: null,
    accent: "violet",
    metric: "Admin + client workspaces",
  },
] as const;

export const freelanceProfiles = [
  { name: "Upwork", href: "https://www.upwork.com/freelancers/~018161b863407dcb92?mp_source=share" },
  { name: "Fiverr", href: "https://www.fiverr.com/s/VYK4Ag5" },
  { name: "Freelancer", href: "https://www.freelancer.com/u/juanidalikhan03?frm=juanidalikhan03&sb=t" },
  { name: "Guru", href: "https://www.guru.com/freelancers/junaid-ali-39" },
] as const;
