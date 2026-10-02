import { proofMetrics } from "@/data/metrics";
import { Container } from './portfolio/primitives'

export default function ProofMetrics() {
  return (
    <section aria-label="Proof of work" className="border-y border-border bg-card">
      <Container>
        <dl className="grid grid-cols-2 lg:grid-cols-4">
          {proofMetrics.map((item, i) => (
            <div
              key={item.id}
              className={[
                'flex flex-col gap-1 py-6 sm:py-8',
                i % 2 === 1 ? 'pl-5 sm:pl-8' : 'pr-5 sm:pr-8',
                i % 2 === 1 ? 'border-l border-border' : '',
                i >= 2 ? 'border-t border-border lg:border-t-0' : '',
                'lg:px-8 lg:first:pl-0',
                i === 2 ? 'lg:border-l' : '',
              ].join(' ')}
            >
              <dt className="order-2 text-sm font-medium text-foreground">{item.label}</dt>
              <dd className="order-1 text-2xl font-semibold tracking-tight text-primary sm:text-3xl">{item.value}</dd>
              <dd className="order-3 font-mono text-[11px] text-muted-foreground mt-2 leading-relaxed">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
