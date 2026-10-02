"use client";

import { trackEvent } from "@/lib/analytics";
import { ArrowUpRight, CheckCircle2, Download, GitBranch, Layers, Server, Smartphone, Zap } from 'lucide-react'
import { FlutterMark } from './portfolio/brand-icons'
import { Container, LinkButton } from './portfolio/primitives'

const layers = [
  { icon: Smartphone, name: 'Presentation', detail: 'Widgets · Screens' },
  { icon: Layers, name: 'State', detail: 'BLoC / Cubit' },
  { icon: GitBranch, name: 'Domain', detail: 'Use cases · Entities' },
  { icon: Server, name: 'Data', detail: 'Repository · Dio · Cache' },
]

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none" aria-hidden="true">
      <div className="absolute inset-6 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative mx-auto w-[64%] max-w-[260px] rounded-[2.4rem] border border-foreground/10 bg-foreground p-[6px] shadow-[0_40px_80px_-40px_rgba(15,40,50,0.55)] transition-transform duration-700 hover:-translate-y-1">
        <div className="relative flex aspect-[9/19.5] flex-col overflow-hidden rounded-[2rem] bg-card">
          <span className="absolute left-1/2 top-2.5 h-4 w-[32%] -translate-x-1/2 rounded-full bg-foreground" />
          <div className="flex items-center justify-between px-5 pt-10">
            <span className="font-mono text-[10px] text-muted-foreground">lib/</span>
            <FlutterMark className="size-4 text-primary" />
          </div>
          <p className="px-5 pt-3 text-[13px] font-semibold leading-snug text-foreground">Clean Architecture</p>
          <p className="px-5 text-[10px] text-muted-foreground">Feature module · auth</p>

          <ol className="mt-4 flex flex-1 flex-col gap-2 px-3.5">
            {layers.map((layer, i) => (
              <li key={layer.name} className="flex items-center gap-2.5 rounded-xl border border-border bg-surface px-2.5 py-2">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-card text-primary shadow-xs">
                  <layer.icon className="size-3.5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold text-foreground">{layer.name}</span>
                  <span className="block truncate text-[9.5px] text-muted-foreground">{layer.detail}</span>
                </span>
                <span className="ml-auto font-mono text-[9px] text-muted-foreground">0{i + 1}</span>
              </li>
            ))}
          </ol>

          <div className="m-3.5 flex items-center gap-2 rounded-xl bg-primary px-3 py-2.5 text-primary-foreground">
            <CheckCircle2 className="size-3.5" />
            <span className="text-[10.5px] font-medium">Release build passing</span>
          </div>
        </div>
      </div>

      <div className="absolute left-0 top-[14%] rounded-xl border border-border bg-card/95 px-3 py-2.5 shadow-lg shadow-foreground/5 backdrop-blur sm:left-[2%]">
        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Targets</p>
        <p className="mt-0.5 text-xs font-semibold text-foreground">Android · iOS</p>
      </div>

      <div className="absolute bottom-[16%] right-0 rounded-xl border border-border bg-card/95 px-3 py-2.5 shadow-lg shadow-foreground/5 backdrop-blur sm:right-[2%]">
        <div className="flex items-center gap-2">
          <span className="flex size-6 items-center justify-center rounded-md bg-accent text-primary">
            <Zap className="size-3.5" />
          </span>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Load time</p>
            <p className="text-xs font-semibold text-foreground">~40% faster</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_30%,black,transparent)]"
      />
      <Container className="relative grid items-center gap-10 pb-12 pt-8 sm:pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-14 lg:pt-12">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/50 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to remote opportunities worldwide
          </p>

          <h1 id="hero-title" className="mt-6 text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
            {"Hi, I'm"}
            <span className="block text-primary">Muhammad Ahmad</span>
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-foreground sm:text-lg font-medium">
            Flutter Developer / Mobile Software Engineer
          </p>

          <p className="mt-2 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
            I build production-ready mobile applications with Flutter, from scalable
            architecture and APIs to payments, maps, backend integrations, and dual-store
            deployment.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row flex-wrap">
            <LinkButton 
              href="#projects" 
              onClick={() => trackEvent("project_open", { location: "hero_primary" })}
            >
              View My Work
              <ArrowUpRight aria-hidden="true" />
            </LinkButton>
            <LinkButton 
              href="/resume.pdf" 
              variant="outline" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent("resume_download", { mode: "view", location: "hero" })}
            >
              View Resume
              <ArrowUpRight aria-hidden="true" />
            </LinkButton>
            <LinkButton 
              href="/resume.pdf" 
              variant="outline" 
              download="Muhammad_Ahmad_Resume.pdf"
              onClick={() => trackEvent("resume_download", { mode: "download", location: "hero" })}
            >
              Download Resume
              <Download aria-hidden="true" />
            </LinkButton>
          </div>
        </div>

        <HeroVisual />
      </Container>
    </section>
  )
}
