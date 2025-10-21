import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Github, Linkedin, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Title animation
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.3,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          <span className="text-gradient-primary">Let's Work Together</span>
        </h2>

        <div ref={contentRef} className="space-y-8">
          <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
            Ready to build something amazing? I'm always excited to discuss new opportunities, 
            collaborate on innovative projects, or just chat about the latest in AI and machine learning.
          </p>

          {/* Contact methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <a
              href="mailto:mianzaman07@gmail.com"
              className="glass-card p-6 rounded-2xl hover:shadow-card hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-foreground-secondary">mianzaman07@gmail.com</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+923204780703"
              className="glass-card p-6 rounded-2xl hover:shadow-card hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-r from-secondary/20 to-primary/20 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-foreground-secondary">+92 320 478 0703</p>
                </div>
              </div>
            </a>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant="glass"
              size="lg"
              asChild
            >
              <a
                href="https://github.com/mianzaman"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                GitHub
              </a>
            </Button>

            <Button
              variant="glass"
              size="lg"
              asChild
            >
              <a
                href="https://linkedin.com/in/zaman-ali-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                LinkedIn
              </a>
            </Button>
          </div>

          {/* Primary CTA */}
          <div>
            <Button
              variant="hero"
              size="hero"
              asChild
            >
              <a
                href="mailto:mianzaman07@gmail.com?subject=Let's Work Together&body=Hi Zaman, I'd like to discuss..."
                className="group"
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                Start a Conversation
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-l from-secondary/10 to-primary/10 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
}