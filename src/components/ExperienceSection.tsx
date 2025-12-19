const experiences = [
  {
    title: "Digital Associate",
    company: "CAPACITI",
    period: "October 2025 - Present",
    description:
      "Completed an AI Bootcamp focused on applied machine learning concepts, prompt engineering and building practical AI-driven solutions that solve real world problems.",
    isCurrent: true,
  },
  {
    title: "Residence Mentor",
    company: "Central University of Technology",
    period: "March 2024 - November 2024",
    description:
      "Led mentorship for 30+ first-year residence students in Digital Literacy, Software Development, and IT Mathematics, fostering a supportive learning environment that helped over 85% improve academic performance through structured study groups and one-on-one support.",
    isCurrent: false,
  },
  {
    title: "Student Assistant",
    company: "Central University of Technology",
    period: "March 2023 - November 2023",
    description:
      "Assisted students with computer, software, and lab access issues, performing basic troubleshooting that reduced IT support escalations by 30%.",
    isCurrent: false,
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen px-6 md:px-12 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-lg shadow-primary/50 z-10">
                {exp.isCurrent && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                )}
              </div>

              {/* Content card */}
              <div
                className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] group glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10 ${
                  index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                }`}
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    {exp.isCurrent && (
                      <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary">
                        Current
                      </span>
                    )}
                    <span className="text-sm font-medium text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold gradient-text">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-medium text-primary">{exp.company}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </div>
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-border pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
