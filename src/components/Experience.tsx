import { Check } from 'lucide-react'
import { experience } from '@/data/experience'
import { Container, SectionHeading, Tag } from './portfolio/primitives'
export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-border bg-surface py-12 sm:py-16">
      <Container>
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I ship production software"
          description="Ownership across architecture, integration and release — not just screens."
        />

        <div className="mt-8">
          <ol className="relative flex flex-col gap-8">
            {experience.map((entry) => {
              const groups = [
                { title: 'Core Engineering Scope', items: entry.responsibilities },
                { title: 'Engineering Domains', items: entry.capabilities },
                { title: 'Key Products Delivered', items: entry.projects.map(p => p.name) },
              ];

              return (
                <li key={entry.company} className="relative grid gap-6 rounded-3xl border border-border bg-card p-6 sm:p-8 lg:grid-cols-[16rem_1fr] lg:gap-12">
                  <div className="lg:border-r lg:border-border lg:pr-8">
                    <div className="flex items-center gap-3">
                      <span className="relative flex size-3">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/40 motion-reduce:animate-none" />
                        <span className="relative inline-flex size-3 rounded-full border-2 border-card bg-primary ring-1 ring-primary/30" />
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{entry.dates}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground">{entry.company}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{entry.role}</p>
                    <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">{entry.summary}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {['Flutter', 'BLoC', 'APIs', 'Payments', 'Releases'].map((t) => (
                        <Tag key={t}>{t}</Tag>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-3 sm:gap-5">
                    {groups.map((group) => (
                      <div key={group.title}>
                        <h4 className="border-b border-border pb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                          {group.title}
                        </h4>
                        <ul className="mt-4 space-y-3">
                          {group.items.map((item) => (
                            <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-foreground">
                              <Check className="mt-1 size-3.5 shrink-0 text-primary" aria-hidden="true" />
                              <span className="text-pretty">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Render the full project details below to preserve existing verified portfolio data */}
                  <div className="lg:col-span-2 border-t border-border pt-6 mt-2">
                     <h4 className="text-sm font-semibold mb-6 text-foreground">Delivered Products & Architecture</h4>
                     <div className="grid gap-6 md:grid-cols-2">
                        {entry.projects.map((project) => (
                          <div key={project.name} className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5">
                            <div className="flex items-center justify-between">
                              <h5 className="font-medium text-foreground">{project.name}</h5>
                              {project.status && (
                                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono bg-background px-2 py-1 rounded-md border border-border">
                                  {project.status}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{project.summary}</p>
                            
                            {project.metric && (
                              <p className="text-xs font-medium text-primary">{project.metric}</p>
                            )}

                            <ul className="mt-1 space-y-2">
                              {project.highlights.map(h => (
                                <li key={h} className="text-[13px] text-muted-foreground flex gap-2">
                                  <span className="text-border mt-1 shrink-0">•</span>
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="mt-auto pt-4 flex flex-wrap gap-1.5">
                              {project.stack.map(s => (
                                <Tag key={s} className="bg-background">{s}</Tag>
                              ))}
                            </div>
                          </div>
                        ))}
                     </div>
                  </div>

                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  )
}
