import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI Education Solution",
    description:
      "Designed and prototyped a no-code AI solution addressing a key educational challenge, applying text analysis and predictive techniques to improve learning outcomes.",
    link: "https://trick-high-79853905.figma.site/",
    tags: ["No-Code", "AI", "Education"],
  },
  {
    title: "AI Creative Writing Assistant",
    description:
      "AI-powered generative content creator for crafting original poems and short stories, leveraging advanced language models to inspire creativity and storytelling.",
    link: "https://ai-creative-writing-assistant.vercel.app/",
    tags: ["AI", "NLP", "Creative"],
  },
  {
    title: "AI Resume Builder",
    description:
      "An AI-powered resume builder that generates customized, ATS-friendly resumes using user data, industry keywords, and job descriptions, offering multiple templates, smart content suggestions, and feedback-driven improvements.",
    link: "https://resumebuilder-rho-umber.vercel.app/",
    tags: ["AI", "Resume", "Templates"],
  },
  {
    title: "RAG Student Chatbot",
    description:
      "Built a student-focused RAG chatbot integrating multiple AI APIs, featuring a user-friendly interface, persistent data storage, and robust error handling.",
    link: "https://studio.firebase.google.com/studio-5317777344",
    tags: ["RAG", "Chatbot", "Firebase"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative glass rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="text-muted-foreground leading-relaxed flex-grow">
                {project.description}
              </p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-fit gradient-bg px-5 py-2.5 rounded-full font-medium text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
              >
                <ExternalLink size={16} />
                View Project
              </a>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-border pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
