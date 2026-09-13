import { projects, type FeaturedProject } from "@/data/projects";

function ProjectVisual({ project, index }: { project: FeaturedProject; index: number }) {
  return (
    <div
      className={`project-case-study__visual project-visual--${project.visual}`}
      aria-hidden="true"
    >
      <div className="project-visual__topbar">
        <span className="project-visual__indicator" />
        <span>{project.visualLabel}</span>
        <span className="project-visual__mode">0{index + 1}</span>
      </div>
      <div className="project-visual__canvas">
        <div className="project-visual__primary">
          <span className="project-visual__primary-line" />
          <span className="project-visual__primary-line" />
          <span className="project-visual__primary-line" />
        </div>
        <div className="project-visual__secondary">
          <span />
          <span />
          <span />
        </div>
        <div className="project-visual__signal">
          {Array.from({ length: 9 }, (_, index) => (
            <span key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="section featured-projects-section"
      aria-labelledby="projects-title"
    >
      <div className="site-container">
        <header className="featured-projects-intro">
          <p className="section-kicker">
            <span>03</span>
            Projects
          </p>
          <h2 id="projects-title" className="section-title">
            Selected work across mobile, backend, and product engineering.
          </h2>
          <p>
            Production-focused products demonstrating mobile architecture, store delivery,
            platform integrations, and hands-on backend collaboration.
          </p>
        </header>

        <ol className="featured-projects-list">
          {projects.map((project, index) => (
            <li className="featured-project-item" key={project.id}>
              <article className="project-case-study" aria-labelledby={`${project.id}-title`}>
                <div className="project-case-study__content">
                  <div className="project-case-study__meta">
                    <span className="project-case-study__number">0{index + 1}</span>
                    <span className="project-case-study__category">{project.category}</span>
                  </div>

                  <h3 id={`${project.id}-title`}>{project.title}</h3>
                  <p className="project-case-study__summary">{project.summary}</p>

                  <div className="project-case-study__ownership">
                    <span>Ownership</span>
                    <p>{project.ownership}</p>
                  </div>

                  <ul className="project-case-study__highlights">
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>

                  <div className="project-case-study__footer">
                    <ul
                      className="project-case-study__stack"
                      role="list"
                      aria-label={`${project.title} technologies`}
                    >
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <p className="project-case-study__status">
                      <span aria-hidden="true" />
                      {project.status}
                    </p>
                  </div>
                </div>

                <ProjectVisual project={project} index={index} />
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
