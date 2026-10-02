import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './portfolio/brand-icons'
import { Container } from './portfolio/primitives'

const profile = {
  name: 'Muhammad Ahmad',
  title: 'Flutter Developer / Mobile Software Engineer',
  initials: 'MA',
  email: 'muah48157@gmail.com',
  linkedin: 'https://www.linkedin.com/in/muhammad-ahmad5556/',
  github: 'https://github.com/muah48157',
}

export default function Footer() {
  const socials = [
    { label: 'LinkedIn', href: profile.linkedin, icon: LinkedinIcon },
    { label: 'GitHub', href: profile.github, icon: GithubIcon },
    { label: 'Email', href: `mailto:${profile.email}`, icon: Mail },
  ]
  return (
    <footer className="bg-ink text-ink-foreground">
      <Container className="py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex size-11 items-center justify-center rounded-xl bg-ink-foreground text-sm font-semibold text-ink">
              {profile.initials}
            </span>
            <div>
              <p className="font-semibold">{profile.name}</p>
              <p className="text-sm text-ink-foreground/65">{profile.title}</p>
            </div>
          </div>
          <ul className="flex gap-2">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-full border border-white/15 text-ink-foreground/80 transition-colors hover:border-white/40 hover:text-white"
                >
                  <s.icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-ink-foreground/55 sm:flex-row sm:justify-between">
          <p>{`© ${new Date().getFullYear()} ${profile.name}. All rights reserved.`}</p>
          <p>Flutter · Android · iOS · Desktop</p>
        </div>
      </Container>
    </footer>
  )
}
