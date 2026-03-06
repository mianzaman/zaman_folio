import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const tl = gsap.timeline();

    // Initial state
    gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current, contactRef.current], {
      opacity: 0,
      y: 50
    });

    // Animation sequence
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.6")
    .to(buttonsRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4")
    .to(contactRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.4");

  }, []);

  const handleDownloadCV = () => {
    // kept for backwards compatibility (no-op)
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center z-10">
        {/* Main Content */}
        <div className="space-y-8">
          <h1 
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="text-gradient-glow">Zaman Ali</span>
          </h1>

          <div ref={subtitleRef} className="space-y-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-secondary">
              AI Engineer & Web Developer
            </h2>
            <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto leading-relaxed">
              Specializing in Machine Learning, NLP, and AI-powered solutions. 
              Building intelligent systems that transform ideas into reality.
            </p>
          </div>

          {/* Action Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="hero"
              asChild
              className="group"
            >
              <a href="https://drive.google.com/file/d/1v9IgBXRtuaDqgkk_hstJc9wX_wq2ur9a/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </a>
            </Button>
            <Button 
              variant="glass" 
              size="hero"
              asChild
            >
              <a href="#projects" className="scroll-smooth">
                View Projects
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div ref={contactRef} className="pt-8">
            <div className="flex flex-wrap gap-6 justify-center items-center text-sm text-foreground-muted">
              <a 
                href="mailto:mianzaman07@gmail.com" 
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                mianzaman07@gmail.com
              </a>
              <a 
                href="tel:+923204780703" 
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:animate-bounce" />
                +92 320 478 0703
              </a>
              <a 
                href="https://github.com/mianzaman" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Github className="w-4 h-4 group-hover:animate-bounce" />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/zaman-ali-dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors group"
              >
                <Linkedin className="w-4 h-4 group-hover:animate-bounce" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
