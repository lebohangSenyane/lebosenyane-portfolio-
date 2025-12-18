import { Mail, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-[60vh] px-6 md:px-12 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Get In Touch</span>
        </h2>

        <div className="flex flex-col items-center text-center space-y-8">
          <p className="text-lg text-muted-foreground max-w-xl">
            I'm always open to discussing AI innovations, machine learning projects, 
            or exploring how intelligent solutions can solve real-world problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl">
            <a 
              href="mailto:lebohangnine@gmail.com" 
              className="glass p-6 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center">
                <Mail size={24} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="font-medium">lebohangnine@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+27684940504" 
              className="glass p-6 rounded-2xl flex flex-col items-center gap-4 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center">
                <Phone size={24} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <p className="font-medium">+27 68 494 0504</p>
              </div>
            </a>

            <div className="glass p-6 rounded-2xl flex flex-col items-center gap-4">
              <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center">
                <MapPin size={24} className="text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-medium">Pretoria, South Africa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
