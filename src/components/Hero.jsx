import React from 'react';
import { heroContent, siteConfig } from '../data/content';
import { MessageCircle, ArrowDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projetos');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="hero">
      {/* Background with Real Architectural Image */}
      <div className="hero__media-wrapper">
        <img 
          src={heroContent.bgImage} 
          alt="Projeto de arquitetura de interiores com iluminação acolhedora e marcenaria"
          className="hero__image"
          loading="eager"
          fetchPriority="high"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          {/* Main Title */}
          <h1 className="hero__title">
            Espaços com alma,<br />
            <span className="hero__title-accent">luz e afeto.</span>
          </h1>

          {/* Subtitle */}
          <p className="hero__subtitle">
            {heroContent.subtitle}
          </p>

          {/* Actions */}
          <div className="hero__actions">
            <a 
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary hero__cta-primary"
              aria-label="Converse com Monica Almeida pelo WhatsApp"
            >
              <MessageCircle size={18} />
              <span>{heroContent.primaryCtaText}</span>
            </a>

            <a 
              href="#projetos"
              onClick={handleScrollToProjects}
              className="btn btn-outline-white hero__cta-secondary"
            >
              <span>{heroContent.secondaryCtaText}</span>
              <ArrowDown size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
