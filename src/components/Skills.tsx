import { CreditCard, Database, Layers, Rocket, Server, Smartphone } from 'lucide-react'
import { skillGroups } from '@/data/skills'
import { cn } from '@/lib/utils'
import { Container, SectionHeading } from './portfolio/primitives'
import { Reveal } from './portfolio/reveal'

const icons: Record<string, React.ElementType> = {
  'mobile-engineering': Smartphone,
  'architecture-state': Layers,
  'backend-apis': Server,
  'cloud-data': Database,
  'payments-maps-media': CreditCard,
  'delivery-tooling': Rocket,
}

export default function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-border py-12 sm:py-16">
      <Container>
        <SectionHeading
          id="skills-title"
          eyebrow="Engineering Capabilities"
          title="The full stack behind a mobile product"
          description="Grouped by what they enable — from the widget tree to the release pipeline. Every item here has shipped in production."
        />

        <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.id] || Smartphone
            const isLead = i === 0
            return (
              <Reveal
                key={group.id}
                delay={(i % 3) * 60}
                className={cn('h-full bg-card', isLead && 'sm:col-span-2 lg:col-span-1')}
              >
                <div
                  className={cn(
                    'group flex h-full flex-col p-6 transition-colors duration-300 hover:bg-surface sm:p-7',
                    isLead && 'bg-ink text-ink-foreground hover:bg-ink',
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        'flex size-10 items-center justify-center rounded-xl bg-accent text-primary transition-transform duration-300 group-hover:-translate-y-0.5',
                        isLead && 'bg-white/10 text-ink-foreground',
                      )}
                    >
                      <Icon className="size-[18px]" aria-hidden="true" />
                    </span>
                    <span className={cn('font-mono text-[11px] text-muted-foreground', isLead && 'text-ink-foreground/60')}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className={cn('mt-6 text-base font-semibold text-foreground', isLead && 'text-ink-foreground')}>
                    {group.title}
                  </h3>
                  <p className={cn('mt-2 text-xs leading-relaxed text-muted-foreground', isLead && 'text-ink-foreground/70')}>
                    {group.description}
                  </p>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {group.skills.map((s) => (
                      <li
                        key={s.name}
                        className={cn('text-sm text-muted-foreground', isLead && 'text-ink-foreground/80')}
                      >
                        {s.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
