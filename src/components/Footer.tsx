import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        staggerChildren: 0.12
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <footer className="footer" id="contact">
      <div className="max-w-7xl footer-container">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
          className="glass-card contact-card"
        >
          <div className="contact-info">
            <motion.h2 variants={itemVariants} className="contact-heading">Let's Build Something Intelligent Together</motion.h2>
            <motion.p variants={itemVariants} className="contact-desc">
              Whether you have a question, a project idea, or just want to connect, feel free to reach out!
            </motion.p>
            
            <div className="contact-details-grid">
              <motion.a variants={itemVariants} href="mailto:1u24ai024.niranjan@gmail.com" className="contact-item">
                <div className="contact-icon-bg">
                  <Mail size={20} color="var(--primary-color)" />
                </div>
                <div className="contact-text-content">
                  <span className="c-label">Email</span>
                  <span className="c-value">1u24ai024.niranjan@gmail.com</span>
                </div>
                <ArrowUpRight size={16} className="c-arrow" />
              </motion.a>

              <motion.a variants={itemVariants} href="tel:+916374515328" className="contact-item">
                <div className="contact-icon-bg">
                  <Phone size={20} color="var(--primary-color)" />
                </div>
                <div className="contact-text-content">
                  <span className="c-label">Phone</span>
                  <span className="c-value">+91 6374515328</span>
                </div>
                <ArrowUpRight size={16} className="c-arrow" />
              </motion.a>

              <motion.div variants={itemVariants} className="contact-item">
                <div className="contact-icon-bg">
                  <MapPin size={20} color="var(--primary-color)" />
                </div>
                <div className="contact-text-content">
                  <span className="c-label">Location</span>
                  <span className="c-value">Tiruppur, Tamil Nadu, India</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="footer-bar">
          <div className="footer-brand">
            NIRANJAN ANANDAN <span className="footer-role">• AI & ML Portfolio</span>
          </div>

          <div className="footer-links">
            <a href="https://github.com/niranjananandan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/niranjan-anandan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Niranjan Anandan. Designed & Built with Precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
