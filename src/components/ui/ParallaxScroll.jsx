import React, { useRef, useSyncExternalStore } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { BlurFade } from '../magicui/BlurFade';
import './ParallaxScroll.css';

function subscribeDesktop(callback) {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(min-width: 768px)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getDesktopSnapshot() {
  if (typeof window === 'undefined') return true;
  return window.matchMedia('(min-width: 768px)').matches;
}

function getDesktopServerSnapshot() {
  return true;
}

/**
 * ParallaxScroll - Adaptado do Aceternity UI com Blur Fade no Mobile
 * - No Desktop (>= 768px): Colunas com efeito Parallax contínuo.
 * - No Mobile (< 768px): Parallax desativado; alinhamento natural com Blur Fade individual.
 * - Design simplificado e editorial com foco protagonista nas fotografias.
 */
export function ParallaxScroll({
  projects = [],
  onProjectClick,
  className = '',
}) {
  const containerRef = useRef(null);
  const isDesktop = useSyncExternalStore(subscribeDesktop, getDesktopSnapshot, getDesktopServerSnapshot);

  // Monitora o progresso do scroll do elemento na viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Física suave para rolagem editorial no desktop
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  // Transformações verticais para cada coluna no desktop
  const translateYFirst = useTransform(smoothProgress, [0, 1], [-30, 45]);
  const translateYSecond = useTransform(smoothProgress, [0, 1], [40, -45]);
  const translateYThird = useTransform(smoothProgress, [0, 1], [-20, 35]);

  // Divisão dos projetos em 3 partes equilibradas
  const third = Math.ceil(projects.length / 3);
  const firstPart = projects.slice(0, third);
  const secondPart = projects.slice(third, 2 * third);
  const thirdPart = projects.slice(2 * third);

  const renderCard = (project, globalIndex) => {
    const cardElement = (
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
            <span className="parallax-card__overlay-hint">Ampliar imagem</span>
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

    // No mobile, aplica BlurFade suave individual aos cards
    if (!isDesktop) {
      return (
        <BlurFade
          key={project.id || globalIndex}
          inView={true}
          blur="4px"
          duration={0.45}
          delay={0.06}
          offset={10}
        >
          {cardElement}
        </BlurFade>
      );
    }

    return cardElement;
  };

  return (
    <div
      ref={containerRef}
      className={`parallax-scroll-container ${isDesktop ? 'is-desktop' : 'is-mobile'} ${className}`}
    >
      {isDesktop ? (
        /* Modo Desktop: 3 Colunas com velocidades de parallax distintas */
        <div className="parallax-scroll-grid">
          <motion.div
            style={{ y: translateYFirst }}
            className="parallax-scroll-column parallax-col-1"
          >
            {firstPart.map((project, idx) => renderCard(project, idx))}
          </motion.div>

          <motion.div
            style={{ y: translateYSecond }}
            className="parallax-scroll-column parallax-col-2"
          >
            {secondPart.map((project, idx) => renderCard(project, third + idx))}
          </motion.div>

          <motion.div
            style={{ y: translateYThird }}
            className="parallax-scroll-column parallax-col-3"
          >
            {thirdPart.map((project, idx) =>
              renderCard(project, 2 * third + idx)
            )}
          </motion.div>
        </div>
      ) : (
        /* Modo Mobile: Lista vertical perfeitamente alinhada e fluida sem translateY */
        <div className="parallax-mobile-grid">
          {projects.map((project, idx) => renderCard(project, idx))}
        </div>
      )}
    </div>
  );
}

export default ParallaxScroll;
