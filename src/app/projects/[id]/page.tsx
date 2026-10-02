import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { featuredProjects, isMobileProject, getProjectGallery } from '@/data/projects'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Container, Eyebrow, Tag } from '@/components/portfolio/primitives'
import { ProjectIcon } from '@/components/Projects'
import { DesktopFrame, PhoneFrame } from '@/components/portfolio/screenshot-frames'

export function generateStaticParams() {
  return featuredProjects.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const project = featuredProjects.find((p) => p.id === id)
  
  if (!project) {
    return {
      title: "Project Not Found | Muhammad Ahmad",
    };
  }

  const siteUrl = "https://engrahmad.com";
  const pageTitle = `${project.title} — Case Study | Muhammad Ahmad`;
  const pageDescription = `${project.title}: ${project.summary}`;
  const ogImage = project.image ? `${siteUrl}${project.image}` : `${siteUrl}/og-image.jpg`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `${siteUrl}/projects/${project.id}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteUrl}/projects/${project.id}`,
      siteName: "Muhammad Ahmad",
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
  };
}

const sections = [
  { key: 'challenge', label: 'The Challenge' },
  { key: 'architecture', label: 'Architecture & State Patterns' },
  { key: 'backendBoundary', label: 'Backend, APIs & Platform Boundary' },
  { key: 'performance', label: 'Performance & Data Optimizations' },
  { key: 'outcomes', label: 'Verified Outcomes & Production Delivery' },
] as const

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const index = featuredProjects.findIndex((p) => p.id === id)
  if (index === -1) notFound()
  const project = featuredProjects[index]
  const next = featuredProjects[(index + 1) % featuredProjects.length]

  if (!project.caseStudy) notFound()

  const screenshots = getProjectGallery(project)
  const isDesktop = !isMobileProject(project)

  const appCategory =
    project.category.includes("Medical") || project.category.includes("Clinical")
      ? "MedicalApplication"
      : project.category.includes("EdTech")
        ? "EducationalApplication"
        : "BusinessApplication";

  const downloadUrls: string[] = [];
  if (project.links?.playStore) downloadUrls.push(project.links.playStore);
  if (project.links?.appStore) downloadUrls.push(project.links.appStore);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.summary,
    applicationCategory: appCategory,
    operatingSystem: isDesktop ? "Desktop" : "Mobile",
    author: {
      "@type": "Person",
      name: "Muhammad Ahmad",
      url: "https://engrahmad.com",
    },
    ...(downloadUrls.length > 0 ? { downloadUrl: downloadUrls } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Navbar />
      <main className="pb-20 sm:pb-28">
        <Container className="pt-10 sm:pt-14">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
            <ArrowLeft className="size-4" aria-hidden="true" />
            All projects
          </Link>

          <div className="mt-8 flex flex-col md:flex-row md:items-start gap-4">
            <ProjectIcon name={project.title} className="size-14 text-base hidden md:flex" />
            <div>
              <Eyebrow>Case Study · {project.category}</Eyebrow>
              <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{project.title}</h1>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">{project.summary}</p>

          <dl className="mt-8 grid grid-cols-2 gap-4 border-y border-border py-6 sm:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Ownership</dt>
              <dd className="mt-1 text-sm font-medium pr-4">{project.ownership.slice(0, 70)}...</dd>
            </div>
            <div className="col-span-2 md:col-span-1">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Store Status</dt>
              <dd className="mt-1 text-sm font-medium">{project.status}</dd>
            </div>
            <div className="col-span-2 md:col-span-2">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 6).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </dd>
            </div>
          </dl>

          <div className="mt-10 rounded-3xl border border-border bg-surface p-4 sm:p-8">
            {isDesktop ? (
              <DesktopFrame src={screenshots[0]?.path} alt={`${project.title} desktop`} title={project.title} />
            ) : (
              <ul className="flex snap-x snap-mandatory gap-4 overflow-x-auto [scrollbar-width:none] sm:grid sm:grid-cols-4 sm:overflow-visible">
                {Array.from({ length: Math.min(4, screenshots.length) }).map((_, i) => (
                  <li key={i} className="w-[60%] shrink-0 snap-center sm:w-auto">
                    <PhoneFrame src={screenshots[i]?.path} alt={`${project.title} screen ${i + 1}`} label={`Screen ${i + 1}`} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[16rem_1fr]">
            <nav aria-label="Case study sections" className="hidden lg:block">
              <ol className="sticky top-24 space-y-2 text-sm">
                {sections.map((s, i) => (
                  <li key={s.key}>
                    <a href={`#${s.key}`} className="flex gap-3 text-muted-foreground transition-colors hover:text-primary">
                      <span className="font-mono text-xs">0{i + 1}</span>
                      <span className="max-w-[200px] leading-tight">{s.label}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <div className="space-y-10">
              {sections.map((s, i) => {
                const content = project.caseStudy![s.key];
                return (
                  <section key={s.key} id={s.key} aria-labelledby={`${s.key}-h`} className="border-t border-border pt-6">
                    <p className="font-mono text-xs text-primary">0{i + 1}</p>
                    <h2 id={`${s.key}-h`} className="mt-2 text-2xl font-semibold tracking-tight">{s.label}</h2>
                    
                    {Array.isArray(content) ? (
                      <ul className="mt-4 space-y-3 pl-4 list-disc text-muted-foreground marker:text-primary/50">
                        {content.map((point) => (
                          <li key={point} className="pl-1 text-pretty leading-relaxed">
                            {point}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">{content}</p>
                    )}
                  </section>
                );
              })}
              
              <section aria-labelledby="highlight-h" className="rounded-2xl border border-primary/15 bg-accent/60 p-6">
                <h2 id="highlight-h" className="text-sm font-medium uppercase tracking-wider text-primary">Engineering highlight</h2>
                <ul className="mt-3 space-y-2">
                   {project.highlights.map((h) => (
                      <li key={h} className="text-pretty text-base leading-relaxed text-foreground flex gap-3">
                         <span className="text-primary mt-1 text-lg leading-none">•</span>
                         <span>{h}</span>
                      </li>
                   ))}
                </ul>
              </section>
            </div>
          </div>

          <Link
            href={`/projects/${next.id}`}
            className="group mt-16 flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/30"
          >
            <span>
              <span className="block text-xs uppercase tracking-wider text-muted-foreground">Next project</span>
              <span className="mt-1 block text-xl font-semibold">{next.title}</span>
            </span>
            <ArrowRight className="size-5 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  )
}
