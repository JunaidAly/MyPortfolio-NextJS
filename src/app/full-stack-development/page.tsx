import type { Metadata } from "next";
import ServiceLandingTemplate from "@/components/sections/ServiceLandingTemplate";
import { servicePages } from "@/constants/services";
import { createPageMetadata } from "@/lib/seo";

const service = servicePages["full-stack-development"];

export const metadata: Metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.path,
  keywords: [
    "Full Stack Development Services",
    "Full Stack Developer Islamabad",
    "Hire Full Stack Developer Pakistan",
    "React Next.js Node.js Developer",
    ...service.technologies,
  ],
});

export default function FullStackDevelopmentPage() {
  return <ServiceLandingTemplate service={service} />;
}
