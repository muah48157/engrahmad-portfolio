import Achievements from "@/components/Achievements";
import AdditionalProjects from "@/components/AdditionalProjects";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ProofMetrics from "@/components/ProofMetrics";
import Skills from "@/components/Skills";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        {/* 1. Hero: 3-Second Legibility & Core Stack */}
        <Hero />

        {/* 2. Impact / Proof Metrics */}
        <ProofMetrics />

        {/* 3. Featured Projects: Complete Story & Architecture Core */}
        <Projects />

        {/* 4. Experience: Engineering Leadership & Delivery */}
        <Experience />

        {/* Testimonial Placeholder: Ready for verified recommendation quote */}
        <Testimonial />

        {/* 5. Engineering Capabilities */}
        <Skills />

        {/* 6. Additional Projects: Focused Utilities */}
        <AdditionalProjects />

        {/* 7. Recognition & Milestones: De-duplicated Achievements */}
        <Achievements />

        {/* 8. Contact & Remote Availability */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
