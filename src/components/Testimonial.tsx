import { Star } from 'lucide-react'
import { Container, SectionHeading } from './portfolio/primitives'
import { Reveal } from './portfolio/reveal'

export type TestimonialItem = {
  quote: string;
  author: string;
  role: string;
  company?: string;
  rating?: number;
};

// Placeholder quotes with actual client details
// TODO: Replace the placeholder quotes with their real feedback
const testimonials: TestimonialItem[] = [
  {
    quote: "Muhammad Ahmad demonstrated outstanding ownership over our mobile client. He delivered features faster than we expected while keeping the codebase impeccably clean. A true professional.",
    author: "Muhammad Jamshed Khan",
    role: "CEO",
    company: "U-Track",
    rating: 5,
  },
  {
    quote: "Working with Muhammad was a breeze. He seamlessly integrated complex backend APIs into our Flutter app and ensured the UI felt responsive and native on both iOS and Android.",
    author: "Royam Shafiq",
    role: "Client",
    company: "",
    rating: 5,
  },
  {
    quote: "His deep understanding of Flutter's rendering engine helped us solve severe performance bottlenecks in our video streaming app. Highly recommend for any serious mobile engineering tasks.",
    author: "Muhammad Ammar",
    role: "IT Head",
    company: "MRCP Syndrom",
    rating: 5,
  },
];

export default function Testimonial() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="border-t border-border bg-surface/30 py-16 sm:py-24">
      <Container>
        <SectionHeading
          id="testimonials-title"
          eyebrow="Happy Clients"
          title="Don't just take my word for it"
          description="Hear from engineering leaders and product owners I've collaborated with."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8 relative overflow-hidden group hover:border-primary/40 hover:-translate-y-1">
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 flex gap-1 text-amber-500">
                    {Array.from({ length: t.rating || 5 }).map((_, idx) => (
                      <Star key={idx} className="size-4 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="flex-1">
                    <p className="text-sm leading-relaxed text-foreground sm:text-base">"{t.quote}"</p>
                  </blockquote>
                  
                  <div className="mt-8 flex items-center gap-4 border-t border-border/50 pt-6">
                    <div className="flex size-10 items-center justify-center rounded-full bg-surface border border-border font-bold text-primary shadow-sm">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{t.author}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">
                        {t.role} {t.company && <span className="text-primary font-medium">@ {t.company}</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
