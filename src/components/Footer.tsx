import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formsubmit.co/ajax/1u24ai024.niranjan@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

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
          <div className="contact-content-wrapper">
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
            
            <motion.div variants={itemVariants} className="quick-contact-form-container">
              <form onSubmit={handleFormSubmit} className="contact-form-modern">
                {/* FormSubmit Configuration */}
                <input type="hidden" name="_subject" value="New Contact from Portfolio!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                
                <div className="form-row-modern">
                  <div className="form-group-modern">
                    <label htmlFor="name">YOUR NAME</label>
                    <input type="text" id="name" name="name" placeholder="John Doe" required className="form-input-modern" />
                  </div>
                  <div className="form-group-modern">
                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" id="email" name="email" placeholder="you@company.com" required className="form-input-modern" />
                  </div>
                </div>
                
                <div className="form-group-modern">
                  <label htmlFor="subject">SUBJECT</label>
                  <input type="text" id="subject" name="_subject" placeholder="Job Opportunity / Collaboration / Inquiry" required className="form-input-modern" />
                </div>
                
                <div className="form-group-modern">
                  <label htmlFor="message">MESSAGE</label>
                  <textarea id="message" name="message" placeholder="Tell me about the opportunity or what you'd like to discuss..." rows={5} required className="form-input-modern form-textarea-modern"></textarea>
                </div>
                
                <button type="submit" className="submit-btn-modern" disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? (
                    'Sending...'
                  ) : formStatus === 'success' ? (
                    'Message Sent Successfully!'
                  ) : formStatus === 'error' ? (
                    'Failed to send. Try again.'
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
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
