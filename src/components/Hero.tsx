const credibility = [
  "Production Mobile Apps",
  "Android & iOS Deployment",
  "Flutter + Backend APIs",
  "Google Play & App Store",
];

const technologies = ["Flutter", "Dart", "BLoC", "Firebase", "Supabase", "Node.js"];

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="site-container hero-layout">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span />
            Hello, I&apos;m
          </p>

          <h1 id="hero-title" className="hero-heading">
            Muhammad Ahmad
          </h1>

          <p className="hero-role">
            Flutter Developer
            <span aria-hidden="true"> / </span>
            <span>Mobile Software Engineer</span>
          </p>

          <p className="hero-summary">
            I build production-ready mobile applications with Flutter, from scalable
            architecture and APIs to payments, maps, backend integrations, and app-store
            deployment.
          </p>

          <p className="hero-proof">
            From mobile architecture to production release, I build applications designed
            for real users and real-world constraints.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href="#projects">
              View My Work
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button--secondary"
              href="/resume.pdf"
              download="Muhammad_Ahmad_Resume.pdf"
              aria-label="Download Muhammad Ahmad's Resume (PDF)"
            >
              Download Resume
              <span className="download-mark" aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="#contact">
              Let&apos;s Talk
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div
          className="hero-visual"
          role="img"
          aria-label="Mobile application architecture illustration"
        >
          <div className="visual-orbit visual-orbit--one" aria-hidden="true" />
          <div className="visual-orbit visual-orbit--two" aria-hidden="true" />
          <div className="architecture-card architecture-card--api" aria-hidden="true">
            <span className="architecture-card__icon">API</span>
            <span>Data layer</span>
            <i />
          </div>
          <div className="phone-frame" aria-hidden="true">
            <div className="phone-topbar">
              <span>9:41</span>
              <div><i /><i /><i /></div>
            </div>
            <div className="phone-appbar">
              <span className="phone-logo">M</span>
              <span className="phone-avatar" />
            </div>
            <div className="phone-copy">
              <span>OVERVIEW</span>
              <strong>Mobile product</strong>
              <p>Built for production</p>
            </div>
            <div className="phone-chart">
              <span className="chart-line chart-line--one" />
              <span className="chart-line chart-line--two" />
              <span className="chart-line chart-line--three" />
              <span className="chart-line chart-line--four" />
              <span className="chart-line chart-line--five" />
            </div>
            <div className="phone-modules">
              <span><i />Payments</span>
              <span><i />Maps</span>
            </div>
          </div>
          <div className="architecture-card architecture-card--release" aria-hidden="true">
            <span className="status-dot" />
            <span>
              <small>RELEASE</small>
              Production ready
            </span>
          </div>
          <div className="visual-caption" aria-hidden="true">
            <span>01</span>
            ENGINEERED FOR MOBILE
          </div>
        </div>
      </div>

      <div className="site-container hero-footer">
        <ul className="credibility-list" role="list" aria-label="Mobile development capabilities">
          {credibility.map((item) => (
            <li key={item}>
              <span aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <div className="technology-row" aria-label="Core technologies">
          <span>Core stack</span>
          <ul role="list">
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
