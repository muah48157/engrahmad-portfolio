import Achievements from "@/components/Achievements";
import AdditionalProjects from "@/components/AdditionalProjects";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import ProofMetrics from "@/components/ProofMetrics";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        {/* 1. Hero */}
        <Hero />

        {/* 2. Impact / Proof Metrics */}
        <ProofMetrics />

        {/* 3. Featured Projects (4 Flagship) */}
        <Projects />

        {/* 4. Experience (Engineering Leadership & Delivery) */}
        <Experience />

        {/* 5. Engineering Capabilities */}
        <Skills />

        {/* 6. Technical Case Studies Preview */}
        <CaseStudiesPreview />

        {/* 7. Additional Projects */}
        <AdditionalProjects />

        {/* 8. Achievements */}
        <Achievements />

        {/* 9. Contact & Remote Availability */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
