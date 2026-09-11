import React from 'react';
import { servicesContent, siteConfig } from '../data/content';
import { MessageCircle } from 'lucide-react';
import './Services.css';

export default function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        {/* Section Header */}
        <div className="services__header">
          <span className="section-tagline">{servicesContent.tagline}</span>
          <h2 className="section-title services__title">{servicesContent.title}</h2>
        </div>

        {/* 3 Pillars Grid */}
        <div className="services__grid">
          {servicesContent.items.map((item) => (
            <div key={item.id} className="service-card">
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
            </div>
          ))}
        </div>

        {/* Mid-page Conversion Banner */}
        <div className="services__cta-banner">
          <div className="services__cta-text">
            <h3 className="services__cta-heading">{servicesContent.ctaHeading}</h3>
            <p className="services__cta-sub">Converse diretamente com a arquiteta sobre suas ideias e necessidades.</p>
          </div>
          <a 
            href={siteConfig.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-whatsapp services__cta-btn"
            aria-label="Converse sobre seu projeto no WhatsApp"
          >
            <MessageCircle size={18} />
            <span>{servicesContent.ctaButtonText}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
