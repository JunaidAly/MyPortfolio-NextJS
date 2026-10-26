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

const projectGalleries = {
  primusBooking: [
    "/projects/primus-booking/01.jpg",
    "/projects/primus-booking/02.jpg",
    "/projects/primus-booking/03.jpg",
  ],
  skillBridge: [
    "/projects/skillbridge/01.jpg",
    "/projects/skillbridge/03.jpg",
    "/projects/skillbridge/04.jpg",
    "/projects/skillbridge/05.jpg",
    "/projects/skillbridge/06.jpg",
    "/projects/skillbridge/07.jpg",
  ],
  adPulse: [
    "/projects/adpulse/01.jpg",
    "/projects/adpulse/02.jpg",
    "/projects/adpulse/04.jpg",
    "/projects/adpulse/05.jpg",
  ],
  fimitAdmin: [
    "/projects/fimit-admin/02.jpg",
    "/projects/fimit-admin/03.jpg",
    "/projects/fimit-admin/04.jpg",
  ],
  terabitWebsite: [
    "/projects/terabit-website/02.jpg",
    "/projects/terabit-website/03.jpg",
    "/projects/terabit-website/04.jpg",
  ],
  turkishMarketplace: [
    "/projects/turkish-marketplace/02.jpg",
    "/projects/turkish-marketplace/03.jpg",
  ],
  myStore: [
    "/projects/mystore/02.jpg",
    "/projects/mystore/03.jpg",
  ],
  mySunlight: [
    "/projects/mysunlight/02.jpg",
    "/projects/mysunlight/03.jpg",
    "/projects/mysunlight/04.jpg",
  ],
  organizationTaskTracker: [
    "/projects/organization-task-tracker/01.jpg",
    "/projects/organization-task-tracker/02.jpg",
    "/projects/organization-task-tracker/03.jpg",
  ],
  teaStation: [
    "/projects/tea-station/02.jpg",
    "/projects/tea-station/03.jpg",
    "/projects/tea-station/04.jpg",
  ],
} as const;

export const projects = [
  {
    slug: "primus-booking",
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
    gallery: projectGalleries.primusBooking,
    highlights: ["Three connected product portals", "Secure authentication and role-aware access", "Booking, scheduling, and rewards workflows"],
  },
  {
    slug: "skillbridge",
    index: "02",
    title: "SkillBridge",
    ownerBadge: "MY OWN PRODUCT",
    category: "AI-powered skill exchange",
    period: "2025 — Present",
    description:
      "A MERN marketplace that matches students with teachers through a FastAPI recommendation service, with real-time chat, meetings, credits, OAuth, and 2FA.",
    stack: ["React", "Node.js", "MongoDB", "FastAPI"],
    live: "https://www.skill-bridge.me/",
    accent: "cyan",
    metric: "AI + real-time product",
    gallery: projectGalleries.skillBridge,
    highlights: ["AI-powered teacher recommendations", "Real-time chat and session scheduling", "Credits, OAuth, and two-factor authentication"],
  },
  {
    slug: "organization-task-tracker",
    index: "03",
    title: "Organization Task Tracker",
    projectBadge: "FINAL YEAR PROJECT",
    category: "Team operations",
    period: "Jul 2023 - Jul 2024",
    description:
      "A team task system supporting creation, assignment, tracking, notifications, role-based access, and collaboration.",
    stack: ["Angular", "Laravel", "MySQL", "PHP"],
    live: "https://www.youtube.com/watch?v=uwpQyfTYeJ0",
    accent: "orange",
    metric: "University final year project",
    gallery: projectGalleries.organizationTaskTracker,
    highlights: ["Role-based user and team management", "Task creation, assignment, and progress tracking", "Notifications, shared documents, and reporting workflows"],
  },
  {
    slug: "fimit-ar-admin-panel",
    index: "04",
    title: "FIMIT AR Admin",
    category: "3D scanning admin platform",
    period: "2024",
    description:
      "An administration workspace for a spatial-capture and 3D scanning platform, focused on dynamic interfaces, user management, scan metrics, and activity workflows.",
    stack: ["React.js", "Firebase", "Admin UI", "User management"],
    live: "https://fim-it.com/",
    accent: "violet",
    metric: "Spatial data operations",
    gallery: projectGalleries.fimitAdmin,
    highlights: ["User and project administration", "Scan metrics and activity visibility", "Firebase-backed authentication and data flows"],
  },
] as const;

