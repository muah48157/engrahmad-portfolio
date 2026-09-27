export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  company?: string;
};

// TODO: Add verified client or engineering manager recommendation quote here (1-2 quotes max).
// Example:
// {
//   quote: "Muhammad Ahmad demonstrated outstanding ownership over our mobile client...",
//   author: "Engineering Lead",
//   role: "Head of Product",
//   company: "Bulk Bytes"
// }
const verifiedTestimonials: TestimonialItem[] = [];

export default function Testimonial() {
  if (verifiedTestimonials.length === 0) {
    return (
      /* TESTIMONIAL PLACEHOLDER / TODO:
       * When a client or engineering manager recommendation quote is provided,
       * populate verifiedTestimonials above to render the endorsement card.
       */
      <div
        className="testimonial-placeholder"
        data-testid="testimonial-placeholder"
        style={{ display: "none" }}
        aria-hidden="true"
      >
        {/* Ready for client/manager testimonial quote */}
      </div>
    );
  }

  return (
    <aside className="section testimonial-section" aria-label="Client &amp; Team Endorsement">
      <div className="site-container">
        <div className="testimonial-card">
          <span className="testimonial-mark" aria-hidden="true">
            &ldquo;
          </span>
          {verifiedTestimonials.map((item, idx) => (
            <figure key={idx} className="testimonial-content">
              <blockquote className="testimonial-quote">
                <p>{item.quote}</p>
              </blockquote>
              <figcaption className="testimonial-author">
                <strong>{item.author}</strong>
                <span>
                  {item.role}
                  {item.company ? ` · ${item.company}` : ""}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </aside>
  );
}
