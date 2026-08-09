import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import './ResumeModal.css';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl?: string;
}

const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  resumeUrl = '/Niranjan_Anandan_Resume.pdf',
}) => {
  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="resume-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="resume-modal-container"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="resume-modal-header">
              <div className="resume-modal-title">
                <FileText size={20} className="resume-icon" />
                <span>Niranjan_Anandan_Resume.pdf</span>
              </div>
              <div className="resume-modal-actions">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-action-btn secondary"
                  title="Open in New Tab"
                >
                  <ExternalLink size={16} />
                  <span>Fullscreen</span>
                </a>
                <a
                  href={resumeUrl}
                  download="Niranjan_Anandan_Resume.pdf"
                  className="resume-action-btn primary"
                  title="Download Resume PDF"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>
                <button
                  className="resume-close-btn"
                  onClick={onClose}
                  aria-label="Close Resume Preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Viewer Body */}
            <div className="resume-modal-body">
              <object
                data={`${resumeUrl}#toolbar=0&navpanes=0`}
                type="application/pdf"
                className="resume-pdf-object"
              >
                <div className="resume-pdf-fallback">
                  <p>Unable to display PDF directly in your browser.</p>
                  <a
                    href={resumeUrl}
                    download="Niranjan_Anandan_Resume.pdf"
                    className="resume-action-btn primary"
                  >
                    <Download size={18} />
                    <span>Download Resume PDF</span>
                  </a>
                </div>
              </object>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResumeModal;