export const moreProjects = [
  {
    slug: "beam-balance",
    title: "Beam Balance",
    category: "Secure document management",
    period: "2025 - Present",
    status: "Ongoing",
    description:
      "A secure document platform with separate admin and client workspaces for controlled upload, retrieval, organization, and lifecycle tracking.",
    stack: ["Next.js", "AWS S3", "RBAC", "Secure storage"],
    live: null,
    github: null,
    gallery: [],
  },
  {
    slug: "turkish-ecommerce-platform",
    title: "Turkish E-commerce Platform",
    category: "E-commerce",
    period: "2024 - Present",
    status: "Ongoing",
    description:
      "A Turkish marketplace inspired by Sahibinden, with a custom responsive interface and marketplace workflows.",
    stack: ["React.js", "Responsive UI", "Marketplace"],
    live: "https://chimerical-moxie-c1e96e.netlify.app/",
    github: null,
    gallery: projectGalleries.turkishMarketplace,
  },
  {
    slug: "terabit-it-website",
    title: "TeraBit IT Company Website",
    category: "Corporate website",
    period: "2024",
    status: "Completed",
    description:
      "The official TeraBit IT website, built with reusable React components and a fast, responsive company-facing experience.",
    stack: ["React.js", "Performance", "Responsive UI"],
    live: "https://terabit-site.vercel.app/",
    github: null,
    gallery: projectGalleries.terabitWebsite,
  },
  {
    slug: "vidlo-video-platform",
    title: "Vidlo",
    category: "Video platform",
    period: "2025",
    status: "Completed",
    description:
      "A custom WordPress video platform with tailored layouts, plugin integrations, SEO metadata, and mobile performance work.",
    stack: ["WordPress", "Custom theme", "SEO", "Performance"],
    live: "https://vidlo.video/",
    github: null,
    gallery: [],
  },
  {
    slug: "pro-content-radar",
    title: "Pro Content Radar",
    category: "Content marketing",
    period: "2025",
    status: "Completed",
    description:
      "A WordPress content-marketing platform with custom Elementor layouts, lead capture, analytics, and SEO integrations.",
    stack: ["WordPress", "Elementor", "Analytics", "SEO"],
    live: "https://procontentradar.com/",
    github: null,
    gallery: [],
  },
  {
    slug: "gifted-curators-dc",
    title: "Gifted Curators DC",
    category: "Art and commerce",
    period: "2025",
    status: "Completed",
    description:
      "An accessible art-curation website with gallery layouts, event sections, WooCommerce, and cross-browser optimization.",
    stack: ["WordPress", "WooCommerce", "Accessibility", "Gallery UI"],
    live: "https://giftedcuratorsdc.com/",
    github: null,
    gallery: [],
  },
  {
    slug: "my-sunlight-landing-page",
    title: "My Sunlight Landing Page",
    category: "Marketing website",
    period: "2025",
    status: "Completed",
    description:
      "A conversion-focused React landing page with Firebase form handling, email capture, and a performance-minded responsive UX.",
    stack: ["React.js", "Firebase", "Tailwind CSS"],
    live: "https://mysunlight.co/",
    github: null,
    gallery: projectGalleries.mySunlight,
  },
  {
    slug: "my-sunlight-admin-panel",
    title: "My Sunlight Admin Panel",
    category: "Admin system",
    period: "2025",
    status: "Completed",
    description:
      "A secure admin workspace for managing leads, content, and website settings using Firebase authentication and Firestore.",
    stack: ["React.js", "Firebase Auth", "Firestore", "Tailwind CSS"],
    live: null,
    github: null,
    gallery: [],
  },
  {
    slug: "global-connect-admin-panel",
    title: "Global Connect Admin Panel",
    category: "Admin system",
    period: "2024",
    status: "Completed",
    description:
      "An operations dashboard with user and role management, analytics, notifications, and integrations for distributed teams.",
    stack: ["React.js", "Redux", "Context API", "Tailwind CSS"],
    live: null,
    github: null,
    gallery: [],
  },
  {
    slug: "xplra-admin-panel",
    title: "Xplra App Admin Panel",
    category: "Admin system",
    period: "2025 - Present",
    status: "Ongoing",
    description:
      "A server-rendered administration product for content management and operational workflows, built with the Next.js App Router.",
    stack: ["Next.js", "App Router", "Redux", "Tailwind CSS"],
    live: null,
    github: null,
    gallery: [],
  },
  {
    slug: "wix-greeting-cards-store",
    title: "Wix Greeting Cards Store",
    category: "E-commerce",
    period: "2025",
    status: "Completed",
    description:
      "An online greeting-card store with product collections, variants, a streamlined checkout flow, SEO, and responsive storefront pages.",
    stack: ["Wix", "Wix Stores", "SEO", "Responsive UI"],
    live: null,
    github: null,
    gallery: [],
  },
  {
    slug: "task-manager-mern",
    title: "Task Manager App",
    category: "MERN application",
    period: "2024",
    status: "Completed",
    description:
      "A full-featured task manager with authentication, role-based access, real-time updates, and a Kanban-style board.",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO"],
    live: null,
    github: null,
    gallery: [],
  },
  {
    slug: "monetize-360-global",
    title: "Monetize 360 Global",
    category: "Marketing website",
    period: "2025",
    status: "Completed",
    description:
      "An ad-revenue marketing website with motion-led React UI, EmailJS lead capture, SEO optimization, and Hostinger deployment.",
    stack: ["React.js", "Framer Motion", "EmailJS", "SEO"],
    live: "https://monetize360.global/",
    github: null,
    gallery: [],
  },
  {
    slug: "ecommerce-store",
    title: "E-Commerce Store",
    category: "E-commerce",
    period: "Dec 2024 - Jan 2025",
    status: "Completed",
    description:
      "A React storefront with shopping cart, admin dashboard, authentication, product reviews, validation, and order tracking.",
    stack: ["React.js", "Redux", "Tailwind CSS", "Formik", "Yup"],
    live: "https://capable-torrone-467511.netlify.app/",
    github: "https://github.com/JunaidAly/E-Commerce-Website-React-JS.git",
    gallery: projectGalleries.myStore,
  },
  {
    slug: "tea-station",
    title: "Tea Station",
    category: "Product website",
    period: "Aug 2024 - Oct 2024",
    status: "Completed",
    description:
      "A clean, mobile-first product catalogue website built around responsive layouts and a straightforward browsing experience.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI"],
    live: "https://snazzy-syrniki-96c61e.netlify.app/",
    github: "https://github.com/junaidali/tea-station",
    gallery: projectGalleries.teaStation,
  },
  {
    slug: "adpulse",
    title: "AdPulse",
    featured: true,
    category: "Revenue analytics dashboard",
    period: "2025 - Present",
    status: "Ongoing",
    description:
      "A multi-tenant Google Ad Manager dashboard for scheduled revenue ingestion, publisher reporting, revenue-share rules, approvals, and payout tracking.",
    stack: ["React", "Firebase", "GAM API", "Cloud Functions"],
    live: "https://adpulse.monetize360.eu/",
    github: null,
    gallery: projectGalleries.adPulse,
  },
  {
    slug: "task-management-mean",
    title: "Task Management App",
    category: "MEAN application",
    period: "2023",
    status: "Completed",
    description:
      "A MEAN-stack task tracking application with user management and analytics for organizing day-to-day work.",
    stack: ["MongoDB", "Express.js", "Angular", "Node.js"],
    live: null,
    github: "https://github.com/JunaidAly/crud-task-api.git",
    gallery: [],
  },
  {
    slug: "attendance-management-system",
    title: "Attendance Management System",
    category: "Full-stack system",
    period: "2023",
    status: "Completed",
    description:
      "A role-aware attendance tracking system backed by MongoDB, Express, and Node.js with a focused web interface.",
    stack: ["HTML", "CSS", "MongoDB", "Express.js", "Node.js"],
    live: null,
    github: "https://github.com/JunaidAly/Attendance-Management-System.git",
    gallery: [],
  },
  {
    slug: "cargo-booking-system",
    title: "Cargo Booking System",
    category: "Logistics system",
    period: "2023",
    status: "Completed",
    description:
      "A Laravel application for managing cargo bookings, scheduling shipments, and coordinating logistics workflows.",
    stack: ["Laravel", "PHP", "MySQL"],
    live: null,
    github: "https://github.com/JunaidAly/Cargo_Booking_System_in_Laravel.git",
    gallery: [],
  },
  {
    slug: "veterinary-management-system",
    title: "Veterinary Management System",
    category: "Desktop application",
    period: "2023",
    status: "Completed",
    description:
      "A Java desktop project applying object-oriented design, graphical interfaces, and local file handling to veterinary workflows.",
    stack: ["Java", "OOP", "GUI", "File handling"],
    live: null,
    github: "https://github.com/JunaidAly/Veterinary_Management_System_in_Java_OOP.git",
    gallery: [],
  },
  {
    slug: "contract-management-system",
    title: "Contract Management System",
    category: "Desktop application",
    period: "2023",
    status: "Completed",
    description:
      "A C# WinForms application for organizing contracts and performing CRUD operations against a MySQL database.",
    stack: ["C#", "WinForms", "Visual Studio", "MySQL"],
    live: null,
    github: "https://github.com/JunaidAly/Contract_management_system_in_c-_desktop_app.git",
    gallery: [],
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    category: "Cross-platform mobile",
    period: "2023",
    status: "Completed",
    description:
      "A collection of responsive cross-platform mobile applications created for both Android and iOS with React Native.",
    stack: ["React Native", "JavaScript", "Android", "iOS"],
    live: null,
    github: "https://github.com/JunaidAly/Mobile-Application-Development.git",
    gallery: [],
  },
] as const;

export type ProjectRecord = (typeof projects)[number] | (typeof moreProjects)[number];

export const allProjects: readonly ProjectRecord[] = [...projects, ...moreProjects];

export function getProjectBySlug(slug: string) {
  return allProjects.find((project) => project.slug === slug);
}

export const freelanceProfiles = [
  { name: "Upwork", href: "https://www.upwork.com/freelancers/~018161b863407dcb92?mp_source=share" },
  { name: "Fiverr", href: "https://www.fiverr.com/s/VYK4Ag5" },
  { name: "Freelancer", href: "https://www.freelancer.com/u/juanidalikhan03?frm=juanidalikhan03&sb=t" },
  { name: "Guru", href: "https://www.guru.com/freelancers/junaid-ali-39" },
] as const;
