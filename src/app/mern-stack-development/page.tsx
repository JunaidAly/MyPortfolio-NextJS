import type { Metadata } from "next";
import ServiceLandingTemplate from "@/components/sections/ServiceLandingTemplate";
import { servicePages } from "@/constants/services";
import { createPageMetadata } from "@/lib/seo";

const service = servicePages["mern-stack-development"];

export const metadata: Metadata = createPageMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: service.path,
  keywords: [
    "MERN Stack Developer",
    "MERN Stack Development Services",
    "MongoDB Express React Node Developer",
    "Full Stack JavaScript Developer Islamabad",
    ...service.technologies,
  ],
});

export default function MernStackDevelopmentPage() {
  return <ServiceLandingTemplate service={service} />;
}
