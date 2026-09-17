import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return projects
    .filter((project) => project.isFeatured && project.caseStudy)
    .map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return {
      title: "Project Not Found | Muhammad Ahmad",
    };
  }

  const siteUrl = "https://engrahmad.com";
  const pageTitle = `${project.title} — Case Study | Muhammad Ahmad`;
  const pageDescription = `${project.title}: ${project.summary}`;

  const ogImage = project.image ? `${siteUrl}${project.image}` : `${siteUrl}/og-image.jpg`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: `${siteUrl}/projects/${project.id}`,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `${siteUrl}/projects/${project.id}`,
      siteName: "Muhammad Ahmad",
      type: "article",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${project.title} Case Study Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  const appCategory =
    project.category.includes("Medical") || project.category.includes("Clinical")
      ? "MedicalApplication"
      : project.category.includes("EdTech")
        ? "EducationalApplication"
        : "BusinessApplication";

  const downloadUrls: string[] = [];
  if (project.links?.playStore) downloadUrls.push(project.links.playStore);
  if (project.links?.appStore) downloadUrls.push(project.links.appStore);

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.summary,
    applicationCategory: appCategory,
    operatingSystem: project.category.includes("Desktop") ? "Desktop" : "Mobile",
    author: {
      "@type": "Person",
      name: "Muhammad Ahmad",
      url: "https://engrahmad.com",
    },
    ...(downloadUrls.length > 0 ? { downloadUrl: downloadUrls } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <Navbar />
      <main id="main-content" className="case-study-page">
        <article className="site-container case-study-article">
          {/* Breadcrumb / Back Link */}
          <nav className="case-study-nav" aria-label="Case study breadcrumb">
            <Link href="/#projects" className="case-study-back-link">
              <span aria-hidden="true">←</span>
              <span>Back to Featured Projects</span>
            </Link>
          </nav>

          {/* Header */}
          <header className="case-study-header">
            <div className="case-study-header__identity">
              {project.icon && (
                <div className="case-study-header__icon-wrapper">
                  <Image
                    src={project.icon}
                    alt={`${project.title} app icon`}
                    width={56}
                    height={56}
                    className="case-study-header__icon"
                  />
                </div>
              )}
              <div>
                <p className="case-study-header__category">{project.category}</p>
                <h1 className="case-study-header__title">{project.title}</h1>
              </div>
            </div>

            <p className="case-study-header__summary">{project.summary}</p>

            <div className="case-study-header__badges">
              <span className="case-study-status-badge">
                <span className="status-dot" aria-hidden="true" />
                {project.links?.label || project.status}
              </span>
              <ul
                className="case-study-tech-pills"
                role="list"
                aria-label="Core technologies"
              >
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </header>

          {/* Visual Showcase Media */}
          {project.image && (
            <figure className="case-study-showcase-media">
              <div className="case-study-showcase-media__topbar">
                <span className="project-visual__indicator" aria-hidden="true" />
                <span>{project.visualLabel}</span>
                <span className="project-visual__mode">Verified Production Architecture</span>
              </div>
              <div className="case-study-showcase-media__canvas">
                <Image
                  src={project.image}
                  alt={project.imageAlt || `${project.title} production interface mockup`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 76rem"
                  className="case-study-showcase-media__img"
                  priority
                />
              </div>
            </figure>
          )}

          {/* Quick Facts Strip */}
          <section className="case-study-facts" aria-label="Project ownership and scope">
            <div className="case-study-fact">
              <span className="case-study-fact__label">Ownership</span>
              <p className="case-study-fact__value">{project.ownership}</p>
            </div>
            <div className="case-study-fact">
              <span className="case-study-fact__label">Domain</span>
              <p className="case-study-fact__value">{project.category}</p>
            </div>
            <div className="case-study-fact">
              <span className="case-study-fact__label">Store Status</span>
              <p className="case-study-fact__value">{project.status}</p>
            </div>
          </section>

          {/* Main Deep-Dive Content Sections */}
          <div className="case-study-body">
            {/* 1. Challenge */}
            <section className="case-study-section" aria-labelledby="section-challenge">
              <div className="case-study-section__header">
                <span className="section-kicker">
                  <span>01</span>
                  Challenge
                </span>
                <h2 id="section-challenge" className="case-study-section__title">
                  Product Constraints & Engineering Scope
                </h2>
              </div>
              <p className="case-study-section__lead">{caseStudy.challenge}</p>
            </section>

            {/* 2. Architecture & State Management */}
            <section className="case-study-section" aria-labelledby="section-architecture">
              <div className="case-study-section__header">
                <span className="section-kicker">
                  <span>02</span>
                  Architecture
                </span>
                <h2 id="section-architecture" className="case-study-section__title">
                  Mobile Architecture & State Patterns
                </h2>
              </div>
              <ul className="case-study-points-list" role="list">
                {caseStudy.architecture.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>

            {/* 3. API & Backend Boundary */}
            <section className="case-study-section" aria-labelledby="section-backend">
              <div className="case-study-section__header">
                <span className="section-kicker">
                  <span>03</span>
                  Integration
                </span>
                <h2 id="section-backend" className="case-study-section__title">
                  Backend, APIs & Platform Boundary
                </h2>
              </div>
              <ul className="case-study-points-list" role="list">
                {caseStudy.backendBoundary.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>

            {/* 4. Performance & Engineering Solutions */}
            <section className="case-study-section" aria-labelledby="section-performance">
              <div className="case-study-section__header">
                <span className="section-kicker">
                  <span>04</span>
                  Performance
                </span>
                <h2 id="section-performance" className="case-study-section__title">
                  Performance & Data Optimizations
                </h2>
              </div>
              <ul className="case-study-points-list" role="list">
                {caseStudy.performance.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>

            {/* 5. Measurable Outcomes & Ownership */}
            <section className="case-study-section" aria-labelledby="section-outcomes">
              <div className="case-study-section__header">
                <span className="section-kicker">
                  <span>05</span>
                  Outcomes
                </span>
                <h2 id="section-outcomes" className="case-study-section__title">
                  Verified Outcomes & Production Delivery
                </h2>
              </div>
              <ul className="case-study-points-list case-study-points-list--outcomes" role="list">
                {caseStudy.outcomes.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>
          </div>

          {/* Footer Actions */}
          <footer className="case-study-footer">
            <Link href="/#projects" className="button button--secondary">
              <span aria-hidden="true">←</span>
              <span>All Projects</span>
            </Link>
            <Link href="/#contact" className="button button--primary">
              <span>Discuss Mobile Engineering Opportunities</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </footer>
        </article>
      </main>
      <Footer />
    </>
  );
}
