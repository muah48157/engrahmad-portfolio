import { ArrowUpRight, Download, FileText, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './portfolio/brand-icons'
import { Container, Eyebrow, LinkButton } from './portfolio/primitives'
import { Reveal } from './portfolio/reveal'

const profile = {
  name: 'Muhammad Ahmad',
  title: 'Flutter Developer / Mobile Software Engineer',
  email: 'muah48157@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammad-ahmad5556/',
  linkedinLabel: 'muhammad-ahmad5556',
  github: 'https://github.com/muah48157',
  githubLabel: 'muah48157',
  resume: '/resume.pdf',
}

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: profile.githubLabel, href: profile.github },
  { icon: FileText, label: 'Resume', value: 'Download PDF', href: profile.resume },
]

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-12 sm:py-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-14">
            <div
              aria-hidden="true"
              className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_80%_at_100%_0%,black,transparent)]"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div className="flex flex-col">
                <Eyebrow>Get In Touch</Eyebrow>
                <h2 id="contact-title" className="mt-4 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {"Let's Work Together"}
                </h2>
                <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
                  Open to remote opportunities worldwide.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-auto lg:pt-10">
                  <LinkButton href={`mailto:${profile.email}`}>
                    Get In Touch
                    <ArrowUpRight aria-hidden="true" />
                  </LinkButton>
                  <LinkButton href={profile.resume} variant="outline" download="Muhammad_Ahmad_Resume.pdf">
                    Download Resume
                    <Download aria-hidden="true" />
                  </LinkButton>
                </div>
              </div>

              <ul className="divide-y divide-border rounded-2xl border border-border bg-background/60">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-4 p-4 transition-colors hover:bg-accent/50 sm:p-5"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-primary">
                        <c.icon className="size-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs text-muted-foreground">{c.label}</span>
                        <span className="block truncate text-sm font-medium text-foreground">{c.value}</span>
                      </span>
                      <ArrowUpRight
                        className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
