import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, MapPin, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  isLatest?: boolean;
}

const experiences: Experience[] = [
  {
    title: "AI Engineer",
    company: "Cloud Neurix",
    location: "Pakistan",
    duration: "May 2024 – May 2025",
    isLatest: true,
    description: [
      "Developed and optimized AI-powered solutions for web applications using Python and LangChain",
      "Built and integrated LLM-based chatbots using RAG architecture and vector search technologies (LangChain, FAISS, Chroma)",
      "Designed and deployed FastAPI-based AI microservices, improving system efficiency and scalability",
      "Collaborated with cross-functional teams to deliver AI features on time and aligned with client expectations",
      "Developed custom APIs with FastAPI for model deployment, ensuring low-latency inference and scalable architecture"
    ]
  },
  {
    title: "AI Engineer",
    company: "Futuristic Lab",
    location: "Pakistan", 
    duration: "Sep 2023 – May 2024",
    description: [
      "Assisted in developing AI-powered solutions for information retrieval using Retrieval-Augmented Generation (RAG) architectures",
      "Built and deployed NLP models using Hugging Face Transformers for document summarization and Q&A applications",
      "Integrated OpenAI APIs into internal projects to test various LLM strategies and optimize retrieval pipelines",
      "Implemented custom vector search systems using FAISS and experimented with dense and sparse retrieval techniques"
    ]
  }
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

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

    // Timeline animation
    const timelineItems = timelineRef.current?.children;
    if (timelineItems) {
      gsap.fromTo(timelineItems,
        {
          opacity: 0,
          x: -60,
          scale: 0.9
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gradient-primary">Professional Experience</span>
        </h2>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent"></div>

          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${index}`}
              className="relative mb-12 ml-16 group"
            >
              {/* Timeline dot */}
              <div className={`absolute -left-[2.125rem] top-6 w-4 h-4 rounded-full border-3 ${
                exp.isLatest 
                  ? 'bg-primary border-primary glow-primary' 
                  : 'bg-secondary border-secondary'
              } group-hover:scale-125 transition-all duration-300`}></div>

              {/* Experience card */}
              <div className="glass-card p-8 rounded-2xl hover:shadow-card hover:scale-105 transition-all duration-300">
                <div className="flex flex-wrap items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <Building2 className="w-5 h-5" />
                      <span className="text-lg font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  {exp.isLatest && (
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Current
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-4 mb-6 text-foreground-muted">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-foreground-secondary"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}