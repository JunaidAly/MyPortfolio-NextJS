import type { Metadata } from "next";

export const SITE_URL = "https://junaiddev.skill-bridge.me";

export const SITE_NAME = "Junaid Ali | Full Stack Developer";

export const DEFAULT_TITLE =
  "Junaid Ali | Full Stack Developer in Islamabad, Pakistan";

export const DEFAULT_DESCRIPTION =
  "Junaid Ali is a Full Stack Developer from Islamabad, Pakistan, specializing in React, Next.js, Node.js, TypeScript, MERN stack, SaaS platforms, and scalable web applications.";

export const SEO_KEYWORDS = [
  "Junaid Ali",
  "Full Stack Developer in Islamabad, Pakistan",
  "Full Stack Developer Pakistan",
  "MERN Stack Developer",
  "React Developer",
  "Next.js Developer",
  "Node.js Developer",
  "TypeScript Developer",
  "SaaS Development",
  "Freelance Full Stack Developer",
  "Remote Full Stack Developer",
] as const;

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: readonly string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  image = "/myprofile.jpg",
  keywords,
}: PageMetadataInput): Metadata {
  const canonicalUrl = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const socialTitle = title.includes("Junaid Ali") ? title : `${title} | Junaid Ali`;
  const isDefaultPortrait = image === "/myprofile.jpg";

  return {
    title,
    description,
    ...(keywords ? { keywords: [...keywords] } : {}),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonicalUrl,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [
        {
          url: image,
          ...(isDefaultPortrait ? { width: 960, height: 1280 } : { width: 1280, height: 853 }),
          alt: socialTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
