export type ServicePageData = {
  slug:
    | "full-stack-development"
    | "mern-stack-development"
    | "react-nextjs-development"
    | "saas-development";
  path: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1Lead: string;
  h1Muted: string;
  intro: string;
  extendedIntro: string;
  serviceTypes: readonly string[];
  technologies: readonly string[];
  capabilities: readonly {
    title: string;
    description: string;
  }[];
  relatedProjectSlugs: readonly string[];
  approach: readonly {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: readonly {
    question: string;
    answer: string;
  }[];
};

export const servicePages: Record<ServicePageData["slug"], ServicePageData> = {
  "full-stack-development": {
    slug: "full-stack-development",
    path: "/full-stack-development",
    metaTitle: "Full Stack Development Services in Islamabad & Remote",
    metaDescription:
      "Full Stack Development services by Junaid Ali in Islamabad, Pakistan. Building scalable web applications, REST APIs, databases, authentication, and cloud deployments with React, Next.js, Node.js, and TypeScript.",
    eyebrow: "Full Stack Engineering · Islamabad & Remote",
    h1Lead: "Full Stack Development Services for",
    h1Muted: "scalable web applications.",
    intro:
      "I design, build, and deploy complete web applications from responsive user interfaces to backend APIs, relational and NoSQL databases, role-based access control, and cloud infrastructure.",
    extendedIntro:
      "With 5+ years of hands-on full-stack experience across client platforms at CalibreOn International (NorthSpex), TeraBit IT Company, and my own production products, I help founders and engineering teams ship reliable software without the communication overhead of split frontend and backend handoffs.",
    serviceTypes: [
      "Full Stack Web Development",
      "REST API & Backend Architecture",
      "Database Design & Authentication",
      "Cloud Deployment & CI/CD",
    ],
    technologies: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "Node.js",
      "Express.js",
      "NestJS",
      "Python / FastAPI",
      "PostgreSQL (Supabase)",
      "MongoDB",
      "Firebase",
      "AWS (S3)",
      "Docker",
    ],
    capabilities: [
      {
        title: "End-to-end product architecture",
        description:
          "Cohesive frontend and backend engineering covering UI state, API contracts, data modeling, background jobs, and third-party integrations.",
      },
      {
        title: "Authentication, security & RBAC",
        description:
          "Production authentication using JWT, Google OAuth 2.0, two-factor authentication (2FA), Supabase Auth, Firebase custom claims, and middleware-enforced role permissions.",
      },
      {
        title: "APIs, microservices & real-time systems",
        description:
          "RESTful Node.js/Express APIs, Socket.IO real-time messaging, scheduled third-party API ingestion pipelines, and Python FastAPI machine-learning microservices.",
      },
    ],
    relatedProjectSlugs: ["primus-booking", "skillbridge", "adpulse", "beam-balance"],
    approach: [
      {
        step: "01",
        title: "Scope, data model & system boundaries",
        description:
          "We define user roles, database schemas, API endpoints, and security rules before writing feature code so the foundation supports future growth.",
      },
      {
        step: "02",
        title: "Iterative full-stack vertical slices",
        description:
          "Features are delivered as working end-to-end slices—database to API to UI—with regular staging previews on Vercel, Render, or AWS.",
      },
      {
        step: "03",
        title: "Hardening, performance & deployment",
        description:
          "Every release includes validation, access-control checks, query indexing, Core Web Vitals optimization, and clean production handoff.",
      },
    ],
    faqs: [
      {
        question: "What does your full-stack development service cover?",
        answer:
          "I handle the complete web application lifecycle: frontend UI in React or Next.js, backend APIs in Node.js/Express or Python FastAPI, database design in PostgreSQL (Supabase), MongoDB, or Firebase, authentication and RBAC, and cloud deployment.",
      },
      {
        question: "Can you integrate into an existing codebase or team?",
        answer:
          "Yes. At CalibreOn International (NorthSpex) and TeraBit IT Company, I have both architected greenfield SaaS platforms from scratch and contributed features, admin systems, and API integrations to existing multi-developer codebases.",
      },
      {
        question: "How do you handle database selection between PostgreSQL, MongoDB, and Firebase?",
        answer:
          "I select the data layer around the domain: PostgreSQL/Supabase for relational workflows like Primus Booking, MongoDB for flexible document and real-time marketplace models like SkillBridge, and Firebase/Firestore when custom-claim auth and serverless Cloud Functions fit best like AdPulse.",
      },
      {
        question: "Are you available for remote clients outside Pakistan?",
        answer:
          "Yes. I am based in Islamabad, Pakistan and work remotely with international clients and distributed product teams with clear written updates and milestone demos.",
      },
    ],
  },
  "mern-stack-development": {
    slug: "mern-stack-development",
    path: "/mern-stack-development",
    metaTitle: "MERN Stack Development Services (MongoDB, Express, React, Node.js)",
    metaDescription:
      "Hire Junaid Ali for MERN Stack Development. Building full-stack MongoDB, Express.js, React, and Node.js web applications, real-time Socket.IO platforms, and REST APIs.",
    eyebrow: "MongoDB · Express.js · React.js · Node.js",
    h1Lead: "MERN Stack Development for",
    h1Muted: "modern, real-time web products.",
    intro:
      "I build full-stack JavaScript and TypeScript applications using MongoDB, Express.js, React.js, and Node.js—engineered for fast iteration, real-time collaboration, and clean REST API architecture.",
    extendedIntro:
      "From my own production platform SkillBridge (combining a MERN core with Socket.IO real-time messaging and a Python FastAPI AI microservice) to full-featured task management and e-commerce applications, I use the MERN stack to ship responsive, high-throughput web products.",
    serviceTypes: [
      "MERN Stack Web Application Development",
      "Node.js & Express.js REST API Development",
      "Real-time WebSockets & Socket.IO Integration",
      "MongoDB Schema Design & Aggregation",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "TypeScript",
      "Socket.IO (WebSockets)",
      "JWT & OAuth 2.0",
      "Two-Factor Auth (2FA)",
      "Python / FastAPI",
      "Redux / Context API",
      "Tailwind CSS",
      "Render / Vercel",
    ],
    capabilities: [
      {
        title: "Node.js & Express REST APIs",
        description:
          "Structured controller/service architecture, request validation, rate limiting, JWT + refresh token flows, Google OAuth, and 2FA security.",
      },
      {
        title: "Real-time Socket.IO features",
        description:
          "Live messaging, online presence tracking, typing indicators, instant notifications, and collaborative board updates.",
      },
      {
        title: "MongoDB data modeling & AI microservice integration",
        description:
          "Indexed document schemas, aggregation pipelines, Cloudinary media workflows, and seamless integration with Python FastAPI recommendation services.",
      },
    ],
    relatedProjectSlugs: ["skillbridge", "task-manager-mern", "ecommerce-store", "global-connect-admin-panel"],
    approach: [
      {
        step: "01",
        title: "API contract & MongoDB schema design",
        description:
          "Designing clean document models, indexes, and REST/WebSocket payloads so the React client and Node.js server stay predictable.",
      },
      {
        step: "02",
        title: "Secure backend & interactive React UI",
        description:
          "Implementing JWT/OAuth/2FA authentication, Express middleware, and responsive React component systems with clear loading and error states.",
      },
      {
        step: "03",
        title: "Real-time sync & cloud deployment",
        description:
          "Connecting Socket.IO events, email notifications, and cloud storage, followed by production deployment on Render, Vercel, or AWS.",
      },
    ],
    faqs: [
      {
        question: "Why choose the MERN stack for a web application or marketplace?",
        answer:
          "MERN uses JavaScript/TypeScript across the entire stack, enabling rapid feature delivery, natural JSON data flows between MongoDB, Express, and React, and straightforward real-time WebSocket support with Node.js and Socket.IO.",
      },
      {
        question: "Can you add AI or Python microservices to a MERN application?",
        answer:
          "Yes. On SkillBridge, I paired a MERN core application with a dedicated Python FastAPI + scikit-learn recommendation microservice using TF-IDF vectorization and cosine similarity to match students and teachers.",
      },
      {
        question: "How do you secure MERN stack applications?",
        answer:
          "I implement JWT authentication, Google OAuth 2.0, optional two-factor authentication (2FA), role-based route protection, server-side input validation, and environment-isolated configuration.",
      },
      {
        question: "Can you migrate or upgrade an existing React + Node.js project?",
        answer:
          "Yes. I can refactor legacy React/Express codebases, add TypeScript, improve API performance, or integrate real-time Socket.IO and payment/credit modules.",
      },
    ],
  },
  "react-nextjs-development": {
    slug: "react-nextjs-development",
    path: "/react-nextjs-development",
    metaTitle: "React & Next.js Development Services | App Router, TypeScript & SEO",
    metaDescription:
      "React.js and Next.js development services by Junaid Ali. Building fast, SEO-friendly Next.js App Router applications, SaaS portals, admin dashboards, and reusable TypeScript UI systems.",
    eyebrow: "React.js · Next.js App Router · TypeScript",
    h1Lead: "React & Next.js Development for",
    h1Muted: "fast, product-grade interfaces.",
    intro:
      "I build high-performance React.js and Next.js (App Router) applications with TypeScript, Tailwind CSS, server rendering, middleware access control, and search-optimized page architecture.",
    extendedIntro:
      "Whether it is a 3-portal SaaS platform like Primus Booking on Next.js App Router, an AR operations dashboard like FIMIT AR Admin, or an SEO-focused marketing site like Monetize 360 Global, I engineer interfaces that feel responsive to users and clean to maintain.",
    serviceTypes: [
      "Next.js App Router Development",
      "React.js Single-Page & Dashboard Applications",
      "TypeScript Component Systems & UI Engineering",
      "Technical SEO & Core Web Vitals Optimization",
    ],
    technologies: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Redux / Context API",
      "Supabase / Firebase",
      "Next.js Middleware",
      "HTML5 & CSS3",
      "Vercel / Netlify",
    ],
    capabilities: [
      {
        title: "Next.js App Router & middleware architecture",
        description:
          "Server and client component composition, route-level RBAC middleware, dynamic metadata, sitemaps, structured data, and fast initial HTML rendering.",
      },
      {
        title: "Admin panels & data-dense dashboards",
        description:
          "Multi-role dashboards, analytics views, document management workspaces, and real-time content management interfaces.",
      },
      {
        title: "Reusable UI systems & motion",
        description:
          "Modular component libraries built with TypeScript, Tailwind CSS, shadcn/ui, and purposeful Framer Motion interactions that respect Core Web Vitals.",
      },
    ],
    relatedProjectSlugs: ["primus-booking", "fimit-ar-admin-panel", "monetize-360-global", "terabit-it-website"],
    approach: [
      {
        step: "01",
        title: "Component hierarchy & rendering strategy",
        description:
          "Planning server vs. client boundaries, URL structure, and reusable UI primitives so pages render fast and scale cleanly.",
      },
      {
        step: "02",
        title: "Accessible, responsive implementation",
        description:
          "Building mobile-first layouts, keyboard-friendly controls, form validation, and clean API integration states.",
      },
      {
        step: "03",
        title: "Core Web Vitals & technical SEO",
        description:
          "Optimizing LCP images, font loading, bundle size, semantic headings, canonical URLs, and Schema.org structured data.",
      },
    ],
    faqs: [
      {
        question: "When should a project use Next.js vs. standalone React.js?",
        answer:
          "Next.js (App Router) is ideal when you need server rendering, strong technical SEO, route middleware for multi-role access control, or full-stack API routes—such as Primus Booking or Beam Balance. Standalone React works well for authenticated dashboards and SPAs backed by separate APIs.",
      },
      {
        question: "How do you handle multi-portal or role-based access in Next.js?",
        answer:
          "On Primus Booking, I used Next.js middleware with Supabase Auth to enforce strict role-based access control across Customer, Business, and Admin portals from a unified architecture.",
      },
      {
        question: "Do you optimize React and Next.js websites for Google Search and Core Web Vitals?",
        answer:
          "Yes. I implement Next.js Metadata API, self-referencing canonical URLs, dynamic XML sitemaps, JSON-LD structured data, `next/image` WebP/AVIF optimization, and semantic HTML hierarchy targeting Google's LCP, INP, and CLS thresholds.",
      },
      {
        question: "Can you convert Figma designs or improve an existing React UI?",
        answer:
          "Yes. I regularly translate product specs and Figma designs into reusable, accessible React/Next.js components and standardize layouts across existing applications.",
      },
    ],
  },
  "saas-development": {
    slug: "saas-development",
    path: "/saas-development",
    metaTitle: "SaaS Application Development Services | Multi-Tenant & MVP Engineering",
    metaDescription:
      "SaaS development services by Junaid Ali in Islamabad, Pakistan. Building multi-tenant SaaS platforms, booking ecosystems, revenue dashboards, RBAC authentication, and startup MVPs.",
    eyebrow: "Multi-Tenant SaaS · Dashboards · Booking Systems",
    h1Lead: "SaaS Application Development for",
    h1Muted: "multi-role products and startups.",
    intro:
      "I help founders and product teams architect and ship production SaaS platforms—covering multi-tenant data isolation, role-based portals, scheduled API pipelines, billing/credit logic, and admin operations.",
    extendedIntro:
      "My portfolio centers on real, live SaaS systems: Primus Booking (a 3-portal appointment booking ecosystem), AdPulse (a multi-tenant Google Ad Manager revenue analytics platform), SkillBridge (an AI-powered learning marketplace), and Beam Balance (secure AWS S3 document management).",
    serviceTypes: [
      "Multi-Tenant SaaS Architecture",
      "Startup MVP & Product Development",
      "Multi-Portal Booking & Marketplace Platforms",
      "Analytics Dashboards & Admin Systems",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "TypeScript",
      "Node.js",
      "Supabase (PostgreSQL & Auth)",
      "Firebase (Auth, Firestore, Cloud Functions)",
      "MongoDB",
      "Python / FastAPI",
      "AWS S3",
      "Role-Based Access Control (RBAC)",
      "REST APIs & Webhooks",
      "Vercel / Render",
    ],
    capabilities: [
      {
        title: "Multi-portal & multi-tenant architecture",
        description:
          "Separate customer, business/publisher, and administrator workspaces with strict tenant isolation at the middleware and database policy level.",
      },
      {
        title: "Revenue engines, credits & scheduling",
        description:
          "Appointment scheduling, reward points, credit-based session transactions, server-side revenue-share calculations, and payout lifecycle tracking.",
      },
      {
        title: "Admin operations & third-party ingestion",
        description:
          "Scheduled data ingestion from external APIs (such as Google Ad Manager), site/user approval workflows, and secure AWS S3 document pipelines.",
      },
    ],
    relatedProjectSlugs: ["primus-booking", "adpulse", "skillbridge", "beam-balance"],
    approach: [
      {
        step: "01",
        title: "Tenant & role architecture",
        description:
          "Defining how organizations, customers, businesses, and admins authenticate and interact, enforced via Supabase RLS, Firestore security rules, or custom claims.",
      },
      {
        step: "02",
        title: "Core workflow & dashboard delivery",
        description:
          "Shipping the high-leverage product workflows first—bookings, analytics ingestion, real-time messaging, or document management—alongside an operator admin panel.",
      },
      {
        step: "03",
        title: "Production launch & iteration",
        description:
          "Deploying on cloud infrastructure with composite database indexes, OAuth/2FA security, and clean architecture ready for post-launch iteration.",
      },
    ],
    faqs: [
      {
        question: "What types of SaaS platforms have you built and shipped?",
        answer:
          "I have built Primus Booking (a 3-portal Customer, Business, and Admin appointment booking SaaS on Next.js and Supabase), AdPulse (a multi-tenant Google Ad Manager revenue dashboard on React and Firebase Cloud Functions), SkillBridge (an AI-powered skill exchange marketplace on MERN + FastAPI), and Beam Balance (a Next.js + AWS S3 document management platform).",
      },
      {
        question: "How do you enforce multi-tenant security and role-based access control (RBAC)?",
        answer:
          "Depending on the stack, I combine Next.js route middleware with Supabase Auth and PostgreSQL permissions, Firebase Auth custom claims with Firestore security rules, or JWT role guards on Node.js/Express APIs so tenants and roles can only access authorized records.",
      },
      {
        question: "Can you build a SaaS MVP from scratch and take it to production?",
        answer:
          "Yes. I regularly own the full build from initial database schema and authentication through customer/admin UI and production cloud deployment.",
      },
      {
        question: "Do you build admin dashboards and internal operations tools for SaaS products?",
        answer:
          "Yes. Every SaaS platform I build includes dedicated administrative tooling for user management, approvals, analytics, content moderation, or payout tracking.",
      },
    ],
  },
};

export const servicePageList = Object.values(servicePages);
