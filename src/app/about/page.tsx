import type { Metadata } from "next";
import AboutComponent from "@/components/sections/About";
import JsonLd from "@/components/seo/JsonLd";
import { createPageMetadata, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About — Full Stack Developer in Islamabad",
  description: "Meet Junaid Ali, a product-focused full-stack developer in Islamabad working remotely on React, Next.js, Node.js, SaaS, and web application projects.",
  path: "/about",
});
export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/about#profile`,
    url: `${SITE_URL}/about`,
    name: "About Junaid Ali",
    dateModified: "2026-10-26",
    mainEntity: { "@id": `${SITE_URL}/#person` },
  };

  return <div className="pt-[74px]"><JsonLd data={schema} /><AboutComponent /></div>;
}
