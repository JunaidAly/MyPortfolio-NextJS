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
    company: "CalibreOn International (NorthSpex) · Upwork Freelance",
    location: "Remote",
    description:
      "Building scalable web and SaaS applications for multiple clients using React.js, Next.js, and Node.js, designing RESTful APIs and system architecture, managing cloud-based deployments, and contributing to UI/UX design across the software division.",
    skills: ["React.js", "Next.js", "Node.js", "REST APIs", "Cloud"],
  },
  {
    period: "2024 — 2025",
    role: "Full Stack Developer",
    company: "TeraBit IT Company",
    location: "Islamabad",
    description:
      "Built Primus Booking, a 3-portal SaaS ecosystem (Customer, Business, Admin) with Next.js, TypeScript, and Supabase; developed an admin panel for an AR-based web app with real-time content management; contributed to a Turkish classifieds platform modeled on Sahibinden.com; and built the modular, SEO-friendly company website in React.js.",
    skills: ["Next.js", "React.js", "TypeScript", "Supabase"],
  },
  {
    period: "2024",
    role: "Frontend Developer",
    company: "Social Swirl",
    location: "Remote",
    description:
      "Built responsive React.js interfaces for production web applications in a fully remote team, collaborating with design and backend teams to integrate APIs and creating reusable components that standardized layouts and improved UX consistency.",
    skills: ["React.js", "API Integration", "Reusable UI"],
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
    period: "Mar 2025 — Present",
    description:
      "Customer, business, and admin portals connected through one appointment booking platform, with secure authentication, scheduling, rewards, and role-aware workflows.",
    overview:
      "Primus Booking is a multi-portal appointment booking SaaS ecosystem connecting customers, service businesses (`biz.primusbooking.com`), and platform administrators through dedicated web and mobile-ready experiences.",
    contribution:
      "Contributed to the 3-portal web application architecture (Customer, Business, and Admin portals) during my role as a Full Stack Developer at TeraBit IT Company, implementing Next.js App Router views, Supabase authentication flows, middleware RBAC, and booking modules.",
    architecture:
      "Built on Next.js (App Router) and React with TypeScript, backed by Supabase (PostgreSQL and Supabase Auth). Next.js middleware enforces strict role-based access control (RBAC) across customer, business, and admin boundaries.",
    challenges:
      "Coordinating multi-role authentication (email, Google OAuth, verification, and password recovery) and shared booking, scheduling, and loyalty reward-points state across three portals without data leakage—solved with Next.js route middleware and PostgreSQL relational policies.",
    stack: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL"],
    live: "https://primusbooking.com/",
    accent: "lime",
    metric: "3 connected portals",
    gallery: projectGalleries.primusBooking,
    highlights: [
      "Architected separate Customer, Business, and Admin portals on Next.js App Router + TypeScript",
      "Implemented Supabase Auth with email, Google OAuth, email verification, and password recovery",
      "Enforced role-based access control (RBAC) across all portals using Next.js middleware",
      "Built appointment booking, scheduling, and reward-points modules on PostgreSQL (Supabase)",
    ],
  },
  {
    slug: "skillbridge",
    index: "02",
    title: "SkillBridge",
    ownerBadge: "MY OWN PRODUCT",
    category: "AI-powered skill exchange",
    period: "Jun 2025 — Present",
    description:
      "A MERN marketplace that matches students with teachers through a FastAPI recommendation service, with real-time chat, meetings, credits, OAuth, and 2FA.",
    overview:
      "SkillBridge is an AI-powered peer-to-peer skill exchange and learning platform that connects learners with instructors through intelligent skill matching, real-time communication, guided AI learning workflows, and a credit-based session economy.",
    contribution:
      "Conceived, architected, and built the complete full-stack product end to end—including the React frontend, Node.js/Express REST API, Socket.IO real-time messaging server, and the Python FastAPI machine-learning recommendation microservice.",
    architecture:
      "Full-stack MERN architecture (MongoDB, Express.js, React.js, Node.js) paired with an independent Python FastAPI + scikit-learn recommendation microservice deployed on Render using TF-IDF vectorization and cosine similarity.",
    challenges:
      "Delivering low-latency teacher recommendations and real-time learner-instructor coordination—solved by decoupling the scikit-learn TF-IDF/cosine-similarity engine into a FastAPI microservice and implementing Socket.IO presence, typing indicators, and credit-escrow session scheduling.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "FastAPI", "scikit-learn", "Socket.IO"],
    live: "https://www.skill-bridge.me/",
    accent: "cyan",
    metric: "AI + real-time product",
    gallery: projectGalleries.skillBridge,
    highlights: [
      "Built a full-stack MERN marketplace matching students with teachers through AI-driven recommendations",
      "Developed a Python FastAPI + scikit-learn recommendation microservice using TF-IDF vectorization and cosine similarity",
      "Implemented real-time chat with Socket.IO, including typing indicators, online presence, and AI learning assistance workflows",
      "Secured accounts with JWT, Google OAuth 2.0, and optional two-factor authentication (2FA)",
      "Built a credit system, meeting scheduling, Cloudinary media uploads, and Nodemailer notifications",
    ],
  },
  {
    slug: "organization-task-tracker",
    index: "03",
    title: "Organization Task Tracker",
    projectBadge: "FINAL YEAR PROJECT",
    category: "Team operations",
    period: "Sep 2023 — Jan 2024",
    description:
      "A team task system supporting creation, assignment, tracking, notifications, role-based access, and collaboration.",
    overview:
      "Organization Task Tracker is an enterprise-style task and team operations platform developed as my BS Computer Science Final Year Project at COMSATS University Islamabad.",
    contribution:
      "Designed and developed the full-stack application, implementing the Angular frontend workspace, Laravel REST backend, relational MySQL schema, and role-based permission layers.",
    architecture:
      "Decoupled single-page application built with Angular communicating with a Laravel (PHP) REST API and MySQL database, structured around role-based access control (RBAC) for administrators, team leads, and members.",
    challenges:
      "Modeling hierarchical team permissions and keeping task status reporting clear across multiple organizational roles—addressed with structured RBAC middleware and activity reporting views.",
    stack: ["Angular", "Laravel", "MySQL", "PHP"],
    live: "https://www.youtube.com/watch?v=uwpQyfTYeJ0",
    accent: "orange",
    metric: "University final year project",
    gallery: projectGalleries.organizationTaskTracker,
    highlights: [
      "Role-based user and team management (RBAC)",
      "Task creation, assignment, and progress tracking",
      "Notifications, shared documents, and reporting workflows",
    ],
  },
  {
    slug: "fimit-ar-admin-panel",
    index: "04",
    title: "FIMIT AR Admin",
    category: "3D scanning & AR admin platform",
    period: "Jun 2024 — Oct 2024",
    description:
      "An administration workspace for a spatial-capture, Augmented Reality (AR), and 3D scanning platform, focused on dynamic interfaces, user management, scan metrics, and activity workflows.",
    overview:
      "FIM IT is an Augmented Reality (AR) and 3D spatial-capture platform. The admin panel provides centralized operational control over users, AR assets, scan metrics, and real-time platform content.",
    contribution:
      "Developed the admin dashboard at TeraBit IT Company, building dynamic, reusable React UI components for user management, real-time content updates, and AR asset administration.",
    architecture:
      "React.js administration single-page application integrated with Firebase authentication and real-time backend services for instantaneous content and asset synchronization.",
    challenges:
      "Managing complex, nested AR asset metadata and real-time content states without cluttering the operator interface—solved through modular, reusable table and form component abstractions.",
    stack: ["React.js", "Firebase", "Admin UI", "AR Asset Management"],
    live: "https://fim-it.com/",
    accent: "violet",
    metric: "Spatial data operations",
    gallery: projectGalleries.fimitAdmin,
    highlights: [
      "Developed the admin dashboard for an AR-based web application with real-time content management",
      "Built dynamic, reusable UI components for user, content, and AR asset management",
      "Firebase-backed authentication and operational visibility",
    ],
  },
] as const;

