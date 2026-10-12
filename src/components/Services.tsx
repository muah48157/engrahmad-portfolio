import { Smartphone, Layers, Code2 } from 'lucide-react'
import { Container, SectionHeading } from './portfolio/primitives'
import { Reveal } from './portfolio/reveal'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Smartphone,
    title: 'End-to-End App Development',
    description: 'I build robust, production-ready mobile applications for both iOS and Android from a single Flutter codebase. From concept to app store deployment.',
  },
  {
    icon: Layers,
    title: 'App Architecture & Scaling',
    description: 'I restructure and optimize existing Flutter codebases. I implement Clean Architecture, advanced state management (BLoC), and automated CI/CD pipelines.',
  },
  {
    icon: Code2,
    title: 'UI/UX to Pixel-Perfect Code',
    description: 'I convert complex Figma designs into highly responsive, animated, and performant Flutter interfaces that look and feel completely native.',
  }
]

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-border bg-background py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="services-title"
          eyebrow="My Services"
          title="How I can help you"
          description="Specialized Flutter engineering services to bring your mobile product to life."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100} className="h-full">
              <div className="group relative flex h-full flex-col rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-8">
                <div className="mb-6 flex size-12 items-center justify-center rounded-2xl bg-surface border border-border shadow-sm transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                  <service.icon className="size-6 transition-colors text-primary group-hover:text-primary-foreground" />
                </div>
                
                <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                
                {/* Decorative glowing gradient effect on hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 rounded-3xl group-hover:opacity-100" aria-hidden="true" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
