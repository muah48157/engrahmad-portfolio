import Link from 'next/link'
import { ArrowRight, Monitor, Smartphone } from 'lucide-react'
import { featuredProjects, type ProjectItem, getProjectGallery } from '@/data/projects'
import { cn } from '@/lib/utils'
import { Container, SectionHeading, Tag } from './portfolio/primitives'
import { Reveal } from './portfolio/reveal'
import { DesktopFrame, PhoneFrame } from './portfolio/screenshot-frames'

export function ProjectIcon({ name, className }: { name: string; className?: string }) {
  const letters = name
    .split(/[\s-]+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
  return (
    <span
      aria-hidden="true"
      className={cn(
        'flex size-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-sm font-semibold text-primary shadow-xs',
        className,
      )}
    >
      {letters}
    </span>
  )
}

function ProjectMeta({ project }: { project: ProjectItem }) {
  const PlatformIcon = project.platform === 'desktop' ? Monitor : Smartphone
  
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start gap-4">
        <ProjectIcon name={project.title} />
        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">{project.title}</h3>
          <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted-foreground">
            <PlatformIcon className="size-3.5" aria-hidden="true" />
            {project.category}
          </p>
        </div>
      </div>

      <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">{project.summary}</p>

      <p className="mt-5 text-xs text-muted-foreground">
        <span className="uppercase tracking-wider">Role</span>
        <span className="mx-2 text-border" aria-hidden="true">
          /
        </span>
        <span className="font-medium text-foreground">{project.ownership.slice(0, 60)}...</span>
      </p>

      <div className="mt-6">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-3 font-mono">Core Stack</p>
        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.slice(0, 5).map((t) => (
            <li key={t}>
              <Tag className="bg-surface">{t}</Tag>
            </li>
          ))}
        </ul>
      </div>

      {project.caseStudyPath && (
        <div className="mt-auto pt-8 pb-2">
          <Link
            href={project.caseStudyPath}
            className="group/cta inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:scale-105"
          >
            Read Case Study
            <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" aria-hidden="true" />
            <span className="sr-only">: {project.title}</span>
          </Link>
        </div>
      )}
    </div>
  )
}

function PhoneGallery({ project, count }: { project: ProjectItem; count: number }) {
  const screenshots = getProjectGallery(project)
  return (
    <div className="relative h-full w-full min-h-[380px] flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-border bg-surface/50">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
      <ul
        className="relative w-full flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-8 [scrollbar-width:none] sm:justify-center sm:overflow-visible sm:px-6 sm:py-10 [&::-webkit-scrollbar]:hidden"
        aria-label={`${project.title} screenshots`}
      >
        {Array.from({ length: count }).map((_, i) => (
          <li
            key={i}
            className={cn(
              'w-[58%] shrink-0 snap-center transition-transform duration-500 sm:w-[30%] sm:max-w-[200px]',
              count === 3 && i === 1 && 'sm:-translate-y-4 group-hover:sm:-translate-y-6',
              count === 3 && i !== 1 && 'group-hover:sm:-translate-y-1',
              count === 2 && 'sm:w-[42%] group-hover:sm:-translate-y-1.5',
            )}
          >
            <PhoneFrame
              src={screenshots[i]?.path}
              alt={screenshots[i]?.alt || `${project.title} screen ${i + 1}`}
              label={`Screen ${i + 1}`}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

function FeaturedMobileWide({ project }: { project: ProjectItem }) {
  return (
    <article className="group grid gap-6 rounded-3xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-2xl sm:p-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10 lg:p-8">
      <div className="order-2 px-1 pb-2 lg:order-1 lg:px-0 lg:pb-0">
        <ProjectMeta project={project} />
      </div>
      <div className="order-1 lg:order-2 h-full">
        <PhoneGallery project={project} count={3} />
      </div>
    </article>
  )
}

function FeaturedMobileCompact({ project }: { project: ProjectItem }) {
  return (
    <article className="group flex h-full flex-col gap-6 rounded-3xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-2xl sm:p-6">
      <PhoneGallery project={project} count={2} />
      <div className="flex-1 px-1 pb-2">
        <ProjectMeta project={project} />
      </div>
    </article>
  )
}

function FeaturedDesktop({ project }: { project: ProjectItem }) {
  const screenshots = getProjectGallery(project)
  return (
    <article className="group grid gap-6 rounded-3xl border border-border bg-card p-4 transition-all duration-300 hover:border-primary/40 hover:shadow-2xl sm:p-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10 lg:p-8">
      <div className="flex items-center justify-center rounded-2xl border border-border bg-surface/50 p-6 sm:p-10 min-h-[380px] relative overflow-hidden">
        <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black,transparent)]" />
        <DesktopFrame
          src={screenshots[0]?.path}
          alt={screenshots[0]?.alt || `${project.title} desktop application`}
          title={project.title}
          className="relative transition-transform duration-500 group-hover:-translate-y-2 z-10"
        />
      </div>
      <div className="px-1 pb-2 lg:px-0 lg:pb-0">
        <ProjectMeta project={project} />
      </div>
    </article>
  )
}

export default function Projects() {
  const [first, second, third, desktop] = featuredProjects
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-border bg-background py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="projects-title"
          eyebrow="Featured Work"
          title="Selected Work"
          description="A selection of production applications and engineering work."
          action={
            <p className="flex items-center gap-4 text-xs font-medium text-muted-foreground bg-surface px-4 py-2 rounded-full border border-border">
              <span className="flex items-center gap-1.5">
                <Smartphone className="size-3.5 text-primary" aria-hidden="true" /> 3 Mobile
              </span>
              <span className="text-border">|</span>
              <span className="flex items-center gap-1.5">
                <Monitor className="size-3.5 text-primary" aria-hidden="true" /> 1 Desktop
              </span>
            </p>
          }
        />

        <div className="mt-12 flex flex-col gap-8 lg:gap-10">
          {first && (
            <Reveal>
              <FeaturedMobileWide project={first} />
            </Reveal>
          )}
          
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {second && (
              <Reveal className="h-full">
                <FeaturedMobileCompact project={second} />
              </Reveal>
            )}
            {third && (
              <Reveal delay={100} className="h-full">
                <FeaturedMobileCompact project={third} />
              </Reveal>
            )}
          </div>
          
          {desktop && (
            <Reveal>
              <FeaturedDesktop project={desktop} />
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  )
}
