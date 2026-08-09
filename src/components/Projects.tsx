import { motion } from 'framer-motion';
import { ExternalLink, Code, Database, BrainCircuit, LineChart } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'ATTRITION-TRACKER',
    category: 'AI / Predictive Analytics',
    description: 'An AI-powered web application built to analyze employee churn data and predict attrition risk, featuring secure Firebase authentication.',
    icon: <BrainCircuit size={28} color="var(--primary-color)" />,
    tech: ['AI/ML', 'Python', 'Firebase', 'Web App'],
    github: 'https://github.com/niranjananandan/ATTRITION-TRACKER',
    demo: 'https://attrition-tracker.onrender.com',
  },
  {
    title: 'PIXELFOODIE-AI-PREDICTOR',
    category: 'Machine Learning',
    description: 'Machine learning-powered web application designed to analyze user food preferences and predict custom recipe suggestions.',
    icon: <Database size={28} color="var(--primary-color)" />,
    tech: ['Machine Learning', 'Python', 'Web App'],
    github: 'https://github.com/niranjananandan/PIXELFOODIE-AI-PREDICTOR',
    demo: 'https://pixelfoodie-ai-predictor.onrender.com',
  },
  {
    title: 'PowerBI-Retail-Profitability-Dashboard',
    category: 'Data Visualization',
    description: 'An interactive Power BI dashboard analyzing seasonal textile sales and material profitability. Built with Power Query and DAX, featuring a modern, dark-themed UI for actionable insights.',
    icon: <LineChart size={28} color="var(--primary-color)" />,
    tech: ['Power BI', 'Data Visualization', 'SQL'],
    github: 'https://github.com/niranjananandan/RETAIL-TEXTILE-SHOP-DATA-ANALYSIS',
    demo: 'https://github.com/niranjananandan/RETAIL-TEXTILE-SHOP-DATA-ANALYSIS',
  },
  {
    title: 'PIXELFOODIE-RECIPE-RECOMMENDER',
    category: 'Smart Recommender',
    description: 'An AI-Powered Smart Recipe Recommender system that intelligently matches recipes based on available kitchen ingredients.',
    icon: <Code size={28} color="var(--primary-color)" />,
    tech: ['AI', 'Python', 'Recommendation Engine'],
    github: 'https://github.com/niranjananandan/PIXELFOODIE-RECIPE-RECOMMENDER',
    demo: 'https://pixelfoodie-recipe-recomender.onrender.com',
  },
  {
    title: 'PIXELFOODIE',
    category: 'Web Application',
    description: 'Indian Style Food Recipe Web Page showcasing traditional regional culinary dishes with a modern, responsive UI design.',
    icon: <Code size={28} color="var(--primary-color)" />,
    tech: ['HTML', 'CSS', 'JavaScript', 'Web Design'],
    github: 'https://github.com/niranjananandan/PIXELFOODIE',
    demo: 'https://pixelfoodie-recipes.onrender.com',
  },
];

const Projects = () => {
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
    <section className="section-padding" id="projects">
      <div className="max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={sectionVariants}
        >
          <motion.h2 variants={itemVariants} className="section-title">Featured Projects</motion.h2>
          <motion.p variants={itemVariants} className="section-desc">Machine learning applications, data analytics dashboards, and web solutions.</motion.p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div 
                className="glass-card project-card"
                key={index}
                variants={itemVariants}
              >
                <div className="project-card-header">
                  <div className="project-icon-box">
                    {project.icon}
                  </div>
                  <span className="project-category">{project.category}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tech-list">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-badge">{t}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="proj-btn primary">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="proj-btn secondary">
                    <FaGithub size={16} /> Source Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
