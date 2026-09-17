"use client";

import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { trackEvent } from "@/lib/analytics";

export default function CaseStudiesPreview() {
  return (
    <section
      id="case-studies"
      className="section case-studies-preview-section"
      aria-labelledby="case-studies-preview-title"
    >
      <div className="site-container">
        <header className="case-studies-preview-intro">
          <p className="section-kicker">
            <span>06</span>
            Technical Case Studies
          </p>
          <h2 id="case-studies-preview-title" className="section-title">
            Architectural decisions, backend boundaries, and measurable outcomes.
          </h2>
          <p>
            Compact architectural snapshots of selected production systems. Explore each
            dedicated case study for in-depth state patterns, API contracts, and delivery details.
          </p>
        </header>

        <ol className="case-studies-preview-grid" role="list">
          {featuredProjects.map((project, index) => (
            <li className="case-study-preview-card" key={project.id}>
              <article aria-labelledby={`cs-preview-${project.id}`}>
                <div className="case-study-preview-card__header">
                  <span className="case-study-preview-card__number" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <p className="case-study-preview-card__category">{project.category}</p>
                </div>

                <h3 id={`cs-preview-${project.id}`} className="case-study-preview-card__title">
                  {project.title}
                </h3>

                <p className="case-study-preview-card__challenge">
                  {project.caseStudy?.challenge}
                </p>

                <div className="case-study-preview-card__focus">
                  <span className="case-study-preview-card__focus-label">Architecture Core:</span>
                  <p>{project.caseStudy?.architecture[0]}</p>
                </div>

                <div className="case-study-preview-card__footer">
                  <ul
                    className="case-study-preview-card__tags"
                    role="list"
                    aria-label={`${project.title} key stack`}
                  >
                    {project.technologies.slice(0, 4).map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>

                  {project.caseStudyPath && (
                    <Link
                      href={project.caseStudyPath}
                      className="case-study-preview-card__cta"
                      onClick={() =>
                        trackEvent("case_study_open", {
                          project_id: project.id,
                          source: "homepage_preview",
                        })
                      }
                    >
                      <span>Explore Case Study</span>
                      <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
