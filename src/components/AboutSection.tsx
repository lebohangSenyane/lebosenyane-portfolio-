import { Github, Linkedin, Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-24 max-w-6xl mx-auto">
        {/* Profile Image */}
        <div className="relative animate-float">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden gradient-border">
            <img 
              src={profilePhoto} 
              alt="Lebohang Senyane" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl -z-10" />
        </div>

        {/* Info Box */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 animate-fade-in">
          <div className="space-y-2">
            <h3 className="text-xl md:text-2xl font-medium text-muted-foreground">
              Hi, I'm
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Lebohang Senyane
            </h1>
            <p className="text-2xl md:text-3xl font-semibold gradient-text">
              AI Engineer
            </p>
          </div>

          <p className="text-muted-foreground max-w-md text-lg">
            Passionate about AI, machine learning, and building intelligent solutions that transform how we interact with technology.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <a 
              href="https://docs.google.com/document/d/13f173z33JNONhLJiDbkwADtgNhFOgN54xO4M07DEeag/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-foreground/20 font-medium transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground"
            >
              <Download size={18} />
              Download CV
            </a>
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-foreground/20 font-medium transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground"
            >
              <Mail size={18} />
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-6 mt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={32} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
