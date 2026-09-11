import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

export default function Lightbox({ project, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft' && hasPrev) onPrev();
    if (e.key === 'ArrowRight' && hasNext) onNext();
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!project) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Visualização do projeto em tela cheia">
      <div className="lightbox__backdrop" onClick={onClose}></div>

      {/* Top Bar Controls */}
      <div className="lightbox__topbar">
        <span className="lightbox__counter">
          {project.categoryLabel || project.title}
        </span>
        <button 
          className="lightbox__close-btn" 
          onClick={onClose}
          aria-label="Fechar visualização"
        >
          <X size={26} />
        </button>
      </div>

      {/* Main Content Area */}
      <div className="lightbox__stage">
        {hasPrev && (
          <button 
            className="lightbox__nav-btn lightbox__nav-btn--prev" 
            onClick={onPrev}
            aria-label="Projeto anterior"
          >
            <ChevronLeft size={36} />
          </button>
        )}

        <div className="lightbox__figure">
          <img 
            src={project.image} 
            alt={project.alt || project.title} 
            className="lightbox__image"
          />
          <div className="lightbox__caption">
            <h3 className="lightbox__title">{project.title}</h3>
            {project.description && <p className="lightbox__desc">{project.description}</p>}
          </div>
        </div>

        {hasNext && (
          <button 
            className="lightbox__nav-btn lightbox__nav-btn--next" 
            onClick={onNext}
            aria-label="Próximo projeto"
          >
            <ChevronRight size={36} />
          </button>
        )}
      </div>
    </div>
  );
}
