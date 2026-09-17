const achievements = [
  {
    label: "Product Reach",
    value: "1K+",
    detail: "Google Play downloads for U-Track Lite.",
    metric: true,
  },
  {
    label: "Performance",
    value: "~40%",
    detail: "Load-time improvement delivered for U-Track Lite.",
    metric: true,
  },
  {
    label: "Store Delivery",
    value: "Android + iOS",
    detail:
      "Personally handled Google Play releases for multiple Flutter applications and the Apple App Store release for MRCP.",
  },
  {
    label: "Team Leadership",
    value: "4-member team",
    detail: "Led the development team responsible for KAIMS mobile delivery.",
  },
  {
    label: "Company Recognition",
    value: "Recognized at Bulk Bytes",
    detail: "Received Employee of the Month and Overall Performance recognition.",
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
            <span>08</span>
            Achievements
          </p>
          <h2 id="achievements-title" className="section-title">
            Outcomes that reflect real product ownership.
          </h2>
          <p>
            A concise record of product reach, delivery responsibility, performance work,
            leadership, and recognition earned while building production software.
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
