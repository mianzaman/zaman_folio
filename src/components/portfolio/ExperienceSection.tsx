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
    company: "Zayzom",
    location: "Saudi Arabia (Remote)",
    duration: "Jun 2025 - Present",
    isLatest: true,
    description: [
      "Building and maintaining AI-driven backend systems powering Zayzom’s analytics platform.",
      "Designed and implemented data pipelines to process market data for AI-driven insights.",
      "Integrated LLMs into the backend to support intelligent news summarization, question answering, and trend analysis.",
      "Developed and deployed FastAPI microservices enabling real-time interaction between platform and AI models.",
      "Collaborating with data engineers and product teams to ensure smooth integration and model reliability.",
      "Working on optimizing inference latency and scalability of AI services for production deployment."
    ]
  },
  {
    title: "Web Developer (Part-time)",
    company: "DevTech",
    location: "Pakistan",
    duration: "Apr 2025 - Present (Part-time)",
    isLatest: true,
    description: [
      "Working part-time on web projects including custom WordPress development and integrations.",
      "Custom theme/plugin development, page builder workflows, and site performance optimization.",
      "Implemented responsive front-ends using HTML5, CSS3, JavaScript/jQuery and modern frameworks as needed.",
      "Collaborating with designers, project managers, and clients to deliver user-centered websites."
    ]
  },
  {
    title: "AI Engineer",
    company: "Cloud Neurix",
    location: "Pakistan",
    duration: "May 2024 – May 2025",
    description: [
      "Developed and optimized AI-powered solutions for web applications using Python and LangChain",
      "Built and integrated LLM-based chatbots using RAG architecture and vector search technologies (LangChain, FAISS, Chroma)",
      "Designed and deployed FastAPI-based AI microservices, improving system efficiency and scalability",
      "Collaborated with cross-functional teams to deliver AI features on time and aligned with client expectations",
      "Developed custom APIs with FastAPI for model deployment, ensuring low-latency inference and scalable architecture"
    ]
  },

    {
    title: "AI Engineer (Part-time)",
    company: "Futuristic Lab",
    location: "Pakistan", 
    duration: "Sep 2023 – May 2024",
    description: [
      "Assisted in developing AI-powered solutions for information retrieval using Retrieval-Augmented Generation (RAG) architectures",
      "Built and deployed NLP models using Hugging Face Transformers for document summarization and Q&A applications",
      "Integrated OpenAI APIs into internal projects to test various LLM strategies and optimize retrieval pipelines",
      "Implemented custom vector search systems using FAISS and experimented with dense and sparse retrieval techniques"
    ]
  },
  {
    title: "Web Developer",
    company: "Lahore Graphic Design",
    location: "Lahore, Pakistan",
    duration: "Jun 2023 - May 2024",
    description: [
      "Proficient in WordPress development, including theme customization and plugin integration.",
      "Strong command of front-end technologies: HTML5, CSS3, JavaScript/jQuery.",
      "Experience with PHP programming and MySQL database management.",
      "Skilled in responsive design principles for optimal viewing across various devices.",
      "Collaborated with designers, project managers, and clients to deliver projects on time.",
      "Experienced with custom WordPress development and page builder workflows."
    ]
  },
  {
    title: "Web Developer (Intern)",
    company: "Productive Squad",
    location: "Lahore, Pakistan",
    duration: "Jan 2023 –  Jun 2023",
    description: [
      "Engaged in immersive web development during an internship, building dynamic user-centered websites.",
      "Contributed to collaborative projects and refined technical abilities within a skilled team."
    ]
  },
  
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