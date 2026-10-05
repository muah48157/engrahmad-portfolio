"use client";

import { useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { ArrowUpRight, CheckCircle2, Download, GitBranch, Layers, Server, Smartphone, Zap, Code2, ChevronDown } from 'lucide-react'
import { FlutterMark } from './portfolio/brand-icons'
import { Container, LinkButton } from './portfolio/primitives'
import { cn } from '@/lib/utils'

const layers = [
  { icon: Smartphone, name: 'Presentation', detail: 'Widgets · Screens', files: ['login_screen.dart', 'auth_button.dart'] },
  { icon: Layers, name: 'State', detail: 'BLoC / Cubit', files: ['auth_bloc.dart', 'auth_state.dart'] },
  { icon: GitBranch, name: 'Domain', detail: 'Use cases · Entities', files: ['login_usecase.dart', 'user_entity.dart'] },
  { icon: Server, name: 'Data', detail: 'Repository · Dio · Cache', files: ['auth_repository.dart', 'dio_client.dart'] },
]

function HeroVisual() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1); // Expand State by default

  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none pt-8 lg:pt-0" aria-hidden="true">
      {/* Dynamic Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/30 via-emerald-400/20 to-transparent blur-[80px] rounded-full pointer-events-none" />
      
      <div className="relative mx-auto w-[64%] max-w-[220px] rounded-[2.4rem] border border-foreground/10 bg-foreground p-[6px] shadow-2xl transition-transform duration-700 hover:-translate-y-2 hover:shadow-primary/20">
        <div className="relative flex flex-col overflow-hidden rounded-[2rem] bg-card" style={{ aspectRatio: '9 / 19.5' }}>
          <span className="absolute left-1/2 top-2.5 h-4 w-[32%] -translate-x-1/2 rounded-full bg-foreground z-10" />
          
          <div className="flex items-center justify-between px-5 pt-10">
            <span className="font-mono text-[10px] text-muted-foreground">lib/</span>
            <FlutterMark className="size-4 text-primary" />
          </div>
          
          <p className="px-5 pt-3 text-[14px] font-semibold leading-snug text-foreground">Clean Architecture</p>
          <p className="px-5 text-[11px] text-muted-foreground">Feature module · auth</p>

          <ol className="mt-5 flex flex-1 flex-col gap-2.5 px-4">
            {layers.map((layer, i) => {
              const isActive = activeIndex === i;
              return (
                <li 
                  key={layer.name} 
                  onClick={() => setActiveIndex(isActive ? null : i)}
                  className={cn(
                    "flex flex-col rounded-xl border bg-surface px-3 py-2.5 transition-all duration-300 cursor-pointer overflow-hidden group hover:border-primary/40",
                    isActive ? "border-primary/50 shadow-md shadow-primary/5" : "border-border hover:shadow-sm"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-lg shadow-sm border transition-colors",
                      isActive ? "bg-primary text-primary-foreground border-primary" : "bg-card text-primary border-border group-hover:border-primary/20"
                    )}>
                      <layer.icon className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={cn(
                        "block text-[12px] font-semibold transition-colors",
                        isActive ? "text-primary" : "text-foreground"
                      )}>{layer.name}</span>
                      <span className="block truncate text-[10px] text-muted-foreground">{layer.detail}</span>
                    </span>
                    <ChevronDown className={cn(
                      "size-3.5 text-muted-foreground transition-transform duration-300",
                      isActive ? "rotate-180 text-primary" : "group-hover:text-foreground"
                    )} />
                  </div>
                  
                  {/* Expandable Content */}
                  <div className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isActive ? "grid-rows-[1fr] opacity-100 mt-2.5" : "grid-rows-[0fr] opacity-0"
                  )}>
                    <div className="overflow-hidden">
                      <div className="flex flex-col gap-1.5 pt-2.5 border-t border-border/60">
                        {layer.files.map(f => (
                          <div key={f} className="flex items-center gap-2 text-[9.5px] text-muted-foreground font-mono bg-card rounded p-1.5 border border-border/50">
                             <Code2 className="size-3 text-primary/60 shrink-0" />
                             <span className="truncate">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>

          <div className="m-4 flex items-center gap-2 rounded-xl bg-primary px-3 py-3 text-primary-foreground shadow-lg shadow-primary/30">
            <CheckCircle2 className="size-4" />
            <span className="text-[11px] font-medium tracking-wide">Release build passing</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative overflow-hidden bg-background">
      {/* Decorative Grid and Gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" aria-hidden="true" />

      <Container className="relative grid items-center gap-6 pb-10 pt-8 sm:pt-12 lg:grid-cols-[1fr_0.85fr] lg:gap-8 lg:pb-12 lg:pt-12">
        <div className="flex flex-col items-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            Open to remote opportunities worldwide
          </div>

          <h1 id="hero-title" className="mt-5 text-balance text-5xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-6xl lg:text-[3.5rem] xl:text-[4rem]">
             Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
              Muhammad Ahmad
            </span>
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-lg font-medium text-foreground sm:text-xl">
            Flutter Developer / Mobile Software Engineer
          </p>

          <p className="mt-2 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            I build production-ready mobile applications with Flutter, from scalable
            architecture and APIs to payments, maps, backend integrations, and dual-store
            deployment.
          </p>

          <div className="mt-6 flex flex-col gap-3 w-full sm:w-auto sm:flex-row flex-wrap">
            <LinkButton 
              href="#projects" 
              className="px-6 py-5 text-sm bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg shadow-primary/25 transition-all hover:scale-105"
              onClick={() => trackEvent("project_open", { location: "hero_primary" })}
            >
              View My Work
              <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
            </LinkButton>
            <LinkButton 
              href="/resume.pdf" 
              variant="outline" 
              className="px-6 py-5 text-sm rounded-full border-border bg-card hover:bg-accent transition-all"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackEvent("resume_download", { mode: "view", location: "hero" })}
            >
              View Resume
              <ArrowUpRight className="ml-2 size-4" aria-hidden="true" />
            </LinkButton>
            <LinkButton 
              href="/resume.pdf" 
              variant="outline" 
              className="px-6 py-5 text-sm rounded-full border-border bg-card hover:bg-accent transition-all"
              download="Muhammad_Ahmad_Resume.pdf"
              onClick={() => trackEvent("resume_download", { mode: "download", location: "hero" })}
            >
              <Download className="mr-2 size-4" aria-hidden="true" />
              Download PDF
            </LinkButton>
          </div>
          
          {/* Replaced floating widgets with elegant inline stats */}
          <div className="mt-8 flex items-center gap-6 text-sm font-medium text-muted-foreground border-t border-border/50 pt-5">
            <div className="flex items-center gap-2">
              <Smartphone className="size-4 text-primary" />
              <span>Android & iOS Ready</span>
            </div>
            <div className="w-1 h-1 rounded-full bg-border" />
            <div className="flex items-center gap-2">
              <Zap className="size-4 text-primary" />
              <span>High Performance</span>
            </div>
          </div>

        </div>

        <HeroVisual />
      </Container>
    </section>
  )
}
