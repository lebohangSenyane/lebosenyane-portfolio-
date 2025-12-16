import { useState, useEffect, useRef } from "react";

const skills = [
  "Python",
  "SQL",
  "Machine Learning",
  "NLP",
  "RAG Chatbots",
  "Hugging Face",
  "Streamlit",
  "Data Visualization",
  "Model Evaluation",
  "Bias & Fairness Analysis",
  "Firebase",
  "API Integration",
  "Ethical AI",
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-16">
          Technical Skills & Competencies
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`
                px-6 py-3 rounded-full glass
                font-medium text-foreground
                transform transition-all duration-500
                hover:scale-110 hover:bg-primary/20
                cursor-default
                ${isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
                }
              `}
              style={{
                transitionDelay: isVisible ? `${index * 80}ms` : "0ms",
              }}
            >
              <span className="relative">
                {skill}
                <span 
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                />
              </span>
            </div>
          ))}
        </div>

        {/* Floating particles animation */}
        <div className="relative mt-12 h-2 overflow-hidden">
          <div className="absolute inset-0 flex justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-primary/50 animate-float"
                style={{
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${2 + i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
