import { motion } from 'framer-motion';
import { Terminal, Code, BrainCircuit, BookOpen, Award, MapPin, Mail, Phone, GraduationCap, Cpu, BarChart2, Sparkles, TrendingUp, Globe } from 'lucide-react';
import './About.css';

const About = () => {
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

  const skillsData = [
    {
      category: "Technical Skills",
      icon: <Terminal size={22} color="var(--primary-color)" />,
      skills: ['Python', 'MYSQL', 'HTML', 'GenAI', 'Machine Learning', 'Deep Learning', 'Data Visualization', 'R (tidyverse, ggplot2)']
    },
    {
      category: "Tools & Platforms",
      icon: <Code size={22} color="var(--primary-color)" />,
      skills: ['Git', 'VSCode', 'Jupyter', 'RStudio', 'Power BI', 'Blender', 'GPT-4o', 'Google Colab', 'Claude 3.5', 'Antigravity']
    },
    {
      category: "Soft Skills",
      icon: <BrainCircuit size={22} color="var(--primary-color)" />,
      skills: ['Leadership', 'Teamwork', 'Adaptability', 'Presentation Skills']
    }
  ];

  const educationData = [
    {
      degree: "Bachelor's in AI and ML",
      score: "75.3%",
      year: "2027",
      institution: "RVS College Of Arts & Science, Coimbatore",
      status: "Ongoing"
    },
    {
      degree: "HSC in Computer Maths",
      score: "71.2%",
      year: "2024",
      institution: "Annai Matric Higher Sec School, Tiruppur",
      status: "Completed"
    },
    {
      degree: "SSLC",
      score: "77.2%",
      year: "2022",
      institution: "Annai Matric Higher Sec School, Tiruppur",
      status: "Completed"
    }
  ];

  const certificationsData = [
    { title: "AI Essentials", year: "2026", provider: "FreeAcademy.ai" },
    { title: "Cloud Computing with AI", year: "2026", provider: "Unstop" },
    { title: "Machine Learning Using Python", year: "2026", provider: "SIMPLILEARN" },
    { title: "Intro To Generative AI", year: "2026", provider: "AWS by AMAZON" },
    { title: "Google AI & Gen AI Workflow", year: "2025", provider: "GOOGLE GEMINI" },
    { title: "AI For Business Professionals", year: "2025", provider: "HP LIFE" }
  ];

  const achievementsData = [
    { title: "Java Premier League", status: "Participated", year: "2026", location: "RVSCAS" },
    { title: "Young Innovators Ideathon", status: "Participated", year: "2025", location: "SignSpeakAI" },
    { title: "Science Exhibition", status: "Participated", year: "2025", location: "Arduino Radar - RVS CAS" }
  ];

  return (
    <>
      {/* Bio Section */}
      <section className="section-padding" id="about">
        <div className="max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.h2 variants={itemVariants} className="section-title">About Me</motion.h2>
            <motion.p variants={itemVariants} className="section-desc">Personal profile and professional background in artificial intelligence.</motion.p>

            <div className="about-grid">
              {/* Quick Info Card */}
              <motion.div variants={itemVariants} className="glass-card info-card">
                <h3 className="card-heading">Quick Details</h3>
                <ul className="info-list">
                  <li>
                    <MapPin size={18} color="var(--primary-color)" />
                    <div>
                      <span className="info-label">Location</span>
                      <span className="info-val">Tiruppur, Tamil Nadu</span>
                    </div>
                  </li>
                  <li>
                    <GraduationCap size={18} color="var(--primary-color)" />
                    <div>
                      <span className="info-label">Education</span>
                      <span className="info-val">B.Sc AI & ML (2027)</span>
                    </div>
                  </li>
                  <li>
                    <Mail size={18} color="var(--primary-color)" />
                    <div>
                      <span className="info-label">Email</span>
                      <a href="mailto:1u24ai024.niranjan@gmail.com" className="info-val info-link">1u24ai024.niranjan@gmail.com</a>
                    </div>
                  </li>
                  <li>
                    <Phone size={18} color="var(--primary-color)" />
                    <div>
                      <span className="info-label">Phone</span>
                      <a href="tel:+916374515328" className="info-val info-link">+91 6374515328</a>
                    </div>
                  </li>
                  <li>
                    <Globe size={18} color="var(--primary-color)" />
                    <div>
                      <span className="info-label">Languages</span>
                      <span className="info-val">Tamil, English, Telugu</span>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Bio Details */}
              <motion.div variants={itemVariants} className="glass-card bio-card">
                <h3 className="card-heading">Professional Summary</h3>
                <p className="bio-summary-text">
                  I'm an analytical AI/ML student focused on using data-driven algorithms to uncover insights and optimize predictive models. Experienced in Python, SQL, and predictive modeling. Passionate about developing modern machine learning applications, data visualization dashboards, and smart recommendation systems.
                </p>

                {/* Specialties Grid */}
                <div className="specialties-grid">
                  <div className="specialty-card">
                    <div className="specialty-icon-box">
                      <Cpu size={20} className="specialty-icon" />
                    </div>
                    <div className="specialty-content">
                      <h4>Machine Learning & Deep Learning</h4>
                      <p>Developing predictive models in Python with Pandas, NumPy & Scikit-Learn.</p>
                    </div>
                  </div>

                  <div className="specialty-card">
                    <div className="specialty-icon-box">
                      <BarChart2 size={20} className="specialty-icon" />
                    </div>
                    <div className="specialty-content">
                      <h4>Data Analytics & Power BI</h4>
                      <p>Designing interactive KPI dashboards, DAX calculations & clustered column reports.</p>
                    </div>
                  </div>

                  <div className="specialty-card">
                    <div className="specialty-icon-box">
                      <Sparkles size={20} className="specialty-icon" />
                    </div>
                    <div className="specialty-content">
                      <h4>GenAI & Workflow Automation</h4>
                      <p>Integrating Generative AI, LLM tools & AI prompt workflows.</p>
                    </div>
                  </div>

                  <div className="specialty-card">
                    <div className="specialty-icon-box">
                      <TrendingUp size={20} className="specialty-icon" />
                    </div>
                    <div className="specialty-content">
                      <h4>Data-Driven Problem Solving</h4>
                      <p>Extracting insights to support decision-making with high attention to detail.</p>
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="about-stats-grid">
                  <div className="about-stat-card">
                    <div className="about-stat-value">80<span className="about-stat-accent">%</span></div>
                    <div className="about-stat-label">Academic Score</div>
                  </div>
                  <div className="about-stat-card">
                    <div className="about-stat-value">3<span className="about-stat-accent">+</span></div>
                    <div className="about-stat-label">Featured Projects</div>
                  </div>
                  <div className="about-stat-card">
                    <div className="about-stat-value">5<span className="about-stat-accent">+</span></div>
                    <div className="about-stat-label">Certifications</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding" id="skills">
        <div className="max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.h2 variants={itemVariants} className="section-title">Skills & Technologies</motion.h2>
            <motion.p variants={itemVariants} className="section-desc">Core competencies, technical tools, and interpersonal strengths.</motion.p>

            <div className="skills-grid">
              {skillsData.map((group, idx) => (
                <motion.div variants={itemVariants} key={idx} className="glass-card skill-card">
                  <div className="skill-card-header">
                    {group.icon}
                    <h3>{group.category}</h3>
                  </div>
                  <div className="skill-pill-list">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-pill">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding" id="education">
        <div className="max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.h2 variants={itemVariants} className="section-title">Education</motion.h2>
            <motion.p variants={itemVariants} className="section-desc">Academic achievements and educational timeline.</motion.p>

            <div className="education-timeline">
              {educationData.map((edu, idx) => (
                <motion.div variants={itemVariants} key={idx} className="timeline-node">
                  <div className="node-marker">
                    <div className="node-dot"></div>
                    {idx !== educationData.length - 1 && <div className="node-line"></div>}
                  </div>
                  <div className="glass-card node-card">
                    <div className="node-header">
                      <div>
                        <h3 className="node-title">{edu.degree}</h3>
                        <p className="node-inst">{edu.institution}</p>
                      </div>
                      <div className="node-badge">{edu.score}</div>
                    </div>
                    <div className="node-footer">
                      <span className="node-meta"><BookOpen size={14} /> Year: {edu.year}</span>
                      <span className="node-status">{edu.status}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications & Achievements Section */}
      <section className="section-padding" id="certifications">
        <div className="max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={sectionVariants}
          >
            <motion.h2 variants={itemVariants} className="section-title">Certifications & Achievements</motion.h2>
            <motion.p variants={itemVariants} className="section-desc">Verified courses, workshops, and competition milestones.</motion.p>

            <div className="certs-grid">
              {certificationsData.map((cert, idx) => (
                <motion.div variants={itemVariants} key={idx} className="glass-card cert-card">
                  <div className="cert-icon-wrap">
                    <Award size={22} color="var(--primary-color)" />
                  </div>
                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <p className="cert-provider">{cert.provider}</p>
                    <span className="cert-year">{cert.year}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h3 variants={itemVariants} className="sub-heading mt-12">Extracurricular Achievements</motion.h3>
            <div className="achievements-grid">
              {achievementsData.map((item, idx) => (
                <motion.div variants={itemVariants} key={idx} className="glass-card achievement-card">
                  <h4>{item.title}</h4>
                  <p>{item.location}</p>
                  <div className="achievement-footer">
                    <span className="status-tag">{item.status}</span>
                    {item.year && <span className="year-tag">{item.year}</span>}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
