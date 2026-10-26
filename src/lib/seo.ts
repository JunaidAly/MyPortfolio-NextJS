import type { Metadata } from "next";

export const SITE_URL = "https://junaiddev.skill-bridge.me";

export const SITE_NAME = "Junaid Ali — Full Stack Developer";

export const DEFAULT_DESCRIPTION =
  "Hire Junaid Ali, a full-stack and frontend developer building fast SaaS products, dashboards, and web apps with React, Next.js, Node.js, and TypeScript.";

export const SEO_KEYWORDS = [
  "full stack developer for hire",
  "freelance full stack developer",
  "frontend developer for hire",
  "Next.js developer",
  "React developer",
  "SaaS developer",
  "remote full stack developer",
  "full stack developer Islamabad",
] as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function createPageMetadata({ title, description, path, image = "/myprofile.jpg" }: PageMetadataInput): Metadata {
  const socialTitle = `${title} | Junaid Ali`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: path,
      title: socialTitle,
      description,
      images: [{ url: image, alt: socialTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}

