import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'experience', 'skills', 'education', 'certifications', 'projects', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content max-w-7xl">
        <a href="#home" className="logo">
          PORTFOLIO
        </a>

        <div className="nav-links desktop">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
          <a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''}>Certifications</a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          <a href="#contact" className={`contact-btn ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>About</a>
        <a href="#experience" className={activeSection === 'experience' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Experience</a>
        <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
        <a href="#education" className={activeSection === 'education' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Education</a>
        <a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Certifications</a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
