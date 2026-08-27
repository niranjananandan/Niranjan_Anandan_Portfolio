import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';
import './Experience.css';

const experienceData = [
  {
    role: "Artificial Intelligence & Machine Learning Trainee",
    company: "Internshala Trainings",
    duration: "6 Weeks (Completed Aug 2026)",
    description: "Completed a comprehensive 6-week online training on Artificial Intelligence & Machine Learning.",
    highlights: [
      "Modules covered: Introduction to AI and ML, Building Blocks of AI, Quintessential Tools, Frameworks & Libraries.",
      "Recognized as a top performer in the training."
    ],
    icon: <Briefcase size={24} color="var(--primary-color)" />
  }
];

const Experience = () => {
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
    hidden: { opacity: 0, y: 35, scale: 0.96 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section className="section-padding" id="experience">
      <div className="max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">Professional Experience</motion.h2>
          <motion.p variants={itemVariants} className="section-desc">Internships, training programs, and professional roles.</motion.p>

          <div className="experience-timeline">
            {experienceData.map((exp, index) => (
              <motion.div 
                className="glass-card experience-card"
                key={index}
                variants={itemVariants}
              >
                <div className="experience-header">
                  <div className="experience-icon-box">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <div className="experience-company-wrap">
                      <span className="experience-company">{exp.company}</span>
                      <span className="experience-duration">
                        <Calendar size={14} className="inline-icon" /> {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="experience-body">
                  <p className="experience-description">{exp.description}</p>
                  <ul className="experience-highlights">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx}>
                        <Award size={16} className="highlight-icon" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
