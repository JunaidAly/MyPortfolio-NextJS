import type { Metadata } from "next";
import ContactComponent from "@/components/sections/Contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact & Hire a Full Stack Developer",
  description: "Contact Junaid Ali to discuss a React, Next.js, SaaS, dashboard, or full-stack web development project. Available for remote client work worldwide.",
  path: "/contact",
});
export default function Contact() {
  return (
    <div className="pt-[74px]">
      <ContactComponent />
    </div>
  );
}
