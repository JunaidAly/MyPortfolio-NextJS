import type { Metadata } from "next";
import AboutComponent from "@/components/sections/About";

export const metadata: Metadata = { title: "About" };
export default function About() {
  return <div className="pt-[74px]"><AboutComponent /></div>;
}
