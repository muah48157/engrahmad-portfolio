import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

function EmptySlot({ label, ratio }: { label: string; ratio: string }) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[repeating-linear-gradient(135deg,var(--surface)_0_10px,var(--card)_10px_20px)] p-4 text-center">
      <span className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground">
        <ImageIcon className="size-4" aria-hidden="true" />
      </span>
      <span className="text-[11px] font-medium text-foreground">{label}</span>
      <span className="font-mono text-[10px] text-muted-foreground">{ratio}</span>
    </div>
  )
}

/** Phone frame with a 9:19.5 screen. Screenshots render with object-cover at native ratio. */
export function PhoneFrame({
  src,
  alt,
  className,
  label = 'App screenshot',
}: {
  src?: string
  alt: string
  className?: string
  label?: string
}) {
  return (
    <div
      className={cn(
        'relative w-full rounded-[2rem] border border-foreground/10 bg-foreground/[0.92] p-[5px] shadow-[0_20px_40px_-24px_rgba(15,40,50,0.45)]',
        className,
      )}
    >
      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.65rem] bg-card">
        {src ? (
          <Image src={src} alt={alt} fill sizes="(max-width: 768px) 45vw, 220px" className="object-cover object-top" />
        ) : (
          <EmptySlot label={label} ratio="1080 × 2340" />
        )}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-2 h-[14px] w-[30%] -translate-x-1/2 rounded-full bg-foreground/90"
        />
      </div>
    </div>
  )
}

/** Desktop window frame with a 16:10 viewport. */
export function DesktopFrame({
  src,
  alt,
  className,
  title = 'ClinNote AI',
}: {
  src?: string
  alt: string
  className?: string
  title?: string
}) {
  return (
    <div
      className={cn(
        'w-full overflow-hidden rounded-xl border border-border bg-card shadow-[0_24px_48px_-28px_rgba(15,40,50,0.4)]',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-surface px-3 py-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </div>
        <span className="mx-auto truncate text-[11px] font-medium text-muted-foreground">{title}</span>
        <span className="w-10" aria-hidden="true" />
      </div>
      <div className="relative aspect-[16/10]">
        {src ? (
          <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 900px" className="object-cover object-top" />
        ) : (
          <EmptySlot label="Desktop screenshot" ratio="2560 × 1600" />
        )}
      </div>
    </div>
  )
}
