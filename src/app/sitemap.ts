import type { MetadataRoute } from "next";
import { allProjects } from "@/constants/portfolio";
import { servicePageList } from "@/constants/services";
import { SITE_URL } from "@/lib/seo";

const UPDATED_RECENT = new Date("2026-11-21");
const UPDATED_ARCHIVE = new Date("2026-10-26");

const PRIORITY_PROJECT_SLUGS = new Set([
  "primus-booking",
  "skillbridge",
  "adpulse",
  "fimit-ar-admin-panel",
  "monetize-360-global",
  "terabit-it-website",
  "beam-balance",
  "organization-task-tracker",
  "turkish-ecommerce-platform",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: UPDATED_RECENT,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/hire-full-stack-developer`,
      lastModified: UPDATED_RECENT,
      changeFrequency: "monthly",
      priority: 0.95,
    },
    ...servicePageList.map((service) => ({
      url: `${SITE_URL}${service.path}`,
      lastModified: UPDATED_RECENT,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    {
      url: `${SITE_URL}/projects`,
      lastModified: UPDATED_RECENT,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: UPDATED_RECENT,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/experience`,
      lastModified: UPDATED_RECENT,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: UPDATED_ARCHIVE,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  // Include only substantive project case studies (enriched case studies or projects with live URLs, repositories, or screenshot galleries).
  const indexableProjects = allProjects.filter(
    (project) =>
      PRIORITY_PROJECT_SLUGS.has(project.slug) ||
      Boolean(project.live) ||
      Boolean("github" in project && project.github) ||
      project.gallery.length > 0,
  );

  const projectPages: MetadataRoute.Sitemap = indexableProjects.map((project) => {
    const isPriority = PRIORITY_PROJECT_SLUGS.has(project.slug);
    return {
      url: `${SITE_URL}/projects/${project.slug}`,
      lastModified: isPriority ? UPDATED_RECENT : UPDATED_ARCHIVE,
      changeFrequency: "monthly",
      priority: isPriority ? 0.85 : 0.7,
    };
  });

  return [...corePages, ...projectPages];
}
