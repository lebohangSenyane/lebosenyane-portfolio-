const experiences = [
  {
    title: "Digital Associate",
    duration: "2 Months",
    description:
      "Completed an AI Bootcamp focused on applied machine learning concepts, prompt engineering and building practical AI-driven solutions that solve real world problems",
  },
  {
    title: "Residence Mentor",
    duration: "8 Months",
    description:
      "Led mentorship for 30+ first-year residence students in Digital Literacy, Software Development, and IT Mathematics, fostering a supportive learning environment that helped over 85% improve academic performance through structured study groups and one-on-one support.",
  },
  {
    title: "Student Assistant",
    duration: "8 Months",
    description:
      "Assisted students with computer, software, and lab access issues, performing basic troubleshooting that reduced IT support escalations by 30%.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen px-6 md:px-12 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col gap-4">
                <span className="text-sm font-medium text-primary">
                  {exp.title}
                </span>
                <h3 className="text-2xl font-semibold gradient-text">
                  {exp.duration}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 gradient-border pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
