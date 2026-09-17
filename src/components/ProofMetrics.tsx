import { proofMetrics } from "@/data/metrics";

export default function ProofMetrics() {
  return (
    <section
      className="proof-metrics-section"
      aria-labelledby="proof-metrics-title"
    >
      <div className="site-container">
        <h2 id="proof-metrics-title" className="sr-only">
          Key Impact &amp; Engineering Metrics
        </h2>
        <ol className="proof-metrics-grid" role="list">
          {proofMetrics.map((metric, index) => (
            <li className="proof-metric-card" key={metric.id}>
              <div className="proof-metric-card__header">
                <span className="proof-metric-card__index" aria-hidden="true">
                  0{index + 1}
                </span>
                <span className="proof-metric-card__indicator" aria-hidden="true" />
              </div>
              <p className="proof-metric-card__value">{metric.value}</p>
              <h3 className="proof-metric-card__label">{metric.label}</h3>
              <p className="proof-metric-card__detail">{metric.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
