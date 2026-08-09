import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content max-w-7xl">
        <a href="#home" className="logo">
          PORTFOLIO
        </a>

        <div className="nav-links desktop">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="contact-btn">Contact</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
        <a href="#education" onClick={() => setIsMobileMenuOpen(false)}>Education</a>
        <a href="#certifications" onClick={() => setIsMobileMenuOpen(false)}>Certifications</a>
        <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
