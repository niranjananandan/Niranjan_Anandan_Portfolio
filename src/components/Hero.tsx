import { motion } from 'framer-motion';
import { Mail, ChevronDown, ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import profileImg from '../assets/1000210087 (2).jpg';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6 } 
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="hero-content max-w-7xl">
        <div className="hero-grid">
          {/* Left Column: Text & Actions */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="hero-text"
          >
            <motion.div variants={itemVariants} className="section-badge">
              <span className="pulse-dot"></span> Artificial Intelligence & Machine Learning Student
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="hero-name">NIRANJAN ANANDAN</motion.h1>
            
            <motion.h2 variants={itemVariants} className="hero-tagline">
              Detail-oriented & analytical AI/ML specialist turning complex data into actionable intelligence.
            </motion.h2>
            
            <motion.div variants={itemVariants} className="hero-button-matrix">
              {/* Top Row: Connections & Contact (3 Buttons) */}
              <div className="hero-button-row top-row">
                <a 
                  href="https://github.com/niranjananandan" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-btn secondary"
                >
                  <FaGithub size={18} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://www.linkedin.com/in/niranjan-anandan/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hero-btn secondary"
                >
                  <FaLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="#contact" 
                  className="hero-btn secondary"
                >
                  <Mail size={18} />
                  <span>Contact</span>
                </a>
              </div>

              {/* Bottom Row: Centered Core Actions (2 Buttons) */}
              <div className="hero-button-row bottom-row">
                <a href="#projects" className="hero-btn primary">
                  <span>View Projects</span>
                  <ArrowRight size={18} />
                </a>
                <a 
                  href="/Niranjan_Anandan_Resume.pdf" 
                  download="Niranjan_Anandan_Resume.pdf" 
                  className="hero-btn secondary"
                  title="Download PDF directly"
                >
                  <Download size={18} />
                  <span>Download Resume</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Circular Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image-col"
          >
            <div className="profile-circle-container">
              <div className="profile-glow"></div>
              <div className="profile-circle-frame">
                <img 
                  src={profileImg} 
                  alt="NIRANJAN ANANDAN Profile" 
                  className="profile-img"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
      >
        <a href="#about" aria-label="Scroll down"><ChevronDown size={28} color="var(--text-muted)" /></a>
      </motion.div>
    </section>
  );
};

export default Hero;
