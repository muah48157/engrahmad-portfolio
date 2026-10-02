import type { ComponentProps, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto w-full max-w-6xl px-5 sm:px-8', className)} {...props} />
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn('flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-primary', className)}>
      <span aria-hidden="true" className="h-px w-5 bg-primary/60" />
      {children}
    </p>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  action,
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
  action?: ReactNode
}) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 id={id} className="mt-4 text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{description}</p>
        ) : null}
      </div>
      {action}
    </div>
  )
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-border bg-card px-2 py-0.5 text-xs font-medium text-muted-foreground',
        className,
      )}
    >
      {children}
    </span>
  )
}

const buttonBase =
  'inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-all duration-200 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px [&_svg]:size-4 [&_svg]:shrink-0'

export function LinkButton({
  variant = 'primary',
  className,
  ...props
}: ComponentProps<'a'> & { variant?: 'primary' | 'outline' | 'ghost' }) {
  return (
    <a
      className={cn(
        buttonBase,
        variant === 'primary' &&
          'bg-primary text-primary-foreground shadow-sm shadow-primary/20 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/25',
        variant === 'outline' && 'border border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary',
        variant === 'ghost' && 'text-foreground hover:bg-accent hover:text-accent-foreground',
        className,
      )}
      {...props}
    />
  )
}
