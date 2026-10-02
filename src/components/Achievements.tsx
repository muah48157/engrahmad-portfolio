import { Award, Smartphone, Trophy } from 'lucide-react'
import { Container, SectionHeading } from './portfolio/primitives'
import { Reveal } from './portfolio/reveal'

const achievements = [
  {
    type: "Engineering Recognition",
    title: "Bulk Bytes Honors",
    detail:
      "Awarded Employee of the Month and Overall Performance recognition for engineering execution and mobile delivery.",
    icon: Trophy,
  },
  {
    type: "Store Release Lifecycle",
    title: "Google Play & App Store",
    detail:
      "Managed end-to-end store publishing, signing, and review compliance across both Android and iOS ecosystems.",
    icon: Smartphone,
  },
];

export default function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-title" className="border-t border-border bg-surface py-12 sm:py-16">
      <Container>
        <SectionHeading
          id="achievements-title"
          eyebrow="Achievements & Milestones"
          title="Recognition & verified outcomes"
          description="Verified engineering recognition and store publishing track record."
        />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-2">
          {achievements.map((a, i) => {
            const Icon = a.icon ?? Award
            return (
              <li key={a.title}>
                <Reveal delay={(i % 3) * 60}>
                  <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 h-full">
                    <div className="flex items-center gap-4">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{a.type}</p>
                        <p className="mt-0.5 font-semibold text-foreground">{a.title}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {a.detail}
                    </p>
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