export const moreProjects = [
  {
    slug: "beam-balance",
    title: "Beam Balance",
    category: "Secure document management",
    period: "Feb 2025 - Present",
    status: "Ongoing",
    description:
      "A secure document platform with separate admin and client workspaces for controlled upload, retrieval, organization, and lifecycle tracking.",
    overview:
      "Beam Balance is a document management SaaS application built for secure file exchange and tracking between organization administrators and client accounts.",
    contribution:
      "Built the Next.js application and AWS S3 storage integration, creating dedicated admin and client dashboards for document upload, retrieval, and status tracking.",
    architecture:
      "Next.js full-stack web application integrated with AWS S3 object storage and role-separated dashboard views for administrative oversight and client self-service.",
    challenges:
      "Ensuring secure, isolated document access across client accounts while keeping upload and retrieval workflows fast and intuitive.",
    highlights: [
      "Built a secure document management platform with Next.js and AWS S3 file storage",
      "Developed admin and client dashboards for document upload, retrieval, and tracking",
    ],
    stack: ["Next.js", "AWS S3", "RBAC", "Secure storage"],
    live: null,
    github: null,
    gallery: [],
  },
  {
    slug: "turkish-ecommerce-platform",
    title: "Turkish E-commerce Platform",
    category: "Classifieds e-commerce",
    period: "2024 - 2025",
    status: "Completed",
    description:
      "A Turkish classifieds e-commerce marketplace modeled on Sahibinden.com, with a custom responsive interface and multi-category listing workflows.",
    overview:
      "A large-scale Turkish classifieds and e-commerce web application modeled on Sahibinden.com, supporting multi-category listings, search filtering, and responsive browsing.",
    contribution:
      "Contributed to the frontend and product interface at TeraBit IT Company, building responsive React.js marketplace views and listing workflows.",
    architecture:
      "Component-driven React.js application structured for high-density classifieds categories, filtering, and mobile-responsive detail views.",
    challenges:
      "Presenting dense marketplace listing attributes clearly across desktop and mobile viewports.",
    highlights: [
      "Contributed to a Turkish classifieds e-commerce platform modeled on Sahibinden.com",
      "Built responsive React.js category, filter, and listing views",
    ],
    stack: ["React.js", "Responsive UI", "Marketplace"],
    live: "https://chimerical-moxie-c1e96e.netlify.app/",
    github: null,
    gallery: projectGalleries.turkishMarketplace,
  },
  {
    slug: "terabit-it-website",
    title: "TeraBit IT Company Website",
    category: "Corporate website",
    period: "Mar 2024 - May 2024",
    status: "Completed",
    description:
      "The official TeraBit IT corporate website, built in React.js with a modular component architecture, modern UI/UX, and SEO-friendly structure.",
    overview:
      "The official corporate web presence for TeraBit IT Company, showcasing the company's software engineering services, product portfolio, and contact funnels.",
    contribution:
      "Built the corporate website in React.js during my time as a Full Stack Developer at TeraBit IT Company, implementing a modular component architecture, responsive layouts, and performance optimizations.",
    architecture:
      "Modular React.js frontend engineered with reusable UI sections, optimized asset loading, and semantic, SEO-friendly page hierarchy.",
    challenges:
      "Balancing rich agency visuals with fast initial page loads and clean semantic structure across mobile and desktop devices.",
    highlights: [
      "Built the corporate website in React.js with a modular component architecture and modern UI/UX",
      "Implemented responsive layouts, performance optimization, and SEO-friendly page structure",
    ],
    stack: ["React.js", "Performance", "Responsive UI", "SEO"],
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
    period: "Oct 2025 - Nov 2025",
    status: "Completed",
    description:
      "An SEO-optimized ad-revenue marketing website with lead funnels, EmailJS contact forms, Framer Motion animations, and Google Ads conversion tracking.",
    overview:
      "Monetize 360 Global is an ad-tech and publisher monetization marketing website designed to convert publisher traffic through structured lead funnels.",
    contribution:
      "Built the marketing site end to end using React.js and Framer Motion, integrating EmailJS contact funnels, technical SEO structure, and Google Ads conversion tracking.",
    architecture:
      "React.js frontend with Framer Motion scroll/interaction animations, serverless EmailJS lead delivery, and Google Ads event tracking.",
    challenges:
      "Combining smooth motion-led storytelling with strong Core Web Vitals, SEO crawlability, and accurate conversion attribution.",
    highlights: [
      "Built an SEO-optimized marketing site with lead funnels, EmailJS contact forms, and Framer Motion animations",
      "Configured Google Ads conversion tracking for publisher acquisition campaigns",
    ],
    stack: ["React.js", "Framer Motion", "EmailJS", "SEO", "Google Ads"],
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
    period: "Aug 2025 - Present",
    status: "Ongoing",
    description:
      "A multi-tenant Google Ad Manager dashboard for scheduled revenue ingestion, publisher reporting, revenue-share rules, approvals, and payout tracking.",
    overview:
      "AdPulse (`adpulse.monetize360.eu`) is a multi-tenant SaaS revenue analytics and payout platform built for Google Ad Manager (GAM) publishers and ad-network administrators.",
    contribution:
      "Architected and built the multi-tenant dashboard, GAM REST API ingestion pipeline, Firebase custom-claim authentication, server-side revenue-share calculation engine, and admin payout lifecycle tools.",
    architecture:
      "React dashboard backed by Firebase Auth (custom claims for admin and publisher roles), Cloud Functions for scheduled GAM REST API ingestion and server-side revenue-share calculation, and Firestore secured with tenant-isolated rules and composite indexes.",
    challenges:
      "Ingesting scheduled impressions, clicks, and revenue data from the Google Ad Manager REST API while applying per-site or per-user revenue-share percentages securely on the server—solved via scheduled Cloud Functions and composite-indexed Firestore queries.",
    highlights: [
      "Built a multi-tenant revenue analytics dashboard for Google Ad Manager (GAM) publishers",
      "Integrated the GAM REST API for scheduled ingestion of impressions, clicks, and revenue data",
      "Implemented Firebase Auth with custom claims for admin and publisher roles",
      "Developed a server-side revenue-share engine applied per site or per user via Cloud Functions",
      "Built an admin panel for user management, site approval, and payout lifecycle tracking",
      "Secured data with Firestore security rules and optimized queries with composite indexes",
    ],
    stack: ["React", "Firebase Auth", "Firestore", "Cloud Functions", "GAM REST API"],
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
  { name: "Upwork", href: "https://www.upwork.com/freelancers/~01dfd95ce1afbfc610?mp_source=share" },
  { name: "Fiverr", href: "https://www.fiverr.com/s/VYK4Ag5" },
  { name: "Freelancer", href: "https://www.freelancer.pk/u/junaidaly131?frm=junaidaly131&sb=t" },
  { name: "Guru", href: "https://www.guru.com/freelancers/junaid-aly" },
] as const;
