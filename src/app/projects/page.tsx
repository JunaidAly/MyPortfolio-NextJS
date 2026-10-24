import type { Metadata } from "next";
import ProjectComponent from "@/components/sections/Projects";

export const metadata: Metadata = { title: "Selected Work" };

export default function Projects() {
  return (
    <div className="pt-[74px]">
      <ProjectComponent />
    </div>
  );
}
