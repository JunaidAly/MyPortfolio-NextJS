import type { Metadata } from "next";
import ExperienceComponent from "@/components/sections/Experience";

export const metadata: Metadata = { title: "Experience" };

export default function Experience() {
  return <div className="pt-[74px]"><ExperienceComponent /></div>;
}
