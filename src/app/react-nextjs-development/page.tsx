import type { Metadata } from "next";
import ServiceLandingTemplate from "@/components/sections/ServiceLandingTemplate";
import { servicePages } from "@/constants/services";
import { createPageMetadata } from "@/lib/seo";

const service = servicePages["react-nextjs-development"];

export const metadata: Metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.path,
  keywords: [
    "React Developer",
    "Next.js Developer",
    "React and Next.js Development Services",
    "Next.js App Router TypeScript Developer",
    ...service.technologies,
  ],
});

export default function ReactNextjsDevelopmentPage() {
  return <ServiceLandingTemplate service={service} />;
}
