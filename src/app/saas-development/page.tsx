import type { Metadata } from "next";
import ServiceLandingTemplate from "@/components/sections/ServiceLandingTemplate";
import { servicePages } from "@/constants/services";
import { createPageMetadata } from "@/lib/seo";

const service = servicePages["saas-development"];

export const metadata: Metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.path,
  keywords: [
    "SaaS Development Services",
    "SaaS Developer",
    "Multi-Tenant SaaS Application Development",
    "Next.js Supabase SaaS Developer",
    ...service.technologies,
  ],
});

export default function SaasDevelopmentPage() {
  return <ServiceLandingTemplate service={service} />;
}
