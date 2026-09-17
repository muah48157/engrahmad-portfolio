import type { MetadataRoute } from "next";
import { featuredProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://engrahmad.com";

  const caseStudyRoutes: MetadataRoute.Sitemap = featuredProjects
    .filter((project) => project.caseStudy)
    .map((project) => ({
      url: `${siteUrl}/projects/${project.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    ...caseStudyRoutes,
  ];
}
