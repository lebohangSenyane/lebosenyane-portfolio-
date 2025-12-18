import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#certifications", label: "Certifications" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 flex items-center gap-8">
      <a 
        href="#about" 
        onClick={(e) => { e.preventDefault(); handleNavClick("#about"); }}
        className="text-lg font-semibold whitespace-nowrap transition-transform duration-300 hover:scale-105"
      >
        Lebohang Senyane
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
            className="nav-link"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block gradient-bg px-6 py-2 rounded-full font-medium text-primary-foreground whitespace-nowrap transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
      >
        Visit Github
      </a>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-foreground p-2"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 mt-4 glass rounded-2xl p-6 md:hidden animate-scale-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="nav-link text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-bg px-6 py-3 rounded-full font-medium text-primary-foreground text-center transition-all duration-300 hover:scale-105"
            >
              Visit Github
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
