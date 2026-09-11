import React from 'react';
import { servicesContent, siteConfig } from '../data/content';
import { BlurFade } from './magicui/BlurFade';
import { MessageCircle } from 'lucide-react';
import './Services.css';

export default function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        {/* Section Header */}
        <BlurFade inView blur="4px" duration={0.5} delay={0.05} className="services__header">
          <span className="section-tagline">{servicesContent.tagline}</span>
          <h2 className="section-title services__title">{servicesContent.title}</h2>
        </BlurFade>

        {/* 3 Pillars Grid */}
        <div className="services__grid">
          {servicesContent.items.map((item, idx) => (
            <BlurFade 
              key={item.id} 
              inView 
              blur="4px" 
              duration={0.45} 
              delay={0.08 + idx * 0.08}
              className="service-card"
            >
              <div className="service-card__image-container">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="service-card__image"
                  loading="lazy"
                />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{item.title}</h3>
                <p className="service-card__description">{item.description}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        {/* Mid-page Conversion Banner */}
        <BlurFade inView blur="4px" duration={0.5} delay={0.2} className="services__cta-banner">
          <div className="services__cta-text">
            <h3 className="services__cta-heading">{servicesContent.ctaHeading}</h3>
            <p className="services__cta-sub">Converse diretamente com a arquiteta sobre suas ideias e necessidades.</p>
          </div>
          <a 
            href={siteConfig.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary services__cta-btn"
            aria-label="Converse sobre seu projeto no WhatsApp"
          >
            <MessageCircle size={18} />
            <span>{servicesContent.ctaButtonText}</span>
          </a>
        </BlurFade>
      </div>
    </section>
  );
}

