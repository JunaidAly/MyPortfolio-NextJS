import type { Metadata } from "next";
import ExperienceComponent from "@/components/sections/Experience";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Full Stack Development Experience",
  description: "Explore Junaid Ali's professional experience building production SaaS products, frontend interfaces, APIs, dashboards, and cloud-hosted web applications.",
  path: "/experience",
});

export default function Experience() {
  return <div className="pt-[74px]"><ExperienceComponent /></div>;
}
