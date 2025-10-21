import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Bot, FileText, MessageSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  description: string;
  longDescription: string[];
  technologies: string[];
  icon: React.ElementType;
  featured?: boolean;
}

const projects: Project[] = [
  
  {
    title: "RAG-based PDF Chatbot",
    description: "Built a PDF-powered chatbot using LangChain and FAISS for efficient document retrieval and question answering.",
    longDescription: [
      "Developed a chatbot application allowing users to upload PDFs and query information using Retrieval-Augmented Generation (RAG)",
      "Implemented custom vector store indexing with FAISS for efficient semantic search",
      "Built a responsive Streamlit interface for real-time user interaction with local LLMs via Ollama, Open-ai",
      "Optimized document splitting, embedding, and retrieval pipelines for better answer accuracy"
    ],
    technologies: ["Python", "LangChain", "FAISS", "Streamlit", "Ollama", "OpenAI"],
    icon: Bot,
    featured: true
  },
  {
    title: "LLM-Powered Customer Support Bot",
    description: "Designed a FastAPI-based AI system to automate customer support using Hugging Face models and fallback strategies.",
    longDescription: [
      "Built a FastAPI backend serving a fine-tuned transformer model for automated customer support",
      "Designed scalable endpoints for handling multi-turn conversations and FAQ retrieval",
      "Stored user conversations in PostgreSQL for continuous learning and model improvement"
    ],
    technologies: ["FastAPI", "Hugging Face", "Transformers", "OpenAI API", "PostgreSQL"],
    icon: MessageSquare,
    featured: true
  },
  {
    title: "AI Document Summarizer Web App",
    description: "Built a Streamlit-based application to generate concise document summaries using Transformer models.",
    longDescription: [
      "Created a web app for uploading documents and generating concise summaries using Transformer-based models",
      "Utilized Hugging Face's bart-large-cnn model for abstractive summarization tasks",
      "Deployed the model in a Streamlit app with a clean, user-friendly UI and multi-document support",
      "Focused on minimizing inference time and maximizing output readability"
    ],
    technologies: ["Streamlit", "Hugging Face", "Transformers", "PyTorch"],
    icon: FileText
  },
  {
    title: "Custom WordPress Development ",
    description: "Custom WordPress themes, LMS and plugin integrations — code and demos available on request.",
    longDescription: [
      "Built custom LMS sites using LearnDash and ACF-driven course content blocks.",
      "Combined custom theme development with page-builder templates (Elementor) for fast client edits.",
      "Implemented ACF-powered admin interfaces and custom post types for courses and lessons.",
      "Delivered client-friendly page-builder widgets and small custom plugins for unique site features."
    ],
    technologies: ["WordPress", "PHP", "LearnDash", "ACF", "Elementor", "Custom Themes"],
    icon: ExternalLink,
    featured: false
  },
  {
    title: "React E-Commerce Frontend ",
    description: "A modern, responsive React frontend for an e-commerce application (UI layer: listings, cart, checkout, auth hooks).",
    longDescription: [
      "Componentized product listing, search and filtering UI",
      "Product detail pages with image galleries and rich descriptions",
      "Shopping cart with add/update/remove and client-side checkout flow",
      "Authentication scaffolding (login / register) and API integration hooks",
      "Integration points for payment providers (Stripe-ready placeholders) and API clients (Axios)"
    ],
    technologies: ["React", "React Router", "Tailwind CSS", "Axios", "Stripe (placeholder)", "Vite / CRA"],
    icon: ExternalLink,
    featured: true
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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

    // Projects animation
    const projectCards = projectsRef.current?.children;
    if (projectCards) {
      gsap.fromTo(projectCards,
        {
          opacity: 0,
          y: 80,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gradient-primary">Featured Projects</span>
        </h2>

        <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className={`glass-card p-8 rounded-2xl hover:shadow-card transition-all duration-500 group relative overflow-hidden ${
                  project.featured ? 'lg:col-span-1' : ''
                }`}
              >
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-medium">
                    Featured
                  </div>
                )}

                <div className="relative z-10">
                  {/* Project header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-gradient-primary transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-foreground-secondary leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Detailed description */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.longDescription.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-sm text-foreground-muted"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-background-secondary/50 rounded-full text-xs font-medium text-foreground-secondary border border-card-border hover:border-primary/50 hover:text-primary transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  {/* <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="group/btn">
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="group/btn">
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                      Live Demo
                    </Button>
                  </div> */}
                </div>

                {/* Floating decoration */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-foreground-muted mb-6">
            Interested in seeing more of my work?
          </p>
          <Button variant="hero" size="lg" asChild>
            <a 
              href="https://github.com/mianzaman" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}