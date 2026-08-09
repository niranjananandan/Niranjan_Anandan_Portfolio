import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import './AiChatWidget.css';

interface Message {
  id: number;
  sender: 'bot' | 'user';
  text: string;
}

const AiChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I'm Niranjan's AI Portfolio Assistant. Ask me anything about his skills, projects, education, or experience!"
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const quickPrompts = [
    "What are his core skills?",
    "Tell me about Attrition Tracker",
    "How can I view his Resume?",
    "What certifications does he have?",
    "How can I contact him?"
  ];

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    // Resume & CV
    if (q.includes('resume') || q.includes('cv') || q.includes('pdf')) {
      return "You can view Niranjan's full resume directly inside your browser by clicking the 'View Resume' button in the Hero section, or download the PDF file directly!";
    }

    // Projects
    if (q.includes('attrition') || q.includes('churn')) {
      return "Attrition Tracker is an AI-powered predictive web application built with Python and Firebase. It analyzes employee turnover metrics and predicts churn risks with interactive data visualizations.";
    }
    if (q.includes('pixelfoodie') || q.includes('recipe') || q.includes('food')) {
      return "PixelFoodie features two intelligent AI applications:\n1. AI Predictor: Analyzes food preferences to predict custom recipes.\n2. Recipe Recommender: Matches available kitchen ingredients to traditional & modern Indian recipes.";
    }
    if (q.includes('textile') || q.includes('power bi') || q.includes('retail') || q.includes('dashboard')) {
      return "The Retail Textile Shop Data Analysis project is an interactive Power BI dashboard powered by SQL queries to analyze store performance, sales trends, and customer buying segments.";
    }
    if (q.includes('project') || q.includes('work') || q.includes('build') || q.includes('app') || q.includes('portfolio')) {
      return "Niranjan has built 5 major projects:\n1. 🧠 Attrition Tracker (AI Churn Predictor)\n2. 🥗 PixelFoodie AI Predictor\n3. 🍳 PixelFoodie Smart Recipe Recommender\n4. 📊 Retail Textile Shop Data Analysis (Power BI & SQL)\n5. 🌐 PixelFoodie Recipe Web App";
    }

    // Skills & Stack
    if (q.includes('skill') || q.includes('technolog') || q.includes('python') || q.includes('stack') || q.includes('tool') || q.includes('language')) {
      return "Niranjan's Tech Stack includes:\n• Languages & Core: Python, SQL, R (tidyverse, ggplot2), HTML/CSS, JavaScript\n• AI & ML: Machine Learning, Deep Learning, Predictive Analytics, GenAI\n• Tools & Cloud: RStudio, Jupyter, VSCode, Git, Power BI, Firebase, Google Colab";
    }

    // Education & Scores
    if (q.includes('education') || q.includes('degree') || q.includes('college') || q.includes('study') || q.includes('gpa') || q.includes('score') || q.includes('rvs')) {
      return "Niranjan is pursuing his Bachelor of Science in AI & Machine Learning (2024–2027, Aggregate: 75.3%) at RVS College of Arts & Science, Coimbatore. He completed HSC (71.2%) and SSLC (77.2%) at Annai Matriculation Higher Sec School.";
    }

    // Certifications & Events
    if (q.includes('certif') || q.includes('course') || q.includes('aws') || q.includes('google') || q.includes('simplilearn') || q.includes('award') || q.includes('achievement')) {
      return "Niranjan holds 6 professional certifications:\n1. AWS Academy Graduate: Generative AI & Cloud Foundations\n2. Google Gemini AI Workflow\n3. Simplilearn ML with Python\n4. FreeAcademy AI Essentials\n5. Unstop Cloud Computing\n6. HP LIFE AI for Business\n🏆 Event Highlights: Java Premier League & Young Innovators Ideathon!";
    }

    // Contact
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('hire') || q.includes('reach') || q.includes('location')) {
      return "You can reach Niranjan via:\n• Email: 1u24ai024.niranjan@gmail.com\n• Phone: +91 6374515328\n• LinkedIn: linkedin.com/in/niranjan-anandan\n• GitHub: github.com/niranjananandan";
    }

    // General Bio
    return "Niranjan Anandan is a detail-oriented AI & ML specialist skilled in Python, SQL, predictive modeling, and building intelligent web applications. Feel free to ask about any of his projects, skills, or resume!";
  };

  const handleSend = (textToSend?: string) => {
    const query = textToSend || inputMsg;
    if (!query.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: 'user',
      text: query
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMsg('');

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        sender: 'bot',
        text: generateAnswer(query)
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 400);
  };

  return (
    <div className="ai-chat-widget">
      {/* Floating Toggle Button */}
      <button 
        className="ai-chat-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle AI Assistant Chat"
      >
        <Bot size={22} color="var(--primary-color)" />
        <span className="toggle-text">Ask AI</span>
        <span className="glow-ping"></span>
      </button>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="ai-chat-modal glass-card"
          >
            {/* Header */}
            <div className="chat-header">
              <div className="chat-header-info">
                <div className="bot-avatar">
                  <Bot size={18} color="var(--primary-color)" />
                </div>
                <div>
                  <h4 className="bot-title">Niranjan's AI Assistant</h4>
                  <span className="bot-status"><Sparkles size={12} color="var(--primary-color)" /> Powered by AI Profile Engine</span>
                </div>
              </div>
              <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="chat-body">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-message ${msg.sender}`}>
                  <div className="message-content">
                    {msg.text.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="quick-prompts">
              {quickPrompts.map((prompt, i) => (
                <button key={i} className="prompt-chip" onClick={() => handleSend(prompt)}>
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="chat-input-bar">
              <input
                type="text"
                placeholder="Ask about Niranjan's AI background..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button className="send-btn" onClick={() => handleSend()}>
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AiChatWidget;
