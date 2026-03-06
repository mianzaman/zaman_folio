import { Suspense } from 'react';
import ThreeBackground from '@/components/ThreeBackground';
import HeroSection from '@/components/portfolio/HeroSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import ContactSection from '@/components/portfolio/ContactSection';

export default function Portfolio() {
  return (
    <div className="relative min-h-screen">
      {/* Three.js Background */}
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-card-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-foreground-muted text-sm">
            © 2024 Zaman Ali. AI Engineer & Web Developer
          </p>
        </div>
      </footer>
    </div>
  );
}
