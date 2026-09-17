import { additionalProjects } from "@/data/projects";

export default function AdditionalProjects() {
  return (
    <section
      id="additional-projects"
      className="section additional-projects-section"
      aria-labelledby="additional-projects-title"
    >
      <div className="site-container">
        <header className="additional-projects-intro">
          <p className="section-kicker">
            <span>07</span>
            Additional Projects
          </p>
          <h2 id="additional-projects-title" className="section-title">
            Supporting mobile applications and workflow utilities.
          </h2>
          <p>
            Focused products built and released for small-business billing, document workflows,
            media commerce, and payment integrations.
          </p>
        </header>

        <ol className="additional-projects-grid" role="list">
          {additionalProjects.map((project, index) => (
            <li className="additional-project-card" key={project.id}>
              <article aria-labelledby={`add-proj-${project.id}`}>
                <div className="additional-project-card__header">
                  <span className="additional-project-card__number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <p className="additional-project-card__category">{project.category}</p>
                </div>

                <h3 id={`add-proj-${project.id}`} className="additional-project-card__title">
                  {project.title}
                </h3>

                <p className="additional-project-card__summary">{project.summary}</p>

                <div className="additional-project-card__ownership">
                  <span>Ownership:</span>
                  <p>{project.ownership}</p>
                </div>

                <ul className="additional-project-card__highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="additional-project-card__footer">
                  <ul
                    className="additional-project-card__stack"
                    role="list"
                    aria-label={`${project.title} technologies`}
                  >
                    {project.technologies.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  <p className="additional-project-card__status">
                    <span aria-hidden="true" />
                    {project.links?.label || project.status}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
