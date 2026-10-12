import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import ProofMetrics from "@/components/ProofMetrics";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main id="main-content">
      {/* 1. Hero: 3-Second Legibility & Core Stack */}
      <Hero />

      {/* 2. Impact / Proof Metrics */}
      <ProofMetrics />

      {/* 3. Featured Projects: Complete Story & Architecture Core */}
      <Projects />

      {/* 4. Experience: Engineering Leadership & Delivery */}
      <Experience />

      {/* 5. Engineering Capabilities */}
      <Skills />

      {/* 6. Recognition & Milestones: De-duplicated Achievements */}
      <Achievements />

      {/* 7. Contact & Remote Availability */}
      <Contact />
    </main>
  );
}
