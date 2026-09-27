"use client";

import Link from "next/link";
import Image from "next/image";
import {
  featuredProjects,
  getProjectPresentation,
  type ProjectItem,
} from "@/data/projects";
import { trackEvent } from "@/lib/analytics";

function ProjectVisual({ project, index }: { project: ProjectItem; index: number }) {
  const presentation = getProjectPresentation(project);
  const isMobile = presentation.isMobile;

  return (
    <div
      className={`project-case-study__visual project-visual--${project.visual} ${
        project.image ? "project-case-study__visual--has-image" : ""
      } ${isMobile ? "project-visual--mobile" : "project-visual--desktop"}`}
      style={
        {
          "--screenshot-ratio": `${presentation.aspectRatio}`,
          "--visual-max-width": presentation.maxWidth,
        } as React.CSSProperties
      }
    >
      <div className="project-visual__topbar">
        <span className="project-visual__indicator" />
        <span>{project.visualLabel}</span>
        <span className="project-visual__mode">0{index + 1}</span>
      </div>

      {project.image ? (
        <div className="project-visual__media">
          <Image
            src={project.image}
            alt={project.imageAlt || `${project.title} interface view`}
            fill
            sizes={
              isMobile
                ? "(max-width: 768px) 85vw, 320px"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
            }
            className="project-visual__img"
            priority={index === 0}
          />
          <div className="project-visual__overlay" aria-hidden="true" />
        </div>
      ) : (
        <div className="project-visual__canvas" aria-hidden="true">
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
            {Array.from({ length: 9 }, (_, idx) => (
              <span key={idx} />
            ))}
          </div>
        </div>
      )}
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
            Featured Projects
          </p>
          <h2 id="projects-title" className="section-title">
            Flagship production applications across mobile, APIs, and product delivery.
          </h2>
          <p>
            Key mobile products demonstrating scalable architecture, dual-store release
            management, platform integrations, and hands-on backend execution.
          </p>
        </header>

        <ol className="featured-projects-list">
          {featuredProjects.map((project, index) => (
            <li className="featured-project-item" key={project.id}>
              <article className="project-case-study" aria-labelledby={`${project.id}-title`}>
                <div className="project-case-study__content">
                  <div className="project-case-study__header">
                    {project.icon && (
                      <div className="project-case-study__icon-wrapper">
                        <Image
                          src={project.icon}
                          alt={`${project.title} app icon`}
                          width={48}
                          height={48}
                          className="project-case-study__icon"
                        />
                      </div>
                    )}
                    <div className="project-case-study__header-text">
                      <div className="project-case-study__meta">
                        <span className="project-case-study__number">0{index + 1}</span>
                        <span className="project-case-study__category">{project.category}</span>
                      </div>
                      <h3 id={`${project.id}-title`}>{project.title}</h3>
                    </div>
                  </div>

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

                    <div className="project-case-study__actions">
                      {project.caseStudyPath && (
                        <Link
                          href={project.caseStudyPath}
                          className="project-case-study__case-study-link"
                          onClick={() =>
                            trackEvent("case_study_open", {
                              project_id: project.id,
                              source: "featured_card",
                            })
                          }
                        >
                          Read Full Case Study
                          <span aria-hidden="true">→</span>
                        </Link>
                      )}
                      <p className="project-case-study__status">
                        <span aria-hidden="true" />
                        {project.links?.label || project.status}
                      </p>
                    </div>
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
