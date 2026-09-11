import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Eye, ArrowUpRight } from 'lucide-react';
import './ParallaxScroll.css';

/**
 * ParallaxScroll - Adaptado do Aceternity UI
 * Distribui projetos em colunas com deslocamentos de parallax suaves
 * baseados no scroll da página e integrados à identidade visual da arquiteta.
 */
export function ParallaxScroll({
  projects = [],
  onProjectClick,
  className = '',
}) {
  const containerRef = useRef(null);

  // Monitora o progresso do scroll do elemento na viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Configuração de física suave (spring) para rolagem fluida e editorial
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  // Transformações verticais distintas para cada coluna (Desktop)
  const translateYFirst = useTransform(smoothProgress, [0, 1], [-30, 45]);
  const translateYSecond = useTransform(smoothProgress, [0, 1], [40, -45]);
  const translateYThird = useTransform(smoothProgress, [0, 1], [-20, 35]);

  // Divisão dos projetos em 3 partes equilibradas
  const third = Math.ceil(projects.length / 3);
  const firstPart = projects.slice(0, third);
  const secondPart = projects.slice(third, 2 * third);
  const thirdPart = projects.slice(2 * third);

  const renderCard = (project, globalIndex) => {
    return (
      <article
        key={project.id || globalIndex}
        className="parallax-project-card"
        onClick={() => {
          if (onProjectClick) {
            onProjectClick(project, globalIndex);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (onProjectClick) {
              onProjectClick(project, globalIndex);
            }
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`Ver fotografia em tamanho ampliado: ${project.title}`}
      >
        <div className="parallax-card__image-container">
          <img
            src={project.image}
            alt={project.alt || project.title}
            className="parallax-card__image"
            loading="lazy"
          />
          <div className="parallax-card__overlay">
            <div className="parallax-card__action-badge">
              <Eye size={16} />
              <span>Ampliar</span>
              <ArrowUpRight size={14} className="parallax-card__arrow" />
            </div>
          </div>
        </div>

        <div className="parallax-card__body">
          {project.categoryLabel && (
            <span className="parallax-card__category">
              {project.categoryLabel}
            </span>
          )}
          <h3 className="parallax-card__title">{project.title}</h3>
          {project.description && (
            <p className="parallax-card__description">{project.description}</p>
          )}
        </div>
      </article>
    );
  };

  return (
    <div
      ref={containerRef}
      className={`parallax-scroll-container ${className}`}
    >
      {/* 3 Colunas com velocidades de parallax distintas */}
      <div className="parallax-scroll-grid">
        {/* Coluna 1 */}
        <motion.div
          style={{ y: translateYFirst }}
          className="parallax-scroll-column parallax-col-1"
        >
          {firstPart.map((project, idx) =>
            renderCard(project, idx)
          )}
        </motion.div>

        {/* Coluna 2 */}
        <motion.div
          style={{ y: translateYSecond }}
          className="parallax-scroll-column parallax-col-2"
        >
          {secondPart.map((project, idx) =>
            renderCard(project, third + idx)
          )}
        </motion.div>

        {/* Coluna 3 */}
        <motion.div
          style={{ y: translateYThird }}
          className="parallax-scroll-column parallax-col-3"
        >
          {thirdPart.map((project, idx) =>
            renderCard(project, 2 * third + idx)
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default ParallaxScroll;
