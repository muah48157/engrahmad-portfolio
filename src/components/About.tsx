const highlights = [
  {
    title: "End-to-End App Ownership",
    detail: "Built multiple applications from initial architecture through production deployment.",
  },
  {
    title: "Android & iOS Deployment",
    detail: "Published applications on Google Play and released MRCP on the Apple App Store.",
  },
  {
    title: "Flutter + Backend Integration",
    detail: "Connects mobile products with APIs, payments, data, media, and platform services.",
  },
  {
    title: "Team Leadership",
    detail: "Led a four-member development team while delivering the KAIMS platform.",
  },
];

export default function About() {
  return (
    <section id="about" className="section about-section" aria-labelledby="about-title">
      <div className="site-container">
        <div className="section-heading-grid">
          <div>
            <p className="section-kicker">
              <span>01</span>
              About
            </p>
            <h2 id="about-title" className="section-title">
              Engineering mobile products from idea to release.
            </h2>
          </div>

          <div className="about-copy">
            <p className="about-lead">
              I&apos;m a Flutter Developer and Mobile Software Engineer focused on building
              production-ready applications—from initial architecture and feature delivery
              to backend integration, testing, deployment, and post-release improvement.
            </p>
            <p>
              My work spans e-learning, fleet tracking, university management, commerce,
              invoicing, business operations, and AI-powered software. I primarily use
              Flutter and Dart with BLoC/Cubit, GetX, REST APIs, Firebase, Supabase, SQLite,
              payments, maps and GPS, protected media, and document workflows.
            </p>
            <p>
              Hands-on API experience with Node.js, Express, MongoDB, and PHP helps me work
              effectively across the mobile and backend boundary while keeping the product
              experience as the priority.
            </p>
          </div>
        </div>

        <ul className="about-highlights" role="list" aria-label="Professional highlights">
          {highlights.map((highlight, index) => (
            <li key={highlight.title}>
              <span className="highlight-index" aria-hidden="true">
                0{index + 1}
              </span>
              <div>
                <h3>{highlight.title}</h3>
                <p>{highlight.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
