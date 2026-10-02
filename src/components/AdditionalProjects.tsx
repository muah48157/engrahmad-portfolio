import { additionalProjects } from "@/data/projects";
import { Container, Eyebrow, Tag } from './portfolio/primitives'
import { ProjectIcon } from './Projects'

export default function AdditionalProjects() {
  return (
    <section aria-labelledby="more-title" className="py-10 sm:py-12">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          <div className="lg:w-64 lg:shrink-0">
            <Eyebrow>More Projects</Eyebrow>
            <h2 id="more-title" className="mt-3 text-xl font-semibold tracking-tight text-foreground">
              Additional work
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Smaller builds and utilities.</p>
          </div>
          <ul className="grid flex-1 gap-4 sm:grid-cols-2">
            {additionalProjects.map((p) => (
              <li
                key={p.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/25 flex-col lg:flex-row"
              >
                <ProjectIcon name={p.title} className="size-10 text-xs" />
                <div className="min-w-0 flex flex-col h-full">
                  <h3 className="font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                  
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Highlights</span>
                    <ul className="space-y-1.5">
                      {p.highlights.map(h => (
                        <li key={h} className="text-xs text-muted-foreground flex gap-1.5 leading-relaxed">
                          <span className="text-border mt-0.5 shrink-0">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                    {p.technologies.slice(0, 4).map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
