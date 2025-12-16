import { useState, useEffect, useRef } from "react";
import { Brain, Code, Database, MessageSquare, Bot, BarChart3, Globe, Flame, GitBranch, Layout, Scale, Shield } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  group: "ml" | "responsible";
}

const skills: Skill[] = [
  {
    name: "Python",
    icon: <Code size={20} />,
    description: "Used Python for data preprocessing, model training, bias analysis.",
    group: "ml",
  },
  {
    name: "Machine Learning",
    icon: <Brain size={20} />,
    description: "Applied supervised and unsupervised learning techniques for classification, evaluation, and performance analysis.",
    group: "ml",
  },
  {
    name: "NLP",
    icon: <MessageSquare size={20} />,
    description: "Worked with text preprocessing, sentiment analysis, and language models to extract insights from unstructured data.",
    group: "ml",
  },
  {
    name: "RAG",
    icon: <Bot size={20} />,
    description: "Built an AI study assistant chatbot that retrieves domain-specific content and generates accurate, contextual responses.",
    group: "ml",
  },
  {
    name: "Hugging Face",
    icon: <span className="text-lg">🤗</span>,
    description: "Integrated Hugging Face models and APIs for NLP tasks, text analysis, and generative AI applications.",
    group: "ml",
  },
  {
    name: "Streamlit",
    icon: <Layout size={20} />,
    description: "Built interactive dashboards for sentiment analysis and data exploration with real-time user input.",
    group: "ml",
  },
  {
    name: "Data Visualization",
    icon: <BarChart3 size={20} />,
    description: "Created clear visualizations to communicate insights, model performance, and bias metrics effectively.",
    group: "ml",
  },
  {
    name: "APIs",
    icon: <Globe size={20} />,
    description: "Integrated multiple AI and NLP APIs, handling authentication, rate limiting, and error management.",
    group: "ml",
  },
  {
    name: "Firebase",
    icon: <Flame size={20} />,
    description: "Used Firebase for hosting, authentication, and persistent data storage in AI-powered applications.",
    group: "ml",
  },
  {
    name: "Git",
    icon: <GitBranch size={20} />,
    description: "Managed source code with Git and GitHub, collaborating in agile teams and maintaining clean version control.",
    group: "ml",
  },
  {
    name: "Bias Analysis",
    icon: <Scale size={20} />,
    description: "Analyzed algorithmic bias in the COMPAS dataset, evaluating fairness across demographic groups.",
    group: "responsible",
  },
  {
    name: "Ethical AI",
    icon: <Shield size={20} />,
    description: "Documented privacy, bias, accessibility, and unintended consequences as part of responsible AI design.",
    group: "responsible",
  },
];

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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

  const mlSkills = skills.filter((s) => s.group === "ml");
  const responsibleSkills = skills.filter((s) => s.group === "responsible");

  // Desktop: Orbiting layout
  const OrbitingNetwork = () => {
    const innerRadius = 140;
    const outerRadius = 220;

    return (
      <div className="relative w-[500px] h-[500px] mx-auto">
        {/* Orbit paths */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="absolute rounded-full border border-primary/20"
            style={{ width: innerRadius * 2 + 60, height: innerRadius * 2 + 60 }}
          />
          <div 
            className="absolute rounded-full border border-secondary/20"
            style={{ width: outerRadius * 2 + 60, height: outerRadius * 2 + 60 }}
          />
        </div>

        {/* Central node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="w-28 h-28 rounded-full glass flex items-center justify-center bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/40 shadow-lg shadow-primary/20">
            <div className="text-center">
              <Brain className="w-8 h-8 mx-auto text-primary mb-1" />
              <span className="text-xs font-semibold text-foreground leading-tight block">
                AI & ML
              </span>
            </div>
          </div>
        </div>

        {/* ML Skills - Inner orbit */}
        <div 
          className={`absolute inset-0 ${hoveredSkill ? "" : "animate-spin-slow"}`}
          style={{ animationDuration: "60s" }}
        >
          {mlSkills.map((skill, index) => {
            const angle = (index / mlSkills.length) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * innerRadius;
            const y = Math.sin(angle) * innerRadius;

            return (
              <TooltipProvider key={skill.name} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`
                        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        transition-all duration-300 cursor-pointer
                        ${hoveredSkill === skill.name ? "scale-125 z-20" : "scale-100"}
                        ${isVisible ? "opacity-100" : "opacity-0"}
                      `}
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        transitionDelay: `${index * 50}ms`,
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className={`
                        px-3 py-2 rounded-full glass flex items-center gap-2
                        border border-primary/30 bg-background/80
                        hover:bg-primary/20 hover:border-primary/50
                        hover:shadow-lg hover:shadow-primary/20
                        transition-all duration-300
                        ${hoveredSkill === skill.name ? "ring-2 ring-primary/50" : ""}
                      `}>
                        <span className="text-primary">{skill.icon}</span>
                        <span className="text-xs font-medium text-foreground whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    className="max-w-xs bg-background/95 backdrop-blur-md border-primary/30 p-3"
                  >
                    <p className="font-semibold text-primary mb-1">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>

        {/* Responsible AI Skills - Outer orbit */}
        <div 
          className={`absolute inset-0 ${hoveredSkill ? "" : "animate-spin-slow-reverse"}`}
          style={{ animationDuration: "45s" }}
        >
          {responsibleSkills.map((skill, index) => {
            const angle = (index / responsibleSkills.length) * 2 * Math.PI - Math.PI / 2;
            const x = Math.cos(angle) * outerRadius;
            const y = Math.sin(angle) * outerRadius;

            return (
              <TooltipProvider key={skill.name} delayDuration={0}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div
                      className={`
                        absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        transition-all duration-300 cursor-pointer
                        ${hoveredSkill === skill.name ? "scale-125 z-20" : "scale-100"}
                        ${isVisible ? "opacity-100" : "opacity-0"}
                      `}
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                        transitionDelay: `${(mlSkills.length + index) * 50}ms`,
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div className={`
                        px-3 py-2 rounded-full glass flex items-center gap-2
                        border border-secondary/30 bg-background/80
                        hover:bg-secondary/20 hover:border-secondary/50
                        hover:shadow-lg hover:shadow-secondary/20
                        transition-all duration-300
                        ${hoveredSkill === skill.name ? "ring-2 ring-secondary/50" : ""}
                      `}>
                        <span className="text-secondary">{skill.icon}</span>
                        <span className="text-xs font-medium text-foreground whitespace-nowrap">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    className="max-w-xs bg-background/95 backdrop-blur-md border-secondary/30 p-3"
                  >
                    <p className="font-semibold text-secondary mb-1">{skill.name}</p>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>

        {/* Group labels */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary/50" />
            <span className="text-muted-foreground">ML & AI</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-secondary/50" />
            <span className="text-muted-foreground">Responsible AI</span>
          </div>
        </div>
      </div>
    );
  };

  // Mobile: Radial/stacked layout
  const MobileLayout = () => (
    <div className="space-y-8">
      {/* Central node */}
      <div className="flex justify-center">
        <div className="w-24 h-24 rounded-full glass flex items-center justify-center bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/40">
          <div className="text-center">
            <Brain className="w-6 h-6 mx-auto text-primary mb-1" />
            <span className="text-xs font-semibold text-foreground">AI & ML</span>
          </div>
        </div>
      </div>

      {/* ML Skills */}
      <div>
        <h3 className="text-sm font-semibold text-primary mb-3 text-center">ML & AI</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {mlSkills.map((skill, index) => (
            <TooltipProvider key={skill.name} delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`
                      px-3 py-2 rounded-full glass flex items-center gap-2
                      border border-primary/30 bg-background/80
                      active:bg-primary/20 active:scale-105
                      transition-all duration-300
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    `}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="text-primary">{skill.icon}</span>
                    <span className="text-xs font-medium text-foreground">{skill.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-background/95 backdrop-blur-md border-primary/30 p-3">
                  <p className="font-semibold text-primary mb-1">{skill.name}</p>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      {/* Responsible AI Skills */}
      <div>
        <h3 className="text-sm font-semibold text-secondary mb-3 text-center">Responsible AI</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {responsibleSkills.map((skill, index) => (
            <TooltipProvider key={skill.name} delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={`
                      px-3 py-2 rounded-full glass flex items-center gap-2
                      border border-secondary/30 bg-background/80
                      active:bg-secondary/20 active:scale-105
                      transition-all duration-300
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                    `}
                    style={{ transitionDelay: `${(mlSkills.length + index) * 50}ms` }}
                  >
                    <span className="text-secondary">{skill.icon}</span>
                    <span className="text-xs font-medium text-foreground">{skill.name}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-background/95 backdrop-blur-md border-secondary/30 p-3">
                  <p className="font-semibold text-secondary mb-1">{skill.name}</p>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </div>
  );

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

        {isMobile ? <MobileLayout /> : <OrbitingNetwork />}
      </div>
    </section>
  );
};

export default SkillsSection;
