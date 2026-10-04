import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, ExternalLink } from 'lucide-react';
import './Experience.css';

const experienceData = [
  {
    role: "LOGISTICS DATA ANALYST INTERN",
    company: "YUVAINTERN",
    duration: "August 2026",
    description: "Successfully completed an internship in data analytics, consistently demonstrating dedication and professionalism.",
    highlights: [
      "Analyzed and processed logistics data, exhibiting strong problem-solving skills and a willingness to learn.",
      "Collaborated effectively with the team to deliver insights with integrity and commitment."
    ],
    icon: <Briefcase size={24} color="var(--primary-color)" />,
    certificate: "/Professional Experience/logistics-data-analyst-yuvaintern.pdf"
  },
  {
    role: "PYTHON & GENAI TRAINEE",
    company: "NET TEL SOLUTIONS",
    duration: "Recent",
    description: "Trainee focused on Python and Generative AI.",
    highlights: [
      "Gained hands-on experience in Python programming and Generative AI fundamentals.",
      "Explored LLMs (Large Language Models) and prompt engineering techniques to optimize AI outputs."
    ],
    icon: <Briefcase size={24} color="var(--primary-color)" />,
    certificate: "/Professional Experience/python-with-genai-net-tel-solution.pdf"
  },
  {
    role: "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING",
    company: "INTERNSHALA",
    duration: "Completed",
    description: "Comprehensive training and hands-on projects in AI & ML.",
    highlights: [
      "Completed comprehensive training and hands-on projects in AI & ML learning.",
      "Utilized Python libraries such as Pandas, NumPy, and Scikit-learn for data preprocessing and model evaluation."
    ],
    icon: <Award size={24} color="var(--primary-color)" />,
    certificate: "/Professional Experience/aI&mL-internshala.pdf"
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
                  {exp.certificate && (
                    <a 
                      href={exp.certificate} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="experience-certificate-link"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginTop: '1.2rem',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        color: 'var(--primary-color)',
                        textDecoration: 'none',
                        transition: 'opacity 0.2s',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  )}
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
