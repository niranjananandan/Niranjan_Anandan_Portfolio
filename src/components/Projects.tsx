import { motion } from 'framer-motion';
import { ExternalLink, Code, Database, BrainCircuit, LineChart } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Natural Language Data Querying (NLQ) System',
    category: 'AI / Data Querying',
    description: 'An AI-powered tool that lets users ask database questions in plain English and get instant SQL-backed answers.',
    icon: <Database size={28} color="var(--primary-color)" />,
    tech: ['AI/ML', 'Python', 'SQL', 'GenAI'],
    github: 'https://github.com/niranjananandan',
    demo: 'https://nlq-natural-language-query.vercel.app',
  },
  {
    title: 'YOLOv5 Self-Driving Object Detection',
    category: 'Computer Vision',
    description: 'Demonstrates real-time object detection for self-driving vehicle perception using the YOLOv5 deep learning model.',
    icon: <BrainCircuit size={28} color="var(--primary-color)" />,
    tech: ['Deep Learning', 'Python', 'YOLOv5', 'Computer Vision'],
    github: 'https://github.com/niranjananandan/YOLOv5-Self-Driving-Object-Detection',
    demo: 'https://github.com/niranjananandan/YOLOv5-Self-Driving-Object-Detection',
  },
  {
    title: 'NeuroVision Brain Tumor Classification',
    category: 'Computer Vision / CNN',
    description: 'A custom lightweight CNN to classify brain MRI scans into Tumor or Normal categories.',
    icon: <BrainCircuit size={28} color="var(--primary-color)" />,
    tech: ['Deep Learning', 'Python', 'CNN'],
    github: 'https://github.com/niranjananandan/NeuroVision-Brain-Tumor-Classification',
    demo: 'https://github.com/niranjananandan/NeuroVision-Brain-Tumor-Classification',
  },
  {
    title: 'Thread.Ai',
    category: 'AI Assistant',
    description: 'A smart AI assistant designed specifically for the textile industry. Analyze fabric data, track inventory, and get expert insights instantly.',
    icon: <BrainCircuit size={28} color="var(--primary-color)" />,
    tech: ['AI/ML', 'Python', 'Web App'],
    github: 'https://github.com/niranjananandan/Thread.Ai',
    demo: 'https://thread-ai-h2ma.onrender.com',
  },
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
    github: 'https://github.com/niranjananandan/PowerBI-Retail-Profitability-Dashboard',
    demo: 'https://github.com/niranjananandan/PowerBI-Retail-Profitability-Dashboard',
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
  {
    title: 'Used-Car-Price-Predictor',
    category: 'Machine Learning',
    description: 'End-to-end machine learning project for predicting used car prices.',
    icon: <Database size={28} color="var(--primary-color)" />,
    tech: ['Machine Learning', 'Python', 'Jupyter Notebook'],
    github: 'https://github.com/niranjananandan/Used-Car-Price-Predictor',
    demo: 'https://github.com/niranjananandan/Used-Car-Price-Predictor',
  },
  {
    title: 'Mini-Chatbot',
    category: 'AI Assistant',
    description: 'A simple AI chatbot built with Python and Google Gemini API.',
    icon: <BrainCircuit size={28} color="var(--primary-color)" />,
    tech: ['AI', 'Python', 'Gemini API'],
    github: 'https://github.com/niranjananandan/Mini-Chatbot',
    demo: 'https://github.com/niranjananandan/Mini-Chatbot',
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
