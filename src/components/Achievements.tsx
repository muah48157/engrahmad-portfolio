const achievements = [
  {
    label: "Engineering Recognition",
    value: "Bulk Bytes Honors",
    detail:
      "Awarded Employee of the Month and Overall Performance recognition for engineering execution and mobile delivery.",
    metric: false,
  },
  {
    label: "Store Release Lifecycle",
    value: "Google Play & App Store",
    detail:
      "Managed end-to-end store publishing, signing, and review compliance across both Android and iOS ecosystems.",
    metric: false,
  },
];

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="section achievements-section"
      aria-labelledby="achievements-title"
    >
      <div className="site-container">
        <header className="achievements-intro">
          <p className="section-kicker">
            <span>07</span>
            Recognition &amp; Milestones
          </p>
          <h2 id="achievements-title" className="section-title">
            Verified engineering recognition and store publishing track record.
          </h2>
          <p>
            Key workplace honors and delivery responsibility earned while architecting and
            releasing production software.
          </p>
        </header>

        <ol className="achievement-list">
          {achievements.map((achievement, index) => (
            <li
              className={`achievement-item ${achievement.metric ? "achievement-item--metric" : ""}`}
              key={achievement.label}
            >
              <article>
                <div className="achievement-item__meta">
                  <span aria-hidden="true">0{index + 1}</span>
                  <p>{achievement.label}</p>
                </div>
                <h3>{achievement.value}</h3>
                <p>{achievement.detail}</p>
              </article>
            </li>
          ))}
        </ol>

        <p className="achievement-ownership">
          <span aria-hidden="true" />
          Built multiple mobile applications from initial development through production
          deployment.
        </p>
      </div>
    </section>
  );
}
