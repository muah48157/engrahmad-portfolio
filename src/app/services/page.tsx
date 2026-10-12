import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import { Container } from "@/components/portfolio/primitives";
import { Zap } from "lucide-react";

export const metadata = {
  title: "Freelance Flutter Services | Muhammad Ahmad",
  description: "End-to-end Flutter app development, architecture scaling, and UI/UX to pixel-perfect code.",
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex flex-col min-h-screen">
      
      {/* Custom Mini-Hero for Services Landing Page */}
      <section className="relative overflow-hidden bg-background pt-24 pb-16 sm:pt-32 sm:pb-24">
        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" aria-hidden="true" />
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" aria-hidden="true" />

        <Container className="relative flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm mb-8">
            <Zap className="size-3.5" />
            Available for freelance contracts
          </div>
          
          <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl max-w-3xl">
            Let's build your next <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-600">
              mobile product together
            </span>
          </h1>
          
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Whether you need a brand new application built from scratch or an existing codebase scaled with Clean Architecture, I provide end-to-end Flutter engineering services.
          </p>
        </Container>
      </section>

      {/* Services Component */}
      <Services />

      {/* Happy Clients / Testimonials */}
      <Testimonial />

      {/* CTA / Contact */}
      <Contact />
    </main>
  );
}
