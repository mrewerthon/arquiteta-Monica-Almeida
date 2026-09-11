import React, { useState } from 'react';
import { portfolioCategories, portfolioProjects, portfolioContent, siteConfig } from '../data/content';
import ParallaxScroll from './ui/ParallaxScroll';
import Lightbox from './Lightbox';
import { BlurFade } from './magicui/BlurFade';
import { MessageCircle, Sparkles } from 'lucide-react';
import './Portfolio.css';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const filteredProjects = activeCategory === 'todos'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeCategory);

  const handleProjectClick = (project, index) => {
    // Encontra o índice correspondente dentro da lista filtrada atual
    const foundIndex = filteredProjects.findIndex((p) => p.id === project.id);
    setSelectedProjectIndex(foundIndex !== -1 ? foundIndex : index);
  };

  const closeLightbox = () => {
    setSelectedProjectIndex(null);
  };

  const handlePrev = () => {
    if (selectedProjectIndex > 0) {
      setSelectedProjectIndex(selectedProjectIndex - 1);
    }
  };

  const handleNext = () => {
    if (selectedProjectIndex < filteredProjects.length - 1) {
      setSelectedProjectIndex(selectedProjectIndex + 1);
    }
  };

  const currentProject = selectedProjectIndex !== null ? filteredProjects[selectedProjectIndex] : null;

  return (
    <section id="projetos" className="section portfolio">
      <div className="container">
        {/* Section Header */}
        <BlurFade inView blur="4px" duration={0.5} delay={0.05} className="portfolio__header">
          <span className="section-tagline">{portfolioContent.tagline}</span>
          <h2 className="section-title portfolio__title">{portfolioContent.title}</h2>
          <p className="portfolio__subtitle">
            {portfolioContent.subtitle}
          </p>
        </BlurFade>

        {/* Filter Categories */}
        <BlurFade inView blur="4px" duration={0.45} delay={0.12} className="portfolio__filters" role="tablist" aria-label="Filtro de categorias de projetos">
          {portfolioCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`portfolio__filter-btn ${activeCategory === cat.id ? 'portfolio__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </BlurFade>

        {/* Parallax Scroll Gallery */}
        {filteredProjects.length > 0 ? (
          <ParallaxScroll
            key={activeCategory} // Permite recalcular os limites suavemente na troca de categoria
            projects={filteredProjects}
            onProjectClick={handleProjectClick}
          />
        ) : (
          <div className="portfolio__empty">
            <Sparkles size={32} className="portfolio__empty-icon" />
            <h3>Novos projetos desta categoria em preparação</h3>
            <p>Solicite o portfólio completo diretamente com Monica Almeida pelo WhatsApp.</p>
            <a 
              href={siteConfig.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary portfolio__empty-cta"
            >
              <MessageCircle size={18} />
              <span>Solicitar portfólio no WhatsApp</span>
            </a>
          </div>
        )}

        {/* Dynamic Lightbox Modal */}
        {selectedProjectIndex !== null && (
          <Lightbox
            project={currentProject}
            onClose={closeLightbox}
            onPrev={handlePrev}
            onNext={handleNext}
            hasPrev={selectedProjectIndex > 0}
            hasNext={selectedProjectIndex < filteredProjects.length - 1}
          />
        )}
      </div>
    </section>
  );
}
