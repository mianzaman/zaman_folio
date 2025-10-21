import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillCategory {
  category: string;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: ["Python", "PHP", "C++", "JavaScript"],
    color: "from-primary to-primary-glow"
  },
  {
    category: "Web Development",
    skills: ["HTML5", "CSS3", "Responsive Design", "ReactJS", "React Native", "WordPress (theme & plugin dev)", "Page Builder / Custom WP Development"],
    color: "from-secondary to-secondary-dark"
  },
  {
    category: "Backend & Databases",
    skills: ["FastAPI", "REST APIs", "Laravel", "MySQL", "PostgreSQL", "SQL", "Vector DBs"],
    color: "from-primary-glow to-secondary"
  },
  {
    category: "AI & Machine Learning",
    skills: ["Machine Learning", "Chatbot Development", "LangChain", "RAG", "Hugging Face", "PyTorch", "Streamlit"],
    color: "from-secondary-dark to-primary"
  },
  {
    category: "Tools & Practices",
    skills: ["Git", "FAISS", "Chroma", "Pandas", "NumPy", "Data Analysis", "ML Ops", "Model Deployment"],
    color: "from-primary to-secondary-dark"
  }
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

    // Skills animation
    const skillCards = skillsRef.current?.children;
    if (skillCards) {
      gsap.fromTo(skillCards,
        { 
          opacity: 0, 
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

  }, []);

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          <span className="text-gradient-primary">Skills & Technologies</span>
        </h2>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="glass-card p-8 rounded-2xl hover:shadow-card hover:scale-105 transition-all duration-300 group"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {category.category}
                </h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${category.color} rounded-full`}></div>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background-secondary/50 rounded-full text-sm font-medium text-foreground-secondary border border-card-border hover:border-primary/50 hover:text-primary transition-all duration-300 hover:scale-105"
                    style={{
                      animationDelay: `${(index * 4 + skillIndex) * 0.1}s`
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Floating decoration */}
              <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${category.color} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}