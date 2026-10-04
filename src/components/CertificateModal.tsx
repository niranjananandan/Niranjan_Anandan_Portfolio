import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, Award } from 'lucide-react';
import './ResumeModal.css'; // Reusing the same CSS for identical modal styling

interface CertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
  certificateUrl: string;
  certificateTitle: string;
}

const CertificateModal: React.FC<CertificateModalProps> = ({
  isOpen,
  onClose,
  certificateUrl,
  certificateTitle
}) => {
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

  // Extract filename from URL for download attribute
  const filename = certificateUrl.split('/').pop() || 'certificate.pdf';

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
                <Award size={20} className="resume-icon" />
                <span style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{certificateTitle}</span>
              </div>
              <div className="resume-modal-actions">
                <a
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-action-btn secondary"
                  title="Open in New Tab"
                >
                  <ExternalLink size={16} />
                  <span>Fullscreen</span>
                </a>
                <a
                  href={certificateUrl}
                  download={filename}
                  className="resume-action-btn primary"
                  title="Download Certificate PDF"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>
                <button
                  className="resume-close-btn"
                  onClick={onClose}
                  aria-label="Close Certificate Preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Viewer Body */}
            <div className="resume-modal-body">
              <object
                data={`${certificateUrl}#toolbar=0&navpanes=0`}
                type="application/pdf"
                className="resume-pdf-object"
              >
                <div className="resume-pdf-fallback">
                  <p>Unable to display PDF directly in your browser.</p>
                  <a
                    href={certificateUrl}
                    download={filename}
                    className="resume-action-btn primary"
                  >
                    <Download size={18} />
                    <span>Download Certificate PDF</span>
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

export default CertificateModal;
