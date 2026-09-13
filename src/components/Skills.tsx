import { skillGroups } from "@/data/skills";

const capabilities = [
  "Mobile architecture",
  "API integration",
  "Payments",
  "Real-time location",
  "Production deployment",
  "Backend collaboration",
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section" aria-labelledby="skills-title">
      <div className="site-container">
        <header className="skills-intro">
          <p className="section-kicker">
            <span>04</span>
            Skills
          </p>
          <h2 id="skills-title" className="section-title">
            Engineering capabilities across mobile, APIs, and product delivery.
          </h2>
          <p>
            Technologies and practical engineering approaches used across production mobile
            applications and the backend systems that support them.
          </p>
        </header>

        <ul className="skills-capability-strip" role="list" aria-label="Core capabilities">
          {capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>

        <ol className="skills-grid">
          {skillGroups.map((group, index) => (
            <li className="skills-group" key={group.id}>
              <article aria-labelledby={`${group.id}-title`}>
                <div className="skills-group__heading">
                  <span aria-hidden="true">0{index + 1}</span>
                  <h3 id={`${group.id}-title`}>{group.title}</h3>
                </div>
                <p>{group.description}</p>

                <ul className="skills-tags" role="list" aria-label={`${group.title} skills`}>
                  {group.skills.map((skill) => (
                    <li className={skill.featured ? "skills-tag--featured" : undefined} key={skill.name}>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
