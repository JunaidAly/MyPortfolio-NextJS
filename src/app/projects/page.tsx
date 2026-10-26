import type { Metadata } from "next";
import ProjectComponent from "@/components/sections/Projects";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Full Stack & Frontend Developer Projects",
  description: "View full-stack and frontend case studies by Junaid Ali, including SaaS platforms, React dashboards, booking systems, admin panels, and AI-enabled web apps.",
  path: "/projects",
});

export default function Projects() {
  return (
    <div className="pt-[74px]">
      <ProjectComponent />
    </div>
  );
}
