import React from 'react';
import { conceptContent, siteConfig } from '../data/content';
import { BlurFade } from './magicui/BlurFade';
import { MessageCircle } from 'lucide-react';
import './Concept.css';

export default function Concept() {
  return (
    <section id="conceito" className="concept">
      <div className="concept__bg-image"></div>
      <div className="concept__overlay"></div>

      <div className="container concept__container">
        <BlurFade inView blur="4px" duration={0.5} delay={0.05} className="concept__card">
          <blockquote className="concept__quote">
            “{conceptContent.quote}”
          </blockquote>

          <p className="concept__text">
            {conceptContent.description}
          </p>

          <div className="concept__cta-wrapper">
            <a 
              href={siteConfig.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary concept__cta-btn"
              aria-label="Converse sobre seu projeto com Monica Almeida"
            >
              <MessageCircle size={18} />
              <span>{conceptContent.ctaText}</span>
            </a>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

