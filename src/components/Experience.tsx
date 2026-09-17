import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section"
      aria-labelledby="experience-title"
    >
      <div className="site-container">
        <div className="experience-intro">
          <p className="section-kicker">
            <span>04</span>
            Experience
          </p>
          <h2 id="experience-title" className="section-title">
            Production engineering & delivery ownership.
          </h2>
          <p>
            Professional software engineering tenure focused on cross-platform mobile delivery,
            dual-store release lifecycles, mobile-backend boundaries, and team practices.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((entry) => (
            <article className="experience-entry" key={`${entry.company}-${entry.role}`}>
              <div className="timeline-marker" aria-hidden="true">
                <span />
              </div>

              <header className="experience-header">
                <div>
                  <p className="experience-company">{entry.company}</p>
                  <h3>{entry.role}</h3>
                </div>
                <p className="experience-dates">{entry.dates}</p>
              </header>

              <div className="experience-overview">
                <div>
                  <p className="experience-summary-lead">{entry.summary}</p>
                  {entry.responsibilities && (
                    <div className="experience-responsibilities">
                      <span className="experience-responsibilities__title">
                        Core Engineering Scope:
                      </span>
                      <ul className="experience-responsibilities__list">
                        {entry.responsibilities.map((resp) => (
                          <li key={resp}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="experience-capabilities-panel">
                  <span className="experience-capabilities-panel__label">
                    Engineering Domains
                  </span>
                  <ul className="capability-list" role="list" aria-label="Role capabilities">
                    {entry.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="experience-delivered-banner">
                <span>Key Products Delivered at Bulk Bytes</span>
              </div>

              <div className="project-grid">
                {entry.projects.map((project, index) => (
                  <article className="experience-project" key={project.name}>
                    <header className="project-header">
                      <div>
                        <span className="project-number" aria-hidden="true">
                          0{index + 1}
                        </span>
                        <h4>{project.name}</h4>
                      </div>
                      {project.status ? (
                        <span className="project-status">
                          <i aria-hidden="true" />
                          {project.status}
                        </span>
                      ) : null}
                    </header>

                    <p className="project-summary">{project.summary}</p>

                    {project.metric ? <p className="project-metric">{project.metric}</p> : null}

                    <ul className="project-highlights">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>

                    <ul
                      className="stack-list"
                      role="list"
                      aria-label={`${project.name} technologies`}
                    >
                      {project.stack.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
